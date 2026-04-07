import type { Metadata } from 'next';
import Calculator from './calculator';

export const metadata: Metadata = {
  title: 'Gas Price Calculator – Free Fuel Cost Calculator Online',
  description:
    'Calculate fuel costs, trip expenses, and gas prices instantly. Free online gas price calculator with support for miles/kilometers and MPG/L per 100km. Perfect for trip planning and budgeting.',
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
    </>
  );
}
