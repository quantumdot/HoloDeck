import argparse
from VideoLibrary import VideoLibrary
from DownloadHelper import DownloadHelper




def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--video')
    
    itm_search = vid_manager.library.find_id(video_id)
    print itm_search
    if itm_search is not None:
        sys.stderr.write('Video ID exists... removing previous entry...\n')
        vid_manager.library.remove_source(itm_search)
    helper = DownloadHelper(video_id)
    def add_cbk(d):
        vid_manager.library.add_source(d.create_source())
    helper.run(add_cbk)
    
    
if __name__ == '__main__':
    main()