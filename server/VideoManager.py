import json



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
    
    def find_id(self, id):
        for itm in self.items:
            if itm.id == id:
                return itm
        return None
    
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
            },
            "media": self.currentMedia.serialize(),
            "source": self.player.get_source(),
            "identity": self.player.identity(),
            "is_playing": self.player.is_playing(),
            "playback_status": self.player.playback_status(),
            "duration": self.player.duration(),
            "position": self.player.position(),
            "maximum_rate": self.player.maximum_rate(),
            "minimum_rate": self.player.minimum_rate(),
            "volume": self.player.volume()
        }
    #end serialize()
#end PlayerStatus()













