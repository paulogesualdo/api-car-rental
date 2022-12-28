#!/bin/bash

echo ">>>>>>>> APPLICATION START: BEGIN"

# nvm install
#curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
#echo ">>>>>>>> NVM INSTALLED"

# use nvm without restarting the terminal
#export NVM_DIR="$HOME/.nvm"
#[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
#[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # This loads nvm bash_completion
#echo ">>>>>>>> NVM READY TO USE"

# node install
#nvm install v14.17.0
#echo ">>>>>>>> NODE INSTALLED"

#rm -rf node_modules
#rm -f package-lock.json
#npm cache clean --force

# node modules install
#npm install
#echo ">>>>>>>> NODE MODULES INSTALLED"

# stop any node servers
killall node
echo ">>>>>>>> APPLICATION START: NODE STOPPED"

# start server
cd /home/ec2-user/api-car-rental/
node index.js
echo ">>>>>>>> APPLICATION START: NODE STARTED"

echo ">>>>>>>> APPLICATION START: END"