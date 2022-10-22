#!/bin/bash
clear

VERSION=1.0.0
APPNAME=api-service
echo "---start:dockerize---"

#docker build -t talk/file-service:$VERSION .
docker buildx build --platform=linux/amd64 -t $APPNAME:$VERSION .
#docker save $APPNAME:$VERSION | gzip > $APPNAME.tar.gz

echo "---end:dockerize---"
echo