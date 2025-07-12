#!/bin/bash

# LinQuiz Railway Deployment Script

echo "🚀 Starting LinQuiz deployment preparation..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Are you in the right directory?"
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Run build to test
echo "🔨 Testing build..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed! Please fix errors before deploying."
    exit 1
fi

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "🔧 Initializing git repository..."
    git init
    git add .
    git commit -m "Initial commit - LinQuiz app ready for deployment"
fi

echo "🎯 Deployment files ready!"
echo ""
echo "Next steps:"
echo "1. Push to GitHub: git push origin main"
echo "2. Go to Railway.app and connect your repository"
echo "3. Railway will automatically deploy your app"
echo ""
echo "Or use Railway CLI:"
echo "1. npm install -g @railway/cli"
echo "2. railway login"
echo "3. railway init"
echo "4. railway up"
echo ""
echo "🎉 Your LinQuiz app is ready for deployment!" 