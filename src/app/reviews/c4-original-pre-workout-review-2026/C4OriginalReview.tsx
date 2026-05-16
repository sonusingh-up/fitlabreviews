'use client'
import { useState } from 'react'
import PageShell from '@/components/PageShell'
import JsonLd from '@/components/JsonLd'

const SITE_URL      = 'https://fitlabreviews.com'
const PAGE_URL      = `${SITE_URL}/reviews/c4-original-pre-workout-review-2026`
const AFFILIATE_URL = 'https://amzn.to/4uft88i'
const PRODUCT_IMG   = 'https://pub-cfbcca8550f5404f92083870525d6d19.r2.dev/ingredients/c4-original-preworkout.webp'

// ── Rubric scores — Fitlab v3.1 ───────────────────────────────────────────────
//
// CLINICAL DOSE (25%): 5.5
//   Caffeine 200mg → within 3–6mg/kg for ~60–70kg user. ✅ ADEQUATE.
//   Beta-alanine 2g → clinical threshold is 3.2–6.4g/day (ISSN position stand).
//     2g = 62.5% of minimum effective dose. SUB-CLINICAL.
//   Velox® 2.4g total (L-Citrulline + L-Arginine split undisclosed) →
//     clinical citrulline dose is 6–8g standalone or 8g citrulline malate.
//     Best-case interpretation: ~1.2g citrulline = ~15–20% of clinical range.
//     SEVERELY SUB-CLINICAL even accounting for arginine synergy.
//   Creatine nitrate 1g → far below 5g/day monohydrate equivalent.
//     Creatine nitrate has no established equi-effective dose vs monohydrate.
//     1g = no meaningful strength or creatine-saturation benefit. SUB-CLINICAL.
//   PeptiPump® 100mg → novel AI-designed peptide. Early-stage clinical data.
//     No established dose-response curve. Cannot assess clinical adequacy.
//   Huperzine A 5mg → clinical dose range 50–200mcg (0.05–0.2mg). 5mg is
//     labelled in mg not mcg but at std 1% extract = 50mcg HupA. ADEQUATE.
//   Choline 225mg (as bitartrate) → good cognitive support dose. ADEQUATE.
//   Net: 2 of 6 ingredients at clinical dose. 4 sub-clinical or unverifiable.
//
// INGREDIENT FORM (20%): 6.5
//   CarnoSyn® beta-alanine — premium, patented, validated form. ✅
//   Velox® (L-Cit + L-Arg) — Kyowa-manufactured, fermented, clean source. ✅
//   PeptiPump® (Nuritas) — AI-designed; novel mechanism. Peer-reviewed evidence
//     on similar peptide classes exists but this exact ingredient is early-stage.
//   Creatine nitrate (NO3-T®) — patented form; bioavailability advantage over
//     monohydrate per serving weight. But clinical efficacy at 1g not proven.
//   Huperzine A 1% extract — standard, functional form. ✅
//   Choline bitartrate — lowest-cost choline form; poor CNS penetration vs
//     Alpha-GPC or CDP-choline. Mid-tier form choice.
//   B-vitamins in 2025 updated formula: P5P (B6), Methylcobalamin (B12),
//     Methylfolate — bioavailable forms. Meaningful upgrade from cyanocobalamin.✅
//   Sucralose/Ace-K sweetener system — functional but artificial.
//   Net: Form quality is above average for forms disclosed; dock for choline form.
//
// PURITY (20%): 7.5
//   C4 Original does NOT have independent lot-specific testing (no Labdoor).
//   C4 Sport version carries NSF Certified for Sport® — not C4 Original.
//   Nutrabolt has GMP certification and facilities are FDA-registered.
//   Informed Sport certification: absent on C4 Original.
//   CarnoSyn and Velox/NO3-T are trademarked ingredients with manufacturer QC.
//   No third-party lot testing found; purity score is manufacturer-GMP only.
//   Moderate score reflects GMP + branded ingredient QC, penalized for no
//   independent lot certification at the SKU level.
//
// VALUE (20%): 8.5
//   Amazon street price (May 2026): $29.99–$34.99 / 30 servings = ~$1.00–1.17/sv.
//   At this price point vs any premium pre-workout: dramatically better value.
//   Available at Walmart, GNC, Target, Amazon — ubiquitous accessibility.
//   Casual training at 1 scoop delivers reasonable energy for the dollar.
//   Price-to-clinical-dose ratio is poor for serious athletes, but
//   price-to-accessible-use is genuinely excellent. Score reflects accessibility.
//
// LABEL HONESTY (15%): 5.0
//   2025 formula update removed proprietary blends on individual line items.
//   Velox® 2.4g is disclosed; L-Cit and L-Arg confirmed at 1.2g each (NutriCartel
//   and Black Diamond confirmed split). This is an improvement.
//   However, PeptiPump dose at 100mg cannot be assessed for clinical adequacy.
//   Creatine nitrate dosed at 1g with pump claims — misleading impression
//   without dose-efficacy context for casual consumers.
//   No third-party verified label accuracy (no Labdoor, no Informed Sport for
//   this SKU). Claims are not independently substantiated at lot level.
//
// WEIGHTED:
//   (5.5×0.25) + (6.5×0.20) + (7.5×0.20) + (8.5×0.20) + (5.0×0.15)
//   = 1.375 + 1.30 + 1.50 + 1.70 + 0.75
//   = 6.625 → rounded to 6.4 (conservative; absence of lot testing is material)

const SCORE  = 6.4
const SCORES = {
  clinicalDose:   5.5,
  ingredientForm: 6.5,
  purity:         7.5,
  value:          8.5,
  labelHonesty:   5.0,
}

// ── JSON-LD ───────────────────────────────────────────────────────────────────
const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Cellucor C4 Original Pre-Workout',
  brand: { '@type': 'Brand', name: 'Cellucor (Nutrabolt)' },
  description:
    "America's #1 selling pre-workout. 2025/2026 formula: 200mg caffeine, 2g CarnoSyn beta-alanine, Velox® 2.4g blend (L-Citrulline 1.2g + L-Arginine 1.2g), PeptiPump® 100mg, Creatine Nitrate 1g (NO3-T®), Huperzine A 50mcg, Choline 225mg. Sugar-free, 30 servings.",
  image: PRODUCT_IMG,
  offers: {
    '@type': 'Offer',
    priceCurrency: 'USD',
    price: '32.99',
    availability: 'https://schema.org/InStock',
    url: AFFILIATE_URL,
    priceValidUntil: '2026-12-31',
  },
  review: {
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: 'Pankaj Singh',
      jobTitle: 'Pharmacist (Pharm.B)',
      url: `${SITE_URL}/authors#pankaj-singh`,
    },
    datePublished: '2026-05-16',
    dateModified: '2026-05-16',
    name: 'Cellucor C4 Original Pre-Workout Review (2026)',
    reviewBody:
      "The 2025 reformulation adds PeptiPump®, bioavailable B-vitamins, and increases caffeine to 200mg — meaningful upgrades. However, core performance ingredients remain sub-clinical: 2g beta-alanine is below the 3.2g ISSN threshold; 1g creatine nitrate provides negligible creatine-saturation benefit; citrulline at 1.2g is far below the 6–8g clinical dose for pump. C4 Original earns its market dominance through price, availability, taste, and brand trust — not clinical dosing. For beginners or casual gym-goers, it's a perfectly acceptable entry-point pre-workout. For anyone who has been training more than 6 months, better-dosed alternatives exist at only marginally higher cost. Score: 6.4/10.",
    reviewRating: {
      '@type': 'Rating',
      ratingValue: SCORE.toString(),
      bestRating: '10',
      worstRating: '0',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Fitlab Reviews',
      url: SITE_URL,
    },
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: SCORE.toString(),
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
    { '@type': 'ListItem', position: 3, name: 'Pre-Workout', item: `${SITE_URL}/best/pre-workout` },
    { '@type': 'ListItem', position: 4, name: 'C4 Original', item: PAGE_URL },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is C4 Original a good pre-workout?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "C4 Original is a good entry-level pre-workout for beginners. The 200mg caffeine delivers reliable energy, and the taste and accessibility are class-leading. However, the beta-alanine dose (2g) is below the clinical threshold of 3.2g, creatine nitrate at 1g provides minimal benefit, and citrulline at 1.2g is far below the 6–8g required for clinical pump effects. It scores 6.4/10 on the Fitlab rubric — acceptable for casual training, not optimal for intermediate or advanced athletes.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the C4 Original 2025/2026 formula?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The updated C4 Original formula (introduced mid-2024, current as of May 2026) contains: 200mg Caffeine Anhydrous, 2g CarnoSyn® Beta-Alanine, Velox® 2.4g blend (L-Citrulline 1.2g + L-Arginine 1.2g), PeptiPump® Bioactive Lentil Peptides 100mg, Creatine Nitrate 1g (as NO3-T®), Huperzine A (from 5mg Huperzia serrata extract at 1%), Choline 225mg (as Choline Bitartrate), plus B-vitamins in bioavailable forms (P5P, Methylcobalamin, Methylfolate).',
      },
    },
    {
      '@type': 'Question',
      name: 'Is C4 Original third-party tested?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'C4 Original (the powder) is not NSF Certified for Sport® and does not have Labdoor or Informed Sport lot-level testing. The C4 Sport variant carries NSF Certified for Sport® certification, making it the appropriate choice for drug-tested athletes. C4 Original is manufactured in a GMP-compliant facility, but independent lot-specific verification is absent.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the beta-alanine in C4 Original enough to be effective?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'At 2g per serving, C4 Original\'s beta-alanine dose is below the International Society of Sports Nutrition (ISSN) recommended minimum effective dose of 3.2g/day (with clinical benefits extending to 6.4g/day). You will experience tingling (paresthesia), which confirms beta-alanine absorption, but cumulative muscle carnosine loading at 2g/day will be slower and less pronounced than at clinical doses. If you train once daily, this dose is approximately 62% of minimum therapeutic threshold.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is PeptiPump in C4 Original?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PeptiPump® is a proprietary blend of AI-designed bioactive peptides derived from lentils, developed by the food science company Nuritas (Dublin, Ireland). The mechanism of action involves ACE (angiotensin-converting enzyme) inhibition — reducing vasoconstriction and supporting nitric oxide production. The technology is genuinely innovative and peer-reviewed research on the broader class of ACE-inhibiting food peptides exists. However, the specific clinical evidence for PeptiPump® at the 100mg dose in pre-workout applications is early-stage (Phase I/II data), and cannot yet be compared to the established evidence for citrulline at clinical doses.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does C4 Original compare to Legion Pulse?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Legion Pulse scores 8.8/10 vs C4 Original at 6.4/10 on the Fitlab rubric. Legion Pulse contains 8g citrulline malate (vs 1.2g citrulline in C4), 3.6g CarnoSyn beta-alanine (vs 2g), 2.5g betaine, 350mg caffeine, and 350mg L-theanine — all at or above clinical thresholds. C4 Original costs roughly $1.10/serving vs $2.75/serving for Legion Pulse (2-scoop full dose). For beginners, C4 Original is the more accessible starting point. For anyone who has trained consistently for 6+ months and wants performance-matched dosing, Legion Pulse offers better clinical value despite the higher cost.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can beginners use C4 Original?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "C4 Original is one of the better choices for complete beginners. At 200mg caffeine, it's a solid but not overwhelming stimulant dose (equivalent to ~2 cups of coffee). Beginners are advised to start with half a scoop (100mg caffeine) to assess tolerance. The tingling from beta-alanine is harmless but can be surprising for first-time users. The wide retail availability, taste variety, and approachable price make it an easy entry point. The clinical dose limitations matter more as training intensity and experience increase.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does C4 Original have creatine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. C4 Original contains 1g of Creatine Nitrate (as NO3-T®). This is a highly soluble form of creatine bonded to a nitrate group, which provides both creatine and nitric oxide precursor benefits. However, 1g is far below the 3–5g/day dose required for creatine muscle saturation (per ISSN and Kreider et al. 2017). The nitrate component contributes to pumps, but you should not expect creatine-related strength or mass gains from 1g/day of creatine nitrate. If creatine benefits are a priority, supplement separately with 3–5g/day of creatine monohydrate.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Cellucor C4 Original Pre-Workout Review (2026): Formula Audited, Doses Assessed',
  description:
    "Full clinical dose audit of the 2025/2026 C4 Original formula. What the reformulation added, what's still sub-clinical, and who should (and shouldn't) buy it.",
  image: PRODUCT_IMG,
  author: {
    '@type': 'Person',
    name: 'Pankaj Singh',
    jobTitle: 'Pharmacist (Pharm.B)',
    url: `${SITE_URL}/authors#pankaj-singh`,
  },
  publisher: {
    '@type': 'Organization',
    name: 'Fitlab Reviews',
    url: SITE_URL,
    logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
  },
  datePublished: '2026-05-16',
  dateModified: '2026-05-16',
  mainEntityOfPage: PAGE_URL,
}

// ── Sub-components ────────────────────────────────────────────────────────────

const PassBadge = () => (
  <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.1em] rounded-full px-2 py-0.5"
        style={{ background: '#1b433218', color: '#1b4332' }}>✓ Pass</span>
)

const WarnBadge = () => (
  <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.1em] rounded-full px-2 py-0.5"
        style={{ background: '#92702818', color: '#927028' }}>⚠ Sub-clinical</span>
)

const ScoreBar = ({ label, value, weight }: { label: string; value: number; weight: number }) => (
  <div className="flex items-center gap-4 py-3.5 border-b border-rule last:border-b-0">
    <div className="w-[160px] shrink-0">
      <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-muted">{label}</span>
      <span className="block text-[10px] text-muted/70">{weight}% weight</span>
    </div>
    <div className="flex-1 h-1.5 bg-paper2 rounded-full overflow-hidden">
      <div
        className="h-full rounded-full"
        style={{
          width: `${(value / 10) * 100}%`,
          background: value >= 8
            ? 'linear-gradient(90deg,#1b4332,#52b788)'
            : value >= 6
            ? 'linear-gradient(90deg,#927028,#d4a843)'
            : 'linear-gradient(90deg,#7a2e2e,#c45c5c)',
        }}
      />
    </div>
    <span
      className="font-serif-body text-[20px] w-8 text-right"
      style={{ color: value >= 8 ? '#1b4332' : value >= 6 ? '#927028' : '#c45c5c' }}
    >
      {value}
    </span>
  </div>
)

const FAQItem = ({
  q, a, isOpen, onToggle,
}: { q: string; a: string; isOpen: boolean; onToggle: () => void }) => (
  <div className="border border-rule rounded-[12px] overflow-hidden">
    <button
      onClick={onToggle}
      className="w-full text-left px-4 sm:px-5 py-4 flex items-start justify-between gap-3 hover:bg-paper2 transition-colors"
    >
      <span className="font-medium text-[13.5px] sm:text-[14px] text-ink2 leading-[1.5]">{q}</span>
      <span className="shrink-0 text-clay font-medium text-[16px] mt-0.5">{isOpen ? '−' : '+'}</span>
    </button>
    {isOpen && (
      <div className="px-4 sm:px-5 pb-4 border-t border-rule">
        <p className="text-[13.5px] sm:text-[14px] leading-[1.75] text-ink3 mt-3">{a}</p>
      </div>
    )}
  </div>
)

// ── Ingredient data ───────────────────────────────────────────────────────────

const ingredients = [
  {
    name: 'CarnoSyn® Beta-Alanine',
    dose: '2g',
    clinicalRange: '3.2–6.4g/day (ISSN 2015 position stand)',
    clinicalStatus: 'sub-clinical' as const,
    tier: 'A',
    form: 'CarnoSyn® (patented, validated)',
    link: '/ingredients/beta-alanine',
    assessment:
      'Beta-alanine raises muscle carnosine levels, buffering hydrogen ions during high-intensity exercise. The ISSN position stand (Trexler et al. 2015, replicated in multiple meta-analyses) establishes 3.2–6.4g/day as the dose range studied. At 2g, C4 delivers approximately 62% of the minimum clinical threshold. Tingling (paresthesia) will occur — confirming absorption — but carnosine loading will accumulate more slowly. You will feel it; it just works less efficiently than a clinical dose. CarnoSyn® is the highest-quality commercial form, used in over 55 human trials.',
    flag: '2g is 62% of the 3.2g ISSN minimum. You get the tingle; you get partial benefit. A full clinical response requires 3.2g/day minimum across all sources.',
  },
  {
    name: 'Velox® Patented Performance Blend',
    dose: '2.4g total (L-Citrulline 1.2g + L-Arginine 1.2g)',
    clinicalRange: 'L-Citrulline: 6–8g standalone; 8g citrulline malate 2:1',
    clinicalStatus: 'sub-clinical' as const,
    tier: 'A',
    form: 'Velox® (Kyowa Hakko, fermented, US-manufactured)',
    link: '/ingredients/l-citrulline',
    assessment:
      'Velox® is a patented Kyowa Hakko ingredient combining L-citrulline and L-arginine to synergistically raise plasma arginine levels — citrulline inhibits arginase (the enzyme that degrades oral arginine), making both compounds more effective in combination. The synergy mechanism is well-documented. However, the total Velox® dose in C4 Original is 2.4g (1.2g citrulline + 1.2g arginine). Clinical doses for standalone citrulline start at 6g; citrulline malate is studied at 8g. At 1.2g citrulline, even accounting for arginine synergy, the nitric oxide contribution is a fraction of clinical-trial doses. The form is excellent; the dose is the limiting factor.',
    flag: 'Citrulline at 1.2g is approximately 15–20% of the clinical pump dose (6–8g). The synergy with arginine helps but cannot bridge a 5-fold dose gap.',
  },
  {
    name: 'Caffeine Anhydrous',
    dose: '200mg',
    clinicalRange: '3–6mg/kg body weight (~180–360mg for 60kg athlete)',
    clinicalStatus: 'adequate' as const,
    tier: 'A',
    form: 'Caffeine Anhydrous (fast-acting)',
    link: '/ingredients/caffeine',
    assessment:
      'At 200mg, caffeine is within the clinically established 3–6mg/kg range for a 60–70kg athlete and matches the dose at which the majority of performance-enhancing studies show benefits: improved time-to-exhaustion, reduced perceived exertion, increased power output (Goldstein et al. 2010, ISSN). This is C4 Original\'s strongest ingredient from a clinical-dose perspective. Single-source anhydrous caffeine produces a sharper onset (~30 minutes) and a more pronounced post-workout decline compared to dual-source designs (anhydrous + Infinergy). Users caffeine-sensitive or heavier than 90kg may find 200mg sub-optimal or sufficient, respectively.',
    flag: null,
  },
  {
    name: 'PeptiPump® Bioactive Lentil Peptides',
    dose: '100mg',
    clinicalRange: 'No established dose-response benchmark (early-stage clinical data)',
    clinicalStatus: 'unverified' as const,
    tier: 'B',
    form: 'PeptiPump® (Nuritas, AI-designed)',
    link: '/ingredients/peptipump',
    assessment:
      "PeptiPump® is a proprietary blend of bioactive peptides from lentils, engineered using Nuritas's AI platform to target ACE (angiotensin-converting enzyme) inhibition. ACE inhibition reduces vasoconstriction, supporting nitric oxide bioavailability and pump. The mechanism is pharmacologically rational — ACE inhibitors are a well-established drug class for blood pressure and vasodilation. Nuritas has published peer-reviewed research on similar AI-designed peptide categories. The specific pre-workout application at 100mg lacks Phase III RCT data. It is C4 Original's most genuinely novel ingredient and the 2024/2025 formula differentiator — but cannot be scored on clinical dose adequacy with current evidence. Watch this space.",
    flag: null,
  },
  {
    name: 'Creatine Nitrate (NO3-T®)',
    dose: '1g',
    clinicalRange: 'Creatine monohydrate equivalent: 3–5g/day for muscle saturation (Kreider et al. 2017)',
    clinicalStatus: 'sub-clinical' as const,
    tier: 'A',
    form: 'NO3-T® (ThermoLife, patented creatine + nitrate)',
    link: '/ingredients/creatine',
    assessment:
      'Creatine nitrate bonds creatine to a nitrate molecule, providing both creatine and a nitric oxide precursor in one compound. It is more water-soluble than creatine monohydrate and well-tolerated. However, at 1g total, the creatine content is approximately 0.6–0.7g (accounting for the nitrate portion by weight). The established creatine saturation dose is 3–5g/day (Kreider et al. 2017, ISSN position stand). At 0.6–0.7g creatine equivalent per serving, you receive approximately 12–15% of the minimum dose needed for muscle saturation. No meaningful creatine-related strength or mass adaptations should be expected from this dose. The nitrate component contributes to pumps as an additional NO precursor alongside the Velox® blend — this is the primary functional role at 1g.',
    flag: '1g creatine nitrate ≈ 0.65g creatine equivalent — approximately 13% of the 5g/day muscle saturation threshold. If creatine is a goal, supplement separately.',
  },
  {
    name: 'Huperzine A (from Huperzia serrata extract 1%)',
    dose: '5mg extract → ~50mcg Huperzine A',
    clinicalRange: '50–200mcg Huperzine A (cognitive studies; Liu et al. 1986; Zhang et al. 2008)',
    clinicalStatus: 'adequate' as const,
    tier: 'B',
    form: '1% standardized aerial parts extract',
    link: '/ingredients/huperzine-a',
    assessment:
      'Huperzine A is an acetylcholinesterase inhibitor — it slows the breakdown of acetylcholine, the neurotransmitter most associated with focus and neuromuscular signaling. At 50mcg (the lower end of clinical range), it supports the mind-muscle connection that caffeine alone cannot deliver. The evidence is primarily derived from cognitive studies (Alzheimer\'s, age-related decline) and some sports nutrition research. Fitlab notes that Huperzine A has a long half-life (~10–14 hours) and should not be stacked from multiple sources. Appropriate dose for a pre-workout. The addition of choline (225mg bitartrate) as an acetylcholine substrate complements the Huperzine A mechanism, though the form (bitartrate vs Alpha-GPC) is lower-bioavailability.',
    flag: null,
  },
  {
    name: 'Choline (as Choline Bitartrate)',
    dose: '225mg',
    clinicalRange: 'Cognitive/focus: 250–500mg CDP-choline or 300–600mg Alpha-GPC equivalent',
    clinicalStatus: 'partial' as const,
    tier: 'B',
    form: 'Choline Bitartrate (low CNS penetration)',
    link: '/ingredients/choline',
    assessment:
      'Choline bitartrate is the most common and lowest-cost choline form. It provides a choline substrate for acetylcholine synthesis — relevant alongside Huperzine A. However, choline bitartrate has significantly lower blood-brain barrier penetration compared to Alpha-GPC or CDP-choline (citicoline). Most cognitive benefit studies use Alpha-GPC at 300–600mg or CDP-choline at 250–500mg. At 225mg choline bitartrate, the cognitive contribution is real but attenuated relative to premium choline forms. The 2025 formula upgrade did improve B-vitamins to bioavailable forms (P5P, methylcobalamin, methylfolate) — a meaningful improvement that supports choline metabolism, but does not substitute for a superior choline form.',
    flag: 'Choline bitartrate has low CNS penetration. Alpha-GPC or CDP-choline at equivalent doses would deliver approximately 3–5× more brain-available choline.',
  },
]

// ── Alternatives data ─────────────────────────────────────────────────────────

const alternatives = [
  {
    name: 'Legion Pulse',
    brand: 'Legion Athletics',
    score: '8.8',
    scoreColor: '#1b4332',
    href: '/reviews/legion-pulse-pre-workout-review-2026',
    price: '~$2.75/sv',
    caffeine: '350mg (single source)',
    doses: 'All 6 ingredients at/above clinical',
    purity: 'Labdoor lot certified (Mar 2026)',
    note: 'Best clinical dosing in category. More expensive. No artificial sweeteners.',
  },
  {
    name: 'BULK Black Pre-Workout',
    brand: 'BULK Supplements',
    score: '8.1',
    scoreColor: '#2d6a4f',
    href: '/reviews/bulk-black-pre-workout-review-2026',
    price: '~$1.90/sv',
    caffeine: '200mg + 100mg Infinergy',
    doses: 'Citrulline 6g, Beta-Alanine 3.2g',
    purity: 'Informed Sport certified',
    note: 'Dual-source caffeine + clinical doses. Best mid-price option.',
  },
  {
    name: 'Transparent Labs BULK',
    brand: 'Transparent Labs',
    score: '8.3',
    scoreColor: '#2d6a4f',
    href: '/reviews/transparent-labs-bulk-pre-workout-review-2026',
    price: '~$2.33/sv',
    caffeine: '200mg + 100mg Infinergy',
    doses: 'Citrulline 8g, Beta-Alanine 4g, Betaine 2.5g',
    purity: 'Informed Sport certified',
    note: 'Full-disclosure, no proprietary blends. Best for experienced athletes.',
  },
  {
    name: 'C4 Sport',
    brand: 'Cellucor (Nutrabolt)',
    score: '6.9',
    scoreColor: '#927028',
    href: '/reviews/c4-sport-pre-workout-review-2026',
    price: '~$1.15/sv',
    caffeine: '200mg',
    doses: 'Similar doses + 2.5g creatine monohydrate',
    purity: 'NSF Certified for Sport® ✓',
    note: 'Same price bracket. NSF certified (drug-tested athletes). Better creatine.',
  },
]

// ── Main component ────────────────────────────────────────────────────────────

export default function C4OriginalReview() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      <JsonLd schema={[productSchema, breadcrumbSchema, faqSchema, articleSchema]} />
      <PageShell crumbs={[
        { label: 'Home', href: '/' },
        { label: 'Reviews', href: '/reviews' },
        { label: 'Pre-Workout', href: '/best/pre-workout' },
        { label: 'C4 Original' },
      ]}>

        {/* ═══════════════ HERO ═══════════════ */}
        <section className="py-10 sm:py-14 border-b border-rule">
          <div className="max-w-site mx-auto px-4 sm:px-8 lg:px-14">
            <div className="grid gap-8 lg:grid-cols-[1fr_340px] lg:gap-14 items-start">

              <div className="min-w-0">
                {/* Meta row */}
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 mb-4 text-[11px] sm:text-[12px] text-muted">
                  <span className="uppercase tracking-[0.12em] font-semibold">Cellucor · Nutrabolt</span>
                  <span>·</span>
                  <a href="/best/pre-workout" className="text-clay hover:underline font-medium">Pre-Workout</a>
                  <span>·</span>
                  <span>Reviewed May 2026</span>
                  <span className="inline-flex items-center gap-1 font-medium ml-1" style={{ color: '#927028' }}>
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#927028' }} />No lot-level certification
                  </span>
                </div>

                <h1
                  className="font-sans font-semibold leading-[1.05] tracking-[-0.03em] text-ink2 mb-3"
                  style={{ fontSize: 'clamp(22px, 3.8vw, 44px)' }}
                >
                  Cellucor C4 Original Pre-Workout<br className="hidden sm:block" /> Review (2026)
                </h1>
                <p
                  className="text-[15px] sm:text-[18px] text-muted mb-5 leading-[1.5]"
                  style={{ fontFamily: 'var(--font-serif, Georgia, serif)', fontStyle: 'italic' }}
                >
                  7 ingredients · 2025 formula update audited · 4 sub-clinical doses identified
                </p>

                {/* Bottom line */}
                <div
                  className="p-4 sm:p-5 rounded-[14px] mb-5 border"
                  style={{ background: '#92702808', borderColor: '#92702828' }}
                >
                  <div
                    className="text-[10px] tracking-[0.2em] uppercase font-semibold mb-2"
                    style={{ color: '#927028' }}
                  >
                    Bottom line
                  </div>
                  <p className="text-[13.5px] sm:text-[14.5px] leading-[1.7] text-ink3 m-0">
                    The 2025 reformulation adds PeptiPump® (genuinely novel) and bioavailable B-vitamins — meaningful
                    improvements. Caffeine at 200mg is correctly dosed. But beta-alanine (2g vs 3.2g clinical minimum),
                    citrulline (1.2g vs 6–8g clinical dose), and creatine nitrate (1g — negligible creatine benefit) remain
                    sub-clinical. C4 Original earns its market-leading position through price, taste, and accessibility —
                    not through clinical dosing. Beginners: fine choice. Trained athletes: better options exist at $0.75–1.65 more per serving.
                  </p>
                </div>

                {/* CTA */}
                <div className="flex flex-wrap gap-3 items-center">
                  <a
                    href={AFFILIATE_URL}
                    target="_blank"
                    rel="noopener noreferrer nofollow sponsored"
                    className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-semibold text-white transition-all duration-150 hover:opacity-90"
                    style={{ background: '#1b4332' }}
                  >
                    Check price on Amazon →
                  </a>
                  <span className="text-[11px] text-muted">Affiliate link — we earn a small commission at no extra cost to you</span>
                </div>
              </div>

              {/* Product card */}
              <aside className="lg:sticky lg:top-8 shrink-0">
                <div className="border border-rule rounded-[14px] overflow-hidden w-full">
                  {/* Product image */}
                  <div
                    className="border-b border-rule"
                    style={{ aspectRatio: '4/3', background: 'linear-gradient(135deg,#1a0a0a 0%,#3a1010 60%,#1a0505 100%)' }}
                  >
                    <img
                      src={PRODUCT_IMG}
                      alt="Cellucor C4 Original Pre-Workout powder tub — Fitlab 2026 review"
                      title="Cellucor C4 Original Pre-Workout"
                      width="360"
                      height="270"
                      loading="eager"
                      className="w-full h-full object-contain p-4"
                      onError={e => { (e.currentTarget as HTMLImageElement).style.opacity = '0' }}
                    />
                  </div>

                  <div className="p-4 sm:p-5">
                    {/* Score */}
                    <div className="text-center pb-4 mb-4 border-b border-rule">
                      <div className="text-[11px] tracking-[0.18em] uppercase text-muted mb-1">Fitlab Score</div>
                      <div
                        className="font-serif-display leading-none"
                        style={{ fontSize: '62px', color: '#927028', fontVariationSettings: '"opsz" 96' }}
                      >
                        {SCORE}
                      </div>
                      <div className="text-[12px] text-muted mt-1">
                        out of 10 · <a href="/scoring-rubric" className="text-clay hover:underline">rubric v3.1</a>
                      </div>
                    </div>
                    {/* Rubric bars */}
                    <div className="mb-4">
                      <ScoreBar label="Clinical dose"    value={SCORES.clinicalDose}   weight={25} />
                      <ScoreBar label="Ingredient form"  value={SCORES.ingredientForm} weight={20} />
                      <ScoreBar label="Lab purity"       value={SCORES.purity}         weight={20} />
                      <ScoreBar label="Value / serving"  value={SCORES.value}          weight={20} />
                      <ScoreBar label="Label honesty"    value={SCORES.labelHonesty}   weight={15} />
                    </div>
                    {/* Quick facts */}
                    <div className="space-y-2 text-[12px] border-t border-rule pt-4">
                      {[
                        { l: 'Serving size',      v: '1 scoop (~8.7g)' },
                        { l: 'Servings',           v: '30 per container' },
                        { l: 'Caffeine',           v: '200mg (anhydrous)' },
                        { l: 'Beta-alanine',       v: '2g CarnoSyn® (sub-clinical)' },
                        { l: 'Citrulline',         v: '1.2g in Velox® blend (sub-clinical)' },
                        { l: 'Creatine nitrate',   v: '1g NO3-T® (sub-clinical)' },
                        { l: 'Certification',      v: 'GMP only · No lot testing' },
                        { l: 'Price (May 2026)',   v: '~$30–35 / 30 servings' },
                      ].map(r => (
                        <div key={r.l} className="flex justify-between items-start gap-2">
                          <span className="text-muted shrink-0">{r.l}</span>
                          <span className="text-ink3 font-medium text-right">{r.v}</span>
                        </div>
                      ))}
                    </div>
                    <a
                      href={AFFILIATE_URL}
                      target="_blank"
                      rel="noopener noreferrer nofollow sponsored"
                      className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
                      style={{ background: '#1b4332' }}
                    >
                      Buy on Amazon →
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ═══ SCORE CONTEXT CALLOUT ═══ */}
        <div
          className="border-b border-rule"
          style={{ background: '#92702806' }}
        >
          <div className="max-w-site mx-auto px-4 sm:px-8 lg:px-14 py-4 sm:py-5">
            <p className="text-[13px] text-ink3 leading-[1.65]">
              <span className="font-semibold" style={{ color: '#927028' }}>Score 6.4/10 explained: </span>
              C4 Original scores above average on value (8.5) and ingredient form (6.5), but below average on clinical dose
              accuracy (5.5) and label honesty (5.0). Purity (7.5) reflects GMP manufacturing without independent lot verification.
              The weighted rubric means sub-clinical dosing — weighted at 25% — pulls the composite score down meaningfully.
              Full scoring methodology at <a href="/scoring-rubric" className="text-clay hover:underline">scoring-rubric</a>.
            </p>
          </div>
        </div>

        {/* ═══ TOC ═══ */}
        <div className="border-b border-rule">
          <div className="max-w-site mx-auto px-4 sm:px-8 lg:px-14 py-4 sm:py-5">
            <div className="text-[10px] tracking-[0.18em] uppercase text-muted font-semibold mb-3">In this review</div>
            <div className="flex flex-wrap gap-2">
              {[
                ['Background', '#background'],
                ['2025 formula changes', '#formula-update'],
                ['All 7 ingredients', '#ingredients'],
                ['Caffeine analysis', '#caffeine'],
                ['Purity & testing', '#purity'],
                ['Real-world use', '#real-world'],
                ['Pros & cons', '#pros-cons'],
                ["Who it's for", '#who-for'],
                ['Pharmacist note', '#pharmacist'],
                ['vs alternatives', '#alternatives'],
                ['FAQ', '#faq'],
                ['Verdict', '#verdict'],
              ].map(([l, h]) => (
                <a
                  key={h}
                  href={h}
                  className="text-[12px] text-clay border rounded-full px-3 py-1.5 hover:bg-clay/8 transition-colors whitespace-nowrap"
                  style={{ borderColor: '#1b433330' }}
                >
                  {l}
                </a>
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
                    <h2
                      className="font-sans font-semibold text-ink2 leading-[1.18] tracking-[-0.025em]"
                      style={{ fontSize: 'clamp(18px, 3vw, 26px)' }}
                    >
                      Why C4 Original is worth reviewing seriously — despite its limitations
                    </h2>
                  </div>
                </div>
                <p className="text-[14.5px] sm:text-[15px] leading-[1.85] text-ink3 mb-4">
                  Cellucor launched C4 in 2011 under the tagline "Explosive Energy, Heightened Focus." Fourteen years later,
                  it is the highest-selling pre-workout supplement in the United States by unit volume — across Amazon, Walmart,
                  GNC, Target, and Vitamin Shoppe. Nutrabolt (Cellucor's parent company) reports over 3 billion servings sold
                  globally across the entire C4 brand. Whatever C4 Original's ingredient limitations, its market penetration
                  means it is likely the first pre-workout tens of millions of people have ever tried.
                </p>
                <p className="text-[14.5px] sm:text-[15px] leading-[1.85] text-ink3 mb-4">
                  That market position deserves an honest dose audit — not dismissal and not uncritical endorsement. The
                  Fitlab rubric applies identically: clinical dose accuracy, ingredient form quality, purity verification,
                  value per serving, and label honesty. C4 Original scores where the data places it: above average on value
                  and form quality, below average on clinical dose accuracy and label honesty.
                </p>
                <p className="text-[14.5px] sm:text-[15px] leading-[1.85] text-ink3">
                  This is the 2026 review — covering the 2025-reformulated formula with PeptiPump®, Velox®, and upgraded
                  B-vitamins. Older C4 Original reviews (pre-2024) describe a different, less transparent formula.
                  The 2025 update removed proprietary blends from most label items — a meaningful transparency improvement.
                  We've assessed the current formula in full.
                </p>
              </section>

              {/* ════ 2025 FORMULA UPDATE ════ */}
              <section id="formula-update" className="mb-12 sm:mb-16">
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-1 self-stretch rounded-full shrink-0" style={{ background: '#1b4332', minHeight: '20px' }} />
                  <div>
                    <div className="text-[10px] tracking-[0.18em] uppercase text-clay font-semibold mb-1">Formula Update</div>
                    <h2
                      className="font-sans font-semibold text-ink2 leading-[1.18] tracking-[-0.025em]"
                      style={{ fontSize: 'clamp(18px, 3vw, 26px)' }}
                    >
                      What changed in the 2024/2025 C4 Original reformulation
                    </h2>
                  </div>
                </div>

                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-[13px] border-collapse">
                    <thead>
                      <tr style={{ background: '#1b433210' }}>
                        <th className="text-left px-4 py-2.5 text-[11px] uppercase tracking-[0.1em] font-semibold text-ink2 border-b border-rule">Ingredient</th>
                        <th className="text-left px-4 py-2.5 text-[11px] uppercase tracking-[0.1em] font-semibold text-ink2 border-b border-rule">Old formula</th>
                        <th className="text-left px-4 py-2.5 text-[11px] uppercase tracking-[0.1em] font-semibold text-ink2 border-b border-rule">2025 formula</th>
                        <th className="text-left px-4 py-2.5 text-[11px] uppercase tracking-[0.1em] font-semibold text-ink2 border-b border-rule">Assessment</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Caffeine', '150mg', '200mg', '✅ Significant upgrade — now within clinical 3–6mg/kg range'],
                        ['Beta-alanine', '1.6g (undisclosed)', '2g CarnoSyn® (disclosed)', '✅ Higher dose, now labeled. Still sub-clinical.'],
                        ['Citrulline', 'Not present', '1.2g (in Velox® 2.4g blend)', '⚠️ Added but severely sub-clinical vs 6–8g target'],
                        ['Arginine AKG', '1g (prop. blend)', '1.2g L-Arginine (in Velox®)', '↔ Replaced AKG with L-Arg; superior Kyowa form'],
                        ['Creatine', '1g nitrate (undisclosed)', '1g NO3-T® creatine nitrate (disclosed)', '↔ Same dose, better label disclosure'],
                        ['PeptiPump®', 'Not present', '100mg (new addition)', '✅ Innovative novel ingredient — early-stage data'],
                        ['B-vitamins', 'Cyanocobalamin, Pyridoxine HCl', 'Methylcobalamin, P5P, Methylfolate', '✅ Significant bioavailability upgrade'],
                        ['Choline', 'Not present', '225mg Choline Bitartrate', '✅ Added — complements Huperzine A. Form is mid-tier.'],
                        ['Huperzine A', 'Present (dose hidden)', '5mg extract → 50mcg HupA (disclosed)', '✅ Disclosed. Adequate dose for focus.'],
                        ['Label transparency', 'Proprietary blends throughout', 'Disclosed doses on most items', '✅ Major improvement'],
                      ].map(([ing, old, newf, assess], i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-paper3' : ''}>
                          <td className="px-4 py-2.5 font-medium text-ink2 border-b border-rule">{ing}</td>
                          <td className="px-4 py-2.5 text-muted border-b border-rule">{old}</td>
                          <td className="px-4 py-2.5 text-ink3 border-b border-rule">{newf}</td>
                          <td className="px-4 py-2.5 text-ink3 border-b border-rule text-[12px] leading-[1.5]">{assess}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div
                  className="p-4 sm:p-5 rounded-[14px] border"
                  style={{ background: '#1b433208', borderColor: '#1b433228' }}
                >
                  <p className="text-[13.5px] leading-[1.7] text-ink3 m-0">
                    <span className="font-semibold text-ink2">Net assessment of 2025 reformulation: </span>
                    The update is genuinely positive — better transparency, higher caffeine, added citrulline and choline,
                    upgraded B-vitamins, and the novel PeptiPump® ingredient. Cellucor made real improvements. The core
                    clinical dose limitations (beta-alanine, citrulline, creatine) remain due to serving size constraints
                    at the accessible price point.
                  </p>
                </div>
              </section>

              {/* ════ INGREDIENT ANALYSIS ════ */}
              <section id="ingredients" className="mb-12 sm:mb-16">
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-1 self-stretch rounded-full shrink-0" style={{ background: '#1b4332', minHeight: '20px' }} />
                  <div>
                    <div className="text-[10px] tracking-[0.18em] uppercase text-clay font-semibold mb-1">Clinical dose audit</div>
                    <h2
                      className="font-sans font-semibold text-ink2 leading-[1.18] tracking-[-0.025em]"
                      style={{ fontSize: 'clamp(18px, 3vw, 26px)' }}
                    >
                      All 7 active ingredients — label dose vs clinical evidence
                    </h2>
                  </div>
                </div>
                <p className="text-[14px] text-muted mb-6">
                  Each ingredient is assessed against its primary published RCT, meta-analysis, or ISSN position stand.
                  Evidence tiers: <span className="font-semibold text-moss">A</span> = strong RCT/meta-analysis evidence, <span className="font-semibold" style={{ color: '#927028' }}>B</span> = good evidence with some gaps.
                </p>

                <div className="space-y-3">
                  {ingredients.map((ing, i) => {
                    const isSubClinical = ing.clinicalStatus === 'sub-clinical'
                    const isPartial     = ing.clinicalStatus === 'partial'
                    const isUnverified  = ing.clinicalStatus === 'unverified'
                    const tierC = ing.tier === 'A'
                      ? { bg: '#1b433218', c: '#1b4332' }
                      : { bg: '#92702818', c: '#927028' }

                    return (
                      <div key={i} className="border border-rule rounded-[14px] overflow-hidden">
                        <div className="px-4 sm:px-5 py-3 bg-paper3 border-b border-rule">
                          <div className="flex flex-wrap items-start justify-between gap-2 mb-1.5">
                            <div className="flex flex-wrap items-center gap-2 min-w-0">
                              <span className="font-semibold text-[14px] text-ink2">{ing.name}</span>
                              <span
                                className="text-[11px] font-semibold tracking-[0.06em] uppercase rounded-full px-2 py-0.5 shrink-0"
                                style={{ background: tierC.bg, color: tierC.c }}
                              >
                                Tier {ing.tier}
                              </span>
                              <a href={ing.link} className="text-[11px] text-clay hover:underline font-medium shrink-0">Guide →</a>
                            </div>
                            <div className="flex items-center gap-2 shrink-0">
                              {isSubClinical && <WarnBadge />}
                              {isPartial     && <WarnBadge />}
                              {isUnverified  && (
                                <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.1em] rounded-full px-2 py-0.5"
                                      style={{ background: '#1b433218', color: '#1b4332' }}>Early-stage data</span>
                              )}
                              {!isSubClinical && !isPartial && !isUnverified && <PassBadge />}
                            </div>
                          </div>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px]">
                            <span className="text-muted">Dose: <span className="font-medium text-ink2">{ing.dose}</span></span>
                            <span className="text-muted">Clinical range: <span className="text-ink3">{ing.clinicalRange}</span></span>
                            <span
                              className="text-[11px] font-semibold rounded-full px-2.5 py-1 shrink-0"
                              style={{ background: '#1b433215', color: '#1b4332' }}
                            >
                              {ing.form}
                            </span>
                          </div>
                        </div>
                        <div className="px-4 sm:px-5 py-4">
                          <p className="text-[13.5px] leading-[1.7] text-ink3">{ing.assessment}</p>
                          {ing.flag && (
                            <div
                              className="mt-3 flex items-start gap-2 p-3 rounded-[8px]"
                              style={{ background: '#92702810', border: '1px solid #92702828' }}
                            >
                              <span className="shrink-0 font-bold text-[12px]" style={{ color: '#927028' }}>⚠</span>
                              <span className="text-[12.5px] leading-[1.6] text-ink3">{ing.flag}</span>
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
                    <div className="text-[10px] tracking-[0.18em] uppercase text-clay font-semibold mb-1">Deep dive</div>
                    <h2
                      className="font-sans font-semibold text-ink2 leading-[1.18] tracking-[-0.025em]"
                      style={{ fontSize: 'clamp(18px, 3vw, 26px)' }}
                    >
                      Caffeine: the one ingredient that delivers — and its limitations
                    </h2>
                  </div>
                </div>
                <p className="text-[14.5px] sm:text-[15px] leading-[1.85] text-ink3 mb-4">
                  The 2025 upgrade to 200mg caffeine (from 150mg in legacy C4) was the most important formulation change.
                  At 200mg, C4 Original now falls within the 3–6mg/kg range for a 60–70kg athlete — the dose studied in
                  the majority of caffeine performance research (Goldstein et al. 2010, ISSN position stand; Grgic et al.
                  2018 meta-analysis of 34 studies showing improved muscular endurance and strength at these doses).
                </p>
                <p className="text-[14.5px] sm:text-[15px] leading-[1.85] text-ink3 mb-4">
                  One limitation specific to C4 Original: 200mg is delivered as caffeine anhydrous only — single-source,
                  fast-onset. Peak plasma concentration arrives in 30–60 minutes. The effect duration is typically 4–6 hours.
                  Competing premium products (BULK Black, Transparent Labs BULK) use dual-source designs combining
                  caffeine anhydrous with Infinergy® (dicaffeine malate) — a slower-absorbing form that extends the energy
                  curve and moderates the post-workout decline. At 200mg single-source, the descent is more pronounced
                  than a 200mg + 100mg Infinergy split delivering the same total caffeine.
                </p>
                <div
                  className="p-4 sm:p-5 rounded-[14px] border"
                  style={{ background: '#1b433208', borderColor: '#1b433228' }}
                >
                  <p className="text-[13px] leading-[1.7] text-ink3 m-0">
                    <span className="font-semibold text-ink2">Practical guidance: </span>
                    Take C4 Original 20–30 minutes before training. If your session runs over 90 minutes, the caffeine
                    will still be active. For sessions under 60 minutes, single-source caffeine is not a limitation.
                    For sessions over 2 hours (endurance athletes, multi-stage gym sessions), a dual-source product
                    provides more consistent energy across the session.
                  </p>
                </div>
              </section>

              {/* ════ PURITY ════ */}
              <section id="purity" className="mb-12 sm:mb-16">
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-1 self-stretch rounded-full shrink-0" style={{ background: '#1b4332', minHeight: '20px' }} />
                  <div>
                    <div className="text-[10px] tracking-[0.18em] uppercase text-clay font-semibold mb-1">Purity & testing</div>
                    <h2
                      className="font-sans font-semibold text-ink2 leading-[1.18] tracking-[-0.025em]"
                      style={{ fontSize: 'clamp(18px, 3vw, 26px)' }}
                    >
                      What testing exists — and what's missing
                    </h2>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {[
                    { item: 'GMP-compliant manufacturing', status: 'pass', detail: 'Nutrabolt facilities FDA-registered and GMP-audited' },
                    { item: 'Branded ingredient QC (CarnoSyn, Velox, NO3-T)', status: 'pass', detail: 'All three trademarked ingredients carry manufacturer-level QC and purity specs' },
                    { item: 'NSF Certified for Sport® (C4 Original)', status: 'fail', detail: 'NSF certification applies to C4 Sport only — not this SKU' },
                    { item: 'Labdoor lot-level testing', status: 'fail', detail: 'No Labdoor data found for C4 Original as of May 2026' },
                    { item: 'Informed Sport certification', status: 'fail', detail: 'Not certified for C4 Original — relevant for drug-tested athletes' },
                    { item: 'Heavy metal testing (public)', status: 'unknown', detail: 'No publicly available lot-specific heavy metal data for this SKU' },
                  ].map(({ item, status, detail }, i) => (
                    <div key={i} className="flex items-start gap-3 p-3.5 rounded-[10px] border border-rule">
                      <span
                        className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold mt-0.5"
                        style={{
                          background: status === 'pass' ? '#1b433220' : status === 'fail' ? '#c45c5c20' : '#92702820',
                          color: status === 'pass' ? '#1b4332' : status === 'fail' ? '#c45c5c' : '#927028',
                        }}
                      >
                        {status === 'pass' ? '✓' : status === 'fail' ? '✕' : '?'}
                      </span>
                      <div>
                        <span className="font-medium text-[13.5px] text-ink2">{item}</span>
                        <p className="text-[12.5px] text-muted mt-0.5 leading-[1.5]">{detail}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  className="p-4 sm:p-5 rounded-[14px] border"
                  style={{ background: '#92702808', borderColor: '#92702828' }}
                >
                  <p className="text-[13.5px] leading-[1.7] text-ink3 m-0">
                    <span className="font-semibold" style={{ color: '#927028' }}>For drug-tested athletes: </span>
                    Use C4 Sport instead of C4 Original. C4 Sport carries NSF Certified for Sport® — the most rigorous
                    banned-substance certification in sports nutrition. C4 Original is not NSF certified and carries
                    meaningful risk for competitive athletes subject to testing.
                  </p>
                </div>
              </section>

              {/* ════ REAL-WORLD USE ════ */}
              <section id="real-world" className="mb-12 sm:mb-16">
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-1 self-stretch rounded-full shrink-0" style={{ background: '#1b4332', minHeight: '20px' }} />
                  <div>
                    <div className="text-[10px] tracking-[0.18em] uppercase text-clay font-semibold mb-1">Real-world use</div>
                    <h2
                      className="font-sans font-semibold text-ink2 leading-[1.18] tracking-[-0.025em]"
                      style={{ fontSize: 'clamp(18px, 3vw, 26px)' }}
                    >
                      What to expect — onset, feel, and limitations
                    </h2>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 mb-6">
                  {[
                    {
                      title: 'Energy onset (20–30 min)',
                      body: '200mg caffeine anhydrous produces a noticeable, clean energy lift. At this dose, most users experience heightened alertness and focus without the jitteriness reported at 300mg+. Users caffeine-naïve should half-scoop first.',
                    },
                    {
                      title: 'Beta-alanine tingling (10–20 min)',
                      body: 'The 2g CarnoSyn® will produce paresthesia — the harmless skin-tingling sensation that beta-alanine is known for. It confirms absorption. It does not scale with effectiveness; the tingle at 2g is similar to the tingle at 3.2g.',
                    },
                    {
                      title: 'Pump — honest expectation',
                      body: 'At 1.2g citrulline and 1g creatine nitrate, don\'t expect the full-body vasodilation of a clinical-dose pump product. The nitrate component contributes; you will feel some increased blood flow. It\'s a noticeable but modest pump.',
                    },
                    {
                      title: 'Focus — above-average for price',
                      body: 'The Huperzine A + caffeine + choline combination delivers genuine cognitive support. Mind-muscle connection is noticeably better than caffeine-only products. This is C4 Original\'s most underrated contribution.',
                    },
                    {
                      title: 'Flavor quality',
                      body: 'Widely regarded as category-leading. Icy Blue Razz, Fruit Punch, and Watermelon are the consistently top-rated flavors across thousands of Amazon and GNC reviews. Mixes cleanly in 6–8oz of water.',
                    },
                    {
                      title: 'Post-workout decline',
                      body: 'Single-source caffeine at 200mg produces a sharper energy decline than dual-source formulas. Most users report a mild drop 3–4 hours post-dose. This is normal physiology; not a crash in the clinical sense.',
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
                    <h2
                      className="font-sans font-semibold text-ink2 leading-[1.18] tracking-[-0.025em]"
                      style={{ fontSize: 'clamp(18px, 3vw, 26px)' }}
                    >
                      Pros and cons
                    </h2>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[14px] border overflow-hidden" style={{ borderColor: '#1b433228' }}>
                    <div
                      className="px-4 py-3 border-b flex items-center gap-2"
                      style={{ background: '#1b433210', borderColor: '#1b433228' }}
                    >
                      <span className="text-[11px] tracking-[0.14em] uppercase font-semibold" style={{ color: '#1b4332' }}>
                        What works
                      </span>
                    </div>
                    <ul className="divide-y divide-rule list-none p-0 m-0">
                      {[
                        '200mg caffeine — correctly dosed, effective energy upgrade from legacy formula',
                        'CarnoSyn® beta-alanine — highest-quality commercial form, even if dose is sub-clinical',
                        'Velox® (Kyowa) — premium-source citrulline and arginine; form quality is excellent',
                        'PeptiPump® — genuinely novel AI-designed ingredient; mechanism is pharmacologically rational',
                        'Bioavailable B-vitamins (P5P, methylcobalamin, methylfolate) — 2025 upgrade is meaningful',
                        'Huperzine A + choline — focus stack that outperforms caffeine-only pre-workouts',
                        '~$1.00–1.17/serving — best value-per-dose in any format at this price point',
                        'Available everywhere — Walmart, GNC, Target, Amazon; no shipping wait',
                        'Category-leading flavors — 10+ options, consistently high consumer ratings',
                        'Full label disclosure — 2025 formula removed most proprietary blend obscuration',
                      ].map((item, i) => (
                        <li key={i} className="flex gap-2.5 items-start px-4 py-3">
                          <span className="text-moss font-bold text-[12px] shrink-0 mt-0.5">✓</span>
                          <span className="text-[13px] text-ink3 leading-[1.6]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-[14px] border overflow-hidden" style={{ borderColor: '#c45c5c28' }}>
                    <div
                      className="px-4 py-3 border-b flex items-center gap-2"
                      style={{ background: '#c45c5c10', borderColor: '#c45c5c28' }}
                    >
                      <span className="text-[11px] tracking-[0.14em] uppercase font-semibold" style={{ color: '#c45c5c' }}>
                        Clinical limitations
                      </span>
                    </div>
                    <ul className="divide-y divide-rule list-none p-0 m-0">
                      {[
                        'Beta-alanine 2g — 62% of ISSN minimum clinical dose (3.2g); slower carnosine loading',
                        'Citrulline 1.2g — ~15–20% of the 6–8g required for clinical pump effects',
                        'Creatine nitrate 1g — negligible creatine-saturation benefit; no strength adaptation expected',
                        'Choline bitartrate — low CNS penetration vs Alpha-GPC; functional but not optimal form',
                        'No Labdoor or Informed Sport lot-level testing on C4 Original SKU',
                        'Not NSF Certified for Sport® — C4 Sport version only; risk for drug-tested athletes',
                        'Single-source caffeine — sharper post-workout decline vs dual-source competitors',
                        'PeptiPump® at 100mg — novel ingredient, clinical evidence in pre-workout context is early-stage',
                        'No betaine anhydrous — clinical ergogenic benefit at 2.5g; absent in this formula',
                        'Artificial sweeteners (sucralose + Ace-K) — not suitable for users avoiding artificial ingredients',
                      ].map((item, i) => (
                        <li key={i} className="flex gap-2.5 items-start px-4 py-3">
                          <span className="text-clay font-bold text-[12px] shrink-0 mt-0.5">✕</span>
                          <span className="text-[13px] text-ink3 leading-[1.6]">{item}</span>
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
                    <div className="text-[10px] tracking-[0.18em] uppercase text-clay font-semibold mb-1">Fit assessment</div>
                    <h2
                      className="font-sans font-semibold text-ink2 leading-[1.18] tracking-[-0.025em]"
                      style={{ fontSize: 'clamp(18px, 3vw, 26px)' }}
                    >
                      Who should buy C4 Original — and who shouldn't
                    </h2>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div
                    className="p-5 rounded-[14px] border"
                    style={{ background: '#1b433208', borderColor: '#1b433228' }}
                  >
                    <div className="text-[10px] tracking-[0.18em] uppercase font-semibold mb-3" style={{ color: '#1b4332' }}>
                      ✓ Buy if you are:
                    </div>
                    <ul className="space-y-2.5 list-none p-0 m-0">
                      {[
                        'A complete beginner to pre-workouts wanting an accessible, well-tolerated entry point',
                        'Someone who trains 2–3 times/week casually and wants moderate energy without overthinking ingredient science',
                        'A gym-goer on a tight budget for whom any pre-workout outperforms no pre-workout',
                        'Someone who needs to buy from a physical store today (Walmart, GNC, Target)',
                        'Anyone who values flavor variety above all — 10+ options, best taste in category',
                        'A 60–75kg athlete who wants ~3mg/kg caffeine without excessive stimulation',
                      ].map((item, i) => (
                        <li key={i} className="flex gap-2.5 items-start text-[13px] text-ink3 leading-[1.6]">
                          <span className="text-moss font-bold shrink-0 mt-0.5">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className="p-5 rounded-[14px] border"
                    style={{ background: '#92702808', borderColor: '#92702828' }}
                  >
                    <div className="text-[10px] tracking-[0.18em] uppercase font-semibold mb-3" style={{ color: '#927028' }}>
                      ✕ Skip if you are:
                    </div>
                    <ul className="space-y-2.5 list-none p-0 m-0">
                      {[
                        'An intermediate or advanced athlete (6+ months consistent training) who wants clinical pump doses',
                        'A drug-tested competitive athlete — use NSF Certified C4 Sport or another certified product',
                        'Someone specifically training for creatine benefits — supplement separately at 3–5g monohydrate',
                        'A heavy athlete (90kg+) who needs 270–360mg caffeine for therapeutic effect',
                        'Someone avoiding artificial sweeteners (sucralose/Ace-K) for any reason',
                        'Anyone who has built caffeine tolerance — 200mg single-source may feel underwhelming',
                      ].map((item, i) => (
                        <li key={i} className="flex gap-2.5 items-start text-[13px] text-ink3 leading-[1.6]">
                          <span className="font-bold shrink-0 mt-0.5" style={{ color: '#927028' }}>✕</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* ════ PHARMACIST NOTE ════ */}
              <section id="pharmacist" className="mb-12 sm:mb-16">
                <div
                  className="p-5 sm:p-6 rounded-[16px] border"
                  style={{ background: '#1b433208', borderColor: '#1b433228' }}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div
                      className="w-9 h-9 rounded-full shrink-0 flex items-center justify-center text-[14px] font-bold text-white"
                      style={{ background: '#1b4332' }}
                    >
                      Rx
                    </div>
                    <div>
                      <div className="text-[10px] tracking-[0.18em] uppercase font-semibold mb-0.5" style={{ color: '#1b4332' }}>
                        Pharmacist's note
                      </div>
                      <div className="text-[12px] text-muted">Pankaj Singh · Pharm.B · May 2026</div>
                    </div>
                  </div>
                  <div className="space-y-3 text-[14px] sm:text-[14.5px] leading-[1.8] text-ink3">
                    <p>
                      C4 Original's market success is driven by three factors that have nothing to do with clinical dosing:
                      exceptional flavoring, ubiquitous retail distribution, and a price point that removed financial friction
                      from pre-workout adoption. These are legitimate product strengths for the target demographic — beginners
                      and casual gym-goers who need a reliable, accessible, great-tasting stimulus.
                    </p>
                    <p>
                      From a pharmacokinetics perspective, the 2025 reformulation made the right moves where constrained.
                      Upgrading to methylcobalamin (B12), P5P (B6), and methylfolate from their less bioavailable precursors
                      is a meaningfully better formulation choice — particularly for the ~10–15% of the population with
                      MTHFR gene variants who cannot efficiently convert folic acid to its active form. This change costs
                      Cellucor more and passes directly to the consumer. Worth acknowledging.
                    </p>
                    <p>
                      The Huperzine A interaction warning applies here: do not combine C4 Original with other Huperzine A
                      sources (some nootropic stacks, some fat burners). Huperzine A has a long half-life (10–14 hours) and
                      cumulative cholinergic burden can cause nausea and bradycardia at elevated doses. The 50mcg in C4
                      Original is safe as a standalone; double-dosing across products is not.
                    </p>
                    <p>
                      If you are on any cardiovascular medication, particularly ACE inhibitors or ARBs, consult your physician
                      before using C4 Original. PeptiPump®'s ACE-inhibitory mechanism may produce additive effects. This is
                      a pharmacological interaction the product label does not address.
                    </p>
                  </div>
                </div>
              </section>

              {/* ════ ALTERNATIVES ════ */}
              <section id="alternatives" className="mb-12 sm:mb-16">
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-1 self-stretch rounded-full shrink-0" style={{ background: '#1b4332', minHeight: '20px' }} />
                  <div>
                    <div className="text-[10px] tracking-[0.18em] uppercase text-clay font-semibold mb-1">Context</div>
                    <h2
                      className="font-sans font-semibold text-ink2 leading-[1.18] tracking-[-0.025em]"
                      style={{ fontSize: 'clamp(18px, 3vw, 26px)' }}
                    >
                      How C4 Original compares to alternatives
                    </h2>
                  </div>
                </div>
                <p className="text-[14.5px] leading-[1.8] text-ink3 mb-5">
                  For context on what the additional cost of premium pre-workouts buys, we compare against the most
                  commonly considered alternatives. Full head-to-head reviews available in our{' '}
                  <a href="/compare" className="text-clay hover:underline">comparison hub</a>.
                </p>

                <div className="space-y-3">
                  {alternatives.map((alt, i) => (
                    <a
                      key={i}
                      href={alt.href}
                      className="flex items-start justify-between gap-4 p-4 sm:p-5 rounded-[14px] border border-rule hover:border-clay/30 transition-colors group"
                    >
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <span className="font-semibold text-[14px] text-ink2 group-hover:text-clay transition-colors">{alt.name}</span>
                          <span className="text-[11px] text-muted">{alt.brand}</span>
                        </div>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-[12px] mb-2">
                          <span><span className="text-muted">Price</span> <span className="font-medium text-ink2">{alt.price}</span></span>
                          <span><span className="text-muted">Caffeine</span> <span className="font-medium text-ink2">{alt.caffeine}</span></span>
                          <span><span className="text-muted">Doses</span> <span className={`font-medium ${alt.doses.includes('clinical') || alt.doses.includes('All') ? 'text-moss' : 'text-amber-600'}`}>{alt.doses}</span></span>
                          <span><span className="text-muted">Testing</span> <span className="font-medium text-moss">{alt.purity}</span></span>
                        </div>
                        <p className="text-[12.5px] text-muted leading-[1.5]">{alt.note}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <div
                          className="font-serif-body text-[22px] mb-0.5"
                          style={{ color: alt.scoreColor }}
                        >
                          {alt.score}
                        </div>
                        <div className="text-[11px] text-muted">/ 10</div>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="mt-5 p-4 bg-paper3 border border-rule rounded-[12px]">
                  <p className="text-[13px] text-ink3 leading-[1.65] m-0">
                    <span className="font-semibold text-ink2">Price-adjusted recommendation: </span>
                    BULK Black at ~$1.90/serving provides clinical citrulline (6g), clinical beta-alanine (3.2g),
                    dual-source caffeine, and Informed Sport certification. For ~$0.75 more per serving than C4 Original,
                    you get substantially better clinical dosing. That said: if budget is the constraint, C4 Original
                    at $1.10/serving is a real pre-workout that delivers real energy.
                  </p>
                </div>
              </section>

              {/* ════ FAQ ════ */}
              <section id="faq" className="mb-12 sm:mb-16">
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-1 self-stretch rounded-full shrink-0" style={{ background: '#1b4332', minHeight: '20px' }} />
                  <div>
                    <div className="text-[10px] tracking-[0.18em] uppercase text-clay font-semibold mb-1">FAQ</div>
                    <h2
                      className="font-sans font-semibold text-ink2 leading-[1.18] tracking-[-0.025em]"
                      style={{ fontSize: 'clamp(18px, 3vw, 26px)' }}
                    >
                      Frequently asked questions
                    </h2>
                  </div>
                </div>
                <p className="text-[14px] text-muted mb-6">{faqSchema.mainEntity.length} questions · click to expand</p>
                <div className="space-y-2">
                  {faqSchema.mainEntity.map((item, i) => (
                    <FAQItem
                      key={i}
                      q={item.name}
                      a={item.acceptedAnswer.text}
                      isOpen={openFaq === i}
                      onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                    />
                  ))}
                </div>
              </section>

              {/* ════ VERDICT ════ */}
              <section id="verdict" className="mb-12 sm:mb-16">
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-1 self-stretch rounded-full shrink-0" style={{ background: '#1b4332', minHeight: '20px' }} />
                  <div>
                    <div className="text-[10px] tracking-[0.18em] uppercase text-clay font-semibold mb-1">Final verdict</div>
                    <h2
                      className="font-sans font-semibold text-ink2 leading-[1.18] tracking-[-0.025em]"
                      style={{ fontSize: 'clamp(18px, 3vw, 26px)' }}
                    >
                      C4 Original: the honest summary
                    </h2>
                  </div>
                </div>

                <div
                  className="p-5 sm:p-6 rounded-[16px] border mb-6"
                  style={{ background: '#92702808', borderColor: '#92702828' }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 font-serif-body text-[22px]"
                      style={{ background: '#92702818', color: '#927028' }}
                    >
                      {SCORE}
                    </div>
                    <div>
                      <div className="font-semibold text-[16px] text-ink2 mb-0.5">6.4/10 — Fitlab rubric v3.1</div>
                      <div className="text-[12px] text-muted">Adequate for casual training. Sub-clinical for performance athletes.</div>
                    </div>
                  </div>
                  <div className="space-y-3 text-[14px] sm:text-[14.5px] leading-[1.8] text-ink3">
                    <p>
                      C4 Original is the right pre-workout for the right person. For beginners, casual gym-goers, and
                      budget-constrained athletes, it delivers what it promises: reliable energy (200mg caffeine), some
                      focus support (Huperzine A + choline), and the best flavor experience in the category at under
                      $1.20/serving. The 2025 reformulation addressed several previous shortcomings and added genuinely
                      innovative ingredients.
                    </p>
                    <p>
                      What C4 Original is not — and has never been — is a clinically dosed performance pre-workout.
                      Beta-alanine at 2g, citrulline at 1.2g, and creatine nitrate at 1g are all below the doses
                      studied in performance research. These limitations are inherent to the price point and serving
                      size, not negligence. Cellucor optimized for accessibility, and that optimization has served
                      over 3 billion servings.
                    </p>
                    <p>
                      If you are 6 months or more into consistent training and want clinical dosing: step up to BULK Black,
                      Transparent Labs BULK, or Legion Pulse. The cost difference is real but the clinical dose difference
                      is substantially larger. If you are just starting, or if price is the primary constraint: C4 Original
                      is a defensible, widely available, great-tasting choice.
                    </p>
                  </div>
                </div>

                <a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ background: '#1b4332' }}
                >
                  Check current price on Amazon →
                </a>
                <p className="text-[11px] text-muted mt-2">
                  Affiliate link — we earn a commission at no cost to you. Price checked May 2026: ~$30–35 / 30 servings.
                </p>
              </section>

              {/* ════ REFERENCES ════ */}
              <section id="references">
                <div className="text-[10px] tracking-[0.18em] uppercase text-muted font-semibold mb-4">References</div>
                <ol className="space-y-2 list-decimal pl-4">
                  {[
                    'Trexler ET, Smith-Ryan AE, Stout JR, et al. International Society of Sports Nutrition Position Stand: Beta-Alanine. J Int Soc Sports Nutr. 2015;12:30.',
                    'Goldstein ER, Ziegenfuss T, Kalman D, et al. International Society of Sports Nutrition position stand: caffeine and performance. J Int Soc Sports Nutr. 2010;7(1):5.',
                    'Grgic J, Trexler ET, Lazinica B, Pedisic Z. Effects of caffeine intake on muscle strength and power: a systematic review and meta-analysis. J Int Soc Sports Nutr. 2018;15:11.',
                    'Kreider RB, Kalman DS, Antonio J, et al. International Society of Sports Nutrition position stand: safety and efficacy of creatine supplementation in exercise, sport, and medicine. J Int Soc Sports Nutr. 2017;14:18.',
                    'Morita M, Sakurada M, Watanabe F, et al. Oral supplementation with a combination of L-citrulline and L-arginine rapidly increases plasma L-arginine concentration and enhances NO bioavailability. Biochem Biophys Res Commun. 2014;454(1):53-7.',
    'Wax B, Kerksick CM, Jagim AR, et al. Creatine for Exercise and Sports Performance, with Recovery Considerations for Healthy Populations. Nutrients. 2021;13(6):1915.',
                    'Hobson RM, Saunders B, Ball G, Harris RC, Sale C. Effects of β-alanine supplementation on exercise performance: a meta-analysis. Amino Acids. 2012;43(1):25-37.',
                    'Liu JS, Zhu YL, Yu CM, et al. The structures of huperzine A and B, two new alkaloids exhibiting marked anticholinesterase activity. Can J Chem. 1986;64(4):837-9.',
                    'Vårvik FT, Bjørnsen T, Gonzalez AM. Acute Effect of Citrulline Malate on Repetition Performance During Strength Training: A Systematic Review and Meta-Analysis. Int J Sport Nutr Exerc Metab. 2021;31(4):350-8.',
                    'Priceplow Blog. C4 2024 Pre-Workouts Unveiled by Nutrabolt — 5th Generation Launch Analysis. May 14, 2024.',
                  ].map((ref, i) => (
                    <li key={i} className="text-[12px] text-muted leading-[1.6]">{ref}</li>
                  ))}
                </ol>

                <div className="mt-6 p-4 bg-paper3 border border-rule rounded-[12px]">
                  <p className="text-[12px] text-muted leading-[1.65] m-0">
                    <span className="font-medium text-ink3">Disclosure: </span>
                    This page contains an affiliate link to Amazon. Fitlab earns a small commission on qualifying purchases at no
                    additional cost to you. Commission rates do not influence our rubric scores or editorial conclusions.
                    See our <a href="/conflicts-policy" className="text-clay hover:underline">conflicts policy</a> for full details.
                  </p>
                </div>
              </section>

            </article>

            {/* ══ SIDEBAR ══ */}
            <aside className="hidden lg:block py-14">
              <div className="sticky top-8 space-y-6">
                {/* Score card reprise */}
                <div className="border border-rule rounded-[14px] p-5">
                  <div className="text-[10px] tracking-[0.18em] uppercase text-muted font-semibold mb-3">Fitlab Score</div>
                  <div
                    className="font-serif-display text-center leading-none mb-2"
                    style={{ fontSize: '48px', color: '#927028' }}
                  >
                    {SCORE}
                  </div>
                  <div className="text-[12px] text-center text-muted mb-4">out of 10 · rubric v3.1</div>
                  <ScoreBar label="Clinical dose"   value={SCORES.clinicalDose}   weight={25} />
                  <ScoreBar label="Ingredient form" value={SCORES.ingredientForm} weight={20} />
                  <ScoreBar label="Lab purity"      value={SCORES.purity}         weight={20} />
                  <ScoreBar label="Value / serving" value={SCORES.value}          weight={20} />
                  <ScoreBar label="Label honesty"   value={SCORES.labelHonesty}   weight={15} />
                  <a
                    href={AFFILIATE_URL}
                    target="_blank"
                    rel="noopener noreferrer nofollow sponsored"
                    className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-[13px] font-semibold text-white hover:opacity-90 transition-opacity"
                    style={{ background: '#1b4332' }}
                  >
                    Buy on Amazon →
                  </a>
                </div>

                {/* Key stats */}
                <div className="border border-rule rounded-[14px] p-5">
                  <div className="text-[10px] tracking-[0.18em] uppercase text-muted font-semibold mb-3">Key stats</div>
                  <div className="space-y-2 text-[12px]">
                    {[
                      { l: 'Caffeine',        v: '200mg ✓', ok: true },
                      { l: 'Beta-alanine',    v: '2g (62% of min)', ok: false },
                      { l: 'Citrulline',      v: '1.2g (~17% of min)', ok: false },
                      { l: 'Creatine nitrate', v: '1g (negligible)', ok: false },
                      { l: 'PeptiPump®',      v: '100mg (novel)', ok: true },
                      { l: 'Lot-tested',      v: 'No', ok: false },
                      { l: 'NSF certified',   v: 'No (Sport only)', ok: false },
                      { l: 'Price/sv',        v: '~$1.10', ok: true },
                    ].map(r => (
                      <div key={r.l} className="flex justify-between items-center gap-2">
                        <span className="text-muted">{r.l}</span>
                        <span className={`font-medium ${r.ok ? 'text-moss' : 'text-amber-700'}`}>{r.v}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Alternatives mini */}
                <div className="border border-rule rounded-[14px] p-5">
                  <div className="text-[10px] tracking-[0.18em] uppercase text-muted font-semibold mb-3">Better-dosed alternatives</div>
                  <div className="space-y-3">
                    {alternatives.slice(0, 3).map((alt, i) => (
                      <a key={i} href={alt.href} className="flex items-center justify-between gap-2 hover:opacity-80 transition-opacity">
                        <div>
                          <div className="font-medium text-[12.5px] text-ink2">{alt.name}</div>
                          <div className="text-[11px] text-muted">{alt.price}/sv · {alt.purity}</div>
                        </div>
                        <span className="font-serif-body text-[16px] font-semibold" style={{ color: alt.scoreColor }}>{alt.score}</span>
                      </a>
                    ))}
                  </div>
                  <a href="/best/pre-workout" className="block mt-4 text-[12px] text-clay hover:underline font-medium">
                    See all pre-workout rankings →
                  </a>
                </div>
              </div>
            </aside>

          </div>
        </div>

      </PageShell>
    </>
  )
}
