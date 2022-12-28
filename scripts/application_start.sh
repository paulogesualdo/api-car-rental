#!/bin/bash

echo ">>>>>>>> APPLICATION START: BEGIN"

# stop any node servers
killall node
echo ">>>>>>>> APPLICATION START: NODE STOPPED"

# start server
cd /home/ec2-user/api-car-rental/
#node index.js

sudo systemctl enable api-car-rental.service
sudo systemctl start api-car-rental.service
echo ">>>>>>>> APPLICATION START: NODE STARTED"

echo ">>>>>>>> APPLICATION START: END"
