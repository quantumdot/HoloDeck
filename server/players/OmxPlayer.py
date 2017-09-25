from players.PlayerAdapter import PlayerAdapter
from omxplayer.player import OMXPlayer

class OMXPlayerAdaptor(PlayerAdapter):
    
    
    def __init__(self, source):
        super(OMXPlayerAdaptor, self).__init__(source)
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
        return self.player.can_control()

    def can_go_next(self):
        return self.player.can_go_next()

    def can_go_previous(self):
        return self.player.can_go_previous()

    def can_pause(self):
        return self.player.can_pause()

    def can_play(self):
        return self.player.can_play()

    def can_quit(self):
        return self.player.can_quit()

    def can_seek(self):
        return self.player.can_seek()

    def can_set_fullscreen(self):
        return self.player.can_set_fullscreen()

    
    def duration(self):
        return self.player.duration()

    def get_source(self):
        return self.player.get_source()

    def identity(self):
        return self.player.identity()

    def is_playing(self):
        return self.player.is_playing()

    def maximum_rate(self):
        return self.player.maximum_rate()

    def minimum_rate(self):
        return self.player.minimum_rate()

    def playback_status(self):
        return self.player.playback_status()

    def position(self):
        return self.player.position()

    def volume(self):
        return self.player.volume()

    def rate(self):
        return self.player.rate()

    def fullscreen(self):
        return self.player.fullscreen()

    
    #actions
    def action(self, code):
        return self.player.action(code)

    def mute(self):
        return self.player.mute()

    def unmute(self):
        return self.player.unmute()

    def pause(self):
        return self.player.pause()

    def play(self):
        return self.player.play()

    def play_pause(self):
        return self.player.play_pause()

    def stop(self):
        return self.player.stop()

    def quit(self):
        return self.player.quit()

    def seek(self, relative_position):
        return self.player.seek(relative_position)

    def set_alpha(self):
        return self.player.set_alpha()

    def set_aspect_mode(self):
        return self.player.set_aspect_mode()

    def set_position(self):
        return self.player.set_position()

    def set_video_crop(self):
        return self.player.set_video_crop()

    def set_video_pos(self):
        return self.player.set_video_pos()

    def set_volume(self, volume):
        return self.player.set_volume(volume)