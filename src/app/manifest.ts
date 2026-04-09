import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Gas Price Calculator',
    short_name: 'Gas',
    description: 'Trip Fuel Cost Estimator',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#EF4444',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
