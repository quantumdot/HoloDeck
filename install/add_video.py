#!/usr/bin/env python
import argparse
from urllib.parse import urlparse, parse_qs
from VideoLibrary import VideoLibrary
from DownloadHelper import DownloadHelper




def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--library', default='../server/conf/assets.json')
    parser.add_argument('--source')
    args = parser.parse_args()
    
    video_id = get_video_id(args.source)
    if video_id is None:
        sys.stderr.write('Unable to extract Video ID from source!\n')
        return
    
    library = VideoLibrary(args.library)
    itm_search = library.find_id(video_id)
    if itm_search is not None:
        sys.stderr.write('Video ID exists... removing previous entry...\n')
        library.remove_source(itm_search)
    helper = DownloadHelper(video_id)
    def add_cbk(d):
        library.add_source(d.create_source())
    helper.run(add_cbk)
    
    while not DownloadHelper.processes[video_id].complete:
        time.sleep(1)
    sys.stderr.write('Complete!\n')


def get_video_id(source):
    if len(str(source)) == 11:
        return str(source)
    else:
        u_pars = urlparse(source)
        quer_v = parse_qs(u_pars.query).get('v')
        if quer_v:
            return quer_v[0]
        pth = u_pars.path.split('/')
        if pth:
            return pth[-1]
    return None   
    
if __name__ == '__main__':
    main()