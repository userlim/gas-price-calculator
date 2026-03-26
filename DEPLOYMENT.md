# Deployment Guide

This guide covers deploying the Gas Price Calculator to production.

## Quick Start

### Option 1: Vercel (Recommended)

Vercel is the official Next.js hosting platform and requires minimal setup.

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

**Automatic deployment from Git:**

1. Push your code to GitHub, GitLab, or Bitbucket
2. Connect your repository in [vercel.com](https://vercel.com)
3. Vercel automatically deploys on every push

### Option 2: Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod
```

Create `netlify.toml`:
```toml
[build]
  command = "next build"
  functions = "netlify/functions"
  publish = ".next"

[functions]
  node_bundler = "esbuild"
```

### Option 3: Docker

Create `Dockerfile`:
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t gas-price-calculator .
docker run -p 3000:3000 gas-price-calculator
```

### Option 4: Traditional Node.js Server

```bash
# Build
npm run build

# Start
NODE_ENV=production npm start
```

The app listens on `http://localhost:3000` by default.

## Environment Variables

Create `.env.local` for development:
```
# Optional: Google Analytics
NEXT_PUBLIC_GA_ID=G-P08T3SZDQH
```

For production, set via your platform:
- **Vercel**: Project Settings > Environment Variables
- **Netlify**: Site Settings > Build & Deploy > Environment
- **Docker**: `docker run -e NEXT_PUBLIC_GA_ID=...`

## Performance Optimization

### Caching Headers (Vercel)
Already configured in `vercel.json` with security headers.

### Image Optimization
The site uses SVG favicons (minimal size).

### Code Splitting
Next.js automatically code splits at the route level.

## SEO & Analytics

### Google Search Console
1. Go to [search.console.google.com](https://search.console.google.com)
2. Add property for your domain
3. Upload or verify ownership
4. Monitor search performance

### Google Analytics
Already integrated with ID: `G-P08T3SZDQH`

Update in `src/app/layout.tsx` if using a different GA ID.

### AdSense Setup

1. Go to [google.com/adsense](https://google.com/adsense)
2. Sign up for an AdSense account
3. Add your domain
4. Get your AdSense code
5. Add to `src/app/layout.tsx`:

```tsx
<Script
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
  crossOrigin="anonymous"
/>
```

## Security Checklist

- [x] Security headers configured (vercel.json)
- [x] HTTPS enforced (all platforms)
- [x] XSS protection enabled
- [x] Clickjacking protection (X-Frame-Options)
- [x] MIME sniffing protection
- [x] No sensitive data in code
- [x] Environment variables for secrets

## Monitoring & Maintenance

### Vercel Analytics
- Dashboard shows real-time insights
- Performance metrics automatically collected

### Error Tracking
Enable in project settings to receive alerts.

### Updates
- Node.js versions: Check quarterly
- Dependencies: Update regularly
  ```bash
  npm update
  npm audit fix
  ```

## Performance Targets

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Core Web Vitals**: All green

## Scaling

The site is fully static with no backend, so it scales globally at no extra cost on any platform.

## Troubleshooting

### Build fails
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### 404 errors on routes
Ensure `src/app/page.tsx` exists (it does).

### CSS not loading
Check that `globals.css` is imported in `layout.tsx`.

### Analytics not working
Verify Google Analytics ID in `layout.tsx`.

## Support

For platform-specific help:
- **Vercel**: [vercel.com/docs](https://vercel.com/docs)
- **Netlify**: [docs.netlify.com](https://docs.netlify.com)
- **Next.js**: [nextjs.org/docs](https://nextjs.org/docs)
