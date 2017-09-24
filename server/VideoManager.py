import sys
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
    sys.stderr.write('loading MockOMXPlayer Interface because dbus was not found...')
    from MockOMXPlayer import MockOMXPlayer as OMXPlayer
else:
    from omxplayer.player import OMXPlayer


class PlayerStatus(object):
    
    def __init__(self, player, currentMedia):
        self.player = player
        self.currentMedia = currentMedia
    
    def __getitem__(self, attr):
        sys.stderr.write('getting attribute {} from player'.format(attr))
        try:
            return getattr(self.player, attr)()
        except BaseException as e:
            sys.stderr.write('Error trying to get attribute {} from player!\n{}\n'.format(attr, str(e)))
    
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


class VideoManager(object):
    
    def __init__(self, library):
        self.library = library
        self.player = None
        self.currentItem = None
        self.set_source(self.library.items[0])
    
    def get_status(self):
        return PlayerStatus(self.player, self.currentItem)

    def set_source(self, video_source):
        self.currentItem = video_source
        if self.player is None:
            self.player = OMXPlayer(video_source.source)
        else:
            self.player.load(video_source.source)
        
    def toggle_mute(self):
        status = self.get_status()
        if status["volume"] == 0:
            self.player.unmute()
        else:
            self.player.mute()
#end class VideoManager









