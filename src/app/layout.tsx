import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Gas Price Calculator (Free, 2026) – Trip Fuel Cost Estimator',
  description: 'Calculate fuel costs for any trip in seconds. Free 2026 gas calculator with MPG/L per 100km support. Plan your road trip budget — try it now.',
  keywords: 'gas price calculator, fuel cost calculator, trip gas calculator, gas cost estimator, road trip fuel cost, mpg calculator, gas mileage calculator, fuel cost per mile, how much gas for my trip, driving cost calculator, gas prices near me, average gas price 2026, fuel efficiency calculator, commute cost calculator, gas budget calculator',
  metadataBase: new URL('https://fuel-cost-calculator-ten.vercel.app'),
  openGraph: {
    title: 'Gas Price Calculator (Free, 2026) – Trip Fuel Cost Estimator',
    description: 'Calculate fuel costs for any trip in seconds. Free 2026 gas calculator with MPG/L per 100km support. Plan your road trip budget — try it now.',
    url: 'https://fuel-cost-calculator-ten.vercel.app',
    siteName: 'Gas Price Calculator',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gas Price Calculator',
    description: 'Calculate fuel costs for any trip in seconds. Free 2026 gas calculator with MPG/L per 100km support. Plan your road trip budget — try it now.',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large' as const,
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  icons: { icon: '/favicon.svg' },
  alternates: {
    canonical: 'https://fuel-cost-calculator-ten.vercel.app',
    languages: {
      'en': 'https://fuel-cost-calculator-ten.vercel.app',
      'x-default': 'https://fuel-cost-calculator-ten.vercel.app',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="hsjncRi9cl3tz3Otd6SJKurSt_V1bZ0AKO-bdWIGeHM" />
        <meta name="google-site-verification" content="ETO59LUETFhBHTx7GMun0GscvJgzLq2iGWdeAmh3e10" />
        <meta name="google-adsense-account" content="ca-pub-4361110443201092" />
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4361110443201092" crossOrigin="anonymous" strategy="afterInteractive" />
        <link rel="icon" href="/favicon.svg" />
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-P04TH8XJJ9`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-P04TH8XJJ9', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
              {/* Organization & WebSite Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebSite", "name": "Gas Price Calculator", "url": "https://fuel-cost-calculator-ten.vercel.app", "publisher": {"@type": "Organization", "name": "UtiliCalc Tools", "url": "https://utilicalc.vercel.app", "logo": {"@type": "ImageObject", "url": "https://fuel-cost-calculator-ten.vercel.app/favicon.svg"}}, "potentialAction": {"@type": "SearchAction", "target": "https://fuel-cost-calculator-ten.vercel.app/?q={search_term_string}", "query-input": "required name=search_term_string"}})
        }} />
        {/* Preconnect & DNS-Prefetch Hints */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        {/* Speakable Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "speakable": {"@type": "SpeakableSpecification", "cssSelector": ["h1", ".keyword-seo-section p"]}})
        }} />
        {/* BreadcrumbList Schema */}
        <script type="application/ld+json">
          {JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://fuel-cost-calculator-ten.vercel.app"}, {"@type": "ListItem", "position": 2, "name": "Gas Price Calculator", "item": "https://fuel-cost-calculator-ten.vercel.app"}]})}
        </script>
        </head>
      <body>
        <header className="sticky top-0 z-50 bg-white border-b border-[#F2F4F6]">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">⛽ Gas Calculator</h1>
            <LanguageSwitcher />
          </div>
        </header>

        <main className="min-h-screen">{children}</main>

        <footer className="bg-white border-t border-[#F2F4F6] mt-12">
          <div className="max-w-6xl mx-auto px-4 py-8 text-center text-[#4E5968]">
            
            <div className="flex flex-wrap justify-center gap-4 mb-3">
              <span className="text-xs text-[#4E5968] font-semibold uppercase tracking-wider">Related Free Tools:</span>
                <a href="https://gold-price-today-calculator.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[#8B95A1] hover:text-[#191F28] transition-colors text-xs">Gold Price Calculator</a>
                <a href="https://inflation-rate-calculator.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[#8B95A1] hover:text-[#191F28] transition-colors text-xs">Inflation Rate Calculator</a>
                <a href="https://loan-payment-calculator-eosin.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[#8B95A1] hover:text-[#191F28] transition-colors text-xs">Loan Payment Calculator</a>
                <a href="https://currency-exchange-calculator-wheat.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[#8B95A1] hover:text-[#191F28] transition-colors text-xs">Currency Exchange Converter</a>
                <a href="https://utilicalc.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[#8B95A1] hover:text-[#191F28] transition-colors text-xs">UtiliCalc All-in-One Tools</a>
            </div>
          <div className="flex flex-wrap justify-center gap-6 mb-4 text-sm">
              <a href="/privacy-policy" className="text-blue-600 hover:text-blue-800">
                Privacy Policy
              </a>
              <a href="/terms" className="text-blue-600 hover:text-blue-800">
                Terms of Service
              </a>
            </div>
            <p>&copy; {new Date().getFullYear()} Gas Price Calculator. All rights reserved.</p>
            <p className="text-sm mt-2">Free online fuel cost and trip expense calculator</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

function LanguageSwitcher() {
  return (
    <div className="text-[#4E5968] text-sm">
      <span>Made with ❤️ for travelers</span>
    </div>
  );
}
