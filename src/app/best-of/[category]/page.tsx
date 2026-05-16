import PageShell from '@/components/PageShell'
import JsonLd from '@/components/JsonLd'
import { getBestOf, getAllProduct } from '@/lib/data'
import BestOfProductCard from '@/components/BestOfProductCard'

const SITE_URL = 'https://fitlabreviews.com'

export function generateStaticParams() {
  return ['creatine', 'pre-workout', 'protein'].map(c => ({ category: c }))
}

export async function generateMetadata({ params }: { params: { category: string } }) {
  const cat  = getBestOf(params.category)
  const year = new Date().getFullYear()
  return {
    title:       `${cat.headline} (${year})`,
    description: cat.subhead,
    alternates:  { canonical: `${SITE_URL}/best/${params.category}` },
    openGraph: {
      type:        'article',
      url:         `${SITE_URL}/best/${params.category}`,
      title:       `${cat.headline} (${year}) — Fitlab`,
      description: cat.subhead,
    },
  }
}

export default function BestOfPage({ params }: { params: { category: string } }) {
  const cat      = getBestOf(params.category)
  const products = cat.productSlugs.map((slug, i) => ({ ...getAllProduct(slug), listRank: i + 1 }))
  const winner   = products[0]
  const url      = `${SITE_URL}/best/${params.category}`
  const year     = new Date().getFullYear()

  // ── JSON-LD ───────────────────────────────────────────────────────────────

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type':    'ItemList',
    name:       `${cat.headline} (${year})`,
    description: cat.subhead,
    url:         url,
    numberOfItems: products.length,
    itemListElement: products.map((p, i) => ({
      '@type':    'ListItem',
      position:   i + 1,
      name:       p.name,
      url:        `${SITE_URL}/reviews/${p.slug}`,
      image:      `${SITE_URL}/products/${p.slug}.webp`,
    })),
  }

  const articleSchema = {
    '@context':    'https://schema.org',
    '@type':       'Article',
    headline:      `${cat.headline} (${year})`,
    description:   cat.subhead,
    url:           url,
    datePublished: '2026-05-01',
    dateModified:  '2026-05-01',
    author:        { '@type': 'Organization', name: 'Fitlab Reviews', url: SITE_URL },
    publisher:     { '@type': 'Organization', name: 'Fitlab Reviews', url: SITE_URL, logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` } },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type':    'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',    item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Best',    item: `${SITE_URL}/best` },
      { '@type': 'ListItem', position: 3, name: cat.name,  item: url },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type':    'FAQPage',
    mainEntity: cat.faq.map(item => ({
      '@type': 'Question',
      name:    item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  return (
    <>
      <JsonLd schema={[itemListSchema, articleSchema, breadcrumbSchema, faqSchema]} />
      <PageShell crumbs={[
        { label: 'Home', href: '/' },
        { label: 'Best Of', href: '#' },
        { label: cat.name },
      ]}>

        {/* ── Hero ── */}
        <section className="py-14 sm:py-18 border-b border-rule">
          <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
            <div className="max-w-[760px]">
              <div className="skirt mb-4">Best of · {cat.name} · Updated May {year}</div>
              <h1 className="font-sans font-semibold leading-[1.04] tracking-[-0.035em] text-ink2 mb-5"
                  style={{ fontSize: 'clamp(32px, 4.8vw, 62px)' }}>
                {cat.headline.split(' ').slice(0, 2).join(' ')}{' '}
                <em className="hero-em">{cat.headline.split(' ').slice(2).join(' ')}</em>
              </h1>
              <p className="text-[15px] sm:text-[17px] leading-[1.7] text-ink3 mb-7 max-w-[600px]">{cat.subhead}</p>

              {/* Quick-pick bar */}
              <div className="flex flex-wrap items-center gap-3 p-4 bg-paper3 border border-rule rounded-[12px]">
                <div className="text-[11px] tracking-[0.14em] uppercase text-muted font-medium shrink-0">Top pick</div>
                <div className="flex-1 min-w-0">
                  <span className="font-sans font-semibold text-[14px] text-ink2">{winner.name}</span>
                  <span className="text-muted text-[13px] ml-2">{winner.brand} · ${winner.price}</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="font-serif-body text-[18px]" style={{ color: '#1b4332' }}>{winner.score}</span>
                  <span className="text-[11px] text-muted">/ 10</span>
                </div>
                <a href={`/reviews/${winner.slug}`}
                   className="shrink-0 text-[12px] font-medium text-white bg-clay rounded-full px-3.5 py-2 hover:bg-clayd transition-colors whitespace-nowrap">
                  Full review →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Score table ── */}
        <section className="py-10 sm:py-12 border-b border-rule bg-paper2 overflow-x-auto">
          <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
            <div className="skirt mb-5">At a glance</div>
            <div className="min-w-[560px]">
              <div className="grid text-[11px] font-medium uppercase tracking-[0.12em] text-muted pb-2 border-b border-rule"
                   style={{ gridTemplateColumns: '1fr repeat(3, 80px)' }}>
                <span>Product</span>
                <span className="text-center">Score</span>
                <span className="text-center">Price</span>
                <span className="text-center">Certified</span>
              </div>
              {products.map((p, i) => (
                <div key={p.slug}
                     className="grid items-center py-4 border-b border-rule last:border-b-0"
                     style={{ gridTemplateColumns: '1fr repeat(3, 80px)' }}>
                  <div className="flex items-center gap-3 min-w-0 pr-4">
                    <span className="font-serif-body text-[16px] shrink-0 w-5" style={{ color: '#1b4332' }}>{p.listRank}</span>
                    <div className="min-w-0">
                      <div className="font-medium text-[13px] text-ink2 truncate">{p.name}</div>
                      <div className="text-[11px] text-muted">{p.brand}</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="font-serif-body text-[17px]" style={{ color: '#1b4332' }}>{p.score}</span>
                  </div>
                  <div className="text-center text-[13px] font-medium text-ink2">${p.price}</div>
                  <div className="text-center text-[11px]">
                    {p.certifications && p.certifications.length > 0
                      ? <span className="text-clay font-medium">✓</span>
                      : <span className="text-muted">—</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Ranked cards ── */}
        <section className="py-14 sm:py-18 border-b border-rule">
          <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
            <div className="skirt mb-8">{products.length} products ranked</div>
            <div className="space-y-5">
              {products.map((p, i) => (
                <BestOfProductCard key={p.slug} product={p} rank={i + 1} isTopPick={i === 0} />
              ))}
            </div>
            <p className="mt-8 text-[12.5px] text-muted leading-[1.7] border-t border-rule pt-5 max-w-[760px]">
              Ranked against <a href="/scoring-rubric" className="text-clay hover:underline">Fitlab rubric v3.1</a>
              {' '}(Clinical dose 25% · Ingredient form 20% · Purity 20% · Value/gram 20% · Label honesty 15%).
              Affiliate links present — commission rate has no bearing on rank. Prices as of May {year}.
            </p>
          </div>
        </section>

        {/* ── Buying guide ── */}
        <section className="py-14 sm:py-18 border-b border-rule bg-paper2">
          <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
            <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-16 items-start">
              <div className="lg:sticky lg:top-24">
                <div className="skirt mb-3">Buying guide</div>
                <h2 className="font-sans font-semibold leading-[1.1] tracking-[-0.025em] text-ink2"
                    style={{ fontSize: 'clamp(22px, 2.4vw, 30px)' }}>
                  What to look for before you buy {cat.name.toLowerCase()}.
                </h2>
              </div>
              <div className="space-y-0">
                {cat.buyingGuide.map((item, i) => (
                  <div key={i} className={`py-7 ${i < cat.buyingGuide.length - 1 ? 'border-b border-rule' : ''}`}>
                    <h3 className="font-sans font-semibold text-[16px] text-ink2 tracking-[-0.01em] mb-2.5 flex items-start gap-3">
                      <span className="font-serif-body text-[18px] shrink-0 mt-0.5" style={{ color: '#1b4332' }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {item.heading}
                    </h3>
                    <p className="text-[14px] leading-[1.75] text-ink3 pl-8">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-14 sm:py-18 border-b border-rule">
          <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
            <div className="max-w-[720px]">
              <div className="skirt mb-8">Frequently asked</div>
              <div className="space-y-0">
                {cat.faq.map((item, i) => (
                  <div key={i} className={`py-6 ${i < cat.faq.length - 1 ? 'border-b border-rule' : ''}`}>
                    <h3 className="font-sans font-semibold text-[15px] sm:text-[16px] text-ink2 tracking-[-0.01em] mb-2.5">{item.q}</h3>
                    <p className="text-[14px] leading-[1.75] text-ink3 m-0">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── More categories ── */}
        <section className="py-12 sm:py-14">
          <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
            <div className="skirt mb-6">More best picks</div>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Best Creatine',    href: '/best/creatine' },
                { label: 'Best Pre-Workout', href: '/best/pre-workout' },
                { label: 'Best Protein',     href: '/best/protein' },
              ].filter(l => !l.href.endsWith(params.category)).map(l => (
                <a key={l.href} href={l.href}
                   className="text-[13px] font-medium text-ink2 border border-rule rounded-full px-4 py-2.5 bg-paper3 hover:border-clay hover:text-clay transition-all duration-150">
                  {l.label} →
                </a>
              ))}
            </div>
          </div>
        </section>

      </PageShell>
    </>
  )
}
