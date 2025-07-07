pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'git@github.com:mandrantofit/TPJenkins.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                echo 'Build step: nothing to build for Node.js'
            }
        }

        stage('Deploy') {
            steps {
                sh 'nohup npm start &'
                echo 'Application lancée localement'
            }
        }
    }
}
