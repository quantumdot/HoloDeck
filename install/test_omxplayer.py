from omxplayer.player import OMXPlayer

p = OMXPlayer('/home/pi/HoloDeck/server/assets/d3Eelj9Pkvw.mp4')


calls = [
    #getters
    {'method': 'aspect_ratio', 'args': [], 'expect': None },
    {'method': 'can_control', 'args': [], 'expect': None },
    {'method': 'can_go_next', 'args': [], 'expect': None },
    {'method': 'can_go_previous', 'args': [], 'expect': None },
    {'method': 'can_pause', 'args': [], 'expect': None },
    {'method': 'can_play', 'args': [], 'expect': None },
    {'method': 'can_quit', 'args': [], 'expect': None },
    {'method': 'can_raise', 'args': [], 'expect': None },
    {'method': 'can_seek', 'args': [], 'expect': None },
    {'method': 'can_set_fullscreen', 'args': [], 'expect': None },
    {'method': 'duration', 'args': [], 'expect': None },
    {'method': 'fullscreen', 'args': [], 'expect': None },
    {'method': 'get_filename', 'args': [], 'expect': None },
    {'method': 'get_source', 'args': [], 'expect': None },
    {'method': 'has_track_list', 'args': [], 'expect': None },
    {'method': 'height', 'args': [], 'expect': None },
    {'method': 'identity', 'args': [], 'expect': None },
    {'method': 'is_playing', 'args': [], 'expect': None },
    {'method': 'list_audio', 'args': [], 'expect': None },
    {'method': 'list_subtitles', 'args': [], 'expect': None },
    {'method': 'list_video', 'args': [], 'expect': None },
    {'method': 'maximum_rate', 'args': [], 'expect': None },
    {'method': 'metadata', 'args': [], 'expect': None },
    {'method': 'minimum_rate', 'args': [], 'expect': None },
    {'method': 'playback_status', 'args': [], 'expect': None },
    {'method': 'position', 'args': [], 'expect': None },
    {'method': 'rate', 'args': [], 'expect': None },
    {'method': 'supported_uri_schemes', 'args': [], 'expect': None },
    {'method': 'video_pos', 'args': [], 'expect': None },
    {'method': 'video_stream_count', 'args': [], 'expect': None },
    {'method': 'volume', 'args': [], 'expect': None },
    {'method': 'width', 'args': [], 'expect': None },
    
    #actions
#     {'method': 'hide_subtitles', 'args': [], 'expect': None },
#     {'method': 'hide_video', 'args': [], 'expect': None },
#     {'method': 'load', 'args': [], 'expect': None },
#     {'method': 'mute', 'args': [], 'expect': None },
#     {'method': 'next', 'args': [], 'expect': None },
#     {'method': 'pause', 'args': [], 'expect': None },
#     {'method': 'play', 'args': [], 'expect': None },
#     {'method': 'play_pause', 'args': [], 'expect': None },
#     {'method': 'play_sync', 'args': [], 'expect': None },
#     {'method': 'previous', 'args': [], 'expect': None },
#     {'method': 'quit', 'args': [], 'expect': None },
#     {'method': 'seek', 'args': [], 'expect': None },
#     {'method': 'select_audio', 'args': [], 'expect': None },
#     {'method': 'select_subtitle', 'args': [], 'expect': None },
#     {'method': 'set_alpha', 'args': [], 'expect': None },
#     {'method': 'set_aspect_mode', 'args': [], 'expect': None },
#     {'method': 'set_position', 'args': [], 'expect': None },
#     {'method': 'set_rate', 'args': [], 'expect': None },
#     {'method': 'set_video_crop', 'args': [], 'expect': None },
#     {'method': 'set_video_pos', 'args': [], 'expect': None },
#     {'method': 'set_volume', 'args': [], 'expect': None },
#     {'method': 'show_subtitles', 'args': [], 'expect': None },
#     {'method': 'show_video', 'args': [], 'expect': None },
#     {'method': 'stop', 'args': [], 'expect': None },
#     {'method': 'unmute', 'args': [], 'expect': None },
]

for c in calls:
    #try:
        print "{}({})".format(c['method'], c['args'])
        r = getattr(p, c['method'])(*c['args'])
        print " -> {}".format(r)
    #except:
    #    print " => FAILED! <="







