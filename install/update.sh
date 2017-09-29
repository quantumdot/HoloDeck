#!/bin/sh

prevdir=$PWD
cd "$(dirname "$0")"
cd ../
git reset --hard
git pull

#cp install/holodeckd /etc/init.d/holodeckd
#chmod 755 /etc/init.d/holodeckd
sudo cp install/holodeck.service /lib/systemd/system/holodeck.service
sudo chmod 644 /lib/systemd/system/holodeck.service
sudo systemctl daemon-reload
sudo systemctl enable holodeck.service
#sudo reboot

cd "$prevdir"
