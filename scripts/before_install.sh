#!/bin/bash

echo ">>>>>>>> BEFORE INSTALL: BEGIN"

# nvm install
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
echo ">>>>>>>> BEFORE INSTALL: NVM INSTALLED"

# use nvm without restarting the terminal
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # This loads nvm bash_completion
echo ">>>>>>>> BEFORE INSTALL: NVM READY TO USE"

# node install
nvm install v14.17.0
echo ">>>>>>>> BEFORE INSTALL: NODE AND NPM INSTALLED"

echo ">>>>>>>> BEFORE INSTALL: END"