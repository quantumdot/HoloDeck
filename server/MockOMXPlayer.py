import time
import threading

class MockOMXPlayer(object):
    """ Mock OMXPlayer for use during development, particularly on machines where 
        OMXPlayer is not readily available (i.e. windows).
        
        The mock player attempts to keep some basic state with a similar API.
        The following abilities are present:
            - play/pause/stop with position/duration and state tracking
            - volume control
            - playback rate
    """
    
    def __init__(self):
        self._duration = 300.0
        self._position = 0
        self._state = 1 # 0: stop; 1: play; 2: pause;
        self._statemap = ['Stopped', 'Playing', 'Paused']
        self._volume = 25.0
        self._rate = 1
        
        thread = threading.Thread(target=self.__run_background, args=())
        thread.daemon = True
        thread.start()
        
    def __run_background(self):
        while(True):
            time.sleep(1.0 / self._rate)
            if self._state == 1:
                if self._position < self._duration:
                    self._position += 1
                else:
                    self._position = 0
        
    def load(self, source, pause=False):    
        self._position = 0
        
    def can_control(self):
        return True
    def can_go_next(self):
        return True
    def can_go_previous(self):
        return True
    def can_pause(self):
        return self._state == 1
    def can_play(self):
        return not self._state == 1
    def can_quit(self):
        return True
    def can_seek(self):
        return True
    def can_set_fullscreen(self):
        return True
    
    def duration(self):
        return self._duration
    def get_source(self):
        return "video_source"
    def identity(self):
        return True
    def is_playing(self):
        return self._state == 1
    def maximum_rate(self):
        return "max rate"
    def minimum_rate(self):
        return "min rate"
    def playback_status(self):
        return self._statemap[self._state]
    def position(self):
        return self._position
    def volume(self):
        return self._volume
    def rate(self):
        return self._rate
    def fullscreen(self):
        return True
    
    #actions
    def action(self, code):
        return None
    def mute(self):
        self._volume = 0
        return None
    def unmute(self):
        self._volume = 25.0
        return None
    def pause(self):
        self._state = 2
    def play(self):
        self._state = 1
    def play_pause(self):
        if self._state == 1:
            self._state = 2
        else:
            self._state = 1
    def stop(self):
        self._state = 0
    def quit(self):
        return None
    def seek(self, relative_position):
        if self._position + relative_position < 0:
            self._position = 0
        elif self._position + relative_position > self._duration:
            self._position = self._duration
        else:
            self._position += relative_position
        return None
    def set_alpha(self):
        return None
    def set_aspect_mode(self):
        return None
    def set_position(self):
        return None
    def set_video_crop(self):
        return None
    def set_video_pos(self):
        return None
    def set_volume(self, volume):
        self._volume = volume
        return None
