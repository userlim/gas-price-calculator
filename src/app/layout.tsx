import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://gas-price-calculator.vercel.app'),
  title: 'Gas Price Calculator – Free Fuel Cost Calculator Online',
  description:
    'Calculate fuel costs, trip expenses, and gas prices instantly. Free online gas price calculator with support for miles/kilometers and MPG/L per 100km. Perfect for trip planning and budgeting.',
  keywords:
    'gas price calculator, fuel cost calculator, trip cost calculator, gas calculator, fuel calculator, miles per gallon, MPG, fuel efficiency',
  openGraph: {
    title: 'Gas Price Calculator – Free Fuel Cost Calculator Online',
    description: 'Calculate your fuel costs and trip expenses instantly with our free online gas price calculator.',
    url: 'https://gas-price-calculator.vercel.app',
    siteName: 'Gas Price Calculator',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gas Price Calculator',
    description: 'Free online fuel and gas price calculator for trip planning.',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  alternates: {
    canonical: 'https://gas-price-calculator.vercel.app',
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
        <meta name="google-adsense-account" content="ca-pub-4361110443201092" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4361110443201092" crossOrigin="anonymous"></script>
        <link rel="icon" href="/favicon.svg" />
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-P08T3SZDQH`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-P08T3SZDQH', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body>
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">⛽ Gas Calculator</h1>
            <LanguageSwitcher />
          </div>
        </header>

        <main className="min-h-screen">{children}</main>

        <footer className="bg-gray-50 border-t border-gray-200 mt-12">
          <div className="max-w-6xl mx-auto px-4 py-8 text-center text-gray-600">
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
    <div className="text-gray-600 text-sm">
      <span>Made with ❤️ for travelers</span>
    </div>
  );
}
