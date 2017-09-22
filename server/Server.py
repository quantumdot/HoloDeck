import sys
import json
import time
import logging
import argparse

from gevent import pywsgi, sleep as sock_sleep
from geventwebsocket.handler import WebSocketHandler
from flask import Flask, request, Response, jsonify, send_from_directory, stream_with_context
from flask_sockets import Sockets
from flask_cors import CORS, cross_origin

from VideoManager import VideoManager
from VideoLibrary import VideoLibrary
from DownloadHelper import DownloadHelper


logger = logging.getLogger('HoloServe')



app = Flask(__name__)
CORS(app)
app.config['SECRET_KEY'] = 'secret!'
sockets = Sockets(app)
vid_library = VideoLibrary('conf/assets.json')
vid_manager = VideoManager()
vid_manager.set_source(vid_library.items[0])

@app.route('/')
@app.route('/<path:path>')
def home(path="index.html"):
    sys.stderr.write("Requested /client/{}\n".format(path))
    return send_from_directory('../client/dist/', path)

@app.route('/assets/<path:path>')
def send_assets(path):
    sys.stderr.write("Requested /assets/{}\n".format(path))
    return send_from_directory('assets', path)


@app.route('/getmediaitems')
def handle_getmediaitems():
    sys.stderr.write("Requested getmediaitems\n")
    return jsonify([itm.serialize() for itm in vid_library.items])

@app.route('/playitem/<int:id>', )
def handle_playrequest(id):
    sys.stderr.write("Requested /playitem/{}\n".format(id))
    itm = vid_library.find_id(id)
    if itm is not None:
        vid_manager.set_source(itm)
        return jsonify({'success':True})
    return jsonify({'success':False, 'message': 'Video with id {} not found!'.format(id) })

@app.route('/action/<string:action>', methods=['POST'])
def handle_actionrequest(action):
    sys.stderr.write("Requested /action/{} with args ({})\n".format(action, request.data))
    try:
        data = list(json.loads(request.data))
        if hasattr(vid_manager, action) and callable(getattr(vid_manager, action)):
            sys.stderr.write("  -> Caught by VideoManager\n")
            getattr(vid_manager, action)(*data)
            return jsonify({'success':True})
        
        elif hasattr(vid_manager.player, action) and callable(getattr(vid_manager.player, action)):
            sys.stderr.write("  -> Caught by OMXPlayer\n")
            getattr(vid_manager.player, action)(*data)
            return jsonify({'success':True})
    
        else:
            raise ValueError('Action {} is not valid!'.format(action))
    except BaseException as e:
        return jsonify({'success':False, 'message': str(e) })



@app.route('/addmedia/<string:video_id>')
def handle_addmedia(video_id):
    sys.stderr.write("Requested /addmedia/{}\n".format(video_id))
    helper = DownloadHelper(video_id)
    def add_cbk(d):
        vid_library.add_source(d.create_source())
    helper.run(add_cbk)
    return jsonify({'success':True}) 

@app.route('/addmediaprogress/<string:video_id>')
def handle_addmediaprogress(video_id):
    try:
        return jsonify(DownloadHelper.processes[video_id].progress.serialize())
    except:
        return jsonify({'success':False, 'message': str(e) })
    
@sockets.route('/status')
def update_player_status(socket):
    try:
        sys.stderr.write("Requested status socket....\n")
        while not socket.closed:
            #sys.stderr.write("Sending status....\n")
            socket.send(json.dumps(vid_manager.get_status().serialize()))
            sock_sleep(0.5)
    except BaseException as e:
        sys.stderr.write("SOCKET ERROR: {}\n".format(str(e)))


@app.route('/wifi/connect', methods=['POST'])
def handle_wifi_connect():
    try:
        from wifi import Cell, Scheme
        data = json.loads(request.data)
        s = Scheme.find('wlan0', data.ssid) 
        if s is None:
            s = Scheme.for_cell('wlan0', Cell.where('wlan0', lambda c: c.ssid == ssid), data.pswd)
            s.save()
        s.activate()
        return jsonify({'success':True})
    except BaseException as e:
        return jsonify({'success':False, 'message': str(e) }) 
        

@app.route('/wifi/forget', methods=['POST'])
def handle_wifi_forget():
    try:
        from wifi import Cell, Scheme
        data = json.loads(request.data)
        s = Scheme.find('wlan0', data.ssid) 
        if s is not None:
            s.delete()
            return jsonify({'success':True})
        else:
            raise ValueError("Could not find ssid {}".format(data.ssid))
    except BaseException as e:
        return jsonify({'success': False, 'message': str(e) }) 
    
@app.route('/wifi/list')
def handle_wifilist():
    items = [
        {
            'ssid': "ssid1",
            'signal': "signal",
            'quality': "quality",
            'frequency': "frequency",
            'bitrates': "bitrates",
            'encrypted': True,
            'channel': 1,
            'address': "address",
            'mode': "WPA",
            'encryption_type': "WPA"
        },
        {
            'ssid': "ssid2",
            'signal': "signal",
            'quality': "quality",
            'frequency': "frequency",
            'bitrates': "bitrates",
            'encrypted': True,
            'channel': 1,
            'address': "address",
            'mode': "WPA",
            'encryption_type': "WPA"
        }    
        
    ]
    return jsonify(items)
    #import wifi_helper
    #from wifi import Cell
    #cells = Cell.all('wlan0')
    #return jsonify([wifi_helper.serialize_cell(c) for c in cells])







if __name__ == "__main__":
    sys.stderr.write("Starting server...\n")

    parser = argparse.ArgumentParser()
    parser.add_argument('--host', default="0.0.0.0", help="hostname to run the server on")
    parser.add_argument('--port', type=int, default=5000, help="Port to listen on")
    parser.add_argument('--debug', action='store_true', help="Enable debug mode on the server")
    args = parser.parse_args()
    
    app.debug = args.debug
    server = pywsgi.WSGIServer((args.host, args.port), app, handler_class=WebSocketHandler)
    
    sys.stderr.write("Server listening on {} port {}\n".format(args.host, args.port))
    server.serve_forever()