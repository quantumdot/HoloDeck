import re
import subprocess
from wifi import Cell, Scheme


def serialize_cell(cell):
    scheme = Scheme.find('wlan0', cell.ssid)
    return {
        'ssid': cell.ssid,
        'signal': cell.signal,
        'quality': cell.quality,
        'frequency': cell.frequency,
        'bitrates': cell.bitrates,
        'encrypted': cell.encrypted,
        'channel': cell.channel,
        'address': cell.address,
        'mode': cell.mode,
        'encryption_type': cell.encryption_type,
        'saved': (scheme is not None)
    }

def add_ap(ssid, passphrase=None):
    if Scheme.find('wlan0', ssid) is None:
        c = Cell.where('wlan0', lambda c: c.ssid == ssid)
        s = Scheme.for_cell('wlan0', ssid, passphrase)
        s.save()

def connect_ap(ssid):
    s = Scheme.find('wlan0', ssid)
    s.activate()
    

def forget_ap(ssid):
    s = Scheme.find('wlan0', ssid) 
    if s is not None:
        s.delete()

  
def list_wifi_aps():
    cells = Cell.where('wlan0', lambda c: c.ssid  != "")
    return [wifi_helper.serialize_cell(c) for c in cells]

    
    
    
#     items = [
#         {
#             'ssid': "ssid1",
#             'signal': "signal",
#             'quality': "quality",
#             'frequency': "frequency",
#             'bitrates': "bitrates",
#             'encrypted': True,
#             'channel': 1,
#             'address': "address",
#             'mode': "WPA",
#             'encryption_type': "WPA",
#             'saved':True
#         },
#         {
#             'ssid': "ssid1",
#             'signal': "signal",
#             'quality': "quality",
#             'frequency': "frequency",
#             'bitrates': "bitrates",
#             'encrypted': True,
#             'channel': 1,
#             'address': "address",
#             'mode': "WPA",
#             'encryption_type': "WPA",
#             'saved':False
#         },
#         {
#             'ssid': "ssid2",
#             'signal': "signal",
#             'quality': "quality",
#             'frequency': "frequency",
#             'bitrates': "bitrates",
#             'encrypted': False,
#             'channel': 1,
#             'address': "address",
#             'mode': "WPA",
#             'encryption_type': "WPA",
#             'saved': False
#         }    
#          
#     ]