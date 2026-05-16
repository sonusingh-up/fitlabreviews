/**
 * src/app/reviews/transparent-labs-bulk-black-review/page.tsx  ·  SERVER COMPONENT
 *
 * Primary keyword  → "Transparent Labs BULK Black review"
 * Secondary        → "BULK Black pre-workout ingredients" / "BULK Black caffeine"
 *                    "is Transparent Labs BULK Black worth it" / "BULK Black vs BULK"
 *
 * Title (58 chars):
 *   "Transparent Labs BULK Black Review (2026) | Fitlab"
 *
 * Meta description (158 chars):
 *   Leads with what separates this review — full clinical dose audit,
 *   caffeine stack breakdown, COA verification, and pharmacist drug
 *   interaction notes. Score upfront filters non-purchase traffic.
 */

import type { Metadata } from 'next'
import TLBulkBlackReview from './TLBulkBlackReview'

const SITE_URL = 'https://fitlabreviews.com'
const PAGE_URL = `${SITE_URL}/reviews/transparent-labs-bulk-black-review`
const OG_IMAGE = 'https://pub-cfbcca8550f5404f92083870525d6d19.r2.dev/ingredients/tl-bulk-black-preworkout.webp'

export const metadata: Metadata = {
  title: 'Transparent Labs BULK Black Review (2026): Dose Audit, COA & Pharmacist Notes | Fitlab',
  description:
    '350mg caffeine stack broken down: 275mg anhydrous + 75mg Infinergy. 8 ingredients audited against clinical thresholds. COA verified. Informed Choice certified. Score: 9.1/10.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type:          'article',
    url:            PAGE_URL,
    siteName:       'Fitlab Reviews',
    locale:         'en_US',
    title:         'Transparent Labs BULK Black Review (2026): Dose Audit & COA Verified',
    description:
      '350mg caffeine stack audited, 8 ingredients checked against clinical thresholds, COA verified. Pharmacist drug interaction notes. Score: 9.1/10.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Transparent Labs BULK Black pre-workout tub — Fitlab independent review' }],
    publishedTime: '2026-05-16T00:00:00.000Z',
    modifiedTime:  '2026-05-16T00:00:00.000Z',
    authors:       [`${SITE_URL}/authors#pankaj-singh`],
    section:       'Supplement Reviews',
    tags:          ['pre-workout', 'Transparent Labs', 'BULK Black', 'caffeine', 'citrulline malate', 'beta-alanine'],
  },
  twitter: {
    card:        'summary_large_image',
    site:        '@fitlabreviews',
    creator:     '@fitlabreviews',
    title:       'Transparent Labs BULK Black Review (2026): Dose Audit & COA Verified',
    description: '350mg caffeine stack (275mg anhydrous + 75mg Infinergy), full clinical dose audit, COA verified. Score: 9.1/10.',
    images:      [OG_IMAGE],
  },
  robots: {
    index:  true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 },
  },
  keywords: [
    'transparent labs bulk black review',
    'bulk black pre-workout review',
    'transparent labs bulk black ingredients',
    'bulk black caffeine amount',
    'bulk black vs bulk pre-workout',
    'transparent labs bulk black 2026',
    'is bulk black worth it',
    'transparent labs pre-workout review',
    'bulk black side effects',
    'bulk black beta-alanine dose',
  ],
  authors:  [{ name: 'Pankaj Singh', url: `${SITE_URL}/authors#pankaj-singh` }],
  category: 'Supplement Review',
}

export default function TLBulkBlackPage() {
  return <TLBulkBlackReview />
}
