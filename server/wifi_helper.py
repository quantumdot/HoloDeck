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


    
    
    
    