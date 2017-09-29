#!/bin/sh

prevdir=$PWD
cd "$(dirname "$0")"
cd ../
git reset --hard
git pull

cd "$prevdir"
