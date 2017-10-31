from players.PlayerAdapter import PlayerAdapter
from omxplayer.player import OMXPlayer
import logging

class OMXPlayerAdaptor(PlayerAdapter):
    
    
    def __init__(self, source):
        super(OMXPlayerAdaptor, self).__init__(source)
        self.player = None
        self.load(source)
    
    @staticmethod
    def GetPlayerArgs():
        return  ['--loop', '--adev', 'alsa']
        
    def load(self, source, pause=False):    
        if self.player is None:
            self.player = OMXPlayer(source, OMXPlayerAdaptor.GetPlayerArgs())
        else:
            self.player.load(source, pause)
            
    
    def __getitem__(self, attr):
        logging.debug('getting attribute {} from player'.format(attr))
        try:
            return getattr(self.player, attr)()
        except BaseException as e:
            logging.error('Error trying to get attribute {} from player!\n{}'.format(attr, str(e)))
            
    
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
        return 10**(self.player.volume() / 2000.0) #mdB -> pct
        #return self.player.volume()

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
        #return self.player.seek(relative_position)
        self.set_position(self.position() + relative_position)

    def set_alpha(self):
        return self.player.set_alpha()

    def set_aspect_mode(self):
        return self.player.set_aspect_mode()

    def set_position(self, position):
        return self.player.set_position(position)

    def set_video_crop(self, x1, y1, x2, y2):
        return self.player.set_video_crop(x1, y1, x2, y2)

    def set_video_pos(self, x1, y1, x2, y2):
        return self.player.set_video_pos(x1, y1, x2, y2)

    def set_volume(self, volume):
        v = 2000.0 * math.log(volume, 10)
        logging.debug("Setting volume to {}".format(v))
        return self.player.set_volume(v)
