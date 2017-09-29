import abc
import time
import threading
import vlc
from players.PlayerAdapter import PlayerAdapter

class VlcPlayerAdaptor(object):
    
    def __init__(self, source):
        super(VlcPlayerAdaptor, self).__init__(source)
        self.instance = Instance([])
        self.player = self.instance.media_player_new()
        self.media = None
        

    def load(self, source, pause=False):
        self.media = self.instance.media_new(source)
        self.player.set_media(media)
        if not pause:
            self.player.play()
   
    def can_control(self):
        return True

    def can_go_next(self):
        pass

    def can_go_previous(self):
        pass

    def can_pause(self):
        pass

    def can_play(self):
        pass

    def can_quit(self):
        pass

    def can_seek(self):
        pass

    def can_set_fullscreen(self):
        pass
    

    def duration(self):
        return this.media.get_duration()

    def get_source(self):
        return self.

    def identity(self):
        pass

    def is_playing(self):
        pass

    def maximum_rate(self):
        pass

    def minimum_rate(self):
        pass

    def playback_status(self):
        pass

    def position(self):
        return self.player.position()

    def volume(self):
        pass

    def rate(self):
        return self.player.get_rate()

    def fullscreen(self):
        pass
    
    #actions
    def action(self, code):
        pass

    def mute(self):
        pass

    def unmute(self):
        pass

    def pause(self):
        pass

    def play(self):
        pass

    def play_pause(self):
        pass

    def stop(self):
        pass

    def quit(self):
        pass

    def seek(self, relative_position):
        pass

    def set_alpha(self):
        pass

    def set_aspect_mode(self):
        pass

    def set_position(self):
        pass

    def set_video_crop(self):
        pass

    def set_video_pos(self):
        pass

    def set_volume(self, volume):
        pass
