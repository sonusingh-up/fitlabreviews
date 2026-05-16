import PageShell from '@/components/PageShell'
import JsonLd from '@/components/JsonLd'
import { authors } from '@/lib/data'

const SITE_URL = 'https://fitlabreviews.com'

export const metadata = {
  title: 'MuscleBlaze Biozyme Performance Whey Review (2026) — Tested Across 8 Purchases',
  description: 'An independent review of MuscleBlaze Biozyme Performance Whey backed by 4 years of personal use, Labdoor lab testing (26.7g protein found vs 25g claimed), and a pharmacist\'s ingredient analysis. No sponsored content.',
  alternates: { canonical: `${SITE_URL}/reviews/muscleblaze-biozyme-whey` },
  openGraph: {
    type: 'article',
    url: `${SITE_URL}/reviews/muscleblaze-biozyme-whey`,
    title: 'MuscleBlaze Biozyme Performance Whey Review (2026) — 8 Purchases, Lab Tested',
    description: 'Independent review with Labdoor lab data. Protein accuracy: 106.8%. Zero amino spiking. Zero heavy metals.',
  },
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'MuscleBlaze Biozyme Performance Whey',
  brand: { '@type': 'Brand', name: 'MuscleBlaze' },
  description: 'Whey protein concentrate blend with DigeZyme® digestive enzyme complex. Available in India from HealthKart.',
  image: `${SITE_URL}/products/muscleblaze-biozyme-whey.webp`,
  offers: {
    '@type': 'Offer',
    priceCurrency: 'INR',
    price: '2899',
    availability: 'https://schema.org/InStock',
    url: `${SITE_URL}/reviews/muscleblaze-biozyme-whey`,
  },
  review: {
    '@type': 'Review',
    author: { '@type': 'Person', name: 'Pankaj Singh', jobTitle: 'Pharmacist (Pharm.B)', url: 'https://www.linkedin.com/in/pankaj-singh-77b93a368/' },
    datePublished: '2026-05-11',
    dateModified: '2026-05-11',
    name: 'MuscleBlaze Biozyme Performance Whey Review — 4 Years, 8 Purchases, Lab Tested',
    reviewBody: 'Reviewed across 8 purchases from September 2022 to April 2024. Labdoor lot test (Feb–Apr 2026) found 26.7g protein vs 25g claimed. Zero amino spiking, zero heavy metals. Best-value whey protein in India with a consistent clean lot record.',
    reviewRating: { '@type': 'Rating', ratingValue: '8.4', bestRating: '10', worstRating: '0' },
    publisher: { '@type': 'Organization', name: 'Fitlab Reviews', url: SITE_URL },
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '8.4',
    bestRating: '10',
    worstRating: '0',
    ratingCount: '1',
    reviewCount: '1',
  },
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
    { '@type': 'Question', name: 'Is MuscleBlaze Biozyme Whey good for beginners?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The protein dose (25g per scoop), mixability, and price point make it well-suited for beginners. The DigeZyme® enzyme blend specifically helps those new to whey who sometimes experience bloating.' } },
    { '@type': 'Question', name: 'Is MuscleBlaze Biozyme lab tested?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Lot JJBWPFMM0271 was independently tested by Labdoor (Feb–Apr 2026). Results: 26.7g protein found vs 25g claimed (106.8% accuracy), free amino acids <0.01% (no spiking), all four heavy metals undetected.' } },
    { '@type': 'Question', name: 'Does MuscleBlaze Biozyme cause bloating?', acceptedAnswer: { '@type': 'Answer', text: 'Less than most whey concentrates. The DigeZyme® blend includes lactase, which breaks down lactose. Users with mild lactose sensitivity generally tolerate Biozyme better than standard WPC blends. Severe lactose intolerance still warrants an isolate.' } },
    { '@type': 'Question', name: 'Is MuscleBlaze Biozyme available in the USA?', acceptedAnswer: { '@type': 'Answer', text: 'Not through standard US retail. It can be purchased via Amazon.in and shipped internationally, or through Indian diaspora importers. Price competitiveness reduces significantly once international shipping is factored in.' } },
    { '@type': 'Question', name: 'What is DigeZyme in MuscleBlaze Biozyme?', acceptedAnswer: { '@type': 'Answer', text: 'DigeZyme® is a multi-enzyme complex manufactured by Sabinsa Corporation (India). It contains amylase, protease, lipase, cellulase, and lactase. The inclusion of lactase is the clinically useful part — it helps break down the residual lactose in whey concentrate, reducing GI discomfort.' } },
    { '@type': 'Question', name: 'How does MuscleBlaze Biozyme compare to Optimum Nutrition Gold Standard?', acceptedAnswer: { '@type': 'Answer', text: 'Gold Standard uses a WPI-led blend with better per-gram protein density and has Informed Sport certification. Biozyme is WPC-led, cheaper per serving in India, and adds DigeZyme® for digestive support. For Indian buyers on a budget, Biozyme is the better value. For those prioritising certification or lactose sensitivity, Gold Standard wins.' } },
  ],
}

const ScoreBar = ({ label, value, max = 10 }: { label: string; value: number; max?: number }) => (
  <div className="flex items-center gap-3 py-3 border-b border-rule last:border-b-0">
    <span className="text-[12px] font-medium uppercase tracking-[0.1em] text-muted w-[148px] shrink-0">{label}</span>
    <div className="flex-1 h-[5px] rounded-full overflow-hidden" style={{ background: '#E8E1D2' }}>
      <div className="h-full rounded-full transition-all duration-700"
           style={{ width: `${(value / max) * 100}%`, background: 'linear-gradient(90deg,#1b4332,#52b788)' }} />
    </div>
    <span className="font-serif-body text-[18px] w-8 text-right shrink-0" style={{ color: '#1b4332' }}>{value}</span>
  </div>
)

export default function BiozymReviewPage() {
  const author = authors[0]

  return (
    <>
      <JsonLd schema={[productSchema, breadcrumbSchema, faqSchema]} />
      <PageShell crumbs={[
        { label: 'Home', href: '/' },
        { label: 'Reviews', href: '/reviews' },
        { label: 'Protein', href: '/best/protein' },
        { label: 'MuscleBlaze Biozyme' },
      ]}>

        {/* ── HERO ── */}
        <section className="py-12 sm:py-16 border-b border-rule">
          <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:gap-14 items-start">

              {/* Left */}
              <div>
                {/* Meta row */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-4 text-[12px] text-muted">
                  <span className="uppercase tracking-[0.12em] font-medium">MuscleBlaze</span>
                  <span>·</span>
                  <a href="/best/protein" className="text-clay hover:underline uppercase tracking-[0.1em] font-medium">Protein</a>
                  <span>·</span>
                  <span>Reviewed May 2026</span>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1.5 text-moss font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-moss inline-block" />
                    Lab tested Feb–Apr 2026
                  </span>
                </div>

                <h1 className="font-sans font-semibold leading-[1.06] tracking-[-0.03em] text-ink2 mb-3"
                    style={{ fontSize: 'clamp(26px, 3.8vw, 46px)' }}>
                  MuscleBlaze Biozyme<br />
                  Performance Whey Review
                </h1>
                <p className="font-serif-body text-[18px] sm:text-[22px] text-muted mb-5"
                   style={{ fontVariationSettings: '"opsz" 72' }}>
                  4 years. 8 purchases. One Labdoor test. Here's what we found.
                </p>

                {/* Quick verdict box */}
                <div className="p-4 bg-clay/8 border border-clay/25 rounded-[12px] mb-6">
                  <div className="text-[11px] tracking-[0.16em] uppercase text-clay font-medium mb-2">Bottom line</div>
                  <p className="text-[14px] leading-[1.65] text-ink3">
                    The most honest value-for-money whey protein sold in India. Labdoor found
                    <strong className="text-ink2"> 26.7g protein per scoop vs 25g claimed</strong> — 106.8% accuracy, 
                    zero amino spiking, zero heavy metals. Not the fanciest option on the shelf. 
                    The label just tells the truth, which is rarer than it should be.
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {['25g protein/scoop', 'WPC-led blend', 'DigeZyme® enzymes', 'Informed Sport certified', 'Lab tested 2026'].map(t => (
                    <span key={t} className="text-[11.5px] bg-paper border border-rule text-ink3 rounded-full px-3 py-1">{t}</span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex flex-wrap gap-3 items-center">
                  <a href="https://www.amazon.in/s?k=MuscleBlaze+Biozyme+Performance+Whey" target="_blank" rel="nofollow sponsored"
                     className="inline-flex items-center gap-2 rounded-full px-[22px] py-[13px] text-[14px] font-medium bg-clay text-white hover:bg-clayd transition-all duration-150">
                    Check price on Amazon India →
                  </a>
                  <span className="text-[11px] text-muted max-w-[180px] leading-[1.5]">
                    Affiliate link — commission doesn't change our score
                  </span>
                </div>
              </div>

              {/* Right — score card */}
              <div className="bg-paper3 border border-rule rounded-[14px] overflow-hidden">
                {/* Product image placeholder */}
                <div className="border-b border-rule flex items-center justify-center"
                     style={{ aspectRatio: '4/3', background: '#EDF5F0' }}>
                  <div className="text-center px-6">
                    <div className="w-24 h-32 mx-auto rounded-lg opacity-20 mb-3"
                         style={{ background: 'linear-gradient(135deg,#D3CCBE,#1b433240)' }} />
                    <p className="text-[11px] text-muted">Product image — add /public/products/muscleblaze-biozyme-whey.webp</p>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  {/* Overall */}
                  <div className="text-center pb-5 mb-5 border-b border-rule">
                    <div className="text-[11px] tracking-[0.18em] uppercase text-muted mb-1">Fitlab Score</div>
                    <div className="font-serif-display leading-none" style={{ fontSize: '72px', color: '#1b4332', fontVariationSettings: '"opsz" 96' }}>
                      8.4
                    </div>
                    <div className="text-[13px] text-muted mt-1">out of 10</div>
                  </div>

                  {/* Rubric */}
                  <div className="mb-5">
                    <div className="text-[11px] tracking-[0.14em] uppercase text-muted font-medium mb-1">Rubric breakdown</div>
                    <ScoreBar label="Clinical dose"   value={8.8} />
                    <ScoreBar label="Ingredient form" value={8.2} />
                    <ScoreBar label="Lab purity"      value={9.0} />
                    <ScoreBar label="Value/gram"      value={9.4} />
                    <ScoreBar label="Label honesty"   value={8.6} />
                  </div>

                  {/* Quick facts */}
                  <div className="space-y-2.5 text-[13px] border-t border-rule pt-4">
                    {[
                      { label: 'Price (1kg)', val: '₹2,899' },
                      { label: 'Per serving', val: '₹116' },
                      { label: 'Protein/scoop', val: '25g claimed · 26.7g found' },
                      { label: 'Calories', val: '125 kcal' },
                      { label: 'Amino spiking', val: 'None detected (<0.01%)' },
                      { label: 'Heavy metals', val: 'All undetected' },
                    ].map(r => (
                      <div key={r.label} className="flex justify-between items-start gap-2">
                        <span className="text-muted shrink-0">{r.label}</span>
                        <span className="font-medium text-ink2 text-right">{r.val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TABLE OF CONTENTS ── */}
        <section className="py-8 border-b border-rule bg-paper2">
          <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
            <div className="skirt mb-3">In this review</div>
            <div className="flex flex-wrap gap-2">
              {[
                ['Why we reviewed it', '#background'],
                ['Lab test results', '#lab-test'],
                ['Full ingredient analysis', '#ingredients'],
                ['Real-world use', '#real-world'],
                ['Pros & cons', '#pros-cons'],
                ['Who should buy it', '#who-for'],
                ['Pharmacist note', '#pharmacist'],
                ['Vs alternatives', '#alternatives'],
                ['FAQ', '#faq'],
                ['Verdict', '#verdict'],
              ].map(([label, href]) => (
                <a key={href} href={href}
                   className="text-[12.5px] text-clay border border-clay/30 rounded-full px-3 py-1.5 hover:bg-clay/8 transition-colors">
                  {label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── MAIN CONTENT ── */}
        <article className="py-14 sm:py-16">
          <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_280px] lg:gap-16 items-start">

              {/* Main column */}
              <div className="max-w-[720px]">

                {/* ── BACKGROUND ── */}
                <section id="background" className="mb-12">
                  <h2 className="font-sans font-semibold text-[22px] sm:text-[26px] tracking-[-0.02em] text-ink2 mb-4 leading-[1.25]">
                    Why we reviewed this, and how
                  </h2>
                  <p className="text-[15px] leading-[1.8] text-ink3 mb-4">
                    I first bought MuscleBlaze Biozyme Performance Whey in September 2022. I was a pharmacy student
                    looking for a reliable protein source that wouldn't break the budget and wouldn't lie on the label.
                    I've since placed eight separate orders — across the 1kg and 2kg variants — between September 2022
                    and April 2024. That's not brand loyalty born from marketing. It's what happens when a product
                    consistently does what it says.
                  </p>
                  <p className="text-[15px] leading-[1.8] text-ink3 mb-4">
                    Most supplement reviews are written from a single purchase, sometimes from a sample the brand sent.
                    This review is different. It covers roughly 19 months of consistent use across multiple lot numbers,
                    two size variants, and a Labdoor independent laboratory test on lot JJBWPFMM0271 conducted
                    between February and April 2026.
                  </p>
                  <p className="text-[15px] leading-[1.8] text-ink3 mb-4">
                    I'm a pharmacist (Pharm.B). I evaluate supplements the same way I evaluate drug formulations —
                    through the label claims, the ingredient forms, the manufacturing quality signals, and the
                    independent third-party data. This review uses that framework.
                  </p>

                  {/* Purchase history proof */}
                  <div className="mt-6 p-5 bg-paper3 border border-rule rounded-[14px]">
                    <div className="skirt mb-4">Purchase history — verified orders</div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-[13px]" style={{ minWidth: '400px' }}>
                        <thead>
                          <tr className="border-b border-rule">
                            <th className="text-left text-muted font-medium py-2 pr-4">Delivered</th>
                            <th className="text-left text-muted font-medium py-2 pr-4">Variant</th>
                            <th className="text-right text-muted font-medium py-2">Price paid</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-rule">
                          {[
                            ['Sep 09, 2022', '1kg', '₹2,599'],
                            ['Jan 20, 2023', '1kg', '₹2,599'],
                            ['Feb 20, 2023', '1kg, Informed Sport', '₹2,657'],
                            ['Mar 29, 2023', '1kg, Informed Sport', '₹2,491'],
                            ['Apr 14, 2023', '1kg, Informed Sport', '₹2,631'],
                            ['Sep 24, 2023', '2kg', '₹4,474'],
                            ['Nov 30, 2023', '2kg', '₹4,699'],
                            ['Apr 27, 2024', '1kg, Informed Sport', '₹2,403'],
                          ].map(([date, variant, price]) => (
                            <tr key={date}>
                              <td className="py-2.5 pr-4 text-muted">{date}</td>
                              <td className="py-2.5 pr-4 text-ink2">{variant}</td>
                              <td className="py-2.5 text-right font-medium text-ink2">{price}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p className="text-[11.5px] text-muted mt-3">
                      Purchases verified via Amazon India order history. Screenshots available on request.
                      Lot numbers varied across orders — this review reflects consistent experience across lots.
                    </p>
                  </div>
                </section>

                {/* ── LAB TEST ── */}
                <section id="lab-test" className="mb-12">
                  <h2 className="font-sans font-semibold text-[22px] sm:text-[26px] tracking-[-0.02em] text-ink2 mb-4 leading-[1.25]">
                    Labdoor independent lab test — the actual numbers
                  </h2>
                  <p className="text-[15px] leading-[1.8] text-ink3 mb-4">
                    We submitted lot JJBWPFMM0271 (expiry 07/2027) to Labdoor — one of the most reputable
                    independent supplement testing organisations — for accuracy and purity analysis. Testing was
                    conducted between February and April 2026 across two accredited laboratories: Anresco and SGS.
                    Here's what came back.
                  </p>

                  {/* Lab results card */}
                  <div className="border border-rule rounded-[14px] overflow-hidden mb-6">
                    {/* Header */}
                    <div className="px-5 py-4 bg-clay text-white">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <div>
                          <div className="text-[11px] tracking-[0.16em] uppercase opacity-70 mb-1">Labdoor Test Results</div>
                          <div className="font-semibold text-[16px]">MuscleBlaze Biozyme Performance Whey</div>
                        </div>
                        <div className="text-right">
                          <div className="text-[11px] opacity-70">Lot JJBWPFMM0271</div>
                          <div className="font-medium text-[14px]">Feb–Apr 2026 · Anresco + SGS</div>
                        </div>
                      </div>
                    </div>

                    {/* Accuracy section */}
                    <div className="px-5 py-4 border-b border-rule">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="w-2 h-2 rounded-full bg-moss inline-block" />
                        <span className="font-semibold text-[14px] text-ink2">Tested for Accuracy — PASS</span>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full text-[13px]" style={{ minWidth: '380px' }}>
                          <thead>
                            <tr className="border-b border-rule">
                              <th className="text-left text-muted font-medium py-2 pr-4">Substance</th>
                              <th className="text-right text-muted font-medium py-2 pr-4">Claimed</th>
                              <th className="text-right text-muted font-medium py-2 pr-4">Found</th>
                              <th className="text-right text-muted font-medium py-2">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-rule">
                              <td className="py-3 pr-4 font-medium text-ink2">Protein</td>
                              <td className="py-3 pr-4 text-right text-muted">25g / serving</td>
                              <td className="py-3 pr-4 text-right font-semibold text-clay">26.7g / serving</td>
                              <td className="py-3 text-right">
                                <span className="inline-flex items-center gap-1 text-moss font-medium">
                                  <span className="w-1.5 h-1.5 rounded-full bg-moss inline-block" />Pass
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="py-3 pr-4 font-medium text-ink2">Free Amino Acids (spiking marker)</td>
                              <td className="py-3 pr-4 text-right text-muted">—</td>
                              <td className="py-3 pr-4 text-right font-semibold text-moss">&lt;0.01%</td>
                              <td className="py-3 text-right">
                                <span className="inline-flex items-center gap-1 text-moss font-medium">
                                  <span className="w-1.5 h-1.5 rounded-full bg-moss inline-block" />Pass
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="mt-3 p-3 bg-clay/8 rounded-[8px]">
                        <p className="text-[12.5px] text-ink3 leading-[1.6]">
                          <strong className="text-ink2">What 26.7g means:</strong> At 106.8% of label claim, this is genuinely good.
                          Most labs flag anything over 120% as an anomaly, but 100–115% is the acceptable and desirable range.
                          It means you're getting slightly more protein than you're paying for. Free amino acids
                          at &lt;0.01% is as clean as this test gets — effectively undetectable, confirming no amino spiking.
                        </p>
                      </div>
                    </div>

                    {/* Heavy metals */}
                    <div className="px-5 py-4 border-b border-rule">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="w-2 h-2 rounded-full bg-moss inline-block" />
                        <span className="font-semibold text-[14px] text-ink2">Tested for Purity (Heavy Metals) — PASS</span>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full text-[13px]" style={{ minWidth: '380px' }}>
                          <thead>
                            <tr className="border-b border-rule">
                              <th className="text-left text-muted font-medium py-2 pr-4">Metal</th>
                              <th className="text-right text-muted font-medium py-2 pr-4">USP limit</th>
                              <th className="text-right text-muted font-medium py-2 pr-4">Found</th>
                              <th className="text-right text-muted font-medium py-2">Status</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-rule">
                            {[
                              ['Arsenic', '15 μg/serving', 'Undetected'],
                              ['Cadmium', '5 μg/serving', 'Undetected'],
                              ['Mercury', '15 μg/serving', 'Undetected'],
                              ['Lead', '5 μg/serving', 'Undetected'],
                            ].map(([metal, limit, found]) => (
                              <tr key={metal}>
                                <td className="py-3 pr-4 font-medium text-ink2">{metal}</td>
                                <td className="py-3 pr-4 text-right text-muted">{limit}</td>
                                <td className="py-3 pr-4 text-right font-semibold text-moss">{found}</td>
                                <td className="py-3 text-right">
                                  <span className="inline-flex items-center gap-1 text-moss font-medium">
                                    <span className="w-1.5 h-1.5 rounded-full bg-moss inline-block" />Pass
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Microbiology */}
                    <div className="px-5 py-4">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="w-2 h-2 rounded-full bg-moss inline-block" />
                        <span className="font-semibold text-[14px] text-ink2">Tested for Purity (Microbiology) — PASS</span>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full text-[13px]" style={{ minWidth: '380px' }}>
                          <thead>
                            <tr className="border-b border-rule">
                              <th className="text-left text-muted font-medium py-2 pr-4">Test</th>
                              <th className="text-right text-muted font-medium py-2 pr-4">Limit (USP)</th>
                              <th className="text-right text-muted font-medium py-2 pr-4">Found</th>
                              <th className="text-right text-muted font-medium py-2">Status</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-rule">
                            {[
                              ['Total Plate Count', '1,000 cfu/g', '900 cfu/g'],
                              ['Yeast / Mold', '100 cfu/g', '<10 cfu/g'],
                              ['Coliforms', '—', '<10 cfu/g'],
                              ['E. Coli', '—', '<10 cfu/g'],
                              ['Staphylococcus aureus', '—', '<10 cfu/g'],
                              ['Salmonella', '—', 'Undetected'],
                              ['Shigella', '—', 'Undetected'],
                            ].map(([test, limit, found]) => (
                              <tr key={test}>
                                <td className="py-2.5 pr-4 font-medium text-ink2">{test}</td>
                                <td className="py-2.5 pr-4 text-right text-muted">{limit}</td>
                                <td className="py-2.5 pr-4 text-right font-semibold text-moss">{found}</td>
                                <td className="py-2.5 text-right">
                                  <span className="inline-flex items-center gap-1 text-moss font-medium">
                                    <span className="w-1.5 h-1.5 rounded-full bg-moss inline-block" />Pass
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="mt-4 pt-3 border-t border-rule flex items-center justify-between flex-wrap gap-3">
                        <p className="text-[11.5px] text-muted">
                          Source: Labdoor · Released May 5, 2026 · Laboratories: Anresco + SGS
                        </p>
                        <a href="https://cdn.labdoor.io/certification/images/jx36smg1gvayxfl5ca1ug.pdf"
                           target="_blank" rel="noopener noreferrer"
                           className="text-[12px] text-clay font-medium hover:underline">
                          View full Labdoor report (PDF) →
                        </a>
                      </div>
                    </div>
                  </div>

                  <p className="text-[15px] leading-[1.8] text-ink3 mb-4">
                    The total plate count at 900 cfu/g — just under the 1,000 cfu/g USP limit — is worth noting.
                    It passes, but it's close. This is not unusual for a whey concentrate from a hot, humid
                    manufacturing environment. It's not a safety concern at this level, but it's worth
                    monitoring across future lots.
                  </p>
                </section>

                {/* ── INGREDIENTS ── */}
                <section id="ingredients" className="mb-12">
                  <h2 className="font-sans font-semibold text-[22px] sm:text-[26px] tracking-[-0.02em] text-ink2 mb-4 leading-[1.25]">
                    Full ingredient analysis
                  </h2>
                  <p className="text-[15px] leading-[1.8] text-ink3 mb-6">
                    The label lists the following per 36g scoop (1 serving):
                  </p>

                  {/* Ingredient table */}
                  <div className="border border-rule rounded-[14px] overflow-hidden mb-6">
                    <div className="px-5 py-3 bg-paper2 border-b border-rule">
                      <span className="text-[11px] tracking-[0.14em] uppercase text-muted font-medium">
                        Nutrition per scoop (36g) — label claims
                      </span>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-[13px]" style={{ minWidth: '460px' }}>
                        <thead>
                          <tr className="border-b border-rule bg-paper2">
                            <th className="text-left text-muted font-medium py-2.5 px-5">Ingredient / nutrient</th>
                            <th className="text-right text-muted font-medium py-2.5 px-5">Per serving</th>
                            <th className="text-right text-muted font-medium py-2.5 px-5">Assessment</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-rule">
                          {[
                            ['Calories', '125 kcal', 'Appropriate for a protein supplement'],
                            ['Protein (blend)', '25g', '✓ Lab confirmed 26.7g — PASS'],
                            ['Total fat', '2.8g', 'Expected for WPC — not a concern'],
                            ['Total carbohydrate', '3.5g', 'Low, appropriate'],
                            ['Sugar', '1.8g', 'Primarily from lactose in WPC'],
                            ['Sodium', '78mg', 'Moderate — relevant for those monitoring'],
                            ['DigeZyme® blend', '50mg', 'See analysis below'],
                            ['Whey Protein Concentrate', 'Leads blend', '~80% protein by weight'],
                            ['Whey Protein Isolate', 'Secondary', 'Concentrate leads — WPI is secondary'],
                          ].map(([item, amount, note]) => (
                            <tr key={item}>
                              <td className="py-3 px-5 font-medium text-ink2">{item}</td>
                              <td className="py-3 px-5 text-right text-ink2">{amount}</td>
                              <td className="py-3 px-5 text-right text-muted text-[12px]">{note}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <h3 className="font-sans font-semibold text-[17px] tracking-[-0.01em] text-ink2 mb-3">
                    The protein blend — what "WPC-led" actually means
                  </h3>
                  <p className="text-[15px] leading-[1.8] text-ink3 mb-4">
                    The label lists Whey Protein Concentrate before Whey Protein Isolate, meaning WPC is the
                    primary source by weight. This is important to understand for two reasons.
                  </p>
                  <p className="text-[15px] leading-[1.8] text-ink3 mb-4">
                    First, WPC contains more lactose than WPI — roughly 2–5% of its weight vs near-zero in
                    isolate. At 25g of protein per scoop, the total lactose in a serving of Biozyme is likely
                    0.5–1.5g. For most people, this is irrelevant. For those with clinically diagnosed lactose
                    intolerance, it may cause discomfort — which is directly why DigeZyme® is included.
                  </p>
                  <p className="text-[15px] leading-[1.8] text-ink3 mb-4">
                    Second, WPC is cheaper per gram of protein than WPI. The cost efficiency is the reason
                    Biozyme hits ₹116/serving at retail — you're getting a workable protein density without
                    paying the isolate premium that most users simply don't need.
                  </p>

                  <h3 className="font-sans font-semibold text-[17px] tracking-[-0.01em] text-ink2 mb-3">
                    DigeZyme® — what it actually is, and whether it matters
                  </h3>
                  <p className="text-[15px] leading-[1.8] text-ink3 mb-4">
                    DigeZyme® is a multi-enzyme complex manufactured by Sabinsa Corporation, a legitimate Indian
                    ingredient company with a published research record. The blend contains five enzymes:
                    amylase (starch breakdown), protease (protein breakdown), lipase (fat breakdown), cellulase
                    (fibre breakdown), and lactase (lactose breakdown).
                  </p>
                  <p className="text-[15px] leading-[1.8] text-ink3 mb-4">
                    The clinically useful enzyme here is lactase. It directly addresses the lactose content
                    of WPC, which is why users with mild dairy sensitivity generally tolerate Biozyme better
                    than plain WPC products. The protease addition may marginally accelerate protein
                    digestion — the evidence for this in healthy adults is modest but not zero.
                  </p>
                  <p className="text-[15px] leading-[1.8] text-ink3 mb-4">
                    The dose is 50mg per serving. Sabinsa's published human studies on DigeZyme® use 50–100mg,
                    so this is in the reasonable range. It's not decoration — but it's also not a transformative
                    ergogenic. Think of it as a sensible quality-of-life addition, not a performance driver.
                  </p>
                  <p className="text-[15px] leading-[1.8] text-ink3 mb-4">
                    One point of transparency: MuscleBlaze markets DigeZyme® heavily. The marketing language
                    goes well beyond what the evidence supports. The enzyme complex is genuine, the lactase
                    inclusion is useful, and the dose is reasonable — but "enhanced protein absorption" framing
                    is not strongly supported for healthy digestive systems. Don't buy this product for
                    the DigeZyme®. Buy it because the protein is accurately dosed and the price is right.
                  </p>

                  <h3 className="font-sans font-semibold text-[17px] tracking-[-0.01em] text-ink2 mb-3">
                    Sweeteners and additives
                  </h3>
                  <p className="text-[15px] leading-[1.8] text-ink3 mb-4">
                    Biozyme uses sucralose and acesulfame potassium (Ace-K) in flavored variants. This is the
                    most common complaint I see from regular users, and I'll be direct: if artificial sweeteners
                    are a concern for you, there is no way around it in the flavored versions. The doses are
                    within established ADI limits and are not a safety concern at typical supplement use levels.
                    They are, however, a taste preference issue for some people.
                  </p>
                  <p className="text-[15px] leading-[1.8] text-ink3 mb-4">
                    The double chocolate flavor (which I've used most extensively) is distinctly sweet — some
                    people find it too sweet in water and prefer mixing with milk to dilute it. The rich milk
                    chocolate is milder. The unflavored variant, which I've also tried, has none of these additives
                    but chalks up noticeably in plain water.
                  </p>
                  <p className="text-[15px] leading-[1.8] text-ink3">
                    Soy lecithin is used as an emulsifier. This is relevant if you have a soy allergy or avoid
                    soy for dietary reasons — it's a real ingredient, not a trace contaminant.
                  </p>
                </section>

                {/* ── REAL WORLD ── */}
                <section id="real-world" className="mb-12">
                  <h2 className="font-sans font-semibold text-[22px] sm:text-[26px] tracking-[-0.02em] text-ink2 mb-4 leading-[1.25]">
                    Real-world use — what 8 purchases actually teaches you
                  </h2>
                  <p className="text-[15px] leading-[1.8] text-ink3 mb-4">
                    Across eight purchases from 2022 to 2024, the product has been consistent in a way that is
                    genuinely uncommon in the Indian supplement market. Some specific observations:
                  </p>

                  <h3 className="font-sans font-semibold text-[17px] tracking-[-0.01em] text-ink2 mb-3">Mixability</h3>
                  <p className="text-[15px] leading-[1.8] text-ink3 mb-4">
                    It mixes well in a standard shaker with 200–250ml of water or milk. Foam is moderate —
                    I haven't found a way to eliminate it entirely, but it dissipates within 30 seconds.
                    In cold water it mixes better than in room temperature. There are no clumps in my experience
                    across 19 months. The 2kg variant (which I bought twice) seemed to have slightly coarser
                    powder texture, though this may have been batch variation.
                  </p>

                  <h3 className="font-sans font-semibold text-[17px] tracking-[-0.01em] text-ink2 mb-3">Taste consistency across lots</h3>
                  <p className="text-[15px] leading-[1.8] text-ink3 mb-4">
                    The Rich Milk Chocolate flavor was consistent across every order I placed — no lot-to-lot
                    variation I could detect. This matters more than it sounds. Some Indian protein brands
                    reformulate quietly, and the taste changes while the label stays the same.
                    That didn't happen here across my purchase window.
                  </p>

                  <h3 className="font-sans font-semibold text-[17px] tracking-[-0.01em] text-ink2 mb-3">Digestive tolerance</h3>
                  <p className="text-[15px] leading-[1.8] text-ink3 mb-4">
                    I don't have lactose intolerance, so I can't give a first-person account of how the
                    DigeZyme® performs for sensitive users. What I can say is that bloating after consumption
                    is minimal for me at the standard one-scoop dose, and I've had zero GI distress across
                    the entire period of use. I've used it post-workout in warm water and first thing in
                    the morning mixed into oats — both with no issues.
                  </p>

                  <h3 className="font-sans font-semibold text-[17px] tracking-[-0.01em] text-ink2 mb-3">Satiety and recovery feel</h3>
                  <p className="text-[15px] leading-[1.8] text-ink3 mb-4">
                    I want to be careful here because subjective performance feels are not reliable evidence.
                    What I can say objectively is that when I'm consistently hitting my daily protein target
                    (1.8g/kg bodyweight) using Biozyme as the supplement component, my recovery metrics —
                    as measured by training log performance — are indistinguishable from periods when I
                    used other protein sources at the same total daily intake. Which is exactly what the
                    research would predict.
                  </p>
                </section>

                {/* ── PROS / CONS ── */}
                <section id="pros-cons" className="mb-12">
                  <h2 className="font-sans font-semibold text-[22px] sm:text-[26px] tracking-[-0.02em] text-ink2 mb-6 leading-[1.25]">
                    Pros and cons
                  </h2>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <div className="text-[11px] tracking-[0.16em] uppercase font-medium text-clay mb-4">What holds up</div>
                      <ul className="space-y-3 list-none p-0 m-0">
                        {[
                          'Lab confirmed 26.7g protein vs 25g claimed — no under-delivery',
                          'Zero amino spiking detected — free amino acids <0.01%',
                          'All four heavy metals undetected — arsenic, cadmium, mercury, lead',
                          'All microbiology tests pass — Salmonella and Shigella undetected',
                          'DigeZyme® lactase component is genuinely useful for mild lactose sensitivity',
                          'Informed Sport certified (from Feb 2023 batches onward)',
                          'Consistent taste and texture across 19 months of personal use',
                          'Best price-per-gram of protein in the Indian market for a tested product',
                        ].map((pro, i) => (
                          <li key={i} className="flex gap-2.5 text-[14px] text-ink3 leading-[1.6]">
                            <span className="text-clay font-bold shrink-0 mt-0.5">+</span>{pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-[11px] tracking-[0.16em] uppercase font-medium text-muted mb-4">What to know</div>
                      <ul className="space-y-3 list-none p-0 m-0">
                        {[
                          'WPC-led blend — not a good choice if you have clinically confirmed lactose intolerance',
                          'Total Plate Count at 900/1000 cfu/g limit — passes, but worth tracking',
                          'Sucralose + acesulfame-K sweetener stack — no stevia option in most flavors',
                          'Contains soy lecithin — relevant for those with soy allergy',
                          'DigeZyme® marketing overpromises relative to clinical evidence',
                          'Not widely available outside India — international shipping makes it cost-uncompetitive globally',
                          'No NSF Certified for Sport — Informed Sport is strong but not the gold standard for professional athletes',
                        ].map((con, i) => (
                          <li key={i} className="flex gap-2.5 text-[14px] text-ink3 leading-[1.6]">
                            <span className="text-muted font-bold shrink-0 mt-0.5">–</span>{con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>

                {/* ── WHO IT'S FOR ── */}
                <section id="who-for" className="mb-12">
                  <h2 className="font-sans font-semibold text-[22px] sm:text-[26px] tracking-[-0.02em] text-ink2 mb-4 leading-[1.25]">
                    Who should buy this — and who shouldn't
                  </h2>

                  <div className="grid gap-4 sm:grid-cols-2 mb-6">
                    <div className="p-4 bg-clay/8 border border-clay/25 rounded-[12px]">
                      <div className="text-[11px] tracking-[0.14em] uppercase text-clay font-medium mb-3">
                        Good fit for
                      </div>
                      <ul className="space-y-2 list-none p-0 m-0 text-[13.5px] text-ink3 leading-[1.6]">
                        {[
                          'Recreational gym users in India looking for honest value',
                          'People with mild lactose sensitivity (the DigeZyme® lactase helps)',
                          'Users who prioritise label honesty and third-party testing over brand prestige',
                          'Students and budget-conscious buyers who can\'t afford premium isolates',
                          'Anyone cooking or baking with protein (mixes well, neutral enough flavors)',
                        ].map((item, i) => (
                          <li key={i} className="flex gap-2"><span className="text-clay shrink-0">✓</span>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4 bg-paper3 border border-rule rounded-[12px]">
                      <div className="text-[11px] tracking-[0.14em] uppercase text-muted font-medium mb-3">
                        Not the right product for
                      </div>
                      <ul className="space-y-2 list-none p-0 m-0 text-[13.5px] text-ink3 leading-[1.6]">
                        {[
                          'Clinically lactose intolerant users (consider AS-IT-IS WPI or Dymatize ISO100)',
                          'Competitive athletes needing NSF Certified for Sport',
                          'Buyers outside India where shipping kills the price advantage',
                          'Those avoiding soy completely (soy lecithin is in the formula)',
                          'Anyone looking for a sweetener-free or stevia-only product',
                        ].map((item, i) => (
                          <li key={i} className="flex gap-2"><span className="text-muted shrink-0">–</span>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>

                {/* ── PHARMACIST NOTE ── */}
                <section id="pharmacist" className="mb-12">
                  <h2 className="font-sans font-semibold text-[22px] sm:text-[26px] tracking-[-0.02em] text-ink2 mb-4 leading-[1.25]">
                    Pharmacist's note — drug and health interactions
                  </h2>
                  <div className="p-5 border-l-2 border-clay bg-clay/5 rounded-r-[12px] mb-5">
                    <p className="text-[12.5px] text-muted mb-1">
                      <strong className="text-ink2">Written by Pankaj Singh, Pharm.B</strong> — this section is specific to the pharmacological profile of this product's ingredients.
                    </p>
                  </div>

                  <h3 className="font-sans font-semibold text-[17px] tracking-[-0.01em] text-ink2 mb-3">
                    General population safety
                  </h3>
                  <p className="text-[15px] leading-[1.8] text-ink3 mb-4">
                    Whey protein at standard supplementation doses (20–40g/day) has no established safety
                    concerns in healthy adults. The kidney toxicity myth that circulates in gym culture has
                    been thoroughly investigated — multiple long-term studies in healthy adults show no
                    adverse renal effects at high protein intakes. The caveat is "healthy adults" — if
                    you have pre-existing kidney disease, speak to a nephrologist before supplementing with
                    any high-protein product.
                  </p>

                  <h3 className="font-sans font-semibold text-[17px] tracking-[-0.01em] text-ink2 mb-3">
                    Specific interactions to know
                  </h3>
                  <div className="space-y-4 mb-4">
                    {[
                      {
                        condition: 'Phenylketonuria (PKU)',
                        note: 'Whey protein contains phenylalanine. If you have PKU, this product is not appropriate. The sucralose in flavored variants also contains phenylalanine — the label carries a PKU warning for this reason.',
                        level: 'High concern',
                      },
                      {
                        condition: 'Milk protein allergy',
                        note: 'Distinct from lactose intolerance — this is an immune reaction to whey and/or casein proteins. If you have a diagnosed milk protein allergy, this product is contraindicated. Plant-based protein alternatives would be appropriate.',
                        level: 'High concern',
                      },
                      {
                        condition: 'Thyroid medication (levothyroxine)',
                        note: 'Calcium in dairy-based products (including whey) can interfere with levothyroxine absorption. Separation by at least 4 hours is recommended. This is a timing issue, not a contraindication.',
                        level: 'Timing concern',
                      },
                      {
                        condition: 'Tetracycline / quinolone antibiotics',
                        note: 'Divalent cations in whey (calcium, magnesium) can chelate these antibiotics and reduce absorption. Separate by 2 hours from antibiotic dose. Again, timing issue rather than contraindication.',
                        level: 'Timing concern',
                      },
                      {
                        condition: 'Diabetes / blood glucose management',
                        note: 'Whey protein stimulates insulin secretion. In type 2 diabetics, this can actually improve postprandial glucose control. In type 1 diabetics on insulin, consider this effect when calculating bolus doses. Not a reason to avoid — but inform your endocrinologist.',
                        level: 'Be aware',
                      },
                    ].map(item => (
                      <div key={item.condition} className="flex gap-4 p-4 bg-paper3 border border-rule rounded-[12px]">
                        <div className="shrink-0">
                          <span className={`text-[10px] font-semibold tracking-[0.1em] uppercase rounded-full px-2.5 py-1 ${
                            item.level === 'High concern' ? 'bg-red-100 text-red-700' :
                            item.level === 'Timing concern' ? 'bg-amber-100 text-amber-700' :
                            'bg-blue-100 text-blue-700'
                          }`}>
                            {item.level}
                          </span>
                        </div>
                        <div>
                          <div className="font-semibold text-[14px] text-ink2 mb-1">{item.condition}</div>
                          <p className="text-[13.5px] text-ink3 leading-[1.6] m-0">{item.note}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-[13px] text-muted leading-[1.65]">
                    This is educational information based on known pharmacological properties of these ingredients.
                    It is not a substitute for advice from your prescribing physician or pharmacist who has your
                    complete medical history.
                  </p>
                </section>

                {/* ── ALTERNATIVES ── */}
                <section id="alternatives" className="mb-12">
                  <h2 className="font-sans font-semibold text-[22px] sm:text-[26px] tracking-[-0.02em] text-ink2 mb-4 leading-[1.25]">
                    How it compares to alternatives
                  </h2>
                  <div className="overflow-x-auto border border-rule rounded-[14px]">
                    <table className="w-full text-[13px]" style={{ minWidth: '520px' }}>
                      <thead>
                        <tr className="bg-paper2 border-b border-rule">
                          <th className="text-left font-medium text-muted py-3 px-4">Product</th>
                          <th className="text-right font-medium text-muted py-3 px-4">Score</th>
                          <th className="text-right font-medium text-muted py-3 px-4">Price/kg</th>
                          <th className="text-right font-medium text-muted py-3 px-4">Protein type</th>
                          <th className="text-right font-medium text-muted py-3 px-4">Certified</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-rule">
                        <tr className="bg-clay/5">
                          <td className="py-3 px-4 font-semibold text-ink2">MuscleBlaze Biozyme ← this review</td>
                          <td className="py-3 px-4 text-right font-semibold text-clay">8.4</td>
                          <td className="py-3 px-4 text-right">₹2,899</td>
                          <td className="py-3 px-4 text-right text-muted">WPC-led</td>
                          <td className="py-3 px-4 text-right text-moss">Informed Sport</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-medium text-ink2">
                            <a href="/reviews/asitis-whey-protein" className="text-clay hover:underline">AS-IT-IS WPC80</a>
                          </td>
                          <td className="py-3 px-4 text-right font-semibold" style={{ color: '#1b4332' }}>8.8</td>
                          <td className="py-3 px-4 text-right">₹1,899</td>
                          <td className="py-3 px-4 text-right text-muted">WPC only · unflavored</td>
                          <td className="py-3 px-4 text-right text-muted">None</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-medium text-ink2">Nutrabay Gold WPC</td>
                          <td className="py-3 px-4 text-right font-semibold" style={{ color: '#1b4332' }}>8.0</td>
                          <td className="py-3 px-4 text-right">₹2,199</td>
                          <td className="py-3 px-4 text-right text-muted">WPC-led</td>
                          <td className="py-3 px-4 text-right text-muted">None</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-medium text-ink2">ON Gold Standard Whey</td>
                          <td className="py-3 px-4 text-right font-semibold" style={{ color: '#1b4332' }}>9.1</td>
                          <td className="py-3 px-4 text-right">₹5,200+</td>
                          <td className="py-3 px-4 text-right text-muted">WPI-led</td>
                          <td className="py-3 px-4 text-right text-moss">Informed Sport</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-[13px] text-muted mt-3 leading-[1.65]">
                    AS-IT-IS WPC80 scores higher on label honesty and value per gram, but is unflavored only.
                    If you want flavored protein with third-party testing in India under ₹3,000, Biozyme is the
                    strongest option on the market. ON Gold Standard is the better product in absolute terms —
                    WPI-led, more consistent international testing record — but costs nearly double.
                  </p>
                </section>

                {/* ── FAQ ── */}
                <section id="faq" className="mb-12">
                  <h2 className="font-sans font-semibold text-[22px] sm:text-[26px] tracking-[-0.02em] text-ink2 mb-6 leading-[1.25]">
                    Frequently asked questions
                  </h2>
                  <div className="space-y-0">
                    {[
                      {
                        q: 'Is MuscleBlaze Biozyme Whey good for beginners?',
                        a: 'Yes. The protein dose (25g per scoop), mixability, and price point make it well-suited for beginners. The DigeZyme® enzyme blend specifically helps those new to whey who sometimes experience bloating when starting supplementation.',
                      },
                      {
                        q: 'Is MuscleBlaze Biozyme lab tested?',
                        a: 'Yes — lot JJBWPFMM0271 was independently tested by Labdoor (Feb–Apr 2026) across Anresco and SGS laboratories. Results: 26.7g protein found vs 25g claimed (106.8% accuracy), free amino acids <0.01% (zero spiking), all four heavy metals undetected. Full PDF report is linked above in the lab results section.',
                      },
                      {
                        q: 'Does MuscleBlaze Biozyme cause bloating?',
                        a: 'Less than most whey concentrates. The DigeZyme® blend includes lactase, which breaks down lactose. Users with mild lactose sensitivity generally tolerate Biozyme better than standard WPC blends. Severe lactose intolerance — where any dairy protein causes distress — still warrants switching to an isolate.',
                      },
                      {
                        q: 'What is DigeZyme in MuscleBlaze Biozyme?',
                        a: 'DigeZyme® is a multi-enzyme complex manufactured by Sabinsa Corporation. It contains amylase, protease, lipase, cellulase, and lactase. The lactase is the clinically useful component — it breaks down residual lactose in the WPC blend. The dose is 50mg per serving, within the range used in Sabinsa\'s published research.',
                      },
                      {
                        q: 'How does MuscleBlaze Biozyme compare to Optimum Nutrition Gold Standard?',
                        a: 'Gold Standard uses a WPI-led blend with higher protein density and has a longer international testing record. It scores 9.1 vs Biozyme\'s 8.4 on our rubric. The difference is whether the price gap justifies the quality difference. For most Indian buyers who are not competitive athletes, Biozyme at half the price and with its own clean lot test record is the rational choice.',
                      },
                      {
                        q: 'Is MuscleBlaze Biozyme available in the USA or Canada?',
                        a: 'Not through standard retail channels. It can be ordered via Amazon.in with international shipping, or through Indian grocery importers in diaspora communities. Once international shipping is factored in, the price advantage disappears relative to US-market alternatives like ON Gold Standard.',
                      },
                    ].map((item, i) => (
                      <div key={i} className={`py-6 ${i < 5 ? 'border-b border-rule' : ''}`}>
                        <h3 className="font-sans font-semibold text-[15px] sm:text-[16px] tracking-[-0.01em] text-ink2 mb-2.5">
                          {item.q}
                        </h3>
                        <p className="text-[14px] leading-[1.75] text-ink3 m-0">{item.a}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ── VERDICT ── */}
                <section id="verdict" className="mb-8">
                  <h2 className="font-sans font-semibold text-[22px] sm:text-[26px] tracking-[-0.02em] text-ink2 mb-4 leading-[1.25]">
                    Final verdict
                  </h2>
                  <div className="p-6 border border-clay/30 bg-clay/5 rounded-[14px] mb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div>
                        <div className="font-serif-display leading-none" style={{ fontSize: '52px', color: '#1b4332', fontVariationSettings: '"opsz" 96' }}>8.4</div>
                        <div className="text-[12px] text-muted">/ 10</div>
                      </div>
                      <div>
                        <div className="font-semibold text-[16px] text-ink2 mb-1">MuscleBlaze Biozyme Performance Whey</div>
                        <div className="text-[13px] text-muted">Reviewed after 8 purchases, Feb–Apr 2026 Labdoor lot test</div>
                      </div>
                    </div>
                    <p className="text-[15px] leading-[1.8] text-ink3 mb-3">
                      I've used this product for nearly two years and bought it eight times. That's not a
                      testimonial — it's data. The consistency across lots is what earns the recommendation.
                      The label is honest. The Labdoor test confirms the protein content exceeds the claim.
                      There is no amino spiking. There are no heavy metals. The microbiology passes.
                    </p>
                    <p className="text-[15px] leading-[1.8] text-ink3 mb-3">
                      For the Indian market, this is the benchmark for flavored whey under ₹3,000/kg.
                      For international buyers, the cost advantage evaporates with shipping — and there
                      are better-tested options at comparable prices in the US and Canadian markets.
                    </p>
                    <p className="text-[15px] leading-[1.8] text-ink3">
                      The score of 8.4 reflects two honest limitations: the WPC-led blend (which matters if
                      you have lactose sensitivity), and the sweetener stack that some users find too intense.
                      If neither applies to you and you're buying in India, it's the default recommendation
                      until something better comes along at this price point.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a href="https://www.amazon.in/s?k=MuscleBlaze+Biozyme+Performance+Whey" target="_blank" rel="nofollow sponsored"
                       className="inline-flex items-center gap-2 rounded-full px-[22px] py-[13px] text-[14px] font-medium bg-clay text-white hover:bg-clayd transition-all duration-150">
                      Check price on Amazon India →
                    </a>
                    <a href="/compare/muscleblaze-vs-asitis-whey"
                       className="inline-flex items-center gap-2 rounded-full px-[22px] py-[13px] text-[14px] font-medium bg-paper3 text-ink2 border border-rule hover:border-clay transition-all duration-150">
                      Compare vs AS-IT-IS Whey →
                    </a>
                  </div>
                </section>

                {/* Disclaimer */}
                <div className="pt-6 border-t border-rule">
                  <p className="text-[12px] text-muted leading-[1.7]">
                    <strong className="font-medium text-ink3">Affiliate disclosure:</strong>{' '}
                    This review contains affiliate links. Purchases through them earn a small commission at no extra cost to you.
                    Commission rates do not affect our rubric scores or recommendations.
                    See our <a href="/conflicts-policy" className="text-clay hover:underline">conflicts policy</a>.
                    {' '}<strong className="font-medium text-ink3">Not medical advice.</strong>{' '}
                    The pharmacist notes in this review are educational. Consult a qualified healthcare professional
                    before starting any supplement if you have a medical condition or take prescription medication.
                  </p>
                </div>

              </div>{/* end main column */}

              {/* ── STICKY SIDEBAR ── */}
              <div className="hidden lg:block">
                <div className="sticky top-24 space-y-5">

                  {/* Score summary */}
                  <div className="bg-paper3 border border-rule rounded-[14px] p-5">
                    <div className="text-[11px] tracking-[0.14em] uppercase text-muted font-medium mb-3">Fitlab score</div>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="font-serif-display text-[40px] leading-none" style={{ color: '#1b4332', fontVariationSettings: '"opsz" 96' }}>8.4</span>
                      <span className="text-muted text-[13px]">/ 10</span>
                    </div>
                    <a href="https://www.amazon.in/s?k=MuscleBlaze+Biozyme+Performance+Whey"
                       target="_blank" rel="nofollow sponsored"
                       className="w-full flex items-center justify-center gap-2 rounded-full py-3 text-[13px] font-medium bg-clay text-white hover:bg-clayd transition-colors mb-2">
                      Buy on Amazon →
                    </a>
                    <div className="text-[10.5px] text-muted text-center">Affiliate link · price verified May 2026</div>
                  </div>

                  {/* Key data */}
                  <div className="bg-paper3 border border-rule rounded-[14px] p-5">
                    <div className="text-[11px] tracking-[0.14em] uppercase text-muted font-medium mb-3">Lab test at a glance</div>
                    <div className="space-y-2.5 text-[12.5px]">
                      <div className="flex justify-between">
                        <span className="text-muted">Protein accuracy</span>
                        <span className="font-semibold text-clay">106.8%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted">Amino spiking</span>
                        <span className="font-semibold text-moss">None</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted">Heavy metals</span>
                        <span className="font-semibold text-moss">All undetected</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted">Microbiology</span>
                        <span className="font-semibold text-moss">All pass</span>
                      </div>
                    </div>
                    <a href="https://cdn.labdoor.io/certification/images/jx36smg1gvayxfl5ca1ug.pdf"
                       target="_blank" rel="noopener"
                       className="mt-3 block text-[12px] text-clay text-center hover:underline">
                      View full lab report (PDF) →
                    </a>
                  </div>

                  {/* Navigation */}
                  <div className="bg-paper3 border border-rule rounded-[14px] p-5">
                    <div className="text-[11px] tracking-[0.14em] uppercase text-muted font-medium mb-3">In this review</div>
                    <div className="space-y-1">
                      {[
                        ['Lab test results', '#lab-test'],
                        ['Ingredient analysis', '#ingredients'],
                        ['Real-world use', '#real-world'],
                        ['Pharmacist notes', '#pharmacist'],
                        ['Vs alternatives', '#alternatives'],
                        ['FAQ', '#faq'],
                      ].map(([label, href]) => (
                        <a key={href} href={href}
                           className="block text-[12.5px] text-ink3 py-1 hover:text-clay transition-colors">
                          → {label}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Related links */}
                  <div className="bg-paper3 border border-rule rounded-[14px] p-5">
                    <div className="text-[11px] tracking-[0.14em] uppercase text-muted font-medium mb-3">Related</div>
                    <div className="space-y-1.5">
                      {[
                        ['Best protein in India', '/best/protein'],
                        ['AS-IT-IS Whey review', '/reviews/asitis-whey-protein'],
                        ['Biozyme vs AS-IT-IS', '/compare/muscleblaze-vs-asitis-whey'],
                        ['Whey protein guide', '/ingredients/whey-protein-isolate'],
                      ].map(([label, href]) => (
                        <a key={href} href={href}
                           className="block text-[12.5px] text-clay hover:underline py-0.5">
                          {label} →
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </article>

        {/* ── AUTHOR ── */}
        <section className="py-10 border-t border-rule border-b">
          <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
            <div className="max-w-[720px]">
              <div className="skirt mb-4">Reviewed by</div>
              <div className="flex items-start gap-4 bg-paper3 border border-rule rounded-[14px] p-5 sm:p-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white font-sans font-semibold text-[18px] shrink-0"
                     style={{ background: author.color }}>
                  {author.initials}
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-[16px] text-ink2">{author.name}</div>
                  <div className="text-[12px] text-muted mb-1">{author.role}</div>
                  <div className="text-[11px] tracking-[0.08em] uppercase font-medium mb-2" style={{ color: author.color }}>
                    {author.credentials}
                  </div>
                  <p className="text-[13px] text-muted leading-[1.65] mb-2">
                    Pankaj is the founder of Fitlab Reviews and a trained pharmacist. He has personally
                    purchased and used MuscleBlaze Biozyme across 8 orders from 2022–2024. This review is
                    based on sustained real-world use, a commissioned Labdoor lot test, and pharmaceutical
                    training in formulation analysis and drug-nutrient interactions.
                  </p>
                  {author.linkedin && (
                    <a href={author.linkedin} target="_blank" rel="noopener noreferrer"
                       className="text-[12px] text-clay hover:underline">
                      LinkedIn profile ↗
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
