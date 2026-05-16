import type { Metadata } from 'next'
import './globals.css'
import JsonLd from '@/components/JsonLd'

const SITE_URL  = 'https://fitlabreviews.com'
const SITE_NAME = 'Fitlab Reviews'
const SITE_DESC = 'Long-form research notes, dose-aware ingredient breakdowns, and unsponsored product reviews — graded against a public rubric.'
const OG_IMAGE  = `${SITE_URL}/og-default.png`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:  `${SITE_NAME} — The supplement shelf, stripped back to the evidence.`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESC,
  keywords: ['supplement reviews', 'protein powder', 'creatine', 'pre-workout', 'evidence-based nutrition', 'fitlab', 'India'],
  authors: [{ name: 'Pankaj Singh', url: 'https://www.linkedin.com/in/pankaj-singh-77b93a368/' }],
  creator: 'Pankaj Singh',
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type:        'website',
    locale:      'en_IN',
    url:         SITE_URL,
    siteName:    SITE_NAME,
    title:       `${SITE_NAME} — The supplement shelf, stripped back to the evidence.`,
    description: SITE_DESC,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card:        'summary_large_image',
    site:        '@fitlabreviews',
    creator:     '@fitlabreviews',
    title:       `${SITE_NAME} — Evidence-based supplement reviews.`,
    description: SITE_DESC,
    images:      [OG_IMAGE],
  },
  alternates: {
    canonical: SITE_URL,
  },
}

// ── Global JSON-LD ─────────────────────────────────────────────────────────────

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type':    'WebSite',
  name:       SITE_NAME,
  url:        SITE_URL,
  description: SITE_DESC,
  inLanguage:  'en-IN',
  potentialAction: {
    '@type':       'SearchAction',
    target:        { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/search?q={search_term_string}` },
    'query-input': 'required name=search_term_string',
  },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type':    'Organization',
  name:       SITE_NAME,
  url:        SITE_URL,
  logo:       `${SITE_URL}/logo.png`,
  sameAs:     ['https://www.linkedin.com/in/pankaj-singh-77b93a368/'],
  founder: {
    '@type':    'Person',
    name:       'Pankaj Singh',
    jobTitle:   'Pharmacist & Founder',
    url:        'https://www.linkedin.com/in/pankaj-singh-77b93a368/',
  },
  contactPoint: {
    '@type':           'ContactPoint',
    contactType:       'editorial',
    email:             'editorial@fitlabreviews.com',
    availableLanguage: 'English',
  },
}

// ── Plausible Analytics — cookieless, GDPR-compliant ─────────────────────────
// Only fires on production domain to avoid polluting analytics during dev/preview
const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? 'fitlabreviews.com'
const IS_PROD          = process.env.NODE_ENV === 'production'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <head>
        <JsonLd schema={[websiteSchema, orgSchema]} />

        {/* Plausible Analytics
            - cookieless: no cookies set, no GDPR consent required
            - self-hosted EU servers: GDPR compliant
            - only loads in production (not dev, not Vercel preview)
            To activate: sign up at plausible.io, add site fitlabreviews.com,
            then set NEXT_PUBLIC_PLAUSIBLE_DOMAIN=fitlabreviews.com in Vercel env vars
        */}
        {IS_PROD && (
          <>
            {/* Plausible Analytics — exact script from Plausible dashboard
                Token: pa-9a8l3MJZrwqFPgWU9ikVc */}
            <script
              async
              src="https://plausible.io/js/pa-9a8l3MJZrwqFPgWU9ikVc.js"
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()`,
              }}
            />
          </>
        )}
      </head>
      <body>{children}</body>
    </html>
  )
}
