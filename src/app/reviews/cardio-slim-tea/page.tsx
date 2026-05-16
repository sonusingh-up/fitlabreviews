/**
 * src/app/reviews/cardio-slim-tea/page.tsx  ·  SERVER COMPONENT
 *
 * Next.js App Router cannot export `metadata` from a Client Component ('use client').
 * This file is the server boundary — it exports metadata and renders the
 * client component CardioSlimTeaReview which handles the FAQ useState accordion.
 */

import type { Metadata } from 'next'
import CardioSlimTeaReview from './CardioSlimTeaReview'

const SITE_URL      = 'https://fitlabreviews.com'
const PAGE_URL      = `${SITE_URL}/reviews/cardio-slim-tea`
const OG_IMAGE      = `${SITE_URL}https://pub-cfbcca8550f5404f92083870525d6d19.r2.dev/ingredients/cardio-slim-tea.webp`

export const metadata: Metadata = {
  title: 'Cardio Slim Tea Review (2026): 15 Ingredients, Doses Audited | Fitlab',
  description:
    'Cardio Slim Tea names 15 ingredients but discloses zero mg doses. Homocysteine-flush mechanism fact-checked, curcumin bioavailability problem explained, drug interactions flagged. Score: 4.4/10.',
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type:          'article',
    url:            PAGE_URL,
    siteName:       'Fitlab Reviews',
    locale:         'en_US',
    title:         'Cardio Slim Tea Review (2026): 15 Ingredients, Doses Audited',
    description:
      'Cardio Slim Tea names 15 ingredients but discloses zero mg doses. Homocysteine-flush mechanism fact-checked. Score: 4.4/10.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Cardio Slim Tea herbal tea pouch — Fitlab independent review' }],
    publishedTime: '2026-05-15T00:00:00.000Z',
    modifiedTime:  '2026-05-15T00:00:00.000Z',
    authors:       [`${SITE_URL}/authors#fitlab-research-team`],
    section:       'Supplement Reviews',
    tags:          ['cardiovascular supplements', 'cardio slim tea', 'herbal tea review', 'homocysteine'],
  },
  twitter: {
    card:        'summary_large_image',
    site:        '@fitlabreviews',
    creator:     '@fitlabreviews',
    title:       'Cardio Slim Tea Review (2026): 15 Ingredients, Doses Audited',
    description: '15 ingredients named, zero mg doses disclosed. Homocysteine mechanism fact-checked. Score: 4.4/10.',
    images:      [OG_IMAGE],
  },
  robots: {
    index:  true,
    follow: true,
    googleBot: {
      index:               true,
      follow:              true,
      'max-snippet':       -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  keywords: [
    'cardio slim tea review',
    'cardio slim tea ingredients',
    'cardio slim tea side effects',
    'does cardio slim tea work',
    'cardio slim tea 2026',
    'homocysteine supplement review',
    'truth leaves cardio tea',
    'herbal blood pressure tea review',
  ],
  authors:  [{ name: 'Fitlab Research Team', url: `${SITE_URL}/authors#fitlab-research-team` }],
  category: 'Supplement Review',
}

export default function CardioSlimTeaPage() {
  return <CardioSlimTeaReview />
}
