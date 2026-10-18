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
                bat 'npm install'
            }
        }
        stage('Install Playwright Latest') {
            steps {
                echo 'Installing Playwright latest version...'
                bat 'npm install -D @playwright/test@latest'
                bat 'npx playwright install'
            }
        }
        stage('Install Playwright Latest') {
            steps {
                echo 'Installing Playwright latest version...'
                bat 'npm install -D @playwright/test@latest'
                bat 'npx playwright install'
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Executing Playwright + Cucumber tests...'
<<<<<<< HEAD:jenkinsfile
                sh 'npm run test-cheapAir'
=======
                bat 'npm run test-cheapAir'
>>>>>>> 8efb31355dd428a18d21b5f0f713172e5739cfed:Jenkinsfile
            }
        }

        // stage('Archive Results') {
        //     steps {
        //         junit '**/reports/*.xml'   // if you generate JUnit XML reports
        //         archiveArtifacts artifacts: '**/reports/**', fingerprint: true
        //     }
        }
    }
}
