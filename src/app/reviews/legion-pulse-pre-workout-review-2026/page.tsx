/**
 * src/app/reviews/legion-pulse-pre-workout-review-2026/page.tsx
 * SERVER COMPONENT — exports metadata, renders client component
 *
 * Primary keyword  → "Legion Pulse pre-workout review"
 * Secondary        → "Legion Pulse ingredients" / "Legion Pulse caffeine"
 *                    "Legion Pulse Labdoor" / "is Legion Pulse worth it"
 *
 * Title (60 chars): "Legion Pulse Review (2026): Lab Tested, Doses Audited | Fitlab"
 * Meta (158 chars): Leads with the real lab data differentiator — Labdoor lot 2416421
 *   found 9.2g citrulline vs 8g claimed, 380mg caffeine vs 350mg.
 */

import type { Metadata } from 'next'
import LegionPulseReview from './LegionPulseReview'

const SITE_URL = 'https://fitlabreviews.com'
const PAGE_URL = `${SITE_URL}/reviews/legion-pulse-pre-workout-review-2026`
const OG_IMAGE = 'https://pub-cfbcca8550f5404f92083870525d6d19.r2.dev/ingredients/legion-pulse-preworkout.webp'

export const metadata: Metadata = {
  title: 'Legion Pulse Pre-Workout Review (2026): Labdoor Tested, All Doses Audited | Fitlab',
  description:
    'Labdoor lot 2416421 (Mar 2026): 9.2g citrulline found vs 8g claimed, 380mg caffeine vs 350mg, all heavy metals pass. 6 ingredients audited against clinical thresholds. Score: 8.8/10.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type:          'article',
    url:            PAGE_URL,
    siteName:       'Fitlab Reviews',
    locale:         'en_US',
    title:         'Legion Pulse Review (2026): Labdoor Lab Tested, All Doses Audited',
    description:
      'Real Labdoor data (Mar 2026): every ingredient over-delivers vs label. 6 ingredients vs clinical thresholds. 350mg caffeine breakdown. Score: 8.8/10.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Legion Pulse pre-workout tub — Fitlab independent review 2026' }],
    publishedTime: '2026-05-16T00:00:00.000Z',
    modifiedTime:  '2026-05-16T00:00:00.000Z',
    authors:       [`${SITE_URL}/authors#pankaj-singh`],
    section:       'Supplement Reviews',
    tags:          ['pre-workout', 'Legion', 'Legion Pulse', 'citrulline malate', 'beta-alanine', 'caffeine', 'Labdoor'],
  },
  twitter: {
    card:        'summary_large_image',
    site:        '@fitlabreviews',
    creator:     '@fitlabreviews',
    title:       'Legion Pulse Review (2026): Labdoor Tested, All Doses Audited',
    description: 'Labdoor found 9.2g citrulline vs 8g claimed, 380mg caffeine vs 350mg. All heavy metals pass. Score: 8.8/10.',
    images:      [OG_IMAGE],
  },
  robots: {
    index:  true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 },
  },
  keywords: [
    'legion pulse review',
    'legion pulse pre-workout review',
    'legion pulse ingredients',
    'legion pulse caffeine',
    'legion pulse labdoor',
    'is legion pulse worth it',
    'legion pulse 2026',
    'legion pulse side effects',
    'legion pulse vs transparent labs',
    'legion athletics pulse review',
    'legion pulse beta alanine',
    'legion pulse citrulline',
  ],
  authors:  [{ name: 'Pankaj Singh', url: `${SITE_URL}/authors#pankaj-singh` }],
  category: 'Supplement Review',
}

export default function LegionPulsePage() {
  return <LegionPulseReview />
}
