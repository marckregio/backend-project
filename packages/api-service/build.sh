#!/bin/bash
clear

echo "---start:build---"

rm -rf ./build
npm run build
cp Dockerfile ./build
cp .dockerignore ./build
cp docker-build.sh ./build
cp -R public ./build
#cp -R node_modules ./dist


echo "---end:build---"
echo