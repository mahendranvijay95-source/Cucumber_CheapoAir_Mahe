pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    credentialsId: 'mahendranerusan',
                    url: 'https://github.com/mahendranvijay95-source/Cucumber_CheapoAir_Mahe.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing npm packages...'
                sh 'npm install'
            }
        }
        stage('Install Playwright Latest') {
            steps {
                echo 'Installing Playwright latest version...'
                sh 'npm install -D @playwright/test@latest'
                sh 'npx playwright install'
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Executing Playwright + Cucumber tests...'
                sh 'npm run test-cheapAir'
            }
        }

        stage('Archive Results') {
            steps {
                junit '**/reports/*.xml'   // if you generate JUnit XML reports
                archiveArtifacts artifacts: '**/reports/**', fingerprint: true
            }
        }
    }
}
