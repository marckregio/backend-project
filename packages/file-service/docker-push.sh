#!/bin/bash
clear

VERSION=1.0.0-dev
echo "---start:docker-push---"

docker tag talk/file-service:$VERSION marckregio/file-service:$VERSION
docker image rm talk/file-service:$VERSION
docker push marckregio/file-service:$VERSION

echo "---end:docker-push---"
echo