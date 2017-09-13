import sys
from flask import Flask, Response
from flask import jsonify
import json

from flask_sockets import Sockets

import time
from VideoManager import VideoManager



app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
sockets = Sockets(app)
vid_manager = VideoManager()

@app.route('/')
def home():
    return "home2!"


@app.route('/getmediaitems')
def handle_getmediaitems():
    return jsonify([
        {'id': 0, 'name': 'Pika Default', 'path': 'Pikachu Hologram 3 side electric effects Extra.mp4'},
        {'id': 1, 'name': 'Pika 1', 'path': 'Pikachu Hologram 3 side electric effects Extra.mp4'},
        {'id': 2, 'name': 'Pika 2', 'path': 'Pikachu Hologram 3 side electric effects Extra.mp4'},
    ])
    
@sockets.route('/status')
def update_player_status(socket):
    while not socket.closed:
        socket.send(json.dumps(vid_manager.get_status().serialize()))
        time.sleep(0.1)



if __name__ == "__main__":
    sys.stderr.write("Starting server...\n")
    from gevent import pywsgi
    from geventwebsocket.handler import WebSocketHandler
    
    app.debug = True
    server = pywsgi.WSGIServer(("", 5000), app, handler_class=WebSocketHandler)
    sys.stderr.write("Server listening on localhost port 5000\n")
    server.serve_forever()
    # Then visit http://localhost:5000