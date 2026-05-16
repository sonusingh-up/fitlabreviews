import PageShell from '@/components/PageShell'
import JsonLd from '@/components/JsonLd'
import { bestOfCategories, getAllProduct, comparePairs } from '@/lib/data'

const SITE_URL = 'https://fitlabreviews.com'

export const metadata = {
  title: 'Best Supplements in India',
  description: 'The best supplement in every category — ranked by evidence, not margin. Creatine, protein, pre-workout and more. Updated monthly.',
  alternates: { canonical: `${SITE_URL}/best` },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/best`,
    title: 'Best Supplements in India — Fitlab Reviews',
    description: 'The best supplement in every category — ranked by evidence, not margin.',
  },
}

const SITE_URL_CONST = 'https://fitlabreviews.com'

// Quick picks — one winner per category
const quickPicks = [
  { category: 'Creatine',    slug: 'asitis-creatine-monohydrate', label: 'Best value',     why: 'Creapure-sourced, full 5g dose, cheapest verified creatine in India' },
  { category: 'Protein',     slug: 'asitis-whey-protein',         label: 'Budget pick',    why: 'Single ingredient WPC80, zero additives, best price per gram' },
  { category: 'Protein',     slug: 'muscleblaze-biozyme-whey',    label: 'Flavored pick',  why: 'Honest label, DigeZyme® enzyme blend, clean lot tests' },
  { category: 'Pre-Workout', slug: 'bigmuscles-freak',            label: 'Most honest',    why: 'Full label disclosure, 200mg caffeine, best Indian pre-workout transparency' },
]

export default function BestHub() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Best Supplements in India — Fitlab Reviews',
    description: 'The best supplement in every category — ranked by evidence, not margin.',
    url: `${SITE_URL_CONST}/best`,
    publisher: { '@type': 'Organization', name: 'Fitlab Reviews', url: SITE_URL_CONST },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL_CONST },
        { '@type': 'ListItem', position: 2, name: 'Best', item: `${SITE_URL_CONST}/best` },
      ],
    },
  }

  return (
    <>
      <JsonLd schema={schema} />
      <PageShell crumbs={[{ label: 'Home', href: '/' }, { label: 'Best' }]}>

        {/* ── Hero ── */}
        <section className="py-14 sm:py-20 border-b border-rule">
          <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_340px] lg:gap-16 items-start">
              <div>
                <div className="skirt mb-4">Best supplements · Updated May 2026</div>
                <h1
                  className="font-sans font-semibold leading-[1.04] tracking-[-0.035em] text-ink2 mb-5"
                  style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
                >
                  The best in every<br />
                  category —<br />
                  <em className="hero-em">ranked by evidence.</em>
                </h1>
                <p className="text-[15px] sm:text-[17px] leading-[1.75] text-ink3 mb-7 max-w-[560px]">
                  One winner per category. Scored on clinical dose accuracy, ingredient form,
                  purity testing, value per gram, and label honesty. The rubric is public.
                  The scores don't change because a brand paid more.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="/reviews" className="inline-flex items-center gap-2 rounded-full px-[20px] py-[11px] text-[13px] font-medium bg-clay text-white hover:bg-clayd transition-all duration-150">
                    All reviews →
                  </a>
                  <a href="/scoring-rubric" className="inline-flex items-center gap-2 rounded-full px-[20px] py-[11px] text-[13px] font-medium bg-paper3 text-ink2 border border-rule hover:border-clay transition-all duration-150">
                    How we score
                  </a>
                </div>
              </div>

              {/* Trust signals card */}
              <div className="bg-paper3 border border-rule rounded-[14px] p-5 sm:p-6">
                <div className="skirt mb-4">Why trust these rankings</div>
                <div className="space-y-3">
                  {[
                    { icon: '✓', text: 'Scored against public rubric v3.1' },
                    { icon: '✓', text: 'Affiliate commission rates don\'t affect rank' },
                    { icon: '✓', text: 'All prices in INR — Indian market only' },
                    { icon: '✓', text: 'Re-scored when formulas change' },
                    { icon: '✓', text: 'Reviewed by Pankaj Singh, Pharm.B' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-2.5 text-[13.5px] text-ink3">
                      <span className="text-clay font-bold shrink-0">{item.icon}</span>
                      {item.text}
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-rule">
                  <div className="skirt mb-2">Rubric weights</div>
                  {[
                    { label: 'Clinical dose',   pct: 25 },
                    { label: 'Ingredient form', pct: 20 },
                    { label: 'Purity testing',  pct: 20 },
                    { label: 'Value per gram',  pct: 20 },
                    { label: 'Label honesty',   pct: 15 },
                  ].map(r => (
                    <div key={r.label} className="flex items-center gap-2.5 py-1.5">
                      <span className="text-[12px] text-muted w-[120px] shrink-0">{r.label}</span>
                      <div className="flex-1 h-1 bg-paper2 rounded-full overflow-hidden">
                        <div className="h-full rounded-full bg-clay" style={{ width: `${r.pct * 4}%` }} />
                      </div>
                      <span className="text-[12px] font-medium text-clay w-7 text-right">{r.pct}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Quick picks — one winner per category ── */}
        <section className="py-12 sm:py-14 border-b border-rule bg-paper2">
          <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
            <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
              <div>
                <div className="skirt mb-2">Quick picks</div>
                <h2 className="font-sans font-semibold text-[22px] sm:text-[26px] tracking-[-0.02em] text-ink2">
                  If you only read this section.
                </h2>
              </div>
              <a href="/reviews" className="text-[13px] text-clay hover:underline">All reviews →</a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {quickPicks.map((pick, i) => {
                const p = getAllProduct(pick.slug)
                return (
                  <a
                    key={i}
                    href={`/reviews/${pick.slug}`}
                    className="bg-paper3 border border-rule rounded-[14px] p-4 sm:p-5 flex flex-col gap-3 hover:-translate-y-px transition-all duration-200 group"
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className="text-[10px] font-semibold tracking-[0.12em] uppercase rounded-full px-2.5 py-1"
                        style={{ background: '#1b433214', color: '#1b4332' }}
                      >
                        {pick.label}
                      </span>
                      <span className="font-serif-body text-[18px]" style={{ color: '#1b4332' }}>
                        {p.score}
                      </span>
                    </div>
                    <div>
                      <div className="text-[10px] tracking-[0.14em] uppercase text-muted mb-0.5">{p.brand}</div>
                      <div className="font-semibold text-[14px] text-ink2 leading-[1.3] group-hover:text-clay transition-colors">
                        {p.name}
                      </div>
                    </div>
                    <div className="text-[12px] text-muted leading-[1.55] flex-1">{pick.why}</div>
                    <div className="flex items-center justify-between pt-3 border-t border-rule">
                      <span className="font-semibold text-[14px] text-ink2">
                        ₹{(p.price as number).toLocaleString('en-IN')}
                      </span>
                      <span className="text-[11px] text-clay group-hover:underline">Read review →</span>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Best-of by category ── */}
        <section className="py-12 sm:py-16 border-b border-rule">
          <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
            <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
              <div>
                <div className="skirt mb-2">Best by category</div>
                <h2 className="font-sans font-semibold text-[22px] sm:text-[26px] tracking-[-0.02em] text-ink2">
                  Full ranked lists per category.
                </h2>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-3">
              {bestOfCategories.map(cat => {
                const topProduct = getAllProduct(cat.productSlugs[0])
                const products = cat.productSlugs.map(s => getAllProduct(s))
                return (
                  <a
                    key={cat.slug}
                    href={`/best/${cat.slug}`}
                    className="bg-paper3 border border-rule rounded-[14px] overflow-hidden hover:-translate-y-px transition-all duration-200 group flex flex-col"
                  >
                    {/* Header */}
                    <div className="p-5 border-b border-rule">
                      <div className="skirt mb-2">{cat.name}</div>
                      <h3 className="font-semibold text-[17px] text-ink2 tracking-[-0.015em] leading-[1.25] group-hover:text-clay transition-colors">
                        Best {cat.name} in India
                      </h3>
                      <p className="text-[12.5px] text-muted mt-2 leading-[1.55] line-clamp-2">
                        {cat.subhead.split('.')[0]}.
                      </p>
                    </div>

                    {/* Top 3 list */}
                    <div className="flex-1">
                      {products.map((p, i) => (
                        <div
                          key={p.slug}
                          className={`flex items-center gap-3 px-5 py-3.5 ${i < products.length - 1 ? 'border-b border-rule' : ''}`}
                        >
                          <span className="font-serif-body text-[14px] text-muted w-4 shrink-0">{i + 1}</span>
                          <div className="flex-1 min-w-0">
                            <div className="text-[10px] tracking-[0.12em] uppercase text-muted">{p.brand}</div>
                            <div className="font-medium text-[12px] text-ink2 truncate">{p.name.split(' ').slice(0, 4).join(' ')}</div>
                          </div>
                          <span className="font-serif-body text-[15px] shrink-0" style={{ color: '#1b4332' }}>{p.score}</span>
                        </div>
                      ))}
                    </div>

                    <div className="px-5 py-3.5 border-t border-rule">
                      <span className="text-[12px] text-clay group-hover:underline font-medium">
                        See full rankings →
                      </span>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Head-to-head comparisons ── */}
        <section className="py-12 sm:py-14 border-b border-rule bg-paper2">
          <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
            <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
              <div>
                <div className="skirt mb-2">Head-to-head</div>
                <h2 className="font-sans font-semibold text-[22px] sm:text-[26px] tracking-[-0.02em] text-ink2">
                  Direct comparisons — same rubric.
                </h2>
              </div>
              <a href="/compare" className="text-[13px] text-clay hover:underline">All comparisons →</a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {comparePairs.map(pair => {
                const [a, b] = pair.productSlugs.map(s => getAllProduct(s))
                const winner = getAllProduct(pair.verdict.winner)
                return (
                  <a
                    key={pair.slug}
                    href={`/compare/${pair.slug}`}
                    className="bg-paper3 border border-rule rounded-[14px] p-5 flex flex-col gap-3 hover:-translate-y-px transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-2 text-[12px]">
                      <span className="font-medium text-ink2 flex-1 truncate">{a.name.split(' ').slice(0, 3).join(' ')}</span>
                      <span className="text-muted font-serif-body shrink-0">vs</span>
                      <span className="font-medium text-ink2 flex-1 text-right truncate">{b.name.split(' ').slice(0, 3).join(' ')}</span>
                    </div>
                    <div className="flex items-baseline justify-between text-[11px] text-muted">
                      <span className="font-serif-body text-[18px]" style={{ color: '#1b4332' }}>{a.score}</span>
                      <span>Winner: <strong className="text-ink2">{winner.brand}</strong></span>
                      <span className="font-serif-body text-[18px]" style={{ color: '#1b4332' }}>{b.score}</span>
                    </div>
                    <div className="text-[11.5px] text-muted leading-[1.55] line-clamp-2">{pair.verdict.summary.split('.')[0]}.</div>
                    <div className="text-[12px] text-clay group-hover:underline font-medium mt-auto">Full comparison →</div>
                  </a>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Stacks ── */}
        <section className="py-12 sm:py-14 border-b border-rule">
          <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
            <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
              <div>
                <div className="skirt mb-2">Stacks</div>
                <h2 className="font-sans font-semibold text-[22px] sm:text-[26px] tracking-[-0.02em] text-ink2">
                  Combinations built for specific goals.
                </h2>
              </div>
              <a href="/stacks" className="text-[13px] text-clay hover:underline">All stacks →</a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: 'The beginner muscle stack',
                  subtitle: 'Two supplements. Both Tier A. No wasted money.',
                  products: ['AS-IT-IS Creatine', 'MuscleBlaze Biozyme Whey'],
                  cost: '₹1,548/month',
                  href: '/stacks',
                  evidence: 'A',
                },
                {
                  title: 'The budget performance stack',
                  subtitle: 'Maximum evidence per rupee. Under ₹750/month.',
                  products: ['AS-IT-IS Creatine', 'Caffeine (coffee works fine)'],
                  cost: '₹728/month',
                  href: '/stacks',
                  evidence: 'A',
                },
              ].map((stack, i) => (
                <a
                  key={i}
                  href={stack.href}
                  className="bg-paper3 border border-rule rounded-[14px] p-5 sm:p-6 flex flex-col gap-4 hover:-translate-y-px transition-all duration-200 group"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-semibold text-[16px] text-ink2 tracking-[-0.01em] leading-[1.3] group-hover:text-clay transition-colors">
                        {stack.title}
                      </h3>
                      <p className="text-[12.5px] text-muted mt-1">{stack.subtitle}</p>
                    </div>
                    <span
                      className="text-[10px] font-semibold tracking-[0.1em] uppercase rounded-full px-2 py-1 shrink-0"
                      style={{ background: '#1b433218', color: '#1b4332' }}
                    >
                      Tier {stack.evidence}
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    {stack.products.map((p, j) => (
                      <div key={j} className="flex gap-2 text-[12.5px] text-ink3">
                        <span className="font-serif-body text-[14px] text-clay shrink-0">{j + 1}</span>
                        {p}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-rule">
                    <span className="font-semibold text-[14px] text-clay">{stack.cost}</span>
                    <span className="text-[12px] text-clay group-hover:underline">View stack →</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Buying guides ── */}
        <section className="py-12 sm:py-14 border-b border-rule bg-paper2">
          <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
            <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
              <div>
                <div className="skirt mb-2">Buying guides</div>
                <h2 className="font-sans font-semibold text-[22px] sm:text-[26px] tracking-[-0.02em] text-ink2">
                  What to look for before you buy.
                </h2>
              </div>
              <a href="/research" className="text-[13px] text-clay hover:underline">All research →</a>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { title: 'How to buy creatine in India', desc: 'Creapure vs generic, loading vs daily, which brands have clean lot tests', href: '/best/creatine', cat: 'Creatine' },
                { title: 'How to buy protein powder in India', desc: 'Amino acid spiking, label accuracy testing, which brands pass', href: '/best/protein', cat: 'Protein' },
                { title: 'Why most Indian pre-workouts are underdosed', desc: 'Clinical dose thresholds, how to read a label, what to actually look for', href: '/best/pre-workout', cat: 'Pre-Workout' },
              ].map((guide, i) => (
                <a
                  key={i}
                  href={guide.href}
                  className="bg-paper3 border border-rule rounded-[14px] p-5 hover:-translate-y-px transition-all duration-200 group"
                >
                  <span
                    className="text-[10px] font-semibold tracking-[0.12em] uppercase rounded-full px-2.5 py-1 inline-block mb-3"
                    style={{ background: '#1b433214', color: '#1b4332' }}
                  >
                    {guide.cat}
                  </span>
                  <h3 className="font-semibold text-[14px] text-ink2 leading-[1.35] mb-2 group-hover:text-clay transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-[12.5px] text-muted leading-[1.55]">{guide.desc}</p>
                  <div className="text-[12px] text-clay group-hover:underline font-medium mt-3">Read guide →</div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bottom nav to all sections ── */}
        <section className="py-12 sm:py-14">
          <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
            <div className="skirt mb-6">Everything on Fitlab</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {[
                { label: 'All Reviews',  href: '/reviews',     desc: `${6} products scored` },
                { label: 'Ingredients', href: '/ingredients', desc: '4 deep-dives' },
                { label: 'Compare',     href: '/compare',     desc: '3 head-to-heads' },
                { label: 'Stacks',      href: '/stacks',      desc: '2 live stacks' },
                { label: 'Protocols',   href: '/protocols',   desc: '2 protocols' },
                { label: 'Research',    href: '/research',    desc: '6 guides' },
              ].map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  className="bg-paper3 border border-rule rounded-[12px] p-4 hover:border-clay hover:bg-white transition-all duration-150 group"
                >
                  <div className="font-semibold text-[14px] text-ink2 group-hover:text-clay transition-colors">{l.label}</div>
                  <div className="text-[11px] text-muted mt-1">{l.desc}</div>
                </a>
              ))}
            </div>
          </div>
        </section>

      </PageShell>
    </>
  )
}
