import PageShell from '@/components/PageShell'
import ProductHoverCard from '@/components/ProductHoverCard'
import JsonLd from '@/components/JsonLd'
import { getIngredient, getProduct, authors } from '@/lib/data'

const SITE_URL = 'https://fitlabreviews.com'

export function generateStaticParams() {
  return [
    { slug: 'creatine-monohydrate' },
    { slug: 'whey-protein-isolate' },
    { slug: 'caffeine-anhydrous' },
    { slug: 'ashwagandha-ksm66' },
  ]
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const ing = getIngredient(params.slug)
  return {
    title:       `${ing.name} — Evidence, Doses & Forms`,
    description: ing.tagline,
    alternates:  { canonical: `${SITE_URL}/ingredients/${ing.slug}` },
    openGraph: {
      type:        'article',
      url:         `${SITE_URL}/ingredients/${ing.slug}`,
      title:       `${ing.name} — Evidence, Doses & Forms | Fitlab`,
      description: ing.tagline,
    },
  }
}

const EvidenceBadge = ({ tier, label }: { tier: string; label: string }) => {
  const map: Record<string, { bg: string; text: string }> = {
    A: { bg: '#1b4332', text: '#fff' },
    B: { bg: '#52b788', text: '#fff' },
    C: { bg: '#D3CCBE', text: '#3A3733' },
    D: { bg: '#f5f0e8', text: '#7A736B' },
  }
  const c = map[tier] ?? map.D
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[13px] font-semibold"
          style={{ background: c.bg, color: c.text }}>
      Tier {tier} · {label}
    </span>
  )
}

export default function IngredientPage({ params }: { params: { slug: string } }) {
  const ing      = getIngredient(params.slug)
  const related  = ing.productsContaining.map(s => getProduct(s))
  const auth     = authors[0]
  const url      = `${SITE_URL}/ingredients/${ing.slug}`

  // ── JSON-LD ───────────────────────────────────────────────────────────────

  const articleSchema = {
    '@context':       'https://schema.org',
    '@type':          'Article',
    headline:         `${ing.name} — Evidence, Doses & Forms`,
    description:      ing.tagline,
    url:              url,
    datePublished:    '2026-05-01',
    dateModified:     `2026-${ing.updated.includes('April') ? '04' : '05'}-01`,
    author: {
      '@type':   'Person',
      name:      auth.name,
      jobTitle:  auth.credentials,
      url:       auth.linkedin ?? SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name:    'Fitlab Reviews',
      url:     SITE_URL,
      logo:    { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    about: {
      '@type': 'Drug',
      name:    ing.name,
      description: ing.tagline,
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type':    'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',        item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Ingredients', item: `${SITE_URL}/ingredients` },
      { '@type': 'ListItem', position: 3, name: ing.name,      item: url },
    ],
  }

  return (
    <>
      <JsonLd schema={[articleSchema, breadcrumbSchema]} />
      <PageShell crumbs={[
        { label: 'Home', href: '/' },
        { label: 'Ingredients', href: '#' },
        { label: ing.name },
      ]}>

        {/* ── Hero ── */}
        <section className="py-12 sm:py-16 border-b border-rule">
          <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_300px] lg:gap-16 items-start">
              <div>
                <div className="font-serif-display leading-none mb-4 inline-block"
                     style={{ fontSize: 'clamp(72px, 10vw, 120px)', color: ing.color, fontVariationSettings: '"opsz" 144' }}>
                  {ing.sym}
                </div>
                <div className="flex flex-wrap items-center gap-2.5 mb-3">
                  <span className="text-[11px] font-medium uppercase tracking-[0.16em]" style={{ color: ing.color }}>{ing.label}</span>
                  <span className="text-muted opacity-40">·</span>
                  <EvidenceBadge tier={ing.evidenceTier} label={ing.evidenceLabel} />
                </div>
                <h1 className="font-sans font-semibold leading-[1.04] tracking-[-0.03em] text-ink2 mb-4"
                    style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}>
                  {ing.name}
                </h1>
                <p className="text-[15px] sm:text-[17px] leading-[1.7] text-ink3 max-w-[580px]">{ing.tagline}</p>
              </div>

              {/* Quick-facts card */}
              <div className="bg-paper3 border border-rule rounded-[14px] overflow-hidden">
                <div className="px-5 py-4 border-b border-rule">
                  <div className="text-[11px] tracking-[0.14em] uppercase text-muted font-medium">Quick facts</div>
                </div>
                {[
                  { label: 'Evidence tier',    val: `${ing.evidenceTier} — ${ing.evidenceLabel}` },
                  { label: 'Typical dose',     val: `${ing.dose} ${ing.frequency}` },
                  { label: 'Best form',        val: ing.bestForm },
                  { label: 'Studies reviewed', val: String(ing.studyCount) },
                  { label: 'Last updated',     val: ing.updated },
                ].map(row => (
                  <div key={row.label} className="flex justify-between items-start px-5 py-3.5 border-b border-rule last:border-b-0 gap-4">
                    <span className="text-[12px] text-muted shrink-0">{row.label}</span>
                    <span className="text-[13px] font-medium text-ink2 text-right">{row.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Forms ── */}
        <section className="py-12 sm:py-14 border-b border-rule bg-paper2">
          <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
            <div className="skirt mb-6">Available forms</div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 max-w-[900px]">
              {ing.forms.map((form, i) => {
                const isBest = form === ing.bestForm || ing.bestForm.startsWith(form)
                return (
                  <div key={i} className={`rounded-[12px] p-4 border ${isBest ? 'border-clay bg-clay/8' : 'border-rule bg-paper3'}`}>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className="font-sans font-medium text-[14px] text-ink2">{form}</span>
                      {isBest && <span className="text-[10px] font-semibold tracking-[0.1em] uppercase text-white bg-clay rounded-full px-2 py-0.5 shrink-0">Best</span>}
                    </div>
                    <div className="text-[12px] text-muted">{isBest ? 'Strongest clinical evidence' : 'Limited or weaker evidence'}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Pros / Cons ── */}
        <section className="py-12 sm:py-14 border-b border-rule">
          <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
            <div className="grid gap-8 sm:grid-cols-2 max-w-[780px]">
              <div>
                <div className="text-[11px] tracking-[0.16em] uppercase font-medium mb-4" style={{ color: ing.color }}>What the evidence supports</div>
                <ul className="space-y-2.5 list-none p-0 m-0">
                  {ing.pros.map((pro, i) => (
                    <li key={i} className="flex gap-2.5 text-[14px] text-ink3 leading-[1.6]">
                      <span className="font-bold shrink-0 mt-0.5" style={{ color: ing.color }}>+</span>{pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-[11px] tracking-[0.16em] uppercase font-medium text-muted mb-4">Caveats & limitations</div>
                <ul className="space-y-2.5 list-none p-0 m-0">
                  {ing.cons.map((con, i) => (
                    <li key={i} className="flex gap-2.5 text-[14px] text-ink3 leading-[1.6]">
                      <span className="text-muted font-bold shrink-0 mt-0.5">–</span>{con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Evidence summary ── */}
        <section className="py-14 sm:py-16 border-b border-rule">
          <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_240px] lg:gap-16 items-start">
              <div className="max-w-[680px]">
                <div className="skirt mb-6">Evidence summary</div>
                {ing.summary.split('\n\n').map((para, i) => {
                  if (para.startsWith('**')) {
                    const parts = para.split('**')
                    return (
                      <p key={i} className="text-[15px] leading-[1.8] text-ink3 mb-5">
                        <strong className="text-ink2 font-semibold">{parts[1]}</strong>{parts[2]}
                      </p>
                    )
                  }
                  return <p key={i} className="text-[15px] leading-[1.8] text-ink3 mb-5 last:mb-0">{para}</p>
                })}
              </div>

              {/* Evidence tier sidebar */}
              <div className="lg:sticky lg:top-24">
                <div className="bg-paper3 border border-rule rounded-[14px] p-5">
                  <div className="text-[11px] tracking-[0.14em] uppercase text-muted font-medium mb-4">Evidence tiers</div>
                  {[
                    { tier: 'A', label: 'Strong',       desc: 'Multiple RCTs, consistent outcomes' },
                    { tier: 'B', label: 'Moderate',     desc: 'Some RCTs, mixed outcomes' },
                    { tier: 'C', label: 'Limited',      desc: 'Observational or mechanistic only' },
                    { tier: 'D', label: 'Insufficient', desc: 'Insufficient human data' },
                  ].map(t => (
                    <div key={t.tier} className={`flex gap-3 items-start py-3 border-b border-rule last:border-b-0 ${ing.evidenceTier === t.tier ? 'opacity-100' : 'opacity-40'}`}>
                      <span className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5"
                            style={{ background: t.tier === 'A' ? '#1b4332' : t.tier === 'B' ? '#52b788' : '#D3CCBE', color: t.tier === 'A' || t.tier === 'B' ? '#fff' : '#7A736B' }}>
                        {t.tier}
                      </span>
                      <div>
                        <div className="font-medium text-[13px] text-ink2">{t.label}</div>
                        <div className="text-[11.5px] text-muted leading-[1.5]">{t.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-[11.5px] text-muted mt-3 leading-[1.6]">
                  Rated <strong className="text-ink2">Tier {ing.evidenceTier}</strong>. Last reviewed {ing.updated}.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Related products ── */}
        {related.length > 0 && (
          <section className="py-12 sm:py-14 border-b border-rule bg-paper2">
            <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
              <div className="skirt mb-6">Reviewed products containing {ing.name}</div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {related.map(p => <ProductHoverCard key={p.slug} p={p} />)}
              </div>
            </div>
          </section>
        )}

        {/* ── Disclaimer ── */}
        <section className="py-8">
          <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
            <p className="text-[12px] text-muted leading-[1.7] max-w-[680px]">
              <strong className="font-medium text-ink3">Not medical advice.</strong> Informational only.
              Consult a qualified professional before starting any supplement. Study count reflects
              PubMed entries reviewed as of {ing.updated}.
            </p>
          </div>
        </section>

      </PageShell>
    </>
  )
}
