# Quick Start Guide

Get the Gas Price Calculator running in minutes.

## 1. Install & Run Locally

```bash
# Navigate to project directory
cd gas-price-calculator

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 2. Build for Production

```bash
# Create production build
npm run build

# Test production build locally
npm start
```

## 3. Deploy to Vercel (Easiest)

### Option A: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option B: Using GitHub

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import repository
4. Vercel auto-deploys on every push

## 4. Customize

### Change Brand/Colors

Edit `src/app/globals.css`:

```css
:root {
  --accent: #7c5cbf;        /* Change purple to your color */
  --accent-light: #b49ee8;
  --text: #2d2640;
  --bg: #fefcff;
}
```

### Update Site Title

Edit `src/app/layout.tsx`:

```tsx
title: 'Gas Price Calculator – Free Fuel Cost Calculator Online',
```

### Add Your Analytics

Replace `G-P08T3SZDQH` in `src/app/layout.tsx` with your Google Analytics ID.

## 5. Enable AdSense

1. Get approved for [Google AdSense](https://google.com/adsense)
2. Copy your AdSense code
3. Add to `src/app/layout.tsx`:

```tsx
<Script
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
  crossOrigin="anonymous"
/>
```

4. Add ad units to page

## 6. Add to Search Engines

### Google Search Console

1. Go to [search.console.google.com](https://search.console.google.com)
2. Add your domain
3. Verify ownership
4. Submit sitemap: `/sitemap.xml`

### Bing Webmaster Tools

1. Go to [bing.com/webmasters](https://bing.com/webmasters)
2. Add site
3. Submit sitemap

## 7. Monitor Performance

### Google Analytics

Visit your [Analytics Dashboard](https://analytics.google.com) to see:
- Page views
- User locations
- Device types
- Traffic sources

### Vercel Dashboard

Monitor at [vercel.com/dashboard](https://vercel.com/dashboard):
- Deployment history
- Build logs
- Analytics
- Error tracking

## File Locations Quick Reference

| Purpose | File |
|---------|------|
| Calculator logic | `src/app/calculator.tsx` |
| Styling | `src/app/globals.css` |
| Metadata/SEO | `src/app/layout.tsx` |
| Home page | `src/app/page.tsx` |
| Settings | `package.json`, `next.config.js` |
| Brand colors | `src/app/globals.css` |
| Google Analytics ID | `src/app/layout.tsx` |

## Troubleshooting

### Port already in use

```bash
# Use different port
npm run dev -- -p 3001
```

### Clear cache and rebuild

```bash
# Delete build cache
rm -rf .next

# Rebuild
npm run build
```

### TypeScript errors

```bash
# Check types
npx tsc --noEmit
```

### Styles not loading

Verify `src/app/globals.css` is imported in `src/app/layout.tsx`.

## Environment Variables

Create `.env.local` (not committed to git):

```
NEXT_PUBLIC_GA_ID=G-P08T3SZDQH
```

## Commands Cheat Sheet

```bash
npm run dev        # Start development server
npm run build      # Create production build
npm start          # Run production server
npm run lint       # Check code (if configured)
npm install        # Install dependencies
npm update         # Update all packages
npm outdated       # Check for updates
```

## Next Steps

1. **Customize**: Update colors, text, and metadata
2. **Deploy**: Push to Vercel/Netlify/your server
3. **Monitor**: Set up Google Search Console and Analytics
4. **Monetize**: Apply for AdSense and add ad units
5. **Optimize**: Monitor metrics and adjust content

## Support Resources

- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind CSS**: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **React Docs**: [react.dev](https://react.dev)

---

**You're ready to go!** Deploy and start earning.
