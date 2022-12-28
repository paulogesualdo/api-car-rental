#!/bin/bash

# nvm install
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
echo ">>>>>>>> NVM INSTALLED"

# use nvm without restarting the terminal
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # This loads nvm bash_completion
echo ">>>>>>>> NVM READY TO USE"

# node install
nvm install v14.17.0
echo ">>>>>>>> NODE INSTALLED"

# npm install
# sudo nvm install-latest-npm
# echo ">>>>>>>> NPM INSTALLED"

rm -rf node_modules
rm -f package-lock.json
npm cache clean --force

# node modules install
npm install
echo ">>>>>>>> NODE MODULES INSTALLED"

killall node

# start server
node /home/ec2-user/api-car-rental/index.js
