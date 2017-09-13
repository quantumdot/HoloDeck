import time
import threading

class MockOMXPlayer(object):
    
    def __init__(self):
        self._duration = 300.0
        self._position = 0
        self._state = 1 # 0: stop; 1: play; 2: pause;
        self._statemap = ['Stopped', 'Playing', 'Paused']
        
        thread = threading.Thread(target=self.__run_background, args=())
        thread.daemon = True
        thread.start()
        
    def __run_background(self):
        while(True):
            time.sleep(1)
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
        return 25.0
    
    #actions
    def action(self, code):
        return None
    def mute(self):
        return None
    def unmute(self):
        return None
    def pause(self):
        this._state = 2
    def play(self):
        this._state = 1
    def play_pause(self):
        if this._state == 1:
            this._state = 2
        else:
            this._state = 1
    def stop(self):
        this._state = 0
    def quit(self):
        return None
    def seek(self):
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
    def set_volume(self):
        return None
