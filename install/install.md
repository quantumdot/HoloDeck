# Installation Instructions

1. Start with a fresh install of `Raspbian`
2. Update software:

```bash
sudo apt-get update
sudo apt-get dist-upgrade
```

3. Enter Raspberry Pi confuguration utility:

```bash
sudo raspi-config
```
Then effect the following settings:
  1. Set the pi to boot to the command line (headless mode)
  2. Enable SSH
  3. Make sure to also set the Locale and Timezone
  
4. Install Dependencies:
```bash
sudo apt-get install fbi
sudo apt-get install -y libdbus-1{,-dev}
```

5. Setup Sound:
https://learn.adafruit.com/adafruit-speaker-bonnet-for-raspberry-pi/raspberry-pi-usage
```bash
curl -sS https://raw.githubusercontent.com/adafruit/Raspberry-Pi-Installer-Scripts/master/i2samp.sh | bash
```
Reboot the system and run the same command once more:
```bash
curl -sS https://raw.githubusercontent.com/adafruit/Raspberry-Pi-Installer-Scripts/master/i2samp.sh | bash
```
During the second run, the script will provide an opportunity to test the speakers.


6. Install the HoloDeck
  1. Download the HoloDeck software by running:
```bash
git clone https://github.com/quantumdot/HoloDeck.git
```
  2. Install python packages needed:
```bash
sudo pip install gevent
sudo pip install gevent-websocket
sudo pip install flask
sudo pip install flask-sockets
sudo pip install flask-cors
sudo pip install omxplayer-wrapper
sudo pip install pafy
sudo pip install wifi
```
  3. Install HoloDeck services by running (this will reboot the system):
```bash
sudo HoloDeck/install/install_services.sh
```









