import os
import json
import logging


class VideoSource(object):
    
    def __init__(self, id, name, desc, thumbs, source):
        self.id = id
        self.name = name
        self.description = desc
        self.thumbs = list(thumbs)
        self.source = source
    #end __init__()
    
    def serialize(self):  
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'thumbs': self.thumbs,
            'source': self.source
        }
    #end serialize()
    
    @staticmethod
    def empty():
        return {
            'id': "",
            'name': "",
            'description': "",
            'thumbs': [],
            'source': ""
        }
#end class VideoSource



class VideoLibrary(object):
    def __init__(self, manifest):
        self.source = manifest
        self.reload()
    #end __init__()
    
    def reload(self):
        self.items = self.__load_items(self.source)
    
    def add_source(self, video_source, allow_duplicates=False):
        if not allow_duplicates:
            self.remove_source(video_source)
        self.items.append(video_source)
        self.save()
    
    def remove_source(self, video_source):
        pre_existing = self.find_id(video_source.id)
        if pre_existing is not None:
            os.remove(pre_existing.source)
            for thumb in pre_existing.thumbs:
                os.remove(thumb)
            self.items.remove(pre_existing)   
            self.save()
            self.reload()             
    
    def find_id(self, id):
        for itm in self.items:
            if itm.id == id:
                return itm
        return None
    
    def save(self, manifest=None):
        if manifest is None:
            manifest = self.source
        with open(manifest, 'w') as mfp:
            json.dump([i.serialize() for i in self.items], mfp, indent=4)
        self.reload()
    
    def __load_items(self, manifest):
        with open(manifest, 'r') as mfp:
            data = json.load(mfp)

        items = []
        for itm in data:
            items.append(VideoSource(itm['id'], 
                                     itm['name'], 
                                     itm['description'],
                                     itm['thumbs'],
                                     itm['source']))
        return items
    #end __load_items()
#end class VidoeLibrary

