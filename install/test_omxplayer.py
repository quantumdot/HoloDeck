from omxplayer.player import OMXPlayer

p = OMXPlayer('/home/pi/HoloDeck/server/assets/d3Eelj9Pkvw.mp4')

print "control"
p.can_control()

print "go_next"
p.can_go_next()

print "go_previous"
p.can_go_previous()

print "pause"
p.can_pause()

print "play"
p.can_play()

print "quit"
p.can_quit()

print "seek"
p.can_seek()

print "set_fullscreen"
p.can_set_fullscreen()

print "maximum_rate"
p.maximum_rate()

print "minimum_rate"
p.minimum_rate()

print "source"
p.get_source()

print "is_playing"
p.is_playing()

print "playback_status"
p.playback_status()

print "duration"
p.duration()

print "position"
p.position()

print "rate"
p.rate()

print "fullscreen"
p.fullscreen()

print "volume"
p.volume()


