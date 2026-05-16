/**
 * src/app/reviews/c4-original-pre-workout-review-2026/page.tsx
 * SERVER COMPONENT — exports metadata, renders client component
 *
 * Primary keyword  → "C4 Original pre-workout review"
 * Secondary        → "C4 Original ingredients" / "C4 Original caffeine"
 *                    "Cellucor C4 review 2026" / "is C4 Original worth it"
 *                    "C4 pre-workout formula 2025"
 *
 * Title (60 chars): "C4 Original Review (2026): Formula Audited, Doses Assessed | Fitlab"
 * Meta (158 chars): Leads with the key formula finding — proprietary Velox blend,
 *   under-dosed beta-alanine, and what the 2025 reformulation actually changed.
 */

import type { Metadata } from 'next'
import C4OriginalReview from './C4OriginalReview'

const SITE_URL = 'https://fitlabreviews.com'
const PAGE_URL = `${SITE_URL}/reviews/c4-original-pre-workout-review-2026`
const OG_IMAGE = 'https://pub-cfbcca8550f5404f92083870525d6d19.r2.dev/ingredients/c4-original-preworkout.webp'

export const metadata: Metadata = {
  title: 'Cellucor C4 Original Pre-Workout Review (2026): Formula & Doses Audited',
  description:
    "2026 formula audit: 200mg caffeine, 2g CarnoSyn beta-alanine (sub-clinical), 1g creatine nitrate (sub-clinical), Velox® 2.4g blend hides citrulline split. Score: 6.4/10. Here's exactly why.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'article',
    url: PAGE_URL,
    siteName: 'Fitlab Reviews',
    locale: 'en_US',
    title: 'C4 Original Pre-Workout Review (2026): Formula & Doses Audited',
    description:
      "200mg caffeine ✓ · 2g beta-alanine (below clinical 3.2g threshold) · 1g creatine nitrate (well below 5g standard) · Velox® blend undisclosed split. Score: 6.4/10.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Cellucor C4 Original pre-workout tub — Fitlab independent review 2026',
      },
    ],
    publishedTime: '2026-05-16T00:00:00.000Z',
    modifiedTime: '2026-05-16T00:00:00.000Z',
    authors: [`${SITE_URL}/authors#pankaj-singh`],
    section: 'Supplement Reviews',
    tags: [
      'pre-workout',
      'C4 Original',
      'Cellucor',
      'beta-alanine',
      'creatine nitrate',
      'caffeine',
      'PeptiPump',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fitlabreviews',
    creator: '@fitlabreviews',
    title: 'C4 Original Pre-Workout Review (2026): Formula Audited',
    description:
      '200mg caffeine hits. Beta-alanine at 2g is below the 3.2g clinical threshold. Creatine nitrate at 1g is minimal. Score: 6.4/10.',
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  keywords: [
    'c4 original review',
    'cellucor c4 original pre-workout review',
    'c4 original ingredients',
    'c4 original caffeine',
    'c4 original 2026',
    'c4 pre-workout review',
    'c4 original formula 2025',
    'c4 original side effects',
    'c4 original vs legion pulse',
    'cellucor c4 review',
    'c4 original beta-alanine dose',
    'c4 original creatine nitrate',
    'is c4 original worth it',
    'c4 pre-workout PeptiPump',
    'c4 original velox blend',
  ],
  authors: [{ name: 'Pankaj Singh', url: `${SITE_URL}/authors#pankaj-singh` }],
  category: 'Supplement Review',
}

export default function C4OriginalPage() {
  return <C4OriginalReview />
}
