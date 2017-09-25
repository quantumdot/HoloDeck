from players.PlayerAdapter import PlayerAdapter
from omxplayer.player import OMXPlayer

class OMXPlayer(PlayerAdapter):
    
    
    def __init__(self, source):
        super(OMXPlayer, self).__init__(source)
        self.player = None
        
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