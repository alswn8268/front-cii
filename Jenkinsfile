pipeline {
  agent any

  tools {
    nodejs "NodeJS_20"
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Env Check') {
      steps {
        bat 'node -v'
        bat 'npm -v'
      }
    }

    stage('Install') {
      steps {
        bat 'npm ci'
      }
    }

    stage('Build') {
      steps {
        bat 'npm run build'
      }
    }

    stage('Archive dist') {
      steps {
        archiveArtifacts artifacts: 'dist/**', fingerprint: true
      }
    }

    stage('Deploy (Local)') {
      steps {
        bat '''
          rmdir /s /q C:\\deploy\\front
          mkdir C:\\deploy\\front
          xcopy dist C:\\deploy\\front /E /I /Y
        '''
      }
    }
  }

  post {
    success { echo "✅ CI Success: dist archived" }
    failure { echo "❌ CI Failed: check console output" }
  }
}
