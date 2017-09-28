#!/bin/sh

prevdir=$PWD
cd "$(dirname "$0")"
cd ../
git reset --hard
git pull

cp install/holodeckd /etc/init.d/holodeckd

cd "$prevdir"
