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

# node modules install
npm i
echo ">>>>>>>> NODE MODULES INSTALLED"
