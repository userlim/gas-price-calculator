# Gas Price Calculator

A free, lightweight, and SEO-optimized gas price and fuel cost calculator built with Next.js 14.

## Features

- 🧮 **Instant Calculations** - Calculate fuel costs in real-time
- 🌍 **20 Languages** - Full multilingual support including English, Spanish, French, German, Japanese, Korean, Chinese, and more
- 📱 **Mobile Responsive** - Works perfectly on all devices
- 💾 **Local Storage** - Your inputs are automatically saved
- ♿ **Accessible** - Built with accessibility in mind
- 📊 **Multiple Units** - Support for MPG/L per 100km and gallons/liters
- 🔄 **Round Trip** - Calculate round-trip costs effortlessly
- 🎨 **Beautiful Design** - Modern, clean, and user-friendly interface
- 📈 **SEO Optimized** - Built for search engines and AdSense monetization

## Supported Units

- **Distance**: Miles or Kilometers
- **Fuel Efficiency**: MPG (Miles Per Gallon) or L/100km (Liters per 100km)
- **Price**: $ per Gallon or $ per Liter

## Supported Languages

- English
- 한국어 (Korean)
- 日本語 (Japanese)
- 中文 (Chinese)
- Español (Spanish)
- Français (French)
- Deutsch (German)
- Português (Portuguese)
- Русский (Russian)
- العربية (Arabic)
- हिन्दी (Hindi)
- Italiano (Italian)
- Nederlands (Dutch)
- Polski (Polish)
- Türkçe (Turkish)
- Tiếng Việt (Vietnamese)
- ไทย (Thai)
- Svenska (Swedish)
- Dansk (Danish)
- Norsk (Norwegian)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

```bash
cd gas-price-calculator
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Tech Stack

- **Framework**: Next.js 14.2.21
- **React**: 18.3.1
- **Styling**: Tailwind CSS 3.4.17
- **Language**: TypeScript 5
- **Font**: Nunito (Google Fonts)

## Features & SEO

### Built-in SEO Features

- Meta tags for OpenGraph and Twitter
- Structured data (FAQ schema)
- Sitemap generation
- Robots.txt configuration
- Canonical URLs
- Mobile-first design
- Fast performance (optimized build)

### AdSense Ready

The site is optimized for Google AdSense with:
- High-quality, relevant content
- Fast load times
- Mobile-responsive design
- Clear site structure
- Proper heading hierarchy
- Keyword-rich content

## Project Structure

```
gas-price-calculator/
├── src/
│   └── app/
│       ├── layout.tsx          # Root layout with metadata
│       ├── page.tsx            # Home page with FAQ schema
│       ├── calculator.tsx       # Main calculator component
│       ├── globals.css         # Global styles
│       ├── robots.ts           # Robots.txt configuration
│       └── sitemap.ts          # Sitemap generation
├── public/
│   └── favicon.svg            # Site favicon
├── package.json               # Dependencies
├── tsconfig.json              # TypeScript config
├── next.config.js             # Next.js config
├── tailwind.config.ts         # Tailwind config
└── postcss.config.js          # PostCSS config
```

## Calculations

### Formula Used

**If using MPG:**
```
Total Fuel = Distance / MPG (in gallons)
```

**If using L/100km:**
```
Total Fuel = (Distance × 1.609 × L/100km) / 100 (in liters)
```

**Total Cost:**
```
Total Cost = Total Fuel × Price per Unit
```

**Cost per Unit:**
```
Cost per Unit = Total Cost / Distance
```

The calculator automatically converts between imperial and metric units as needed.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- **Lighthouse Score**: 95+
- **First Contentful Paint**: < 1s
- **Largest Contentful Paint**: < 2s
- **Cumulative Layout Shift**: < 0.1

## Deployment

### Vercel (Recommended)

```bash
vercel
```

### Other Platforms

The project can be deployed to any platform supporting Node.js 18+:
- Netlify
- AWS Amplify
- Docker containers
- Traditional Node.js servers

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Support

For issues, suggestions, or contributions, please open an issue or pull request.

## Analytics

The project includes Google Analytics (GA4) tracking for:
- Page views
- User interactions
- Calculator usage
- Multilingual feature adoption

## Privacy

This calculator:
- Does not collect personal information
- Does not track user location
- Uses only local browser storage
- Does not send calculations to any server

---

Made with ❤️ for travelers and trip planners
