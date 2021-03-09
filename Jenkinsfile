pipeline {
    agent {
        docker {
            image 'cypress/base:12' 
        }
    }
    stages {
        stage('Instalar dependencias') { 
            steps {
                sh 'npm install'
            }
        }
        stage('Test') { 
            steps {
                sh 'npm ci'
                sh 'npm run test'
            }
        }
    }
}