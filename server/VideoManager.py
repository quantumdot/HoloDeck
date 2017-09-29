import os
import sys
import glob
import logging
from VideoLibrary import VideoSource

def module_exists(mod):
    import imp
    try:
        imp.find_module(mod)
        found = True
    except ImportError:
        found = False
    return found
#end module_exists()

if not module_exists('dbus'):
    logging.warn('loading MockOMXPlayer Interface because dbus was not found...')
    from players.MockOMXPlayer import MockOMXPlayerAdaptor as Player
else:
    from players.OmxPlayer import OMXPlayerAdaptor as Player



def to_int_or_default(value, default=0):
    try:
        return int(value)
    except:
        return default


class PlayerStatus(object):
    
    def __init__(self, player, currentMedia):
        self.player = player
        self.currentMedia = currentMedia
    
    def __getitem__(self, attr):
        logging.debug('getting attribute {} from player'.format(attr))
        try:
            return getattr(self.player, attr)()
        except BaseException as e:
            logging.error('Error trying to get attribute {} from player!\n{}\n'.format(attr, str(e)))
    
    def serialize(self):
        if self.player is None:
            return self.empty()
        else:
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
                "duration": to_int_or_default(self.player.duration(), 1),
                "position": to_int_or_default(self.player.position(), 0),
                "rate": self.player.rate(),
                "fullscreen": self.player.fullscreen(),
                "volume": self.player.volume()
            }
    #end serialize()
    
    def empty(self):
        return {
            "able": {
                "control": True,
                "go_next": True,
                "go_previous": True,
                "pause": True,
                "play": True,
                "quit": True,
                "seek": True,
                "set_fullscreen": True,
                "maximum_rate": 1,
                "minimum_rate": 1
            },
            "media": VideoSource.empty(),
            # "source": self.player.get_source(),
            "is_playing": False,
            "playback_status": 'Stopped',
            "duration": 1,
            "position": 0,
            "rate": 1,
            "fullscreen": True,
            "volume": 0
        }
#end PlayerStatus()


class VideoManager(object):
    
    def __init__(self, library):
        self.library = library
        self.player = None
        self.currentItem = None
        #self.set_source(self.library.items[0])
    
    def get_status(self):
        return PlayerStatus(self.player, self.currentItem)

    def set_source(self, video_source):
        self.currentItem = video_source
        try:
            logging.debug('attempting to load {}\n'.format(video_source.source))
            if self.player is None:
                self.player = Player(video_source.source)
            else:
                self.player.load(video_source.source)
        except SystemError:
            logging.error("SystemError: {}".format(str(e)))
            #for f in glob.glob('/tmp/omxplayer*'):
            #    os.remove(f)
            #self.set_source(video_source)
        
    def toggle_mute(self):
        status = self.get_status()
        if status["volume"] == 0:
            self.player.unmute()
        else:
            self.player.mute()
#end class VideoManager









