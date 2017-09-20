# from apiclient.discovery import build
# from apiclient.errors import HttpError
# from oauth2client.tools import argparser
# 
# def get_video_OLD(video_id):
#     youtube = build("youtube", "v3", developerKey="AIzaSyASAdL3CUUO2T_ImDnM1gLKCHqQsQrxj1A")
#     parts = ['contentDetails', 'snippet']
#     
#     hits = youtube.videos().list(part=','.join(parts), id=video_id).execute()
#     print hits
#     return hits




import pafy
def get_video(video_id):
    video = pafy.new("https://www.youtube.com/watch?v={}".format(video_id))
   
    return str(video)