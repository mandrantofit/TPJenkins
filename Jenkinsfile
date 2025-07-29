pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/mandrantofit/TPJenkins'
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

        stage('Run') {
            steps {
                sh 'npm start'
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
