import PageShell from '@/components/PageShell'
import JsonLd from '@/components/JsonLd'

const SITE_URL = 'https://fitlabreviews.com'

export const metadata = {
  title: 'Supplement Stacks',
  description: 'Evidence-based supplement stacks for specific goals — muscle building, fat loss, recovery. Built for the Indian market with real products and real prices.',
  alternates: { canonical: `${SITE_URL}/stacks` },
}

const stacks = [
  {
    slug: 'beginner-muscle-stack',
    goal: 'Muscle building',
    title: 'The beginner muscle stack',
    subtitle: 'Two supplements. Both work. No wasted money.',
    totalCost: '₹1,548/month',
    products: [
      { name: 'AS-IT-IS Creatine Monohydrate', dose: '5g/day', price: '₹649', role: 'Primary ergogenic' },
      { name: 'MuscleBlaze Biozyme Whey', dose: '1 scoop post-workout', price: '₹2,899 (3 months)', role: 'Protein target support' },
    ],
    rationale: 'Creatine and adequate protein are the only two supplements with strong, replicated evidence for muscle building. Everything else is either redundant or unproven. Start here before adding anything.',
    evidence: 'A',
    live: true,
  },
  {
    slug: 'budget-performance-stack',
    goal: 'Performance',
    title: 'The budget performance stack',
    subtitle: 'Maximum evidence per rupee spent.',
    totalCost: '₹728/month',
    products: [
      { name: 'AS-IT-IS Creatine Monohydrate', dose: '5g/day', price: '₹649', role: 'Strength + power' },
      { name: 'Caffeine (coffee or anhydrous)', dose: '150–200mg pre-workout', price: '₹79', role: 'Acute performance' },
    ],
    rationale: 'Creatine for chronic adaptation, caffeine for acute performance. Both are Tier A evidence. Combined cost under ₹750/month. This beats most pre-workouts at 5x the price.',
    evidence: 'A',
    live: true,
  },
  {
    slug: 'advanced-training-stack',
    goal: 'Advanced training',
    title: 'The advanced training stack',
    subtitle: 'For people who have the basics covered.',
    totalCost: '₹3,200–4,500/month',
    products: [
      { name: 'AS-IT-IS Creatine', dose: '5g/day', price: '₹649', role: 'Strength base' },
      { name: 'MuscleBlaze Biozyme Whey', dose: '1–2 scoops/day', price: '₹2,899', role: 'Protein target' },
      { name: 'Ashwagandha KSM-66', dose: '600mg/day', price: '₹699', role: 'Recovery + cortisol' },
    ],
    rationale: 'Adds KSM-66 ashwagandha to the muscle stack for people training under significant stress load. Modest but consistent cortisol modulation with adequate sleep support.',
    evidence: 'B',
    live: false,
  },
  {
    slug: 'fat-loss-stack',
    goal: 'Fat loss',
    title: 'The fat loss support stack',
    subtitle: 'What actually moves the needle — and what does not.',
    totalCost: '₹800–1,200/month',
    products: [
      { name: 'Whey protein (AS-IT-IS WPC80)', dose: '1–2 scoops/day', price: '₹1,899', role: 'Preserve muscle in deficit' },
      { name: 'Caffeine', dose: '150–200mg pre-workout', price: '₹79', role: 'Mild thermogenic + performance' },
    ],
    rationale: 'In a caloric deficit, the primary risk is muscle loss. Adequate protein prevents this. Caffeine provides a small thermogenic effect and maintains training performance. Fat burner products add little beyond these two.',
    evidence: 'B',
    live: false,
  },
  {
    slug: 'vegetarian-stack',
    goal: 'Vegetarian / vegan',
    title: 'The vegetarian athlete stack',
    subtitle: 'Filling the gaps that plant-based diets leave.',
    totalCost: '₹1,200–2,000/month',
    products: [
      { name: 'AS-IT-IS Creatine', dose: '5g/day', price: '₹649', role: 'Muscle creatine replenishment (lower baseline in veg diet)' },
      { name: 'Vitamin D3', dose: '1,000–2,000 IU/day', price: '₹299', role: 'Common deficiency in India' },
      { name: 'Zinc bisglycinate', dose: '15–25mg/day', price: '₹399', role: 'Reduced absorption from plant-based diet' },
    ],
    rationale: 'Vegetarians have significantly lower baseline creatine due to no dietary meat source — making creatine supplementation more impactful. Vitamin D and zinc deficiencies are both common in India and more pronounced without meat.',
    evidence: 'B',
    live: false,
  },
]

const goalColors: Record<string, string> = {
  'Muscle building': '#1b4332',
  'Performance':     '#2d6a4f',
  'Advanced training': '#40916c',
  'Fat loss':        '#52b788',
  'Vegetarian / vegan': '#74c69d',
}

export default function StacksHub() {
  const liveStacks = stacks.filter(s => s.live)
  const draftStacks = stacks.filter(s => !s.live)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Supplement Stacks — Fitlab Reviews',
    url: `${SITE_URL}/stacks`,
    publisher: { '@type': 'Organization', name: 'Fitlab Reviews', url: SITE_URL },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type':    'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',    item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Stacks', item: `${SITE_URL}/stacks` },
    ],
  }

  return (
    <>
      <JsonLd schema={[schema, breadcrumbSchema]} />
      <PageShell crumbs={[{ label: 'Home', href: '/' }, { label: 'Stacks' }]}>

        {/* Header */}
        <section className="py-14 sm:py-18 border-b border-rule">
          <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
            <div className="max-w-[640px]">
              <div className="skirt mb-4">Stacks · {liveStacks.length} live · {draftStacks.length} coming</div>
              <h1
                className="font-sans font-semibold leading-[1.04] tracking-[-0.035em] text-ink2 mb-4"
                style={{ fontSize: 'clamp(32px, 4.5vw, 56px)' }}
              >
                Built for a goal,<br />
                <em className="hero-em">not for a margin.</em>
              </h1>
              <p className="text-[15px] sm:text-[17px] leading-[1.7] text-ink3">
                Each stack is the minimum effective combination for a specific goal —
                with real Indian products, real prices, and the evidence grade that
                justifies each inclusion.
              </p>
            </div>
          </div>
        </section>

        {/* Live stacks */}
        <section className="py-14 sm:py-16 border-b border-rule">
          <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
            <div className="skirt mb-8">Published stacks</div>
            <div className="grid gap-6 sm:grid-cols-2">
              {liveStacks.map(stack => (
                <div
                  key={stack.slug}
                  className="bg-paper3 border border-rule rounded-[14px] overflow-hidden"
                >
                  <div className="p-5 sm:p-6">
                    {/* Goal badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="text-[11px] font-semibold tracking-[0.12em] uppercase rounded-full px-3 py-1"
                        style={{ background: `${goalColors[stack.goal]}18`, color: goalColors[stack.goal] }}
                      >
                        {stack.goal}
                      </span>
                      <span className="text-[12px] font-medium text-ink2">{stack.totalCost}</span>
                    </div>

                    <h2 className="font-sans font-semibold text-[18px] sm:text-[20px] tracking-[-0.015em] text-ink2 mb-1 leading-[1.25]">
                      {stack.title}
                    </h2>
                    <p className="text-[13px] text-muted mb-4">{stack.subtitle}</p>

                    {/* Products */}
                    <div className="space-y-2 mb-4">
                      {stack.products.map((p, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 bg-paper2 rounded-[8px]">
                          <span
                            className="font-serif-body text-[16px] leading-none mt-0.5 shrink-0 w-5 text-center"
                            style={{ color: goalColors[stack.goal] }}
                          >
                            {i + 1}
                          </span>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-[13px] text-ink2">{p.name}</div>
                            <div className="text-[11.5px] text-muted mt-0.5">{p.dose} · {p.role}</div>
                          </div>
                          <div className="text-[12px] font-medium text-ink2 shrink-0">{p.price}</div>
                        </div>
                      ))}
                    </div>

                    <p className="text-[13.5px] leading-[1.65] text-ink3 mb-4">{stack.rationale}</p>

                    <div className="flex items-center justify-between pt-4 border-t border-rule">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[11px] text-muted">Evidence:</span>
                        <span
                          className="text-[11px] font-semibold rounded-full px-2 py-0.5"
                          style={{
                            background: stack.evidence === 'A' ? '#1b4332' : '#52b788',
                            color: '#fff'
                          }}
                        >
                          Tier {stack.evidence}
                        </span>
                      </div>
                      <a href={`/stacks/${stack.slug}`} className="text-[12px] text-clay font-medium hover:underline">
                        Full breakdown →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coming soon */}
        <section className="py-12 sm:py-14 bg-paper2">
          <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
            <div className="skirt mb-6">Coming soon</div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {draftStacks.map(stack => (
                <div key={stack.slug} className="bg-paper3 border border-rule rounded-[14px] p-5 opacity-70">
                  <span
                    className="text-[10px] font-semibold tracking-[0.12em] uppercase rounded-full px-2.5 py-1 inline-block mb-3"
                    style={{ background: `${goalColors[stack.goal]}18`, color: goalColors[stack.goal] }}
                  >
                    {stack.goal}
                  </span>
                  <div className="font-semibold text-[15px] text-ink2 mb-1">{stack.title}</div>
                  <div className="text-[12px] text-muted">{stack.subtitle}</div>
                  <div className="text-[11px] text-muted mt-3">{stack.totalCost} · {stack.products.length} products</div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </PageShell>
    </>
  )
}
