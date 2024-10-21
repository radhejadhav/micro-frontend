#!/bin/bash

appName=react-nginx-app
exposePort=8080
containerPort=80

echo $appName

docker stop $appName
docker remove $appName
docker image remove $appName

docker build -t $appName .
docker run --name $appName -p $exposePort:$containerPort -d $appName
