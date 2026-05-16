import PageShell from '@/components/PageShell'
import JsonLd from '@/components/JsonLd'

const SITE_URL = 'https://fitlabreviews.com'

export const metadata = {
  title: 'Blog — News & Updates',
  description: 'Supplement news, formula change alerts, new study breakdowns, and Fitlab updates for the Indian market.',
  alternates: { canonical: `${SITE_URL}/blog` },
}

const posts = [
  {
    slug: 'muscleblaze-biozyme-formula-2026',
    category: 'Formula update',
    title: 'MuscleBlaze Biozyme formula — what changed in 2025 and does it still score well?',
    excerpt: 'MuscleBlaze quietly updated the Biozyme formula in late 2024. We retested the new batch. Here is what changed and whether it affects our recommendation.',
    date: 'May 2026',
    readTime: '5 min',
    live: false,
  },
  {
    slug: 'asitis-creatine-lot-test-2026',
    category: 'Lab test',
    title: 'AS-IT-IS Creatine 2026 lot test — Creapure source still verified',
    excerpt: 'We tested a fresh batch of AS-IT-IS Creatine against the Creapure specification. Results, methodology, and what this means for our score.',
    date: 'May 2026',
    readTime: '4 min',
    live: false,
  },
  {
    slug: 'india-supplement-adulteration-2025',
    category: 'Consumer alert',
    title: '5 Indian protein brands caught with inaccurate labels in 2025 — what we know',
    excerpt: 'Third-party testing data from 2025 identified several Indian brands with protein content 10–20% below label claims. Names, data, and what to do.',
    date: 'April 2026',
    readTime: '7 min',
    live: false,
  },
  {
    slug: 'creatine-hcl-vs-monohydrate-new-study',
    category: 'Research',
    title: 'New meta-analysis on creatine HCl vs monohydrate — does it change anything?',
    excerpt: 'A 2025 meta-analysis claimed HCl has superior bioavailability. We read the full paper. Here is what it actually shows and whether it changes the recommendation.',
    date: 'March 2026',
    readTime: '6 min',
    live: false,
  },
  {
    slug: 'fitlab-scoring-rubric-v31',
    category: 'Site update',
    title: 'Scoring rubric updated to v3.1 — what changed and why',
    excerpt: 'We updated the purity sub-criterion to distinguish between lot-specific testing and production-audit certification. 4 product scores changed as a result.',
    date: 'March 2026',
    readTime: '3 min',
    live: false,
  },
]

const catColors: Record<string, string> = {
  'Formula update': '#1b4332',
  'Lab test':       '#2d6a4f',
  'Consumer alert': '#B95C3A',
  'Research':       '#40916c',
  'Site update':    '#7A736B',
}

export default function BlogHub() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Fitlab Reviews — Blog',
    url: `${SITE_URL}/blog`,
    publisher: { '@type': 'Organization', name: 'Fitlab Reviews', url: SITE_URL },
    blogPost: posts.filter(p => p.live).map(p => ({
      '@type': 'BlogPosting',
      headline: p.title,
      url: `${SITE_URL}/blog/${p.slug}`,
      datePublished: p.date,
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type':    'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
    ],
  }

  return (
    <>
      <JsonLd schema={[schema, breadcrumbSchema]} />
      <PageShell crumbs={[{ label: 'Home', href: '/' }, { label: 'Blog' }]}>

        {/* Header */}
        <section className="py-14 sm:py-18 border-b border-rule">
          <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
            <div className="max-w-[640px]">
              <div className="skirt mb-4">Blog · news &amp; updates</div>
              <h1
                className="font-sans font-semibold leading-[1.04] tracking-[-0.035em] text-ink2 mb-4"
                style={{ fontSize: 'clamp(32px, 4.5vw, 56px)' }}
              >
                Formula changes,<br />
                <em className="hero-em">lab tests, new research.</em>
              </h1>
              <p className="text-[15px] sm:text-[17px] leading-[1.7] text-ink3">
                Short posts on supplement news that actually matters for Indian consumers —
                label fraud alerts, formula updates, study breakdowns, and site changes.
              </p>
            </div>
          </div>
        </section>

        {/* Posts */}
        <section className="py-14 sm:py-16">
          <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">

            {/* Coming soon banner */}
            <div className="mb-10 p-5 bg-clay/8 border border-clay/25 rounded-[12px] flex items-start gap-3">
              <span className="text-clay font-bold text-[16px] shrink-0 mt-0.5">!</span>
              <div>
                <div className="font-medium text-[14px] text-ink2 mb-1">Blog launching soon</div>
                <p className="text-[13px] text-muted leading-[1.6]">
                  Posts below are in the queue. Subscribe to the newsletter to get each one
                  the day it publishes — it is the fastest way to be notified.
                </p>
              </div>
            </div>

            <div className="max-w-[760px] space-y-0">
              {posts.map((post, i) => (
                <div
                  key={post.slug}
                  className={`py-7 ${i < posts.length - 1 ? 'border-b border-rule' : ''} ${!post.live ? 'opacity-65' : ''}`}
                >
                  <div className="flex flex-wrap items-center gap-2.5 mb-3">
                    <span
                      className="text-[10px] font-semibold tracking-[0.14em] uppercase rounded-full px-2.5 py-1"
                      style={{ background: `${catColors[post.category]}18`, color: catColors[post.category] }}
                    >
                      {post.category}
                    </span>
                    <span className="text-[12px] text-muted">{post.date}</span>
                    <span className="text-muted opacity-40">·</span>
                    <span className="text-[12px] text-muted">{post.readTime} read</span>
                    {!post.live && (
                      <span className="text-[10px] font-medium tracking-[0.1em] uppercase bg-paper2 border border-rule text-muted rounded-full px-2 py-0.5">
                        Coming soon
                      </span>
                    )}
                  </div>

                  {post.live ? (
                    <a href={`/blog/${post.slug}`} className="group">
                      <h2 className="font-sans font-semibold text-[17px] sm:text-[18px] tracking-[-0.015em] text-ink2 mb-2 leading-[1.3] group-hover:text-clay transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-[14px] leading-[1.7] text-muted">{post.excerpt}</p>
                      <div className="text-[13px] text-clay font-medium mt-3 group-hover:underline">Read →</div>
                    </a>
                  ) : (
                    <>
                      <h2 className="font-sans font-semibold text-[17px] sm:text-[18px] tracking-[-0.015em] text-ink2 mb-2 leading-[1.3]">
                        {post.title}
                      </h2>
                      <p className="text-[14px] leading-[1.7] text-muted">{post.excerpt}</p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

      </PageShell>
    </>
  )
}
