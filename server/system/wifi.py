import re
import subprocess

class WifiAP:
    def __init__(self, ssid):
        self.ssid = ssid
        self.qual = 0
        self.encr = False
        self.connected = False
        
    def serialize(self):
        return {
            "ssid": self.ssid,
            "connected": self.connected
        }



def list_access_points(interface="wlan0"):
    aps = subprocess.check_output("sudo iwlist wlan0 scanning | egrep 'Cell |Encryption|Quality|Last beacon|ESSID'", shell=True)
    regexs = [
        ['ssid', r'ESSID:"(.*?)"'],
        ['qual', r"Quality=(\d+/\d+)"]
    ]
    ap_results = []

    for i in regexs:
        matches = re.findall(regexs[key][1], aps)
        if i == 'ssid':
            for m in matches:
                ap_results.append(WifiAP(m.group(1)))
        else:
            for j in range(len(matches)):
                setattr(ap_results[j], i, matches[j].group(1))
    
    #filter out entries with empty string as ssid
    filtered_ap_results = []
    for ap in ap_results:
        if not ap.ssid == "":
            filtered_ap_results.append(ap)
    return filtered_ap_results


def set_wifi_station(ssid, psk):
    subprocess.check_output(['wpa_passphrase', ssid, psk])
    config = ""
    
    
    
    
    