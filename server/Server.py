import sys
from gevent import pywsgi, sleep as sock_sleep
from geventwebsocket.handler import WebSocketHandler
from flask import Flask, Response, jsonify, send_from_directory
import json
from flaskCORS import crossdomain

from flask_sockets import Sockets

import time
from VideoManager import VideoManager, VideoLibrary



app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
sockets = Sockets(app)
vid_library = VideoLibrary('conf/assets.json')
vid_manager = VideoManager()


@app.route('/')
def home():
    return "home2!"

@app.route('/assets/<path:path>')
def send_assets(path):
    sys.stderr.write("Requested /assets/{}\n".format(path))
    return send_from_directory('assets', path)


@app.route('/getmediaitems')
@crossdomain(origin='*')
def handle_getmediaitems():
    sys.stderr.write("Requested getmediaitems\n")
    return jsonify([itm.serialize() for itm in vid_library.items])

@app.route('/playitem/<int:id>')
@crossdomain(origin='*')
def handle_playrequest(id):
    sys.stderr.write("Requested /playitem/{}\n".format(id))
    itm = vid_library.find_id(id)
    if itm is not None:
        vid_manager.set_source(itm)
        return jsonify({'success':True})
    return jsonify({'success':False, 'message': 'Video with id {} not found!'.format(id) })
    

    
@sockets.route('/status')
def update_player_status(socket):
    sys.stderr.write("Requested status socket....\n")
    while not socket.closed:
        #sys.stderr.write("Sending status....\n")
        socket.send(json.dumps(vid_manager.get_status().serialize()))
        sock_sleep(0.5)



if __name__ == "__main__":
    sys.stderr.write("Starting server...\n")

    
    app.debug = True
    server = pywsgi.WSGIServer(("", 5000), app, handler_class=WebSocketHandler)
    sys.stderr.write("Server listening on localhost port 5000\n")
    server.serve_forever()
    # Then visit http://localhost:5000