'use client'
import { useState } from 'react'
import PageShell from '@/components/PageShell'
import JsonLd from '@/components/JsonLd'

const SITE_URL      = 'https://fitlabreviews.com'
const AFFILIATE_URL = 'https://36c32-nnt4jeguj3hik7vkqao5.hop.clickbank.net'

// ── Rubric scores — Fitlab v3.1 ───────────────────────────────────────────────
// CLINICAL DOSE  (25%): 4.5 — 15 ingredients named; 0 individual mg doses.
//   "Exact clinically proven quantities" claimed but unverifiable. Tea-bag
//   format adds extraction variability for EGCG, curcumin, betaine per steep.
// INGREDIENT FORM(20%): 6.0 — Hibiscus/ginger/green tea infusion = appropriate.
//   Curcumin <1% bioavailability in water without enhancer = critical form fail.
//   Hawthorn/grapeseed standardisation undisclosed. Cinnamon type unspecified.
// PURITY (20%): 3.0 — "Third-party tested" stated; no certifier named.
//   No Labdoor, NSF, Informed Sport, ConsumerLab record found. GMP claimed.
// VALUE (20%): 4.0 — ~$69/30 bags, $2.30/day; ~$46–92/month at 3–4 bags/day.
//   Hibiscus (50 bags ≈ $7), TMG (250g ≈ $22), beetroot (500g ≈ $18) commodity.
// LABEL HONESTY (15%): 4.5 — Positive: names all 15 ingredients.
//   Fails: no mg doses; "120/80 guaranteed"; "72-hour results"; "slashes heart
//   disease risk by 13%"; "natural antidepressant"; no finished-formula trial.
//
// WEIGHTED TOTAL: (4.5×.25)+(6.0×.20)+(3.0×.20)+(4.0×.20)+(4.5×.15) = 4.40

const SCORE  = 4.4
const SCORES = { clinicalDose: 4.5, ingredientForm: 6.0, purity: 3.0, value: 4.0, labelHonesty: 4.5 }

// ── JSON-LD ──────────────────────────────────────────────────────────────────
const productSchema = {
  '@context': 'https://schema.org', '@type': 'Product',
  name: 'Cardio Slim Tea',
  brand: { '@type': 'Brand', name: 'Truth Leaves' },
  description: 'Herbal tea blend with 15 named plant-based ingredients targeting homocysteine, blood pressure, and metabolism. No individual ingredient doses disclosed.',
  image: `${SITE_URL}/products/cardio-slimtea.webp`,
  offers: { '@type': 'Offer', priceCurrency: 'USD', price: '69', availability: 'https://schema.org/InStock', url: AFFILIATE_URL },
  review: {
    '@type': 'Review',
    author: { '@type': 'Organization', name: 'Fitlab Research Team', url: `${SITE_URL}/authors#fitlab-research-team` },
    datePublished: '2026-05-15', dateModified: '2026-05-15',
    name: 'Cardio Slim Tea Review (2026): 15 Ingredients, Homocysteine Claims Fact-Checked, Doses Audited',
    reviewBody: 'Cardio Slim Tea names 15 ingredients but discloses no individual mg doses. Homocysteine-flush mechanism is real biochemistry but overstated. Curcumin in tea without a bioavailability enhancer has <1% absorption. No finished-formula clinical trial. Score 4.4/10.',
    reviewRating: { '@type': 'Rating', ratingValue: '4.4', bestRating: '10', worstRating: '0' },
    publisher: { '@type': 'Organization', name: 'Fitlab Reviews', url: SITE_URL },
  },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.4', bestRating: '10', worstRating: '0', ratingCount: '1', reviewCount: '1' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Reviews', item: `${SITE_URL}/reviews` },
    { '@type': 'ListItem', position: 3, name: 'Cardiovascular', item: `${SITE_URL}/best/cardiovascular` },
    { '@type': 'ListItem', position: 4, name: 'Cardio Slim Tea', item: `${SITE_URL}/reviews/cardio-slim-tea` },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Does Cardio Slim Tea lower blood pressure?', acceptedAnswer: { '@type': 'Answer', text: 'Hibiscus, hawthorn, and grapeseed extract have clinical evidence for modest BP reductions (5–10 mmHg systolic). Individual mg doses per bag are undisclosed, so clinical sufficiency cannot be verified. No trial on the finished formula has been published.' } },
    { '@type': 'Question', name: 'Is the homocysteine-flush mechanism real?', acceptedAnswer: { '@type': 'Answer', text: 'The biochemistry is real. Elevated homocysteine is a cardiovascular risk marker; TMG (betaine) and B vitamins do reduce plasma homocysteine via BHMT and methionine synthase pathways. The marketing extension to weight loss via homocysteine is not supported by intervention literature.' } },
    { '@type': 'Question', name: 'Is Cardio Slim Tea safe alongside blood pressure medication?', acceptedAnswer: { '@type': 'Answer', text: 'No, not without prescriber guidance. Hibiscus, hawthorn, grapeseed, ginger, and dandelion all have additive hypotensive effects with antihypertensive medications. Grapeseed may raise warfarin levels. Hawthorn interacts with digoxin. Consult your prescriber before combining.' } },
    { '@type': 'Question', name: 'Why does Cardio Slim Tea not disclose milligram doses?', acceptedAnswer: { '@type': 'Answer', text: 'US dietary supplement law does not require individual mg disclosure for multi-ingredient products. The company claims "exact clinically proven quantities" without publishing them. This is legal but prevents independent verification of whether any ingredient reaches a clinical threshold.' } },
    { '@type': 'Question', name: 'Is curcumin in Cardio Slim Tea effective?', acceptedAnswer: { '@type': 'Answer', text: 'Standard curcumin in hot water has less than 1% bioavailability without a bioavailability enhancer (piperine/BioPerine, Meriva phospholipid, or nanoparticle formulation). Cardio Slim Tea does not disclose whether any enhancer is present. Without one, the curcumin component is effectively pharmacologically inert.' } },
    { '@type': 'Question', name: 'How long before Cardio Slim Tea shows results?', acceptedAnswer: { '@type': 'Answer', text: 'The "72-hour results" marketing claim is not supported by clinical evidence. Hibiscus and hawthorn — the strongest BP ingredients — show measurable effects in 4–12 week trials. Eight to twelve weeks of consistent daily use is the realistic minimum timeline.' } },
  ],
}

// ── Sub-components ────────────────────────────────────────────────────────────
const ScoreBar = ({ label, value, weight }: { label: string; value: number; weight: number }) => {
  const c = value >= 6 ? '#1b4332' : '#B95C3A'
  return (
    <div className="flex items-center gap-2 sm:gap-3 py-3 border-b border-rule last:border-b-0">
      <div className="w-[108px] sm:w-[138px] shrink-0">
        <div className="text-[11px] font-medium uppercase tracking-[0.08em] text-muted leading-tight">{label}</div>
        <div className="text-[10px] text-muted opacity-60 mt-0.5">{weight}% weight</div>
      </div>
      <div className="flex-1 h-[5px] rounded-full overflow-hidden min-w-0" style={{ background: '#E8E1D2' }}>
        <div className="h-full rounded-full"
             style={{ width: `${(value / 10) * 100}%`, background: value >= 6 ? 'linear-gradient(90deg,#1b4332,#52b788)' : 'linear-gradient(90deg,#B95C3A,#e07b5e)' }} />
      </div>
      <span className="font-serif-body text-[18px] w-7 text-right shrink-0" style={{ color: c }}>{value}</span>
    </div>
  )
}

const FAQItem = ({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) => (
  <div className={`border border-rule rounded-[12px] overflow-hidden ${isOpen ? 'bg-paper3' : 'bg-white hover:bg-paper3/60'}`}>
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

const EvidenceBadge = ({ tier }: { tier: 'A' | 'B' | 'C' | 'D' }) => {
  const m = { A: { bg: '#1b433218', c: '#1b4332' }, B: { bg: '#2d6a4f18', c: '#2d6a4f' }, C: { bg: '#92702818', c: '#927028' }, D: { bg: '#B95C3A18', c: '#B95C3A' } }[tier]
  return <span className="text-[11px] font-semibold tracking-[0.06em] uppercase rounded-full px-2 py-0.5 shrink-0" style={{ background: m.bg, color: m.c }}>Tier {tier}</span>
}

// ── Ingredient data ───────────────────────────────────────────────────────────
const ingredients = [
  { name: 'Beetroot Powder', marker: '○', evidenceTier: 'B' as const, clinicalThreshold: '250–500mg inorganic nitrate / 500ml concentrated juice daily', formOk: true as boolean | null, internalLink: '/ingredients/beetroot-powder', assessment: 'Beetroot nitrates convert to nitric oxide (NO) via oral microbiome reduction, causing vasodilation and reducing systolic blood pressure. A 2013 meta-analysis (Siervo et al.) found dietary nitrate reduced systolic BP by 4.4 mmHg. The homocysteine mechanism via betaine is real: betaine (trimethylglycine naturally occurring in beets) donates methyl groups to remethylate homocysteine to methionine via BHMT enzyme. Both pathways are pharmacologically legitimate. Clinical studies used 500ml beetroot juice or ~250mg nitrate daily — amounts that a single tea bag is unlikely to deliver unless packed primarily with beetroot powder. Nitrates and betaine are water-soluble, so hot-water extraction is appropriate.', flag: 'Dose per bag not disclosed — clinical amounts difficult to verify in tea format' },
  { name: 'TMG (Trimethylglycine)', marker: '○', evidenceTier: 'B' as const, clinicalThreshold: '2,500–6,000mg/day for homocysteine reduction in human trials', formOk: true as boolean | null, internalLink: '/ingredients/tmg-trimethylglycine', assessment: 'TMG is the most pharmacologically sound ingredient for the homocysteine claim. As a methyl donor, it directly supports the BHMT pathway that converts homocysteine to methionine, independent of B12 and folate. Clinical evidence at 2,500–6,000mg/day consistently reduces plasma homocysteine by 10–20%. TMG is water-soluble and would extract into hot water. The problem: those are gram-level doses. A tea bag shared across 15 ingredients almost certainly cannot deliver 2,500mg of TMG per bag, let alone 6,000mg. If the dose is sub-clinical (say, <500mg), homocysteine reduction will be minimal or unmeasurable.', flag: 'Clinical TMG doses (2.5–6g/day) are almost impossible to deliver via shared multi-herb tea bag' },
  { name: 'Hibiscus Flowers', marker: '○', evidenceTier: 'B' as const, clinicalThreshold: '10g dried hibiscus flowers as tea (per serving in key RCTs); 250mg standardised extract', formOk: true as boolean | null, internalLink: '/ingredients/hibiscus', assessment: 'Hibiscus is the strongest single ingredient in this formula. A 2010 Tufts RCT (McKay et al.) found 3 daily servings of hibiscus tea reduced systolic BP by 7.2 mmHg vs placebo. A 2015 meta-analysis (Serban et al.) confirmed systolic reductions of 7.58 mmHg in hypertensive populations. Critically, the trials used hibiscus in tea form — this is one case where the tea format is pharmacologically appropriate, not a compromise. Mechanism: ACE inhibitory activity + antioxidant anthocyanin effects. The Tufts study used ~3.75g hibiscus per serving × 3 servings = ~11g/day. Whether this product delivers equivalent hibiscus per bag is unknown without mg disclosure.', flag: null },
  { name: 'Hawthorn Berry', marker: '○', evidenceTier: 'B' as const, clinicalThreshold: '300–1,800mg/day standardised extract (1.8% vitexin or 10–20% OPC)', formOk: null as boolean | null, internalLink: '/ingredients/hawthorn-berry', assessment: 'Hawthorn has solid evidence as a cardiovascular tonic. The Cochrane-reviewed WS 1442 standardised extract (18.75% OPC) improved exercise tolerance in mild heart failure. BP effects are modest but consistent. Mechanism: OPC flavonoids inhibit ACE, dilate coronary vessels, and have mild positive inotropic effects. The form matters: WS 1442 at a specific OPC% is the evidence-backed form. Unspecified hawthorn berry powder has far lower and more variable OPC content. Drug interaction is the most important practical point: hawthorn has documented additive effects with digoxin (cardiac glycoside) that can cause arrhythmia — a clinically serious interaction.', flag: 'Documented digoxin interaction — serious concern for cardiac patients on glycoside therapy' },
  { name: 'Grapeseed Extract', marker: '○', evidenceTier: 'B' as const, clinicalThreshold: '150–300mg standardised OPC extract daily', formOk: null as boolean | null, internalLink: '/ingredients/grapeseed-extract', assessment: 'A 2016 meta-analysis (Zhang et al., Medicine) of 16 RCTs found grapeseed extract reduced systolic BP by 6.08 mmHg and diastolic by 2.8 mmHg. Effect was most pronounced in younger, obese participants with metabolic syndrome. Active compounds: proanthocyanidins (OPCs) that improve endothelial function via NO pathways. Standardisation to OPC percentage is essential — unstandardised powder has variable polyphenol content per gram. This product does not disclose standardisation level. Drug interaction note: grapeseed may inhibit CYP2C9, raising warfarin levels and bleeding risk.', flag: 'May inhibit CYP2C9 — warfarin interaction; OPC standardisation not disclosed' },
  { name: 'Decaffeinated Green Tea (EGCG)', marker: '○', evidenceTier: 'B' as const, clinicalThreshold: '300–700mg EGCG daily; ≥3 cups green tea equivalent', formOk: true as boolean | null, internalLink: '/ingredients/egcg-green-tea', assessment: 'Decaffeination is the right call — EGCG\'s cardiovascular benefits don\'t require caffeine, and removing it avoids BP spikes and sleep disruption in a product targeting cardiovascular users. A meta-analysis (Khalesi et al., 2014) found green tea catechins reduced systolic BP by 2.07 mmHg. For metabolism, EGCG modestly increases 24-hour energy expenditure by ~3–4% (Dulloo et al.). EGCG concentration per steep varies with water temperature, steep time, and herb weight per bag. Without knowing EGCG mg and standardisation %, clinical sufficiency is uncertain. Full analysis: see our ingredient guide.', flag: null },
  { name: 'Ginger Root', marker: '○', evidenceTier: 'C' as const, clinicalThreshold: '≥2g/day powdered ginger or 100–200mg gingerol standardised extract', formOk: true as boolean | null, internalLink: '/ingredients/ginger-root', assessment: 'A 2019 meta-analysis (Hasani et al.) of 6 RCTs found significant but modest BP reductions at ≥2g ginger/day. Anti-inflammatory effects via COX/LOX inhibition are real and may reduce cardiovascular risk factors over time. Ginger also inhibits thromboxane synthesis — an antiplatelet effect relevant for anyone on blood thinners. The marketing claim "slashes heart disease risk by 13%" is not attributable to any published ginger trial or meta-analysis we can identify. This specific statistic appears to be marketing-generated without a traceable source.', flag: '"Slashes heart disease risk by 13%" — source not attributable to any published ginger research' },
  { name: 'Oolong Tea', marker: '○', evidenceTier: 'C' as const, clinicalThreshold: '≥3 cups daily (observational); no definitive RCT dose established', formOk: true as boolean | null, internalLink: '/ingredients/oolong-tea', assessment: 'Observational Japanese studies associate regular oolong consumption with lower hypertension prevalence. Mechanistic data suggests partial thermogenic effect from combined caffeine-polyphenol interaction. However, this product is marketed as decaffeinated — if decaffeination applies to the oolong component as well, the thermogenic claim weakens significantly. Caffeine is the primary driver of oolong thermogenesis in human trials. Evidence for oolong thermogenesis independent of caffeine is sparse and not established at supplement doses.', flag: 'Thermogenesis claim dependent on caffeine; product is marketed as caffeine-free — inconsistency' },
  { name: 'Turmeric / Curcumin', marker: '!', evidenceTier: 'C' as const, clinicalThreshold: '500–2,000mg curcumin + 20mg piperine, or phospholipid/nanoparticle complex', formOk: false as boolean | null, internalLink: '/ingredients/turmeric-curcumin', assessment: 'Curcumin has extensive anti-inflammatory and antioxidant evidence — but this evidence is based entirely on formulations designed to overcome curcumin\'s notoriously poor absorption. Standard curcumin in hot water has less than 1% absolute bioavailability (Anand et al., Molecular Pharmaceutics, 2007). Bioavailability enhancers increase absorption 20–154×: piperine/BioPerine (20×), Meriva phospholipid complex (29×), Longvida nanoparticle (65×). Cardio Slim Tea does not disclose whether any enhancer is included. Without one, standard curcumin in tea is pharmacologically inert for vascular and anti-inflammatory claims. This is the single most significant formulation concern in the product.', flag: 'CRITICAL: Standard curcumin in tea has <1% bioavailability without piperine, Meriva, or nanoparticle carrier' },
  { name: 'Cinnamon', marker: '○', evidenceTier: 'C' as const, clinicalThreshold: '1–6g Ceylon cinnamon daily; Cassia >1g/day raises hepatotoxicity concern via coumarin', formOk: null as boolean | null, internalLink: '/ingredients/cinnamon', assessment: 'Cinnamon has moderate evidence for improving insulin sensitivity and reducing fasting blood glucose (Allen et al. 2013 meta-analysis: −10.3 mg/dL FBG reduction). The type distinction matters enormously for safety at daily use: Ceylon cinnamon (C. verum) has minimal coumarin; Cassia cinnamon (C. aromaticum, the common supermarket variety) has high coumarin content. Daily Cassia intake above 1g can cause hepatotoxicity in susceptible individuals. At the recommended 3–4 cups/day, coumarin accumulation from Cassia cinnamon could be a concern for regular long-term users. The product does not specify which type is used.', flag: 'Cinnamon type (Ceylon vs Cassia) not specified — Cassia at daily use doses has coumarin hepatotoxicity risk' },
  { name: 'Chamomile', marker: '○', evidenceTier: 'C' as const, clinicalThreshold: '1–2g dried flowers per cup (traditional dose); standardised apigenin extract 14–50mg', formOk: true as boolean | null, internalLink: '/ingredients/chamomile', assessment: 'Chamomile is included for stress-mediated BP support. The mechanistic rationale is reasonable: chronic psychological stress activates the HPA axis and sympathetic nervous system, raising BP through cortisol and catecholamine pathways. Chamomile\'s apigenin content binds GABA-A receptors with mild anxiolytic activity, which may reduce stress-triggered BP spikes. Direct evidence for chamomile as a BP-lowering agent is weak; stress-pathway modulation is the defensible mechanism. As a quality-of-life addition to a relaxing tea ritual, chamomile is appropriate. As a clinical BP ingredient, it\'s unsupported.', flag: null },
  { name: 'Dandelion Root', marker: '○', evidenceTier: 'C' as const, clinicalThreshold: '4–10ml fluid extract or 250–500mg standardised; diuresis studied at 8ml/dose', formOk: true as boolean | null, internalLink: '/ingredients/dandelion-root', assessment: 'Dandelion has genuine diuretic activity. A 2011 pilot study (Clare et al., Journal of Alternative and Complementary Medicine) found significant increases in urinary frequency and volume in healthy adults. Diuresis reduces circulating blood volume and can transiently lower BP — a legitimate mechanism. Dandelion also contains potassium, countering sodium-induced BP. Key drug interactions: potassium-sparing diuretics, lithium (diuresis affects lithium clearance and can raise plasma levels to toxicity), and additive hypotension with ACE inhibitors. Bloating reduction claim via diuresis is the most pharmacologically defensible claim tied to this ingredient.', flag: 'Interacts with lithium, ACE inhibitors, potassium-sparing diuretics — prescriber consultation essential' },
  { name: 'Lemongrass', marker: '○', evidenceTier: 'D' as const, clinicalThreshold: 'No established human clinical threshold for blood pressure or NO effects', formOk: null as boolean | null, internalLink: '/ingredients/lemongrass', assessment: 'Lemongrass (Cymbopogon citratus) has antioxidant properties and mild hypotensive effects in animal models and small observational data. Human RCT evidence for blood pressure is sparse. The "supports healthy nitric oxide production" marketing claim is extrapolated from in vitro and animal studies — not established in human supplement trials. Lemongrass is a pleasant, safe tea ingredient with a well-established culinary history. Characterising it as a nitric oxide support ingredient for clinical blood pressure management is ahead of the evidence base.', flag: 'Nitric oxide claim extrapolated from animal/in vitro data — no human RCT evidence for BP effect' },
  { name: 'Ginseng Root', marker: '○', evidenceTier: 'C' as const, clinicalThreshold: '200–400mg Panax ginseng extract (standardised 4–7% ginsenosides)', formOk: null as boolean | null, internalLink: '/ingredients/ginseng-root', assessment: 'Species disambiguation matters significantly. Panax ginseng has the most cardiovascular evidence; American ginseng has blood glucose data; Siberian ginseng (Eleutherococcus senticosus) is not true ginseng and has entirely different pharmacology. The product specifies only "Ginseng Root" with no species, extract type, or ginsenoside %. A 2012 systematic review found Panax ginseng modestly reduced fasting glucose (−0.31 mmol/L) and systolic BP (−1.77 mmHg). These effect sizes are real but small and dose-dependent. Without species and standardisation disclosure, this ingredient\'s expected contribution is speculative.', flag: 'Species and standardisation not specified — efficacy profiles differ significantly between ginseng types' },
  { name: '15th ingredient (unconfirmed)', marker: '○', evidenceTier: 'C' as const, clinicalThreshold: 'Varies by claimed identity', formOk: null as boolean | null, internalLink: '/research/cardio-slim-tea-ingredients', assessment: 'Multiple official and third-party sources list slightly different 15-ingredient rosters. Some include Gymnema sylvestre (traditionally used for blood sugar management); others conclude the list at 14. Until the manufacturer publishes a consistent, complete supplement facts panel with standardisation specifications, the exact identity of ingredient #15 cannot be confirmed from public materials. This review will be updated when official clarification is available.', flag: 'Identity inconsistent across official sources — update pending manufacturer confirmation' },
]

export default function CardioSlimTeaReview() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqItems = [
    { q: 'Does Cardio Slim Tea actually lower blood pressure?', a: 'Several individual ingredients — hibiscus, hawthorn, grapeseed extract — have clinical evidence for modest blood pressure reductions (5–10 mmHg systolic in the strongest trials). However, individual mg doses per bag are undisclosed, so we cannot verify clinical sufficiency. No peer-reviewed trial on the finished Cardio Slim Tea formula exists. The ingredients are right; the doses are unknown; the outcome claims are overstated.' },
    { q: 'Is the homocysteine-flush mechanism real?', a: 'The biochemistry is legitimate. Elevated plasma homocysteine is an established cardiovascular risk marker. TMG (betaine) does remethylate homocysteine to methionine via BHMT enzyme, reducing plasma levels. The clinical question is dose — effective homocysteine reduction requires 2,500–6,000mg TMG daily in human trials. Whether a multi-herb tea bag can deliver this is doubtful. The marketing extension linking homocysteine to belly fat is not supported by intervention literature.' },
    { q: 'Is Cardio Slim Tea safe alongside blood pressure medication?', a: 'No — not without prescriber guidance. Hibiscus, hawthorn, grapeseed, ginger, and dandelion all have additive hypotensive effects with antihypertensive medications. Grapeseed may raise warfarin levels (CYP2C9 inhibition). Hawthorn interacts with digoxin. Dandelion affects lithium clearance. If you take any cardiovascular medication, consult your doctor before starting this product.' },
    { q: 'Why does Cardio Slim Tea not disclose milligram doses?', a: "The company states ingredients are in 'exact clinically proven quantities' but publishes no per-ingredient mg amounts. US dietary supplement law does not require individual dose disclosure for multi-ingredient blends. Naming all 15 ingredients is meaningfully better than hiding them entirely — but without mg data, independent verification of whether any ingredient reaches a clinical threshold is impossible." },
    { q: 'Is curcumin in Cardio Slim Tea effective?', a: 'Standard curcumin in hot water has less than 1% absolute bioavailability without an enhancer. Piperine (BioPerine) increases absorption 20×; phospholipid complexes (Meriva) 29×; nanoparticle formulations (Longvida) 65×. Cardio Slim Tea does not disclose whether any such enhancer is present. Without confirmation, the curcumin component is pharmacologically inert for the anti-inflammatory and vascular claims made in marketing.' },
    { q: 'How long before Cardio Slim Tea shows results?', a: 'The "72-hour results" marketing claim is not supported by clinical data. Hibiscus and hawthorn — the strongest BP ingredients — show measurable effects in trials lasting 4–12 weeks. Acute effects from single-dose beetroot or hibiscus can occur within hours, but these are transient. Sustained, meaningful cardiovascular support requires 8–12 weeks of consistent daily use minimum.' },
  ]

  return (
    <>
      <JsonLd schema={[productSchema, breadcrumbSchema, faqSchema]} />
      <PageShell crumbs={[
        { label: 'Home', href: '/' },
        { label: 'Reviews', href: '/reviews' },
        { label: 'Cardiovascular', href: '/best/cardiovascular' },
        { label: 'Cardio Slim Tea' },
      ]}>

        {/* ── HERO ── */}
        <section className="py-12 sm:py-16 border-b border-rule">
          <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
            <div className="grid gap-8 lg:gap-14 lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_360px] items-start">

              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-4 text-[12px] text-muted">
                  <span className="uppercase tracking-[0.12em] font-medium">Truth Leaves</span>
                  <span>·</span>
                  <a href="/best/cardiovascular" className="text-clay hover:underline uppercase tracking-[0.1em] font-medium">Cardiovascular</a>
                  <span>·</span>
                  <span>Reviewed May 2026</span>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1.5 font-medium" style={{ color: '#B95C3A' }}>
                    <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: '#B95C3A' }} />
                    No finished-formula trial published
                  </span>
                </div>

                <h1 className="font-sans font-semibold leading-[1.05] tracking-[-0.03em] text-ink2 mb-3"
                    style={{ fontSize: 'clamp(21px, 3.4vw, 43px)' }}>
                  Cardio Slim Tea Review (2026):<br />
                  15 Ingredients, Homocysteine Claims<br className="hidden sm:block" />
                  Fact-Checked &amp; Doses Audited
                </h1>
                <p className="font-serif-body text-[16px] sm:text-[19px] text-muted mb-5" style={{ fontVariationSettings: '"opsz" 72' }}>
                  All 15 ingredients named. Zero milligram doses disclosed.
                  Here is what the published evidence actually says.
                </p>

                {/* Bottom line */}
                <div id="bottom-line" className="p-4 sm:p-5 border rounded-[12px] mb-4" style={{ background: '#B95C3A06', borderColor: '#B95C3A28' }}>
                  <div className="text-[11px] tracking-[0.16em] uppercase font-medium mb-2" style={{ color: '#B95C3A' }}>Bottom line</div>
                  <p className="text-[14px] leading-[1.7] text-ink3">
                    Cardio Slim Tea has a <strong className="text-ink2">conceptually sound formula</strong> — the homocysteine-flush mechanism is real biochemistry, hibiscus and hawthorn have genuine blood pressure evidence, and decaf green tea is the smart format call. The structural problems: <strong className="text-ink2">no individual mg doses disclosed</strong>, curcumin in tea without a named bioavailability enhancer has near-zero absorption, TMG's clinical dose (2.5–6g/day) is implausible in a multi-herb tea bag, and the marketing makes specific outcome guarantees not supported by any trial on this finished product. The ingredients are right. The doses are unverifiable. The claims are overstated.
                  </p>
                </div>

                {/* Author box — directly below bottom line as requested */}
                <div className="flex items-start gap-3 p-4 bg-paper3 border border-rule rounded-[12px] mb-5">
                  <a href="/authors#fitlab-research-team" className="w-9 h-9 rounded-full flex items-center justify-center text-white font-sans font-semibold text-[12px] shrink-0" style={{ background: '#2d6a4f' }}>FR</a>
                  <div className="min-w-0">
                    <div className="text-[12px] font-semibold text-ink2">
                      <a href="/authors#fitlab-research-team" className="hover:text-clay transition-colors">Fitlab Research Team</a>
                      <span className="text-muted font-normal"> · May 15, 2026</span>
                    </div>
                    <div className="text-[11.5px] text-muted leading-[1.55] mt-0.5">
                      Facts checked by <a href="/authors#pankaj-singh" className="text-clay hover:underline font-medium">Pankaj Singh, Pharm.B</a>
                      {' '}·{' '}<a href="/scoring-rubric" className="text-clay hover:underline">Rubric v3.1</a>
                      {' '}·{' '}<a href="/methodology" className="text-clay hover:underline">Methodology</a>
                    </div>
                  </div>
                </div>

                {/* Signal chips */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    { text: '15 ingredients named', w: false },
                    { text: '0 mg doses disclosed', w: true },
                    { text: 'Homocysteine mechanism — real', w: false },
                    { text: 'Curcumin bioavailability — critical concern', w: true },
                    { text: 'No independent lot certifier named', w: true },
                    { text: '"120/80 guarantee" — overstated', w: true },
                    { text: 'Decaf format — good call', w: false },
                    { text: 'Drug interactions with BP meds', w: true },
                  ].map(t => (
                    <span key={t.text} className="text-[11px] rounded-full px-2.5 py-1 font-medium"
                          style={t.w ? { background: '#B95C3A10', color: '#B95C3A', border: '1px solid #B95C3A28' } : { background: '#1b433210', color: '#1b4332', border: '1px solid #1b433228' }}>
                      {t.w ? '— ' : '+ '}{t.text}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 items-center">
                  <a href={AFFILIATE_URL} target="_blank" rel="nofollow sponsored"
                     className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-[13px] sm:text-[14px] font-medium bg-clay text-white hover:bg-clayd transition-all">
                    Check price →
                  </a>
                  <a href="/compare/cardio-slim-tea-vs-alternatives"
                     className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-[13px] sm:text-[14px] font-medium bg-paper3 text-ink2 border border-rule hover:border-clay transition-all">
                    Compare alternatives →
                  </a>
                  <span className="text-[11px] text-muted max-w-[200px] leading-[1.5]">Affiliate link · commission does not affect this score</span>
                </div>
              </div>

              {/* Score card */}
              <div className="bg-paper3 border border-rule rounded-[14px] overflow-hidden w-full min-w-0">
                <div className="relative border-b border-rule flex items-center justify-center"
                     style={{ aspectRatio: '4/3', background: 'linear-gradient(135deg,#0d1b12 0%,#1a3a22 50%,#0d2b1a 100%)' }}>
                  <img
                       src="/products/cardio-slimtea.webp"
                       alt="Cardio Slim Tea herbal tea bag pouch — Truth Leaves, 30 bags per box"
                       title="Cardio Slim Tea by Truth Leaves"
                       width="280" height="185"
                       className="h-full object-contain"
                       loading="eager"
                       onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
                     />
                  <div className="absolute top-3 right-3 bg-white/15 backdrop-blur-sm rounded-[10px] px-3 py-2 text-center">
                    <div className="font-serif-display leading-none" style={{ fontSize: '30px', color: '#e07b5e', fontVariationSettings: '"opsz" 96' }}>{SCORE}</div>
                    <div className="text-[10px] text-white/70 mt-0.5">/ 10</div>
                  </div>
                </div>

                <div className="p-4 sm:p-5">
                  <div className="text-center pb-4 mb-4 border-b border-rule">
                    <div className="text-[11px] tracking-[0.18em] uppercase text-muted mb-1">Fitlab Score</div>
                    <div className="font-serif-display leading-none" style={{ fontSize: '62px', color: '#B95C3A', fontVariationSettings: '"opsz" 96' }}>{SCORE}</div>
                    <div className="text-[12px] text-muted mt-1">out of 10 · <a href="/scoring-rubric" className="text-clay hover:underline">rubric v3.1</a></div>
                  </div>
                  <div className="mb-4">
                    <div className="text-[11px] tracking-[0.14em] uppercase text-muted font-medium mb-1">Rubric breakdown</div>
                    <ScoreBar label="Clinical dose"   value={SCORES.clinicalDose}   weight={25} />
                    <ScoreBar label="Ingredient form" value={SCORES.ingredientForm} weight={20} />
                    <ScoreBar label="Lab purity"      value={SCORES.purity}         weight={20} />
                    <ScoreBar label="Value/gram"      value={SCORES.value}          weight={20} />
                    <ScoreBar label="Label honesty"   value={SCORES.labelHonesty}   weight={15} />
                  </div>
                  <div className="space-y-2 text-[12px] border-t border-rule pt-4">
                    {[
                      { l: 'Format',           v: 'Herbal tea bags' },
                      { l: 'Serving',          v: '1 bag / cup · 3–4 cups/day' },
                      { l: 'Ingredients',      v: '15 named · 0 doses disclosed' },
                      { l: 'Finished trial',   v: 'None published' },
                      { l: 'Third-party cert', v: 'Claimed — certifier unnamed' },
                      { l: 'Manufacturer',     v: 'Truth Leaves · GMP claimed' },
                      { l: 'Price',            v: '~$69 / 30 bags' },
                      { l: 'Guarantee',        v: '60-day (BuyGoods/ClickBank)' },
                    ].map(r => (
                      <div key={r.l} className="flex justify-between items-start gap-2">
                        <span className="text-muted shrink-0">{r.l}</span>
                        <span className={`font-medium text-right ${r.l === 'Finished trial' || r.l === 'Third-party cert' ? 'text-amber-600' : 'text-ink2'}`}>{r.v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TOC ── */}
        <section className="py-6 border-b border-rule bg-paper2">
          <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
            <div className="skirt mb-3">In this review</div>
            <div className="flex flex-wrap gap-2">
              {[['What we reviewed', '#background'], ['Homocysteine mechanism', '#homocysteine'], ['Dose-disclosure gap', '#dose-gap'], ['Tea format limits', '#format'], ['All 15 ingredients', '#ingredients'], ['Marketing claims vs evidence', '#claims'], ['Safety & interactions', '#safety'], ['Pros & cons', '#pros-cons'], ['Who it\'s for', '#who-for'], ['Alternatives', '#alternatives'], ['FAQ', '#faq'], ['Verdict', '#verdict']].map(([l, h]) => (
                <a key={h} href={h} className="text-[12px] text-clay border border-clay/30 rounded-full px-3 py-1.5 hover:bg-clay/8 transition-colors whitespace-nowrap">{l}</a>
              ))}
            </div>
          </div>
        </section>

        {/* ── MAIN ── */}
        <article className="py-12 sm:py-16">
          <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_260px] xl:grid-cols-[1fr_280px] lg:gap-14 items-start">

              <div className="min-w-0 w-full">

                {/* BACKGROUND */}
                <section id="background" className="mb-14">
                  <h2 className="font-sans font-semibold text-[20px] sm:text-[24px] tracking-[-0.02em] text-ink2 mb-4 leading-[1.25]">What we reviewed and why</h2>
                  <p className="text-[15px] leading-[1.8] text-ink3 mb-4">Cardio Slim Tea is a herbal tea blend manufactured by Truth Leaves, sold via ClickBank and BuyGoods across multiple domains. It positions itself at the intersection of cardiovascular health and weight management — the dual-purpose claim is both its most interesting feature and its most oversold one. The product's central narrative — a "homocysteine-flush ritual" discovered in Costa Rica's Nicoya Peninsula Blue Zone — is compelling marketing. We reviewed it because the underlying pharmacology is more nuanced than most competitors, and because the cardiovascular-plus-weight-loss tea category is growing with almost no independent dose-level scrutiny.</p>
                  <p className="text-[15px] leading-[1.8] text-ink3 mb-4">Our approach: label analysis against <a href="/methodology" className="text-clay hover:underline">Fitlab methodology</a>, evidence grading per ingredient, marketing claim verification, and scoring against <a href="/scoring-rubric" className="text-clay hover:underline">rubric v3.1</a>. We were not compensated by Truth Leaves. The affiliate link generates a commission — it had no influence on the score or conclusions. See our <a href="/conflicts-policy" className="text-clay hover:underline">conflicts policy</a>.</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="p-4 bg-clay/8 border border-clay/20 rounded-[12px]">
                      <div className="text-[11px] tracking-[0.14em] uppercase font-semibold text-clay mb-3">What this review can assess</div>
                      <ul className="space-y-2 text-[13px] text-ink3 list-none p-0 m-0">
                        {['Clinical evidence for each named ingredient', 'Whether the homocysteine mechanism is real', 'Curcumin bioavailability in tea format', 'Drug interactions — several are significant', 'Which marketing claims are not supported', 'How stated doses compare to studied thresholds'].map((t, i) => (
                          <li key={i} className="flex gap-2"><span className="text-clay shrink-0">+</span>{t}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4 bg-paper3 border border-rule rounded-[12px]">
                      <div className="text-[11px] tracking-[0.14em] uppercase font-semibold text-muted mb-3">What this review cannot assess</div>
                      <ul className="space-y-2 text-[13px] text-ink3 list-none p-0 m-0">
                        {['Individual mg per ingredient (not disclosed)', 'Actual EGCG/OPC/ginsenoside concentration per bag', 'Whether a curcumin enhancer is present', 'Batch-to-batch consistency', 'Third-party testing results (no certifier named)'].map((t, i) => (
                          <li key={i} className="flex gap-2"><span className="text-muted shrink-0">–</span>{t}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>

                {/* HOMOCYSTEINE */}
                <section id="homocysteine" className="mb-14">
                  <h2 className="font-sans font-semibold text-[20px] sm:text-[24px] tracking-[-0.02em] text-ink2 mb-4 leading-[1.25]">The homocysteine mechanism — what's real and what's oversold</h2>
                  <p className="text-[15px] leading-[1.8] text-ink3 mb-4">Cardio Slim Tea's core claim is that elevated homocysteine is the "root cause" of both high blood pressure and stubborn belly fat, and that flushing homocysteine resolves both. Let's separate the pharmacology from the marketing extension.</p>
                  <div className="space-y-4 mb-5">
                    <div className="p-4 sm:p-5 bg-clay/8 border border-clay/20 rounded-[12px]">
                      <div className="font-semibold text-[14px] text-clay mb-2">What is established</div>
                      <p className="text-[13.5px] leading-[1.7] text-ink3">Hyperhomocysteinemia (&gt;15 µmol/L) is an independent cardiovascular risk factor. Elevated levels damage vascular endothelium, impair nitric oxide bioavailability, promote arterial stiffness, and increase thrombotic risk. The association with cardiovascular disease is robust across epidemiological data. Betaine (TMG) and B vitamins genuinely lower plasma homocysteine via established enzymatic pathways (BHMT and methionine synthase). The biochemistry is textbook.{' '}<a href="/research/homocysteine-heart-disease" className="text-clay hover:underline text-[13px]">[Research guide — publishing soon]</a></p>
                    </div>
                    <div className="p-4 sm:p-5 border rounded-[12px]" style={{ background: '#B95C3A06', borderColor: '#B95C3A25' }}>
                      <div className="font-semibold text-[14px] mb-2" style={{ color: '#B95C3A' }}>Where the marketing overreaches</div>
                      <ul className="space-y-2.5 text-[13.5px] text-ink3 leading-[1.65] list-none p-0 m-0">
                        {[
                          'Homocysteine is a cardiovascular risk marker, not the mechanistic cause of hypertension. Blood pressure is regulated by multiple independent systems (RAAS, SNS, fluid volume, vascular compliance). Homocysteine is one contributing pathway, not the master switch.',
                          'The obesity-homocysteine link is correlational, not causal. Elevated homocysteine is associated with metabolic syndrome, but lowering homocysteine in clinical trials does not reliably produce weight loss. The "belly fat via homocysteine flush" claim has no RCT support.',
                          'The "homocysteine paradox": clinical trials using folic acid + B12 to lower homocysteine have consistently failed to reduce cardiovascular events despite successfully lowering plasma levels. This suggests homocysteine is a marker, not the cause — which limits the clinical value of homocysteine-lowering as an isolated intervention.',
                        ].map((t, i) => (
                          <li key={i} className="flex gap-2.5"><span className="shrink-0 font-bold mt-0.5" style={{ color: '#B95C3A' }}>–</span>{t}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>

                {/* DOSE GAP */}
                <section id="dose-gap" className="mb-14">
                  <h2 className="font-sans font-semibold text-[20px] sm:text-[24px] tracking-[-0.02em] text-ink2 mb-4 leading-[1.25]">The dose-disclosure gap</h2>
                  <p className="text-[15px] leading-[1.8] text-ink3 mb-5">All 15 ingredients are named on the label — meaningfully better than a full proprietary blend. But no per-ingredient milligram amount is disclosed. The company states ingredients are in "exact clinically proven quantities" — unverifiable without the data. Here is what clinical doses actually require:</p>
                  <div className="border border-rule rounded-[14px] overflow-hidden mb-5">
                    <div className="px-5 py-3 bg-paper2 border-b border-rule">
                      <span className="text-[11px] tracking-[0.14em] uppercase text-muted font-medium">Clinical dose requirements vs tea-bag feasibility</span>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-[12.5px]" style={{ minWidth: '440px' }}>
                        <thead>
                          <tr className="border-b border-rule bg-paper3">
                            <th className="text-left text-muted font-medium py-2.5 px-4">Ingredient</th>
                            <th className="text-right text-muted font-medium py-2.5 px-4">Clinical dose/day</th>
                            <th className="text-right text-muted font-medium py-2.5 px-4">Tea feasibility</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-rule">
                          {[
                            { i: 'TMG', d: '2,500–6,000mg', ok: false, n: 'Gram-level dose — implausible in multi-herb bag' },
                            { i: 'Hibiscus', d: '10g dried (3 servings)', ok: true, n: 'If ≥3g hibiscus per bag' },
                            { i: 'Hawthorn extract', d: '300–1,800mg std.', ok: false, n: 'Standardised extract hard in tea format' },
                            { i: 'Grapeseed OPCs', d: '150–300mg std.', ok: null, n: 'Possible if OPC-standardised' },
                            { i: 'Curcumin', d: '500–2,000mg + enhancer', ok: false, n: '<1% bioavailability in water' },
                            { i: 'Beetroot nitrate', d: '250–500mg nitrate', ok: null, n: 'If primary herb in bag' },
                            { i: 'EGCG', d: '300–700mg', ok: null, n: 'Depends on EGCG% and steep' },
                            { i: 'Ginger root', d: '≥2g/day', ok: true, n: 'Achievable in strong brew' },
                            { i: 'Cinnamon', d: '1–6g Ceylon', ok: true, n: 'Achievable — type must be Ceylon' },
                          ].map(r => (
                            <tr key={r.i}>
                              <td className="py-3 px-4 font-medium text-ink2">{r.i}</td>
                              <td className="py-3 px-4 text-right text-muted">{r.d}</td>
                              <td className="py-3 px-4 text-right">
                                {r.ok === true && <span className="text-moss font-semibold">Feasible</span>}
                                {r.ok === false && <span className="font-semibold" style={{ color: '#B95C3A' }}>Unlikely</span>}
                                {r.ok === null && <span className="text-amber-600 font-semibold">? Unknown</span>}
                                <div className="text-[10.5px] text-muted">{r.n}</div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <p className="text-[14px] leading-[1.75] text-ink3">The three ingredients with the largest gap between clinical dose and tea-bag feasibility — TMG (the homocysteine claim), curcumin (the anti-inflammatory claim), and hawthorn (the cardiovascular tonic claim) — are also the three most prominently marketed. This reflects the fundamental tension between gram-level clinical doses and a multi-herb tea bag format.</p>
                </section>

                {/* FORMAT */}
                <section id="format" className="mb-14">
                  <h2 className="font-sans font-semibold text-[20px] sm:text-[24px] tracking-[-0.02em] text-ink2 mb-4 leading-[1.25]">Tea format: when it works and when it doesn't</h2>
                  <div className="grid gap-3 sm:grid-cols-2 mb-5">
                    <div className="p-4 bg-clay/8 border border-clay/20 rounded-[12px]">
                      <div className="text-[11px] tracking-[0.14em] uppercase font-semibold text-clay mb-3">Appropriate for tea format</div>
                      <ul className="space-y-2 text-[13px] text-ink3 list-none p-0 m-0">
                        {[['Hibiscus', 'Key RCTs used hibiscus infusion'], ['Ginger', 'Gingerols are water-soluble; decoction used clinically'], ['Green tea', 'EGCG extracts reasonably in hot water'], ['Chamomile', 'Traditional infusion; apigenin water-extractable'], ['Dandelion root', 'Traditional decoction; taraxacin water-soluble'], ['Beetroot', 'Nitrates and betaine highly water-soluble']].map(([i, n]) => (
                          <li key={i} className="flex gap-2"><span className="text-clay shrink-0">+</span><div><span className="font-medium">{i}</span> — <span className="text-muted">{n}</span></div></li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4 border rounded-[12px]" style={{ background: '#B95C3A05', borderColor: '#B95C3A25' }}>
                      <div className="text-[11px] tracking-[0.14em] uppercase font-semibold mb-3" style={{ color: '#B95C3A' }}>Problematic in tea format</div>
                      <ul className="space-y-2 text-[13px] text-ink3 list-none p-0 m-0">
                        {[['Curcumin', 'Water-insoluble; <1% bioavailability; enhancer needed'], ['TMG at clinical dose', '2.5–6g/day; impossible in multi-herb bag'], ['Hawthorn extract', 'WS 1442 standardised form not deliverable as tea'], ['Grapeseed OPCs', 'OPC% standardisation critical; undisclosed']].map(([i, n]) => (
                          <li key={i} className="flex gap-2"><span className="shrink-0 font-bold" style={{ color: '#B95C3A' }}>–</span><div><span className="font-medium">{i}</span> — <span className="text-muted">{n}</span></div></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="p-4 bg-amber-50 border border-amber-200 rounded-[12px]">
                    <p className="text-[13.5px] text-amber-900 leading-[1.65]">
                      <strong>The curcumin bioavailability problem, in full:</strong> Standard curcumin has 1% absolute bioavailability in humans (Anand et al., <em>Molecular Pharmaceutics</em>, 2007). Clinical trials showing curcumin's anti-inflammatory and vascular benefits all use enhanced formulations: BioPerine® (piperine, increases absorption 20×), Meriva® phospholipid complex (29×), Longvida® nanoparticles (65×). Without a named enhancer in this product, the curcumin-based anti-inflammatory and vascular claims are unsupported.{' '}
                      <a href="/ingredients/turmeric-curcumin" className="text-amber-800 hover:underline font-medium">Full curcumin bioavailability guide →</a>
                    </p>
                  </div>
                </section>

                {/* INGREDIENTS */}
                <section id="ingredients" className="mb-14">
                  <h2 className="font-sans font-semibold text-[20px] sm:text-[24px] tracking-[-0.02em] text-ink2 mb-2 leading-[1.25]">All 15 ingredients — evidence and dose analysis</h2>
                  <p className="text-[14px] text-muted mb-6">Assessed against <a href="/methodology" className="text-clay hover:underline">Fitlab evidence framework</a> and published clinical thresholds. Evidence tiers: <span className="font-semibold" style={{ color: '#1b4332' }}>A</span> (strong RCTs) → <span className="font-semibold" style={{ color: '#B95C3A' }}>D</span> (insufficient human data).</p>
                  <div className="space-y-3">
                    {ingredients.map((ing, i) => (
                      <div key={i} className="border border-rule rounded-[14px] overflow-hidden">
                        <div className="flex flex-wrap items-start justify-between gap-2 px-4 py-3 bg-paper3 border-b border-rule">
                          <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                              <span className="font-semibold text-[14px] text-ink2">{ing.name}</span>
                              <EvidenceBadge tier={ing.evidenceTier} />
                              <a href={ing.internalLink} className="text-[11px] text-clay hover:underline font-medium">Guide →</a>
                            </div>
                            <div className="text-[12px] text-muted">Clinical threshold: <span className="text-ink3">{ing.clinicalThreshold}</span></div>
                          </div>
                          <span className="shrink-0 text-[11px] font-semibold rounded-full px-2.5 py-1"
                                style={ing.formOk === true ? { background: '#1b433215', color: '#1b4332' } : ing.formOk === false ? { background: '#B95C3A15', color: '#B95C3A' } : { background: '#92702815', color: '#927028' }}>
                            {ing.formOk === true ? 'Form: Good' : ing.formOk === false ? 'Form: Concern' : '? Form: Unspecified'}
                          </span>
                        </div>
                        <div className="px-4 py-4">
                          <p className="text-[13.5px] leading-[1.7] text-ink3 mb-0">{ing.assessment}</p>
                          {ing.flag && (
                            <div className="mt-3 flex items-start gap-2 p-3 rounded-[8px]"
                                 style={ing.flag.startsWith('CRITICAL') ? { background: '#B95C3A12', border: '1px solid #B95C3A28' } : { background: '#92702810', border: '1px solid #92702828' }}>
                              <span className="shrink-0 font-bold text-[12px]" style={ing.flag.startsWith('CRITICAL') ? { color: '#B95C3A' } : { color: '#927028' }}>—</span>
                              <span className="text-[12.5px] font-medium" style={ing.flag.startsWith('CRITICAL') ? { color: '#B95C3A' } : { color: '#927028' }}>{ing.flag}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* CLAIMS AUDIT */}
                <section id="claims" className="mb-14">
                  <h2 className="font-sans font-semibold text-[20px] sm:text-[24px] tracking-[-0.02em] text-ink2 mb-4 leading-[1.25]">Marketing claims vs published evidence</h2>
                  <div className="space-y-3">
                    {[
                      { claim: '"Bring your blood pressure back to a healthy 120/80"', verdict: 'Overstated', vc: '#B95C3A', analysis: 'No dietary supplement can guarantee a specific blood pressure outcome. The strongest ingredients (hibiscus, hawthorn, grapeseed) reduce systolic BP by 5–10 mmHg on average in clinical trials — meaningful support, not normalisation. This phrasing constitutes drug claim territory under FDA guidelines.' },
                      { claim: '"Results in as little as 72 hours"', verdict: 'Not supported', vc: '#B95C3A', analysis: 'Acute hypotensive effects from single doses of beetroot or hibiscus can occur within hours but are transient. Meaningful blood pressure normalisation at supplement doses requires 4–12 weeks of consistent daily use based on the clinical trial literature.' },
                      { claim: '"Slashes heart disease risk by 13%" (attributed to ginger)', verdict: 'Unattributable', vc: '#B95C3A', analysis: 'We could not locate any published trial or meta-analysis attributing a 13% reduction in heart disease risk to ginger supplementation. This specific figure does not appear in any ginger systematic review or RCT we identified. No source is cited on the product page.' },
                      { claim: '"Drops blood pressure by 14 points" (attributed to green tea)', verdict: 'Misattributed', vc: '#B95C3A', analysis: 'The meta-analytic evidence for green tea catechins shows systolic reductions of approximately 2 mmHg. 14 mmHg reductions are associated with antihypertensive medications. The study likely cited was large epidemiological/observational data, not a controlled intervention trial.' },
                      { claim: '"Clinically proven to flush out homocysteine"', verdict: 'Overclaimed', vc: '#927028', analysis: 'Individual ingredients (TMG, betaine) have clinical evidence for homocysteine reduction. "Clinically proven" applied to a specific product requires a published trial on that formula at its disclosed doses. No such trial has been published for Cardio Slim Tea.' },
                      { claim: '"Like a natural antidepressant"', verdict: 'Drug claim — not appropriate', vc: '#B95C3A', analysis: 'This implies treatment of depression, which is an FDA-defined drug claim for a dietary supplement. Chamomile has mild anxiolytic properties; this does not constitute antidepressant activity in any clinical sense.' },
                      { claim: '"Third-party tested for purity and potency"', verdict: 'Unverified', vc: '#927028', analysis: 'No certifier is named — no Labdoor record, NSF certification number, Informed Sport badge, or ConsumerLab report found in public sources. Third-party testing without a named certifier or accessible test report is not independently verifiable.' },
                    ].map((item, i) => (
                      <div key={i} className="p-4 sm:p-5 bg-paper3 border border-rule rounded-[12px]">
                        <div className="flex flex-wrap items-start gap-2 mb-2">
                          <span className="font-medium text-[13.5px] text-ink2 italic">"{item.claim}"</span>
                          <span className="shrink-0 text-[10px] font-semibold tracking-[0.08em] uppercase rounded-full px-2 py-0.5"
                                style={{ background: `${item.vc}18`, color: item.vc }}>{item.verdict}</span>
                        </div>
                        <p className="text-[13px] leading-[1.65] text-ink3">{item.analysis}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* SAFETY */}
                <section id="safety" className="mb-14">
                  <h2 className="font-sans font-semibold text-[20px] sm:text-[24px] tracking-[-0.02em] text-ink2 mb-4 leading-[1.25]">Safety and drug interactions</h2>
                  <div className="p-4 border-l-2 mb-5 rounded-r-[12px]" style={{ borderColor: '#B95C3A', background: '#B95C3A06' }}>
                    <p className="text-[12.5px] text-muted"><strong className="text-ink2">This section carries pharmacist sign-off (Pankaj Singh, Pharm.B).</strong> Educational — not a substitute for advice from your prescribing physician.</p>
                  </div>
                  <p className="text-[15px] leading-[1.8] text-ink3 mb-5">This product contains several herbs with documented cardiovascular activity. Combinations with prescription cardiovascular medications pose real additive-effect risks. Do not add this product to your routine without prescriber guidance if you take:</p>
                  <div className="space-y-3">
                    {[
                      { c: 'Antihypertensives (ACE inhibitors, ARBs, beta-blockers, CCBs)', r: 'High concern', b: 'bg-red-50 border-red-200', t: 'bg-red-100 text-red-700', n: 'Hibiscus, hawthorn, grapeseed extract, dandelion, and ginger all have additive hypotensive effects with prescribed antihypertensives. Multiple BP-active herbs combined with antihypertensive medication creates a real hypotension risk — dizziness, falls, syncope. The most important single interaction for this product.' },
                      { c: 'Digoxin and cardiac glycosides', r: 'High concern', b: 'bg-red-50 border-red-200', t: 'bg-red-100 text-red-700', n: 'Hawthorn has documented positive inotropic effects that are additive with digoxin. The combination risks cardiac arrhythmia. This is a known herb-drug interaction listed in pharmacopoeial drug interaction references. Patients on digoxin should avoid hawthorn-containing products unless under cardiology supervision.' },
                      { c: 'Warfarin and anticoagulants (apixaban, rivaroxaban)', r: 'High concern', b: 'bg-red-50 border-red-200', t: 'bg-red-100 text-red-700', n: 'Grapeseed extract may inhibit CYP2C9, the enzyme that metabolises warfarin, raising plasma warfarin levels and bleeding risk. Ginger has antiplatelet properties. Patients on anticoagulation should not add this product without haematological monitoring.' },
                      { c: 'Lithium', r: 'Timing concern', b: 'bg-amber-50 border-amber-200', t: 'bg-amber-100 text-amber-700', n: 'Dandelion root has diuretic activity that reduces lithium clearance, potentially raising plasma lithium to toxic levels. Patients on lithium for bipolar disorder should consult their psychiatrist before adding any herbal diuretic product.' },
                      { c: 'Antidiabetics (metformin, sulfonylureas, insulin)', r: 'Be aware', b: 'bg-blue-50 border-blue-200', t: 'bg-blue-100 text-blue-700', n: 'Cinnamon and ginseng both lower blood glucose. Combined with antidiabetic medications, hypoglycaemia is a theoretical concern. Monitor blood glucose more frequently when starting this product.' },
                      { c: 'Immunosuppressants (cyclosporine, tacrolimus)', r: 'Be aware', b: 'bg-blue-50 border-blue-200', t: 'bg-blue-100 text-blue-700', n: 'Grapeseed extract may inhibit CYP3A4, the primary enzyme metabolising many immunosuppressants. This could raise drug levels unpredictably. Organ transplant patients should not add grapeseed-containing products without transplant physician approval.' },
                      { c: 'Pregnancy', r: 'Avoid', b: 'bg-red-50 border-red-200', t: 'bg-red-100 text-red-700', n: 'Hibiscus has traditional emmenagogue use and stimulates uterine contractions. Lemongrass and dandelion have insufficient pregnancy safety data. This product should not be used during pregnancy.' },
                    ].map(item => (
                      <div key={item.c} className={`flex gap-3 p-4 ${item.b} border rounded-[12px]`}>
                        <div className="shrink-0 mt-0.5"><span className={`text-[10px] font-semibold tracking-[0.1em] uppercase rounded-full px-2.5 py-1 whitespace-nowrap ${item.t}`}>{item.r}</span></div>
                        <div className="min-w-0">
                          <div className="font-semibold text-[13.5px] text-ink2 mb-1">{item.c}</div>
                          <p className="text-[13px] text-ink3 leading-[1.6] m-0">{item.n}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* PROS/CONS */}
                <section id="pros-cons" className="mb-14">
                  <h2 className="font-sans font-semibold text-[20px] sm:text-[24px] tracking-[-0.02em] text-ink2 mb-6 leading-[1.25]">Pros and cons</h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="bg-paper3 border border-clay/20 rounded-[14px] overflow-hidden">
                      <div className="px-5 py-3 border-b border-clay/15" style={{ background: '#1b433210' }}>
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full flex items-center justify-center text-white text-[11px] font-bold shrink-0" style={{ background: '#1b4332' }}>✓</span>
                          <span className="text-[11px] tracking-[0.16em] uppercase font-semibold text-clay">What holds up</span>
                        </div>
                      </div>
                      <ul className="p-5 space-y-3 list-none m-0">
                        {[
                          { t: 'All 15 ingredients named — better than hiding them in a proprietary blend', s: true },
                          { t: 'Homocysteine-flush mechanism is real biochemistry — a genuinely unusual category USP', s: true },
                          { t: 'Decaffeinated format avoids BP spikes and sleep disruption — smart product decision', s: false },
                          { t: 'Hibiscus is the strongest ingredient and is used in the appropriate (tea) format', s: false },
                          { t: 'TMG is the correct ingredient for the homocysteine claim — if dosed clinically', s: false },
                          { t: 'Laxative-free — avoids the senna dependency problem in most "detox" teas', s: false },
                          { t: 'GMP-certified facility, US-manufactured — appropriate manufacturing standard', s: false },
                          { t: '60-day money-back via BuyGoods — real and honoured refund policy', s: false },
                        ].map((pro, i) => (
                          <li key={i} className="flex gap-2.5 text-[13.5px] text-ink3 leading-[1.55]">
                            <span className="text-clay font-bold shrink-0 mt-0.5">+</span>
                            {pro.s ? <strong className="font-semibold text-ink2">{pro.t}</strong> : pro.t}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-paper3 border border-rule rounded-[14px] overflow-hidden">
                      <div className="px-5 py-3 border-b border-rule bg-paper2">
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full border border-muted flex items-center justify-center text-muted text-[11px] font-bold shrink-0">–</span>
                          <span className="text-[11px] tracking-[0.16em] uppercase font-semibold text-muted">What fails the rubric</span>
                        </div>
                      </div>
                      <ul className="p-5 space-y-3 list-none m-0">
                        {[
                          { t: 'Zero individual mg doses — "clinically proven quantities" is an unverifiable assertion', w: true },
                          { t: 'Curcumin in tea without a named bioavailability enhancer is pharmacologically inert', w: true },
                          { t: 'TMG clinical dose (2.5–6g/day) is implausible in a shared multi-herb tea bag', w: true },
                          { t: 'No named third-party certifier — "third-party tested" claim is unverifiable from public data', w: true },
                          { t: '"120/80 guaranteed" and "72-hour results" — neither is clinically defensible', w: false },
                          { t: 'Cinnamon type not disclosed — Cassia daily use has coumarin hepatotoxicity risk', w: false },
                          { t: 'Significant drug interactions (digoxin, warfarin) inadequately surfaced in marketing', w: true },
                          { t: '~$46–92/month for largely commodity herbs — premium not justified by dose transparency', w: false },
                          { t: 'Multiple conflicting domain sites with inconsistent ingredient lists', w: false },
                        ].map((con, i) => (
                          <li key={i} className="flex gap-2.5 text-[13.5px] text-ink3 leading-[1.55]">
                            <span className="font-bold shrink-0 mt-0.5" style={{ color: con.w ? '#B95C3A' : '#9C948A' }}>–</span>{con.t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>

                {/* WHO FOR */}
                <section id="who-for" className="mb-14">
                  <h2 className="font-sans font-semibold text-[20px] sm:text-[24px] tracking-[-0.02em] text-ink2 mb-5 leading-[1.25]">Who should and shouldn't use this</h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="p-4 sm:p-5 bg-clay/8 border border-clay/25 rounded-[12px]">
                      <div className="text-[11px] tracking-[0.14em] uppercase text-clay font-medium mb-3">Potentially appropriate for</div>
                      <ul className="space-y-2.5 list-none p-0 m-0 text-[13.5px] text-ink3 leading-[1.6]">
                        {['Adults with mildly elevated BP not on prescription antihypertensives', 'People who find tea rituals helpful for managing stress-related BP', 'Those wanting a caffeine-free herbal alternative to stimulant-based products', 'Buyers willing to accept the dose uncertainty and use the 60-day refund window as a trial', 'Anyone curious about the homocysteine mechanism who understands the format limitations'].map((t, i) => (
                          <li key={i} className="flex gap-2"><span className="text-clay shrink-0">+</span>{t}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4 sm:p-5 border rounded-[12px]" style={{ background: '#B95C3A04', borderColor: '#B95C3A22' }}>
                      <div className="text-[11px] tracking-[0.14em] uppercase font-medium mb-3" style={{ color: '#B95C3A' }}>Avoid or consult prescriber first</div>
                      <ul className="space-y-2.5 list-none p-0 m-0 text-[13.5px] text-ink3 leading-[1.6]">
                        {['Anyone on antihypertensive, anticoagulant, or cardiac medication', 'Patients on digoxin — hawthorn interaction is pharmacopoeially documented', 'People on lithium — dandelion diuresis affects lithium clearance to toxicity', 'Pregnant — hibiscus has uterine stimulant properties', 'Those expecting drug-level BP control from a supplement', 'Anyone with Stage 2 hypertension (>140/90) — supplement support is inadequate at this level'].map((t, i) => (
                          <li key={i} className="flex gap-2"><span className="shrink-0 font-bold" style={{ color: '#B95C3A' }}>–</span>{t}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>

                {/* ALTERNATIVES */}
                <section id="alternatives" className="mb-14">
                  <h2 className="font-sans font-semibold text-[20px] sm:text-[24px] tracking-[-0.02em] text-ink2 mb-2 leading-[1.25]">Alternatives with better dose transparency</h2>
                  <p className="text-[14px] text-muted mb-5">For the specific goals this product targets — homocysteine, hibiscus for BP, curcumin — more transparent options exist.</p>
                  <div className="space-y-3">
                    {[
                      { n: 'Cardio Slim Tea', br: 'Truth Leaves', p: '~$69/30 bags', sc: SCORE, scC: '#B95C3A', doses: '0 of 15', test: 'Claimed, uncertified', note: 'Reviewed here', cur: true, h: AFFILIATE_URL },
                      { n: 'NOW Foods Hibiscus 400mg', br: 'NOW Foods', p: '~$14/90ct', sc: null, scC: '#1b4332', doses: 'Full mg', test: 'GMP registered', note: 'Best individual hibiscus — the strongest ingredient from this formula', cur: false, h: '#' },
                      { n: 'Life Extension Homocysteine Resist', br: 'Life Extension', p: '~$18/60ct', sc: null, scC: '#1b4332', doses: 'Full disclosure', test: 'Independently tested', note: 'TMG + B6 + B12 + folate at clinical doses for homocysteine', cur: false, h: '#' },
                      { n: 'Thorne Basic B Complex', br: 'Thorne', p: '~$28/60ct', sc: null, scC: '#1b4332', doses: 'Full disclosure (NSF)', test: 'NSF Certified', note: 'B vitamin co-factors for homocysteine remethylation — pharmacist-grade quality', cur: false, h: '#' },
                    ].map((alt, i) => (
                      <a key={i} href={alt.h} target={alt.cur ? '_blank' : undefined} rel={alt.cur ? 'nofollow sponsored' : undefined}
                         className={`flex flex-wrap sm:flex-nowrap items-start gap-4 p-4 border rounded-[12px] transition-colors hover:bg-paper3 ${alt.cur ? 'bg-amber-50/40' : 'bg-white'} border-rule`}>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <span className="font-semibold text-[14px] text-ink2">{alt.n}</span>
                            {alt.cur && <span className="text-[10px] font-semibold tracking-[0.1em] uppercase rounded-full px-2 py-0.5 bg-amber-100 text-amber-700">This review</span>}
                          </div>
                          <div className="text-[12px] text-muted mb-2">{alt.br} · {alt.p}</div>
                          <div className="flex flex-wrap gap-x-4 gap-y-1 text-[12px]">
                            <span><span className="text-muted">Doses</span> <span className={`font-medium ${alt.doses.startsWith('0') ? 'text-amber-600' : 'text-moss'}`}>{alt.doses}</span></span>
                            <span><span className="text-muted">Testing</span> <span className={`font-medium ${alt.test.includes('uncert') ? 'text-amber-600' : 'text-moss'}`}>{alt.test}</span></span>
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                          {alt.sc && <div className="font-serif-body text-[22px] mb-0.5" style={{ color: alt.scC }}>{alt.sc}</div>}
                          <div className="text-[12px] text-muted max-w-[160px] leading-tight">{alt.note}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                  <div className="mt-4 p-4 bg-paper2 border border-rule rounded-[12px]">
                    <p className="text-[13px] text-ink3 leading-[1.65]">Full cardiovascular supplement protocols — including homocysteine reduction stacks and hibiscus dosing guidance — are <a href="/protocols/heart-health" className="text-clay hover:underline">publishing soon</a>. The best cardiovascular supplement list is available at <a href="/best/cardiovascular" className="text-clay hover:underline">/best/cardiovascular</a>.</p>
                  </div>
                </section>

                {/* FAQ */}
                <section id="faq" className="mb-14">
                  <h2 className="font-sans font-semibold text-[20px] sm:text-[24px] tracking-[-0.02em] text-ink2 mb-2 leading-[1.25]">Frequently asked questions</h2>
                  <p className="text-[14px] text-muted mb-6">{faqItems.length} questions · click to expand</p>
                  <div className="space-y-2">
                    {faqItems.map((item, i) => (
                      <FAQItem key={i} q={item.q} a={item.a} isOpen={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
                    ))}
                  </div>
                </section>


                {/* ── COMPARE WITH ALTERNATIVES ── */}
                <section id="alternatives-compare" className="mb-14">
                  <h2 className="font-sans font-semibold text-[20px] sm:text-[24px] tracking-[-0.02em] text-ink2 mb-4 leading-[1.25]">
                    How it compares to alternatives
                  </h2>
                  <p className="text-[14.5px] leading-[1.8] text-ink3 mb-5">
                    If cardiovascular support or blood pressure management is the goal, the following alternatives address the same clinical targets with disclosed dosing. See our{' '}
                    <a href="/compare" className="text-clay hover:underline">full comparison hub</a>{' '}
                    for head-to-head rubric scores.
                  </p>

                  <div className="space-y-3 mb-5">
                    {[
                      {
                        name: 'CoQ10 (Ubiquinol 200mg)',
                        type: 'Cardiovascular · antioxidant',
                        img: '/products/coq10-ubiquinol.webp',
                        score: null,
                        pros: 'Fully disclosed dose. Ubiquinol form has superior bioavailability. Extensive RCT evidence for heart failure and BP. Single ingredient — no interaction complexity.',
                        con: 'Does not address homocysteine. More expensive per dose than commodity CoQ10.',
                        link: '/reviews/coq10-ubiquinol',
                        buyLink: 'https://www.amazon.com/s?k=coq10+ubiquinol+200mg',
                        verdict: 'Stronger evidence, disclosed dose. Preferred for cardiovascular support.',
                      },
                      {
                        name: 'Pure Encapsulations TMG 1,000mg',
                        type: 'Homocysteine · methylation',
                        img: '/products/pure-encapsulations-tmg.webp',
                        score: null,
                        pros: '1,000mg disclosed TMG per capsule — take 2–6 for clinical range. Third-party tested. Targets the homocysteine pathway directly at a verifiable dose.',
                        con: 'Single ingredient — does not address BP or EGCG thermogenesis.',
                        link: '/ingredients/tmg-trimethylglycine',
                        buyLink: 'https://www.amazon.com/s?k=TMG+trimethylglycine+supplement',
                        verdict: 'If the homocysteine claim is why you are considering this tea, a standalone TMG capsule at 2,500–6,000mg is the clinically defensible option.',
                      },
                      {
                        name: 'Hibiscus Standardised Extract',
                        type: 'Blood pressure · flavonoid',
                        img: '/products/hibiscus-extract.webp',
                        score: null,
                        pros: 'Standardised to anthocyanin %. Disclosed mg dose. Evidence matches the tea RCTs that used equivalent daily amounts.',
                        con: 'Less convenient than a tea ritual. Additive hypotension with antihypertensives still applies.',
                        link: '/ingredients/hibiscus',
                        buyLink: 'https://www.amazon.com/s?k=hibiscus+standardised+extract',
                        verdict: 'The strongest single ingredient in Cardio Slim Tea, taken at a verified dose.',
                      },
                    ].map(alt => (
                      <div key={alt.name} className="rounded-[14px] border border-rule overflow-hidden">
                        <div className="px-4 py-3 bg-paper2 border-b border-rule flex items-center justify-between gap-3 flex-wrap">
                          <div>
                            <div className="font-semibold text-[13.5px] text-ink2">{alt.name}</div>
                            <div className="text-[11px] text-muted mt-0.5">{alt.type}</div>
                          </div>
                          <div className="flex gap-2 shrink-0">
                            {alt.link.startsWith('/reviews') && (
                              <a href={alt.link} className="text-[12px] font-medium text-clay border border-clay/30 rounded-full px-3 py-1.5 hover:bg-clay/8 transition-colors">
                                Read review
                              </a>
                            )}
                            {alt.link.startsWith('/ingredients') && (
                              <a href={alt.link} className="text-[12px] font-medium text-clay border border-clay/30 rounded-full px-3 py-1.5 hover:bg-clay/8 transition-colors">
                                Ingredient guide
                              </a>
                            )}
                            <a href={alt.buyLink} target="_blank" rel="nofollow sponsored"
                               className="text-[12px] font-medium text-ink2 border border-rule rounded-full px-3 py-1.5 hover:border-clay hover:text-clay transition-colors">
                              Buy on Amazon
                            </a>
                          </div>
                        </div>
                        <div className="px-4 py-4">
                          {/* Product image placeholder */}
                          <div className="flex gap-4 items-start">
                            <div className="w-16 h-16 rounded-[8px] border border-rule bg-paper3 flex items-center justify-center shrink-0 overflow-hidden">
                              <img src={alt.img}
                                   alt={`${alt.name} — supplement product image`}
                                   width="64" height="64"
                                   className="w-full h-full object-contain"
                                   onError={e => { (e.currentTarget as HTMLImageElement).style.opacity = '0' }} />
                            </div>
                            <div className="min-w-0">
                              <div className="text-[13px] leading-[1.65] text-ink3 mb-2">{alt.verdict}</div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
                                <div className="flex gap-2 text-[12px] text-ink3">
                                  <span className="text-clay shrink-0 font-medium">+</span>
                                  <span>{alt.pros}</span>
                                </div>
                                <div className="flex gap-2 text-[12px] text-muted">
                                  <span className="shrink-0 font-medium">—</span>
                                  <span>{alt.con}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 bg-paper2 border border-rule rounded-[12px]">
                    <p className="text-[13px] text-muted leading-[1.65] m-0">
                      See the full{' '}
                      <a href="/best/cardiovascular" className="text-clay hover:underline">best cardiovascular supplements list</a>
                      {' '}or the{' '}
                      <a href="/protocols/heart-health" className="text-clay hover:underline">heart health protocol</a>
                      {' '}for a complete evidence-based stack covering each clinical target independently.
                    </p>
                  </div>
                </section>

                {/* ── RELATED REVIEWS AND CONTENT ── */}
                <section id="related" className="mb-14">
                  <h2 className="font-sans font-semibold text-[20px] sm:text-[24px] tracking-[-0.02em] text-ink2 mb-5 leading-[1.25]">
                    Related reviews, guides, and ingredients
                  </h2>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <div className="text-[11px] tracking-[0.14em] uppercase text-muted font-medium mb-3">Related reviews</div>
                      <div className="space-y-2">
                        {[
                          { title: 'Best cardiovascular supplements', href: '/best/cardiovascular', label: 'Best-of list' },
                          { title: 'CoQ10 review', href: '/reviews/coq10-ubiquinol', label: 'Review' },
                          { title: 'Omega-3 fish oil review', href: '/reviews/omega-3-fish-oil', label: 'Review' },
                          { title: 'Magnesium glycinate review', href: '/reviews/magnesium-glycinate', label: 'Review' },
                        ].map(item => (
                          <a key={item.href} href={item.href}
                             className="flex items-center justify-between gap-3 p-3 bg-paper3 border border-rule rounded-[10px] hover:border-clay transition-colors group">
                            <span className="text-[13px] font-medium text-ink2 group-hover:text-clay transition-colors">{item.title}</span>
                            <span className="text-[10px] tracking-[0.1em] uppercase text-muted shrink-0">{item.label}</span>
                          </a>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] tracking-[0.14em] uppercase text-muted font-medium mb-3">Ingredient guides</div>
                      <div className="space-y-2">
                        {[
                          { title: 'Hibiscus — clinical evidence', href: '/ingredients/hibiscus', label: 'Ingredient' },
                          { title: 'TMG / trimethylglycine', href: '/ingredients/tmg-trimethylglycine', label: 'Ingredient' },
                          { title: 'Curcumin bioavailability', href: '/ingredients/turmeric-curcumin', label: 'Ingredient' },
                          { title: 'EGCG — green tea catechins', href: '/ingredients/egcg-green-tea', label: 'Ingredient' },
                          { title: 'Hawthorn berry', href: '/ingredients/hawthorn-berry', label: 'Ingredient' },
                        ].map(item => (
                          <a key={item.href} href={item.href}
                             className="flex items-center justify-between gap-3 p-3 bg-paper3 border border-rule rounded-[10px] hover:border-clay transition-colors group">
                            <span className="text-[13px] font-medium text-ink2 group-hover:text-clay transition-colors">{item.title}</span>
                            <span className="text-[10px] tracking-[0.1em] uppercase text-muted shrink-0">{item.label}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="text-[11px] tracking-[0.14em] uppercase text-muted font-medium mb-3">Research guides</div>
                    <div className="space-y-2">
                      {[
                        { title: 'Homocysteine and cardiovascular disease — what the research says', href: '/research/homocysteine-heart-disease', label: 'Research guide' },
                        { title: 'The heart health protocol — evidence-based supplement stack', href: '/protocols/heart-health', label: 'Protocol' },
                      ].map(item => (
                        <a key={item.href} href={item.href}
                           className="flex items-center justify-between gap-3 p-3 bg-paper3 border border-rule rounded-[10px] hover:border-clay transition-colors group">
                          <span className="text-[13px] font-medium text-ink2 group-hover:text-clay transition-colors">{item.title}</span>
                          <span className="text-[10px] tracking-[0.1em] uppercase text-muted shrink-0">{item.label}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </section>

                {/* ── REFERENCES ── */}
                <section id="references" className="mb-14">
                  <h2 className="font-sans font-semibold text-[20px] sm:text-[24px] tracking-[-0.02em] text-ink2 mb-4 leading-[1.25]">
                    References
                  </h2>
                  <p className="text-[13px] text-muted leading-[1.65] mb-4">
                    Clinical claims in this review are based on the following peer-reviewed sources.
                    Full citation details are provided for independent verification.
                  </p>
                  <ol className="space-y-3 list-decimal list-inside">
                    {[
                      {
                        ref: 'McKay DL, Chen CY, Saltzman E, Blumberg JB. Hibiscus sabdariffa L. tea (tisane) lowers blood pressure in prehypertensive and mildly hypertensive adults.',
                        journal: 'J Nutr. 2010;140(2):298-303.',
                        link: 'https://pubmed.ncbi.nlm.nih.gov/20018807/',
                        note: 'Tufts RCT — 3 daily servings hibiscus tea, 7.2 mmHg systolic reduction',
                      },
                      {
                        ref: 'Serban C, Sahebkar A, Ursoniu S, Andrica F, Banach M. Effect of sour tea (Hibiscus sabdariffa L.) on arterial hypertension: a systematic review and meta-analysis of randomized controlled trials.',
                        journal: 'J Hypertens. 2015;33(6):1119-27.',
                        link: 'https://pubmed.ncbi.nlm.nih.gov/25848729/',
                        note: 'Meta-analysis confirming 7.58 mmHg systolic reduction',
                      },
                      {
                        ref: 'Siervo M, Lara J, Ogbonmwan I, Mathers JC. Inorganic nitrate and beetroot juice supplementation reduces blood pressure in adults: a systematic review and meta-analysis.',
                        journal: 'J Nutr. 2013;143(6):818-26.',
                        link: 'https://pubmed.ncbi.nlm.nih.gov/23596162/',
                        note: 'Beetroot dietary nitrate — 4.4 mmHg systolic reduction',
                      },
                      {
                        ref: 'Zhang H, Liu S, Li L, et al. The impact of grape seed extract treatment on blood pressure changes: A meta-analysis of 16 randomized controlled trials.',
                        journal: 'Medicine (Baltimore). 2016;95(33):e4247.',
                        link: 'https://pubmed.ncbi.nlm.nih.gov/27537554/',
                        note: 'Grapeseed extract — 6.08 mmHg systolic, 2.8 mmHg diastolic reduction',
                      },
                      {
                        ref: 'Anand P, Kunnumakkara AB, Newman RA, Aggarwal BB. Bioavailability of curcumin: problems and promises.',
                        journal: 'Mol Pharm. 2007;4(6):807-18.',
                        link: 'https://pubmed.ncbi.nlm.nih.gov/17999464/',
                        note: 'Curcumin <1% absolute bioavailability without enhancer — foundational reference',
                      },
                      {
                        ref: 'Hasani H, Arab A, Hadi A, Pourmasoumi M, Ghavami A, Miraghajani M. Does ginger supplementation lower blood pressure? A systematic review and meta-analysis of clinical trials.',
                        journal: 'Phytother Res. 2019;33(6):1639-47.',
                        link: 'https://pubmed.ncbi.nlm.nih.gov/30972844/',
                        note: '6 RCTs — significant BP reductions at doses ≥2g/day ginger',
                      },
                      {
                        ref: 'Clare BA, Conroy RS, Spelman K. The diuretic effect in human subjects of an extract of Taraxacum officinale folium over a single day.',
                        journal: 'J Altern Complement Med. 2011;17(8):929-34.',
                        link: 'https://pubmed.ncbi.nlm.nih.gov/21678177/',
                        note: 'Dandelion diuretic effect — urinary frequency and volume increase',
                      },
                      {
                        ref: 'Lonn E, Yusuf S, Arnold MJ, et al; Heart Outcomes Prevention Evaluation (HOPE) 2 Investigators. Homocysteine lowering with folic acid and B vitamins in vascular disease.',
                        journal: 'N Engl J Med. 2006;354(15):1567-77.',
                        link: 'https://pubmed.ncbi.nlm.nih.gov/16531613/',
                        note: 'HOPE-2 trial — homocysteine lowering does not reduce CV events (paradox)',
                      },
                      {
                        ref: 'Khalesi S, Sun J, Buys N, Jamshidi A, Nikbakht-Nasrabadi E, Khosravi-Boroujeni H. Green tea catechins and blood pressure: a systematic review and meta-analysis of randomised controlled trials.',
                        journal: 'Eur J Nutr. 2014;53(6):1299-311.',
                        link: 'https://pubmed.ncbi.nlm.nih.gov/24858731/',
                        note: 'Green tea catechins — 2.07 mmHg systolic reduction',
                      },
                    ].map((ref, i) => (
                      <li key={i} className="text-[13px] text-ink3 leading-[1.7] pl-1">
                        <span className="font-medium text-ink2">{ref.ref}</span>{' '}
                        <span className="italic text-muted">{ref.journal}</span>{' '}
                        <a href={ref.link} target="_blank" rel="noopener noreferrer"
                           className="text-clay hover:underline text-[12px] ml-1">
                          PubMed
                        </a>
                        <div className="text-[11.5px] text-muted mt-0.5">{ref.note}</div>
                      </li>
                    ))}
                  </ol>
                </section>

                {/* VERDICT */}
                <section id="verdict" className="mb-8">
                  <h2 className="font-sans font-semibold text-[20px] sm:text-[24px] tracking-[-0.02em] text-ink2 mb-4 leading-[1.25]">Final verdict</h2>
                  <div className="p-5 sm:p-6 border rounded-[14px] mb-6" style={{ background: '#B95C3A05', borderColor: '#B95C3A22' }}>
                    <div className="flex items-center gap-4 mb-5">
                      <div>
                        <div className="font-serif-display leading-none" style={{ fontSize: '50px', color: '#B95C3A', fontVariationSettings: '"opsz" 96' }}>{SCORE}</div>
                        <div className="text-[12px] text-muted">/ 10 · <a href="/scoring-rubric" className="text-clay hover:underline">rubric v3.1</a></div>
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold text-[15px] text-ink2 mb-1">Cardio Slim Tea</div>
                        <div className="text-[12px] text-muted">Label analysis · May 2026 · Truth Leaves</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-5 p-4 bg-white/60 rounded-[10px]">
                      {[['Dose', SCORES.clinicalDose, '25%'], ['Form', SCORES.ingredientForm, '20%'], ['Purity', SCORES.purity, '20%'], ['Value', SCORES.value, '20%'], ['Honesty', SCORES.labelHonesty, '15%']].map(([l, s, w]) => (
                        <div key={l as string} className="text-center">
                          <div className="font-serif-body text-[20px] leading-none mb-0.5" style={{ color: (s as number) >= 6 ? '#1b4332' : '#B95C3A' }}>{s}</div>
                          <div className="text-[10px] font-semibold text-ink2">{l}</div>
                          <div className="text-[10px] text-muted">{w}</div>
                        </div>
                      ))}
                    </div>
                    <p className="text-[15px] leading-[1.8] text-ink3 mb-3">Cardio Slim Tea is more pharmacologically interesting than most ClickBank tea supplements. The homocysteine-flush framing is real biochemistry — not invented. TMG genuinely remethylates homocysteine. Hibiscus genuinely reduces blood pressure in the tea format this product uses. These are not fairy-tale ingredients, and naming all 15 puts this product ahead of the full-proprietary-blend standard.</p>
                    <p className="text-[15px] leading-[1.8] text-ink3 mb-3">The 4.4 reflects three structural problems the ingredient quality cannot fix. First: no individual doses. We cannot verify whether any ingredient reaches the threshold where its evidence lives. Second: curcumin in tea without a disclosed enhancer is pharmacologically inert — and a substantial portion of the anti-inflammatory vascular claims ride on it. Third: the marketing makes specific outcome guarantees that no supplement evidence supports.</p>
                    <p className="text-[15px] leading-[1.8] text-ink3">The 60-day refund is real, making this a lower-risk trial than its price suggests. But if homocysteine support is your goal, a disclosed-dose TMG supplement (2,500mg/day with B6 and folate) is clinically more defensible. If hibiscus is your target, standardised extract capsules with a published mg amount will outperform an undisclosed-dose tea bag. Right ingredients, wrong transparency framework.</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a href={AFFILIATE_URL} target="_blank" rel="nofollow sponsored"
                       className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-[13px] sm:text-[14px] font-medium bg-clay text-white hover:bg-clayd transition-all">
                      Check price →
                    </a>
                    <a href="/best/cardiovascular"
                       className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-[13px] sm:text-[14px] font-medium bg-paper3 text-ink2 border border-rule hover:border-clay transition-all">
                      See all cardiovascular supplements →
                    </a>
                  </div>
                </section>

                <div className="pt-6 border-t border-rule">
                  <p className="text-[12px] text-muted leading-[1.7]">
                    <strong className="font-medium text-ink3">Affiliate disclosure:</strong>{' '}The affiliate link generates a commission if you purchase. It has no effect on the score, conclusions, or editorial content. See our <a href="/conflicts-policy" className="text-clay hover:underline">conflicts policy</a>.{' '}
                    <strong className="font-medium text-ink3">Not medical advice.</strong>{' '}Drug interaction warnings are based on published pharmacological data. If you take cardiovascular medication, consult your prescriber before adding any herbal supplement.
                  </p>
                </div>

              </div>{/* end main col */}

              {/* SIDEBAR */}
              <div className="hidden lg:block">
                <div className="sticky top-24 space-y-4">
                  <div className="bg-paper3 border border-rule rounded-[14px] p-5">
                    <div className="text-[11px] tracking-[0.14em] uppercase text-muted font-medium mb-3">Fitlab score</div>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="font-serif-display text-[38px] leading-none" style={{ color: '#B95C3A', fontVariationSettings: '"opsz" 96' }}>{SCORE}</span>
                      <span className="text-muted text-[13px]">/ 10</span>
                    </div>
                    <div className="text-[11px] text-muted mb-4"><a href="/scoring-rubric" className="text-clay hover:underline">rubric v3.1</a> · label analysis</div>
                    <a href={AFFILIATE_URL} target="_blank" rel="nofollow sponsored"
                       className="w-full flex items-center justify-center rounded-full py-2.5 text-[13px] font-medium bg-clay text-white hover:bg-clayd transition-colors mb-2">
                      Check price →
                    </a>
                    <div className="text-[10.5px] text-muted text-center">Affiliate · Truth Leaves</div>
                  </div>
                  <div className="border rounded-[14px] p-4" style={{ background: '#B95C3A07', borderColor: '#B95C3A28' }}>
                    <div className="text-[11px] tracking-[0.1em] uppercase font-semibold mb-2" style={{ color: '#B95C3A' }}>Key concerns</div>
                    <ul className="space-y-1.5 text-[12px] text-ink3 list-none p-0 m-0">
                      {['0 mg doses disclosed', 'Curcumin — no enhancer named', 'Digoxin + hawthorn interaction', 'Warfarin + grapeseed risk', 'Drug interactions with BP meds'].map((t, i) => (
                        <li key={i} className="flex gap-1.5"><span style={{ color: '#B95C3A' }}>–</span>{t}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-paper3 border border-rule rounded-[14px] p-5">
                    <div className="text-[11px] tracking-[0.14em] uppercase text-muted font-medium mb-3">Sections</div>
                    <div className="space-y-1">
                      {[
                        ['Homocysteine', '#homocysteine'],
                        ['Dose gap', '#dose-gap'],
                        ['Format limits', '#format'],
                        ['All 15 ingredients', '#ingredients'],
                        ['Claims audit', '#claims'],
                        ['Safety', '#safety'],
                        ['Alternatives', '#alternatives'],
                        ['Compare products', '#alternatives-compare'],
                        ['Related content', '#related'],
                        ['References', '#references'],
                        ['Verdict', '#verdict'],
                      ].map(([l, h]) => (
                        <a key={h} href={h} className="block text-[12.5px] text-ink3 py-1 hover:text-clay transition-colors">→ {l}</a>
                      ))}
                    </div>
                  </div>
                  <div className="bg-paper3 border border-rule rounded-[14px] p-5">
                    <div className="text-[11px] tracking-[0.14em] uppercase text-muted font-medium mb-3">On Fitlab</div>
                    <div className="space-y-1.5">
                      {[
                        ['Homocysteine research guide', '/research/homocysteine-heart-disease'],
                        ['Hibiscus — ingredient guide', '/ingredients/hibiscus'],
                        ['Curcumin bioavailability', '/ingredients/turmeric-curcumin'],
                        ['TMG / trimethylglycine', '/ingredients/tmg-trimethylglycine'],
                        ['Green tea EGCG', '/ingredients/egcg-green-tea'],
                        ['Hawthorn berry', '/ingredients/hawthorn-berry'],
                        ['Grapeseed extract', '/ingredients/grapeseed-extract'],
                        ['Heart health protocol', '/protocols/heart-health'],
                        ['Best cardiovascular supplements', '/best/cardiovascular'],
                        ['Scoring rubric v3.1', '/scoring-rubric'],
                        ['Review methodology', '/methodology'],
                        ['Conflicts policy', '/conflicts-policy'],
                      ].map(([l, h]) => (
                        <a key={h} href={h} className="block text-[12px] text-clay hover:underline py-0.5">{l} →</a>
                      ))}
                    </div>
                    <div className="text-[11px] tracking-[0.14em] uppercase text-muted font-medium mb-2 mt-4">External sources</div>
                    <div className="space-y-1.5">
                      {[
                        ['PubMed — hibiscus BP trials', 'https://pubmed.ncbi.nlm.nih.gov/25848729/'],
                        ['HOPE-2 homocysteine trial', 'https://pubmed.ncbi.nlm.nih.gov/16531613/'],
                        ['Curcumin bioavailability (Anand 2007)', 'https://pubmed.ncbi.nlm.nih.gov/17999464/'],
                        ['FDA supplement guidance', 'https://www.fda.gov/food/dietary-supplements'],
                      ].map(([l, h]) => (
                        <a key={h} href={h} target="_blank" rel="noopener noreferrer" className="block text-[12px] text-clay hover:underline py-0.5">{l} ↗</a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </article>

        {/* AUTHOR */}
        <section className="py-10 border-t border-rule border-b">
          <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
            <div className="max-w-[720px]">
              <div className="skirt mb-4">Reviewed by</div>
              <a href="/authors#fitlab-research-team"
                 className="flex items-start gap-4 bg-paper3 border border-rule rounded-[14px] p-5 sm:p-6 hover:border-clay/40 transition-colors group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white font-sans font-semibold text-[15px] shrink-0" style={{ background: '#2d6a4f' }}>FR</div>
                <div className="min-w-0 flex-1">
                  <div className="font-semibold text-[15px] sm:text-[16px] text-ink2 group-hover:text-clay transition-colors">Fitlab Research Team</div>
                  <div className="text-[12px] text-muted mb-1">Editorial Team · Collective byline</div>
                  <div className="text-[11px] tracking-[0.08em] uppercase font-medium mb-3" style={{ color: '#2d6a4f' }}>Pharmacist fact-checked</div>
                  <p className="text-[13px] text-muted leading-[1.65] mb-2">This review was written by the Fitlab Research Team — a collaborative label analysis, clinical literature review, and evidence-grading process. Drug interaction warnings (digoxin, warfarin, lithium), curcumin bioavailability analysis, and the homocysteine pharmacology sections were reviewed and signed off by <a href="/authors#pankaj-singh" className="text-clay hover:underline font-medium">Pankaj Singh, Pharm.B</a>. Scored against <a href="/scoring-rubric" className="text-clay hover:underline">rubric v3.1</a> per <a href="/methodology" className="text-clay hover:underline">Fitlab methodology</a>.</p>
                  <div className="text-[12px] text-clay group-hover:underline">View team profile →</div>
                </div>
              </a>
            </div>
          </div>
        </section>

      </PageShell>
    </>
  )
}
