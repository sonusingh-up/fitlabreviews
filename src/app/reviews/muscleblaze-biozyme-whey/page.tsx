import PageShell from '@/components/PageShell'
import JsonLd from '@/components/JsonLd'
import { authors } from '@/lib/data'

const SITE_URL = 'https://fitlabreviews.com'

export const metadata = {
  title: 'MuscleBlaze Biozyme Performance Whey Review (2026) — 8 Purchases, Lab Tested',
  description: "Independent review of MuscleBlaze Biozyme backed by 4 years of personal use, Labdoor lot testing (26.7g found vs 25g claimed), and a pharmacist's ingredient analysis. No sponsored content.",
  alternates: { canonical: `${SITE_URL}/reviews/muscleblaze-biozyme-whey` },
  openGraph: {
    type: 'article',
    url: `${SITE_URL}/reviews/muscleblaze-biozyme-whey`,
    title: 'MuscleBlaze Biozyme Review (2026) — 8 Purchases, Lab Tested',
    description: 'Labdoor: 26.7g protein vs 25g claimed. Zero amino spiking. Zero heavy metals. Pharmacist reviewed.',
  },
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'MuscleBlaze Biozyme Performance Whey',
  brand: { '@type': 'Brand', name: 'MuscleBlaze' },
  description: 'Whey protein concentrate blend with DigeZyme® digestive enzyme complex.',
  image: `${SITE_URL}/products/muscleblaze-biozyme-whey.webp`,
  offers: { '@type': 'Offer', priceCurrency: 'INR', price: '2899', availability: 'https://schema.org/InStock', url: `${SITE_URL}/reviews/muscleblaze-biozyme-whey` },
  review: {
    '@type': 'Review',
    author: { '@type': 'Person', name: 'Pankaj Singh', jobTitle: 'Pharmacist (Pharm.B)', url: 'https://www.linkedin.com/in/pankaj-singh-77b93a368/' },
    datePublished: '2026-05-11',
    dateModified: '2026-05-11',
    name: 'MuscleBlaze Biozyme — 4 Years, 8 Purchases, Lab Tested',
    reviewBody: '8 purchases Sept 2022–Apr 2024. Labdoor lot test found 26.7g protein vs 25g claimed. Zero amino spiking, zero heavy metals.',
    reviewRating: { '@type': 'Rating', ratingValue: '8.4', bestRating: '10', worstRating: '0' },
    publisher: { '@type': 'Organization', name: 'Fitlab Reviews', url: SITE_URL },
  },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '8.4', bestRating: '10', worstRating: '0', ratingCount: '1', reviewCount: '1' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Reviews', item: `${SITE_URL}/reviews` },
    { '@type': 'ListItem', position: 3, name: 'Protein', item: `${SITE_URL}/best/protein` },
    { '@type': 'ListItem', position: 4, name: 'MuscleBlaze Biozyme', item: `${SITE_URL}/reviews/muscleblaze-biozyme-whey` },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is MuscleBlaze Biozyme Whey good for beginners?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The protein dose (25g per scoop), mixability, and price point make it well-suited for beginners. The DigeZyme® enzyme blend helps those new to whey who experience bloating.' } },
    { '@type': 'Question', name: 'Is MuscleBlaze Biozyme lab tested?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Lot JJBWPFMM0271 was independently tested by Labdoor (Feb–Apr 2026). Results: 26.7g protein found vs 25g claimed (106.8% accuracy), free amino acids <0.01% (no spiking), all four heavy metals undetected.' } },
    { '@type': 'Question', name: 'Does MuscleBlaze Biozyme cause bloating?', acceptedAnswer: { '@type': 'Answer', text: 'Less than most whey concentrates. The DigeZyme® blend includes lactase which breaks down lactose. Users with mild lactose sensitivity generally tolerate Biozyme better than standard WPC blends.' } },
    { '@type': 'Question', name: 'What is DigeZyme in MuscleBlaze Biozyme?', acceptedAnswer: { '@type': 'Answer', text: 'DigeZyme® is a multi-enzyme complex by Sabinsa Corporation. It contains amylase, protease, lipase, cellulase, and lactase. The lactase is the clinically useful part — it breaks down residual lactose in WPC.' } },
    { '@type': 'Question', name: 'How does MuscleBlaze Biozyme compare to ON Gold Standard?', acceptedAnswer: { '@type': 'Answer', text: 'Gold Standard uses a WPI-led blend with Informed Sport certification. Biozyme is WPC-led, cheaper per serving in India, and adds DigeZyme®. For Indian buyers on a budget, Biozyme is better value.' } },
  ],
}

// ── Sub-components ─────────────────────────────────────────────────────────────

const ScoreBar = ({ label, value }: { label: string; value: number }) => (
  <div className="flex items-center gap-3 py-3.5 border-b border-rule last:border-b-0">
    <span className="text-[11px] sm:text-[12px] font-medium uppercase tracking-[0.08em] text-muted w-[130px] sm:w-[148px] shrink-0 leading-[1.3]">{label}</span>
    <div className="flex-1 h-[6px] rounded-full overflow-hidden" style={{ background: '#E8E1D2' }}>
      <div className="h-full rounded-full" style={{ width: `${(value / 10) * 100}%`, background: 'linear-gradient(90deg,#1b4332,#52b788)' }} />
    </div>
    <span className="font-serif-body text-[20px] w-8 text-right shrink-0" style={{ color: '#1b4332' }}>{value}</span>
  </div>
)

const SectionHead = ({ label, title, id }: { label: string; title: string; id: string }) => (
  <div id={id} className="flex items-start gap-3 mb-6">
    <div className="w-1 self-stretch rounded-full shrink-0 mt-1" style={{ background: '#1b4332', minHeight: '20px' }} />
    <div>
      <div className="text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-clay font-semibold mb-1">{label}</div>
      <h2 className="font-sans font-semibold leading-[1.18] tracking-[-0.025em] text-ink2"
          style={{ fontSize: 'clamp(18px, 3vw, 26px)' }}>
        {title}
      </h2>
    </div>
  </div>
)

const PassBadge = () => (
  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-moss">
    <span className="w-1.5 h-1.5 rounded-full bg-moss shrink-0" />PASS
  </span>
)

// ── Page ───────────────────────────────────────────────────────────────────────

export default function BiozymePage() {
  const author = authors[0]

  return (
    <>
      <JsonLd schema={[productSchema, breadcrumbSchema, faqSchema]} />
      <PageShell crumbs={[
        { label: 'Home', href: '/' },
        { label: 'Reviews', href: '/reviews' },
        { label: 'Protein', href: '/best/protein' },
        { label: 'Biozyme' },
      ]}>

        {/* ═══════════════════════════════════════════════════════════════
            HERO
        ════════════════════════════════════════════════════════════════ */}
        <section className="py-10 sm:py-14 border-b border-rule">
          <div className="max-w-site mx-auto px-4 sm:px-8 lg:px-14">

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 mb-4 text-[11px] sm:text-[12px] text-muted">
              <span className="uppercase tracking-[0.12em] font-semibold">MuscleBlaze</span>
              <span>·</span>
              <a href="/best/protein" className="text-clay hover:underline font-medium">Protein</a>
              <span>·</span>
              <span>Reviewed May 2026</span>
              <span className="inline-flex items-center gap-1 text-moss font-medium ml-1">
                <span className="w-1.5 h-1.5 rounded-full bg-moss shrink-0" />Lab tested Feb–Apr 2026
              </span>
            </div>

            {/* Title */}
            <h1 className="font-sans font-semibold leading-[1.06] tracking-[-0.03em] text-ink2 mb-3"
                style={{ fontSize: 'clamp(24px, 4vw, 46px)' }}>
              MuscleBlaze Biozyme<br className="sm:hidden" /> Performance Whey
            </h1>
            <p className="text-[15px] sm:text-[18px] text-muted mb-5 leading-[1.5]"
               style={{ fontFamily: 'var(--font-serif, Georgia, serif)', fontStyle: 'italic' }}>
              4 years · 8 purchases · one independent lab test
            </p>

            {/* Bottom line card */}
            <div className="p-4 sm:p-5 rounded-[14px] mb-6 border"
                 style={{ background: '#1b433208', borderColor: '#1b433228' }}>
              <div className="text-[10px] tracking-[0.2em] uppercase font-semibold mb-2" style={{ color: '#1b4332' }}>
                Bottom line
              </div>
              <p className="text-[13.5px] sm:text-[14.5px] leading-[1.7] text-ink3 m-0">
                Labdoor found <strong className="text-ink2">26.7g protein vs 25g claimed</strong> (106.8% accuracy),
                zero amino spiking, zero heavy metals. The label tells the truth — which is rarer in the Indian
                supplement market than it should be. Best-value flavored whey under ₹3,000/kg in India.
              </p>
            </div>

            {/* Score + details grid — stacks on mobile */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {[
                { label: 'Overall score', val: '8.4 / 10', highlight: true },
                { label: 'Protein accuracy', val: '106.8%' },
                { label: 'Amino spiking', val: 'None detected' },
                { label: 'Price / serving', val: '₹116' },
              ].map(({ label, val, highlight }) => (
                <div key={label}
                     className="rounded-[12px] px-3.5 py-4 border text-center"
                     style={highlight
                       ? { background: '#1b433214', borderColor: '#1b433240' }
                       : { background: 'var(--color-background-primary, #FBF8F1)', borderColor: '#D3CCBE' }}>
                  <div className="text-[10px] tracking-[0.12em] uppercase text-muted mb-1.5">{label}</div>
                  <div className="font-sans font-semibold text-ink2"
                       style={{ fontSize: highlight ? '22px' : '16px', color: highlight ? '#1b4332' : undefined }}>
                    {val}
                  </div>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-5">
              {['25g protein/scoop', 'WPC-led blend', 'DigeZyme® enzymes', 'Informed Sport certified'].map(t => (
                <span key={t} className="text-[11px] sm:text-[12px] bg-paper2 border border-rule text-ink3 rounded-full px-3 py-1">{t}</span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="https://www.amazon.in/s?k=MuscleBlaze+Biozyme+Performance+Whey"
                 target="_blank" rel="nofollow sponsored"
                 className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[14px] font-medium bg-clay text-white hover:bg-clayd transition-all">
                Check price on Amazon India →
              </a>
              <a href="https://cdn.labdoor.io/certification/images/jx36smg1gvayxfl5ca1ug.pdf"
                 target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[13px] font-medium bg-paper3 text-ink2 border border-rule hover:border-clay transition-all">
                View Labdoor report (PDF) ↗
              </a>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            RUBRIC SCORES
        ════════════════════════════════════════════════════════════════ */}
        <section className="py-8 sm:py-10 border-b border-rule bg-paper2">
          <div className="max-w-site mx-auto px-4 sm:px-8 lg:px-14">
            <div className="text-[10px] tracking-[0.18em] uppercase text-muted font-semibold mb-4">Rubric breakdown</div>
            <div className="grid gap-0 sm:grid-cols-2 sm:gap-x-10">
              <div>
                <ScoreBar label="Clinical dose" value={8.8} />
                <ScoreBar label="Ingredient form" value={8.2} />
                <ScoreBar label="Lab purity" value={9.0} />
              </div>
              <div>
                <ScoreBar label="Value / gram" value={9.4} />
                <ScoreBar label="Label honesty" value={8.6} />
              </div>
            </div>
            <p className="text-[11.5px] text-muted mt-3">
              Scored against <a href="/scoring-rubric" className="text-clay hover:underline">Fitlab rubric v3.1</a>.
              Weights: Clinical dose 25% · Ingredient form 20% · Purity 20% · Value 20% · Label honesty 15%.
            </p>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            TABLE OF CONTENTS
        ════════════════════════════════════════════════════════════════ */}
        <div className="border-b border-rule">
          <div className="max-w-site mx-auto px-4 sm:px-8 lg:px-14 py-4 sm:py-5">
            <div className="text-[10px] tracking-[0.18em] uppercase text-muted font-semibold mb-3">Jump to section</div>
            <div className="flex flex-wrap gap-2">
              {[
                ['Why we reviewed it', '#background'],
                ['Lab test results', '#lab-test'],
                ['Ingredient analysis', '#ingredients'],
                ['Real-world use', '#real-world'],
                ['Pros & cons', '#pros-cons'],
                ['Who it\'s for', '#who-for'],
                ['Pharmacist note', '#pharmacist'],
                ['Vs alternatives', '#alternatives'],
                ['FAQ', '#faq'],
                ['Verdict', '#verdict'],
              ].map(([label, href]) => (
                <a key={href} href={href}
                   className="text-[12px] sm:text-[12.5px] text-clay border rounded-full px-3 py-1.5 hover:bg-clay/8 transition-colors whitespace-nowrap"
                   style={{ borderColor: '#1b433330' }}>
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            MAIN CONTENT — 2-col on desktop, single col on mobile
        ════════════════════════════════════════════════════════════════ */}
        <div className="max-w-site mx-auto px-4 sm:px-8 lg:px-14">
          <div className="grid lg:grid-cols-[1fr_268px] gap-0 lg:gap-14 items-start">

            {/* ── MAIN COLUMN ─────────────────────────────────────────── */}
            <article className="py-10 sm:py-14 min-w-0">

              {/* ════════ BACKGROUND ════════ */}
              <section className="mb-12 sm:mb-16">
                <SectionHead id="background" label="Context" title="Why we reviewed this, and how" />

                <p className="text-[14.5px] sm:text-[15px] leading-[1.85] text-ink3 mb-4">
                  I first bought MuscleBlaze Biozyme Performance Whey in September 2022 — a pharmacy student
                  looking for protein that wouldn't break the budget and wouldn't lie on the label. I've placed
                  eight separate orders between September 2022 and April 2024, across the 1kg and 2kg variants.
                  That's not brand loyalty from marketing. It's what happens when something consistently does what it says.
                </p>
                <p className="text-[14.5px] sm:text-[15px] leading-[1.85] text-ink3 mb-4">
                  Most supplement reviews are written from a single purchase, sometimes from a sample. This
                  review covers 19 months of consistent use across multiple lot numbers, two size variants,
                  and an independent Labdoor laboratory test on lot JJBWPFMM0271 (Feb–Apr 2026).
                </p>
                <p className="text-[14.5px] sm:text-[15px] leading-[1.85] text-ink3 mb-6">
                  I'm a pharmacist (Pharm.B). I evaluate supplements the same way I evaluate drug formulations —
                  label claims, ingredient forms, manufacturing quality signals, and independent third-party data.
                  This review uses that framework.
                </p>

                {/* Purchase history */}
                <div className="rounded-[14px] border border-rule overflow-hidden">
                  <div className="px-4 sm:px-5 py-3 bg-paper2 border-b border-rule flex items-center justify-between gap-3">
                    <span className="text-[11px] tracking-[0.14em] uppercase text-muted font-semibold">
                      Verified purchase history — Amazon India
                    </span>
                    <span className="text-[11px] text-moss font-medium">8 orders</span>
                  </div>
                  <div className="divide-y divide-rule">
                    {[
                      ['Sep 09, 2022', '1 kg', '₹2,599'],
                      ['Jan 20, 2023', '1 kg', '₹2,599'],
                      ['Feb 20, 2023', '1 kg · Informed Sport', '₹2,657'],
                      ['Mar 29, 2023', '1 kg · Informed Sport', '₹2,491'],
                      ['Apr 14, 2023', '1 kg · Informed Sport', '₹2,631'],
                      ['Sep 24, 2023', '2 kg', '₹4,474'],
                      ['Nov 30, 2023', '2 kg', '₹4,699'],
                      ['Apr 27, 2024', '1 kg · Informed Sport', '₹2,403'],
                    ].map(([date, variant, price]) => (
                      <div key={date} className="flex items-center justify-between px-4 sm:px-5 py-3 gap-3">
                        <div className="min-w-0">
                          <div className="text-[12.5px] font-medium text-ink2">{variant}</div>
                          <div className="text-[11.5px] text-muted">{date}</div>
                        </div>
                        <div className="text-[13px] font-semibold text-ink2 shrink-0">{price}</div>
                      </div>
                    ))}
                  </div>
                  <div className="px-4 sm:px-5 py-3 border-t border-rule bg-paper2">
                    <p className="text-[11px] text-muted">Verified via Amazon India order history. Screenshots available on request.</p>
                  </div>
                </div>
              </section>

              {/* ════════ LAB TEST ════════ */}
              <section className="mb-12 sm:mb-16">
                <SectionHead id="lab-test" label="Independent testing" title="Labdoor lab test — the actual numbers" />

                <p className="text-[14.5px] sm:text-[15px] leading-[1.85] text-ink3 mb-5">
                  Lot JJBWPFMM0271 (expiry 07/2027) was submitted to Labdoor and tested across two accredited
                  labs — Anresco and SGS — between February and April 2026. Released May 5, 2026.
                </p>

                {/* Accuracy block */}
                <div className="rounded-[14px] border border-rule overflow-hidden mb-4">
                  <div className="px-4 sm:px-5 py-3 flex items-center gap-2.5 border-b border-rule"
                       style={{ background: '#1b433210' }}>
                    <span className="w-2 h-2 rounded-full bg-moss shrink-0" />
                    <span className="font-semibold text-[13px] sm:text-[14px] text-ink2">Accuracy — PASS</span>
                  </div>
                  {/* Protein */}
                  <div className="px-4 sm:px-5 py-4 border-b border-rule">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <div className="font-semibold text-[14px] text-ink2 mb-1">Protein</div>
                        <div className="text-[12px] text-muted">1 scoop (36g serving)</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[11px] text-muted mb-0.5">Claimed → Found</div>
                        <div className="font-semibold text-[15px] sm:text-[18px]">
                          <span className="text-muted line-through text-[13px] mr-2">25g</span>
                          <span style={{ color: '#1b4332' }}>26.7g</span>
                          <span className="text-[12px] font-normal text-moss ml-1.5">+106.8%</span>
                        </div>
                      </div>
                    </div>
                    {/* Visual bar */}
                    <div className="mt-3">
                      <div className="flex justify-between text-[10px] text-muted mb-1">
                        <span>0g</span><span>Claimed 25g</span><span>Found 26.7g</span>
                      </div>
                      <div className="h-2.5 rounded-full overflow-visible relative" style={{ background: '#E8E1D2' }}>
                        <div className="h-full rounded-full absolute left-0" style={{ width: '89.5%', background: '#D3CCBE' }} />
                        <div className="h-full rounded-full absolute left-0" style={{ width: '95.4%', background: 'linear-gradient(90deg,#1b4332,#52b788)' }} />
                        <div className="absolute top-0 h-full border-r-2 border-dashed" style={{ left: '89.5%', borderColor: '#7A736B' }} />
                      </div>
                    </div>
                    <div className="mt-3 text-[12.5px] text-ink3 leading-[1.65]">
                      106.8% accuracy puts this in the ideal range (100–115%). You're getting slightly more than you're paying for.
                    </div>
                  </div>
                  {/* Amino spiking */}
                  <div className="px-4 sm:px-5 py-4 flex items-center justify-between gap-3">
                    <div>
                      <div className="font-semibold text-[14px] text-ink2">Free amino acids (spiking marker)</div>
                      <div className="text-[12.5px] text-ink3 mt-0.5">Taurine, glycine, creatine used by some brands to inflate nitrogen readings</div>
                    </div>
                    <div className="shrink-0 text-right">
                      <div className="font-semibold text-moss text-[15px]">&lt;0.01%</div>
                      <PassBadge />
                    </div>
                  </div>
                </div>

                {/* Heavy metals */}
                <div className="rounded-[14px] border border-rule overflow-hidden mb-4">
                  <div className="px-4 sm:px-5 py-3 flex items-center gap-2.5 border-b border-rule"
                       style={{ background: '#1b433210' }}>
                    <span className="w-2 h-2 rounded-full bg-moss shrink-0" />
                    <span className="font-semibold text-[13px] sm:text-[14px] text-ink2">Heavy metals — PASS</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4">
                    {[
                      { metal: 'Arsenic', limit: '15 μg', result: 'Undetected' },
                      { metal: 'Cadmium', limit: '5 μg', result: 'Undetected' },
                      { metal: 'Mercury', limit: '15 μg', result: 'Undetected' },
                      { metal: 'Lead', limit: '5 μg', result: 'Undetected' },
                    ].map((item, i) => (
                      <div key={item.metal}
                           className={`px-4 py-4 ${i < 2 ? 'border-b sm:border-b-0 border-rule' : ''} ${i % 2 === 0 ? 'border-r border-rule' : ''} sm:border-r sm:last:border-r-0`}>
                        <div className="text-[11px] tracking-[0.1em] uppercase text-muted mb-1">{item.metal}</div>
                        <div className="font-semibold text-[14px] text-moss">{item.result}</div>
                        <div className="text-[11px] text-muted mt-0.5">USP limit {item.limit}/serving</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Microbiology — compact list */}
                <div className="rounded-[14px] border border-rule overflow-hidden mb-5">
                  <div className="px-4 sm:px-5 py-3 flex items-center gap-2.5 border-b border-rule"
                       style={{ background: '#1b433210' }}>
                    <span className="w-2 h-2 rounded-full bg-moss shrink-0" />
                    <span className="font-semibold text-[13px] sm:text-[14px] text-ink2">Microbiology — PASS</span>
                  </div>
                  <div className="divide-y divide-rule">
                    {[
                      ['Total Plate Count', '900 cfu/g', '≤ 1,000 limit', false],
                      ['Yeast / Mold', '<10 cfu/g', '≤ 100 limit', false],
                      ['E. Coli', '<10 cfu/g', '—', false],
                      ['Staphylococcus aureus', '<10 cfu/g', '—', false],
                      ['Salmonella', 'Undetected', '—', false],
                      ['Shigella', 'Undetected', '—', false],
                    ].map(([test, found, limit, warn]) => (
                      <div key={test as string} className="flex items-center justify-between px-4 sm:px-5 py-2.5 gap-3">
                        <div>
                          <span className="text-[13px] font-medium text-ink2">{test}</span>
                          <span className="text-[11px] text-muted ml-2">{limit}</span>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className={`text-[13px] font-semibold ${warn ? 'text-amber-600' : 'text-moss'}`}>{found}</span>
                          <PassBadge />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Note on TPC */}
                <div className="flex gap-3 p-4 bg-paper2 rounded-[12px] border border-rule">
                  <span className="text-[16px] shrink-0">⚠</span>
                  <p className="text-[13px] leading-[1.65] text-ink3 m-0">
                    <strong className="text-ink2">Total Plate Count at 900/1,000 limit.</strong> Passes, but close.
                    Not unusual for whey concentrate produced in a hot, humid environment. Not a safety concern at this level — worth tracking across future lots.
                  </p>
                </div>

                <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  <p className="text-[11.5px] text-muted">Source: Labdoor · Released May 5, 2026 · Labs: Anresco + SGS</p>
                  <a href="https://cdn.labdoor.io/certification/images/jx36smg1gvayxfl5ca1ug.pdf"
                     target="_blank" rel="noopener noreferrer"
                     className="text-[12.5px] text-clay font-medium hover:underline shrink-0">
                    Full lab report PDF →
                  </a>
                </div>
              </section>

              {/* ════════ INGREDIENT ANALYSIS ════════ */}
              <section className="mb-12 sm:mb-16">
                <SectionHead id="ingredients" label="Pharmacist analysis" title="Full ingredient breakdown" />

                {/* Nutrition cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-6">
                  {[
                    { label: 'Calories', val: '125 kcal', note: 'Per scoop' },
                    { label: 'Protein', val: '25g claimed', note: '26.7g found ✓' },
                    { label: 'Carbs', val: '3.5g', note: 'Low — appropriate' },
                    { label: 'Fat', val: '2.8g', note: 'Expected for WPC' },
                    { label: 'Sugar', val: '1.8g', note: 'From lactose in WPC' },
                    { label: 'Sodium', val: '78mg', note: 'Moderate' },
                  ].map(({ label, val, note }) => (
                    <div key={label} className="rounded-[10px] border border-rule bg-paper3 px-3.5 py-3">
                      <div className="text-[10px] tracking-[0.1em] uppercase text-muted mb-1">{label}</div>
                      <div className="font-semibold text-[14px] text-ink2 mb-0.5">{val}</div>
                      <div className="text-[11px] text-muted">{note}</div>
                    </div>
                  ))}
                </div>

                {/* Protein blend */}
                <div className="rounded-[14px] border border-rule overflow-hidden mb-5">
                  <div className="px-4 sm:px-5 py-3 bg-paper2 border-b border-rule">
                    <span className="font-semibold text-[13px] text-ink2">Protein blend — what "WPC-led" means</span>
                  </div>
                  <div className="px-4 sm:px-5 py-4 space-y-4">
                    <div className="flex gap-3">
                      <div className="w-1.5 h-full rounded-full shrink-0" style={{ background: '#1b4332', minHeight: '16px' }} />
                      <p className="text-[13.5px] sm:text-[14px] leading-[1.75] text-ink3 m-0">
                        WPC appears first on the label — it's the primary ingredient by weight. WPC contains more
                        lactose than isolate (roughly 2–5% of weight vs near-zero in WPI). At 25g protein per scoop,
                        total lactose per serving is approximately 0.5–1.5g. For most people, irrelevant.
                        For those with clinically diagnosed lactose intolerance, it may cause discomfort.
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-1.5 h-full rounded-full shrink-0" style={{ background: '#52b788', minHeight: '16px' }} />
                      <p className="text-[13.5px] sm:text-[14px] leading-[1.75] text-ink3 m-0">
                        WPC is significantly cheaper per gram of protein than WPI. The cost efficiency is why
                        Biozyme hits ₹116/serving — you're getting workable protein density without the isolate
                        premium most users don't need.
                      </p>
                    </div>
                  </div>
                </div>

                {/* DigeZyme */}
                <div className="rounded-[14px] border border-rule overflow-hidden mb-5">
                  <div className="px-4 sm:px-5 py-3 bg-paper2 border-b border-rule flex items-center justify-between gap-2">
                    <span className="font-semibold text-[13px] text-ink2">DigeZyme® — what it is, and whether it matters</span>
                    <span className="text-[10px] tracking-[0.1em] uppercase text-muted font-medium shrink-0">50mg/serving</span>
                  </div>
                  <div className="px-4 sm:px-5 py-4">
                    {/* Enzyme breakdown — mobile-friendly list */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                      {[
                        { enzyme: 'Lactase', action: 'Lactose breakdown', useful: true },
                        { enzyme: 'Protease', action: 'Protein digestion', useful: true },
                        { enzyme: 'Amylase', action: 'Starch breakdown', useful: false },
                        { enzyme: 'Lipase', action: 'Fat breakdown', useful: false },
                        { enzyme: 'Cellulase', action: 'Fibre breakdown', useful: false },
                      ].map(({ enzyme, action, useful }) => (
                        <div key={enzyme} className={`flex items-center gap-3 rounded-[8px] px-3 py-2.5 border ${useful ? 'border-clay/30 bg-clay/5' : 'border-rule bg-paper2'}`}>
                          <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${useful ? 'bg-clay' : 'bg-rule'}`} />
                          <div>
                            <span className="font-medium text-[13px] text-ink2">{enzyme}</span>
                            <span className="text-[12px] text-muted ml-1.5">{action}</span>
                          </div>
                          {useful && <span className="text-[10px] text-clay font-semibold ml-auto shrink-0">Useful</span>}
                        </div>
                      ))}
                    </div>
                    <p className="text-[13.5px] leading-[1.7] text-ink3 mb-3">
                      <strong className="text-ink2">The clinically useful enzyme is lactase.</strong> It directly addresses
                      the lactose content of WPC — why users with mild dairy sensitivity generally tolerate Biozyme better
                      than plain WPC products. Protease may marginally accelerate protein digestion. Evidence is modest but not zero.
                    </p>
                    <div className="flex gap-2.5 p-3 bg-paper2 rounded-[10px] border border-rule">
                      <span className="text-[14px] shrink-0">💡</span>
                      <p className="text-[12.5px] text-muted leading-[1.6] m-0">
                        <strong className="text-ink3">Don't buy this for DigeZyme®.</strong> The marketing language goes beyond what evidence
                        supports. Buy it because the protein is accurately dosed and the price is right.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Additives */}
                <div className="rounded-[14px] border border-rule overflow-hidden">
                  <div className="px-4 sm:px-5 py-3 bg-paper2 border-b border-rule">
                    <span className="font-semibold text-[13px] text-ink2">Sweeteners and additives</span>
                  </div>
                  <div className="divide-y divide-rule">
                    {[
                      { name: 'Sucralose', type: 'Sweetener', note: 'Within ADI limits. Distinctly sweet — some prefer milk over water to dilute.' },
                      { name: 'Acesulfame-K (Ace-K)', type: 'Sweetener', note: 'Paired with sucralose. No taste preference option without both in flavored variants.' },
                      { name: 'Soy lecithin', type: 'Emulsifier', note: 'Real ingredient, not trace contaminant. Relevant if you avoid soy or have soy allergy.' },
                    ].map(({ name, type, note }) => (
                      <div key={name} className="px-4 sm:px-5 py-3.5">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-[13.5px] text-ink2">{name}</span>
                          <span className="text-[10px] tracking-[0.1em] uppercase text-muted border border-rule rounded-full px-2 py-0.5">{type}</span>
                        </div>
                        <p className="text-[12.5px] text-muted leading-[1.55] m-0">{note}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* ════════ REAL WORLD ════════ */}
              <section className="mb-12 sm:mb-16">
                <SectionHead id="real-world" label="19 months of use" title="Real-world use — what 8 purchases teaches you" />

                <div className="space-y-4">
                  {[
                    {
                      title: 'Mixability',
                      icon: '🥤',
                      body: 'Mixes well in a standard shaker with 200–250ml of water or milk. Foam is moderate but dissipates within 30 seconds. No clumps across 19 months. Cold water mixes better than room temperature. The 2kg variant had slightly coarser powder texture — likely batch variation rather than a systematic difference.',
                    },
                    {
                      title: 'Taste consistency across 8 lots',
                      icon: '✅',
                      body: 'Rich Milk Chocolate was consistent across every single order. No lot-to-lot variation I could detect. This matters more than it sounds — some Indian protein brands reformulate quietly, and taste changes while the label stays identical. That didn\'t happen here.',
                    },
                    {
                      title: 'Digestive tolerance',
                      icon: '💊',
                      body: "I don't have lactose intolerance, so this is a first-person account of a non-sensitive user. Bloating after consumption: minimal at the standard one-scoop dose. Zero GI distress across 19 months. Used post-workout in warm water and first thing in the morning mixed into oats — both with no issues.",
                    },
                    {
                      title: 'Performance and recovery',
                      icon: '📊',
                      body: "Subjective performance feels are not reliable evidence, so I'll be precise: when consistently hitting 1.8g/kg/day protein using Biozyme as the supplement component, recovery metrics measured by training log performance were indistinguishable from periods using other protein sources at the same total daily intake. Which is exactly what the research predicts.",
                    },
                  ].map(({ title, icon, body }) => (
                    <div key={title} className="flex gap-3.5 sm:gap-4 p-4 sm:p-5 bg-paper3 border border-rule rounded-[14px]">
                      <div className="text-[20px] sm:text-[22px] shrink-0 mt-0.5">{icon}</div>
                      <div>
                        <h3 className="font-sans font-semibold text-[14px] sm:text-[15px] text-ink2 mb-2 tracking-[-0.01em]">{title}</h3>
                        <p className="text-[13.5px] sm:text-[14px] leading-[1.75] text-ink3 m-0">{body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ════════ PROS / CONS ════════ */}
              <section className="mb-12 sm:mb-16">
                <SectionHead id="pros-cons" label="Assessment" title="Pros and cons" />

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[14px] border overflow-hidden" style={{ borderColor: '#1b433228' }}>
                    <div className="px-4 py-3 border-b flex items-center gap-2" style={{ background: '#1b433210', borderColor: '#1b433228' }}>
                      <span className="text-[14px]">✓</span>
                      <span className="text-[11px] tracking-[0.14em] uppercase font-semibold" style={{ color: '#1b4332' }}>What holds up</span>
                    </div>
                    <ul className="divide-y divide-rule list-none p-0 m-0">
                      {[
                        'Lab confirmed 26.7g protein vs 25g — no under-delivery',
                        'Free amino acids <0.01% — zero amino spiking',
                        'All four heavy metals: undetected',
                        'All microbiology tests pass',
                        'DigeZyme® lactase useful for mild lactose sensitivity',
                        'Informed Sport certified from Feb 2023 onward',
                        'Consistent taste and texture across 19 months',
                        'Best price-per-gram for a tested product in India',
                      ].map((pro, i) => (
                        <li key={i} className="flex gap-2.5 px-4 py-3 text-[13px] sm:text-[13.5px] text-ink3 leading-[1.55]">
                          <span className="font-bold shrink-0 mt-0.5" style={{ color: '#1b4332' }}>+</span>{pro}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-[14px] border border-rule overflow-hidden">
                    <div className="px-4 py-3 border-b border-rule bg-paper2 flex items-center gap-2">
                      <span className="text-[14px]">!</span>
                      <span className="text-[11px] tracking-[0.14em] uppercase text-muted font-semibold">What to know</span>
                    </div>
                    <ul className="divide-y divide-rule list-none p-0 m-0">
                      {[
                        'WPC-led — avoid if clinically lactose intolerant',
                        'Total Plate Count 900/1,000 cfu/g — close to limit',
                        'Sucralose + Ace-K — no stevia option in flavored variants',
                        'Contains soy lecithin — relevant for soy allergy',
                        'DigeZyme® is overpromised in marketing',
                        'Not available internationally at competitive prices',
                        'Informed Sport — not NSF Certified for Sport',
                      ].map((con, i) => (
                        <li key={i} className="flex gap-2.5 px-4 py-3 text-[13px] sm:text-[13.5px] text-ink3 leading-[1.55]">
                          <span className="text-muted font-bold shrink-0 mt-0.5">–</span>{con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* ════════ WHO IT'S FOR ════════ */}
              <section className="mb-12 sm:mb-16">
                <SectionHead id="who-for" label="Fit guide" title="Who should buy this — and who shouldn't" />

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[14px] overflow-hidden border" style={{ borderColor: '#1b433228' }}>
                    <div className="px-4 py-3 border-b flex items-center gap-2" style={{ background: '#1b433210', borderColor: '#1b433228' }}>
                      <span className="text-[14px]">👍</span>
                      <span className="font-semibold text-[13px]" style={{ color: '#1b4332' }}>Good fit</span>
                    </div>
                    <ul className="divide-y divide-rule list-none p-0 m-0">
                      {[
                        ['Recreational gym users in India', 'Best value at this price point'],
                        ['Mild lactose sensitivity', 'DigeZyme® lactase helps'],
                        ['Budget-conscious buyers', 'Students, first-time buyers'],
                        ['Label-honesty focused', 'Third-party tested, transparent'],
                        ['Cooking / baking with protein', 'Mixes well, neutral enough'],
                      ].map(([who, why]) => (
                        <li key={who} className="px-4 py-3">
                          <div className="font-medium text-[13px] text-ink2">{who}</div>
                          <div className="text-[11.5px] text-muted mt-0.5">{why}</div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-[14px] overflow-hidden border border-rule">
                    <div className="px-4 py-3 border-b border-rule bg-paper2 flex items-center gap-2">
                      <span className="text-[14px]">👎</span>
                      <span className="font-semibold text-[13px] text-muted">Not the right choice</span>
                    </div>
                    <ul className="divide-y divide-rule list-none p-0 m-0">
                      {[
                        ['Clinically lactose intolerant', 'Consider AS-IT-IS WPI or ISO100'],
                        ['Competitive tested athletes', 'Needs NSF Certified for Sport'],
                        ['Outside India', 'Shipping kills price advantage'],
                        ['Soy allergy', 'Soy lecithin is in the formula'],
                        ['Sweetener-free diet', 'No stevia option in flavored'],
                      ].map(([who, why]) => (
                        <li key={who} className="px-4 py-3">
                          <div className="font-medium text-[13px] text-ink2">{who}</div>
                          <div className="text-[11.5px] text-muted mt-0.5">{why}</div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* ════════ PHARMACIST NOTE ════════ */}
              <section className="mb-12 sm:mb-16">
                <SectionHead id="pharmacist" label="Pharmacist, Pharm.B" title="Drug and health interactions" />

                {/* Author badge */}
                <div className="flex items-center gap-3 p-3.5 rounded-[12px] border border-clay/25 bg-clay/5 mb-5">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-[13px] font-semibold shrink-0"
                       style={{ background: '#1b4332' }}>PS</div>
                  <div>
                    <div className="text-[13px] font-semibold text-ink2">Pankaj Singh, Pharm.B</div>
                    <div className="text-[11px] text-muted">Pharmacist — drug-nutrient interaction analysis</div>
                  </div>
                </div>

                <p className="text-[14.5px] sm:text-[15px] leading-[1.85] text-ink3 mb-5">
                  Whey protein at 20–40g/day has no established safety concerns in healthy adults.
                  The kidney toxicity myth has been thoroughly investigated — long-term studies show no adverse
                  renal effects at high protein intakes in healthy adults. If you have pre-existing kidney disease,
                  speak to a nephrologist before any high-protein supplementation.
                </p>

                <div className="space-y-3">
                  {[
                    { level: 'Avoid', color: '#DC2626', bg: '#FEF2F2', border: '#FECACA', condition: 'Phenylketonuria (PKU)', note: 'Whey contains phenylalanine. Flavored variants carry a PKU warning for sucralose too. This product is not appropriate.' },
                    { level: 'Avoid', color: '#DC2626', bg: '#FEF2F2', border: '#FECACA', condition: 'Milk protein allergy', note: 'Distinct from lactose intolerance. This is an immune reaction to whey/casein. Contraindicated — switch to plant-based protein.' },
                    { level: 'Timing', color: '#D97706', bg: '#FFFBEB', border: '#FDE68A', condition: 'Levothyroxine (thyroid meds)', note: 'Calcium in dairy can reduce levothyroxine absorption. Separate by at least 4 hours. Timing issue — not a contraindication.' },
                    { level: 'Timing', color: '#D97706', bg: '#FFFBEB', border: '#FDE68A', condition: 'Tetracycline / quinolone antibiotics', note: 'Divalent cations in whey chelate these antibiotics. Separate by 2 hours from antibiotic dose.' },
                    { level: 'Note', color: '#1D4ED8', bg: '#EFF6FF', border: '#BFDBFE', condition: 'Diabetes / insulin management', note: 'Whey stimulates insulin secretion. Beneficial for type 2 (improves postprandial glucose). Type 1: factor into bolus calculations. Not a reason to avoid — inform your endocrinologist.' },
                  ].map(({ level, color, bg, border, condition, note }) => (
                    <div key={condition} className="flex gap-3 p-4 rounded-[12px] border"
                         style={{ background: bg, borderColor: border }}>
                      <div className="shrink-0 pt-0.5">
                        <span className="text-[10px] font-bold tracking-[0.1em] uppercase px-2 py-1 rounded-full"
                              style={{ background: color, color: '#fff' }}>
                          {level}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-[13.5px] text-ink2 mb-1">{condition}</div>
                        <p className="text-[13px] text-ink3 leading-[1.6] m-0">{note}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-[12px] text-muted leading-[1.65] mt-4 italic">
                  Educational information based on known pharmacological properties. Not a substitute for your
                  prescribing physician or pharmacist who has your complete medical history.
                </p>
              </section>

              {/* ════════ ALTERNATIVES ════════ */}
              <section className="mb-12 sm:mb-16">
                <SectionHead id="alternatives" label="Head-to-head" title="How it compares to alternatives" />

                <div className="space-y-3 mb-5">
                  {[
                    {
                      name: 'MuscleBlaze Biozyme',
                      subtitle: 'This review',
                      score: 8.4,
                      price: '₹2,899/kg',
                      type: 'WPC-led · flavored',
                      cert: 'Informed Sport',
                      slug: '',
                      current: true,
                      verdict: 'Best flavored whey under ₹3,000 in India. Tested clean.',
                    },
                    {
                      name: 'AS-IT-IS WPC80',
                      subtitle: 'Budget pick',
                      score: 8.8,
                      price: '₹1,899/kg',
                      type: 'WPC · unflavored only',
                      cert: 'None',
                      slug: '/reviews/asitis-whey-protein',
                      current: false,
                      verdict: 'Cheapest verified protein per gram in India. No flavors.',
                    },
                    {
                      name: 'Nutrabay Gold WPC',
                      subtitle: 'Indian alternative',
                      score: 8.0,
                      price: '₹2,199/kg',
                      type: 'WPC-led · flavored',
                      cert: 'None',
                      slug: '',
                      current: false,
                      verdict: 'Decent domestic option but less independently verified.',
                    },
                    {
                      name: 'ON Gold Standard',
                      subtitle: 'Premium pick',
                      score: 9.1,
                      price: '₹5,200+/kg',
                      type: 'WPI-led · flavored',
                      cert: 'Informed Sport',
                      slug: '',
                      current: false,
                      verdict: 'Better in absolute terms. Nearly double the price.',
                    },
                  ].map(({ name, subtitle, score, price, type, cert, slug, current, verdict }) => (
                    <div key={name}
                         className={`rounded-[14px] border overflow-hidden ${current ? 'border-clay/40' : 'border-rule'}`}
                         style={current ? { background: '#1b433206' } : {}}>
                      <div className={`px-4 py-3 border-b flex items-center justify-between gap-3 flex-wrap ${current ? 'border-clay/20' : 'border-rule'}`}
                           style={current ? { background: '#1b433210' } : { background: 'var(--paper2)' }}>
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="font-semibold text-[13.5px] sm:text-[14px] text-ink2 truncate">{name}</div>
                          {current && (
                            <span className="text-[10px] font-semibold tracking-[0.1em] uppercase text-white rounded-full px-2 py-0.5 shrink-0"
                                  style={{ background: '#1b4332' }}>
                              This review
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                          <span className="font-serif-body text-[20px]" style={{ color: '#1b4332' }}>{score}</span>
                          <span className="text-[11px] text-muted">/ 10</span>
                        </div>
                      </div>
                      <div className="px-4 py-3">
                        <div className="flex flex-wrap gap-x-4 gap-y-1 mb-2 text-[12px] text-muted">
                          <span>💰 {price}</span>
                          <span>🧬 {type}</span>
                          <span>{cert !== 'None' ? `✅ ${cert}` : '⬜ No cert'}</span>
                        </div>
                        <p className="text-[13px] text-ink3 leading-[1.55] mb-2">{verdict}</p>
                        <div className="flex gap-2.5 mt-3">
                          {slug && (
                            <a href={slug}
                               className="text-[12px] font-medium text-clay border border-clay/30 rounded-full px-3 py-1.5 hover:bg-clay/8 transition-colors">
                              Read review →
                            </a>
                          )}
                          <a href={`https://www.amazon.in/s?k=${encodeURIComponent(name)}`}
                             target="_blank" rel="nofollow sponsored"
                             className="text-[12px] font-medium text-ink2 border border-rule rounded-full px-3 py-1.5 hover:border-clay hover:text-clay transition-colors">
                            Buy on Amazon →
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-[13px] text-muted leading-[1.65]">
                  AS-IT-IS scores higher on value and label honesty but is unflavored only.
                  ON Gold Standard is the better absolute product but costs nearly double.
                  For flavored whey with third-party testing under ₹3,000 in India, Biozyme is the
                  strongest available option.
                </p>
              </section>

              {/* ════════ FAQ ════════ */}
              <section className="mb-12 sm:mb-16">
                <SectionHead id="faq" label="Common questions" title="Frequently asked" />

                <div className="space-y-0 divide-y divide-rule border border-rule rounded-[14px] overflow-hidden">
                  {[
                    { q: 'Is MuscleBlaze Biozyme good for beginners?', a: 'Yes. The 25g protein dose, good mixability, and price point make it well-suited for beginners. The DigeZyme® lactase specifically helps those new to whey who sometimes experience bloating when they start supplementing.' },
                    { q: 'Is MuscleBlaze Biozyme lab tested?', a: 'Yes. Lot JJBWPFMM0271 was independently tested by Labdoor (Feb–Apr 2026) across Anresco and SGS laboratories. Results: 26.7g protein found vs 25g claimed, free amino acids <0.01% (zero spiking), all four heavy metals undetected, all microbiology tests pass.' },
                    { q: 'Does MuscleBlaze Biozyme cause bloating?', a: "Less than most whey concentrates. The DigeZyme® blend includes lactase, which breaks down lactose. Users with mild lactose sensitivity generally tolerate Biozyme better than plain WPC. Severe lactose intolerance — where any dairy protein causes distress — still warrants switching to an isolate." },
                    { q: 'What is DigeZyme in MuscleBlaze Biozyme?', a: "DigeZyme® is a multi-enzyme complex by Sabinsa Corporation (India). It contains amylase, protease, lipase, cellulase, and lactase. The lactase is the clinically useful component — it breaks down residual lactose in the WPC blend. Dose is 50mg per serving, within the range used in Sabinsa's published research." },
                    { q: 'Is MuscleBlaze Biozyme available in the USA or Canada?', a: 'Not through standard retail. It can be ordered via Amazon.in with international shipping, or through Indian grocery importers. Once shipping is factored in, the price advantage largely disappears versus US-market alternatives like ON Gold Standard.' },
                    { q: 'How does it compare to ON Gold Standard Whey?', a: "Gold Standard uses a WPI-led blend with a longer international testing record and scores 9.1 vs Biozyme's 8.4. It costs nearly double in India. For most recreational users buying in India, Biozyme at half the price with its own clean lot test record is the rational choice. Competitive tested athletes should consider Gold Standard for the certification." },
                  ].map(({ q, a }, i) => (
                    <div key={i} className="px-4 sm:px-5 py-5">
                      <h3 className="font-sans font-semibold text-[14px] sm:text-[15px] tracking-[-0.01em] text-ink2 mb-2.5">{q}</h3>
                      <p className="text-[13.5px] sm:text-[14px] leading-[1.75] text-ink3 m-0">{a}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ════════ VERDICT ════════ */}
              <section id="verdict" className="mb-8 sm:mb-12">
                <SectionHead id="verdict-head" label="Final word" title="Verdict" />

                <div className="rounded-[14px] border overflow-hidden mb-5" style={{ borderColor: '#1b433228' }}>
                  <div className="px-5 py-5 border-b" style={{ background: '#1b433210', borderColor: '#1b433228' }}>
                    <div className="flex items-center gap-4">
                      <div className="font-serif-body leading-none" style={{ fontSize: '52px', color: '#1b4332' }}>8.4</div>
                      <div>
                        <div className="font-semibold text-[15px] text-ink2">MuscleBlaze Biozyme Performance Whey</div>
                        <div className="text-[12px] text-muted mt-0.5">8 purchases · Labdoor lot tested Feb–Apr 2026</div>
                      </div>
                    </div>
                  </div>
                  <div className="px-5 py-5 space-y-4">
                    <p className="text-[14.5px] sm:text-[15px] leading-[1.85] text-ink3">
                      I've used this product for nearly two years and bought it eight times. The consistency
                      across lots is what earns the recommendation — not marketing, not brand reputation.
                      The Labdoor test confirms the protein exceeds label claim. There is no amino spiking.
                      There are no heavy metals. The microbiology passes.
                    </p>
                    <p className="text-[14.5px] sm:text-[15px] leading-[1.85] text-ink3">
                      For the Indian market, this is the benchmark for flavored whey under ₹3,000/kg.
                      For international buyers, the cost advantage evaporates with shipping — better-tested
                      options exist at comparable prices in the US and Canadian markets.
                    </p>
                    <p className="text-[14.5px] sm:text-[15px] leading-[1.85] text-ink3">
                      The 8.4 score reflects two honest limitations: WPC-led blend (matters if lactose intolerant)
                      and the sweetener stack some find too intense. If neither applies and you're buying in India,
                      it's the default recommendation until something better comes along at this price point.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="https://www.amazon.in/s?k=MuscleBlaze+Biozyme+Performance+Whey"
                     target="_blank" rel="nofollow sponsored"
                     className="flex-1 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[14px] font-medium bg-clay text-white hover:bg-clayd transition-all">
                    Check price on Amazon India →
                  </a>
                  <a href="/compare/muscleblaze-vs-asitis-whey"
                     className="flex-1 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[13px] font-medium bg-paper3 text-ink2 border border-rule hover:border-clay transition-all">
                    Compare vs AS-IT-IS Whey →
                  </a>
                </div>
              </section>

              {/* Disclaimer */}
              <div className="pt-5 border-t border-rule">
                <p className="text-[11.5px] text-muted leading-[1.7]">
                  <strong className="font-medium text-ink3">Affiliate disclosure:</strong> Purchase links earn a small commission at no extra cost to you. Commission rates have no bearing on scores or recommendations. See our <a href="/conflicts-policy" className="text-clay hover:underline">conflicts policy</a>.
                  {' '}<strong className="font-medium text-ink3">Not medical advice.</strong> Pharmacist notes are educational. Consult a qualified healthcare professional before starting any supplement if you have a medical condition or take prescription medication.
                </p>
              </div>
            </article>

            {/* ── STICKY SIDEBAR — hidden on mobile ───────────────────── */}
            <aside className="hidden lg:block py-10 sm:py-14">
              <div className="sticky top-24 space-y-4">

                <div className="bg-paper3 border border-rule rounded-[14px] overflow-hidden">
                  <div className="px-5 py-5 border-b border-rule text-center" style={{ background: '#1b433210' }}>
                    <div className="text-[11px] tracking-[0.18em] uppercase text-muted mb-1">Fitlab score</div>
                    <div className="font-serif-body text-[52px] leading-none" style={{ color: '#1b4332', fontVariationSettings: '"opsz" 96' }}>8.4</div>
                    <div className="text-[12px] text-muted">/ 10</div>
                  </div>
                  <div className="p-4">
                    <a href="https://www.amazon.in/s?k=MuscleBlaze+Biozyme+Performance+Whey"
                       target="_blank" rel="nofollow sponsored"
                       className="w-full flex items-center justify-center rounded-full py-3 text-[13px] font-medium bg-clay text-white hover:bg-clayd transition-colors mb-2">
                      Buy on Amazon India →
                    </a>
                    <div className="text-[10.5px] text-muted text-center">Affiliate · price verified May 2026</div>
                  </div>
                </div>

                <div className="bg-paper3 border border-rule rounded-[14px] p-4">
                  <div className="text-[10px] tracking-[0.16em] uppercase text-muted font-semibold mb-3">Lab results</div>
                  {[
                    ['Protein accuracy', '106.8%', 'text-clay'],
                    ['Amino spiking', 'None', 'text-moss'],
                    ['Heavy metals', 'Undetected', 'text-moss'],
                    ['Microbiology', 'All pass', 'text-moss'],
                  ].map(([label, val, cls]) => (
                    <div key={label} className="flex justify-between py-2 border-b border-rule last:border-b-0 text-[12.5px]">
                      <span className="text-muted">{label}</span>
                      <span className={`font-semibold ${cls}`}>{val}</span>
                    </div>
                  ))}
                  <a href="https://cdn.labdoor.io/certification/images/jx36smg1gvayxfl5ca1ug.pdf"
                     target="_blank" rel="noopener"
                     className="mt-3 block text-center text-[12px] text-clay hover:underline">
                    Full Labdoor PDF →
                  </a>
                </div>

                <div className="bg-paper3 border border-rule rounded-[14px] p-4">
                  <div className="text-[10px] tracking-[0.16em] uppercase text-muted font-semibold mb-3">In this review</div>
                  <div className="space-y-1">
                    {[['Lab test', '#lab-test'], ['Ingredients', '#ingredients'], ['Real-world', '#real-world'], ['Pharmacist', '#pharmacist'], ['Alternatives', '#alternatives'], ['FAQ', '#faq']].map(([l, h]) => (
                      <a key={h} href={h} className="block text-[12.5px] text-ink3 py-1 hover:text-clay transition-colors">→ {l}</a>
                    ))}
                  </div>
                </div>

                <div className="bg-paper3 border border-rule rounded-[14px] p-4">
                  <div className="text-[10px] tracking-[0.16em] uppercase text-muted font-semibold mb-3">Related</div>
                  {[
                    ['Best protein in India', '/best/protein'],
                    ['AS-IT-IS Whey review', '/reviews/asitis-whey-protein'],
                    ['Biozyme vs AS-IT-IS', '/compare/muscleblaze-vs-asitis-whey'],
                    ['Whey protein guide', '/ingredients/whey-protein-isolate'],
                  ].map(([l, h]) => (
                    <a key={h} href={h} className="block text-[12.5px] text-clay hover:underline py-1">{l} →</a>
                  ))}
                </div>

              </div>
            </aside>

          </div>
        </div>

        {/* ── MOBILE STICKY BUY BAR ─────────────────────────────────── */}
        <div className="lg:hidden sticky bottom-0 left-0 right-0 z-30 border-t border-rule"
             style={{ background: '#F2EDE2' }}>
          <div className="flex gap-2.5 px-4 py-3">
            <a href="https://www.amazon.in/s?k=MuscleBlaze+Biozyme+Performance+Whey"
               target="_blank" rel="nofollow sponsored"
               className="flex-1 flex items-center justify-center rounded-full py-3 text-[13px] font-medium bg-clay text-white hover:bg-clayd transition-colors">
              Buy on Amazon →
            </a>
            <a href="https://cdn.labdoor.io/certification/images/jx36smg1gvayxfl5ca1ug.pdf"
               target="_blank" rel="noopener"
               className="flex items-center justify-center rounded-full px-4 py-3 text-[12px] font-medium bg-paper3 text-ink2 border border-rule">
              Lab PDF
            </a>
          </div>
        </div>

        {/* Author */}
        <section className="py-8 sm:py-10 border-t border-rule">
          <div className="max-w-site mx-auto px-4 sm:px-8 lg:px-14">
            <div className="max-w-[720px]">
              <div className="skirt mb-4">Reviewed by</div>
              <div className="flex items-start gap-3 sm:gap-4 bg-paper3 border border-rule rounded-[14px] p-4 sm:p-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white font-semibold text-[15px] shrink-0"
                     style={{ background: author.color }}>{author.initials}</div>
                <div className="min-w-0">
                  <div className="font-semibold text-[15px] text-ink2">{author.name}</div>
                  <div className="text-[11px] tracking-[0.08em] uppercase font-medium mb-2" style={{ color: author.color }}>{author.credentials}</div>
                  <p className="text-[12.5px] sm:text-[13px] text-muted leading-[1.65] mb-2">
                    Pharmacist and founder of Fitlab Reviews. Personally purchased MuscleBlaze Biozyme 8 times across 2022–2024.
                    This review is based on 19 months of sustained personal use, a commissioned Labdoor lot test, and pharmaceutical
                    training in formulation analysis and drug-nutrient interactions.
                  </p>
                  {author.linkedin && (
                    <a href={author.linkedin} target="_blank" rel="noopener noreferrer" className="text-[12px] text-clay hover:underline">
                      LinkedIn ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

      </PageShell>
    </>
  )
}
