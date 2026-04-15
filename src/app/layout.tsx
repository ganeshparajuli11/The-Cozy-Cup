import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans, Cormorant_Garamond } from 'next/font/google'
import { SmoothScrollProvider } from '@/components/ui/SmoothScrollProvider'
import { Header } from '@/components/layout/Header'
import './globals.css'

// ---- Fonts — next/font sets CSS variables on <html> ----
// The @theme inline block in globals.css maps these to Tailwind utilities.

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '600', '700', '900'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
  weight: ['300', '400', '500'],
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
})

// ---- SEO Metadata ----
export const metadata: Metadata = {
  title: {
    default: 'The Cozy Cup — Handcrafted Coffee',
    template: '%s | The Cozy Cup',
  },
  metadataBase: new URL('https://thecozycup.com'),
  description:
    'Handcrafted coffee, unhurried moments. A specialty coffee shop dedicated to slow living, sourced beans, and exceptional espresso.',
  keywords: ['specialty coffee', 'handcrafted coffee', 'café', 'espresso', 'pour over', 'cold brew', 'slow coffee'],
  authors: [{ name: 'The Cozy Cup' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thecozycup.com',
    siteName: 'The Cozy Cup',
    title: 'The Cozy Cup — Handcrafted Coffee',
    description: 'Handcrafted coffee. Unhurried moments. A place to just... be.',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'The Cozy Cup — specialty coffee shop',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Cozy Cup — Handcrafted Coffee',
    description: 'Handcrafted coffee. Unhurried moments.',
    images: ['/og-image.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

// ---- LocalBusiness JSON-LD Structured Data ----
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CafeOrCoffeeShop',
  name: 'The Cozy Cup',
  description: 'Specialty coffee shop. Handcrafted drinks. Slow living.',
  url: 'https://thecozycup.com',
  telephone: '+1-555-COZY-CUP',
  email: 'hello@thecozycup.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Warm Street',
    addressLocality: 'Your City',
    postalCode: '00000',
    addressCountry: 'US',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Sunday'],
      opens: '09:00',
      closes: '17:00',
    },
  ],
  servesCuisine: 'Coffee',
  menu: 'https://thecozycup.com/#drinks',
  priceRange: '$$',
  image: 'https://thecozycup.com/og-image.webp',
  sameAs: ['https://instagram.com/thecozycup'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${cormorant.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        {/* Skip to main content — accessibility */}
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>

        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <SmoothScrollProvider>
          <Header />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
