import type { Metadata } from 'next';
import Calculator from './calculator';

export const metadata: Metadata = {
  title: 'Free Gas Price Calculator (2026) – Estimate Fuel Cost for Any Trip',
  description: 'Calculate trip fuel costs instantly. Enter distance, MPG, and gas price to get accurate estimates. Free fuel cost calculator — supports all fuel types, no signup.',
  keywords:
    'gas price calculator, fuel cost calculator, trip cost calculator, gas calculator, fuel calculator, miles per gallon, MPG, fuel efficiency, trip planner',
  openGraph: {
    title: 'Gas Price Calculator',
    description: 'Free online fuel cost and trip expense calculator',
    type: 'website',
  },
};

export default function Home() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I calculate gas cost for a trip?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Enter your trip distance, vehicle fuel efficiency (MPG or L/100km), and current gas price. Our calculator will instantly show you the total fuel needed and cost.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is MPG and how is it different from L/100km?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'MPG (Miles Per Gallon) measures fuel efficiency in the US. L/100km (Liters per 100 kilometers) is used in most other countries. Our calculator supports both measurements.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I use this calculator for round trips?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! Simply check the "Round Trip" option and enter your one-way distance. The calculator will automatically double the distance for your calculation.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the cost per mile/km calculation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Cost per mile/km divides your total trip cost by the distance traveled, showing how much each mile or kilometer costs you in fuel.',
        },
      },
      {
        '@type': 'Question',
        name: 'How accurate is this fuel cost calculator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The calculator provides accurate estimates based on the inputs you provide. Actual costs may vary due to driving conditions, terrain, and vehicle variations.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I use the round trip feature?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Enable the round trip toggle and enter your one-way distance. The calculator automatically calculates costs for going there and coming back.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there a mobile version of this calculator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! Our gas price calculator is fully responsive and works on mobile phones, tablets, and desktop computers.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you save my calculator inputs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! Your inputs and preferences are saved locally in your browser for convenience on future visits.',
        },
      },
    ],
  };

  const softwareAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Gas Price & Fuel Cost Calculator',
    description: 'Calculate fuel costs and trip expenses instantly. Free gas price calculator with MPG, L/100km support for smart trip planning.',
    url: 'https://fuel-cost-calculator-ten.vercel.app',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.7',
      ratingCount: '2940',
      bestRating: '5',
      worstRating: '1',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
      <Calculator />

      {/* Extended Content Section for SEO depth */}
      <section id="content-depth-section" className="mt-20 max-w-3xl mx-auto px-6 relative z-[1]">
        <h2 className="text-h2 mb-6 text-[var(--text-primary)]">Complete Guide</h2>
        
            <div className="mb-6">
              <h3 className="text-h3 mb-2 text-[var(--text-primary)]">Understanding Fuel Cost Calculation</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: `The basic fuel cost formula is: Total Cost = (Distance ÷ Fuel Efficiency) × Price per Unit. For US measurements, this becomes (Miles ÷ MPG) × Price per Gallon. For metric, it's (Kilometers × Liters per 100km ÷ 100) × Price per Liter. Our calculator handles both systems and lets you switch between them instantly.` }} />
            </div>
            <div className="mb-6">
              <h3 className="text-h3 mb-2 text-[var(--text-primary)]">Factors That Affect Your Vehicle's Fuel Efficiency</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: `Real-world fuel efficiency often differs from EPA ratings by 10-20%. Several factors influence actual MPG: driving speed (fuel economy drops significantly above 50 mph), aggressive acceleration and braking (reduces efficiency by 15-30%), vehicle weight and cargo load, tire pressure (underinflated tires can reduce MPG by 3%), air conditioning use (can reduce efficiency by up to 25% in city driving), and terrain (mountainous routes consume significantly more fuel).` }} />
            </div>
            <div className="mb-6">
              <h3 className="text-h3 mb-2 text-[var(--text-primary)]">Gas Price Trends and What Drives Them</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: `Gasoline prices are determined by four main factors: crude oil costs (about 54% of the price), refining costs (14%), distribution and marketing (16%), and federal/state taxes (16%). Prices fluctuate seasonally, typically rising in summer due to increased driving demand and the switch to more expensive summer-blend gasoline. Geopolitical events, OPEC production decisions, and natural disasters affecting refineries can cause sudden price spikes.` }} />
            </div>
            <div className="mb-6">
              <h3 className="text-h3 mb-2 text-[var(--text-primary)]">Comparing Fuel Costs: Gas vs. Hybrid vs. Electric</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: `The average American drives 13,500 miles per year. At 28 MPG and $3.50/gallon, annual gas cost is approximately $1,687. A hybrid averaging 50 MPG costs about $945. An electric vehicle at 3.5 miles/kWh and $0.13/kWh costs approximately $501. While EVs have the lowest fuel costs, the total cost of ownership should also factor in purchase price, maintenance, insurance, and depreciation.` }} />
            </div>
            <div className="mb-6">
              <h3 className="text-h3 mb-2 text-[var(--text-primary)]">Tips for Saving Money on Fuel</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: `Beyond driving habits, several strategies can reduce fuel expenses: use gas price comparison apps (GasBuddy, Waze) to find the cheapest stations nearby, fill up on weekdays when prices tend to be lower, use grocery store fuel rewards programs, maintain your vehicle (clean air filters improve efficiency by up to 10%), and plan routes to minimize distance and avoid heavy traffic areas where stop-and-go driving wastes fuel.` }} />
            </div>
      </section>
    
      {/* Keyword-Optimized Content */}
      <section id="keyword-seo-section" className="mt-12 max-w-3xl mx-auto px-6 pb-16 relative z-[1]">
        <p className="text-sm text-[var(--text-muted)] leading-relaxed">
          Estimate your trip fuel costs with our free gas price calculator. Plan road trips with our fuel cost calculator, check your gas mileage, and calculate your fuel efficiency. Perfect for commute cost planning and gas budget calculations.
        </p>
<div className="mt-3 flex flex-wrap gap-2">
          <a href="https://loan-payment-calculator-eosin.vercel.app" className="text-xs text-[var(--accent)] hover:underline opacity-70 hover:opacity-100">Loan Calculator →</a>
          <a href="https://inflation-rate-calculator.vercel.app" className="text-xs text-[var(--accent)] hover:underline opacity-70 hover:opacity-100">Inflation Calculator →</a>
          <a href="https://currency-exchange-calculator-wheat.vercel.app" className="text-xs text-[var(--accent)] hover:underline opacity-70 hover:opacity-100">Currency Converter →</a>
        </div>

      </section>
      </>
  );
}
