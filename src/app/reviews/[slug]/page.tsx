import PageShell from '@/components/PageShell'
import JsonLd from '@/components/JsonLd'
import { getProduct, authors } from '@/lib/data'

const SITE_URL = 'https://fitlabreviews.com'

export function generateStaticParams() {
  return [
    { slug: 'muscleblaze-biozyme-whey' },
    { slug: 'asitis-whey-protein' },
    { slug: 'asitis-creatine-monohydrate' },
    { slug: 'muscleblaze-creatine' },
    { slug: 'muscletech-vapor-x5' },
    { slug: 'bigmuscles-freak' },
  ]
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const p = getProduct(params.slug)
  const year = new Date().getFullYear()
  return {
    title: `${p.name} Review (${year})`,
    description: p.verdict,
    openGraph: {
      type:        'article',
      url:         `${SITE_URL}/reviews/${p.slug}`,
      title:       `${p.name} Review (${year}) — Fitlab`,
      description: p.verdict,
      images:      [{ url: `${SITE_URL}/og-review-${p.slug}.png`, width: 1200, height: 630, alt: p.name }],
    },
    alternates: { canonical: `${SITE_URL}/reviews/${p.slug}` },
  }
}

const ScoreBar = ({ label, value }: { label: string; value: number }) => (
  <div className="flex items-center gap-4 py-3.5 border-b border-rule last:border-b-0">
    <span className="text-[12px] font-medium uppercase tracking-[0.12em] text-muted w-[160px] shrink-0">{label}</span>
    <div className="flex-1 h-1.5 bg-paper2 rounded-full overflow-hidden">
      <div
        className="h-full rounded-full"
        style={{ width: `${(value / 10) * 100}%`, background: 'linear-gradient(90deg,#1b4332,#52b788)' }}
      />
    </div>
    <span className="font-serif-body text-[20px] w-8 text-right" style={{ color: '#1b4332' }}>{value}</span>
  </div>
)

export default function ReviewPage({ params }: { params: { slug: string } }) {
  const p    = getProduct(params.slug)
  const auth = authors[0]
  const url  = `${SITE_URL}/reviews/${p.slug}`

  // ── JSON-LD ───────────────────────────────────────────────────────────────

  const productSchema = {
    '@context': 'https://schema.org',
    '@type':    'Product',
    name:       `${p.name} — ${p.variant}`,
    brand:      { '@type': 'Brand', name: p.brand },
    description: p.verdict,
    image:      `${SITE_URL}/products/${p.slug}.webp`,
    offers: {
      '@type':       'Offer',
      url:           url,
      priceCurrency: 'USD',
      price:         p.price.toString(),
      availability:  'https://schema.org/InStock',
      priceValidUntil: '2026-12-31',
    },
    review: {
      '@type':  'Review',
      author:   { '@type': 'Person', name: auth.name, jobTitle: auth.credentials, url: auth.linkedin ?? SITE_URL },
      datePublished:  '2026-05-01',
      dateModified:   '2026-05-01',
      name:           `${p.name} Review`,
      reviewBody:     p.verdict,
      reviewRating: {
        '@type':       'Rating',
        ratingValue:   p.score.toString(),
        bestRating:    '10',
        worstRating:   '0',
      },
      publisher: { '@type': 'Organization', name: 'Fitlab Reviews', url: SITE_URL },
    },
    aggregateRating: {
      '@type':       'AggregateRating',
      ratingValue:   p.score.toString(),
      bestRating:    '10',
      worstRating:   '0',
      ratingCount:   '1',
      reviewCount:   '1',
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type':    'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',         item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Reviews',      item: `${SITE_URL}/reviews` },
      { '@type': 'ListItem', position: 3, name: p.category,     item: `${SITE_URL}/best/${p.category.toLowerCase()}` },
      { '@type': 'ListItem', position: 4, name: p.name,         item: url },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type':    'FAQPage',
    mainEntity: [
      {
        '@type':    'Question',
        name:       `Is ${p.name} worth buying?`,
        acceptedAnswer: { '@type': 'Answer', text: p.verdict },
      },
      {
        '@type':    'Question',
        name:       `What score does ${p.name} get on Fitlab?`,
        acceptedAnswer: { '@type': 'Answer', text: `${p.name} scores ${p.score} out of 10 on the Fitlab rubric, which grades products on clinical dose accuracy, ingredient form, third-party purity, value per gram, and label honesty.` },
      },
      {
        '@type':    'Question',
        name:       `Is ${p.name} third-party tested?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: p.certifications.length > 0
            ? `Yes. ${p.name} holds the following certifications: ${p.certifications.join(', ')}.`
            : `${p.name} does not currently hold a major third-party certification. See the full review for lot-testing details.`,
        },
      },
    ],
  }

  return (
    <>
      <JsonLd schema={[productSchema, breadcrumbSchema, faqSchema]} />
      <PageShell crumbs={[
        { label: 'Home',    href: '/' },
        { label: 'Reviews', href: '#' },
        { label: p.category, href: `/best/${p.category.toLowerCase()}` },
        { label: p.name },
      ]}>

        {/* ── Hero ── */}
        <section className="py-12 sm:py-16 border-b border-rule">
          <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_340px] lg:gap-16 items-start">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-5">
                  <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">{p.brand}</span>
                  <span className="text-muted opacity-40">·</span>
                  <a href={`/best/${p.category.toLowerCase()}`}
                     className="text-[11px] font-medium uppercase tracking-[0.12em] text-clay hover:underline">
                    {p.category}
                  </a>
                  <span className="text-muted opacity-40">·</span>
                  <span className="text-[11px] text-muted">Updated {p.updated}</span>
                </div>

                <h1 className="font-sans font-semibold leading-[1.06] tracking-[-0.03em] text-ink2 mb-2"
                    style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}>
                  {p.name}
                </h1>
                <p className="font-serif-body text-[20px] sm:text-[24px] text-muted mb-5"
                   style={{ fontVariationSettings: '"opsz" 72' }}>
                  {p.variant}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tags.map(t => (
                    <span key={t} className="text-[12px] bg-paper2 border border-rule text-ink3 rounded-full px-3 py-1">{t}</span>
                  ))}
                  {p.certifications.map(c => (
                    <span key={c} className="text-[12px] font-medium rounded-full px-3 py-1 border"
                          style={{ background: '#1b433214', color: '#1b4332', borderColor: '#1b433230' }}>
                      ✓ {c}
                    </span>
                  ))}
                </div>

                <p className="text-[15px] sm:text-[16px] leading-[1.75] text-ink3 max-w-[560px]">{p.verdict}</p>

                <div className="flex flex-wrap gap-3 mt-7">
                  <a href={`https://www.amazon.in/s?k=${encodeURIComponent(p.name)}`} target="_blank" rel="nofollow sponsored" className="inline-flex items-center gap-2 rounded-full px-[22px] py-[13px] text-[14px] font-medium bg-clay text-white hover:bg-clayd transition-all duration-150">
                    Check price on Amazon →
                  </a>
                  <span className="text-[11px] text-muted self-center leading-[1.5] max-w-[200px]">
                    Affiliate link — commission doesn't change our score.
                  </span>
                </div>
              </div>

              {/* Score card */}
              <div className="bg-paper3 border border-rule rounded-[14px] p-6 sm:p-8">
                <div className="w-full rounded-[10px] flex items-center justify-center mb-6 border border-rule"
                     style={{ aspectRatio: '4/3', background: p.imgBg }}>
                  <div className="w-24 h-32 rounded-lg opacity-25"
                       style={{ background: 'linear-gradient(135deg,#D3CCBE,#1b433240)' }} />
                </div>

                <div className="text-center mb-6 pb-6 border-b border-rule">
                  <div className="text-[11px] tracking-[0.18em] uppercase text-muted mb-2">Overall score</div>
                  <div className="font-serif-display leading-none tracking-[-0.04em]"
                       style={{ fontSize: '72px', color: '#1b4332', fontVariationSettings: '"opsz" 96' }}>
                    {p.score}
                  </div>
                  <div className="text-[14px] text-muted mt-1">out of 10</div>
                </div>

                <div className="space-y-2.5 mb-6">
                  {[
                    { label: 'Serving size',      val: p.servingSize },
                    { label: 'Protein per serve', val: p.protein },
                    { label: 'Calories',          val: String(p.calories) },
                    { label: 'Price',             val: `$${p.price}${p.priceWas ? ` (was $${p.priceWas})` : ''}` },
                  ].map(row => (
                    <div key={row.label} className="flex justify-between text-[13px]">
                      <span className="text-muted">{row.label}</span>
                      <span className="font-medium text-ink2">{row.val}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-rule">
                  <div className="text-[11px] tracking-[0.14em] uppercase text-muted font-medium mb-3">Rubric breakdown</div>
                  <ScoreBar label="Clinical dose"   value={p.scores.clinicalDose} />
                  <ScoreBar label="Ingredient form" value={p.scores.ingredientForm} />
                  <ScoreBar label="Purity"          value={p.scores.thirdPartyPurity} />
                  <ScoreBar label="Value/gram"      value={p.scores.valuePerGram} />
                  <ScoreBar label="Label honesty"   value={p.scores.labelHonesty} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Pros / Cons ── */}
        <section className="py-12 sm:py-14 border-b border-rule bg-paper2">
          <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
            <div className="grid gap-6 sm:grid-cols-2 max-w-[840px]">
              <div>
                <div className="text-[11px] tracking-[0.16em] uppercase font-medium text-clay mb-4">What we like</div>
                <ul className="space-y-2.5 list-none p-0 m-0">
                  {p.pros.map((pro, i) => (
                    <li key={i} className="flex gap-2.5 text-[14px] text-ink3 leading-[1.6]">
                      <span className="text-clay font-bold shrink-0 mt-0.5">+</span>{pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-[11px] tracking-[0.16em] uppercase font-medium text-muted mb-4">Worth knowing</div>
                <ul className="space-y-2.5 list-none p-0 m-0">
                  {p.cons.map((con, i) => (
                    <li key={i} className="flex gap-2.5 text-[14px] text-ink3 leading-[1.6]">
                      <span className="text-muted font-bold shrink-0 mt-0.5">–</span>{con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Full review body ── */}
        <section className="py-14 sm:py-16 border-b border-rule">
          <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_260px] lg:gap-16 items-start">
              <div className="max-w-[680px]">
                <div className="skirt mb-6">Full review</div>
                {p.reviewBody.split('\n\n').map((para, i) => {
                  if (para.startsWith('**') && para.includes('.**')) {
                    const [bold, ...rest] = para.split('** ')
                    return (
                      <p key={i} className="text-[15px] leading-[1.8] text-ink3 mb-5">
                        <strong className="text-ink2 font-semibold">{bold.replace('**', '')}</strong>{' '}{rest.join(' ')}
                      </p>
                    )
                  }
                  return <p key={i} className="text-[15px] leading-[1.8] text-ink3 mb-5 last:mb-0">{para}</p>
                })}
              </div>

              <div className="lg:sticky lg:top-24">
                <div className="bg-paper3 border border-rule rounded-[14px] p-5">
                  <div className="text-[11px] tracking-[0.14em] uppercase text-muted font-medium mb-4">Key ingredients</div>
                  <div className="space-y-2">
                    {p.ingredients.map(ing => (
                      <a key={ing} href={`/ingredients/${ing.toLowerCase().replace(/\s+/g, '-')}`}
                         className="flex items-center justify-between text-[13px] py-2 border-b border-rule last:border-b-0 hover:text-clay transition-colors group">
                        <span className="text-ink2 group-hover:text-clay">{ing}</span>
                        <span className="text-muted text-[11px] group-hover:text-clay">→</span>
                      </a>
                    ))}
                  </div>
                  <a href="/scoring-rubric"
                     className="mt-4 block text-center text-[12px] text-clay border border-clay/30 rounded-full py-2 hover:bg-clay/8 transition-colors">
                    How we scored this →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ (mirrors JSON-LD FAQPage) ── */}
        <section className="py-12 sm:py-14 border-b border-rule bg-paper2">
          <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
            <div className="max-w-[680px]">
              <div className="skirt mb-6">Frequently asked</div>
              <div className="space-y-0">
                {[
                  { q: `Is ${p.name} worth buying?`,                   a: p.verdict },
                  { q: `What score does ${p.name} get on Fitlab?`,     a: `${p.name} scores ${p.score} out of 10. Scores reflect clinical dose accuracy, ingredient form, third-party purity, value per gram of active, and label honesty.` },
                  { q: `Is ${p.name} third-party tested?`,             a: p.certifications.length > 0 ? `Yes — ${p.certifications.join(', ')}.` : 'No major third-party certification. See review for lot-testing details.' },
                ].map((item, i) => (
                  <div key={i} className={`py-5 ${i < 2 ? 'border-b border-rule' : ''}`}>
                    <h3 className="font-sans font-semibold text-[15px] text-ink2 tracking-[-0.01em] mb-2">{item.q}</h3>
                    <p className="text-[14px] leading-[1.7] text-ink3 m-0">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Author card ── */}
        <section className="py-10 sm:py-12 border-b border-rule">
          <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
            <div className="max-w-[680px]">
              <div className="skirt mb-4">Reviewed by</div>
              <div className="flex items-start gap-4 bg-paper3 border border-rule rounded-[14px] p-5">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-sans font-semibold text-[15px] shrink-0"
                     style={{ background: auth.color }}>
                  {auth.initials}
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-[15px] text-ink2">{auth.name}</div>
                  <div className="text-[12px] text-muted mb-1">{auth.role}</div>
                  <div className="text-[11px] tracking-[0.08em] uppercase font-medium mb-2" style={{ color: auth.color }}>
                    {auth.credentials}
                  </div>
                  <p className="text-[13px] text-muted leading-[1.6]">{auth.bio.split('.')[0]}.</p>
                  {auth.linkedin && (
                    <a href={auth.linkedin} target="_blank" rel="noopener noreferrer"
                       className="text-[12px] text-clay hover:underline mt-1 inline-block">
                      LinkedIn profile ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Affiliate disclaimer ── */}
        <section className="py-8">
          <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
            <p className="text-[12px] text-muted leading-[1.7] max-w-[680px]">
              <strong className="font-medium text-ink3">Affiliate disclosure:</strong>{' '}
              This review contains affiliate links. Purchases through them earn us a commission at no extra cost to you.
              This does not influence our rubric score. See our{' '}
              <a href="/conflicts-policy" className="text-clay hover:underline">conflicts policy</a>.
            </p>
          </div>
        </section>

      </PageShell>
    </>
  )
}
