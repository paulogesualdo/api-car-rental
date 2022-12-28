#!/bin/bash

echo ">>>>>>>> APPLICATION START: BEGIN"

# stop any node servers
killall node
echo ">>>>>>>> APPLICATION START: NODE STOPPED"

# start server
cd /home/ec2-user/api-car-rental/
npm run start:dev
echo ">>>>>>>> APPLICATION START: NODE STARTED"

echo ">>>>>>>> APPLICATION START: END"