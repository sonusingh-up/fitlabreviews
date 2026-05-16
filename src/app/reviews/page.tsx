import PageShell from '@/components/PageShell'
import JsonLd from '@/components/JsonLd'
import { products, extendedProducts } from '@/lib/data'

const SITE_URL = 'https://fitlabreviews.com'

export const metadata = {
  title: 'All Supplement Reviews (2026) | Fitlab Reviews',
  description: 'Every supplement review on Fitlab — scored against a 5-criterion public rubric: clinical dose, ingredient form, purity, value, and label honesty. Ranked by evidence, not margin.',
  alternates: { canonical: `${SITE_URL}/reviews` },
  openGraph: {
    type:        'website',
    url:         `${SITE_URL}/reviews`,
    siteName:    'Fitlab Reviews',
    title:       'All Supplement Reviews (2026) | Fitlab Reviews',
    description: 'Every supplement on Fitlab scored against a public 5-criterion rubric. Ranked by evidence, not affiliate margin.',
  },
  robots: { index: true, follow: true },
}

const categories = ['All', 'Protein', 'Creatine', 'Pre-Workout']

// Merge and deduplicate by slug
const allProducts: any[] = [...products, ...extendedProducts].reduce((acc: any[], p) => {
  if (!acc.find((x: any) => x.slug === p.slug)) acc.push(p)
  return acc
}, [] as any[])

const scoreColor = (score: number) => {
  if (score >= 9)   return '#1b4332'
  if (score >= 8)   return '#2d6a4f'
  if (score >= 7)   return '#52b788'
  return '#9C948A'
}

export default function ReviewsHub() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'All Supplement Reviews — Fitlab',
    url: `${SITE_URL}/reviews`,
    description: 'Every supplement review on Fitlab, scored against a public rubric.',
    publisher: { '@type': 'Organization', name: 'Fitlab Reviews', url: SITE_URL },
  }

  return (
    <>
      <JsonLd schema={schema} />
      <PageShell crumbs={[{ label: 'Home', href: '/' }, { label: 'All Reviews' }]}>

        {/* Header */}
        <section className="py-14 sm:py-18 border-b border-rule">
          <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
            <div className="max-w-[680px]">
              <div className="skirt mb-4">Reviews · {allProducts.length} products</div>
              <h1
                className="font-sans font-semibold leading-[1.04] tracking-[-0.035em] text-ink2 mb-4"
                style={{ fontSize: 'clamp(32px, 4.5vw, 56px)' }}
              >
                Every review,<br />
                <em className="hero-em">scored the same way.</em>
              </h1>
              <p className="text-[15px] sm:text-[17px] leading-[1.7] text-ink3">
                All products are graded against the same five-criterion rubric —
                clinical dose, ingredient form, purity, value per gram, and label honesty.
                The rubric is public. The weights never change.
              </p>
            </div>
          </div>
        </section>

        {/* Category filter + grid */}
        <section className="py-14 sm:py-16">
          <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">

            {/* Category pills */}
            <div className="flex flex-wrap gap-2 mb-10 pb-6 border-b border-rule">
              {categories.map(cat => (
                <a
                  key={cat}
                  href={cat === 'All' ? '/reviews' : `/best/${cat.toLowerCase().replace('-', '-')}`}
                  className={`text-[13px] rounded-full px-4 py-2 border transition-all duration-150 font-normal whitespace-nowrap
                    ${cat === 'All'
                      ? 'bg-clay text-white border-clay'
                      : 'bg-paper3 text-ink2 border-rule hover:border-clay hover:text-clay'}`}
                >
                  {cat}
                  {cat !== 'All' && (
                    <span className="ml-1.5 text-[11px] opacity-60">
                      {allProducts.filter(p => p.category === cat).length}
                    </span>
                  )}
                </a>
              ))}
            </div>

            {/* Reviews by category */}
            {['Protein', 'Creatine', 'Pre-Workout'].map(cat => {
              const catProducts = allProducts.filter(p => p.category === cat)
              return (
                <div key={cat} className="mb-14 last:mb-0">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-sans font-semibold text-[20px] sm:text-[22px] tracking-[-0.02em] text-ink2">
                      {cat}
                    </h2>
                    <a
                      href={`/best/${cat.toLowerCase().replace('-workout', '-workout')}`}
                      className="text-[13px] text-clay hover:underline"
                    >
                      Best of {cat} →
                    </a>
                  </div>

                  <div className="space-y-0 border-t border-rule">
                    {catProducts.map((p, i) => (
                      <a
                        key={p.slug}
                        href={`/reviews/${p.slug}`}
                        className="flex items-center gap-4 py-4 border-b border-rule hover:bg-paper3 -mx-3 px-3 rounded-[8px] transition-colors group"
                      >
                        {/* Rank */}
                        <span className="font-serif-body text-[16px] text-muted w-6 shrink-0">
                          {i + 1}
                        </span>

                        {/* Product image placeholder */}
                        <div
                          className="w-12 h-12 rounded-[8px] shrink-0 border border-rule flex items-center justify-center"
                          style={{ background: (p as any).imgBg ?? '#EDF5F0' }}
                        >
                          <div className="w-6 h-8 rounded opacity-20"
                               style={{ background: 'linear-gradient(135deg,#D3CCBE,#1b433240)' }} />
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <div className="text-[10px] tracking-[0.14em] uppercase text-muted font-medium mb-0.5">
                            {p.brand}
                          </div>
                          <div className="font-sans font-medium text-[14px] sm:text-[15px] text-ink2 tracking-[-0.01em] truncate group-hover:text-clay transition-colors">
                            {p.name}
                          </div>
                          <div className="flex flex-wrap gap-1.5 mt-1">
                            {(p as any).tags?.slice(0, 2).map((t: string) => (
                              <span key={t} className="text-[11px] text-muted">{t}</span>
                            ))}
                          </div>
                        </div>

                        {/* Score + Price */}
                        <div className="flex items-center gap-4 shrink-0">
                          <div className="text-right hidden sm:block">
                            <div className="text-[12px] text-muted">Price</div>
                            <div className="font-medium text-[14px] text-ink2">
                              ₹{(p as any).price?.toLocaleString('en-IN')}
                            </div>
                          </div>
                          <div className="text-center">
                            <div
                              className="font-serif-body text-[22px] leading-none"
                              style={{ color: scoreColor(p.score) }}
                            >
                              {p.score}
                            </div>
                            <div className="text-[10px] text-muted mt-0.5">/ 10</div>
                          </div>
                          <span className="text-muted text-[16px] hidden sm:block">→</span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )
            })}

            {/* Coming soon */}
            <div className="mt-10 p-6 bg-paper2 border border-rule rounded-[14px]">
              <div className="skirt mb-2">Coming soon</div>
              <p className="text-[14px] text-ink3 leading-[1.65]">
                Reviews for Omega-3, Ashwagandha, Vitamin D3, Magnesium, Fat burners,
                and BCAA products are in progress. Subscribe to the newsletter to be notified
                when new reviews publish.
              </p>
              <a href="/#newsletter" className="text-[13px] text-clay hover:underline mt-2 inline-block">
                Get notified →
              </a>
            </div>
          </div>
        </section>

      </PageShell>
    </>
  )
}
