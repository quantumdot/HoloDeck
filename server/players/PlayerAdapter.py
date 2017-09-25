import abc
import time
import threading

class PlayerAdapter(object):
    __metaclass__ = abc.ABCMeta
    """ Mock OMXPlayer for use during development, particularly on machines where 
        OMXPlayer is not readily available (i.e. windows).
        
        The mock player attempts to keep some basic state with a similar API.
        The following abilities are present:
            - play/pause/stop with position/duration and state tracking
            - volume control
            - playback rate
    """
    
    def __init__(self):
        pass
    
    @abc.abstractmethod
    def load(self, source, pause=False):    
        pass
    @abc.abstractmethod   
    def can_control(self):
        pass
    @abc.abstractmethod
    def can_go_next(self):
        pass
    @abc.abstractmethod
    def can_go_previous(self):
        pass
    @abc.abstractmethod
    def can_pause(self):
        pass
    @abc.abstractmethod
    def can_play(self):
        pass
    @abc.abstractmethod
    def can_quit(self):
        pass
    @abc.abstractmethod
    def can_seek(self):
        pass
    @abc.abstractmethod
    def can_set_fullscreen(self):
        pass
    
    @abc.abstractmethod
    def duration(self):
        pass
    @abc.abstractmethod
    def get_source(self):
        pass
    @abc.abstractmethod
    def identity(self):
        pass
    @abc.abstractmethod
    def is_playing(self):
        pass
    @abc.abstractmethod
    def maximum_rate(self):
        pass
    @abc.abstractmethod
    def minimum_rate(self):
        pass
    @abc.abstractmethod
    def playback_status(self):
        pass
    @abc.abstractmethod
    def position(self):
        pass
    @abc.abstractmethod
    def volume(self):
        pass
    @abc.abstractmethod
    def rate(self):
        pass
    @abc.abstractmethod
    def fullscreen(self):
        pass
    
    #actions
    @abc.abstractmethod
    def action(self, code):
        pass
    @abc.abstractmethod
    def mute(self):
        pass
    @abc.abstractmethod
    def unmute(self):
        pass
    @abc.abstractmethod
    def pause(self):
        pass
    @abc.abstractmethod
    def play(self):
        pass
    @abc.abstractmethod
    def play_pause(self):
        pass
    @abc.abstractmethod
    def stop(self):
        pass
    @abc.abstractmethod
    def quit(self):
        pass
    @abc.abstractmethod
    def seek(self, relative_position):
        pass
    @abc.abstractmethod
    def set_alpha(self):
        pass
    @abc.abstractmethod
    def set_aspect_mode(self):
        pass
    @abc.abstractmethod
    def set_position(self):
        pass
    @abc.abstractmethod
    def set_video_crop(self):
        pass
    @abc.abstractmethod
    def set_video_pos(self):
        pass
    @abc.abstractmethod
    def set_volume(self, volume):
        pass
