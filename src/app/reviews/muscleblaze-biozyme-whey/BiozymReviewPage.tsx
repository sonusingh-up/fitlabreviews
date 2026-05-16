'use client'
import { useState } from 'react'
import PageShell from '@/components/PageShell'
import JsonLd from '@/components/JsonLd'
import { authors } from '@/lib/data'

const SITE_URL = 'https://fitlabreviews.com'

// ── JSON-LD ──────────────────────────────────────────────────────────────────

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'MuscleBlaze Biozyme Performance Whey',
  brand: { '@type': 'Brand', name: 'MuscleBlaze' },
  description: 'Whey protein concentrate blend with DigeZyme® digestive enzyme complex.',
  image: `${SITE_URL}/products/muscleblaze-biozyme-whey.webp`,
  offers: { '@type': 'Offer', priceCurrency: 'USD', price: '35', availability: 'https://schema.org/InStock', url: `${SITE_URL}/reviews/muscleblaze-biozyme-whey` },
  review: {
    '@type': 'Review',
    author: { '@type': 'Person', name: 'Pankaj Singh', jobTitle: 'Pharmacist (Pharm.B)', url: 'https://www.linkedin.com/in/pankaj-singh-77b93a368/' },
    datePublished: '2026-05-11', dateModified: '2026-05-11',
    name: 'MuscleBlaze Biozyme Performance Whey Review — 4 Years, 8 Purchases, Lab Tested',
    reviewBody: 'Reviewed across 8 purchases from September 2022 to April 2024. Labdoor lot test (Feb–Apr 2026) found 26.7g protein vs 25g claimed. Zero amino spiking, zero heavy metals.',
    reviewRating: { '@type': 'Rating', ratingValue: '8.4', bestRating: '10', worstRating: '0' },
    publisher: { '@type': 'Organization', name: 'Fitlab Reviews', url: SITE_URL },
  },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '8.4', bestRating: '10', worstRating: '0', ratingCount: '1', reviewCount: '1' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Reviews', item: `${SITE_URL}/reviews` },
    { '@type': 'ListItem', position: 3, name: 'Protein', item: `${SITE_URL}/best/protein` },
    { '@type': 'ListItem', position: 4, name: 'MuscleBlaze Biozyme', item: `${SITE_URL}/reviews/muscleblaze-biozyme-whey` },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is MuscleBlaze Biozyme Whey good for beginners?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The protein dose (25g per scoop), mixability, and price point make it well-suited for beginners. The DigeZyme® enzyme blend helps those new to whey who sometimes experience bloating.' } },
    { '@type': 'Question', name: 'Is MuscleBlaze Biozyme lab tested?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Lot JJBWPFMM0271 was independently tested by Labdoor (Feb–Apr 2026). Results: 26.7g protein found vs 25g claimed (106.8% accuracy), free amino acids <0.01% (no spiking), all four heavy metals undetected.' } },
    { '@type': 'Question', name: 'Does MuscleBlaze Biozyme cause bloating?', acceptedAnswer: { '@type': 'Answer', text: 'Less than most whey concentrates. The DigeZyme® blend includes lactase, which breaks down lactose. Users with mild lactose sensitivity generally tolerate Biozyme better than standard WPC blends.' } },
    { '@type': 'Question', name: 'What is DigeZyme in MuscleBlaze Biozyme?', acceptedAnswer: { '@type': 'Answer', text: 'DigeZyme® is a multi-enzyme complex manufactured by Sabinsa Corporation. It contains amylase, protease, lipase, cellulase, and lactase. The lactase is the clinically useful component — it breaks down residual lactose in the WPC blend.' } },
    { '@type': 'Question', name: 'How does MuscleBlaze Biozyme compare to Optimum Nutrition Gold Standard?', acceptedAnswer: { '@type': 'Answer', text: 'Gold Standard uses a WPI-led blend with higher protein density and Informed Sport certification. It scores 9.1 vs Biozyme\'s 8.4. For budget-focused buyers, Biozyme is the better value. For those prioritising certification, Gold Standard wins.' } },
  ],
}

// ── Sub-components ────────────────────────────────────────────────────────────

const ScoreBar = ({ label, value, max = 10 }: { label: string; value: number; max?: number }) => (
  <div className="flex items-center gap-2 sm:gap-3 py-3 border-b border-rule last:border-b-0">
    <span className="text-[11px] font-medium uppercase tracking-[0.08em] text-muted w-[100px] sm:w-[140px] shrink-0 leading-tight">{label}</span>
    <div className="flex-1 h-[5px] rounded-full overflow-hidden min-w-0" style={{ background: '#E8E1D2' }}>
      <div className="h-full rounded-full transition-all duration-700"
           style={{ width: `${(value / max) * 100}%`, background: 'linear-gradient(90deg,#1b4332,#52b788)' }} />
    </div>
    <span className="font-serif-body text-[18px] w-7 text-right shrink-0" style={{ color: '#1b4332' }}>{value}</span>
  </div>
)

// Accordion FAQ item (client component via useState in parent)
const FAQItem = ({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) => (
  <div className={`border border-rule rounded-[12px] overflow-hidden transition-all duration-200 ${isOpen ? 'bg-paper3' : 'bg-white hover:bg-paper3/60'}`}>
    <button
      onClick={onToggle}
      className="w-full flex items-start gap-4 px-5 py-4 text-left cursor-pointer"
    >
      <span
        className="shrink-0 w-5 h-5 rounded-full border flex items-center justify-center text-[13px] font-medium mt-0.5 transition-all duration-200"
        style={{
          borderColor: isOpen ? '#1b4332' : '#D3CCBE',
          color: isOpen ? '#1b4332' : '#7A736B',
          background: isOpen ? '#1b433210' : 'transparent',
        }}
      >
        {isOpen ? '−' : '+'}
      </span>
      <span className={`font-sans font-semibold text-[14px] sm:text-[15px] tracking-[-0.01em] leading-[1.4] transition-colors ${isOpen ? 'text-clay' : 'text-ink2'}`}>
        {q}
      </span>
    </button>
    {isOpen && (
      <div className="px-5 pb-5 pl-14">
        <p className="text-[14px] leading-[1.75] text-ink3 m-0">{a}</p>
      </div>
    )}
  </div>
)

export default function BiozymReviewPage() {
  const author = authors[0]
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqItems = [
    {
      q: 'Is MuscleBlaze Biozyme Whey good for beginners?',
      a: 'Yes. The protein dose (25g per scoop), mixability, and price point make it well-suited for beginners. The DigeZyme® enzyme blend specifically helps those new to whey who sometimes experience bloating when starting supplementation.',
    },
    {
      q: 'Is MuscleBlaze Biozyme lab tested?',
      a: 'Yes — lot JJBWPFMM0271 was independently tested by Labdoor (Feb–Apr 2026) across Anresco and SGS laboratories. Results: 26.7g protein found vs 25g claimed (106.8% accuracy), free amino acids <0.01% (zero spiking), all four heavy metals undetected. Full PDF report is linked in the lab results section above.',
    },
    {
      q: 'Does MuscleBlaze Biozyme cause bloating?',
      a: 'Less than most whey concentrates. The DigeZyme® blend includes lactase, which breaks down lactose. Users with mild lactose sensitivity generally tolerate Biozyme better than standard WPC blends. Severe lactose intolerance — where any dairy protein causes distress — still warrants switching to an isolate.',
    },
    {
      q: 'What is DigeZyme in MuscleBlaze Biozyme?',
      a: "DigeZyme® is a multi-enzyme complex manufactured by Sabinsa Corporation. It contains amylase, protease, lipase, cellulase, and lactase. The lactase is the clinically useful component — it breaks down residual lactose in the WPC blend. The dose is 50mg per serving, within the range used in Sabinsa's published research.",
    },
    {
      q: 'How does MuscleBlaze Biozyme compare to Optimum Nutrition Gold Standard?',
      a: "Gold Standard uses a WPI-led blend with higher protein density and has a longer international testing record. It scores 9.1 vs Biozyme's 8.4 on our rubric. For most buyers who are not competitive athletes, Biozyme at a lower price with its own clean lot test record is the rational choice. For those prioritising certification or with lactose sensitivity, Gold Standard wins.",
    },
    {
      q: 'What flavors are available and which is best?',
      a: 'MuscleBlaze Biozyme comes in Rich Milk Chocolate, Double Chocolate, Cappuccino, Cookies & Cream, and Unflavored. Rich Milk Chocolate is the most consistent across lots in my experience. Double Chocolate is noticeably sweeter — some users find it too intense in plain water. The Unflavored variant has no sweeteners but has a chalky texture in water; it works best mixed into oats or smoothies.',
    },
  ]

  const alternatives = [
    {
      name: 'MuscleBlaze Biozyme',
      brand: 'MuscleBlaze',
      score: 8.4,
      priceKg: '$35',
      type: 'WPC + WPI',
      cert: 'Informed Sport',
      certColor: '#1b4332',
      href: '#',
      isCurrent: true,
      verdict: 'Best flavored value with third-party testing',
      imgBg: '#EDF5F0',
    },
    {
      name: 'AS-IT-IS WPC80',
      brand: 'AS-IT-IS Nutrition',
      score: 8.8,
      priceKg: '$23',
      type: 'WPC only',
      cert: 'None',
      certColor: '#9C948A',
      href: '#',
      isCurrent: false,
      verdict: 'Best value per gram — unflavored only',
      imgBg: '#F4EFE3',
    },
    {
      name: 'Gold Standard Whey',
      brand: 'Optimum Nutrition',
      score: 9.1,
      priceKg: '$63+',
      type: 'WPI-led',
      cert: 'Informed Sport',
      certColor: '#1b4332',
      href: '#',
      isCurrent: false,
      verdict: 'Best absolute quality, highest price',
      imgBg: '#E8EFF5',
    },
    {
      name: 'ISO100 Hydrolyzed',
      brand: 'Dymatize',
      score: 9.0,
      priceKg: '$58',
      type: 'WPI + Hydrolyzed',
      cert: 'Informed Choice',
      certColor: '#2d6a4f',
      href: '#',
      isCurrent: false,
      verdict: 'Best for lactose intolerance',
      imgBg: '#EEF0F5',
    },
  ]

  const keyIngredients = [
    {
      name: 'Whey Protein Concentrate',
      role: 'Primary protein source',
      amount: 'Leads blend',
      rating: 'Good',
      ratingColor: '#2d6a4f',
      note: '~80% protein by weight. Contains residual lactose (0.5–1.5g per serving). Cheaper per gram than isolate — this is why the product hits $1/serving.',
      flag: null,
    },
    {
      name: 'Whey Protein Isolate',
      role: 'Secondary protein source',
      amount: 'Secondary',
      rating: 'Good',
      ratingColor: '#2d6a4f',
      note: '≥90% protein by weight, near-zero lactose. Listed second, so it\'s a smaller fraction. Adds label appeal more than meaningful isolate benefits.',
      flag: null,
    },
    {
      name: 'DigeZyme®',
      role: 'Enzyme blend',
      amount: '50mg',
      rating: 'Useful',
      ratingColor: '#1b4332',
      note: 'Multi-enzyme complex (amylase, protease, lipase, cellulase, lactase) by Sabinsa Corp. Lactase is the clinically useful component — breaks down residual WPC lactose. 50mg is within the studied dose range.',
      flag: 'Marketed more aggressively than evidence supports',
    },
    {
      name: 'Sucralose + Ace-K',
      role: 'Sweeteners',
      amount: 'Not disclosed',
      rating: 'Neutral',
      ratingColor: '#9C948A',
      note: 'Both within established ADI limits. Not a safety concern at typical serving sizes. Taste preference issue for some — the product is distinctly sweet in water.',
      flag: 'No stevia option in flavored variants',
    },
    {
      name: 'Soy Lecithin',
      role: 'Emulsifier',
      amount: 'Trace',
      rating: 'Neutral',
      ratingColor: '#9C948A',
      note: 'Standard emulsifier for mixability. Relevant if you have a soy allergy — it\'s a real ingredient, not a trace contaminant.',
      flag: 'Avoid if soy-allergic',
    },
  ]

  const realWorldObs = [
    {
      icon: '◎',
      label: 'Mixability',
      rating: 'Very Good',
      ratingColor: '#1b4332',
      detail: 'Mixes cleanly in 200–250ml water or milk with a standard shaker. Moderate foam that dissipates in ~30 seconds. Better in cold water than room temperature. No clumps across 19 months of use.',
    },
    {
      icon: '◗',
      label: 'Taste consistency',
      rating: 'Excellent',
      ratingColor: '#1b4332',
      detail: 'Rich Milk Chocolate was indistinguishable lot-to-lot across all 8 purchases. This matters — some brands reformulate quietly while the label stays the same. That didn\'t happen here.',
    },
    {
      icon: '⊕',
      label: 'Digestive tolerance',
      rating: 'Good',
      ratingColor: '#2d6a4f',
      detail: 'Minimal bloating at one-scoop dose. Zero GI distress across the entire period of use — post-workout in warm water, morning in oats, both fine. Can\'t report first-person on severe lactose sensitivity.',
    },
    {
      icon: '≋',
      label: 'Batch consistency',
      rating: 'Good',
      ratingColor: '#2d6a4f',
      detail: '2kg variant had slightly coarser powder texture than 1kg — possible batch variation. Otherwise consistent color, smell, and dissolution rate across all lots. No reformulations detected.',
    },
    {
      icon: '◈',
      label: 'Value retention',
      rating: 'Good',
      ratingColor: '#2d6a4f',
      detail: 'Price ranged from $29–$57 across 8 purchases. The 2kg format offers better per-gram value when available. Prices have been stable; no significant inflation observed over the 2022–2024 window.',
    },
    {
      icon: '◇',
      label: 'Recovery — objective',
      rating: 'As expected',
      ratingColor: '#7A736B',
      detail: 'Training-log performance during Biozyme use periods was indistinguishable from other protein sources at the same daily protein intake. Exactly what the research predicts — protein is protein when dose and quality are matched.',
    },
  ]

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
            <div className="grid gap-8 lg:gap-14 lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_360px] items-start">

              {/* Left */}
              <div className="min-w-0">
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
                    style={{ fontSize: 'clamp(24px, 3.8vw, 46px)' }}>
                  MuscleBlaze Biozyme<br />
                  Performance Whey Review
                </h1>
                <p className="font-serif-body text-[17px] sm:text-[20px] text-muted mb-5"
                   style={{ fontVariationSettings: '"opsz" 72' }}>
                  4 years. 8 purchases. One Labdoor test. Here's what we found.
                </p>

                <div className="p-4 bg-clay/8 border border-clay/25 rounded-[12px] mb-6">
                  <div className="text-[11px] tracking-[0.16em] uppercase text-clay font-medium mb-2">Bottom line</div>
                  <p className="text-[14px] leading-[1.65] text-ink3">
                    The most honest value-for-money whey at this price. Labdoor found
                    <strong className="text-ink2"> 26.7g protein vs 25g claimed</strong> — 106.8% accuracy,
                    zero amino spiking, zero heavy metals. The label tells the truth, which is rarer than it should be.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {['25g protein/scoop', 'WPC-led blend', 'DigeZyme® enzymes', 'Informed Sport certified', 'Lab tested 2026'].map(t => (
                    <span key={t} className="text-[11.5px] bg-paper border border-rule text-ink3 rounded-full px-3 py-1">{t}</span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 items-center">
                  <a href="https://www.amazon.com/s?k=MuscleBlaze+Biozyme+Performance+Whey" target="_blank" rel="nofollow sponsored"
                     className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-[13px] sm:text-[14px] font-medium bg-clay text-white hover:bg-clayd transition-all duration-150">
                    Check price on Amazon →
                  </a>
                  <span className="text-[11px] text-muted max-w-[180px] leading-[1.5]">
                    Affiliate link — commission doesn't change our score
                  </span>
                </div>
              </div>

              {/* Right — score card */}
              <div className="bg-paper3 border border-rule rounded-[14px] overflow-hidden w-full min-w-0">
                {/* Product image */}
                <div className="relative border-b border-rule flex items-center justify-center"
                     style={{ aspectRatio: '4/3', background: '#EDF5F0' }}>
                  <img
                    src="/products/muscleblaze-biozyme-whey.webp"
                    alt="MuscleBlaze Biozyme Performance Whey protein powder"
                    className="h-full object-contain"
                    style={{ maxHeight: '185px' }}
                    onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
                  />
                </div>

                <div className="p-4 sm:p-5">
                  <div className="text-center pb-4 mb-4 border-b border-rule">
                    <div className="text-[11px] tracking-[0.18em] uppercase text-muted mb-1">Fitlab Score</div>
                    <div className="font-serif-display leading-none" style={{ fontSize: '64px', color: '#1b4332', fontVariationSettings: '"opsz" 96' }}>8.4</div>
                    <div className="text-[13px] text-muted mt-1">out of 10</div>
                  </div>
                  <div className="mb-4">
                    <div className="text-[11px] tracking-[0.14em] uppercase text-muted font-medium mb-1">Rubric breakdown</div>
                    <ScoreBar label="Clinical dose"   value={8.8} />
                    <ScoreBar label="Ingredient form" value={8.2} />
                    <ScoreBar label="Lab purity"      value={9.0} />
                    <ScoreBar label="Value/gram"       value={9.4} />
                    <ScoreBar label="Label honesty"   value={8.6} />
                  </div>
                  <div className="space-y-2 text-[12px] sm:text-[13px] border-t border-rule pt-4">
                    {[
                      { label: 'Price (1kg)', val: '$35' },
                      { label: 'Per serving', val: '$1' },
                      { label: 'Protein/scoop', val: '25g → 26.7g found' },
                      { label: 'Calories', val: '125 kcal' },
                      { label: 'Amino spiking', val: 'None detected' },
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
        <section className="py-6 sm:py-8 border-b border-rule bg-paper2">
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
                   className="text-[12px] sm:text-[12.5px] text-clay border border-clay/30 rounded-full px-3 py-1.5 hover:bg-clay/8 transition-colors whitespace-nowrap">
                  {label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── MAIN CONTENT ── */}
        <article className="py-12 sm:py-16">
          <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_260px] xl:grid-cols-[1fr_280px] lg:gap-14 items-start">

              {/* Main column */}
              <div className="min-w-0 w-full">

                {/* ── BACKGROUND ── */}
                <section id="background" className="mb-14">
                  <h2 className="font-sans font-semibold text-[20px] sm:text-[24px] tracking-[-0.02em] text-ink2 mb-4 leading-[1.25]">
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
                    This review covers roughly 19 months of consistent use across multiple lot numbers, two size variants,
                    and a Labdoor independent laboratory test on lot JJBWPFMM0271 conducted between February and April 2026.
                  </p>
                  <p className="text-[15px] leading-[1.8] text-ink3 mb-6">
                    I'm a pharmacist (Pharm.B). I evaluate supplements the same way I evaluate drug formulations —
                    through the label claims, the ingredient forms, the manufacturing quality signals, and the
                    independent third-party data. This review uses that framework.
                  </p>

                  <div className="p-5 bg-paper3 border border-rule rounded-[14px]">
                    <div className="skirt mb-4">Purchase history — verified orders</div>
                    <div className="overflow-x-auto -mx-1">
                      <table className="w-full text-[12.5px] sm:text-[13px]" style={{ minWidth: '340px' }}>
                        <thead>
                          <tr className="border-b border-rule">
                            <th className="text-left text-muted font-medium py-2 pr-3 sm:pr-4">Delivered</th>
                            <th className="text-left text-muted font-medium py-2 pr-3 sm:pr-4">Variant</th>
                            <th className="text-right text-muted font-medium py-2">Price paid</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-rule">
                          {[
                            ['Sep 09, 2022', '1kg', '$31'],
                            ['Jan 20, 2023', '1kg', '$31'],
                            ['Feb 20, 2023', '1kg, Informed Sport', '$32'],
                            ['Mar 29, 2023', '1kg, Informed Sport', '$30'],
                            ['Apr 14, 2023', '1kg, Informed Sport', '$32'],
                            ['Sep 24, 2023', '2kg', '$54'],
                            ['Nov 30, 2023', '2kg', '$57'],
                            ['Apr 27, 2024', '1kg, Informed Sport', '$29'],
                          ].map(([date, variant, price]) => (
                            <tr key={date}>
                              <td className="py-2.5 pr-3 sm:pr-4 text-muted">{date}</td>
                              <td className="py-2.5 pr-3 sm:pr-4 text-ink2">{variant}</td>
                              <td className="py-2.5 text-right font-medium text-ink2">{price}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p className="text-[11.5px] text-muted mt-3">
                      Purchases verified via Amazon order history. Screenshots available on request.
                    </p>
                  </div>
                </section>

                {/* ── LAB TEST ── */}
                <section id="lab-test" className="mb-14">
                  <h2 className="font-sans font-semibold text-[20px] sm:text-[24px] tracking-[-0.02em] text-ink2 mb-4 leading-[1.25]">
                    Labdoor independent lab test — the actual numbers
                  </h2>
                  <p className="text-[15px] leading-[1.8] text-ink3 mb-5">
                    We submitted lot JJBWPFMM0271 (expiry 07/2027) to Labdoor for accuracy and purity analysis.
                    Testing was conducted between February and April 2026 across two accredited laboratories: Anresco and SGS.
                  </p>

                  <div className="border border-rule rounded-[14px] overflow-hidden mb-6">
                    <div className="px-5 py-4 bg-clay text-white">
                      <div className="flex items-start sm:items-center justify-between flex-wrap gap-2">
                        <div>
                          <div className="text-[11px] tracking-[0.16em] uppercase opacity-70 mb-1">Labdoor Test Results</div>
                          <div className="font-semibold text-[15px]">MuscleBlaze Biozyme Performance Whey</div>
                        </div>
                        <div className="text-left sm:text-right">
                          <div className="text-[11px] opacity-70">Lot JJBWPFMM0271</div>
                          <div className="font-medium text-[13px]">Feb–Apr 2026 · Anresco + SGS</div>
                        </div>
                      </div>
                    </div>

                    {/* Accuracy */}
                    <div className="px-5 py-4 border-b border-rule">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-2 h-2 rounded-full bg-moss inline-block" />
                        <span className="font-semibold text-[14px] text-ink2">Accuracy — PASS</span>
                      </div>
                      <div className="overflow-x-auto -mx-1">
                        <table className="w-full text-[12.5px] sm:text-[13px]" style={{ minWidth: '340px' }}>
                          <thead>
                            <tr className="border-b border-rule">
                              <th className="text-left text-muted font-medium py-2 pr-3">Substance</th>
                              <th className="text-right text-muted font-medium py-2 pr-3">Claimed</th>
                              <th className="text-right text-muted font-medium py-2 pr-3">Found</th>
                              <th className="text-right text-muted font-medium py-2">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-rule">
                              <td className="py-3 pr-3 font-medium text-ink2">Protein</td>
                              <td className="py-3 pr-3 text-right text-muted">25g</td>
                              <td className="py-3 pr-3 text-right font-semibold text-clay">26.7g</td>
                              <td className="py-3 text-right"><span className="text-moss font-medium">✓ Pass</span></td>
                            </tr>
                            <tr>
                              <td className="py-3 pr-3 font-medium text-ink2">Free Amino Acids</td>
                              <td className="py-3 pr-3 text-right text-muted">—</td>
                              <td className="py-3 pr-3 text-right font-semibold text-moss">&lt;0.01%</td>
                              <td className="py-3 text-right"><span className="text-moss font-medium">✓ Pass</span></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="mt-3 p-3 bg-clay/8 rounded-[8px]">
                        <p className="text-[12.5px] text-ink3 leading-[1.6]">
                          <strong className="text-ink2">What 26.7g means:</strong> At 106.8% of label claim, this is genuinely good.
                          The acceptable and desirable range is 100–115%. Free amino acids at &lt;0.01% confirms no amino spiking.
                        </p>
                      </div>
                    </div>

                    {/* Heavy metals */}
                    <div className="px-5 py-4 border-b border-rule">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-2 h-2 rounded-full bg-moss inline-block" />
                        <span className="font-semibold text-[14px] text-ink2">Heavy Metals — PASS</span>
                      </div>
                      <div className="overflow-x-auto -mx-1">
                        <table className="w-full text-[12.5px] sm:text-[13px]" style={{ minWidth: '320px' }}>
                          <thead>
                            <tr className="border-b border-rule">
                              <th className="text-left text-muted font-medium py-2 pr-3">Metal</th>
                              <th className="text-right text-muted font-medium py-2 pr-3">USP limit</th>
                              <th className="text-right text-muted font-medium py-2 pr-3">Found</th>
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
                                <td className="py-2.5 pr-3 font-medium text-ink2">{metal}</td>
                                <td className="py-2.5 pr-3 text-right text-muted">{limit}</td>
                                <td className="py-2.5 pr-3 text-right font-semibold text-moss">{found}</td>
                                <td className="py-2.5 text-right"><span className="text-moss font-medium">✓ Pass</span></td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Microbiology */}
                    <div className="px-5 py-4">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-2 h-2 rounded-full bg-moss inline-block" />
                        <span className="font-semibold text-[14px] text-ink2">Microbiology — PASS</span>
                      </div>
                      <div className="overflow-x-auto -mx-1">
                        <table className="w-full text-[12.5px] sm:text-[13px]" style={{ minWidth: '320px' }}>
                          <thead>
                            <tr className="border-b border-rule">
                              <th className="text-left text-muted font-medium py-2 pr-3">Test</th>
                              <th className="text-right text-muted font-medium py-2 pr-3">USP limit</th>
                              <th className="text-right text-muted font-medium py-2 pr-3">Found</th>
                              <th className="text-right text-muted font-medium py-2">Status</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-rule">
                            {[
                              ['Total Plate Count', '1,000 cfu/g', '900 cfu/g'],
                              ['Yeast / Mold', '100 cfu/g', '<10 cfu/g'],
                              ['Coliforms', '—', '<10 cfu/g'],
                              ['E. Coli', '—', '<10 cfu/g'],
                              ['Staph aureus', '—', '<10 cfu/g'],
                              ['Salmonella', '—', 'Undetected'],
                              ['Shigella', '—', 'Undetected'],
                            ].map(([test, limit, found]) => (
                              <tr key={test}>
                                <td className="py-2.5 pr-3 font-medium text-ink2">{test}</td>
                                <td className="py-2.5 pr-3 text-right text-muted">{limit}</td>
                                <td className="py-2.5 pr-3 text-right font-semibold text-moss">{found}</td>
                                <td className="py-2.5 text-right"><span className="text-moss font-medium">✓ Pass</span></td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="mt-4 pt-3 border-t border-rule flex flex-wrap items-center justify-between gap-3">
                        <p className="text-[11.5px] text-muted">Source: Labdoor · May 5, 2026 · Anresco + SGS</p>
                        <a href="https://cdn.labdoor.io/certification/images/jx36smg1gvayxfl5ca1ug.pdf"
                           target="_blank" rel="noopener noreferrer"
                           className="text-[12px] text-clay font-medium hover:underline whitespace-nowrap">
                          View full report (PDF) →
                        </a>
                      </div>
                    </div>
                  </div>

                  <p className="text-[15px] leading-[1.8] text-ink3">
                    Total plate count at 900/1,000 cfu/g — passes, but it's close. Not unusual for a whey concentrate
                    from a humid manufacturing environment. Not a safety concern at this level, but worth monitoring across future lots.
                  </p>
                </section>

                {/* ── INGREDIENTS ── */}
                <section id="ingredients" className="mb-14">
                  <h2 className="font-sans font-semibold text-[20px] sm:text-[24px] tracking-[-0.02em] text-ink2 mb-2 leading-[1.25]">
                    Full ingredient analysis
                  </h2>
                  <p className="text-[14px] text-muted mb-6">Per 36g scoop · label claims vs pharmacist assessment</p>

                  {/* Macro snapshot */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                    {[
                      { label: 'Protein', val: '25g', found: '26.7g found', color: '#1b4332' },
                      { label: 'Calories', val: '125 kcal', found: 'Appropriate', color: '#2d6a4f' },
                      { label: 'Carbs', val: '3.5g', found: '1.8g sugar', color: '#52b788' },
                      { label: 'Fat', val: '2.8g', found: 'Expected for WPC', color: '#74c69d' },
                    ].map(m => (
                      <div key={m.label} className="bg-paper3 border border-rule rounded-[12px] p-3 sm:p-4">
                        <div className="text-[10px] tracking-[0.14em] uppercase text-muted font-medium mb-1">{m.label}</div>
                        <div className="font-serif-body text-[22px] sm:text-[26px] leading-none mb-1" style={{ color: m.color }}>{m.val}</div>
                        <div className="text-[11px] text-muted leading-tight">{m.found}</div>
                      </div>
                    ))}
                  </div>

                  {/* Key ingredient breakdown */}
                  <div className="space-y-3 mb-8">
                    {keyIngredients.map((ing, i) => (
                      <div key={i} className="border border-rule rounded-[12px] overflow-hidden">
                        <div className="flex items-start justify-between gap-3 px-4 py-3 bg-paper3">
                          <div className="min-w-0">
                            <div className="font-semibold text-[14px] text-ink2 leading-tight">{ing.name}</div>
                            <div className="text-[11px] text-muted mt-0.5">{ing.role} · {ing.amount}</div>
                          </div>
                          <span
                            className="shrink-0 text-[11px] font-semibold tracking-[0.08em] uppercase rounded-full px-2.5 py-1"
                            style={{ background: `${ing.ratingColor}18`, color: ing.ratingColor }}
                          >
                            {ing.rating}
                          </span>
                        </div>
                        <div className="px-4 py-3">
                          <p className="text-[13.5px] leading-[1.65] text-ink3">{ing.note}</p>
                          {ing.flag && (
                            <div className="mt-2 flex items-start gap-2">
                              <span className="text-amber-600 shrink-0 text-[12px]">⚑</span>
                              <span className="text-[12px] text-amber-700">{ing.flag}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Protein blend detail */}
                  <div className="mb-6">
                    <h3 className="font-sans font-semibold text-[16px] sm:text-[17px] tracking-[-0.01em] text-ink2 mb-3">
                      The protein blend — what "WPC-led" actually means
                    </h3>
                    <p className="text-[15px] leading-[1.8] text-ink3 mb-3">
                      WPC contains more lactose than WPI — roughly 2–5% of its weight vs near-zero in isolate. At 25g
                      protein per scoop, total lactose is likely 0.5–1.5g per serving. For most people, irrelevant.
                      For clinically diagnosed lactose intolerance, it may cause discomfort — which is exactly why
                      DigeZyme® is included.
                    </p>
                    <p className="text-[15px] leading-[1.8] text-ink3">
                      WPC is also cheaper per gram than WPI. This cost efficiency is why Biozyme hits $1/serving —
                      you're getting workable protein density without paying the isolate premium most users don't need.
                    </p>
                  </div>

                  {/* Sweeteners callout */}
                  <div className="p-4 bg-paper2 border border-rule rounded-[12px]">
                    <div className="font-semibold text-[13px] text-ink2 mb-1">On the sweeteners</div>
                    <p className="text-[13.5px] leading-[1.65] text-ink3">
                      Sucralose + Ace-K in flavored variants. Both within ADI limits. Not a safety concern — but a taste
                      preference issue for some. The Rich Milk Chocolate is distinctly sweet in water; many users prefer
                      mixing with milk. No stevia option available in flavored variants.
                    </p>
                  </div>
                </section>

                {/* ── REAL WORLD ── */}
                <section id="real-world" className="mb-14">
                  <h2 className="font-sans font-semibold text-[20px] sm:text-[24px] tracking-[-0.02em] text-ink2 mb-2 leading-[1.25]">
                    Real-world use — what 8 purchases actually teaches you
                  </h2>
                  <p className="text-[14px] text-muted mb-6">
                    Observations across 19 months, multiple lots, 1kg and 2kg variants
                  </p>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {realWorldObs.map((obs, i) => (
                      <div key={i} className="bg-paper3 border border-rule rounded-[12px] p-4 sm:p-5">
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <div className="flex items-center gap-2.5">
                            <span className="font-serif-body text-[20px]" style={{ color: '#1b4332' }}>{obs.icon}</span>
                            <span className="font-semibold text-[14px] text-ink2">{obs.label}</span>
                          </div>
                          <span
                            className="shrink-0 text-[11px] font-semibold tracking-[0.06em] rounded-full px-2.5 py-1"
                            style={{ background: `${obs.ratingColor}15`, color: obs.ratingColor }}
                          >
                            {obs.rating}
                          </span>
                        </div>
                        <p className="text-[13px] leading-[1.65] text-ink3">{obs.detail}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ── PROS / CONS ── */}
                <section id="pros-cons" className="mb-14">
                  <h2 className="font-sans font-semibold text-[20px] sm:text-[24px] tracking-[-0.02em] text-ink2 mb-6 leading-[1.25]">
                    Pros and cons
                  </h2>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {/* Pros */}
                    <div className="bg-paper3 border border-clay/20 rounded-[14px] overflow-hidden">
                      <div className="px-5 py-3 border-b border-clay/15" style={{ background: '#1b433210' }}>
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full flex items-center justify-center text-white text-[11px] font-bold shrink-0" style={{ background: '#1b4332' }}>✓</span>
                          <span className="text-[11px] tracking-[0.16em] uppercase font-semibold text-clay">What holds up</span>
                        </div>
                      </div>
                      <ul className="p-5 space-y-3 list-none m-0">
                        {[
                          { text: '26.7g protein found vs 25g claimed — 106.8% accuracy', strong: true },
                          { text: 'Zero amino spiking — free amino acids <0.01%', strong: true },
                          { text: 'All four heavy metals undetected', strong: false },
                          { text: 'All microbiology tests pass', strong: false },
                          { text: 'DigeZyme® lactase component is genuinely useful for mild lactose sensitivity', strong: false },
                          { text: 'Informed Sport certified (from Feb 2023 batches onward)', strong: false },
                          { text: 'Consistent taste and texture across 19 months / 8 purchases', strong: false },
                          { text: 'Competitive price-per-gram for a tested product', strong: false },
                        ].map((pro, i) => (
                          <li key={i} className="flex gap-2.5 text-[13.5px] text-ink3 leading-[1.55]">
                            <span className="text-clay font-bold shrink-0 mt-0.5 text-[14px]">+</span>
                            {pro.strong ? <strong className="font-semibold text-ink2">{pro.text}</strong> : pro.text}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Cons */}
                    <div className="bg-paper3 border border-rule rounded-[14px] overflow-hidden">
                      <div className="px-5 py-3 border-b border-rule bg-paper2">
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full border border-muted flex items-center justify-center text-muted text-[11px] font-bold shrink-0">–</span>
                          <span className="text-[11px] tracking-[0.16em] uppercase font-semibold text-muted">What to know</span>
                        </div>
                      </div>
                      <ul className="p-5 space-y-3 list-none m-0">
                        {[
                          { text: 'WPC-led — avoid if clinically lactose intolerant', flag: true },
                          { text: 'Total Plate Count at 900/1,000 cfu/g — passes, but close', flag: false },
                          { text: 'Sucralose + Ace-K — no stevia option in most flavors', flag: false },
                          { text: 'Contains soy lecithin — relevant for soy allergy', flag: true },
                          { text: 'DigeZyme® is marketed more aggressively than evidence supports', flag: false },
                          { text: 'Limited availability outside Asia — international shipping erases price advantage', flag: true },
                          { text: 'No NSF Certified for Sport — Informed Sport only', flag: false },
                        ].map((con, i) => (
                          <li key={i} className="flex gap-2.5 text-[13.5px] text-ink3 leading-[1.55]">
                            <span className={`font-bold shrink-0 mt-0.5 text-[14px] ${con.flag ? 'text-amber-600' : 'text-muted'}`}>–</span>
                            {con.text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Summary strip */}
                  <div className="mt-4 p-4 bg-paper2 border border-rule rounded-[12px] flex flex-wrap items-center gap-4 sm:gap-8 text-[13px]">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-clay">8</span>
                      <span className="text-muted">reasons to buy</span>
                    </div>
                    <div className="w-px h-4 bg-rule hidden sm:block" />
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-muted">7</span>
                      <span className="text-muted">things to know first</span>
                    </div>
                    <div className="w-px h-4 bg-rule hidden sm:block" />
                    <div className="flex items-center gap-2">
                      <span className="font-serif-body text-[18px] text-clay">8.4</span>
                      <span className="text-muted">/ 10 overall score</span>
                    </div>
                  </div>
                </section>

                {/* ── WHO IT'S FOR ── */}
                <section id="who-for" className="mb-14">
                  <h2 className="font-sans font-semibold text-[20px] sm:text-[24px] tracking-[-0.02em] text-ink2 mb-5 leading-[1.25]">
                    Who should buy this — and who shouldn't
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="p-4 sm:p-5 bg-clay/8 border border-clay/25 rounded-[12px]">
                      <div className="text-[11px] tracking-[0.14em] uppercase text-clay font-medium mb-3">Good fit for</div>
                      <ul className="space-y-2.5 list-none p-0 m-0 text-[13.5px] text-ink3 leading-[1.6]">
                        {[
                          'Recreational gym users looking for honest value',
                          'People with mild lactose sensitivity (the DigeZyme® lactase helps)',
                          'Users who prioritise third-party testing over brand prestige',
                          'Students and budget-conscious buyers who can\'t afford isolates',
                          'Anyone cooking or baking with protein',
                        ].map((item, i) => (
                          <li key={i} className="flex gap-2"><span className="text-clay shrink-0">✓</span>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4 sm:p-5 bg-paper3 border border-rule rounded-[12px]">
                      <div className="text-[11px] tracking-[0.14em] uppercase text-muted font-medium mb-3">Not the right product for</div>
                      <ul className="space-y-2.5 list-none p-0 m-0 text-[13.5px] text-ink3 leading-[1.6]">
                        {[
                          'Clinically lactose intolerant users (consider Dymatize ISO100)',
                          'Competitive athletes needing NSF Certified for Sport',
                          'Buyers outside Asia where shipping kills the price advantage',
                          'Those avoiding soy completely (soy lecithin is in the formula)',
                          'Anyone needing a sweetener-free or stevia-only product',
                        ].map((item, i) => (
                          <li key={i} className="flex gap-2"><span className="text-muted shrink-0">–</span>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>

                {/* ── PHARMACIST NOTE ── */}
                <section id="pharmacist" className="mb-14">
                  <h2 className="font-sans font-semibold text-[20px] sm:text-[24px] tracking-[-0.02em] text-ink2 mb-4 leading-[1.25]">
                    Pharmacist's note — drug and health interactions
                  </h2>
                  <div className="p-4 border-l-2 border-clay bg-clay/5 rounded-r-[12px] mb-5">
                    <p className="text-[12.5px] text-muted">
                      <strong className="text-ink2">Written by Pankaj Singh, Pharm.B</strong> — pharmacological profile of this product's ingredients.
                    </p>
                  </div>
                  <p className="text-[15px] leading-[1.8] text-ink3 mb-5">
                    Whey protein at standard doses (20–40g/day) has no established safety concerns in healthy adults.
                    The kidney toxicity myth has been investigated — multiple long-term studies in healthy adults show
                    no adverse renal effects. The caveat: if you have pre-existing kidney disease, consult a nephrologist first.
                  </p>
                  <div className="space-y-3 mb-5">
                    {[
                      { condition: 'Phenylketonuria (PKU)', note: 'Whey contains phenylalanine. Sucralose in flavored variants also contains phenylalanine. Not appropriate if you have PKU.', level: 'High concern' },
                      { condition: 'Milk protein allergy', note: 'Distinct from lactose intolerance — this is an immune reaction to whey/casein proteins. Contraindicated. Plant-based protein is appropriate.', level: 'High concern' },
                      { condition: 'Thyroid medication (levothyroxine)', note: 'Calcium in whey can interfere with levothyroxine absorption. Separate by at least 4 hours. Timing issue, not a contraindication.', level: 'Timing concern' },
                      { condition: 'Tetracycline / quinolone antibiotics', note: 'Divalent cations in whey can chelate these antibiotics and reduce absorption. Separate by 2 hours from antibiotic dose.', level: 'Timing concern' },
                      { condition: 'Diabetes / blood glucose management', note: 'Whey stimulates insulin secretion. In type 2 diabetics, this can improve postprandial glucose control. In type 1, consider this effect when calculating bolus doses.', level: 'Be aware' },
                    ].map(item => (
                      <div key={item.condition} className="flex gap-3 sm:gap-4 p-4 bg-paper3 border border-rule rounded-[12px]">
                        <div className="shrink-0 mt-0.5">
                          <span className={`text-[10px] font-semibold tracking-[0.1em] uppercase rounded-full px-2 py-1 whitespace-nowrap ${
                            item.level === 'High concern' ? 'bg-red-100 text-red-700' :
                            item.level === 'Timing concern' ? 'bg-amber-100 text-amber-700' :
                            'bg-blue-100 text-blue-700'
                          }`}>
                            {item.level}
                          </span>
                        </div>
                        <div className="min-w-0">
                          <div className="font-semibold text-[13.5px] text-ink2 mb-1">{item.condition}</div>
                          <p className="text-[13px] text-ink3 leading-[1.6] m-0">{item.note}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-[13px] text-muted leading-[1.65]">
                    Educational information only. Not a substitute for advice from your prescribing physician.
                  </p>
                </section>

                {/* ── ALTERNATIVES ── */}
                <section id="alternatives" className="mb-14">
                  <h2 className="font-sans font-semibold text-[20px] sm:text-[24px] tracking-[-0.02em] text-ink2 mb-2 leading-[1.25]">
                    How it compares to alternatives
                  </h2>
                  <p className="text-[14px] text-muted mb-6">All scored on the same Fitlab rubric v3.1</p>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {alternatives.map((alt, i) => (
                      <a
                        key={i}
                        href={alt.href}
                        className={`block border rounded-[14px] overflow-hidden transition-all duration-150 hover:-translate-y-px hover:shadow-sm ${
                          alt.isCurrent
                            ? 'border-clay/40 ring-1 ring-clay/20'
                            : 'border-rule hover:border-clay/30'
                        }`}
                      >
                        {/* Image area */}
                        <div
                          className="relative flex items-center justify-center border-b border-rule"
                          style={{ height: '120px', background: alt.imgBg }}
                        >
                          {/* Product image placeholder */}
                          <div className="w-12 h-20 rounded-lg opacity-25"
                               style={{ background: 'linear-gradient(135deg,#9C948A,#1b433240)' }} />
                          {alt.isCurrent && (
                            <span className="absolute top-3 left-3 text-[10px] font-semibold tracking-[0.1em] uppercase rounded-full px-2.5 py-1 bg-clay text-white">
                              This review
                            </span>
                          )}
                          {/* Score badge */}
                          <span
                            className="absolute top-3 right-3 font-serif-body text-[20px] leading-none"
                            style={{ color: '#1b4332' }}
                          >
                            {alt.score}
                          </span>
                        </div>

                        {/* Info */}
                        <div className="p-4" style={{ background: alt.isCurrent ? '#1b433208' : '#FBF8F1' }}>
                          <div className="text-[10px] tracking-[0.12em] uppercase text-muted font-medium mb-0.5">{alt.brand}</div>
                          <div className="font-semibold text-[14px] text-ink2 mb-2 leading-tight">{alt.name}</div>

                          <div className="flex flex-wrap gap-x-4 gap-y-1 text-[12px] mb-3">
                            <span><span className="text-muted">Price/kg</span> <span className="font-medium text-ink2">{alt.priceKg}</span></span>
                            <span><span className="text-muted">Type</span> <span className="font-medium text-ink2">{alt.type}</span></span>
                          </div>

                          <div className="flex items-center justify-between gap-2">
                            <span
                              className="text-[11px] font-medium rounded-full px-2 py-0.5"
                              style={{ background: `${alt.certColor}15`, color: alt.certColor }}
                            >
                              {alt.cert}
                            </span>
                            <span className="text-[11px] text-muted leading-tight text-right max-w-[120px]">{alt.verdict}</span>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>

                  <div className="mt-4 p-4 bg-paper2 border border-rule rounded-[12px]">
                    <p className="text-[13px] text-ink3 leading-[1.65]">
                      <strong className="font-medium text-ink2">Bottom line:</strong> AS-IT-IS WPC80 scores higher on value
                      and label honesty, but is unflavored only. ON Gold Standard is the better absolute product but costs
                      nearly double. If you want flavored protein with lab-verified testing under $36, Biozyme is the
                      strongest option in this range.
                    </p>
                  </div>
                </section>

                {/* ── FAQ ── */}
                <section id="faq" className="mb-14">
                  <h2 className="font-sans font-semibold text-[20px] sm:text-[24px] tracking-[-0.02em] text-ink2 mb-2 leading-[1.25]">
                    Frequently asked questions
                  </h2>
                  <p className="text-[14px] text-muted mb-6">{faqItems.length} questions · click to expand</p>

                  <div className="space-y-2">
                    {faqItems.map((item, i) => (
                      <FAQItem
                        key={i}
                        q={item.q}
                        a={item.a}
                        isOpen={openFaq === i}
                        onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                      />
                    ))}
                  </div>
                </section>

                {/* ── VERDICT ── */}
                <section id="verdict" className="mb-8">
                  <h2 className="font-sans font-semibold text-[20px] sm:text-[24px] tracking-[-0.02em] text-ink2 mb-4 leading-[1.25]">
                    Final verdict
                  </h2>
                  <div className="p-5 sm:p-6 border border-clay/30 bg-clay/5 rounded-[14px] mb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div>
                        <div className="font-serif-display leading-none" style={{ fontSize: '48px', color: '#1b4332', fontVariationSettings: '"opsz" 96' }}>8.4</div>
                        <div className="text-[12px] text-muted">/ 10</div>
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold text-[15px] text-ink2 mb-1">MuscleBlaze Biozyme Performance Whey</div>
                        <div className="text-[12px] text-muted">8 purchases · Feb–Apr 2026 Labdoor lot test</div>
                      </div>
                    </div>
                    <p className="text-[15px] leading-[1.8] text-ink3 mb-3">
                      I've used this product for nearly two years and bought it eight times. That's not a
                      testimonial — it's data. The consistency across lots is what earns the recommendation.
                      The label is honest. The Labdoor test confirms the protein content exceeds the claim.
                      There is no amino spiking. There are no heavy metals. The microbiology passes.
                    </p>
                    <p className="text-[15px] leading-[1.8] text-ink3 mb-3">
                      The score of 8.4 reflects two honest limitations: the WPC-led blend (which matters if
                      you have lactose sensitivity), and the sweetener stack that some users find too intense.
                      If neither applies to you and you're in this price range, it's the default recommendation
                      until something better comes along.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a href="https://www.amazon.com/s?k=MuscleBlaze+Biozyme+Performance+Whey" target="_blank" rel="nofollow sponsored"
                       className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-[13px] sm:text-[14px] font-medium bg-clay text-white hover:bg-clayd transition-all duration-150">
                      Check price on Amazon →
                    </a>
                    <a href="/compare/muscleblaze-vs-asitis-whey"
                       className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-[13px] sm:text-[14px] font-medium bg-paper3 text-ink2 border border-rule hover:border-clay transition-all duration-150">
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
                <div className="sticky top-24 space-y-4">
                  <div className="bg-paper3 border border-rule rounded-[14px] p-5">
                    <div className="text-[11px] tracking-[0.14em] uppercase text-muted font-medium mb-3">Fitlab score</div>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="font-serif-display text-[38px] leading-none" style={{ color: '#1b4332', fontVariationSettings: '"opsz" 96' }}>8.4</span>
                      <span className="text-muted text-[13px]">/ 10</span>
                    </div>
                    <a href="https://www.amazon.com/s?k=MuscleBlaze+Biozyme+Performance+Whey"
                       target="_blank" rel="nofollow sponsored"
                       className="w-full flex items-center justify-center gap-2 rounded-full py-2.5 text-[13px] font-medium bg-clay text-white hover:bg-clayd transition-colors mb-2">
                      Buy on Amazon →
                    </a>
                    <div className="text-[10.5px] text-muted text-center">Affiliate · price verified May 2026</div>
                  </div>

                  <div className="bg-paper3 border border-rule rounded-[14px] p-5">
                    <div className="text-[11px] tracking-[0.14em] uppercase text-muted font-medium mb-3">Lab test</div>
                    <div className="space-y-2 text-[12px]">
                      {[
                        { label: 'Protein accuracy', val: '106.8%', color: '#1b4332' },
                        { label: 'Amino spiking', val: 'None', color: '#2d6a4f' },
                        { label: 'Heavy metals', val: 'All clear', color: '#2d6a4f' },
                        { label: 'Microbiology', val: 'All pass', color: '#2d6a4f' },
                      ].map(r => (
                        <div key={r.label} className="flex justify-between">
                          <span className="text-muted">{r.label}</span>
                          <span className="font-semibold" style={{ color: r.color }}>{r.val}</span>
                        </div>
                      ))}
                    </div>
                    <a href="https://cdn.labdoor.io/certification/images/jx36smg1gvayxfl5ca1ug.pdf"
                       target="_blank" rel="noopener"
                       className="mt-3 block text-[12px] text-clay text-center hover:underline">
                      View lab report (PDF) →
                    </a>
                  </div>

                  <div className="bg-paper3 border border-rule rounded-[14px] p-5">
                    <div className="text-[11px] tracking-[0.14em] uppercase text-muted font-medium mb-3">Sections</div>
                    <div className="space-y-1">
                      {[
                        ['Lab test results', '#lab-test'],
                        ['Ingredient analysis', '#ingredients'],
                        ['Real-world use', '#real-world'],
                        ['Pros & cons', '#pros-cons'],
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

                  <div className="bg-paper3 border border-rule rounded-[14px] p-5">
                    <div className="text-[11px] tracking-[0.14em] uppercase text-muted font-medium mb-3">Related</div>
                    <div className="space-y-1.5">
                      {[
                        ['Best protein', '/best/protein'],
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
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white font-sans font-semibold text-[16px] sm:text-[18px] shrink-0"
                     style={{ background: author.color }}>
                  {author.initials}
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-[15px] sm:text-[16px] text-ink2">{author.name}</div>
                  <div className="text-[12px] text-muted mb-1">{author.role}</div>
                  <div className="text-[11px] tracking-[0.08em] uppercase font-medium mb-2" style={{ color: author.color }}>
                    {author.credentials}
                  </div>
                  <p className="text-[13px] text-muted leading-[1.65] mb-2">
                    Pankaj is the founder of Fitlab Reviews and a trained pharmacist. He personally
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
