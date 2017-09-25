#!/bin/bash


#configure these vars before running!
AP_SSID="HoloDeck"
AP_PSWD="pikachu"
#the AP needs to be on the same channel as the STATION
#grab the channel the station is currently listening on
AP_CHNL=$(iwlist wlan0 channel | perl -ne 'print $1 if m/Current Frequency.+\(Channel (\d+)\)/s')

cat > /etc/hostapd/hostapd.conf <<-EOF
	interface=uap0
	ssid=$AP_SSID
	hw_mode=g
	channel=$AP_CHNL
	macaddr_acl=0
	auth_algs=1
	ignore_broadcast_ssid=0
	wpa=2
	wpa_passphrase=$AP_PSWD
	wpa_key_mgmt=WPA-PSK
	wpa_pairwise=TKIP
	rsn_pairwise=CCMP
EOF