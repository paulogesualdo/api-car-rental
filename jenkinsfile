pipeline {
    agent any

    stages {
        /*
        stage('git checkout') {
            steps {
                git branch:'feature/readme', url:'https://github.com/paulogesualdo/api-car-rental.git'
            }
        }
        */
        stage('install and test') {
            steps {
                // the script is multi-line because if the instructions where in independent steps there are errors of command not found with nvm and npm
                sh '''
                    # nvm install
                    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
                    # nvm use without restarting the prompt
                    export NVM_DIR="$HOME/.nvm"
                    [ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh"
                    [ -s "$NVM_DIR/bash_completion" ] && \\. "$NVM_DIR/bash_completion"
                    # node install
                    nvm install node
                    # npm install
                    nvm install-latest-npm
                    # node_modules install
                    npm install
                    # automated tests run
                    npm run test
                '''
            }
        }
        stage('build') {
            steps {
                // to remove any tar.gz compressed file from the project folder
                sh 'rm -rf *.tar.gz'
                // to generate a compressed file with all the files needed to run the project and the jenkins build number at the compressed file`s name
                sh 'tar czf api-car-rental-$BUILD_NUMBER.tar.gz commons config node_modules v1 index.js LICENSE package-lock.json package.json README.md register.js server.js'
            }
        }
    }
}