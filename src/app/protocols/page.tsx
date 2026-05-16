import PageShell from '@/components/PageShell'
import JsonLd from '@/components/JsonLd'

const SITE_URL = 'https://fitlabreviews.com'

export const metadata = {
  title: 'Protocols',
  description: 'Evidence-based supplement and nutrition protocols. When to take what, how much, and why — written for Indian athletes and gymgoers.',
  alternates: { canonical: `${SITE_URL}/protocols` },
}

const protocols = [
  {
    slug: 'creatine-loading-protocol',
    category: 'Creatine',
    title: 'Creatine protocol — daily dosing vs loading',
    description: 'The practical guide to creatine timing, loading vs maintenance, and what to do if you notice no effect after 6 weeks.',
    steps: ['5g daily, any time', 'No loading required for most people', 'Allow 3–4 weeks for full saturation', 'Consistent daily use > timing around workouts'],
    duration: 'Ongoing',
    evidence: 'A',
    live: true,
  },
  {
    slug: 'protein-timing-protocol',
    category: 'Protein',
    title: 'Protein intake protocol for muscle building',
    description: 'Daily protein targets, meal distribution, and how to use whey protein without over-complicating it.',
    steps: ['Target 1.6–2.2g protein per kg bodyweight', 'Distribute across 3–5 meals', 'Supplement only the gap between food and target', 'Post-workout timing matters less than daily total'],
    duration: 'Ongoing',
    evidence: 'A',
    live: true,
  },
  {
    slug: 'pre-workout-protocol',
    category: 'Pre-Workout',
    title: 'Pre-workout supplement timing protocol',
    description: 'When to take caffeine, how to avoid tolerance, and what to do on non-training days.',
    steps: ['Caffeine 30–45 min before training', 'Limit to 5 days/week to manage tolerance', 'Cycle off for 2 weeks every 8 weeks', 'Avoid after 3pm if training in evening'],
    duration: 'Cycle 8 weeks on / 2 weeks off',
    evidence: 'A',
    live: false,
  },
  {
    slug: 'ashwagandha-protocol',
    category: 'Adaptogens',
    title: 'Ashwagandha (KSM-66) protocol for stress and recovery',
    description: 'How to use KSM-66 ashwagandha correctly, when to expect results, and how long to run it.',
    steps: ['300–600mg KSM-66 daily', 'Take with food to reduce GI discomfort', 'Effects build over 4–8 weeks', 'Re-evaluate at 12 weeks'],
    duration: '8–12 weeks',
    evidence: 'B',
    live: false,
  },
  {
    slug: 'supplement-cycling-protocol',
    category: 'General',
    title: 'Which supplements to cycle — and which to take continuously',
    description: 'Creatine: continuous. Caffeine: cycle. Ashwagandha: cycle. Protein: continuous. The logic behind each.',
    steps: ['Creatine: continuous, no cycling needed', 'Caffeine: 8 weeks on, 2 weeks off', 'Adaptogens: 8–12 weeks on, 4 weeks off', 'Protein: continuous as needed'],
    duration: 'Reference guide',
    evidence: 'B',
    live: false,
  },
]

const catColors: Record<string, string> = {
  'Creatine':    '#1b4332',
  'Protein':     '#2d6a4f',
  'Pre-Workout': '#40916c',
  'Adaptogens':  '#52b788',
  'General':     '#7A736B',
}

export default function ProtocolsHub() {
  const liveProtocols  = protocols.filter(p => p.live)
  const draftProtocols = protocols.filter(p => !p.live)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Supplement Protocols — Fitlab Reviews',
    url: `${SITE_URL}/protocols`,
    publisher: { '@type': 'Organization', name: 'Fitlab Reviews', url: SITE_URL },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type':    'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',    item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Protocols', item: `${SITE_URL}/protocols` },
    ],
  }

  return (
    <>
      <JsonLd schema={[schema, breadcrumbSchema]} />
      <PageShell crumbs={[{ label: 'Home', href: '/' }, { label: 'Protocols' }]}>

        {/* Header */}
        <section className="py-14 sm:py-18 border-b border-rule">
          <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
            <div className="max-w-[640px]">
              <div className="skirt mb-4">Protocols · {protocols.length} total</div>
              <h1
                className="font-sans font-semibold leading-[1.04] tracking-[-0.035em] text-ink2 mb-4"
                style={{ fontSize: 'clamp(32px, 4.5vw, 56px)' }}
              >
                Not just what to take —<br />
                <em className="hero-em">exactly how to take it.</em>
              </h1>
              <p className="text-[15px] sm:text-[17px] leading-[1.7] text-ink3">
                Dose, timing, cycling, and what to expect. Written from the evidence,
                not from the label instructions that are designed to make you use more product.
              </p>
            </div>
          </div>
        </section>

        {/* Live protocols */}
        <section className="py-14 sm:py-16 border-b border-rule">
          <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
            <div className="skirt mb-8">Published protocols</div>
            <div className="max-w-[760px] space-y-0">
              {liveProtocols.map((proto, i) => (
                <div key={proto.slug} className={`py-8 ${i < liveProtocols.length - 1 ? 'border-b border-rule' : ''}`}>
                  <div className="flex flex-wrap items-center gap-2.5 mb-3">
                    <span
                      className="text-[10px] font-semibold tracking-[0.14em] uppercase rounded-full px-2.5 py-1"
                      style={{ background: `${catColors[proto.category]}18`, color: catColors[proto.category] }}
                    >
                      {proto.category}
                    </span>
                    <span className="text-[12px] text-muted">{proto.duration}</span>
                    <span className="text-[11px] font-semibold rounded-full px-2 py-0.5"
                          style={{ background: proto.evidence === 'A' ? '#1b4332' : '#52b788', color: '#fff' }}>
                      Tier {proto.evidence}
                    </span>
                  </div>

                  <h2 className="font-sans font-semibold text-[17px] sm:text-[19px] tracking-[-0.015em] text-ink2 mb-2 leading-[1.3]">
                    {proto.title}
                  </h2>
                  <p className="text-[14px] text-muted leading-[1.65] mb-4">{proto.description}</p>

                  {/* Steps */}
                  <div className="space-y-2 mb-4">
                    {proto.steps.map((step, j) => (
                      <div key={j} className="flex gap-3 items-start">
                        <span
                          className="font-serif-body text-[14px] shrink-0 mt-0.5"
                          style={{ color: catColors[proto.category] }}
                        >
                          {j + 1}
                        </span>
                        <span className="text-[13.5px] text-ink3 leading-[1.55]">{step}</span>
                      </div>
                    ))}
                  </div>

                  <a href={`/protocols/${proto.slug}`} className="text-[13px] text-clay font-medium hover:underline">
                    Full protocol →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coming soon */}
        <section className="py-12 sm:py-14 bg-paper2">
          <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
            <div className="skirt mb-6">In progress</div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-[760px]">
              {draftProtocols.map(proto => (
                <div key={proto.slug} className="bg-paper3 border border-rule rounded-[12px] p-4 opacity-70">
                  <span
                    className="text-[10px] font-semibold tracking-[0.12em] uppercase rounded-full px-2 py-0.5 inline-block mb-2"
                    style={{ background: `${catColors[proto.category]}18`, color: catColors[proto.category] }}
                  >
                    {proto.category}
                  </span>
                  <div className="font-medium text-[14px] text-ink2 leading-[1.35] mb-1">{proto.title}</div>
                  <div className="text-[11px] text-muted">{proto.duration}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </PageShell>
    </>
  )
}
