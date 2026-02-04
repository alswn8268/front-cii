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
  }

  post {
    success { echo "✅ CI Success: dist archived" }
    failure { echo "❌ CI Failed: check console output" }
  }
}
