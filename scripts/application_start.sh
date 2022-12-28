#!/bin/bash
killall node
cd /home/ec2-user/api-car-rental/
sudo systemctl enable api-car-rental.service
sudo systemctl start api-car-rental.service