#!/usr/bin/env python
import os
import sys
import json
import time
import argparse
import subprocess
import logging, logging.config

from gevent import pywsgi, sleep as sock_sleep
from geventwebsocket import WebSocketError
from geventwebsocket.handler import WebSocketHandler
from flask import Flask, request, Response, jsonify, send_from_directory, stream_with_context
from flask_sockets import Sockets
from flask_cors import CORS, cross_origin

from VideoManager import VideoManager
from VideoLibrary import VideoLibrary
from DownloadHelper import DownloadHelper
import wifi_helper


module_directory = os.path.dirname(os.path.realpath(__file__))
pkg_directory = os.path.dirname(module_directory)
os.chdir(module_directory)

logging.config.fileConfig('conf/logging.conf')
logger = logging.getLogger('HoloServe')
logger.debug('$PWD = {}'.format(os.getcwd()))

app = Flask(__name__)
CORS(app)
app.config['SECRET_KEY'] = 'secret!'
sockets = Sockets(app)
vid_manager = VideoManager(VideoLibrary(os.path.join(module_directory, 'conf/assets.json')))


########
########
SERVER_RESTART_SCHEDULED=False

@app.teardown_request
def teardown_request(exception=None):
    global SERVER_RESTART_SCHEDULED
    if SERVER_RESTART_SCHEDULED:
        logger.info('Saw that a restart was scheduled, restarting...')
        reload_server()
########

server_instance = None;
def stop_server():
    global server_instance
    logger.info('Stopping services...')
    vid_manager.player.quit()
    server_instance.close()

def reload_server():
    stop_server()
    logger.info('Reloading server...')
    os.execv(__file__, sys.argv)
    
def start_server(host, port, debug):
    global server_instance
    app.debug = debug
    server_instance = pywsgi.WSGIServer((host, port), app, handler_class=WebSocketHandler)
    logger.info("Server listening on {} port {}".format(host, port))
    server_instance.serve_forever()



####################################################################################
#                                                                                  #
# The following routes serve static client application assets (HTML/JS/CSS/IMAGES) #
#                                                                                  #
####################################################################################
@app.route('/')
@app.route('/<path:path>')
def home(path="index.html"):
    logger.info("Requested /client/{}".format(path))
    logger.debug("Serving {}".format(os.path.join(pkg_directory, 'client', 'dist', path)))
    return send_from_directory(os.path.join(pkg_directory, 'client', 'dist'), path)


@app.route('/assets/<path:path>')
def send_assets(path):
    logger.info("Requested /assets/{}".format(path))
    logger.debug("Serving {}".format(os.path.join(module_directory, 'assets', path)))
    return send_from_directory(os.path.join(module_directory, 'assets'), path)




#################################################################################
#                                                                               #
# The following route serves the player status websocket                        #
#                                                                               #
#################################################################################
@sockets.route('/status')
def update_player_status(socket):
    try:
        logger.info("Requested status socket....")
        while not socket.closed:
            try:
                #sys.stderr.write("Sending status....")
                socket.send(json.dumps(vid_manager.get_status().serialize()))
                sock_sleep(0.5)
            except WebSocketError:
                raise
            except BaseException as e:
                logger.error("SOCKET ERROR: {}".format(str(e)))
    except BaseException as e:
        logger.error("SOCKET ERROR: {}".format(str(e)))




#################################################################################
#                                                                               #
# The following routes serve player API requests for the client                 #
#                                                                               #
#################################################################################
@app.route('/getmediaitems')
def handle_getmediaitems():
    logger.info("Requested /getmediaitems")
    return jsonify([itm.serialize() for itm in vid_manager.library.items])


@app.route('/playitem/<string:id>')
def handle_playrequest(id):
    logger.info("Requested /playitem/{}".format(id))
    itm = vid_manager.library.find_id(id)
    if itm is not None:
        vid_manager.set_source(itm)
        return jsonify({'success':True})
    return jsonify({'success':False, 'message': 'Video with id {} not found!'.format(id) })


@app.route('/action/<string:action>', methods=['POST'])
def handle_actionrequest(action):
    logger.info("Requested /action/{} with args ({})".format(action, request.data))
    try:
        data = list(json.loads(request.data))
        if hasattr(vid_manager, action) and callable(getattr(vid_manager, action)):
            logger.debug("  -> Caught by VideoManager")
            getattr(vid_manager, action)(*data)
            return jsonify({'success':True})
        
        elif hasattr(vid_manager.player, action) and callable(getattr(vid_manager.player, action)):
            logger.debug("  -> Caught by OMXPlayer")
            getattr(vid_manager.player, action)(*data)
            return jsonify({'success':True})
    
        else:
            raise ValueError('Action {} is not valid!'.format(action))
    except BaseException as e:
        return jsonify({'success':False, 'message': str(e) })



#################################################################################
#                                                                               #
# The following routes serve requests to add media and track progress           #
#                                                                               #
#################################################################################
@app.route('/addmedia/<string:video_id>')
def handle_addmedia(video_id):
    logger.info("Requested /addmedia/{}".format(video_id))
    itm_search = vid_manager.library.find_id(video_id)
    #print itm_search
    if itm_search is not None:
        logger.debug('Video ID exists... removing previous entry...')
        vid_manager.library.remove_source(itm_search)
    helper = DownloadHelper(video_id, os.path.join(module_directory, 'assets'))
    def add_cbk(d):
        vid_manager.library.add_source(d.create_source())
    helper.run(add_cbk)
    return jsonify({'success':True}) 


@app.route('/addmediaprogress/<string:video_id>')
def handle_addmediaprogress(video_id):
    try:
        return jsonify(DownloadHelper.processes[video_id].progress.serialize())
    except BaseException as e:
        return jsonify({'success':False, 'message': str(e) })
    



#################################################################################
#                                                                               #
# The following routes serve System level requests (update, restart, shutdown)  #
#                                                                               #
#################################################################################
@app.route('/system/heartbeat')
def handle_system_heartbeat():
    return jsonify({'alive':True})

    
@app.route('/system/update', methods=['POST'])
def handle_system_update():
    global SERVER_RESTART_SCHEDULED
    logger.info("Requested system update")
    try: 
        subprocess.check_call([os.path.join(pkg_directory, 'install', 'update.sh')], stderr=sys.stderr, stdout=sys.stderr)
        SERVER_RESTART_SCHEDULED = True
        return jsonify({'success':True})
    except BaseException as e:
        return jsonify({'success':False, 'message': str(e) })


@app.route('/system/restart_services', methods=['POST'])
def handle_restart_services():
    global SERVER_RESTART_SCHEDULED
    logger.info("Requested services restart")
    try:
        SERVER_RESTART_SCHEDULED = True
        return jsonify({'success':True})
    except BaseException as e:
        return jsonify({'success':False, 'message': str(e) }) 

    
@app.route('/system/restart_system', methods=['POST'])
def handle_system_restart():
    logger.info("Requested system restart")
    try:
        subprocess.check_call(['reboot'], stderr=sys.stderr, stdout=sys.stderr)
        return jsonify({'success':True})
    except BaseException as e:
        return jsonify({'success':False, 'message': str(e) }) 

    
@app.route('/system/shutdown_system', methods=['POST'])
def handle_system_shutdown():
    logger.info("Requested system shutdown")
    try:
        subprocess.check_call(['shutdown'], stderr=sys.stderr, stdout=sys.stderr)
        return jsonify({'success':True})
    except BaseException as e:
        return jsonify({'success':False, 'message': str(e) }) 
        



#################################################################################
#                                                                               #
# The following routes serve WIFI connection requests                           #
#                                                                               #
#################################################################################
@app.route('/wifi/list')
def handle_wifilist():
    try:
        return jsonify(wifi_helper.list_wifi_aps())
    except BaseException as e:
        return jsonify({'success':False, 'message': str(e) }) 


@app.route('/wifi/connect', methods=['POST'])
def handle_wifi_connect():
    try:
        data = json.loads(request.data)
        wifi_helper.add_ap(data.ssid, data.pswd)
        wifi_helper.connect_ap(data.ssid)
        return jsonify({'success':True})
    except BaseException as e:
        return jsonify({'success':False, 'message': str(e) }) 
        

@app.route('/wifi/forget', methods=['POST'])
def handle_wifi_forget():
    try:
        data = json.loads(request.data)
        wifi_helper.forget_ap(data.ssid)
        return jsonify({'success':True})
    except BaseException as e:
        return jsonify({'success': False, 'message': str(e) }) 
    







if __name__ == "__main__":
    logger.info("Starting server...")

    parser = argparse.ArgumentParser()
    parser.add_argument('--host', default="0.0.0.0", help="hostname to run the server on")
    parser.add_argument('--port', type=int, default=5000, help="Port to listen on")
    parser.add_argument('--debug', action='store_true', help="Enable debug mode on the server")
    args = parser.parse_args()
    start_server(args.host, args.port, args.debug)
    
    