/**
 * /reviews/muscleblaze-biozyme-whey/page.tsx  ·  SERVER COMPONENT
 *
 * Why split?
 * Next.js App Router cannot export `metadata` from a Client Component
 * ('use client'). This file is the server boundary; BiozymReviewPage.tsx
 * holds the interactive (useState FAQ accordion) code.
 *
 * ── SEO RATIONALE ─────────────────────────────────────────────────────────
 *
 * Primary keyword  →  "muscleblaze biozyme review"   (branded, high intent)
 * Secondary        →  "muscleblaze biozyme lab test" / "biozyme whey review"
 *                     "muscleblaze biozyme ingredients" / "digezyme whey"
 *
 * Title (67 chars):
 *   "MuscleBlaze Biozyme Whey Review (2026): Lab Tested & Verified | Fitlab"
 *
 * Meta description (158 chars):
 *   Leads with the lab result (106.8% protein accuracy) — the strongest
 *   differentiator vs affiliate-heavy reviews with no independent data.
 */

import type { Metadata } from 'next'
import BiozymReviewPage from './BiozymReviewPage'

const SITE_URL = 'https://fitlabreviews.com'
const PAGE_URL = `${SITE_URL}/reviews/muscleblaze-biozyme-whey`
const OG_IMAGE = `${SITE_URL}/products/muscleblaze-biozyme-whey.webp`

export const metadata: Metadata = {

  // ── Title tag ───────────────────────────────────────────────────────────
  title: 'MuscleBlaze Biozyme Whey Review (2026): Lab Tested & Verified | Fitlab',

  // ── Meta description ────────────────────────────────────────────────────
  description:
    'Labdoor found 26.7g protein vs 25g claimed (106.8% accuracy). Zero amino spiking, zero heavy metals. 4 years, 8 purchases reviewed by a pharmacist. Score: 8.4/10.',

  // ── Canonical ───────────────────────────────────────────────────────────
  alternates: {
    canonical: PAGE_URL,
  },

  // ── Open Graph ──────────────────────────────────────────────────────────
  openGraph: {
    type:          'article',
    url:            PAGE_URL,
    siteName:       'Fitlab Reviews',
    locale:         'en_US',
    title:         'MuscleBlaze Biozyme Whey Review (2026): Lab Tested & Verified',
    description:
      'Labdoor found 26.7g protein vs 25g claimed (106.8% accuracy). Zero amino spiking, zero heavy metals. 4 years, 8 purchases. Score: 8.4/10.',
    images: [
      {
        url:    OG_IMAGE,
        width:  1200,
        height: 630,
        alt:    'MuscleBlaze Biozyme Performance Whey — Fitlab independent review',
      },
    ],
    publishedTime: '2026-05-11T00:00:00.000Z',
    modifiedTime:  '2026-05-11T00:00:00.000Z',
    authors:       [`${SITE_URL}/authors#pankaj-singh`],
    section:       'Supplement Reviews',
    tags:          ['whey protein', 'muscleblaze', 'protein supplement', 'lab tested', 'digezyme'],
  },

  // ── Twitter / X ─────────────────────────────────────────────────────────
  twitter: {
    card:        'summary_large_image',
    site:        '@fitlabreviews',
    creator:     '@fitlabreviews',
    title:       'MuscleBlaze Biozyme Whey Review (2026): Lab Tested & Verified',
    description:
      '26.7g protein found vs 25g claimed. Zero amino spiking. 8 purchases across 4 years. Full Labdoor lot test. Score: 8.4/10.',
    images:      [OG_IMAGE],
  },

  // ── Robots ──────────────────────────────────────────────────────────────
  robots: {
    index:  true,
    follow: true,
    googleBot: {
      index:                true,
      follow:               true,
      'max-snippet':        -1,
      'max-image-preview':  'large',
      'max-video-preview':  -1,
    },
  },

  // ── Additional ──────────────────────────────────────────────────────────
  keywords: [
    'muscleblaze biozyme review',
    'muscleblaze biozyme performance whey review',
    'muscleblaze biozyme lab test',
    'muscleblaze biozyme ingredients',
    'muscleblaze biozyme 2026',
    'muscleblaze biozyme digezyme',
    'muscleblaze whey protein review',
    'biozyme whey protein side effects',
    'muscleblaze whey lab tested',
    'digezyme whey protein',
  ],
  authors:  [{ name: 'Pankaj Singh', url: `${SITE_URL}/authors#pankaj-singh` }],
  category: 'Supplement Review',
}

// ── Page ────────────────────────────────────────────────────────────────────
export default function MuscleBlazeBiozymePage() {
  return <BiozymReviewPage />
}
