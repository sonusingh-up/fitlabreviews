import PageShell from '@/components/PageShell'
import JsonLd from '@/components/JsonLd'


const SITE_URL = "https://fitlabreviews.com"
const webPageSchema = {
  "@context": "https://schema.org",
  "@type":    "WebPage",
  name:       "Scoring Rubric v3.1 — Fitlab Reviews",
  description: "The five criteria and weights used to score every supplement on Fitlab.",
  url:        "https://fitlabreviews.com/scoring-rubric",
  publisher:  { "@type": "Organization", name: "Fitlab Reviews", url: "https://fitlabreviews.com" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fitlabreviews.com" },
      { "@type": "ListItem", position: 2, name: "Scoring Rubric", item: "https://fitlabreviews.com/scoring-rubric" },
    ],
  },
}
export const metadata = {
  title: 'Scoring Rubric v3.1 — Fitlab Reviews',
  description: 'The exact criteria, weights, and examples we use to score every supplement on Fitlab.',
  alternates: { canonical: 'https://fitlabreviews.com/scoring-rubric' },
}

const criteria = [
  {
    n: '01', weight: 25, label: 'Clinical dose',
    color: '#1b4332',
    summary: 'Does the serving size contain the dose used in the actual human trial?',
    body: `This is the single most important criterion because it determines whether a product
can actually do what it claims. We look up the specific ingredient, find the lowest-dose RCT
with positive results, and ask: does this product's serving match or exceed that?

Sub-clinical doses are scored proportionally. A product at 50% of clinical threshold gets
roughly half the available score in this category. Zero dose (ingredient listed but contributing
nothing meaningful) gets zero — regardless of how it looks on the label.`,
    examples: [
      { label: 'Full score (9–10)', desc: 'Creatine at 5g/serving vs 3–5g clinical threshold' },
      { label: 'Mid score (5–7)',   desc: 'L-Citrulline at 3g/serving vs 6–8g clinical threshold' },
      { label: 'Low score (1–3)',   desc: 'Ashwagandha at 100mg vs 300–600mg clinical threshold' },
    ],
  },
  {
    n: '02', weight: 20, label: 'Ingredient form',
    color: '#2d6a4f',
    summary: 'Is the specific molecular form used the one with clinical evidence?',
    body: `Magnesium oxide is ~4% bioavailable. Magnesium glycinate is ~80%. Both are listed
as "magnesium" on labels. Form determines whether the ingredient does anything once it's
in your body — and most consumers have no way to evaluate this without help.

We maintain a form-quality table for every ingredient we review. Where multiple forms have
strong evidence, we note the best-in-class and score alternatives relative to it. Generic
forms without specific evidence are scored conservatively.`,
    examples: [
      { label: 'Full score (9–10)', desc: 'KSM-66 ashwagandha (standardised, replicated)' },
      { label: 'Mid score (5–7)',   desc: 'Generic ashwagandha root powder (unstandardised)' },
      { label: 'Low score (1–3)',   desc: '"Proprietary ashwagandha blend" — undisclosed form' },
    ],
  },
  {
    n: '03', weight: 20, label: 'Third-party purity',
    color: '#40916c',
    summary: 'Has an independent lab verified label accuracy and absence of contaminants?',
    body: `We check four sources: Labdoor (lot-specific), NSF Certified for Sport (production audit),
Informed Sport (lot-specific), and ConsumerLab (independent purchase testing). A product can have
multiple certifications — we use the highest-quality evidence available.

Certification-only (no lot data) scores lower than lot-specific testing. Self-reported certificates
of analysis from the brand score zero in this category. The test has to be independent.`,
    examples: [
      { label: 'Full score (9–10)', desc: 'Informed Sport lot-tested + Labdoor A-grade result' },
      { label: 'Mid score (5–7)',   desc: 'NSF Certified (production audit, no lot data)' },
      { label: 'Low score (1–3)',   desc: 'Brand-provided CoA only — no independent verification' },
    ],
  },
  {
    n: '04', weight: 20, label: 'Value per gram',
    color: '#52b788',
    summary: 'What does one gram of clinically active ingredient cost?',
    body: `We calculate cost per gram of the primary clinically active ingredient — not per scoop
or per serving. This normalises across tub sizes, serving sizes, and filler content. A product
with 20g of protein per scoop costs twice as much "per gram of protein" as one with 40g at the
same tub price.

We adjust for certification premium: Informed Sport certification adds real testing cost and
we account for it. We don't adjust for branding, packaging, or marketing spend — those are
consumer costs that don't improve product quality.`,
    examples: [
      { label: 'Full score (9–10)', desc: '≤$0.04/g protein (certified). Competitive in category.' },
      { label: 'Mid score (5–7)',   desc: '$0.06–0.08/g protein. Premium without clear justification.' },
      { label: 'Low score (1–3)',   desc: '>$0.12/g protein. Cannot be justified by quality delta.' },
    ],
  },
  {
    n: '05', weight: 15, label: 'Label honesty',
    color: '#74c69d',
    summary: 'Does the label accurately represent what\'s in the product without obfuscation?',
    body: `This covers proprietary blends, amino acid spiking, misleading serving size manipulation,
undisclosed fillers, and claims not supported by the ingredient profile. It's the smallest weight
because the other four criteria capture most of the practical information — but label honesty
affects whether consumers can make informed decisions at all.

Proprietary blends automatically cap this score at 6/10. Full ingredient disclosure is the
baseline expectation, not a bonus.`,
    examples: [
      { label: 'Full score (9–10)', desc: 'Full disclosure, all doses listed, no unsubstantiated claims' },
      { label: 'Mid score (5–6)',   desc: 'Proprietary blend with some disclosure; minor claim issues' },
      { label: 'Low score (1–3)',   desc: 'Multiple hidden doses, amino spiking evidence, false claims' },
    ],
  },
]

const changelog = [
  { version: 'v3.1', date: 'March 2024', change: 'Added lot-specific testing differentiation in purity criterion. Updated form-quality table for magnesium and zinc.' },
  { version: 'v3.0', date: 'October 2023', change: 'Reweighted value criterion from 15% to 20%. Moved label honesty from 20% to 15% after analysis showed purity weight was insufficient.' },
  { version: 'v2.0', date: 'January 2023', change: 'Added ingredient form as standalone criterion (previously embedded in clinical dose). Introduced GRADE-aligned evidence tiers.' },
  { version: 'v1.0', date: 'August 2022', change: 'Initial rubric published. Four criteria: dose, purity, value, transparency.' },
]

export default function ScoringRubricPage() {
  return (
    <>
      <JsonLd schema={webPageSchema} />
      <PageShell crumbs={[{ label: 'Home', href: '/' }, { label: 'Methodology', href: '/methodology' }, { label: 'Scoring Rubric' }]}>

      {/* Header */}
      <section className="py-16 sm:py-20 border-b border-rule">
        <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <div className="max-w-[640px]">
              <div className="skirt mb-4">Scoring rubric · v3.1</div>
              <h1
                className="font-sans font-semibold leading-[1.04] tracking-[-0.035em] text-ink2 mb-5"
                style={{ fontSize: 'clamp(32px, 4.2vw, 54px)' }}
              >
                Five criteria.<br />
                Fixed weights.<br />
                <em className="hero-em">No exceptions.</em>
              </h1>
              <p className="text-[15px] sm:text-[17px] leading-[1.7] text-ink3">
                These weights were set before our first review and are only changed
                by consensus with a published justification and full re-score of
                all affected products.
              </p>
            </div>

            {/* Score donut visual */}
            <div className="hidden md:block">
              <div className="relative w-[220px] h-[220px]">
                <svg viewBox="0 0 220 220" className="w-full h-full -rotate-90">
                  {(() => {
                    const weights = [25, 20, 20, 20, 15]
                    const colors = ['#1b4332','#2d6a4f','#40916c','#52b788','#74c69d']
                    let offset = 0
                    const r = 80
                    const circ = 2 * Math.PI * r
                    return weights.map((w, i) => {
                      const dash = (w / 100) * circ
                      const el = (
                        <circle
                          key={i}
                          cx="110" cy="110" r={r}
                          fill="none"
                          stroke={colors[i]}
                          strokeWidth="28"
                          strokeDasharray={`${dash - 3} ${circ - dash + 3}`}
                          strokeDashoffset={-offset * circ / 100}
                        />
                      )
                      offset += w
                      return el
                    })
                  })()}
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-serif-body text-[32px] text-clay">100</span>
                  <span className="text-[11px] text-muted tracking-[0.12em] uppercase">points</span>
                </div>
              </div>
              {/* Legend */}
              <div className="mt-4 space-y-1.5">
                {criteria.map((c, i) => (
                  <div key={i} className="flex items-center gap-2 text-[12px] text-muted">
                    <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: c.color }} />
                    {c.label} · {c.weight}%
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Criteria detail */}
      <section className="py-16 sm:py-20">
        <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
          <div className="space-y-0">
            {criteria.map((c, i) => (
              <div key={i} className={`py-10 sm:py-12 ${i < criteria.length - 1 ? 'border-b border-rule' : ''}`}>
                <div className="grid gap-8 md:grid-cols-[260px_1fr] md:gap-14 items-start">

                  {/* Left — label */}
                  <div>
                    <span className="font-serif-body text-[20px] block mb-2" style={{ color: c.color }}>{c.n}</span>
                    <h2 className="font-sans font-semibold text-[22px] sm:text-[26px] tracking-[-0.02em] text-ink2 mb-2 leading-[1.2]">
                      {c.label}
                    </h2>
                    <div
                      className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[13px] font-semibold text-white mt-1"
                      style={{ background: c.color }}
                    >
                      {c.weight}% weight
                    </div>
                    <p className="text-[13px] text-muted mt-4 leading-[1.6] italic">
                      "{c.summary}"
                    </p>
                  </div>

                  {/* Right — detail */}
                  <div>
                    <p className="text-[14px] sm:text-[15px] leading-[1.75] text-ink3 whitespace-pre-line mb-6">
                      {c.body}
                    </p>
                    {/* Score examples */}
                    <div className="space-y-3">
                      <div className="text-[11px] tracking-[0.14em] uppercase text-muted font-medium mb-3">
                        Score examples
                      </div>
                      {c.examples.map((ex, j) => (
                        <div key={j} className="flex gap-3 items-start">
                          <span
                            className="shrink-0 text-[11px] font-medium rounded-full px-2.5 py-1 whitespace-nowrap mt-0.5"
                            style={{ background: `${c.color}18`, color: c.color }}
                          >
                            {ex.label}
                          </span>
                          <span className="text-[13px] text-ink3 leading-[1.6]">{ex.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Changelog */}
      <section className="py-14 sm:py-16 bg-paper2 border-t border-rule">
        <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
          <div className="max-w-[720px]">
            <div className="skirt mb-6">Version history</div>
            <div className="space-y-0">
              {changelog.map((c, i) => (
                <div key={i} className={`flex gap-5 sm:gap-8 py-5 ${i < changelog.length - 1 ? 'border-b border-rule' : ''}`}>
                  <div className="shrink-0 w-[52px]">
                    <span className="font-mono text-[12px] font-semibold text-clay bg-clay/10 rounded px-1.5 py-0.5">
                      {c.version}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="text-[11px] text-muted mb-1.5 tracking-[0.06em]">{c.date}</div>
                    <p className="text-[13.5px] text-ink3 leading-[1.65] m-0">{c.change}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </PageShell>
    </>
  )
}
