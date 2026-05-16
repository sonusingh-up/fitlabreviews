import PageShell from '@/components/PageShell'
import JsonLd from '@/components/JsonLd'
import { getCompare, getAllProduct } from '@/lib/data'
import CompareTable from '@/components/CompareTable'

const SITE_URL = 'https://fitlabreviews.com'

export function generateStaticParams() {
  return [
    { slug: 'asitis-vs-muscleblaze-creatine' },
    { slug: 'muscleblaze-vs-asitis-whey' },
    { slug: 'bigmuscles-vs-muscletech-preworkout' },
  ]
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const pair = getCompare(params.slug)
  return {
    title:       `${pair.title} — Head-to-Head`,
    description: pair.subhead,
    alternates:  { canonical: `${SITE_URL}/compare/${params.slug}` },
    openGraph: {
      type:        'article',
      url:         `${SITE_URL}/compare/${params.slug}`,
      title:       `${pair.title} — Head-to-Head | Fitlab`,
      description: pair.subhead,
    },
  }
}

export default function ComparePage({ params }: { params: { slug: string } }) {
  const pair   = getCompare(params.slug)
  const [a, b] = pair.productSlugs.map(s => getAllProduct(s))
  const winner = getAllProduct(pair.verdict.winner)
  const url    = `${SITE_URL}/compare/${params.slug}`

  // ── JSON-LD ───────────────────────────────────────────────────────────────

  const articleSchema = {
    '@context':    'https://schema.org',
    '@type':       'Article',
    headline:      `${pair.title} — Head-to-Head Comparison`,
    description:   pair.subhead,
    url,
    datePublished: '2026-05-01',
    dateModified:  '2026-05-01',
    author:        { '@type': 'Organization', name: 'Fitlab Reviews', url: SITE_URL },
    publisher:     { '@type': 'Organization', name: 'Fitlab Reviews', url: SITE_URL, logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` } },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    mentions: [
      { '@type': 'Product', name: a.name, brand: { '@type': 'Brand', name: a.brand } },
      { '@type': 'Product', name: b.name, brand: { '@type': 'Brand', name: b.brand } },
    ],
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type':    'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',    item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Compare', item: `${SITE_URL}/compare` },
      { '@type': 'ListItem', position: 3, name: pair.title, item: url },
    ],
  }

  return (
    <>
      <JsonLd schema={[articleSchema, breadcrumbSchema]} />
      <PageShell crumbs={[
        { label: 'Home', href: '/' },
        { label: 'Compare', href: '#' },
        { label: pair.title },
      ]}>

        {/* ── Hero ── */}
        <section className="py-14 sm:py-18 border-b border-rule">
          <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
            <div className="skirt mb-4">Head-to-head comparison</div>
            <h1 className="font-sans font-semibold leading-[1.04] tracking-[-0.035em] text-ink2 mb-4"
                style={{ fontSize: 'clamp(28px, 4.2vw, 54px)' }}>
              <em className="hero-em">{pair.title.split(' vs ')[0]}</em>
              <span className="text-muted font-normal mx-3 font-serif-body text-[0.7em]">vs</span>
              <em className="hero-em">{pair.title.split(' vs ')[1]}</em>
            </h1>
            <p className="text-[15px] sm:text-[17px] leading-[1.7] text-ink3 max-w-[620px]">{pair.subhead}</p>
          </div>
        </section>

        {/* ── Product cards ── */}
        <section className="py-10 sm:py-12 border-b border-rule">
          <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-[760px]">
              {[a, b].map(p => {
                const isWinner = p.slug === pair.verdict.winner
                return (
                  <div key={p.slug}
                       className={`rounded-[14px] border p-5 sm:p-6 ${isWinner ? 'border-clay/40 bg-clay/5' : 'border-rule bg-paper3'}`}>
                    {isWinner && (
                      <div className="text-[10px] font-semibold tracking-[0.14em] uppercase text-white bg-clay rounded-full px-2.5 py-1 inline-block mb-3">
                        Our pick
                      </div>
                    )}
                    <div className="w-full rounded-[10px] flex items-center justify-center mb-4 border border-rule"
                         style={{ aspectRatio: '4/3', background: p.imgBg }}>
                      <div className="w-16 h-20 rounded-lg opacity-20"
                           style={{ background: 'linear-gradient(135deg,#D3CCBE,#1b433240)' }} />
                    </div>
                    <div className="text-[10px] tracking-[0.16em] uppercase text-muted font-medium mb-1">{p.brand}</div>
                    <h2 className="font-sans font-semibold text-[14px] sm:text-[15px] tracking-[-0.01em] text-ink2 leading-[1.3] mb-3">
                      {p.name}
                    </h2>
                    <div className="flex items-baseline gap-1.5 mb-3">
                      <span className="font-serif-body text-[28px] leading-none" style={{ color: '#1b4332' }}>{p.score}</span>
                      <span className="text-[12px] text-muted">/ 10</span>
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-rule">
                      <span className="font-semibold text-[15px] text-ink2">${p.price}</span>
                      <a href={`/reviews/${p.slug}`} className="text-[11px] font-medium text-clay hover:underline">
                        Full review →
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Comparison table ── */}
        <section className="py-12 sm:py-14 border-b border-rule overflow-x-auto">
          <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
            <div className="skirt mb-6">Full comparison</div>
            <CompareTable rows={pair.comparisonRows} labelA={a.name} labelB={b.name} />
          </div>
        </section>

        {/* ── Verdict ── */}
        <section className="py-12 sm:py-14 border-b border-rule bg-paper2">
          <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
            <div className="max-w-[680px]">
              <div className="skirt mb-4">Our verdict</div>

              <div className="flex items-center gap-4 p-5 bg-clay/8 border border-clay/25 rounded-[12px] mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                     style={{ background: winner.imgBg }}>
                  <span className="font-serif-body text-[16px]" style={{ color: '#1b4332' }}>{winner.score}</span>
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.14em] uppercase font-medium text-clay mb-0.5">Winner</div>
                  <div className="font-semibold text-[15px] text-ink2">{winner.name}</div>
                  <div className="text-[12px] text-muted">{winner.brand}</div>
                </div>
              </div>

              <p className="text-[15px] sm:text-[16px] leading-[1.75] text-ink3 mb-6">{pair.verdict.summary}</p>

              <div className="flex flex-wrap gap-3">
                <a href={`/reviews/${a.slug}`}
                   className="inline-flex items-center gap-2 rounded-full px-[20px] py-[11px] text-[13px] font-medium border border-clay text-clay hover:bg-clay hover:text-white transition-all duration-150">
                  {a.name.split(' ').slice(0, 3).join(' ')} review →
                </a>
                <a href={`/reviews/${b.slug}`}
                   className="inline-flex items-center gap-2 rounded-full px-[20px] py-[11px] text-[13px] font-medium border border-rule text-ink2 hover:border-clay hover:text-clay transition-all duration-150">
                  {b.name.split(' ').slice(0, 2).join(' ')} review →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── More comparisons ── */}
        <section className="py-12 sm:py-14">
          <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
            <div className="skirt mb-6">More comparisons</div>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Gold Standard vs ISO100',          href: '/compare/on-gold-standard-vs-dymatize-iso100' },
                { label: 'Transparent Labs vs Legion Pulse', href: '/compare/transparent-labs-vs-legion-pulse' },
                { label: 'ON Creatine vs Klean Athlete',     href: '/compare/optimum-creatine-vs-klean-athlete' },
              ].filter(l => !l.href.endsWith(params.slug)).map(l => (
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
