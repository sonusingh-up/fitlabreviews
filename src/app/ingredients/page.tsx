import PageShell from '@/components/PageShell'
import JsonLd from '@/components/JsonLd'
import { ingredients } from '@/lib/data'

const SITE_URL = 'https://fitlabreviews.com'

export const metadata = {
  title: 'Ingredient Index',
  description: 'Every supplement ingredient mapped to clinical evidence. Dose ranges, best forms, evidence tiers — written by a pharmacist.',
  alternates: { canonical: `${SITE_URL}/ingredients` },
}

// All ingredient categories including future ones
const allIngredients = [
  ...ingredients,
  // Coming soon placeholders
  { slug: '', sym: 'D3',  color: '#B89438', label: 'Vitamin',    name: 'Vitamin D3',            evidenceTier: 'B', evidenceLabel: 'Moderate', dose: '1k–2k IU', frequency: 'Daily',      comingSoon: true },
  { slug: '', sym: 'Mg',  color: '#4A5B6E', label: 'Mineral',    name: 'Magnesium glycinate',   evidenceTier: 'B', evidenceLabel: 'Moderate', dose: '200–400mg', frequency: 'Daily',     comingSoon: true },
  { slug: '', sym: 'Ω3',  color: '#7B6240', label: 'Essential fat', name: 'EPA + DHA fish oil', evidenceTier: 'B', evidenceLabel: 'Moderate', dose: '1–3g',     frequency: 'Daily',      comingSoon: true },
  { slug: '', sym: 'Ash', color: '#5E5544', label: 'Adaptogen',  name: 'Ashwagandha KSM-66',    evidenceTier: 'B', evidenceLabel: 'Moderate', dose: '300–600mg', frequency: 'Daily',     comingSoon: true },
  { slug: '', sym: 'BA',  color: '#8B5CF6', label: 'Buffer',     name: 'Beta-alanine',          evidenceTier: 'A', evidenceLabel: 'Strong',   dose: '3.2–6.4g', frequency: 'Daily',      comingSoon: true },
  { slug: '', sym: 'Cit', color: '#40916c', label: 'Vasodilator',name: 'L-Citrulline malate',   evidenceTier: 'B', evidenceLabel: 'Moderate', dose: '6–8g',     frequency: 'Pre-workout', comingSoon: true },
  { slug: '', sym: 'Cf',  color: '#8B3A2D', label: 'Stimulant',  name: 'Caffeine anhydrous',    evidenceTier: 'A', evidenceLabel: 'Strong',   dose: '150–200mg', frequency: 'Pre-workout', comingSoon: true },
  { slug: '', sym: 'Zn',  color: '#2d6a4f', label: 'Mineral',    name: 'Zinc bisglycinate',     evidenceTier: 'B', evidenceLabel: 'Moderate', dose: '15–30mg',  frequency: 'Daily',      comingSoon: true },
]

const tierColors: Record<string, { bg: string; text: string }> = {
  A: { bg: '#1b4332', text: '#fff' },
  B: { bg: '#52b788', text: '#fff' },
  C: { bg: '#D3CCBE', text: '#3A3733' },
}

export default function IngredientsHub() {
  const liveIngredients    = allIngredients.filter(i => !(i as any).comingSoon)
  const comingIngredients  = allIngredients.filter(i => (i as any).comingSoon)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Ingredient Index — Fitlab Reviews',
    url: `${SITE_URL}/ingredients`,
    description: 'Every supplement ingredient mapped to clinical evidence.',
    publisher: { '@type': 'Organization', name: 'Fitlab Reviews', url: SITE_URL },
  }

  return (
    <>
      <JsonLd schema={schema} />
      <PageShell crumbs={[{ label: 'Home', href: '/' }, { label: 'Ingredients' }]}>

        {/* Header */}
        <section className="py-14 sm:py-18 border-b border-rule">
          <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
            <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
              <div className="max-w-[640px]">
                <div className="skirt mb-4">Ingredient index · {liveIngredients.length} live · {comingIngredients.length} coming</div>
                <h1
                  className="font-sans font-semibold leading-[1.04] tracking-[-0.035em] text-ink2 mb-4"
                  style={{ fontSize: 'clamp(32px, 4.5vw, 56px)' }}
                >
                  What's actually in<br />
                  <em className="hero-em">your supplements.</em>
                </h1>
                <p className="text-[15px] sm:text-[17px] leading-[1.7] text-ink3">
                  Mechanism, clinical dose, best form, and the honest answer on whether
                  it works — not the abstract, the actual outcome in actual people.
                </p>
              </div>

              {/* Evidence tier legend */}
              <div className="bg-paper3 border border-rule rounded-[14px] p-5 self-start">
                <div className="text-[11px] tracking-[0.14em] uppercase text-muted font-medium mb-3">Evidence tiers</div>
                {[
                  { tier: 'A', label: 'Strong',   desc: 'Multiple RCTs' },
                  { tier: 'B', label: 'Moderate', desc: 'Some RCTs, mixed' },
                  { tier: 'C', label: 'Limited',  desc: 'Observational only' },
                ].map(t => (
                  <div key={t.tier} className="flex items-center gap-2.5 py-2 border-b border-rule last:border-b-0">
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0"
                      style={{ background: tierColors[t.tier].bg, color: tierColors[t.tier].text }}
                    >
                      {t.tier}
                    </span>
                    <div>
                      <span className="text-[13px] font-medium text-ink2">{t.label}</span>
                      <span className="text-[11px] text-muted ml-1.5">{t.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Live ingredients grid */}
        <section className="py-14 sm:py-16 border-b border-rule">
          <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
            <div className="skirt mb-8">Published · {liveIngredients.length} ingredients</div>
            <div
              className="grid rounded-[14px] overflow-hidden border border-rule"
              style={{ gap: '1px', background: '#D3CCBE' }}
            >
              {liveIngredients.map((ing, i) => (
                <a
                  key={ing.slug}
                  href={`/ingredients/${ing.slug}`}
                  className="flex items-start gap-5 bg-paper3 hover:bg-white transition-colors p-5 sm:p-6 group"
                >
                  {/* Symbol */}
                  <div
                    className="font-serif-display leading-none shrink-0 w-14"
                    style={{ fontSize: '40px', color: ing.color, fontVariationSettings: '"opsz" 96' }}
                  >
                    {ing.sym}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] tracking-[0.16em] uppercase font-medium mb-1" style={{ color: ing.color }}>
                      {ing.label}
                    </div>
                    <h3 className="font-sans font-medium text-[15px] sm:text-[16px] tracking-[-0.01em] text-ink2 mb-1 group-hover:text-clay transition-colors">
                      {ing.name}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-[12px] text-muted">
                      <span>{ing.dose} {ing.frequency}</span>
                      <span>·</span>
                      <span>{(ing as any).studyCount ?? '—'} studies</span>
                    </div>
                  </div>

                  {/* Tier badge */}
                  <div className="shrink-0 flex flex-col items-end gap-2">
                    <span
                      className="text-[11px] font-semibold rounded-full px-2.5 py-1"
                      style={{ background: tierColors[ing.evidenceTier]?.bg, color: tierColors[ing.evidenceTier]?.text }}
                    >
                      Tier {ing.evidenceTier}
                    </span>
                    <span className="text-muted text-[14px] hidden sm:block group-hover:text-clay transition-colors">→</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Coming soon grid */}
        <section className="py-12 sm:py-14 bg-paper2">
          <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
            <div className="skirt mb-6">In progress · {comingIngredients.length} ingredients</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {comingIngredients.map((ing, i) => (
                <div
                  key={i}
                  className="bg-paper3 border border-rule rounded-[12px] p-4 opacity-60"
                >
                  <div
                    className="font-serif-display leading-none mb-2"
                    style={{ fontSize: '32px', color: ing.color, fontVariationSettings: '"opsz" 72' }}
                  >
                    {ing.sym}
                  </div>
                  <div className="text-[11px] tracking-[0.14em] uppercase text-muted font-medium mb-0.5">{ing.label}</div>
                  <div className="font-medium text-[13px] text-ink2">{ing.name}</div>
                  <div className="text-[11px] text-muted mt-1.5">Coming soon</div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </PageShell>
    </>
  )
}
