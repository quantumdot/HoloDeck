




class VideoManager(object):
    
    def __init__(self):
        pass
    
    def get_status(self):
        return PlayerStatus()
    
    def set_source(self, VideoSource):
        pass
#end class VideoManager


class PlayerStatus(object):
    
    def __init__(self):
        self.x = 0
        self.y = 1
        self.z = 2
        
    def serialize(self):  
        return {           
            'x': self.x, 
            'y': self.y,
            'z': self.z
        }

class VideoSource(object):
    
    def __init__(self, name, source):
        self.name = name
        self.source = source
#end class VideoSource