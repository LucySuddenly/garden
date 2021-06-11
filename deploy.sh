#!/bin/sh
# this quick and dirty CD script runs on EC2
# todo: replace
while [ true ]
do
        sudo docker kill $(sudo docker ps -q)
        sudo docker run -d -p 80:8080 lucysuddenly/garden:latest
        sleep 3600
done