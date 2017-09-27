import sys
import json
import glob
import time
import pafy
import threading
import subprocess
from conf import ffmpeg_path
from VideoLibrary import VideoSource


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
        self.vfname = ""
        self.thumbs = []
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
            self.progress.task = "success"
            time.sleep(3)
            #del DownloadHelper.processes[self.id]
            
        except BaseException as e:
            self.progress.task = "failure"
            self.progress.help = str(e)
            
        finally:
            self.__callback(self)
            self.progress.complete = True

    def download(self):
        self.progress.task = "download"
        self.video = pafy.new("https://www.youtube.com/watch?v={}".format(self.id))
        best = self.video.getbest()
        self.vfname = "assets/{}.{}".format(self.id, best.extension)
        best.download(filepath=self.vfname, quiet=True, callback=self._update_progress)
    
    
    def extract_thumbs(self):
        self.progress.task = "thumbnail"
        duration = self.__to_seconds(self.video.duration)
        self.progress.total = int(duration * 0.2)
        self.progress.recieved = 0
        self.progress.ratio = 0
        args = [
            ffmpeg_path,
            '-i', self.vfname,
            '-vf', 'fps=1/5',
            'assets/{}_%03d.png'.format(self.id)
        ]
        sys.stderr.write(" ".join(args))
        sys.stderr.flush()
        p = subprocess.Popen(args)
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




