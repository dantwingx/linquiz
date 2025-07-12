# Deployment Guide for LinQuiz Next.js

This guide covers deploying the LinQuiz Next.js application to various platforms.

## 🚀 Quick Deploy to Vercel (Recommended)

### Option 1: Deploy from GitHub
1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign up/login
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect it's a Next.js project
6. Click "Deploy"

### Option 2: Deploy from CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
cd linquiz-next
vercel

# Follow the prompts
```

## 🌐 Deploy to Netlify

### Option 1: Deploy from GitHub
1. Push your code to a GitHub repository
2. Go to [netlify.com](https://netlify.com) and sign up/login
3. Click "New site from Git"
4. Connect your GitHub repository
5. Set build command: `npm run build`
6. Set publish directory: `.next`
7. Click "Deploy site"

### Option 2: Deploy from CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy --prod --dir=.next
```

## ☁️ Deploy to AWS Amplify

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
2. Click "New app" → "Host web app"
3. Connect your GitHub repository
4. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `.next`
5. Click "Save and deploy"

## 🐳 Deploy with Docker

### Create Dockerfile
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

### Build and Run
```bash
# Build Docker image
docker build -t linquiz-next .

# Run container
docker run -p 3000:3000 linquiz-next
```

## 🔧 Environment Variables

Create a `.env.local` file for local development:
```env
NEXT_PUBLIC_APP_NAME=LinQuiz
NEXT_PUBLIC_VERSION=1.0.0
```

For production, set these in your deployment platform's environment variables section.

## 📦 Build Optimization

### Production Build
```bash
# Install dependencies
npm install

# Build for production
npm run build

# Start production server
npm start
```

### Build Analysis
```bash
# Analyze bundle size
npm run build
# Check the .next/analyze directory for bundle analysis
```

## 🔍 Pre-deployment Checklist

- [ ] All TypeScript errors are resolved
- [ ] ESLint passes (`npm run lint`)
- [ ] Build succeeds (`npm run build`)
- [ ] Environment variables are configured
- [ ] Local storage works (test in incognito mode)
- [ ] Responsive design works on mobile
- [ ] Audio functionality works (Web Speech API)

## 🚨 Common Issues

### Build Errors
- Ensure all dependencies are installed: `npm install`
- Clear Next.js cache: `rm -rf .next`
- Check TypeScript errors: `npx tsc --noEmit`

### Runtime Errors
- Check browser console for errors
- Verify environment variables are set
- Test local storage functionality

### Performance Issues
- Optimize images using Next.js Image component
- Enable compression in your hosting platform
- Consider using CDN for static assets

## 📊 Monitoring

### Vercel Analytics
- Enable Vercel Analytics in your project settings
- Monitor Core Web Vitals
- Track user interactions

### Custom Analytics
```javascript
// Add to _app.tsx or layout.tsx
export function reportWebVitals(metric) {
  console.log(metric);
  // Send to your analytics service
}
```

## 🔄 Continuous Deployment

### GitHub Actions (Vercel)
```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

### GitHub Actions (Netlify)
```yaml
name: Deploy to Netlify
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: nwtgck/actions-netlify@v1.2
        with:
          publish-dir: './.next'
          production-branch: main
          github-token: ${{ secrets.GITHUB_TOKEN }}
          deploy-message: "Deploy from GitHub Actions"
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

## 🎯 Performance Optimization

### Next.js Config
```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true,
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
}

module.exports = nextConfig
```

### Image Optimization
```javascript
// Use Next.js Image component
import Image from 'next/image'

<Image
  src="/logo.png"
  alt="LinQuiz Logo"
  width={200}
  height={100}
  priority
/>
```

## 🔒 Security Considerations

- Use HTTPS in production
- Set security headers
- Validate user inputs
- Sanitize data before storing in localStorage
- Consider Content Security Policy (CSP)

## 📞 Support

For deployment issues:
1. Check the platform's documentation
2. Review build logs for errors
3. Test locally with production build
4. Contact platform support if needed

---

**Happy Deploying! 🚀** 