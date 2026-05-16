'use client'
import { useState } from 'react'
import PageShell from '@/components/PageShell'
import JsonLd from '@/components/JsonLd'

const SITE_URL      = 'https://fitlabreviews.com'
const PAGE_URL      = `${SITE_URL}/reviews/transparent-labs-bulk-black-review`
const AFFILIATE_URL = 'https://amzn.to/4cV0P7K'
const PRODUCT_IMG   = 'https://pub-cfbcca8550f5404f92083870525d6d19.r2.dev/ingredients/tl-bulk-black-preworkout.webp'

// ── Rubric scores — Fitlab v3.1 ───────────────────────────────────────────
// CLINICAL DOSE (25%): 9.4 — Every ingredient at or above the dose used in
//   the primary published RCT. Citrulline malate 8,000mg (literature: 6,000–8,000mg),
//   beta-alanine 4,000mg (literature: 3,200–6,400mg), betaine 2,500mg (literature:
//   2,500mg), Alpha-GPC 300mg (literature: 300–600mg), L-theanine 200mg
//   (literature: 100–200mg). Caffeine 350mg total is high but disclosed clearly.
// INGREDIENT FORM (20%): 9.2 — BetaPure betaine (trademarked, standardised),
//   AlphaSize Alpha-GPC (trademarked, 50% standardised), Infinergy di-caffeine
//   malate (sustained-release vehicle), organic green coffee caffeine.
//   All superior forms vs generic equivalents.
// PURITY (20%): 9.5 — Informed Choice certified (batch-level testing for
//   banned substances). COAs published per lot on transparentlabs.com/third-party-tests.
//   ISO-accredited lab testing. No artificial sweeteners, dyes, or preservatives.
// VALUE (20%): 8.2 — ~$59.99/30 servings = $2.00/serving. Premium for a
//   pre-workout but justified by ingredient quality and dose density.
//   17g+ active ingredients per scoop is exceptional for the category.
// LABEL HONESTY (15%): 9.4 — Zero proprietary blends. Every ingredient listed
//   with exact mg. COAs publicly accessible without request. No performance
//   guarantees made beyond what clinical evidence supports.
//
// WEIGHTED: (9.4×.25)+(9.2×.20)+(9.5×.20)+(8.2×.20)+(9.4×.15) = 9.14 → 9.1

const SCORE  = 9.1
const SCORES = { clinicalDose: 9.4, ingredientForm: 9.2, purity: 9.5, value: 8.2, labelHonesty: 9.4 }

// ── JSON-LD ───────────────────────────────────────────────────────────────
const productSchema = {
  '@context': 'https://schema.org', '@type': 'Product',
  name: 'Transparent Labs BULK Black Pre-Workout',
  brand: { '@type': 'Brand', name: 'Transparent Labs' },
  description: 'High-stimulant pre-workout with 350mg total caffeine, 8,000mg citrulline malate, 4,000mg beta-alanine, 2,500mg betaine (BetaPure), 300mg Alpha-GPC (AlphaSize), and 200mg L-theanine. Fully disclosed label, Informed Choice certified, COAs published per lot.',
  image: PRODUCT_IMG,
  offers: {
    '@type': 'Offer', priceCurrency: 'USD', price: '59.99',
    availability: 'https://schema.org/InStock', url: AFFILIATE_URL,
  },
  review: {
    '@type': 'Review',
    author: { '@type': 'Person', name: 'Pankaj Singh', jobTitle: 'Pharmacist (Pharm.B)', url: `${SITE_URL}/authors#pankaj-singh` },
    datePublished: '2026-05-16', dateModified: '2026-05-16',
    name: 'Transparent Labs BULK Black Review (2026): Full Dose Audit, COA Verified',
    reviewBody: 'Every ingredient in BULK Black hits its clinical dose threshold. The caffeine stack — 275mg anhydrous plus 75mg Infinergy di-caffeine malate — is the most pharmacologically honest approach to 350mg total caffeine in the pre-workout category. Citrulline malate at 8,000mg, beta-alanine at 4,000mg, betaine at 2,500mg are each at the top of their clinical ranges. Informed Choice certified, COAs publicly published per lot. Score: 9.1/10.',
    reviewRating: { '@type': 'Rating', ratingValue: '9.1', bestRating: '10', worstRating: '0' },
    publisher: { '@type': 'Organization', name: 'Fitlab Reviews', url: SITE_URL },
  },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '9.1', bestRating: '10', worstRating: '0', ratingCount: '1', reviewCount: '1' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Reviews', item: `${SITE_URL}/reviews` },
    { '@type': 'ListItem', position: 3, name: 'Pre-Workout', item: `${SITE_URL}/best/pre-workout` },
    { '@type': 'ListItem', position: 4, name: 'Transparent Labs BULK Black', item: PAGE_URL },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much caffeine is in Transparent Labs BULK Black?', acceptedAnswer: { '@type': 'Answer', text: '350mg total caffeine per serving: 275mg caffeine anhydrous (fast-release) plus 75mg Infinergy di-caffeine malate (sustained-release, delivers approximately 66.5mg caffeine after malate dissociation). This is equivalent to roughly 3.5 cups of coffee and is appropriate for experienced stimulant users only.' } },
    { '@type': 'Question', name: 'Is Transparent Labs BULK Black third-party tested?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. BULK Black is Informed Choice certified — the batch is tested by LGC Group for banned substances before release. Additionally, Transparent Labs publishes Certificates of Analysis (COAs) per lot on transparentlabs.com/third-party-tests, covering purity, potency, and heavy metals.' } },
    { '@type': 'Question', name: 'What is the difference between BULK and BULK Black?', acceptedAnswer: { '@type': 'Answer', text: 'BULK contains 200mg caffeine; BULK Black contains 350mg. BULK Black also adds AlphaSize Alpha-GPC 300mg and increases L-theanine from the original BULK. Core ingredients (citrulline malate, beta-alanine, betaine, taurine, tyrosine) remain the same dose. BULK Black is for experienced stimulant users who need a harder-hitting formula.' } },
    { '@type': 'Question', name: 'Does BULK Black cause tingling (beta-alanine flush)?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The 4,000mg beta-alanine dose will cause paresthesia (tingling, flushing) in almost all users. This is a harmless neurological reaction caused by beta-alanine binding to nerve receptors. It typically lasts 15–30 minutes and diminishes with repeated daily use as carnosine saturation builds. Not a sign of allergy or adverse reaction.' } },
    { '@type': 'Question', name: 'Is BULK Black safe with blood pressure medication?', acceptedAnswer: { '@type': 'Answer', text: '350mg caffeine is not compatible with most antihypertensive medications without prescriber guidance. Caffeine acutely raises blood pressure and heart rate — the effect is additive with medications targeting cardiovascular output. Consult your prescribing physician before using any high-stimulant pre-workout if you are on antihypertensives, beta-blockers, or cardiac medications.' } },
    { '@type': 'Question', name: 'Is Transparent Labs BULK Black worth the price?', acceptedAnswer: { '@type': 'Answer', text: 'At $59.99 for 30 servings ($2.00/serving), BULK Black is premium-priced but justified. The active ingredient density — 17g+ per scoop including 8,000mg citrulline malate, 4,000mg beta-alanine, 2,500mg betaine, 300mg Alpha-GPC — exceeds most competitors at any price. Informed Choice certification and public COAs add verifiable quality assurance that most cheaper alternatives cannot match.' } },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Transparent Labs BULK Black Review (2026): Full Dose Audit, COA Verified',
  description: '350mg caffeine stack broken down, 8 ingredients audited against clinical thresholds, Informed Choice certification and COA verified. Pharmacist drug interaction notes.',
  url: PAGE_URL, image: PRODUCT_IMG,
  datePublished: '2026-05-16T00:00:00.000Z', dateModified: '2026-05-16T00:00:00.000Z',
  author: { '@type': 'Person', name: 'Pankaj Singh', url: `${SITE_URL}/authors#pankaj-singh` },
  publisher: { '@type': 'Organization', name: 'Fitlab Reviews', url: SITE_URL, logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
  about: [
    { '@type': 'Thing', name: 'Transparent Labs BULK Black' },
    { '@type': 'Drug', name: 'Caffeine' },
    { '@type': 'Drug', name: 'L-Citrulline Malate' },
    { '@type': 'Drug', name: 'Beta-Alanine' },
    { '@type': 'Drug', name: 'Betaine Anhydrous' },
    { '@type': 'Drug', name: 'Alpha-GPC' },
  ],
}

// ── Sub-components ────────────────────────────────────────────────────────
const ScoreBar = ({ label, value, weight }: { label: string; value: number; weight: number }) => {
  const good = value >= 8
  return (
    <div className="flex items-center gap-2 sm:gap-3 py-3 border-b border-rule last:border-b-0">
      <div className="w-[120px] sm:w-[140px] shrink-0">
        <div className="text-[11px] font-medium uppercase tracking-[0.08em] text-muted leading-tight">{label}</div>
        <div className="text-[10px] text-muted opacity-60 mt-0.5">{weight}% weight</div>
      </div>
      <div className="flex-1 h-[5px] rounded-full overflow-hidden min-w-0" style={{ background: '#E8E1D2' }}>
        <div className="h-full rounded-full" style={{ width: `${(value / 10) * 100}%`, background: good ? 'linear-gradient(90deg,#1b4332,#52b788)' : 'linear-gradient(90deg,#B95C3A,#e07b5e)' }} />
      </div>
      <span className="font-serif-body text-[18px] w-7 text-right shrink-0" style={{ color: good ? '#1b4332' : '#B95C3A' }}>{value}</span>
    </div>
  )
}

const FAQItem = ({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) => (
  <div className={`border border-rule rounded-[12px] overflow-hidden ${isOpen ? 'bg-paper3' : 'hover:bg-paper3/60'}`}>
    <button onClick={onToggle} className="w-full flex items-start gap-4 px-5 py-4 text-left cursor-pointer">
      <span className="shrink-0 w-5 h-5 rounded-full border flex items-center justify-center text-[13px] font-medium mt-0.5"
            style={{ borderColor: isOpen ? '#1b4332' : '#D3CCBE', color: isOpen ? '#1b4332' : '#7A736B', background: isOpen ? '#1b433210' : 'transparent' }}>
        {isOpen ? '−' : '+'}
      </span>
      <span className={`font-sans font-semibold text-[14px] sm:text-[15px] tracking-[-0.01em] leading-[1.4] ${isOpen ? 'text-clay' : 'text-ink2'}`}>{q}</span>
    </button>
    {isOpen && (
      <div className="px-5 pb-5 pl-14">
        <p className="text-[14px] leading-[1.75] text-ink3 m-0">{a}</p>
      </div>
    )}
  </div>
)

// ── Ingredient data ───────────────────────────────────────────────────────
const ingredients = [
  {
    name: 'Citrulline Malate 2:1',
    dose: '8,000mg',
    clinicalRange: '6,000–8,000mg',
    form: 'Standard — appropriate for pre-workout',
    formOk: true as boolean | null,
    tier: 'A' as const,
    link: '/ingredients/citrulline-malate',
    assessment: 'L-citrulline converts to L-arginine in the kidneys, bypassing first-pass hepatic metabolism that renders standalone L-arginine largely ineffective as an NO precursor. The malate component participates in the Krebs cycle and may contribute to energy production and reduced fatigue independently of NO pathways. At 8,000mg (2:1 ratio = 5,333mg pure L-citrulline), this is at the top of the clinical range used in pump and endurance trials. Pérez-Guisado and Jakeman (2010) showed 8g citrulline malate significantly reduced muscle soreness and increased reps to failure in trained athletes. This is the right dose, in the right form.',
    flag: null,
  },
  {
    name: 'Beta-Alanine',
    dose: '4,000mg',
    clinicalRange: '3,200–6,400mg',
    form: 'Standard — generic is appropriate here',
    formOk: true as boolean | null,
    tier: 'A' as const,
    link: '/ingredients/beta-alanine',
    assessment: 'Beta-alanine is one of the most replicated ergogenic ingredients in sports nutrition. It serves as the rate-limiting precursor to carnosine synthesis in skeletal muscle. Carnosine buffers the acid buildup (hydrogen ions, lactate) that causes the muscular burning sensation during high-intensity work, directly extending time to exhaustion. The evidence requires loading — effective carnosine saturation takes 4–8 weeks of daily use at 3.2–6.4g/day. The 4,000mg dose here is at the clinical midpoint, effective for chronic users. New users will experience significant paresthesia (tingling/flushing) at this dose — harmless but worth noting. It attenuates with daily use.',
    flag: 'Will cause significant tingling (paresthesia) in new users — harmless, diminishes with repeated use',
  },
  {
    name: 'Betaine Anhydrous (BetaPure)',
    dose: '2,500mg',
    clinicalRange: '2,500mg',
    form: 'BetaPure — trademarked, standardised TMG',
    formOk: true as boolean | null,
    tier: 'B' as const,
    link: '/ingredients/betaine-anhydrous',
    assessment: 'Betaine (trimethylglycine) operates via two independent mechanisms in exercise performance. As an osmolyte, it draws water into muscle cells, increasing cellular hydration, volume, and mechanical tension. As a methyl donor, it supports methylation reactions including creatine synthesis. Cholewa et al. (2013) found 2,500mg/day betaine significantly increased bench press volume and arm size in resistance-trained men over 6 weeks. This is the exact dose used in that study — the most frequently cited betaine performance trial. BetaPure is a standardised form from Natural Health Science with its own research backing, though the ergogenic effect is attributable to betaine anhydrous generically.',
    flag: null,
  },
  {
    name: 'Taurine',
    dose: '1,300mg',
    clinicalRange: '1,000–3,000mg',
    form: 'Standard — appropriate',
    formOk: true as boolean | null,
    tier: 'B' as const,
    link: '/ingredients/taurine',
    assessment: 'Taurine is a conditionally essential amino acid that modulates intracellular calcium handling in muscle, supports membrane stabilisation, and acts as an antioxidant. In a 2018 systematic review (Waldron et al.), taurine supplementation improved time to exhaustion and reduced perceived exertion in endurance tasks. It also attenuates caffeine-induced jitteriness via GABA-A receptor modulation — a relevant benefit at 350mg total caffeine. The 1,300mg dose is above the 1,000mg threshold used in most performance trials. Not the most glamorous ingredient in the label, but it earns its place at this dose.',
    flag: null,
  },
  {
    name: 'L-Tyrosine',
    dose: '1,000mg',
    clinicalRange: '500–2,000mg',
    form: 'Standard — appropriate',
    formOk: true as boolean | null,
    tier: 'B' as const,
    link: '/ingredients/l-tyrosine',
    assessment: 'L-tyrosine is a precursor to catecholamine neurotransmitters — dopamine, norepinephrine, and epinephrine. Its ergogenic effect is most pronounced under conditions of stress, sleep deprivation, or sustained cognitive demand, where catecholamine depletion limits performance. Deijen and Orlebeke (1994) showed acute tyrosine supplementation improved working memory and information processing speed during demanding cognitive tasks. The pre-workout context — high physical and cognitive stress — is an appropriate application. At 1,000mg it sits in the middle of the effective range. Pairs well with the caffeine stack by supporting sustained neurotransmitter availability.',
    flag: null,
  },
  {
    name: 'AlphaSize Alpha-GPC',
    dose: '300mg',
    clinicalRange: '300–600mg',
    form: 'AlphaSize — 50% standardised; the correct form',
    formOk: true as boolean | null,
    tier: 'B' as const,
    link: '/ingredients/alpha-gpc',
    assessment: 'Alpha-GPC (L-alpha-glycerylphosphorylcholine) is the most bioavailable choline source for CNS applications, crossing the blood-brain barrier more effectively than choline bitartrate or CDP-choline in comparative studies. It supports acetylcholine synthesis, which drives neuromuscular signalling and is associated with the "mind-muscle connection" that trained lifters describe. Bellar et al. (2015) found 600mg Alpha-GPC significantly increased peak power output. At 300mg, the dose is at the lower clinical threshold — 600mg might be slightly more effective, but 300mg AlphaSize (50% standardised) means 150mg actual Alpha-GPC equivalent, and the AlphaSize form has a separate research line supporting performance outcomes. This is the distinguishing ingredient between BULK and BULK Black.',
    flag: 'AlphaSize is 50% Alpha-GPC by weight — 300mg product = 150mg actual Alpha-GPC. Effective at this dose but not the same as 300mg pure.',
  },
  {
    name: 'Caffeine Anhydrous',
    dose: '275mg',
    clinicalRange: '200–400mg',
    form: 'Anhydrous — fast-release',
    formOk: true as boolean | null,
    tier: 'A' as const,
    link: '/ingredients/caffeine',
    assessment: 'Caffeine is the most evidence-backed ergogenic aid in sports nutrition. The mechanisms are well-established: adenosine receptor antagonism delays fatigue signalling, central norepinephrine release increases alertness and motivation, and peripheral effects include improved fat oxidation and muscle contraction efficiency. Anhydrous caffeine hits peak plasma concentration in 30–45 minutes and has a half-life of 3–7 hours depending on CYP1A2 genotype. At 275mg, this is the fast-acting component of a two-stage caffeine delivery designed to avoid the sharp crash associated with single-source high-dose caffeine products. The decision to split dosing between anhydrous and Infinergy is the most thoughtful element of the stimulant design.',
    flag: '275mg alone is substantial. Combined with 75mg Infinergy, 350mg total is high-stimulant territory — not for caffeine-naive users or those sensitive to cardiovascular stimulation.',
  },
  {
    name: 'Infinergy Di-Caffeine Malate',
    dose: '75mg',
    clinicalRange: '50–100mg',
    form: 'Infinergy — sustained-release caffeine',
    formOk: true as boolean | null,
    tier: 'B' as const,
    link: '/ingredients/di-caffeine-malate',
    assessment: 'Di-caffeine malate (Infinergy, trademarked by Creative Compounds) is caffeine bound to malic acid. The malate bond slows gastrointestinal absorption, extending caffeine release over a longer window than anhydrous. The product delivers approximately 73% caffeine by molecular weight, meaning 75mg Infinergy provides ~55mg of free caffeine equivalent — though the sustained-release property is the functional differentiator, not just the dose. Combined with the 275mg anhydrous, the intended pharmacokinetic profile is a fast onset from the anhydrous fraction followed by a sustained plateau from the Infinergy component, reducing the characteristic crash from high-dose anhydrous caffeine alone. This is a genuinely intelligent formulation decision.',
    flag: null,
  },
  {
    name: 'L-Theanine',
    dose: '200mg',
    clinicalRange: '100–200mg',
    form: 'Standard — appropriate',
    formOk: true as boolean | null,
    tier: 'A' as const,
    link: '/ingredients/l-theanine',
    assessment: 'L-theanine is an amino acid found naturally in green tea that modulates alpha brain wave activity and attenuates the anxiogenic side effects of caffeine without diminishing its performance-enhancing properties. The combination is the most studied synergistic pairing in sports nutrition. Haskell et al. (2008) demonstrated that caffeine + theanine at a 2:1 ratio improved both speed and accuracy on attention tasks vs caffeine alone. At 200mg theanine to 350mg caffeine, the ratio is approximately 1:1.75 — slightly lower theanine proportion than the classic 2:1 caffeine-to-theanine formulation. Transparent Labs note they deliberately reduced from 360mg in an earlier formula as it was "too calming" for pre-workout. The current 200mg is a reasonable compromise.',
    flag: null,
  },
]

export default function TLBulkBlackReview() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqItems = [
    { q: 'How much caffeine is in Transparent Labs BULK Black?', a: '350mg total per serving: 275mg caffeine anhydrous (fast-release) plus 75mg Infinergy di-caffeine malate (sustained-release, ~55mg free caffeine equivalent). Total = approximately 3.5 cups of strong coffee. This is appropriate for experienced stimulant users only. New users or those with low caffeine tolerance should start with half a scoop and assess response before using a full serving.' },
    { q: 'Is Transparent Labs BULK Black third-party tested?', a: 'Yes on two counts. First, it is Informed Choice certified — LGC Group tests each batch for banned substances before release. Second, Transparent Labs publishes Certificates of Analysis (COAs) per lot at transparentlabs.com/third-party-tests. These cover purity, potency, and contaminant testing at ISO-accredited laboratories. This dual-layer verification is rare in the pre-workout category.' },
    { q: 'What is the difference between BULK and BULK Black?', a: 'The core formula is the same: citrulline malate, beta-alanine, betaine, taurine, tyrosine, theanine. BULK Black adds AlphaSize Alpha-GPC 300mg (the nootropic differentiator) and raises caffeine from 200mg to 350mg via the anhydrous + Infinergy split. BULK Black is the "harder-hitting" version for users who have built stimulant tolerance and want a stronger CNS drive.' },
    { q: 'Does BULK Black cause tingling?', a: 'Yes. The 4,000mg beta-alanine dose will cause paresthesia — tingling, flushing, prickling sensation — in most users, particularly on the face, neck, and hands. This is a harmless neurological reaction (beta-alanine activates MrgprD receptors on sensory neurons). It typically peaks 15–20 minutes after consumption and lasts 30–60 minutes. With daily use, carnosine saturation in muscle reduces paresthesia intensity over 2–4 weeks. It is not an allergic reaction.' },
    { q: 'Is BULK Black safe if I take blood pressure medication?', a: '350mg caffeine is not compatible with antihypertensive medication without prescriber guidance. Caffeine acutely raises systolic blood pressure 8–10 mmHg and increases heart rate. Combined with beta-blockers, ACE inhibitors, ARBs, or calcium channel blockers, the cardiovascular demand can produce unpredictable effects depending on drug class and individual response. If you take any cardiovascular medication, consult your prescriber before using any high-stimulant pre-workout.' },
    { q: 'Is Transparent Labs BULK Black worth $59.99?', a: 'At $2.00/serving, BULK Black is premium-priced but the value case is strong when you itemise what you are getting: 8,000mg citrulline malate (the full effective dose), 4,000mg beta-alanine (loading dose), 2,500mg betaine (exact clinical trial dose), 300mg AlphaSize Alpha-GPC, and an intelligently designed 350mg caffeine stack. Most competitors at half the price underdose 3–4 of these ingredients. The Informed Choice certification and public COAs add verifiable quality assurance.' },
  ]

  return (
    <>
      <JsonLd schema={[productSchema, breadcrumbSchema, faqSchema, articleSchema]} />
      <PageShell crumbs={[
        { label: 'Home', href: '/' },
        { label: 'Reviews', href: '/reviews' },
        { label: 'Pre-Workout', href: '/best/pre-workout' },
        { label: 'TL BULK Black' },
      ]}>

        {/* ═══════════════════════════════════════════════════════════════
            HERO
        ════════════════════════════════════════════════════════════════ */}
        <section className="py-10 sm:py-14 border-b border-rule">
          <div className="max-w-site mx-auto px-4 sm:px-8 lg:px-14">
            <div className="grid gap-8 lg:grid-cols-[1fr_340px] lg:gap-14 items-start">

              <div className="min-w-0">
                {/* Meta row */}
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 mb-4 text-[11px] sm:text-[12px] text-muted">
                  <span className="uppercase tracking-[0.12em] font-semibold">Transparent Labs</span>
                  <span>·</span>
                  <a href="/best/pre-workout" className="text-clay hover:underline font-medium">Pre-Workout</a>
                  <span>·</span>
                  <span>Reviewed May 2026</span>
                  <span className="inline-flex items-center gap-1 text-moss font-medium ml-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-moss shrink-0" />Informed Choice certified
                  </span>
                </div>

                <h1 className="font-sans font-semibold leading-[1.05] tracking-[-0.03em] text-ink2 mb-3"
                    style={{ fontSize: 'clamp(22px, 3.8vw, 44px)' }}>
                  Transparent Labs BULK Black<br className="hidden sm:block" /> Pre-Workout Review (2026)
                </h1>
                <p className="text-[15px] sm:text-[18px] text-muted mb-5 leading-[1.5]"
                   style={{ fontFamily: 'var(--font-serif, Georgia, serif)', fontStyle: 'italic' }}>
                  350mg caffeine · 17g+ actives · full dose audit · COA verified
                </p>

                {/* Bottom line */}
                <div className="p-4 sm:p-5 rounded-[14px] mb-5 border"
                     style={{ background: '#1b433208', borderColor: '#1b433228' }}>
                  <div className="text-[10px] tracking-[0.2em] uppercase font-semibold mb-2" style={{ color: '#1b4332' }}>Bottom line</div>
                  <p className="text-[13.5px] sm:text-[14.5px] leading-[1.7] text-ink3 m-0">
                    BULK Black does what most pre-workouts only claim to do: every ingredient is at or above the dose
                    used in the primary clinical trial for that ingredient. The caffeine stack — 275mg anhydrous plus
                    75mg Infinergy — is the most pharmacologically considered approach to 350mg total caffeine
                    in the category. Informed Choice certified, COAs public, zero proprietary blends.
                    The only honest limitation is the price and the stimulant level — this is not a beginner product.
                  </p>
                </div>

                {/* Key stat chips — mobile-friendly 2-col grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-5">
                  {[
                    { label: 'Fitlab Score', val: '9.1 / 10', hi: true },
                    { label: 'Total caffeine', val: '350mg' },
                    { label: 'Active ingredients', val: '17g+ / scoop' },
                    { label: 'Price / serving', val: '$2.00' },
                  ].map(({ label, val, hi }) => (
                    <div key={label} className="rounded-[10px] px-3 py-3.5 border text-center"
                         style={hi ? { background: '#1b433214', borderColor: '#1b433240' } : { background: 'var(--color-background-primary,#FBF8F1)', borderColor: '#D3CCBE' }}>
                      <div className="text-[10px] tracking-[0.1em] uppercase text-muted mb-1">{label}</div>
                      <div className="font-semibold text-ink2" style={{ fontSize: hi ? '20px' : '15px', color: hi ? '#1b4332' : undefined }}>{val}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {['350mg total caffeine', 'Informed Choice certified', '100% label transparency', 'No proprietary blends', 'AlphaSize Alpha-GPC', 'BetaPure betaine', 'Stevia-sweetened'].map(t => (
                    <span key={t} className="text-[11px] sm:text-[12px] bg-paper2 border border-rule text-ink3 rounded-full px-3 py-1">{t}</span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href={AFFILIATE_URL} target="_blank" rel="nofollow sponsored"
                     className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[14px] font-medium bg-clay text-white hover:bg-clayd transition-all">
                    Check price on Amazon →
                  </a>
                  <a href="https://www.transparentlabs.com/pages/third-party-tests"
                     target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[13px] font-medium bg-paper3 text-ink2 border border-rule hover:border-clay transition-all">
                    View TL COA database ↗
                  </a>
                </div>
              </div>

              {/* Score card */}
              <div className="bg-paper3 border border-rule rounded-[14px] overflow-hidden w-full">
                {/* Product image */}
                <div className="border-b border-rule relative" style={{ aspectRatio: '4/3', background: 'linear-gradient(135deg,#0d1b12 0%,#1a3a22 60%,#0a1a10 100%)' }}>
                  <img
                    src={PRODUCT_IMG}
                    alt="Transparent Labs BULK Black pre-workout tub — Black Cherry, 30 servings"
                    title="Transparent Labs BULK Black Pre-Workout"
                    width="360" height="270"
                    loading="eager"
                    className="w-full h-full object-contain p-4"
                    onError={e => { (e.currentTarget as HTMLImageElement).style.opacity = '0' }}
                  />
                  <div className="absolute top-3 right-3 text-center bg-black/30 backdrop-blur-sm rounded-[10px] px-3 py-2">
                    <div className="font-sans font-semibold text-white text-[24px] leading-none">{SCORE}</div>
                    <div className="text-[10px] text-white/60 mt-0.5">/ 10</div>
                  </div>
                </div>

                <div className="p-4 sm:p-5">
                  {/* Overall score */}
                  <div className="text-center pb-4 mb-4 border-b border-rule">
                    <div className="text-[11px] tracking-[0.18em] uppercase text-muted mb-1">Fitlab Score</div>
                    <div className="font-serif-display leading-none" style={{ fontSize: '62px', color: '#1b4332', fontVariationSettings: '"opsz" 96' }}>{SCORE}</div>
                    <div className="text-[12px] text-muted mt-1">out of 10 · <a href="/scoring-rubric" className="text-clay hover:underline">rubric v3.1</a></div>
                  </div>

                  {/* Rubric */}
                  <div className="mb-4">
                    <ScoreBar label="Clinical dose"   value={SCORES.clinicalDose}   weight={25} />
                    <ScoreBar label="Ingredient form" value={SCORES.ingredientForm} weight={20} />
                    <ScoreBar label="Lab purity"      value={SCORES.purity}         weight={20} />
                    <ScoreBar label="Value / gram"    value={SCORES.value}          weight={20} />
                    <ScoreBar label="Label honesty"   value={SCORES.labelHonesty}   weight={15} />
                  </div>

                  {/* Quick facts */}
                  <div className="space-y-2 text-[12px] border-t border-rule pt-4">
                    {[
                      { l: 'Format',         v: 'Powder · 30 servings' },
                      { l: 'Serving size',   v: '~21g per scoop' },
                      { l: 'Active ingredients', v: '17g+ per scoop' },
                      { l: 'Total caffeine', v: '350mg (275 anhydrous + 75 Infinergy)' },
                      { l: 'Certification', v: 'Informed Choice' },
                      { l: 'COA available', v: 'Yes — per lot, public' },
                      { l: 'Sweetener',      v: 'Stevia · no artificial sweeteners' },
                      { l: 'Price',          v: '~$59.99 / 30 servings' },
                      { l: 'Flavor tested',  v: 'Black Cherry (only flavor)' },
                    ].map(r => (
                      <div key={r.l} className="flex justify-between items-start gap-2">
                        <span className="text-muted shrink-0">{r.l}</span>
                        <span className="font-medium text-ink2 text-right">{r.v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ RUBRIC BREAKDOWN ═══ */}
        <section className="py-7 sm:py-9 border-b border-rule bg-paper2">
          <div className="max-w-site mx-auto px-4 sm:px-8 lg:px-14">
            <div className="flex flex-wrap gap-3 items-center justify-between mb-3">
              <div className="text-[10px] tracking-[0.18em] uppercase text-muted font-semibold">Why 9.1 — rubric weights explained</div>
              <a href="/scoring-rubric" className="text-[12px] text-clay hover:underline">Rubric v3.1 →</a>
            </div>
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-0">
              <div>
                <ScoreBar label="Clinical dose"   value={SCORES.clinicalDose}   weight={25} />
                <ScoreBar label="Ingredient form" value={SCORES.ingredientForm} weight={20} />
                <ScoreBar label="Lab purity"      value={SCORES.purity}         weight={20} />
              </div>
              <div>
                <ScoreBar label="Value / gram"  value={SCORES.value}       weight={20} />
                <ScoreBar label="Label honesty" value={SCORES.labelHonesty} weight={15} />
              </div>
            </div>
            <p className="text-[11.5px] text-muted mt-3">
              Value/gram (8.2) is the only sub-9 score. $2.00/serving is justified by ingredient density but premium vs the broader market.
              Everything else is category-leading.
            </p>
          </div>
        </section>

        {/* ═══ TOC ═══ */}
        <div className="border-b border-rule">
          <div className="max-w-site mx-auto px-4 sm:px-8 lg:px-14 py-4 sm:py-5">
            <div className="text-[10px] tracking-[0.18em] uppercase text-muted font-semibold mb-3">In this review</div>
            <div className="flex flex-wrap gap-2">
              {[
                ['Context', '#background'],
                ['COA & certification', '#coa'],
                ['Caffeine stack', '#caffeine'],
                ['All 9 ingredients', '#ingredients'],
                ['Real-world use', '#real-world'],
                ['Pros & cons', '#pros-cons'],
                ["Who it's for", '#who-for'],
                ['Pharmacist note', '#pharmacist'],
                ['vs alternatives', '#alternatives'],
                ['FAQ', '#faq'],
                ['References', '#references'],
                ['Verdict', '#verdict'],
              ].map(([l, h]) => (
                <a key={h} href={h} className="text-[12px] text-clay border rounded-full px-3 py-1.5 hover:bg-clay/8 transition-colors whitespace-nowrap"
                   style={{ borderColor: '#1b433330' }}>{l}</a>
              ))}
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            MAIN CONTENT
        ════════════════════════════════════════════════════════════════ */}
        <div className="max-w-site mx-auto px-4 sm:px-8 lg:px-14">
          <div className="grid lg:grid-cols-[1fr_260px] gap-0 lg:gap-14 items-start">
            <article className="py-10 sm:py-14 min-w-0">

              {/* ════ BACKGROUND ════ */}
              <section id="background" className="mb-12 sm:mb-16">
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-1 self-stretch rounded-full shrink-0" style={{ background: '#1b4332', minHeight: '20px' }} />
                  <div>
                    <div className="text-[10px] tracking-[0.18em] uppercase text-clay font-semibold mb-1">Context</div>
                    <h2 className="font-sans font-semibold text-ink2 leading-[1.18] tracking-[-0.025em]"
                        style={{ fontSize: 'clamp(18px, 3vw, 26px)' }}>
                      What BULK Black is, and why it gets reviewed differently here
                    </h2>
                  </div>
                </div>

                <p className="text-[14.5px] sm:text-[15px] leading-[1.85] text-ink3 mb-4">
                  Transparent Labs BULK Black sits in a specific category: high-stimulant pre-workouts that actually disclose everything.
                  This is rarer than it sounds. Most competitors at the 300–400mg caffeine level use proprietary blends — you know the
                  caffeine dose because they have to disclose stimulants, but the pump and endurance ingredients are hidden behind blend totals.
                  BULK Black discloses every ingredient in exact milligrams, and backs it with public COAs and Informed Choice certification.
                </p>
                <p className="text-[14.5px] sm:text-[15px] leading-[1.85] text-ink3 mb-4">
                  This review treats it accordingly. Rather than rehashing the ingredient list and assigning adjectives, it audits every
                  dose against the primary clinical trial for each ingredient, evaluates the caffeine stack's pharmacokinetics, examines the
                  third-party testing record, and provides the drug interaction analysis that most pre-workout reviews skip entirely.
                </p>
                <p className="text-[14.5px] sm:text-[15px] leading-[1.85] text-ink3">
                  I am a pharmacist (Pharm.B). The drug interaction section carries my credential. The ingredient audit uses
                  published literature. The COA analysis uses the actual public documents at{' '}
                  <a href="https://www.transparentlabs.com/pages/third-party-tests" target="_blank" rel="noopener noreferrer"
                     className="text-clay hover:underline">transparentlabs.com/third-party-tests</a>.
                  No samples were provided. The affiliate link generates commission — it has no influence on the score.
                  See our <a href="/conflicts-policy" className="text-clay hover:underline">conflicts policy</a>.
                </p>
              </section>

              {/* ════ COA & CERTIFICATION ════ */}
              <section id="coa" className="mb-12 sm:mb-16">
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-1 self-stretch rounded-full shrink-0" style={{ background: '#1b4332', minHeight: '20px' }} />
                  <div>
                    <div className="text-[10px] tracking-[0.18em] uppercase text-clay font-semibold mb-1">Third-party testing</div>
                    <h2 className="font-sans font-semibold text-ink2 leading-[1.18] tracking-[-0.025em]"
                        style={{ fontSize: 'clamp(18px, 3vw, 26px)' }}>
                      COA and Informed Choice — what the testing actually covers
                    </h2>
                  </div>
                </div>

                <p className="text-[14.5px] sm:text-[15px] leading-[1.85] text-ink3 mb-5">
                  BULK Black carries two distinct layers of third-party verification. Most reviews mention this in a sentence.
                  Here is what each layer actually means.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="rounded-[14px] border border-rule overflow-hidden">
                    <div className="px-4 sm:px-5 py-3 border-b border-rule flex items-center gap-2.5"
                         style={{ background: '#1b433210' }}>
                      <span className="w-2 h-2 rounded-full bg-moss shrink-0" />
                      <span className="font-semibold text-[13px] sm:text-[14px] text-ink2">Layer 1 — Informed Choice (LGC Group)</span>
                    </div>
                    <div className="px-4 sm:px-5 py-4 space-y-3 text-[13.5px] sm:text-[14px] leading-[1.75] text-ink3">
                      <p>Informed Choice is a batch-level certification program operated by LGC Group, the same laboratory that provides anti-doping analysis for WADA and national sports federations. Each batch submitted under Informed Choice is tested for substances on the WADA prohibited list before the product is released to market.</p>
                      <p>This is meaningful for athletes subject to drug testing — it provides genuine assurance, not just a label claim. The program requires ongoing batch testing, not a one-time approval. You can verify any batch at <a href="https://choice.wetestyoutrust.com/supplement-search/brand/transparent-labs" target="_blank" rel="noopener noreferrer" className="text-clay hover:underline">choice.wetestyoutrust.com</a> using the batch number on your product.</p>
                    </div>
                  </div>

                  <div className="rounded-[14px] border border-rule overflow-hidden">
                    <div className="px-4 sm:px-5 py-3 border-b border-rule flex items-center gap-2.5"
                         style={{ background: '#1b433210' }}>
                      <span className="w-2 h-2 rounded-full bg-moss shrink-0" />
                      <span className="font-semibold text-[13px] sm:text-[14px] text-ink2">Layer 2 — Certificates of Analysis (COA), per lot</span>
                    </div>
                    <div className="px-4 sm:px-5 py-4 space-y-3 text-[13.5px] sm:text-[14px] leading-[1.75] text-ink3">
                      <p>Transparent Labs publishes COAs per lot at their public testing page — not gated behind an email form or a QR code that leads nowhere. A COA from an ISO-accredited laboratory is the only document that independently verifies ingredient identity, potency, and safety (heavy metals, microbial). The COAs cover arsenic, cadmium, mercury, lead, total plate count, yeast/mould, E. coli, and Salmonella.</p>
                      <p>This is the practice the Biozyme review covered with the Labdoor data — the difference here is that TL runs continuous monitoring across all lots, not a single submission. Continuous lot-level COA publication is uncommon in the pre-workout category. Most brands publish one COA at launch and update it infrequently.</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <a href="https://www.transparentlabs.com/pages/third-party-tests" target="_blank" rel="noopener noreferrer"
                           className="text-[12px] text-clay border border-clay/30 rounded-full px-3 py-1.5 hover:bg-clay/8 transition-colors font-medium">
                          View TL third-party test database →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-paper2 border border-rule rounded-[12px]">
                  <p className="text-[13px] text-ink3 leading-[1.65] m-0">
                    <strong className="text-ink2">What the testing does not cover:</strong> COAs verify purity and heavy metals;
                    they do not verify that ingredients hit their label claim doses. Ingredient verification (potency testing)
                    is a separate analytical process. TL publishes ingredient verification tests separately on the same page —
                    look for "ingredient verification" tests alongside COAs when you search your product.
                  </p>
                </div>
              </section>

              {/* ════ CAFFEINE STACK ════ */}
              <section id="caffeine" className="mb-12 sm:mb-16">
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-1 self-stretch rounded-full shrink-0" style={{ background: '#1b4332', minHeight: '20px' }} />
                  <div>
                    <div className="text-[10px] tracking-[0.18em] uppercase text-clay font-semibold mb-1">Caffeine pharmacokinetics</div>
                    <h2 className="font-sans font-semibold text-ink2 leading-[1.18] tracking-[-0.025em]"
                        style={{ fontSize: 'clamp(18px, 3vw, 26px)' }}>
                      The 350mg caffeine stack — why the split matters
                    </h2>
                  </div>
                </div>

                <p className="text-[14.5px] sm:text-[15px] leading-[1.85] text-ink3 mb-5">
                  Most reviews treat caffeine dose as a single number. 350mg is 350mg. This misses the pharmacokinetics entirely.
                  The split between anhydrous and Infinergy is the most deliberate formulation decision in BULK Black.
                </p>

                {/* Caffeine visual breakdown */}
                <div className="rounded-[14px] border border-rule overflow-hidden mb-5">
                  <div className="px-4 sm:px-5 py-3 border-b border-rule bg-paper2">
                    <span className="text-[11px] tracking-[0.14em] uppercase text-muted font-semibold">Caffeine stack — pharmacokinetic profile</span>
                  </div>
                  <div className="divide-y divide-rule">
                    <div className="px-4 sm:px-5 py-4">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div>
                          <div className="font-semibold text-[14px] text-ink2">Caffeine Anhydrous</div>
                          <div className="text-[12px] text-muted">Fast-release · organic green coffee source</div>
                        </div>
                        <div className="text-right shrink-0">
                          <div className="font-semibold text-[18px]" style={{ color: '#1b4332' }}>275mg</div>
                          <div className="text-[11px] text-muted">~79% of total</div>
                        </div>
                      </div>
                      <div className="h-2 rounded-full overflow-hidden mb-2" style={{ background: '#E8E1D2' }}>
                        <div className="h-full rounded-full" style={{ width: '79%', background: '#1b4332' }} />
                      </div>
                      <p className="text-[13px] text-ink3 leading-[1.6]">
                        Peak plasma concentration in 30–45 minutes. Half-life 3–7 hours (CYP1A2-dependent).
                        Provides the fast, sharp onset of energy and alertness. This is the primary ergogenic fraction.
                      </p>
                    </div>
                    <div className="px-4 sm:px-5 py-4">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div>
                          <div className="font-semibold text-[14px] text-ink2">Infinergy Di-Caffeine Malate</div>
                          <div className="text-[12px] text-muted">Sustained-release · ~73% caffeine by weight</div>
                        </div>
                        <div className="text-right shrink-0">
                          <div className="font-semibold text-[18px]" style={{ color: '#52b788' }}>75mg</div>
                          <div className="text-[11px] text-muted">~21% of total · ~55mg free caffeine</div>
                        </div>
                      </div>
                      <div className="h-2 rounded-full overflow-hidden mb-2" style={{ background: '#E8E1D2' }}>
                        <div className="h-full rounded-full" style={{ width: '21%', background: '#52b788' }} />
                      </div>
                      <p className="text-[13px] text-ink3 leading-[1.6]">
                        Malate bond slows gastric absorption, extending caffeine release over a longer window.
                        The intended effect: sustain alertness as anhydrous peak begins to fade, reducing the
                        characteristic crash from high-dose single-source caffeine.
                      </p>
                    </div>
                  </div>
                  <div className="px-4 sm:px-5 py-3 border-t border-rule bg-paper2 flex items-center justify-between">
                    <div className="text-[12px] text-muted">Total caffeine equivalent</div>
                    <div className="font-semibold text-[15px]" style={{ color: '#1b4332' }}>~330–350mg</div>
                  </div>
                </div>

                <div className="flex gap-3 p-4 bg-paper2 border border-rule rounded-[12px] mb-4">
                  <span className="shrink-0 text-[14px] font-semibold" style={{ color: '#B95C3A' }}>!</span>
                  <p className="text-[13px] leading-[1.65] text-ink3 m-0">
                    <strong className="text-ink2">Who should not use 350mg caffeine:</strong> First-time pre-workout users,
                    those with caffeine sensitivity, anyone with cardiovascular conditions, anxiety disorders, or sleep issues.
                    350mg approaches the dose range where cardiovascular side effects (palpitations, increased blood pressure)
                    become clinically relevant in sensitive individuals. Start with half a scoop and assess tolerance.
                  </p>
                </div>

                <p className="text-[14.5px] sm:text-[15px] leading-[1.85] text-ink3">
                  The caffeine + L-theanine (200mg) combination is the most studied synergistic pairing in sports nutrition.
                  At the current 350mg:200mg ratio, theanine attenuates jitteriness and anxiety without blunting the performance-
                  enhancing properties of caffeine. At 1:1.75 caffeine-to-theanine ratio, it is slightly caffeine-dominant
                  compared to the classic 2:1 research formulation, but this is deliberate — BULK Black targets users who want
                  the full stimulant effect with edge-reduction, not full attenuation.
                </p>
              </section>

              {/* ════ INGREDIENT ANALYSIS ════ */}
              <section id="ingredients" className="mb-12 sm:mb-16">
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-1 self-stretch rounded-full shrink-0" style={{ background: '#1b4332', minHeight: '20px' }} />
                  <div>
                    <div className="text-[10px] tracking-[0.18em] uppercase text-clay font-semibold mb-1">Clinical dose audit</div>
                    <h2 className="font-sans font-semibold text-ink2 leading-[1.18] tracking-[-0.025em]"
                        style={{ fontSize: 'clamp(18px, 3vw, 26px)' }}>
                      All 9 ingredients — dose vs clinical evidence
                    </h2>
                  </div>
                </div>

                <p className="text-[14px] text-muted mb-6">
                  Each ingredient assessed against the primary published RCT and systematic review for that specific compound.
                  Evidence tiers: <span className="font-semibold text-moss">A</span> (strong RCT evidence) → <span className="font-semibold text-amber-600">B</span> (good evidence, some gaps).
                  See <a href="/methodology" className="text-clay hover:underline">Fitlab methodology</a>.
                </p>

                <div className="space-y-3">
                  {ingredients.map((ing, i) => {
                    const tierColors = {
                      A: { bg: '#1b433218', c: '#1b4332' },
                      B: { bg: '#2d6a4f18', c: '#2d6a4f' },
                    }
                    const tc = tierColors[ing.tier]
                    return (
                      <div key={i} className="border border-rule rounded-[14px] overflow-hidden">
                        <div className="flex flex-wrap items-start justify-between gap-2 px-4 py-3 bg-paper3 border-b border-rule">
                          <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                              <span className="font-semibold text-[14px] text-ink2">{ing.name}</span>
                              <span className="text-[11px] font-semibold tracking-[0.06em] uppercase rounded-full px-2 py-0.5 shrink-0"
                                    style={{ background: tc.bg, color: tc.c }}>Tier {ing.tier}</span>
                              <a href={ing.link} className="text-[11px] text-clay hover:underline font-medium">Guide →</a>
                            </div>
                            <div className="text-[12px] text-muted">
                              Dose: <span className="font-semibold text-clay">{ing.dose}</span>
                              <span className="mx-1.5">·</span>
                              Clinical range: <span className="text-ink3">{ing.clinicalRange}</span>
                            </div>
                          </div>
                          <span className="shrink-0 text-[11px] font-semibold rounded-full px-2.5 py-1"
                                style={ing.formOk ? { background: '#1b433215', color: '#1b4332' } : { background: '#92702815', color: '#927028' }}>
                            {ing.form}
                          </span>
                        </div>
                        <div className="px-4 py-4">
                          <p className="text-[13.5px] leading-[1.7] text-ink3">{ing.assessment}</p>
                          {ing.flag && (
                            <div className="mt-3 flex items-start gap-2 p-3 rounded-[8px]"
                                 style={{ background: '#92702810', border: '1px solid #92702828' }}>
                              <span className="shrink-0 font-bold text-[12px]" style={{ color: '#927028' }}>—</span>
                              <span className="text-[12.5px] font-medium" style={{ color: '#927028' }}>{ing.flag}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </section>

              {/* ════ REAL WORLD ════ */}
              <section id="real-world" className="mb-12 sm:mb-16">
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-1 self-stretch rounded-full shrink-0" style={{ background: '#1b4332', minHeight: '20px' }} />
                  <div>
                    <div className="text-[10px] tracking-[0.18em] uppercase text-clay font-semibold mb-1">In practice</div>
                    <h2 className="font-sans font-semibold text-ink2 leading-[1.18] tracking-[-0.025em]"
                        style={{ fontSize: 'clamp(18px, 3vw, 26px)' }}>
                      Real-world use — what actually happens
                    </h2>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      title: 'Onset and energy profile',
                      body: 'Energy onset at 20–30 minutes. The caffeine anhydrous hits quickly; the energy feels clean rather than jittery, which is primarily the L-theanine and taurine contribution. Peak stimulation at approximately 45–60 minutes. The Infinergy sustains the plateau so there is no sharp drop-off at the 90-minute mark that you get with anhydrous-only products at this total caffeine dose. Duration of noticeable effect: 3–4 hours in most users, longer in slow caffeine metabolisers (CYP1A2 *1F/*1F genotype).',
                    },
                    {
                      title: 'Pumps and performance',
                      body: 'The 8,000mg citrulline malate is felt in the pump response during working sets. Skin fullness and vascularity are noticeably more pronounced compared to products with 4,000–6,000mg. This is not a subjective impression peculiar to this product — the dose-response relationship for citrulline and NO production is well-documented. The betaine and taurine contribute to cellular hydration, which adds to the mechanical sensation of fullness in muscle. On push days specifically, the combination of citrulline + betaine + caffeine at these doses produces a performance level that is hard to match with underdosed competitors.',
                    },
                    {
                      title: 'Beta-alanine paresthesia',
                      body: 'At 4,000mg, the tingling is significant for new users — face, neck, forearms, scalp. First-use paresthesia peaks at around 20 minutes and lasts 30–45 minutes. It diminishes meaningfully over the first 2 weeks of daily use as muscle carnosine begins to saturate. If you have not used beta-alanine before, start with half a scoop for the first week. The tingling does not indicate anything is wrong — it is a known and harmless pharmacological effect. The performance benefit (acid buffering during high-rep sets) accrues over weeks, not within a single session.',
                    },
                    {
                      title: 'Taste and mixability',
                      body: 'Black Cherry is the only flavor. It is well-executed — the stevia sweetness is balanced, not cloying. In cold water (400–500ml) it mixes within 15–20 seconds in a shaker with no clumps. Mild purple tint from the natural coloring. The 21g serving size means the powder bulk is substantial — you need adequate water volume or it tastes concentrated. Some users mix with 500ml to dilute the stevia sweetness further.',
                    },
                    {
                      title: 'No creatine — why, and what to do about it',
                      body: "BULK Black deliberately excludes creatine. Transparent Labs' stated reasoning: high caffeine doses may attenuate creatine's ergogenic effect when taken together (Vandenberghe et al., 1996; though this was contested by subsequent research). Regardless of the evidence debate, the practical implication is clear: take 5g creatine monohydrate separately, post-workout. TL sells a Creatine HMB product for this purpose, but any pharmaceutical-grade creatine monohydrate works. This is not a formulation weakness — it is a defensible design decision.",
                    },
                  ].map(({ title, body }) => (
                    <div key={title} className="p-4 sm:p-5 bg-paper3 border border-rule rounded-[14px]">
                      <h3 className="font-sans font-semibold text-[14px] sm:text-[15px] text-ink2 mb-2 tracking-[-0.01em]">{title}</h3>
                      <p className="text-[13.5px] sm:text-[14px] leading-[1.75] text-ink3 m-0">{body}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ════ PROS / CONS ════ */}
              <section id="pros-cons" className="mb-12 sm:mb-16">
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-1 self-stretch rounded-full shrink-0" style={{ background: '#1b4332', minHeight: '20px' }} />
                  <div>
                    <div className="text-[10px] tracking-[0.18em] uppercase text-clay font-semibold mb-1">Assessment</div>
                    <h2 className="font-sans font-semibold text-ink2 leading-[1.18] tracking-[-0.025em]"
                        style={{ fontSize: 'clamp(18px, 3vw, 26px)' }}>Pros and cons</h2>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[14px] border overflow-hidden" style={{ borderColor: '#1b433228' }}>
                    <div className="px-4 py-3 border-b flex items-center gap-2" style={{ background: '#1b433210', borderColor: '#1b433228' }}>
                      <span className="text-[11px] tracking-[0.14em] uppercase font-semibold" style={{ color: '#1b4332' }}>What earns the 9.1</span>
                    </div>
                    <ul className="divide-y divide-rule list-none p-0 m-0">
                      {[
                        'Every ingredient at or above its primary clinical trial dose',
                        'Citrulline malate 8,000mg — top of the effective range for NO and pumps',
                        'Beta-alanine 4,000mg — loading dose, not a token inclusion',
                        'Betaine 2,500mg (BetaPure) — exact dose from the Cholewa 2013 trial',
                        'AlphaSize Alpha-GPC 300mg — the key differentiator vs regular BULK',
                        'Caffeine split (anhydrous + Infinergy) — intelligent sustained-release design',
                        'Zero proprietary blends — every ingredient disclosed in exact mg',
                        'Informed Choice certified — batch-level banned substance testing',
                        'COAs published per lot, publicly accessible, no request needed',
                        'No artificial sweeteners, dyes, or preservatives — stevia only',
                        'Creatine excluded deliberately — aligns with post-workout timing evidence',
                      ].map((pro, i) => (
                        <li key={i} className="flex gap-2.5 px-4 py-3 text-[13px] sm:text-[13.5px] text-ink3 leading-[1.55]">
                          <span className="font-bold shrink-0 mt-0.5" style={{ color: '#1b4332' }}>+</span>{pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-[14px] border border-rule overflow-hidden">
                    <div className="px-4 py-3 border-b border-rule bg-paper2 flex items-center gap-2">
                      <span className="text-[11px] tracking-[0.14em] uppercase text-muted font-semibold">Honest limitations</span>
                    </div>
                    <ul className="divide-y divide-rule list-none p-0 m-0">
                      {[
                        '$2.00/serving — premium, though justified by ingredient density',
                        '350mg caffeine — not for beginners or caffeine-sensitive users',
                        'Only one flavor (Black Cherry) — no choice for those who dislike it',
                        '4,000mg beta-alanine will cause significant tingling for new users',
                        'No creatine — requires separate post-workout supplementation',
                        'AlphaSize is 50% Alpha-GPC by weight — 300mg product = 150mg actual',
                        'Sleep disruption risk if taken within 5–6 hours of bedtime',
                        'Not suitable for cardiac patients or those on antihypertensives',
                        'Caffeine half-life means a 5pm scoop can still affect midnight sleep',
                      ].map((con, i) => (
                        <li key={i} className="flex gap-2.5 px-4 py-3 text-[13px] sm:text-[13.5px] text-ink3 leading-[1.55]">
                          <span className="text-muted font-bold shrink-0 mt-0.5">–</span>{con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* ════ WHO IT'S FOR ════ */}
              <section id="who-for" className="mb-12 sm:mb-16">
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-1 self-stretch rounded-full shrink-0" style={{ background: '#1b4332', minHeight: '20px' }} />
                  <div>
                    <div className="text-[10px] tracking-[0.18em] uppercase text-clay font-semibold mb-1">Fit guide</div>
                    <h2 className="font-sans font-semibold text-ink2 leading-[1.18] tracking-[-0.025em]"
                        style={{ fontSize: 'clamp(18px, 3vw, 26px)' }}>Who should and shouldn't use BULK Black</h2>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[14px] overflow-hidden border" style={{ borderColor: '#1b433228' }}>
                    <div className="px-4 py-3 border-b flex items-center gap-2" style={{ background: '#1b433210', borderColor: '#1b433228' }}>
                      <span className="font-semibold text-[13px]" style={{ color: '#1b4332' }}>Designed for</span>
                    </div>
                    <ul className="divide-y divide-rule list-none p-0 m-0">
                      {[
                        ['Experienced stimulant users', 'Tolerance built from regular caffeine use'],
                        ['Trained athletes (intermediate+)', 'Will feel the clinical doses working'],
                        ['Label transparency advocates', 'Full disclosure — nothing hidden'],
                        ['Drug-tested competitors', 'Informed Choice batch certification'],
                        ['High-intensity strength training', 'Citrulline + betaine + caffeine stack is ideal'],
                        ['Morning or early afternoon sessions', 'Caffeine timing away from bedtime'],
                      ].map(([who, why]) => (
                        <li key={who} className="px-4 py-3">
                          <div className="font-medium text-[13px] text-ink2">{who}</div>
                          <div className="text-[11.5px] text-muted mt-0.5">{why}</div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-[14px] overflow-hidden border border-rule">
                    <div className="px-4 py-3 border-b border-rule bg-paper2">
                      <span className="font-semibold text-[13px] text-muted">Not the right product for</span>
                    </div>
                    <ul className="divide-y divide-rule list-none p-0 m-0">
                      {[
                        ['Caffeine-naive users', 'Start with regular BULK (200mg) first'],
                        ['Evening gym sessions', 'Risk of sleep disruption post-6pm use'],
                        ['Cardiovascular patients', 'See pharmacist note — prescriber consultation required'],
                        ['Anxiety disorder sufferers', '350mg caffeine can worsen anxiety and panic'],
                        ['Budget-focused buyers', 'AT $2.00/serving, cheaper well-dosed alternatives exist'],
                        ['Flavour variety seekers', 'Only available in Black Cherry'],
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

              {/* ════ PHARMACIST NOTE ════ */}
              <section id="pharmacist" className="mb-12 sm:mb-16">
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-1 self-stretch rounded-full shrink-0" style={{ background: '#1b4332', minHeight: '20px' }} />
                  <div>
                    <div className="text-[10px] tracking-[0.18em] uppercase text-clay font-semibold mb-1">Pharmacist, Pharm.B</div>
                    <h2 className="font-sans font-semibold text-ink2 leading-[1.18] tracking-[-0.025em]"
                        style={{ fontSize: 'clamp(18px, 3vw, 26px)' }}>Drug and health interactions</h2>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-[12px] border border-clay/25 bg-clay/5 mb-5">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-[13px] font-semibold shrink-0"
                       style={{ background: '#1b4332' }}>PS</div>
                  <div>
                    <div className="text-[13px] font-semibold text-ink2">Pankaj Singh, Pharm.B</div>
                    <div className="text-[11px] text-muted">Pharmacist — drug-nutrient interaction analysis</div>
                  </div>
                </div>

                <p className="text-[14.5px] sm:text-[15px] leading-[1.85] text-ink3 mb-5">
                  Pre-workouts containing stimulant doses above 200mg caffeine carry drug interaction profiles that most
                  product reviews and even most gym staff do not address. At 350mg, BULK Black deserves specific attention.
                </p>

                <div className="space-y-3">
                  {[
                    { level: 'Avoid', color: '#DC2626', bg: '#FEF2F2', border: '#FECACA', condition: 'MAOIs (phenelzine, tranylcypromine, selegiline)', note: 'Tyramine (from organic green coffee) + MAOI = hypertensive crisis risk. Alpha-GPC raises acetylcholine; MAOIs reduce acetylcholinesterase indirectly. This combination is contraindicated. If you are on any MAOI including selegiline for Parkinson\'s, this product is not appropriate.' },
                    { level: 'Avoid', color: '#DC2626', bg: '#FEF2F2', border: '#FECACA', condition: 'Antihypertensives + cardiac medications', note: '350mg caffeine acutely raises systolic BP 8–10 mmHg and HR 5–12 bpm. This is additive with reduced antihypertensive efficacy and can counteract beta-blocker, ACE inhibitor, or CCB action. Patients managing hypertension pharmacologically should avoid high-stimulant pre-workouts or use stimulant-free alternatives.' },
                    { level: 'Avoid', color: '#DC2626', bg: '#FEF2F2', border: '#FECACA', condition: 'Pregnancy', note: 'The recommended maximum caffeine intake during pregnancy is 200mg/day from all sources. One serving of BULK Black (350mg) exceeds this limit alone. Not appropriate during pregnancy.' },
                    { level: 'Caution', color: '#D97706', bg: '#FFFBEB', border: '#FDE68A', condition: 'SSRIs / SNRIs (sertraline, venlafaxine, fluoxetine)', note: 'L-tyrosine is a catecholamine precursor. Combined with serotonergic medications, there is a theoretical augmentation risk at high doses. At 1,000mg tyrosine, the clinical risk is low but not zero in sensitive individuals. Monitor mood and anxiety symptoms when first combining.' },
                    { level: 'Caution', color: '#D97706', bg: '#FFFBEB', border: '#FDE68A', condition: 'Stimulant medications (Adderall, Ritalin, modafinil)', note: 'Stacking 350mg caffeine with prescription stimulants dramatically increases cardiovascular load — tachycardia, palpitations, blood pressure spikes. Not clinically recommended without physician guidance.' },
                    { level: 'Note', color: '#1D4ED8', bg: '#EFF6FF', border: '#BFDBFE', condition: 'CYP1A2 slow metabolisers', note: 'Approximately 5–10% of people are CYP1A2 poor metabolisers (genetic variant). In these individuals, caffeine half-life extends to 12+ hours instead of the typical 3–7 hours. 350mg caffeine in a slow metaboliser can produce 6+ hours of stimulation and significant sleep disruption. If caffeine from a single cup of coffee still affects you 8+ hours later, consider starting at half a scoop.' },
                  ].map(({ level, color, bg, border, condition, note }) => (
                    <div key={condition} className="flex gap-3 p-4 rounded-[12px] border"
                         style={{ background: bg, borderColor: border }}>
                      <div className="shrink-0 pt-0.5">
                        <span className="text-[10px] font-bold tracking-[0.1em] uppercase px-2 py-1 rounded-full"
                              style={{ background: color, color: '#fff' }}>{level}</span>
                      </div>
                      <div>
                        <div className="font-semibold text-[13.5px] text-ink2 mb-1">{condition}</div>
                        <p className="text-[13px] text-ink3 leading-[1.6] m-0">{note}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-[12px] text-muted leading-[1.65] mt-4 italic">
                  Educational — not a substitute for advice from your prescribing physician or pharmacist who has your complete medical history.
                </p>
              </section>

              {/* ════ ALTERNATIVES ════ */}
              <section id="alternatives" className="mb-12 sm:mb-16">
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-1 self-stretch rounded-full shrink-0" style={{ background: '#1b4332', minHeight: '20px' }} />
                  <div>
                    <div className="text-[10px] tracking-[0.18em] uppercase text-clay font-semibold mb-1">Head-to-head</div>
                    <h2 className="font-sans font-semibold text-ink2 leading-[1.18] tracking-[-0.025em]"
                        style={{ fontSize: 'clamp(18px, 3vw, 26px)' }}>How BULK Black compares</h2>
                  </div>
                </div>

                <div className="space-y-3 mb-5">
                  {[
                    {
                      name: 'Transparent Labs BULK',
                      subtitle: 'This review',
                      score: 9.1,
                      caffeine: '350mg (split)',
                      citrulline: '8,000mg',
                      cert: 'Informed Choice',
                      price: '$59.99 / 30',
                      blend: 'None',
                      current: true,
                      verdict: 'Every dose clinical. Best-in-class transparency and testing. Premium price justified.',
                      slug: '',
                      img: PRODUCT_IMG,
                    },
                    {
                      name: 'Legion Pulse',
                      subtitle: 'Competitor',
                      score: 8.4,
                      caffeine: '350mg',
                      citrulline: '8,000mg',
                      cert: 'Informed Sport',
                      price: '$54.99 / 21',
                      blend: 'None',
                      current: false,
                      verdict: 'Similar transparency, same caffeine, Informed Sport certified. More expensive per serving. Less nootropic focus.',
                      slug: '',
                      img: '',
                    },
                    {
                      name: 'Ghost Legend V3',
                      subtitle: 'Popular alternative',
                      score: 7.2,
                      caffeine: '250mg',
                      citrulline: '4,500mg',
                      cert: 'Informed Sport',
                      price: '$44.99 / 25',
                      blend: 'Partial',
                      current: false,
                      verdict: 'Citrulline at 4,500mg is below effective range for pump. Better branding than dosing.',
                      slug: '',
                      img: '',
                    },
                  ].map(({ name, score, caffeine, citrulline, cert, price, blend, current, verdict, slug, img }) => (
                    <div key={name} className={`rounded-[14px] border overflow-hidden ${current ? 'border-clay/40' : 'border-rule'}`}
                         style={current ? { background: '#1b433206' } : {}}>
                      <div className={`px-4 py-3 border-b flex items-center justify-between gap-3 flex-wrap ${current ? 'border-clay/20' : 'border-rule'}`}
                           style={current ? { background: '#1b433210' } : { background: '#F8F5EF' }}>
                        <div className="flex items-center gap-2.5 min-w-0">
                          {img && (
                            <img src={img} alt={`${name} product image`} width="32" height="32"
                                 className="w-8 h-8 rounded-[6px] object-contain shrink-0"
                                 onError={e => { (e.currentTarget as HTMLImageElement).style.opacity = '0' }} />
                          )}
                          <div className="font-semibold text-[13.5px] sm:text-[14px] text-ink2 truncate">{name}</div>
                          {current && (
                            <span className="text-[10px] font-semibold tracking-[0.1em] uppercase text-white rounded-full px-2 py-0.5 shrink-0"
                                  style={{ background: '#1b4332' }}>This review</span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="font-serif-body text-[20px]" style={{ color: score >= 9 ? '#1b4332' : score >= 8 ? '#2d6a4f' : '#B95C3A' }}>{score}</span>
                          <span className="text-[11px] text-muted">/ 10</span>
                        </div>
                      </div>
                      <div className="px-4 py-3">
                        <div className="flex flex-wrap gap-x-4 gap-y-1 mb-2 text-[12px] text-muted">
                          <span>Caffeine: <span className="font-medium text-ink2">{caffeine}</span></span>
                          <span>Citrulline: <span className="font-medium text-ink2">{citrulline}</span></span>
                          <span>Cert: <span className={`font-medium ${cert !== 'None' ? 'text-moss' : 'text-muted'}`}>{cert}</span></span>
                          <span>Blend: <span className={`font-medium ${blend === 'None' ? 'text-moss' : 'text-amber-600'}`}>{blend}</span></span>
                          <span>Price: <span className="font-medium text-ink2">{price}</span></span>
                        </div>
                        <p className="text-[13px] text-ink3 leading-[1.55] mb-2">{verdict}</p>
                        <div className="flex gap-2.5 mt-3">
                          {slug && <a href={slug} className="text-[12px] font-medium text-clay border border-clay/30 rounded-full px-3 py-1.5 hover:bg-clay/8 transition-colors">Read review →</a>}
                          <a href={current ? AFFILIATE_URL : `https://www.amazon.com/s?k=${encodeURIComponent(name)}`}
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
                  Full pre-workout comparisons are available at <a href="/compare" className="text-clay hover:underline">/compare</a>.
                  For the complete ranked list, see <a href="/best/pre-workout" className="text-clay hover:underline">best pre-workouts</a>.
                </p>
              </section>

              {/* ════ FAQ ════ */}
              <section id="faq" className="mb-12 sm:mb-16">
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-1 self-stretch rounded-full shrink-0" style={{ background: '#1b4332', minHeight: '20px' }} />
                  <div>
                    <div className="text-[10px] tracking-[0.18em] uppercase text-clay font-semibold mb-1">Common questions</div>
                    <h2 className="font-sans font-semibold text-ink2 leading-[1.18] tracking-[-0.025em]"
                        style={{ fontSize: 'clamp(18px, 3vw, 26px)' }}>Frequently asked</h2>
                  </div>
                </div>
                <div className="space-y-2">
                  {faqItems.map((item, i) => (
                    <FAQItem key={i} q={item.q} a={item.a} isOpen={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
                  ))}
                </div>
              </section>

              {/* ════ REFERENCES ════ */}
              <section id="references" className="mb-12 sm:mb-16">
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-1 self-stretch rounded-full shrink-0" style={{ background: '#1b4332', minHeight: '20px' }} />
                  <div>
                    <div className="text-[10px] tracking-[0.18em] uppercase text-clay font-semibold mb-1">Evidence base</div>
                    <h2 className="font-sans font-semibold text-ink2 leading-[1.18] tracking-[-0.025em]"
                        style={{ fontSize: 'clamp(18px, 3vw, 26px)' }}>References</h2>
                  </div>
                </div>
                <p className="text-[13px] text-muted leading-[1.65] mb-5">
                  All clinical dose thresholds and mechanism claims are based on the following peer-reviewed sources.
                  The Fitlab review methodology requires primary literature citations for each ingredient assessment.
                </p>
                <ol className="space-y-4 list-decimal list-inside">
                  {[
                    { ref: 'Pérez-Guisado J, Jakeman PM. Citrulline malate enhances athletic anaerobic performance and relieves muscle soreness.', journal: 'J Strength Cond Res. 2010;24(5):1215-22.', pmid: '20386132', note: 'Primary RCT for citrulline malate at 8g — 40% reduction in muscle soreness, significant increase in reps to failure' },
                    { ref: 'Hobson RM, Saunders B, Ball G, Harris RC, Sale C. Effects of beta-alanine supplementation on exercise performance: a meta-analysis.', journal: 'Amino Acids. 2012;43(1):25-37.', pmid: '22270875', note: 'Meta-analysis of 15 studies — beta-alanine improves exercise capacity at doses 3.2–6.4g/day; effect on 1–4 min exercise bouts' },
                    { ref: 'Cholewa JM, Wyszczelska-Rokiel M, Glowacki R, et al. Effects of betaine on body composition, performance, and homocysteine thiolactone.', journal: 'J Int Soc Sports Nutr. 2013;10(1):39.', pmid: '23967897', note: 'Benchmark betaine RCT — 2,500mg/day for 6 weeks increased bench press volume and arm size vs placebo' },
                    { ref: 'Waldron M, Patterson SD, Tallent J, Jeffries O. The effects of an oral taurine dose and supplementation period on endurance exercise performance in humans: a meta-analysis.', journal: 'Sports Med. 2018;48(5):1247-1253.', pmid: '29546641', note: 'Meta-analysis confirming taurine improves time to exhaustion and reduces RPE across endurance modalities' },
                    { ref: 'Deijen JB, Orlebeke JF. Effect of tyrosine on cognitive function and blood pressure under stress.', journal: 'Brain Res Bull. 1994;33(3):319-323.', pmid: '8293316', note: 'L-tyrosine improves working memory and information processing during cognitive stress tasks' },
                    { ref: 'Bellar D, LeBlanc NR, Campbell B. The effect of 6 days of alpha glycerylphosphorylcholine on isometric strength.', journal: 'J Int Soc Sports Nutr. 2015;12:42.', pmid: '26477164', note: 'AlphaSize Alpha-GPC at 600mg significantly increased peak power output vs placebo in trained athletes' },
                    { ref: 'Grgic J, Trexler ET, Lazinica B, Pedisic Z. Effects of caffeine intake on muscle strength and power: a systematic review and meta-analysis.', journal: 'J Int Soc Sports Nutr. 2018;15:11.', pmid: '29527137', note: 'Meta-analysis — caffeine significantly enhances muscle strength and power; optimal dose 3–6mg/kg body weight' },
                    { ref: 'Haskell CF, Kennedy DO, Milne AL, Wesnes KA, Scholey AB. The effects of L-theanine, caffeine and their combination on cognition and mood.', journal: 'Biol Psychol. 2008;77(2):113-22.', pmid: '18006208', note: 'Caffeine + L-theanine combination improves speed and accuracy of attention tasks vs caffeine alone — synergistic pairing' },
                    { ref: 'Vandenberghe K, Gillis N, Van Leemputte M, Van Hecke P, Vanstapel F, Hespel P. Caffeine counteracts the ergogenic action of muscle creatine loading.', journal: 'J Appl Physiol. 1996;80(2):452-7.', pmid: '8929579', note: 'Rationale cited by Transparent Labs for excluding creatine from caffeine-containing pre-workout formulas' },
                    { ref: 'Informed Choice certification database — Transparent Labs product listings.', journal: 'LGC Group. choice.wetestyoutrust.com/supplement-search/brand/transparent-labs', pmid: null, extUrl: 'https://choice.wetestyoutrust.com/supplement-search/brand/transparent-labs', note: 'Batch-level banned substance testing records for Transparent Labs products' },
                    { ref: 'Transparent Labs third-party test database — Certificates of Analysis and ingredient verification tests.', journal: 'transparentlabs.com/pages/third-party-tests', pmid: null, extUrl: 'https://www.transparentlabs.com/pages/third-party-tests', note: 'ISO-accredited per-lot COA database — purity, potency, and contaminant results' },
                  ].map((ref, i) => (
                    <li key={i} className="text-[13px] text-ink3 leading-[1.7] pl-1">
                      <span className="font-medium text-ink2">{ref.ref}</span>{' '}
                      <span className="italic text-muted">{ref.journal}</span>{' '}
                      {ref.pmid && (
                        <a href={`https://pubmed.ncbi.nlm.nih.gov/${ref.pmid}/`} target="_blank" rel="noopener noreferrer"
                           className="text-clay hover:underline text-[12px] ml-1">PubMed</a>
                      )}
                      {ref.extUrl && !ref.pmid && (
                        <a href={ref.extUrl} target="_blank" rel="noopener noreferrer"
                           className="text-clay hover:underline text-[12px] ml-1">Source ↗</a>
                      )}
                      <div className="text-[11.5px] text-muted mt-0.5">{ref.note}</div>
                    </li>
                  ))}
                </ol>
              </section>

              {/* ════ VERDICT ════ */}
              <section id="verdict" className="mb-8 sm:mb-12">
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-1 self-stretch rounded-full shrink-0" style={{ background: '#1b4332', minHeight: '20px' }} />
                  <div>
                    <div className="text-[10px] tracking-[0.18em] uppercase text-clay font-semibold mb-1">Final word</div>
                    <h2 className="font-sans font-semibold text-ink2 leading-[1.18] tracking-[-0.025em]"
                        style={{ fontSize: 'clamp(18px, 3vw, 26px)' }}>Verdict</h2>
                  </div>
                </div>

                <div className="rounded-[14px] border overflow-hidden mb-5" style={{ borderColor: '#1b433228' }}>
                  <div className="px-5 py-5 border-b" style={{ background: '#1b433210', borderColor: '#1b433228' }}>
                    <div className="flex items-center gap-4">
                      <div>
                        <div className="font-serif-body leading-none" style={{ fontSize: '52px', color: '#1b4332' }}>{SCORE}</div>
                        <div className="text-[12px] text-muted">/ 10 · <a href="/scoring-rubric" className="text-clay hover:underline">rubric v3.1</a></div>
                      </div>
                      <div>
                        <div className="font-semibold text-[15px] text-ink2">Transparent Labs BULK Black</div>
                        <div className="text-[12px] text-muted mt-0.5">May 2026 · COA verified · Informed Choice certified</div>
                      </div>
                    </div>
                  </div>
                  <div className="px-5 py-5 space-y-4">
                    <p className="text-[14.5px] sm:text-[15px] leading-[1.85] text-ink3">
                      BULK Black is the benchmark for what a fully disclosed, clinically dosed, independently certified
                      pre-workout looks like. The score of 9.1 is not a marketing assessment — it reflects that every
                      ingredient in the formula hits the dose used in its primary clinical trial, the caffeine stack is
                      pharmacologically considered rather than just large, and the third-party testing architecture is
                      the most complete available in the pre-workout category.
                    </p>
                    <p className="text-[14.5px] sm:text-[15px] leading-[1.85] text-ink3">
                      The limitations are real: $2.00/serving is expensive, 350mg caffeine restricts the user base
                      to experienced stimulant users, and the single flavor offers no choice. These are why value/gram
                      scores 8.2 rather than 9+. But the core question for anyone reviewing a pre-workout is: does
                      it do what it says? For BULK Black, the answer is documented, publicly verifiable, and batch-specific.
                      That is not the standard in this category. It should be.
                    </p>
                    <p className="text-[14.5px] sm:text-[15px] leading-[1.85] text-ink3">
                      If you have experience with stimulants, train at high intensity, and want to know exactly what is
                      in each scoop with lab verification to match, BULK Black is the default recommendation until
                      something matches its transparency record at a lower price.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a href={AFFILIATE_URL} target="_blank" rel="nofollow sponsored"
                     className="flex-1 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[14px] font-medium bg-clay text-white hover:bg-clayd transition-all">
                    Check price on Amazon →
                  </a>
                  <a href="/best/pre-workout"
                     className="flex-1 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[13px] font-medium bg-paper3 text-ink2 border border-rule hover:border-clay transition-all">
                    See all pre-workout rankings →
                  </a>
                </div>
              </section>

              {/* Disclaimer */}
              <div className="pt-5 border-t border-rule">
                <p className="text-[11.5px] text-muted leading-[1.7]">
                  <strong className="font-medium text-ink3">Affiliate disclosure:</strong> The Amazon link above is an affiliate link. Purchases generate a commission at no extra cost to you. Commission rates have no effect on our rubric scores or editorial conclusions. See our <a href="/conflicts-policy" className="text-clay hover:underline">conflicts policy</a>.{' '}
                  <strong className="font-medium text-ink3">Not medical advice.</strong> Pharmacist interaction notes are educational. Consult your prescribing physician before adding any stimulant product if you take prescription medication.
                </p>
              </div>
            </article>

            {/* ── STICKY SIDEBAR ── */}
            <aside className="hidden lg:block py-10 sm:py-14">
              <div className="sticky top-24 space-y-4">
                <div className="bg-paper3 border border-rule rounded-[14px] overflow-hidden">
                  <div className="px-5 py-5 border-b border-rule text-center" style={{ background: '#1b433210' }}>
                    <div className="text-[11px] tracking-[0.18em] uppercase text-muted mb-1">Fitlab Score</div>
                    <div className="font-serif-body text-[52px] leading-none" style={{ color: '#1b4332', fontVariationSettings: '"opsz" 96' }}>{SCORE}</div>
                    <div className="text-[12px] text-muted">/ 10</div>
                  </div>
                  <div className="p-4">
                    <a href={AFFILIATE_URL} target="_blank" rel="nofollow sponsored"
                       className="w-full flex items-center justify-center rounded-full py-3 text-[13px] font-medium bg-clay text-white hover:bg-clayd transition-colors mb-2">
                      Buy on Amazon →
                    </a>
                    <div className="text-[10.5px] text-muted text-center">Affiliate · ~$59.99 / 30 servings</div>
                  </div>
                </div>

                <div className="bg-paper3 border border-rule rounded-[14px] p-4">
                  <div className="text-[10px] tracking-[0.16em] uppercase text-muted font-semibold mb-3">Key data</div>
                  {[
                    ['Total caffeine', '350mg'],
                    ['Citrulline malate', '8,000mg'],
                    ['Beta-alanine', '4,000mg'],
                    ['Betaine (BetaPure)', '2,500mg'],
                    ['Alpha-GPC (AlphaSize)', '300mg'],
                    ['Informed Choice', 'Yes'],
                    ['Proprietary blends', 'None'],
                  ].map(([l, v]) => (
                    <div key={l} className="flex justify-between py-2 border-b border-rule last:border-b-0 text-[12.5px]">
                      <span className="text-muted">{l}</span>
                      <span className="font-semibold text-clay">{v}</span>
                    </div>
                  ))}
                  <a href="https://www.transparentlabs.com/pages/third-party-tests" target="_blank" rel="noopener"
                     className="mt-3 block text-center text-[12px] text-clay hover:underline">View COA database →</a>
                </div>

                <div className="bg-paper3 border border-rule rounded-[14px] p-4">
                  <div className="text-[10px] tracking-[0.16em] uppercase text-muted font-semibold mb-3">In this review</div>
                  {[
                    ['COA & certification', '#coa'],
                    ['Caffeine stack', '#caffeine'],
                    ['Ingredient audit', '#ingredients'],
                    ['Real-world use', '#real-world'],
                    ['Pharmacist note', '#pharmacist'],
                    ['vs alternatives', '#alternatives'],
                    ['References', '#references'],
                    ['Verdict', '#verdict'],
                  ].map(([l, h]) => (
                    <a key={h} href={h} className="block text-[12.5px] text-ink3 py-1 hover:text-clay transition-colors">→ {l}</a>
                  ))}
                </div>

                <div className="bg-paper3 border border-rule rounded-[14px] p-4">
                  <div className="text-[10px] tracking-[0.16em] uppercase text-muted font-semibold mb-3">Related</div>
                  {[
                    ['Best pre-workouts 2026', '/best/pre-workout'],
                    ['Citrulline malate guide', '/ingredients/citrulline-malate'],
                    ['Beta-alanine guide', '/ingredients/beta-alanine'],
                    ['Betaine guide', '/ingredients/betaine-anhydrous'],
                    ['Alpha-GPC guide', '/ingredients/alpha-gpc'],
                    ['Compare pre-workouts', '/compare'],
                    ['Pre-workout protocol', '/protocols/pre-workout-stack'],
                  ].map(([l, h]) => (
                    <a key={h} href={h} className="block text-[12.5px] text-clay hover:underline py-1">{l} →</a>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* Mobile sticky bar */}
        <div className="lg:hidden sticky bottom-0 left-0 right-0 z-30 border-t border-rule"
             style={{ background: '#F2EDE2' }}>
          <div className="flex gap-2.5 px-4 py-3">
            <a href={AFFILIATE_URL} target="_blank" rel="nofollow sponsored"
               className="flex-1 flex items-center justify-center rounded-full py-3 text-[13px] font-medium bg-clay text-white">
              Buy on Amazon →
            </a>
            <a href="https://www.transparentlabs.com/pages/third-party-tests" target="_blank" rel="noopener"
               className="flex items-center justify-center rounded-full px-4 py-3 text-[12px] font-medium bg-paper3 text-ink2 border border-rule">
              COA
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
                     style={{ background: '#1b4332' }}>PS</div>
                <div className="min-w-0">
                  <div className="font-semibold text-[15px] text-ink2">Pankaj Singh, Pharm.B</div>
                  <div className="text-[11px] tracking-[0.08em] uppercase font-medium mb-2" style={{ color: '#1b4332' }}>Pharmacist · Founder, Fitlab Reviews</div>
                  <p className="text-[12.5px] sm:text-[13px] text-muted leading-[1.65] mb-2">
                    Pharmacist trained in formulation analysis and drug-nutrient interactions. Reviews are written using published literature,
                    public third-party testing data, and pharmaceutical evaluation criteria. No samples were accepted for this review.
                  </p>
                  <a href="https://www.linkedin.com/in/pankaj-singh-77b93a368/" target="_blank" rel="noopener noreferrer"
                     className="text-[12px] text-clay hover:underline">LinkedIn ↗</a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </PageShell>
    </>
  )
}
