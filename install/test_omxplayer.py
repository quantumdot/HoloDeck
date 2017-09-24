from omxplayer.player import OMXPlayer

p = OMXPlayer('/home/pi/HoloDeck/server/assets/d3Eelj9Pkvw.mp4')

try:
    print "can_control"
    p.can_control()
except:
    print "FAILED!"

try:
    print "can_go_next"
    p.can_go_next()
except:
    print "FAILED!"

try:    
    print "can_go_previous"
    p.can_go_previous()
except:
    print "FAILED!"

try:    
    print "can_pause"
    p.can_pause()
except:
    print "FAILED!"

try:    
    print "can_play"
    p.can_play()
except:
    print "FAILED!"

try:    
    print "can_quit"
    p.can_quit()
except:
    print "FAILED!"

try:    
    print "can_seek"
    p.can_seek()
except:
    print "FAILED!"

try:    
    print "can_set_fullscreen"
    p.can_set_fullscreen()
except:
    print "FAILED!"

try:    
    print "maximum_rate"
    p.maximum_rate()
except:
    print "FAILED!"

try:    
    print "minimum_rate"
    p.minimum_rate()
except:
    print "FAILED!"

try:    
    print "get_source"
    p.get_source()
except:
    print "FAILED!"

try:    
    print "is_playing"
    p.is_playing()
except:
    print "FAILED!"

try:    
    print "playback_status"
    p.playback_status()
except:
    print "FAILED!"

try:    
    print "duration"
    p.duration()
except:
    print "FAILED!"

try:    
    print "position"
    p.position()
except:
    print "FAILED!"

try:    
    print "rate"
    p.rate()
except:
    print "FAILED!"

try:    
    print "fullscreen"
    p.fullscreen()
except:
    print "FAILED!"

try:    
    print "volume"
    p.volume()
except:
    print "FAILED!"


