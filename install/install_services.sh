#!/bin/sh


#copy services to systemd directory
cp install/holodeck.service /lib/systemd/system/holodeck.service
cp install/holosplash.service /lib/systemd/system/holosplash.service

#set correct permissions on services
chmod 644 /lib/systemd/system/holodeck.service
chmod 644 /lib/systemd/system/holosplash.service

#reload the daemon and enable services
systemctl daemon-reload
systemctl enable holodeck.service
systemctl enable holosplash.service

#finally reboot
reboot
