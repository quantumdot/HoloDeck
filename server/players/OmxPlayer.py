from players.PlayerAdapter import PlayerAdapter
from omxplayer.player import OMXPlayer

class OMXPlayerAdaptor(PlayerAdapter):
    
    
    def __init__(self, source):
        super(OMXPlayer, self).__init__(source)
        self.player = None
        self.load(source)
        
    def load(self, source, pause=False):    
        if self.player is None:
            self.player = OMXPlayer(source)
        else:
            self.player.load(source, pause)
            
    
    def __getitem__(self, attr):
        sys.stderr.write('getting attribute {} from player'.format(attr))
        try:
            return getattr(self.player, attr)()
        except BaseException as e:
            sys.stderr.write('Error trying to get attribute {} from player!\n{}\n'.format(attr, str(e)))
            
    
    def can_control(self):
        self.player.can_control()

    def can_go_next(self):
        self.player.can_go_next()

    def can_go_previous(self):
        self.player.can_go_previous()

    def can_pause(self):
        self.player.can_pause()

    def can_play(self):
        self.player.can_play()

    def can_quit(self):
        self.player.can_quit()

    def can_seek(self):
        self.player.can_seek()

    def can_set_fullscreen(self):
        self.player.can_set_fullscreen()

    
    def duration(self):
        self.player.duration()

    def get_source(self):
        self.player.get_source()

    def identity(self):
        self.player.identity()

    def is_playing(self):
        self.player.is_playing()

    def maximum_rate(self):
        self.player.maximum_rate()

    def minimum_rate(self):
        self.player.minimum_rate()

    def playback_status(self):
        self.player.playback_status()

    def position(self):
        self.player.position()

    def volume(self):
        self.player.volume()

    def rate(self):
        self.player.rate()

    def fullscreen(self):
        self.player.fullscreen()

    
    #actions
    def action(self, code):
        self.player.action(code)

    def mute(self):
        self.player.mute()

    def unmute(self):
        self.player.unmute()

    def pause(self):
        self.player.pause()

    def play(self):
        self.player.play()

    def play_pause(self):
        self.player.play_pause()

    def stop(self):
        self.player.stop()

    def quit(self):
        self.player.quit()

    def seek(self, relative_position):
        self.player.seek(relative_position)

    def set_alpha(self):
        self.player.set_alpha()

    def set_aspect_mode(self):
        self.player.set_aspect_mode()

    def set_position(self):
        self.player.set_position()

    def set_video_crop(self):
        self.player.set_video_crop()

    def set_video_pos(self):
        self.player.set_video_pos()

    def set_volume(self, volume):
        self.player.set_volume(volume)
