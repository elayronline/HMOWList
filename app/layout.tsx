import type { Metadata } from 'next'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hmohunter.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'HMO Hunter | Find High-Yield HMO Opportunities',
  description:
    'HMO Hunter helps property investors and developers uncover existing and potential high-yield HMO opportunities. Built-in compliance checks against UK regulations. Join the waiting list.',
  keywords: [
    'HMO',
    'HMO investment',
    'UK property',
    'HMO analysis',
    'property investment',
    'HMO yield calculator',
    'Article 4',
    'HMO licensing',
    'property deals UK',
  ],
  authors: [{ name: 'HMO Hunter' }],
  creator: 'HMO Hunter',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: siteUrl,
    siteName: 'HMO Hunter',
    title: 'HMO Hunter | Find High-Yield HMO Opportunities',
    description:
      'Find high-yield HMO opportunities before you commit. Join the waiting list for early access.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'HMO Hunter - UK HMO Deal Analysis',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HMO Hunter | Find High-Yield HMO Opportunities',
    description:
      'Find high-yield HMO opportunities before you commit. Join the waiting list for early access.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'HMO Hunter',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description:
      'HMO Hunter helps property investors and developers uncover existing and potential high-yield HMO opportunities with built-in compliance checks against UK regulations.',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/PreOrder',
      price: '0',
      priceCurrency: 'GBP',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      ratingCount: '1',
      bestRating: '5',
      worstRating: '1',
    },
  }

  return (
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  )
}
