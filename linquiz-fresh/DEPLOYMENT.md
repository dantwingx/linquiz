# LinQuiz Deployment Guide - Railway

## 🚀 Deploy to Railway

### Method 1: Direct GitHub Integration (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for Railway deployment"
   git push origin main
   ```

2. **Connect to Railway**
   - Go to [Railway.app](https://railway.app)
   - Sign in with GitHub
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your LinQuiz repository

3. **Configure Environment**
   - Railway will automatically detect this is a Next.js project
   - The build will use the `railway.toml` configuration
   - Build command: `npm run build`
   - Start command: `npm start`

### Method 2: Railway CLI

1. **Install Railway CLI**
   ```bash
   npm install -g @railway/cli
   ```

2. **Login and Deploy**
   ```bash
   railway login
   railway init
   railway up
   ```

### Method 3: Docker Deployment

1. **Build Docker Image**
   ```bash
   docker build -t linquiz .
   ```

2. **Deploy to Railway**
   - Use the provided `Dockerfile`
   - Railway will automatically build and deploy

## 🔧 Configuration Files

- `railway.toml` - Railway-specific configuration
- `Dockerfile` - Container configuration
- `.dockerignore` - Files to exclude from Docker build
- `next.config.ts` - Next.js configuration with `output: 'standalone'`

## 🌐 Environment Variables

No environment variables are required for basic deployment. The app uses:
- ResponsiveVoice (loaded via CDN)
- Local storage for data persistence
- No external APIs or databases

## 🎯 Expected Deployment

- **Build Time**: ~2-3 minutes
- **App Size**: ~50MB
- **Memory Usage**: ~100MB
- **Cold Start**: ~1-2 seconds

## 📱 Features Available After Deployment

✅ Multi-language quiz system (9 languages)
✅ Text-to-speech pronunciation
✅ Quiz history and statistics
✅ Wrong answers review
✅ Responsive design
✅ Dark mode support
✅ Progressive difficulty levels

## 🔍 Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Ensure TypeScript compilation succeeds locally

### App Won't Start
- Verify `npm start` works locally after `npm run build`
- Check Railway logs for specific error messages

### Audio Issues
- ResponsiveVoice requires HTTPS (Railway provides this automatically)
- Test pronunciation features after deployment

## 🚀 Post-Deployment

1. **Test Core Features**
   - Language selection
   - Quiz generation
   - Audio pronunciation
   - History tracking

2. **Performance Optimization**
   - Railway automatically handles scaling
   - No additional configuration needed

3. **Custom Domain** (Optional)
   - Add custom domain in Railway dashboard
   - Configure DNS settings as instructed 