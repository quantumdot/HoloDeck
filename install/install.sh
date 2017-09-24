

#enable SSH
print "Enabling SSH..."


#install node
wget -O - https://raw.githubusercontent.com/sdesalas/node-pi-zero/master/install-node-v6.11.3.sh | bash


#clone repo
git clone https://github.com/quantumdot/HoloDeck.git
cd HoloDeck

#install modules for client
npm install




