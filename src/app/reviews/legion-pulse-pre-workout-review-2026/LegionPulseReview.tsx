'use client'
import { useState } from 'react'
import PageShell from '@/components/PageShell'
import JsonLd from '@/components/JsonLd'

const SITE_URL      = 'https://fitlabreviews.com'
const PAGE_URL      = `${SITE_URL}/reviews/legion-pulse-pre-workout-review-2026`
const AFFILIATE_URL = 'https://amzn.to/49AgxUW'
const PRODUCT_IMG   = 'https://pub-cfbcca8550f5404f92083870525d6d19.r2.dev/ingredients/legion-pulse-preworkout.webp'
const LABDOOR_PDF   = 'https://cdn.labdoor.io/certification/images/zk9u1bayecao9754kyv0p.pdf'

// ── Rubric scores — Fitlab v3.1 ───────────────────────────────────────────────
// CLINICAL DOSE (25%): 9.2 — All 6 active ingredients at or above clinical
//   trial doses. Citrulline malate 8g (range 6–10g), beta-alanine 3.6g (range
//   3.2–6.4g), betaine 2.5g (exact Cholewa 2013 dose), caffeine 350mg (within
//   3–6mg/kg for 70kg user), L-theanine 350mg (1:1 ratio to caffeine — slightly
//   theanine-dominant vs classic 1:2 caffeine:theanine), alpha-GPC 300mg (50%
//   standardised, effective at this dose). Minor deduction: alpha-GPC 50%
//   form means 150mg actual — could be clearer on label.
// INGREDIENT FORM (20%): 8.8 — CarnoSyn beta-alanine (trademarked, validated).
//   Citrulline malate 2:1 (standard appropriate form). Alpha-GPC 50% (standard
//   effective form). No Infinergy or sustained-release caffeine — single-source
//   anhydrous at 350mg creates a sharper crash vs BULK Black's split.
// PURITY (20%): 9.4 — Labdoor certified (lot 2416421, March 22, 2026, Catalyst
//   + Eurofins labs). All heavy metals pass USP limits. Lead detected at 0.9
//   μg/serving (USP limit 5μg) — in range, worth monitoring. ISO 17025
//   accredited lab manufacturing. No artificial sweeteners, colors, or dyes.
// VALUE (20%): 8.0 — ~$54.99/20 servings = $2.75/serving (2-scoop full dose).
//   Premium. More expensive per serving than BULK Black. 20 flavors is the
//   strongest value-add. Stim-free version available is a genuine differentiator.
// LABEL HONESTY (15%): 9.2 — Full disclosure, no proprietary blends.
//   Labdoor data shows every ingredient above label claim — over-delivers
//   rather than under-delivers. Rare in this category. 467 published
//   references cited on product page — unusual level of scientific citation.
//
// WEIGHTED: (9.2×.25)+(8.8×.20)+(9.4×.20)+(8.0×.20)+(9.2×.15) = 8.92 → 8.9
// Rounded conservatively to 8.8 — value/gram is the honest limiting factor.

const SCORE  = 8.8
const SCORES = { clinicalDose: 9.2, ingredientForm: 8.8, purity: 9.4, value: 8.0, labelHonesty: 9.2 }

// ── JSON-LD ───────────────────────────────────────────────────────────────────
const productSchema = {
  '@context': 'https://schema.org', '@type': 'Product',
  name: 'Legion Pulse Pre-Workout',
  brand: { '@type': 'Brand', name: 'Legion Athletics' },
  description: 'Naturally sweetened pre-workout with 6 clinically dosed ingredients: citrulline malate 8g, beta-alanine 3.6g (CarnoSyn), betaine 2.5g, caffeine 350mg, L-theanine 350mg, Alpha-GPC 300mg. No artificial sweeteners, colors, or dyes. Labdoor certified, ISO 17025 lab tested.',
  image: PRODUCT_IMG,
  offers: {
    '@type': 'Offer', priceCurrency: 'USD', price: '54.99',
    availability: 'https://schema.org/InStock', url: AFFILIATE_URL,
  },
  review: {
    '@type': 'Review',
    author: { '@type': 'Person', name: 'Pankaj Singh', jobTitle: 'Pharmacist (Pharm.B)', url: `${SITE_URL}/authors#pankaj-singh` },
    datePublished: '2026-05-16', dateModified: '2026-05-16',
    name: 'Legion Pulse Pre-Workout Review (2026): Labdoor Tested, All Doses Audited',
    reviewBody: 'Labdoor lot 2416421 (tested Sep–Oct 2025, released March 2026) found citrulline malate 9.2g vs 8g claimed, caffeine 380mg vs 350mg, L-theanine 410mg vs 350mg — every ingredient above label claim. Lead detected at 0.9μg/serving (USP limit 5μg). All microbiology pass. The 6-ingredient formula is genuinely clinically dosed. Main limitation: $2.75/serving is expensive and single-source caffeine at 350mg produces a sharper drop than dual-source designs. Score: 8.8/10.',
    reviewRating: { '@type': 'Rating', ratingValue: '8.8', bestRating: '10', worstRating: '0' },
    publisher: { '@type': 'Organization', name: 'Fitlab Reviews', url: SITE_URL },
  },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '8.8', bestRating: '10', worstRating: '0', ratingCount: '1', reviewCount: '1' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Reviews', item: `${SITE_URL}/reviews` },
    { '@type': 'ListItem', position: 3, name: 'Pre-Workout', item: `${SITE_URL}/best/pre-workout` },
    { '@type': 'ListItem', position: 4, name: 'Legion Pulse', item: PAGE_URL },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much caffeine is in Legion Pulse?', acceptedAnswer: { '@type': 'Answer', text: '350mg caffeine per full serving (2 scoops). Labdoor lot 2416421 (March 2026) found 380mg — 109% of label claim. This is caffeine anhydrous only, no sustained-release component. For reference, the FDA\'s established safe daily limit for healthy adults is 400mg from all sources combined. Legion also sells a stimulant-free version.' } },
    { '@type': 'Question', name: 'Is Legion Pulse Labdoor tested?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Lot 2416421 was tested by Labdoor (Catalyst and Eurofins labs, Sep–Oct 2025, released March 22, 2026). Results: citrulline malate 9.2g found vs 8g claimed, caffeine 380mg vs 350mg, all other ingredients above label claim. Lead detected at 0.9μg/serving (USP limit 5μg — within safe range). All microbiology tests pass. Full PDF available at labdoor.com.' } },
    { '@type': 'Question', name: 'Does Legion Pulse cause tingling?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The 3.6g beta-alanine (CarnoSyn) dose will cause paresthesia — tingling, flushing, prickling sensation — in most users. This is a harmless neurological reaction caused by beta-alanine binding to MrgprD receptors on sensory neurons. It peaks 15–20 minutes after consumption and lasts 30–60 minutes. With daily use, carnosine muscle saturation reduces paresthesia intensity over 2–4 weeks.' } },
    { '@type': 'Question', name: 'Is Legion Pulse worth the price?', acceptedAnswer: { '@type': 'Answer', text: 'At $2.75/serving (full 2-scoop dose), Legion Pulse is premium-priced. The value case: Labdoor-verified that every ingredient exceeds its label claim, 6 active ingredients all at clinical doses, no proprietary blends, no artificial sweeteners. The cost premium over competitors is real but the testing record and ingredient transparency justify it for buyers who prioritize verification.' } },
    { '@type': 'Question', name: 'How does Legion Pulse compare to Transparent Labs BULK Black?', acceptedAnswer: { '@type': 'Answer', text: 'Both have fully transparent labels and excellent testing records. Key differences: BULK Black uses a 350mg split caffeine stack (275mg anhydrous + 75mg Infinergy sustained-release) vs Pulse\'s single-source 350mg anhydrous — BULK Black has a smoother energy profile. Pulse uses a 1:1 caffeine-to-theanine ratio (350mg each) vs BULK Black\'s 1.75:1 — Pulse is slightly more calming. BULK Black adds AlphaSize Alpha-GPC as a nootropic differentiator. Pulse is $2.75/serving vs BULK Black\'s $2.00/serving. BULK Black scores 9.1 vs Pulse\'s 8.8 on the Fitlab rubric.' } },
    { '@type': 'Question', name: 'Can I take Legion Pulse once a day?', acceptedAnswer: { '@type': 'Answer', text: 'At 1 scoop (half dose, ~175mg caffeine), yes. At 2 scoops (full dose, 350mg caffeine), be mindful of total daily caffeine from all sources — coffee, tea, energy drinks. The FDA\'s safe upper limit is 400mg/day for healthy adults. Pulse at 2 scoops accounts for 95% of that budget. Take at least 5–6 hours before bedtime due to caffeine half-life of 3–7 hours.' } },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Legion Pulse Pre-Workout Review (2026): Labdoor Tested, All Doses Audited',
  description: 'Real Labdoor data (lot 2416421, March 2026): every ingredient above label claim. 6 ingredients audited against clinical thresholds, pharmacist drug interaction notes.',
  url: PAGE_URL, image: PRODUCT_IMG,
  datePublished: '2026-05-16T00:00:00.000Z', dateModified: '2026-05-16T00:00:00.000Z',
  author: { '@type': 'Person', name: 'Pankaj Singh', url: `${SITE_URL}/authors#pankaj-singh` },
  publisher: { '@type': 'Organization', name: 'Fitlab Reviews', url: SITE_URL, logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
  about: [
    { '@type': 'Thing', name: 'Legion Pulse Pre-Workout' },
    { '@type': 'Drug', name: 'Caffeine Anhydrous' },
    { '@type': 'Drug', name: 'L-Citrulline Malate' },
    { '@type': 'Drug', name: 'Beta-Alanine' },
    { '@type': 'Drug', name: 'Betaine Anhydrous' },
    { '@type': 'Drug', name: 'Alpha-GPC' },
    { '@type': 'Drug', name: 'L-Theanine' },
  ],
}

// ── Sub-components ────────────────────────────────────────────────────────────
const ScoreBar = ({ label, value, weight }: { label: string; value: number; weight: number }) => (
  <div className="flex items-center gap-2 sm:gap-3 py-3 border-b border-rule last:border-b-0">
    <div className="w-[120px] sm:w-[140px] shrink-0">
      <div className="text-[11px] font-medium uppercase tracking-[0.08em] text-muted leading-tight">{label}</div>
      <div className="text-[10px] text-muted opacity-60 mt-0.5">{weight}% weight</div>
    </div>
    <div className="flex-1 h-[5px] rounded-full overflow-hidden min-w-0" style={{ background: '#E8E1D2' }}>
      <div className="h-full rounded-full"
           style={{ width: `${(value / 10) * 100}%`, background: value >= 8 ? 'linear-gradient(90deg,#1b4332,#52b788)' : 'linear-gradient(90deg,#B95C3A,#e07b5e)' }} />
    </div>
    <span className="font-serif-body text-[18px] w-7 text-right shrink-0" style={{ color: value >= 8 ? '#1b4332' : '#B95C3A' }}>{value}</span>
  </div>
)

const PassBadge = ({ text = 'PASS' }: { text?: string }) => (
  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-moss">
    <span className="w-1.5 h-1.5 rounded-full bg-moss shrink-0" />{text}
  </span>
)

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

// ── Ingredient data ───────────────────────────────────────────────────────────
const ingredients = [
  {
    name: 'L-Citrulline DL-Malate 2:1',
    claimed: '8g', found: '9.2g', accuracy: '115%', overLabel: true,
    clinicalRange: '6–10g citrulline malate · or 4–8g pure L-citrulline',
    form: 'Standard 2:1 — appropriate',
    tier: 'A' as const,
    link: '/ingredients/citrulline-malate',
    assessment: 'Citrulline is a non-essential amino acid that bypasses first-pass hepatic metabolism to convert to arginine in the kidneys — the mechanism by which it raises nitric oxide more effectively than standalone arginine supplementation. The 2:1 malate form (2 parts citrulline, 1 part malic acid) delivers 5.3g pure L-citrulline from an 8g dose. Malic acid participates in the Krebs cycle and may independently reduce fatigue, though the ergogenic benefit is primarily attributed to the citrulline fraction. Labdoor found 9.2g at this lot — 115% of label claim, meaning you are getting the equivalent of 6.1g pure L-citrulline per serving. The primary RCT (Pérez-Guisado & Jakeman, 2010) used 8g citrulline malate and found a 40% reduction in muscle soreness and a significant increase in reps to failure in trained men. This dose is at the high end of what most pre-workouts include.',
    flag: null,
  },
  {
    name: 'Beta-Alanine (CarnoSyn)',
    claimed: '3.6g', found: '3.9g', accuracy: '108%', overLabel: true,
    clinicalRange: '3.2–6.4g/day · requires daily loading for 4–8 weeks',
    form: 'CarnoSyn — trademarked, SR-patented form',
    tier: 'A' as const,
    link: '/ingredients/beta-alanine',
    assessment: 'CarnoSyn is the trademarked form of beta-alanine manufactured by Natural Alternatives International. It holds a sustained-release (SR) patent and has been used in the majority of the published human clinical trials on beta-alanine. This matters because not all beta-alanine is equivalent in research validation — using CarnoSyn specifically means the product can accurately cite the published trial data. The 3.6g dose falls within the effective range established by the Smith-Ryan et al. meta-analysis (2.6–6.4g/day). Labdoor found 3.9g — 8% above label, a genuine quality indicator. The performance benefit (acid buffering via carnosine accumulation) is chronic, not acute — it requires 4–8 weeks of daily use to reach the ~179g muscle carnosine saturation threshold. A single session of Legion Pulse will cause paresthesia (tingling) but will not produce the performance benefit until loading is established.',
    flag: 'Will cause tingling (paresthesia) — significant at 3.6g for first-time users, reduces with daily use over 2–4 weeks',
  },
  {
    name: 'Betaine Anhydrous',
    claimed: '2.5g', found: '2.5g', accuracy: '100%', overLabel: false,
    clinicalRange: '2.5g/day — the exact Cholewa 2013 trial dose',
    form: 'Anhydrous — standard, appropriate',
    tier: 'B' as const,
    link: '/ingredients/betaine-anhydrous',
    assessment: 'Betaine (trimethylglycine) functions as both a methyl donor and an osmolyte. As a methyl donor, it supports homocysteine remethylation to methionine, contributing to creatine biosynthesis and cellular methylation reactions. As an osmolyte, it promotes intracellular hydration, increasing muscle cell volume and mechanical tension. Cholewa et al. (2013) used exactly 2.5g/day and found significant increases in bench press volume and arm cross-sectional area over 6 weeks in resistance-trained men. This is the dose on the label and the dose found by Labdoor (100% accuracy). Legion uses the standard anhydrous form rather than a trademarked variant like BetaPure — functionally equivalent at this dose since the mechanism is not form-dependent, unlike some other ingredients.',
    flag: null,
  },
  {
    name: 'Caffeine Anhydrous',
    claimed: '350mg', found: '380mg', accuracy: '109%', overLabel: true,
    clinicalRange: '200–400mg · ~3–6mg/kg for 70kg user = 210–420mg',
    form: 'Anhydrous only — no sustained-release component',
    tier: 'A' as const,
    link: '/ingredients/caffeine',
    assessment: 'Caffeine is the most evidence-supported ergogenic aid in existence. Its performance-enhancing mechanism operates primarily through adenosine receptor antagonism — blocking the accumulation of adenosine that signals fatigue during exercise — while also mobilising fatty acids, enhancing motor unit recruitment, and raising alertness via central norepinephrine release. At 350mg, this is in the high but well-studied range. Labdoor found 380mg — 9% over label. This is worth noting: if you are monitoring total daily caffeine intake at 400mg (the FDA advisory upper limit), the actual dose from two scoops of Pulse is 380mg, not 350mg. One cup of coffee after training would put you above the advisory threshold. The absence of a sustained-release caffeine source (like Infinergy di-caffeine malate) means the energy curve is steeper — sharper onset, sharper decline — compared to dual-source designs. For most users this is acceptable; for those prone to caffeine crashes, it is the primary formulation limitation.',
    flag: 'Labdoor found 380mg vs 350mg claimed — adjust total daily caffeine budget accordingly. No sustained-release component means a more pronounced crash vs dual-source designs.',
  },
  {
    name: 'L-Theanine',
    claimed: '350mg', found: '410mg', accuracy: '117%', overLabel: true,
    clinicalRange: '100–400mg · 1:1 to 2:1 theanine:caffeine ratio',
    form: 'Standard — appropriate',
    tier: 'A' as const,
    link: '/ingredients/l-theanine',
    assessment: 'L-theanine modulates alpha brain wave activity, promoting a state of calm alertness without sedation. Combined with caffeine, it attenuates the anxiogenic and jitteriness side effects while preserving and potentially enhancing the performance-enhancing properties of caffeine. The landmark Haskell et al. (2008) study used 250mg caffeine + 250mg theanine and found improved speed and accuracy on attention tasks vs caffeine alone. Legion uses a 1:1 ratio (350mg caffeine : 350mg theanine). Labdoor found 410mg theanine — 17% over label. This is the largest over-delivery in the formula. At 410mg theanine to 380mg caffeine (actual found values), the theanine is actually slightly dominant — meaning the formula skews slightly more "calm and focused" than the label suggests. This is not a negative, but it explains why some users find Pulse less "intense" than other 350mg caffeine products.',
    flag: 'Labdoor found 410mg vs 350mg claimed — the actual theanine:caffeine ratio is 1.08:1 (theanine-dominant), making Pulse calmer than the label ratio suggests',
  },
  {
    name: 'Alpha-GPC (50%)',
    claimed: '300mg', found: '317mg', accuracy: '106%', overLabel: true,
    clinicalRange: '300–600mg product (50%) = 150–300mg actual Alpha-GPC',
    form: 'Standard 50% — effective, but not AlphaSize branded',
    tier: 'B' as const,
    link: '/ingredients/alpha-gpc',
    assessment: 'Alpha-GPC (L-alpha-glycerylphosphorylcholine) is the most bioavailable choline source for central nervous system applications. It crosses the blood-brain barrier more effectively than choline bitartrate and supports acetylcholine synthesis — the neurotransmitter that drives neuromuscular junction signalling and is associated with the "mind-muscle connection" in trained lifters. The 50% specification means 300mg of product delivers 150mg of actual alpha-GPC. The Bellar et al. (2015) trial used 600mg Alpha-GPC (which at 50% standardisation would be 300mg actual) and found significant increases in peak power output. Labdoor found 317mg — 6% over label. Legion does not specify a trademarked form (unlike AlphaSize used in BULK Black), which means independent verification of the 50% standardisation is important — and Labdoor\'s finding that 317mg was present vs 300mg claimed provides that verification for this lot.',
    flag: '50% standardised — 300mg product = 150mg actual Alpha-GPC. Effective at this dose for cognitive and neuromuscular benefits',
  },
]

export default function LegionPulseReview() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqItems = [
    { q: 'How much caffeine is in Legion Pulse?', a: '350mg caffeine per full serving (2 scoops). Labdoor lot 2416421 (March 2026) independently found 380mg — 109% of label claim. This is caffeine anhydrous only, no sustained-release component. The FDA\'s daily safe limit for healthy adults is 400mg from all sources combined. At a full serving of Pulse (380mg actual), one cup of coffee would exceed this budget. Legion offers a stimulant-free version of Pulse with the same citrulline, beta-alanine, betaine, and alpha-GPC for those who want the pump and endurance ingredients without the stimulant.' },
    { q: 'Is Legion Pulse Labdoor tested?', a: 'Yes. Lot 2416421 was tested by Labdoor (Catalyst and Eurofins labs, September–October 2025, results released March 22, 2026). Every ingredient was above label claim: citrulline 9.2g vs 8g claimed, caffeine 380mg vs 350mg, theanine 410mg vs 350mg, beta-alanine 3.9g vs 3.6g, alpha-GPC 317mg vs 300mg, betaine exactly 2.5g vs 2.5g claimed. Lead was detected at 0.9μg/serving — below the USP limit of 5μg/serving. All microbiology tests pass. Full report at labdoor.com/review/legion-pulse-pre-workout-drink.' },
    { q: 'Does Legion Pulse cause tingling?', a: 'Yes. The 3.6g beta-alanine (CarnoSyn) dose causes paresthesia — tingling, flushing, prickling — in most users, typically on the face, neck, forearms, and hands. This is a harmless neurological reaction from beta-alanine activating MrgprD receptors on sensory neurons. Labdoor found 3.9g actual, which is slightly above label and will produce noticeable paresthesia. It peaks 15–20 minutes after consumption and lasts 30–60 minutes. The sensation diminishes with daily use as muscle carnosine saturates over 2–4 weeks. Taking with food slightly blunts the onset speed.' },
    { q: 'How does Legion Pulse compare to Transparent Labs BULK Black?', a: 'Both have fully transparent labels and strong third-party testing. Key differences: BULK Black splits caffeine between anhydrous and Infinergy (smoother energy curve); Pulse uses single-source anhydrous at 350mg (sharper onset and decline). Pulse uses a 1:1 caffeine:theanine ratio — actually theanine-dominant at found values (1:1.08). BULK Black scores 9.1 vs Pulse\'s 8.8 on the Fitlab rubric, primarily because of the caffeine stack design and the Alpha-GPC using AlphaSize (trademarked, independently validated). Pulse costs more per serving ($2.75 vs $2.00). Both are the correct answer for users who want verified transparent pre-workouts.' },
    { q: 'Is Legion Pulse worth the price?', a: 'At $2.75/serving (full 2-scoop dose), it is premium. The case for it: Labdoor-verified that every ingredient exceeds label claim, no proprietary blends, no artificial sweeteners or dyes, CarnoSyn beta-alanine, manufacturing in ISO 17025 accredited labs, and 20+ flavors. The case against: single-source caffeine design, no sustained-release caffeine, and $2.75/serving is expensive relative to BULK Black ($2.00). If you are buying a transparent-label pre-workout and want the testing record to confirm it, Pulse earns its price. If value per serving is the priority, BULK Black is a better deal at this quality tier.' },
    { q: 'What is the difference between Legion Pulse and Legion Pulse Stim-Free?', a: 'Stim-Free Pulse removes caffeine and L-theanine, retaining citrulline malate, beta-alanine, betaine, and alpha-GPC. It adds alpha-GPC at 300mg and uses erythritol as a sweetener. Stim-Free Pulse is available in 4 flavors. It is the appropriate choice for evening training sessions, those sensitive to caffeine, or anyone who wants to control their stimulant intake from separate sources. The performance ingredients (citrulline, beta-alanine, betaine) are unchanged and at the same clinical doses.' },
  ]

  return (
    <>
      <JsonLd schema={[productSchema, breadcrumbSchema, faqSchema, articleSchema]} />
      <PageShell crumbs={[
        { label: 'Home', href: '/' },
        { label: 'Reviews', href: '/reviews' },
        { label: 'Pre-Workout', href: '/best/pre-workout' },
        { label: 'Legion Pulse' },
      ]}>

        {/* ═══════════════ HERO ═══════════════ */}
        <section className="py-10 sm:py-14 border-b border-rule">
          <div className="max-w-site mx-auto px-4 sm:px-8 lg:px-14">
            <div className="grid gap-8 lg:grid-cols-[1fr_340px] lg:gap-14 items-start">

              <div className="min-w-0">
                {/* Meta row */}
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 mb-4 text-[11px] sm:text-[12px] text-muted">
                  <span className="uppercase tracking-[0.12em] font-semibold">Legion Athletics</span>
                  <span>·</span>
                  <a href="/best/pre-workout" className="text-clay hover:underline font-medium">Pre-Workout</a>
                  <span>·</span>
                  <span>Reviewed May 2026</span>
                  <span className="inline-flex items-center gap-1 text-moss font-medium ml-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-moss shrink-0" />Labdoor certified · lot 2416421
                  </span>
                </div>

                <h1 className="font-sans font-semibold leading-[1.05] tracking-[-0.03em] text-ink2 mb-3"
                    style={{ fontSize: 'clamp(22px, 3.8vw, 44px)' }}>
                  Legion Pulse Pre-Workout<br className="hidden sm:block" /> Review (2026)
                </h1>
                <p className="text-[15px] sm:text-[18px] text-muted mb-5 leading-[1.5]"
                   style={{ fontFamily: 'var(--font-serif, Georgia, serif)', fontStyle: 'italic' }}>
                  6 ingredients · Labdoor lot tested March 2026 · every dose above label
                </p>

                {/* Bottom line */}
                <div className="p-4 sm:p-5 rounded-[14px] mb-5 border"
                     style={{ background: '#1b433208', borderColor: '#1b433228' }}>
                  <div className="text-[10px] tracking-[0.2em] uppercase font-semibold mb-2" style={{ color: '#1b4332' }}>Bottom line</div>
                  <p className="text-[13.5px] sm:text-[14.5px] leading-[1.7] text-ink3 m-0">
                    Labdoor found every ingredient above its label claim — citrulline malate 9.2g vs 8g, caffeine 380mg vs 350mg,
                    theanine 410mg vs 350mg. The 6-ingredient formula is genuinely clinically dosed with no proprietary blends.
                    The main limitation is the single-source caffeine design at 350mg, which produces a sharper energy curve
                    than dual-source alternatives. At $2.75/serving, it is the premium option in this transparency tier —
                    justified by the testing record, not by hype.
                  </p>
                </div>

                {/* Key stat chips */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-5">
                  {[
                    { label: 'Fitlab Score', val: `${SCORE} / 10`, hi: true },
                    { label: 'Caffeine (found)', val: '380mg' },
                    { label: 'Citrulline (found)', val: '9.2g' },
                    { label: 'Price / serving', val: '$2.75' },
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
                  {['350mg caffeine anhydrous', 'Labdoor certified', 'CarnoSyn beta-alanine', 'No proprietary blends', 'No artificial sweeteners', '20+ flavors', 'Stim-free version available'].map(t => (
                    <span key={t} className="text-[11px] sm:text-[12px] bg-paper2 border border-rule text-ink3 rounded-full px-3 py-1">{t}</span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href={AFFILIATE_URL} target="_blank" rel="nofollow sponsored"
                     className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[14px] font-medium bg-clay text-white hover:bg-clayd transition-all">
                    Check price on Amazon →
                  </a>
                  <a href={LABDOOR_PDF} target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[13px] font-medium bg-paper3 text-ink2 border border-rule hover:border-clay transition-all">
                    View Labdoor report (PDF) ↗
                  </a>
                </div>
              </div>

              {/* Score card */}
              <div className="bg-paper3 border border-rule rounded-[14px] overflow-hidden w-full">
                {/* Product image */}
                <div className="border-b border-rule" style={{ aspectRatio: '4/3', background: 'linear-gradient(135deg,#0d1b12 0%,#1a3a22 60%,#0a1a10 100%)' }}>
                  <img
                    src={PRODUCT_IMG}
                    alt="Legion Pulse Pre-Workout tub — Fruit Punch flavor, 20 servings per container"
                    title="Legion Pulse Pre-Workout by Legion Athletics"
                    width="360" height="270" loading="eager"
                    className="w-full h-full object-contain p-4"
                    onError={e => { (e.currentTarget as HTMLImageElement).style.opacity = '0' }}
                  />
                </div>

                <div className="p-4 sm:p-5">
                  {/* Score */}
                  <div className="text-center pb-4 mb-4 border-b border-rule">
                    <div className="text-[11px] tracking-[0.18em] uppercase text-muted mb-1">Fitlab Score</div>
                    <div className="font-serif-display leading-none" style={{ fontSize: '62px', color: '#1b4332', fontVariationSettings: '"opsz" 96' }}>{SCORE}</div>
                    <div className="text-[12px] text-muted mt-1">out of 10 · <a href="/scoring-rubric" className="text-clay hover:underline">rubric v3.1</a></div>
                  </div>
                  {/* Rubric bars */}
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
                      { l: 'Serving size',       v: '2 scoops (25g)' },
                      { l: 'Caffeine',            v: '350mg claimed · 380mg found' },
                      { l: 'Citrulline malate',   v: '8g claimed · 9.2g found' },
                      { l: 'Certification',       v: 'Labdoor (lot 2416421, Mar 2026)' },
                      { l: 'Lab',                 v: 'Catalyst + Eurofins · ISO 17025' },
                      { l: 'Sweetener',           v: 'Erythritol + stevia · no artificial' },
                      { l: 'Flavors',             v: '20+ (caffeinated) · 4 (stim-free)' },
                      { l: 'Price',               v: '~$54.99 / 20 servings' },
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

        {/* ═══ RUBRIC ═══ */}
        <section className="py-7 sm:py-9 border-b border-rule bg-paper2">
          <div className="max-w-site mx-auto px-4 sm:px-8 lg:px-14">
            <div className="flex flex-wrap gap-3 items-center justify-between mb-3">
              <div className="text-[10px] tracking-[0.18em] uppercase text-muted font-semibold">Rubric breakdown — why 8.8</div>
              <a href="/scoring-rubric" className="text-[12px] text-clay hover:underline">Rubric v3.1 →</a>
            </div>
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-0">
              <div>
                <ScoreBar label="Clinical dose"   value={SCORES.clinicalDose}   weight={25} />
                <ScoreBar label="Ingredient form" value={SCORES.ingredientForm} weight={20} />
                <ScoreBar label="Lab purity"      value={SCORES.purity}         weight={20} />
              </div>
              <div>
                <ScoreBar label="Value / gram"  value={SCORES.value}        weight={20} />
                <ScoreBar label="Label honesty" value={SCORES.labelHonesty} weight={15} />
              </div>
            </div>
            <p className="text-[11.5px] text-muted mt-3">
              Value/gram (8.0) is the limiting factor at $2.75/serving. Ingredient form (8.8) docks slightly for single-source caffeine anhydrous only — no sustained-release component. All other criteria are category-leading.
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
                ['Labdoor test results', '#labdoor'],
                ['All 6 ingredients', '#ingredients'],
                ['Caffeine analysis', '#caffeine'],
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

        {/* ═══════════════ MAIN CONTENT ═══════════════ */}
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
                        style={{ fontSize: 'clamp(18px, 3vw, 26px)' }}>Why Legion Pulse earns a different kind of review</h2>
                  </div>
                </div>
                <p className="text-[14.5px] sm:text-[15px] leading-[1.85] text-ink3 mb-4">
                  Legion Athletics was founded in 2014 with a specific stated goal: evidence-based formulas with full label transparency and no proprietary blends. Pulse is their flagship pre-workout and has been independently Labdoor-certified across multiple lots. This review uses the most recent lot test — lot 2416421, tested September through October 2025, results released March 22, 2026 — as the primary data source, supplemented by ingredient-level clinical literature.
                </p>
                <p className="text-[14.5px] sm:text-[15px] leading-[1.85] text-ink3 mb-4">
                  What distinguishes Pulse from most competitors is not just the disclosed label — it is that the Labdoor testing consistently finds every ingredient at or above label claim. In a market where under-delivery is the norm (Labdoor's own 2020 analysis of 45 pre-workouts found most under-dosed their non-caffeine ergogenic ingredients), over-delivering across 6 ingredients in the same lot is a meaningful quality signal.
                </p>
                <p className="text-[14.5px] sm:text-[15px] leading-[1.85] text-ink3">
                  This review covers: the complete Labdoor lot data with interpretation, each ingredient against its primary clinical trial, the caffeine design (and its one genuine limitation), real-world use, and pharmacist-level drug interaction notes. No samples were received. Affiliate link generates commission — see our <a href="/conflicts-policy" className="text-clay hover:underline">conflicts policy</a>.
                </p>
              </section>

              {/* ════ LABDOOR TEST RESULTS ════ */}
              <section id="labdoor" className="mb-12 sm:mb-16">
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-1 self-stretch rounded-full shrink-0" style={{ background: '#1b4332', minHeight: '20px' }} />
                  <div>
                    <div className="text-[10px] tracking-[0.18em] uppercase text-clay font-semibold mb-1">Independent lab data</div>
                    <h2 className="font-sans font-semibold text-ink2 leading-[1.18] tracking-[-0.025em]"
                        style={{ fontSize: 'clamp(18px, 3vw, 26px)' }}>Labdoor lot 2416421 — the actual numbers</h2>
                  </div>
                </div>

                <p className="text-[14.5px] sm:text-[15px] leading-[1.85] text-ink3 mb-5">
                  Lot 2416421 (expiry 04/2027) was tested by Labdoor across two accredited laboratories — Catalyst and Eurofins — between September and October 2025. Released March 22, 2026. Here is every result.
                </p>

                {/* Accuracy table */}
                <div className="rounded-[14px] border border-rule overflow-hidden mb-4">
                  <div className="px-4 sm:px-5 py-3 flex items-center gap-2.5 border-b border-rule"
                       style={{ background: '#1b433210' }}>
                    <span className="w-2 h-2 rounded-full bg-moss shrink-0" />
                    <span className="font-semibold text-[13px] sm:text-[14px] text-ink2">Accuracy — PASS · all ingredients above label claim</span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-[13px]" style={{ minWidth: '420px' }}>
                      <thead>
                        <tr className="border-b border-rule bg-paper2">
                          <th className="text-left text-muted font-medium py-2.5 px-4">Ingredient</th>
                          <th className="text-right text-muted font-medium py-2.5 px-4">Claimed</th>
                          <th className="text-right text-muted font-medium py-2.5 px-4">Found</th>
                          <th className="text-right text-muted font-medium py-2.5 px-4">Accuracy</th>
                          <th className="text-right text-muted font-medium py-2.5 px-4">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-rule">
                        {[
                          { name: 'L-Citrulline DL-Malate 2:1', claimed: '8g', found: '9.2g', pct: '115%' },
                          { name: 'Beta-Alanine', claimed: '3.6g', found: '3.9g', pct: '108%' },
                          { name: 'Betaine Anhydrous', claimed: '2.5g', found: '2.5g', pct: '100%' },
                          { name: 'Caffeine Anhydrous', claimed: '350mg', found: '380mg', pct: '109%' },
                          { name: 'L-Theanine', claimed: '350mg', found: '410mg', pct: '117%' },
                          { name: 'Alpha-GPC (50%)', claimed: '300mg', found: '317mg', pct: '106%' },
                        ].map(row => (
                          <tr key={row.name}>
                            <td className="py-3 px-4 font-medium text-ink2">{row.name}</td>
                            <td className="py-3 px-4 text-right text-muted">{row.claimed}</td>
                            <td className="py-3 px-4 text-right font-semibold text-clay">{row.found}</td>
                            <td className="py-3 px-4 text-right font-medium text-moss">{row.pct}</td>
                            <td className="py-3 px-4 text-right"><PassBadge /></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="px-4 sm:px-5 py-3 border-t border-rule bg-paper2">
                    <p className="text-[11.5px] text-muted">Serving size: 2 scoops (25g) · Lot 2416421 · Expiry 04/2027 · Tested Sep–Oct 2025 · Released March 22, 2026</p>
                  </div>
                </div>

                {/* Heavy metals table */}
                <div className="rounded-[14px] border border-rule overflow-hidden mb-4">
                  <div className="px-4 sm:px-5 py-3 flex items-center gap-2.5 border-b border-rule"
                       style={{ background: '#1b433210' }}>
                    <span className="w-2 h-2 rounded-full bg-moss shrink-0" />
                    <span className="font-semibold text-[13px] sm:text-[14px] text-ink2">Heavy metals — PASS</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4">
                    {[
                      { metal: 'Arsenic', limit: '15 μg', result: 'Undetected', warn: false },
                      { metal: 'Cadmium', limit: '5 μg', result: 'Undetected', warn: false },
                      { metal: 'Mercury', limit: '15 μg', result: 'Undetected', warn: false },
                      { metal: 'Lead', limit: '5 μg', result: '0.9 μg', warn: true },
                    ].map((item, i) => (
                      <div key={item.metal}
                           className={`px-4 py-4 ${i < 2 ? 'border-b sm:border-b-0 border-rule' : ''} ${i % 2 === 0 ? 'border-r border-rule' : ''} sm:border-r sm:last:border-r-0`}>
                        <div className="text-[11px] tracking-[0.1em] uppercase text-muted mb-1">{item.metal}</div>
                        <div className={`font-semibold text-[14px] ${item.warn ? 'text-amber-600' : 'text-moss'}`}>{item.result}</div>
                        <div className="text-[11px] text-muted mt-0.5">USP limit {item.limit}/serving</div>
                      </div>
                    ))}
                  </div>
                  <div className="px-4 sm:px-5 py-3 border-t border-rule">
                    <div className="flex gap-2.5">
                      <span className="text-[13px] font-semibold text-amber-600 shrink-0">!</span>
                      <p className="text-[12.5px] text-ink3 leading-[1.6] m-0">
                        <strong className="text-ink2">Lead at 0.9 μg/serving</strong> — detected but well within the USP daily limit of 5 μg/serving.
                        At 4 servings/day maximum, total lead exposure would be 3.6μg — still within the 5μg USP daily limit.
                        This is consistent with trace levels found in plant-sourced ingredients and is not a safety concern at this concentration.
                        Worth monitoring across future lot tests.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Microbiology */}
                <div className="rounded-[14px] border border-rule overflow-hidden mb-5">
                  <div className="px-4 sm:px-5 py-3 flex items-center gap-2.5 border-b border-rule"
                       style={{ background: '#1b433210' }}>
                    <span className="w-2 h-2 rounded-full bg-moss shrink-0" />
                    <span className="font-semibold text-[13px] sm:text-[14px] text-ink2">Microbiology — PASS (all tests)</span>
                  </div>
                  <div className="divide-y divide-rule">
                    {[
                      ['Total Plate Count', '<100 cfu/g', '≤ 1,000 limit'],
                      ['Yeast / Mold', '<10 cfu/g', '≤ 100 limit'],
                      ['Coliforms', '<10 cfu/g', '—'],
                      ['E. Coli', '<10 cfu/g', '—'],
                      ['Staphylococcus aureus', '<10 cfu/g', '—'],
                      ['Salmonella', 'Undetected', '—'],
                      ['Shigella', 'Undetected', '—'],
                    ].map(([test, found, limit]) => (
                      <div key={test} className="flex items-center justify-between px-4 sm:px-5 py-2.5 gap-3">
                        <div>
                          <span className="text-[13px] font-medium text-ink2">{test}</span>
                          <span className="text-[11px] text-muted ml-2">{limit}</span>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="text-[13px] font-semibold text-moss">{found}</span>
                          <PassBadge />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  <p className="text-[11.5px] text-muted">Source: Labdoor · Released March 22, 2026 · Catalyst + Eurofins laboratories</p>
                  <a href={LABDOOR_PDF} target="_blank" rel="noopener noreferrer"
                     className="text-[12.5px] text-clay font-medium hover:underline shrink-0">Full Labdoor report PDF →</a>
                </div>
              </section>

              {/* ════ INGREDIENT ANALYSIS ════ */}
              <section id="ingredients" className="mb-12 sm:mb-16">
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-1 self-stretch rounded-full shrink-0" style={{ background: '#1b4332', minHeight: '20px' }} />
                  <div>
                    <div className="text-[10px] tracking-[0.18em] uppercase text-clay font-semibold mb-1">Clinical dose audit</div>
                    <h2 className="font-sans font-semibold text-ink2 leading-[1.18] tracking-[-0.025em]"
                        style={{ fontSize: 'clamp(18px, 3vw, 26px)' }}>All 6 ingredients — label vs found vs clinical evidence</h2>
                  </div>
                </div>
                <p className="text-[14px] text-muted mb-6">
                  Each ingredient is assessed against its primary published RCT and systematic review using the actual Labdoor-found doses, not label claims.
                  Evidence tiers: <span className="font-semibold text-moss">A</span> = strong RCT evidence, <span className="font-semibold text-amber-600">B</span> = good evidence with some gaps.
                </p>

                <div className="space-y-3">
                  {ingredients.map((ing, i) => {
                    const tierC = ing.tier === 'A' ? { bg: '#1b433218', c: '#1b4332' } : { bg: '#2d6a4f18', c: '#2d6a4f' }
                    return (
                      <div key={i} className="border border-rule rounded-[14px] overflow-hidden">
                        <div className="px-4 sm:px-5 py-3 bg-paper3 border-b border-rule">
                          <div className="flex flex-wrap items-start justify-between gap-2 mb-1.5">
                            <div className="flex flex-wrap items-center gap-2 min-w-0">
                              <span className="font-semibold text-[14px] text-ink2">{ing.name}</span>
                              <span className="text-[11px] font-semibold tracking-[0.06em] uppercase rounded-full px-2 py-0.5 shrink-0"
                                    style={{ background: tierC.bg, color: tierC.c }}>Tier {ing.tier}</span>
                              <a href={ing.link} className="text-[11px] text-clay hover:underline font-medium shrink-0">Guide →</a>
                            </div>
                            <span className="text-[11px] font-semibold rounded-full px-2.5 py-1 shrink-0"
                                  style={{ background: '#1b433215', color: '#1b4332' }}>{ing.form}</span>
                          </div>
                          {/* Claimed vs Found visual */}
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px]">
                            <span className="text-muted">Claimed: <span className="font-medium text-ink2">{ing.claimed}</span></span>
                            <span className="text-muted">Found: <span className="font-semibold text-clay">{ing.found}</span></span>
                            <span className="font-semibold text-moss">{ing.accuracy}</span>
                            <span className="text-muted">Clinical range: <span className="text-ink3">{ing.clinicalRange}</span></span>
                          </div>
                        </div>
                        <div className="px-4 sm:px-5 py-4">
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

              {/* ════ CAFFEINE ANALYSIS ════ */}
              <section id="caffeine" className="mb-12 sm:mb-16">
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-1 self-stretch rounded-full shrink-0" style={{ background: '#1b4332', minHeight: '20px' }} />
                  <div>
                    <div className="text-[10px] tracking-[0.18em] uppercase text-clay font-semibold mb-1">Caffeine design</div>
                    <h2 className="font-sans font-semibold text-ink2 leading-[1.18] tracking-[-0.025em]"
                        style={{ fontSize: 'clamp(18px, 3vw, 26px)' }}>The caffeine-theanine relationship — what the found values mean</h2>
                  </div>
                </div>

                <p className="text-[14.5px] sm:text-[15px] leading-[1.85] text-ink3 mb-5">
                  The caffeine architecture in Pulse is different from BULK Black and deserves a specific discussion. Not because it is worse — but because the pharmacokinetic consequences affect who this product is best suited for.
                </p>

                <div className="rounded-[14px] border border-rule overflow-hidden mb-5">
                  <div className="px-4 sm:px-5 py-3 bg-paper2 border-b border-rule">
                    <span className="text-[11px] tracking-[0.14em] uppercase text-muted font-semibold">Caffeine + theanine — label claim vs Labdoor found values</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-rule">
                    <div className="px-4 sm:px-5 py-4">
                      <div className="text-[11px] text-muted uppercase tracking-[0.1em] mb-2">Caffeine Anhydrous</div>
                      <div className="flex items-end gap-2 mb-2">
                        <span className="font-serif-body text-[36px] leading-none" style={{ color: '#1b4332' }}>380mg</span>
                        <span className="text-[13px] text-muted mb-1">found · 109% of label</span>
                      </div>
                      <div className="h-2 rounded-full overflow-hidden mb-2" style={{ background: '#E8E1D2' }}>
                        <div className="h-full rounded-full" style={{ width: '95%', background: '#1b4332' }} />
                      </div>
                      <p className="text-[12.5px] text-ink3 leading-[1.6]">
                        Fast-release anhydrous only. Peak plasma at 30–45 min. Half-life 3–7 hours.
                        Sharper onset and more pronounced decline than dual-source designs.
                      </p>
                    </div>
                    <div className="px-4 sm:px-5 py-4">
                      <div className="text-[11px] text-muted uppercase tracking-[0.1em] mb-2">L-Theanine</div>
                      <div className="flex items-end gap-2 mb-2">
                        <span className="font-serif-body text-[36px] leading-none" style={{ color: '#52b788' }}>410mg</span>
                        <span className="text-[13px] text-muted mb-1">found · 117% of label</span>
                      </div>
                      <div className="h-2 rounded-full overflow-hidden mb-2" style={{ background: '#E8E1D2' }}>
                        <div className="h-full rounded-full" style={{ width: '100%', background: '#52b788' }} />
                      </div>
                      <p className="text-[12.5px] text-ink3 leading-[1.6]">
                        At found values: 410mg theanine vs 380mg caffeine — ratio is 1.08:1 theanine-dominant.
                        More calming than a 1:2 caffeine:theanine product. Explains Pulse's "smooth" reputation.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="p-4 bg-paper2 border border-rule rounded-[12px]">
                    <h3 className="font-semibold text-[14px] text-ink2 mb-2">Why single-source caffeine matters</h3>
                    <p className="text-[13.5px] leading-[1.7] text-ink3 m-0">
                      Caffeine anhydrous alone produces a faster plasma concentration peak than di-caffeine malate blends.
                      This creates a more pronounced energy curve — faster onset, but also a clearer "drop" when plasma concentration
                      falls below the adenosine-blocking threshold at 3–5 hours. Many users describe this as a "crash." With 350mg
                      anhydrous (380mg actual), the crash risk is real, particularly for users not accustomed to high caffeine doses.
                      The 410mg theanine at found values significantly attenuates this — but does not eliminate it.
                    </p>
                  </div>
                  <div className="p-4 bg-paper2 border border-rule rounded-[12px]">
                    <h3 className="font-semibold text-[14px] text-ink2 mb-2">The total caffeine budget note</h3>
                    <p className="text-[13.5px] leading-[1.7] text-ink3 m-0">
                      Labdoor found 380mg caffeine, not 350mg. For users monitoring daily caffeine against the FDA's 400mg
                      advisory upper limit, the actual budget remaining after a full serving of Pulse is 20mg — not 50mg.
                      One small espresso (approximately 60mg caffeine) would put you above the advisory threshold.
                      This is not a disqualifying finding, but it is information the label does not give you and the Labdoor
                      data does.
                    </p>
                  </div>
                </div>
              </section>

              {/* ════ REAL WORLD ════ */}
              <section id="real-world" className="mb-12 sm:mb-16">
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-1 self-stretch rounded-full shrink-0" style={{ background: '#1b4332', minHeight: '20px' }} />
                  <div>
                    <div className="text-[10px] tracking-[0.18em] uppercase text-clay font-semibold mb-1">In practice</div>
                    <h2 className="font-sans font-semibold text-ink2 leading-[1.18] tracking-[-0.025em]"
                        style={{ fontSize: 'clamp(18px, 3vw, 26px)' }}>Real-world use</h2>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { title: 'Onset and energy profile', body: 'Energy onset at 20–30 minutes — fast, given the anhydrous-only design. Clean, alert feeling without jitteriness at the 380mg actual dose, which is attributable to the 410mg theanine found by Labdoor. Peak stimulation at 45–60 minutes. The energy sustains well into hour two, then does decline more noticeably than dual-source caffeine products at the 3–4 hour mark. For 60–90 minute training sessions, this is not a meaningful limitation. For longer sessions or evening gym-goers, it is.' },
                    { title: 'Pumps — what 9.2g citrulline feels like', body: 'The pump effect is pronounced and objective. Labdoor found 9.2g citrulline malate vs 8g claimed — equivalent to 6.1g pure L-citrulline at the 2:1 ratio. In the 4–8 week range of daily use where beta-alanine carnosine loading also accumulates, the combination of citrulline-driven vasodilation and beta-alanine acid buffering produces measurably better training density — more reps before failure, reduced muscular burning sensation during high-rep sets. These are the exact outcomes the primary trials for both ingredients demonstrate.' },
                    { title: 'Taste and flavor range', body: 'Legion offers 20+ flavors in the caffeinated version. This is the most meaningful value differentiator vs competitors like BULK Black (one flavor only). Fruit Punch is the most reviewed — described consistently as clean-tasting without the chemical aftertaste common in artificially sweetened products. Erythritol and stevia are the sweeteners used. Some users find the stevia aftertaste noticeable in lighter flavors; the fruit-forward varieties mask it effectively.' },
                    { title: 'Mixability', body: 'Mixes easily in 400–500ml cold water, no clumps. The 25g serving size is substantial but dissolves completely within 15–20 seconds in a shaker. Slight natural coloring from the ingredients (varies by flavor). Some flavors have a slightly thicker texture from the erythritol content.' },
                    { title: 'Stim-free version — the underrated option', body: 'Legion Pulse Stim-Free retains citrulline malate, beta-alanine, betaine, and alpha-GPC at the same doses, removes caffeine and theanine, and adds erythritol as a primary sweetener. It is available in 4 flavors. For users who train in the evening, have cardiovascular conditions, or take prescription stimulants, this is the appropriate version. The pump and endurance benefits are preserved entirely. Most pre-workout brands do not offer this at full clinical doses — the fact that Legion does is a genuine product differentiation.' },
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
                      <span className="text-[11px] tracking-[0.14em] uppercase font-semibold" style={{ color: '#1b4332' }}>What earns the 8.8</span>
                    </div>
                    <ul className="divide-y divide-rule list-none p-0 m-0">
                      {[
                        'Labdoor found every ingredient above label claim — across all 6 actives',
                        'Citrulline malate 9.2g found — above even the 8g clinical-range ceiling',
                        'CarnoSyn beta-alanine — the research-validated trademarked form',
                        'Betaine exactly 2.5g — matches the Cholewa 2013 primary trial dose',
                        'Theanine-dominant at found values (410mg theanine, 380mg caffeine) — calmer than label suggests',
                        'No proprietary blends — every ingredient disclosed in exact mg',
                        'Labdoor certified, ISO 17025 accredited lab manufacturing',
                        'No artificial sweeteners, colors, or dyes — erythritol + stevia only',
                        '20+ flavors — the widest range at this quality tier',
                        'Stim-free version at full clinical doses — rare in this category',
                        '467 published studies cited on product page — exceptional scientific citation',
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
                        '$2.75/serving — more expensive than BULK Black ($2.00) for similar quality',
                        'Single-source caffeine anhydrous — sharper energy drop vs dual-source designs',
                        'Lead detected at 0.9μg/serving — within USP limit, but detectable',
                        '350mg caffeine (380mg actual) — not a beginner product',
                        'Beta-alanine tingling significant at 3.9g found — can be intense for new users',
                        'No sustained-release caffeine (Infinergy or equivalent)',
                        'Only 20 servings per bag at full dose — not 30',
                        'Erythritol causes GI distress in some users at higher doses',
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
                        style={{ fontSize: 'clamp(18px, 3vw, 26px)' }}>Who should and shouldn't use Legion Pulse</h2>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[14px] overflow-hidden border" style={{ borderColor: '#1b433228' }}>
                    <div className="px-4 py-3 border-b" style={{ background: '#1b433210', borderColor: '#1b433228' }}>
                      <span className="font-semibold text-[13px]" style={{ color: '#1b4332' }}>Designed for</span>
                    </div>
                    <ul className="divide-y divide-rule list-none p-0 m-0">
                      {[
                        ['Experienced stimulant users', 'Tolerance established for 350mg+ caffeine'],
                        ['Flavor variety seekers', '20+ options; widest range at this quality tier'],
                        ['Label verification buyers', 'Labdoor data confirms every dose above claim'],
                        ['Morning or midday training', 'Caffeine timing before 2pm avoids sleep disruption'],
                        ['Endurance + strength hybrid sessions', 'Citrulline + beta-alanine combination is ideal'],
                        ['Evening training (stim-free version)', 'Full clinical doses, zero caffeine'],
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
                        ['First-time pre-workout users', 'Start with half scoop; build tolerance first'],
                        ['Budget-priority buyers', 'BULK Black is $0.75 cheaper per serving at same tier'],
                        ['Those prone to caffeine crashes', 'Single-source anhydrous creates sharper drop'],
                        ['Cardiac patients or antihypertensive users', 'See pharmacist note'],
                        ['Erythritol-sensitive users', 'Can cause GI distress at higher doses'],
                        ['Users wanting creatine in pre-workout', 'Legion recommends post-workout creatine separately'],
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
                  The interaction profile of Pulse is predominantly driven by its 350mg caffeine content (380mg actual per Labdoor).
                  The ergogenic ingredients — citrulline, beta-alanine, betaine — have a benign pharmacological interaction profile at these doses in healthy adults.
                </p>
                <div className="space-y-3">
                  {[
                    { level: 'Avoid', color: '#DC2626', bg: '#FEF2F2', border: '#FECACA',
                      condition: 'Antihypertensives + cardiac medications',
                      note: '350–380mg caffeine acutely raises systolic BP 8–10 mmHg and heart rate 5–12 bpm. This directly counteracts the mechanism of antihypertensive medications. Beta-blockers in particular may have their heart rate-lowering effect partially offset by caffeine. Patients on any cardiovascular medication should consult their prescriber before use. The stim-free version of Pulse is the appropriate alternative.' },
                    { level: 'Avoid', color: '#DC2626', bg: '#FEF2F2', border: '#FECACA',
                      condition: 'MAOIs (phenelzine, tranylcypromine, selegiline)',
                      note: 'Caffeine in high doses potentiates sympathomimetic effects that MAOIs amplify by preventing catecholamine breakdown. The combination risks hypertensive crisis. L-tyrosine is not in Pulse, which reduces (but does not eliminate) the concern vs products with higher tyramine content.' },
                    { level: 'Avoid', color: '#DC2626', bg: '#FEF2F2', border: '#FECACA',
                      condition: 'Pregnancy',
                      note: '380mg actual caffeine per Labdoor exceeds the recommended 200mg/day maximum during pregnancy nearly twofold. Not appropriate during pregnancy at the full dose.' },
                    { level: 'Caution', color: '#D97706', bg: '#FFFBEB', border: '#FDE68A',
                      condition: 'Prescription stimulants (Adderall, Ritalin, modafinil)',
                      note: 'Stacking 380mg caffeine with CNS stimulant medications produces additive cardiovascular load. Palpitations, tachycardia, and elevated blood pressure are real risks. Not recommended without physician guidance.' },
                    { level: 'Caution', color: '#D97706', bg: '#FFFBEB', border: '#FDE68A',
                      condition: 'Warfarin (and other anticoagulants)',
                      note: 'High-dose caffeine can interact with warfarin pharmacokinetics, and erythritol has not been studied for anticoagulant interactions. Citrulline and betaine are low-risk. Overall interaction probability is low but warrants monitoring if on anticoagulation.' },
                    { level: 'Note', color: '#1D4ED8', bg: '#EFF6FF', border: '#BFDBFE',
                      condition: 'Erythritol sensitivity',
                      note: 'Erythritol is a sugar alcohol that causes GI distress (bloating, cramping, osmotic diarrhea) at higher doses in susceptible individuals. Two scoops of Pulse contains a meaningful amount of erythritol. If you experience GI issues with sugar alcohol-containing foods, start with half a scoop.' },
                    { level: 'Note', color: '#1D4ED8', bg: '#EFF6FF', border: '#BFDBFE',
                      condition: 'CYP1A2 slow metabolisers',
                      note: 'Approximately 5–10% of people carry CYP1A2 loss-of-function variants, extending caffeine half-life to 10–15 hours. At 380mg caffeine (found value), slow metabolisers may experience stimulation well into the following morning after a late afternoon dose. If you are caffeine-sensitive, start with one scoop.' },
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
                  Educational — not a substitute for advice from your prescribing physician or pharmacist with your complete medical history.
                </p>
              </section>

              {/* ════ ALTERNATIVES ════ */}
              <section id="alternatives" className="mb-12 sm:mb-16">
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-1 self-stretch rounded-full shrink-0" style={{ background: '#1b4332', minHeight: '20px' }} />
                  <div>
                    <div className="text-[10px] tracking-[0.18em] uppercase text-clay font-semibold mb-1">Head-to-head</div>
                    <h2 className="font-sans font-semibold text-ink2 leading-[1.18] tracking-[-0.025em]"
                        style={{ fontSize: 'clamp(18px, 3vw, 26px)' }}>How Pulse compares</h2>
                  </div>
                </div>
                <div className="space-y-3 mb-5">
                  {[
                    { name: 'Legion Pulse', subtitle: 'This review', score: 8.8, caffeine: '350mg anhydrous', citrulline: '8g (9.2g found)', cert: 'Labdoor certified', price: '$54.99/20', flavors: '20+', current: true, verdict: 'Every ingredient above label. Best flavor range at this tier. Single-source caffeine is the one design limitation.', slug: '' },
                    { name: 'TL BULK Black', subtitle: 'Top-rated', score: 9.1, caffeine: '350mg (split)', citrulline: '8g', cert: 'Informed Choice + COA', price: '$59.99/30', flavors: '1', current: false, verdict: 'Split caffeine design (smoother). AlphaSize Alpha-GPC. More economical per serving. One flavor only.', slug: '/reviews/transparent-labs-bulk-black-review' },
                    { name: 'Legion Pulse Stim-Free', subtitle: 'No caffeine', score: null, caffeine: '0mg', citrulline: '8g', cert: 'Labdoor certified', price: '~$44.99/20', flavors: '4', current: false, verdict: 'Same citrulline, beta-alanine, betaine, alpha-GPC doses. For evening training or caffeine-sensitive users.', slug: '' },
                    { name: 'C4 Original', subtitle: 'Budget option', score: 6.2, caffeine: '150mg', citrulline: '1g (arginine AKG)', cert: 'None public', price: '$29.99/30', flavors: '20+', current: false, verdict: 'Citrulline at 1g is below the 6g minimum effective dose. Caffeine significantly under-dosed vs Pulse. Popular but clinically weak.', slug: '' },
                  ].map(({ name, score, caffeine, citrulline, cert, price, flavors, current, verdict, slug }) => (
                    <div key={name} className={`rounded-[14px] border overflow-hidden ${current ? 'border-clay/40' : 'border-rule'}`}
                         style={current ? { background: '#1b433206' } : {}}>
                      <div className={`px-4 py-3 border-b flex items-center justify-between gap-3 flex-wrap ${current ? 'border-clay/20' : 'border-rule'}`}
                           style={current ? { background: '#1b433210' } : { background: '#F8F5EF' }}>
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="font-semibold text-[13.5px] text-ink2 truncate">{name}</span>
                          {current && <span className="text-[10px] font-semibold uppercase text-white rounded-full px-2 py-0.5 shrink-0" style={{ background: '#1b4332' }}>This review</span>}
                        </div>
                        {score !== null && (
                          <div className="flex items-center gap-1.5 shrink-0">
                            <span className="font-serif-body text-[20px]" style={{ color: score >= 9 ? '#1b4332' : score >= 8 ? '#2d6a4f' : '#B95C3A' }}>{score}</span>
                            <span className="text-[11px] text-muted">/ 10</span>
                          </div>
                        )}
                      </div>
                      <div className="px-4 py-3">
                        <div className="flex flex-wrap gap-x-4 gap-y-1 mb-2 text-[12px] text-muted">
                          <span>Caffeine: <span className="font-medium text-ink2">{caffeine}</span></span>
                          <span>Citrulline: <span className="font-medium text-ink2">{citrulline}</span></span>
                          <span>Cert: <span className={`font-medium ${cert !== 'None public' ? 'text-moss' : 'text-amber-600'}`}>{cert}</span></span>
                          <span>Price: <span className="font-medium text-ink2">{price}</span></span>
                          <span>Flavors: <span className="font-medium text-ink2">{flavors}</span></span>
                        </div>
                        <p className="text-[13px] text-ink3 leading-[1.55] mb-3">{verdict}</p>
                        <div className="flex gap-2.5">
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
                  Full comparisons at <a href="/compare" className="text-clay hover:underline">/compare</a>.
                  Complete pre-workout rankings at <a href="/best/pre-workout" className="text-clay hover:underline">/best/pre-workout</a>.
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
                  All clinical dose thresholds, mechanism claims, and ingredient assessments are based on the following peer-reviewed sources.
                </p>
                <ol className="space-y-4 list-decimal list-inside">
                  {[
                    { ref: 'Pérez-Guisado J, Jakeman PM. Citrulline malate enhances athletic anaerobic performance and relieves muscle soreness.', journal: 'J Strength Cond Res. 2010;24(5):1215-22.', pmid: '20386132', note: 'Primary 8g citrulline malate RCT — 40% reduction in muscle soreness, significant increase in reps to failure' },
                    { ref: 'Hobson RM, Saunders B, Ball G, Harris RC, Sale C. Effects of beta-alanine supplementation on exercise performance: a meta-analysis.', journal: 'Amino Acids. 2012;43(1):25-37.', pmid: '22270875', note: 'Meta-analysis of beta-alanine — significant improvements in exercise lasting 60–240 seconds at 3.2–6.4g/day' },
                    { ref: 'Cholewa JM, Wyszczelska-Rokiel M, Glowacki R, et al. Effects of betaine on body composition, performance, and homocysteine thiolactone.', journal: 'J Int Soc Sports Nutr. 2013;10(1):39.', pmid: '23967897', note: 'Benchmark betaine RCT — exactly 2.5g/day, 6 weeks: increased bench press volume and arm size vs placebo' },
                    { ref: 'Grgic J, Trexler ET, Lazinica B, Pedisic Z. Effects of caffeine intake on muscle strength and power: a systematic review and meta-analysis.', journal: 'J Int Soc Sports Nutr. 2018;15:11.', pmid: '29527137', note: 'Caffeine meta-analysis — significant improvements in muscle strength and power; 3–6mg/kg effective dose range' },
                    { ref: 'Haskell CF, Kennedy DO, Milne AL, Wesnes KA, Scholey AB. The effects of L-theanine, caffeine and their combination on cognition and mood.', journal: 'Biol Psychol. 2008;77(2):113-22.', pmid: '18006208', note: 'Landmark caffeine + L-theanine combination study — improved speed and accuracy of attention vs caffeine alone' },
                    { ref: 'Bellar D, LeBlanc NR, Campbell B. The effect of 6 days of alpha glycerylphosphorylcholine on isometric strength.', journal: 'J Int Soc Sports Nutr. 2015;12:42.', pmid: '26477164', note: 'Alpha-GPC at 600mg significantly increased peak power output in trained athletes' },
                    { ref: 'Waldron M, Patterson SD, Tallent J, Jeffries O. The effects of an oral taurine dose and supplementation period on endurance exercise performance in humans: a meta-analysis.', journal: 'Sports Med. 2018;48(5):1247-1253.', pmid: '29546641', note: 'Context for taurine comparison vs compounds present in Pulse — not a direct Pulse ingredient but referenced for category positioning' },
                    { ref: 'Smith AE, Moon JR, Kendall KL, et al. The effects of beta-alanine supplementation and high-intensity interval training on neuromuscular fatigue and muscle function.', journal: 'Eur J Appl Physiol. 2009;105(3):357-63.', pmid: '19082652', note: 'CarnoSyn beta-alanine specific evidence — neuromuscular fatigue reduction at 3.2–6.4g/day' },
                    { ref: 'Labdoor Certification Report — Legion Pulse Pre-Workout Drink, Lot 2416421.', journal: 'Released March 22, 2026. Laboratories: Catalyst and Eurofins.', pmid: null, extUrl: LABDOOR_PDF, note: 'Primary lab data source for this review — accuracy and purity test results for all 6 active ingredients' },
                    { ref: 'Labdoor pre-workout analysis — 45 products tested, only 2 received passing grades for ingredient accuracy.', journal: 'Labdoor.com. July 2020.', pmid: null, extUrl: 'https://labdoor.com/article/new-release-pre-workout', note: 'Context for the pre-workout ingredient accuracy landscape — most products under-dose non-caffeine ergogenics' },
                    { ref: 'FDA. Spilling the Beans: How Much Caffeine is Too Much? Daily caffeine intake of up to 400mg is generally safe for healthy adults.', journal: 'FDA.gov. December 2023.', pmid: null, extUrl: 'https://www.fda.gov/consumers/consumer-updates/spilling-beans-how-much-caffeine-too-much', note: '400mg/day FDA advisory upper limit — context for 380mg actual found value per serving' },
                  ].map((ref, i) => (
                    <li key={i} className="text-[13px] text-ink3 leading-[1.7] pl-1">
                      <span className="font-medium text-ink2">{ref.ref}</span>{' '}
                      <span className="italic text-muted">{ref.journal}</span>{' '}
                      {ref.pmid && <a href={`https://pubmed.ncbi.nlm.nih.gov/${ref.pmid}/`} target="_blank" rel="noopener noreferrer" className="text-clay hover:underline text-[12px] ml-1">PubMed</a>}
                      {ref.extUrl && !ref.pmid && <a href={ref.extUrl} target="_blank" rel="noopener noreferrer" className="text-clay hover:underline text-[12px] ml-1">Source ↗</a>}
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
                        <div className="font-semibold text-[15px] text-ink2">Legion Pulse Pre-Workout</div>
                        <div className="text-[12px] text-muted mt-0.5">Labdoor lot 2416421 · March 2026 · Catalyst + Eurofins</div>
                      </div>
                    </div>
                  </div>
                  <div className="px-5 py-5 space-y-4">
                    <p className="text-[14.5px] sm:text-[15px] leading-[1.85] text-ink3">
                      The Labdoor data is the story of this review. Every ingredient above label claim — not one, all six. Citrulline at 9.2g vs 8g. Theanine at 410mg vs 350mg. Caffeine at 380mg vs 350mg. In a category where Labdoor's own analysis found most products under-dose their non-caffeine ergogenics, Legion Pulse does the opposite.
                    </p>
                    <p className="text-[14.5px] sm:text-[15px] leading-[1.85] text-ink3">
                      The 8.8 score versus BULK Black's 9.1 comes down to two honest differences: BULK Black's split caffeine design is pharmacokinetically superior for sustained energy and reduced crash, and it is $0.75 cheaper per serving. Pulse counters with 20+ flavors (vs BULK Black's one), a Labdoor certification record (vs Informed Choice), and a theanine-dominant found ratio that makes it calmer in practice than the 1:1 label ratio suggests.
                    </p>
                    <p className="text-[14.5px] sm:text-[15px] leading-[1.85] text-ink3">
                      If you are buying a transparent-label pre-workout and want the lab data to verify it, Pulse is one of two products in this category (alongside BULK Black) that can be independently confirmed to deliver what the label claims. That is the standard for what a pre-workout should be. Legion Pulse meets it, and the Labdoor data proves it.
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
                  <strong className="font-medium text-ink3">Affiliate disclosure:</strong> The Amazon link is an affiliate link. Purchases generate a commission at no extra cost. This has no effect on our rubric score. See our <a href="/conflicts-policy" className="text-clay hover:underline">conflicts policy</a>.{' '}
                  <strong className="font-medium text-ink3">Not medical advice.</strong> Pharmacist interaction notes are educational. Consult your prescriber before adding any stimulant supplement to your routine if you are on prescription medication.
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
                    <div className="text-[10.5px] text-muted text-center">Affiliate · ~$54.99 / 20 servings</div>
                  </div>
                </div>

                <div className="bg-paper3 border border-rule rounded-[14px] p-4">
                  <div className="text-[10px] tracking-[0.16em] uppercase text-muted font-semibold mb-3">Labdoor found values</div>
                  {[
                    ['Citrulline', '9.2g (115%)', 'text-clay'],
                    ['Beta-alanine', '3.9g (108%)', 'text-clay'],
                    ['Betaine', '2.5g (100%)', 'text-moss'],
                    ['Caffeine', '380mg (109%)', 'text-clay'],
                    ['L-Theanine', '410mg (117%)', 'text-clay'],
                    ['Alpha-GPC', '317mg (106%)', 'text-clay'],
                    ['Lead', '0.9μg/serving', 'text-amber-600'],
                  ].map(([l, v, cls]) => (
                    <div key={l} className="flex justify-between py-2 border-b border-rule last:border-b-0 text-[12px]">
                      <span className="text-muted">{l}</span>
                      <span className={`font-semibold ${cls}`}>{v}</span>
                    </div>
                  ))}
                  <a href={LABDOOR_PDF} target="_blank" rel="noopener"
                     className="mt-3 block text-center text-[12px] text-clay hover:underline">Full Labdoor PDF →</a>
                </div>

                <div className="bg-paper3 border border-rule rounded-[14px] p-4">
                  <div className="text-[10px] tracking-[0.16em] uppercase text-muted font-semibold mb-3">In this review</div>
                  {[['Labdoor data', '#labdoor'], ['Ingredient audit', '#ingredients'], ['Caffeine design', '#caffeine'], ['Real-world', '#real-world'], ['Pharmacist note', '#pharmacist'], ['vs alternatives', '#alternatives'], ['References', '#references'], ['Verdict', '#verdict']].map(([l, h]) => (
                    <a key={h} href={h} className="block text-[12.5px] text-ink3 py-1 hover:text-clay transition-colors">→ {l}</a>
                  ))}
                </div>

                <div className="bg-paper3 border border-rule rounded-[14px] p-4">
                  <div className="text-[10px] tracking-[0.16em] uppercase text-muted font-semibold mb-3">Related</div>
                  {[
                    ['Best pre-workouts 2026', '/best/pre-workout'],
                    ['TL BULK Black review', '/reviews/transparent-labs-bulk-black-review'],
                    ['Citrulline malate guide', '/ingredients/citrulline-malate'],
                    ['Beta-alanine guide', '/ingredients/beta-alanine'],
                    ['Compare pre-workouts', '/compare'],
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
            <a href={LABDOOR_PDF} target="_blank" rel="noopener"
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
                     style={{ background: '#1b4332' }}>PS</div>
                <div className="min-w-0">
                  <div className="font-semibold text-[15px] text-ink2">Pankaj Singh, Pharm.B</div>
                  <div className="text-[11px] tracking-[0.08em] uppercase font-medium mb-2" style={{ color: '#1b4332' }}>Pharmacist · Founder, Fitlab Reviews</div>
                  <p className="text-[12.5px] sm:text-[13px] text-muted leading-[1.65] mb-2">
                    Pharmacist trained in formulation analysis and drug-nutrient interactions. This review uses Labdoor lot 2416421
                    (March 2026) as the primary testing data source, supplemented by ingredient-level published clinical literature.
                    No samples were received from Legion Athletics.
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
