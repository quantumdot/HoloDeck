import sys
from gevent import pywsgi, sleep as sock_sleep
from geventwebsocket.handler import WebSocketHandler
from flask import Flask, request, Response, jsonify, send_from_directory
import json
from flask_cors import CORS, cross_origin


from flask_sockets import Sockets

import time
from VideoManager import VideoManager, VideoLibrary



app = Flask(__name__)
CORS(app)
app.config['SECRET_KEY'] = 'secret!'
sockets = Sockets(app)
vid_library = VideoLibrary('conf/assets.json')
vid_manager = VideoManager()
vid_manager.set_source(vid_library.items[0])


@app.route('/')
def home():
    return "home2!"

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
    data = list(json.loads(request.data))
    if hasattr(vid_manager, action) and callable(getattr(vid_manager, action)):
        sys.stderr.write("  -> Caught by VideoManager\n")
        getattr(vid_manager, action)(*data)
        return jsonify({'success':True})
    
    elif hasattr(vid_manager.player, action) and callable(getattr(vid_manager.player, action)):
        sys.stderr.write("  -> Caught by OMXPlayer\n")
        getattr(vid_manager.player, action)(*data)
        return jsonify({'success':True})
    
    return jsonify({'success':False, 'message': 'Action {} is not valid!'.format(action) })
        

    
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