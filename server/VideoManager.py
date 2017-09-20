import sys
import json
import glob
import time
import subprocess
from conf import ffmpeg_path


def module_exists(mod):
    import imp
    try:
        imp.find_module(mod)
        found = True
    except ImportError:
        found = False
#end module_exists()


if not module_exists('dbus'):
    from MockOMXPlayer import MockOMXPlayer as OMXPlayer
else:
    from omxplayer import OMXPlayer



class VideoLibrary(object):
    def __init__(self, manifest):
        self.source = manifest
        self.items = self.__load_items(self.source)
    #end __init__()
    
    def add_source(self, video_source):
        self.items.append(video_source)
        self.save(self.source)
    
    def find_id(self, id):
        for itm in self.items:
            if itm.id == id:
                return itm
        return None
    
    def get_youtube_source(self, video_id):
        return VideoSource.from_source(video_id)
    
    def save(self, manifest):
        with open(manifest, 'w') as mfp:
            json.dump([i.serialize() for i in self.items], mfp, indent=4)
    
    def __load_items(self, manifest):
        with open(manifest, 'r') as mfp:
            data = json.load(mfp)

        items = []
        for itm in data:
            items.append(VideoSource(len(items), 
                                     itm['name'], 
                                     itm['description'],
                                     itm['thumbs'],
                                     itm['source']))
        return items
    #end __load_items()
#end class VidoeLibrary

class VideoSource(object):
    
    def __init__(self, id, name, desc, thumbs, source):
        self.id = id
        self.name = name
        self.description = desc
        self.thumbs = list(thumbs)
        self.source = source
    #end __init__()
    
    @staticmethod
    def from_source(video_id):
        import youtube_helper
        youtube_helper.get_video(video_id)
        
    
    def serialize(self):  
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'thumbs': self.thumbs,
            'source': self.source
        }
    #end serialize()    
#end class VideoSource

class VideoManager(object):
    
    def __init__(self):
        self.player = OMXPlayer()
        self.currentItem = None;
    
    def get_status(self):
        return PlayerStatus(self.player, self.currentItem)

    
    def set_source(self, VideoSource):
        self.currentItem = VideoSource
        self.player.load(VideoSource.source)
        
    def toggle_mute(self):
        status = self.get_status()
        if status["volume"] == 0:
            self.player.unmute()
        else:
            self.player.mute()
#end class VideoManager


class PlayerStatus(object):
    
    def __init__(self, player, currentMedia):
        self.player = player
        self.currentMedia = currentMedia
    
    def __getitem__(self, attr):
        return getattr(self.player, attr)()
    
    def serialize(self):  
        return {
            "able": {
                "control": self.player.can_control(),
                "go_next": self.player.can_go_next(),
                "go_previous": self.player.can_go_previous(),
                "pause": self.player.can_pause(),
                "play": self.player.can_play(),
                "quit": self.player.can_quit(),
                "seek": self.player.can_seek(),
                "set_fullscreen": self.player.can_set_fullscreen(),
                "maximum_rate": self.player.maximum_rate(),
                "minimum_rate": self.player.minimum_rate(),
            },
            "media": self.currentMedia.serialize(),
            # "source": self.player.get_source(),
            "is_playing": self.player.is_playing(),
            "playback_status": self.player.playback_status(),
            "duration": self.player.duration(),
            "position": self.player.position(),
            "rate": self.player.rate(),
            "fullscreen": self.player.fullscreen(),
            "volume": self.player.volume()
        }
    #end serialize()
#end PlayerStatus()

import pafy
import threading
class DownloadProgress(object):
    def __init__(self):
        self.complete = False
        self.task = "Initializing...."
        self.help = ""
        self.total = 0
        self.recieved = 0
        self.ratio = 0
        self.rate = 0
        self.eta = 0
        
    def serialize(self):
        return {
            "complete": self.complete,
            "task": self.task,
            "help": self.help,
            "total": self.total,
            "recieved": self.recieved,
            "ratio": self.ratio,
            "rate": self.rate,
            "eta": self.eta
        }
#end class DownloadProgress

class DownloadHelper(object):
    
    processes = {}
    
    def __init__(self, video_id):
        self.id = video_id
        self.progress = DownloadProgress()
        DownloadHelper.processes[self.id] = self

    @property
    def is_complete(self):
        return self.progress.complete

    def _update_progress(self, total, recvd, ratio, rate, eta):
        self.progress.total = total
        self.progress.recieved = recvd
        self.progress.ratio = ratio
        self.progress.rate = rate
        self.progress.eta = eta

    def run(self, callback):
        self.__callback = callback
        self.__thread = threading.Thread(target=self.__run_background, args=())
        self.__thread.start()
        return 

    def __run_background(self):
        try:
            self.download()
            self.extract_thumbs()
            self.progress.task = "Done!"
            time.sleep(3)
            self.progress.complete = True
            #del DownloadHelper.processes[self.id]
            self.__callback(self)
        except BaseException as e:
            self.progress.help = str(e)

    def download(self):
        self.progress.task = "Downloading...."
        self.video = pafy.new("https://www.youtube.com/watch?v={}".format(self.id))
        best = self.video.getbest()
        self.vfname = "assets/{}.{}".format(self.id, best.extension)
        best.download(filepath=self.vfname, quiet=True, callback=self._update_progress)
    
    
    def extract_thumbs(self):
        self.progress.task = "Generating thumbnails...."
        duration = self.__to_seconds(self.video.duration)
        self.progress.total = int(duration * 0.1)
        self.progress.recieved = 0
        self.progress.ratio = 0
        args = [
            ffmpeg_path,
            '-i', self.vfname,
            '-vf', 'fps=1/10',
            'assets/{}_%03d.png'.format(self.id)
        ]
        sys.stderr.write(" ".join(args))
        sys.stderr.flush()
        p = subprocess.Popen(args, stderr=sys.stderr, stdout=sys.stderr)
        while p.poll() is None:
            self.thumbs = glob.glob('assets/{}_*.png'.format(self.id))
            self.progress.recieved = len(self.thumbs)
            self.progress.ratio = float(self.progress.recieved) / float(self.progress.total)
            time.sleep(0.1)
            
    def __to_seconds(self, timestr):
        seconds= 0
        for part in timestr.split(':'):
            seconds= seconds*60 + int(part)
        return seconds
    
    def create_source(self):
        return VideoSource(self.id, self.video.title, self.video.description, self.thumbs, self.vfname)









