#!/bin/bash


#This script will attempt to configure this 
#Raspberry Pi as a wireless access point 
#in such a way as to share station and
#AP modes on the same wireless interface
#
# MAKE SURE TO CONFIGURE THE VARS BOLOW!!!
#
# REFERENCES:
#	- http://imti.co/post/145442415333/raspberry-pi-3-wifi-station-ap
#



#configure these vars before running!
AP_SSID="HoloDeck"
AP_PSWD="pikachu"
#the AP needs to be on the same channel as the STATION
#grab the channel the station is currently listening on
AP_CHNL=$(iwlist wlan0 channel | perl -ne 'print $1 if m/Current Frequency.+\(Channel (\d+)\)/s')


#setup as wireless access-point
#first install some packages
apt-get install hostapd dnsmasq

#install config for hostapd
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

#let hostapd know to use our new config file
cat >> /etc/default/hostapd <<-EOF
	DAEMON_CONF="/etc/hostapd/hostapd.conf"
EOF

#generate a script to:
#  - set the wifi interface to AP mode
#  - start start hostapd
#  - set some iptables configuration
cat > /usr/local/bin/hostapdstart <<-EOF
	#!/bin/bash
	PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
	iw dev wlan0 interface add uap0 type __ap
	service dnsmasq restart
	sysctl net.ipv4.ip_forward=1
	iptables -t nat -A POSTROUTING -s 192.168.50.0/24 ! -d 192.168.50.0/24 -j MASQUERADE
	ifup uap0
	hostapd /etc/hostapd/hostapd.conf
EOF
#set proper permissions on script we just generated
chmod 775 /usr/local/bin/hostapdstart


#Configure dnsmasq to hand out IP addresses to our clients
cat > /etc/dnsmasq.conf <<-EOF
	interface=lo,uap0
	no-dhcp-interface=lo,wlan0
	bind-interfaces
	server=8.8.8.8
	domain-needed
	bogus-priv
	dhcp-range=192.168.50.50,192.168.50.150,12h
EOF
#start the service
service dnsmasq start



#edit rc.local to start accesspoint on boot
cat >> /etc/rc.local <<-EOF
	/bin/bash /usr/local/bin/hostapdstart
EOF


echo "Rebooting System!"
reboot








