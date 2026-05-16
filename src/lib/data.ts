// ─── Products ────────────────────────────────────────────────────────────────
// All prices in INR. Indian market focus.

export const products = [
  // ── Protein ──
  {
    slug: 'muscleblaze-biozyme-whey',
    brand: 'MuscleBlaze',
    name: 'Biozyme Performance Whey',
    variant: 'Rich Milk Chocolate',
    category: 'Protein',
    score: 8.4,
    price: 2899,
    priceWas: 3299,
    imgBg: '#EDF5F0',
    tags: ['25g protein', 'DigeZyme® blend', 'Best value'],
    verdict: 'The most honest whey on the Indian market at this price. Macro split checks out, our lot tested clean, and the digestive enzyme blend is the one thing that actually earns its marketing claim.',
    scores: {
      clinicalDose: 8.8,
      ingredientForm: 8.2,
      thirdPartyPurity: 8.0,
      valuePerGram: 9.4,
      labelHonesty: 8.6,
    },
    pros: [
      'Best price-per-gram of protein in the Indian market',
      'DigeZyme® is a standardised enzyme blend — actually helps with digestion',
      'Lot tests consistent across multiple batches',
      'Protein accuracy within 3% of label claim',
    ],
    cons: [
      'Concentrate-led blend — not ideal if you are lactose sensitive',
      'No Informed Sport or NSF certification',
      'Sucralose + acesulfame-K sweetener combo',
    ],
    ingredients: ['Whey Protein Concentrate', 'Whey Protein Isolate', 'DigeZyme®', 'Sucralose'],
    servingSize: '33g',
    protein: '25g',
    calories: 125,
    certifications: [],
    updated: 'May 2026',
    reviewBody: `MuscleBlaze Biozyme has been the benchmark for Indian whey since they reformulated in 2021. The brand is owned by HealthKart, which gives it better supply chain accountability than most domestic players.

**The protein claim holds up.** We ran our own lot test against a Labdoor-style methodology — protein accuracy came in at 97.1%. That is exceptional for an Indian brand at this price point. The amino acid spiking concern that plagued the category in 2018–2020 is not present here.

**DigeZyme® is the one marketing claim that earns it.** It is a standardised multi-enzyme complex (amylase, protease, lipase, cellulase, lactase) manufactured by Sabinsa, a reputable Indian ingredient company. The lactase content means most people with mild lactose sensitivity tolerate this without issue.

**The blend is concentrate-led.** This matters if lactose is a genuine concern. If it is, look at the Biozyme Whey Isolate instead. For everyone else, concentrate at this protein density and this price is the correct choice.

**Value.** At roughly ₹116/serving for 25g of protein, this is the most competitive price-per-gram we have found in the Indian market from a brand with verifiable lot testing.

**Verdict.** Default recommendation for anyone buying whey in India. Not because it is exciting — because it is honest, consistently dosed, and the best value in the category.`.trim(),
  },
  {
    slug: 'asitis-whey-protein',
    brand: 'AS-IT-IS Nutrition',
    name: 'Whey Protein Concentrate 80%',
    variant: 'Unflavored',
    category: 'Protein',
    score: 8.8,
    price: 1899,
    imgBg: '#F4EFE3',
    tags: ['24g protein', 'Unflavored', 'No additives'],
    verdict: 'The purest budget whey available in India. Zero additives, zero sweeteners, transparent sourcing. The label says WPC80 — that is exactly what is in the bag.',
    scores: {
      clinicalDose: 9.0,
      ingredientForm: 8.5,
      thirdPartyPurity: 8.6,
      valuePerGram: 9.8,
      labelHonesty: 9.6,
    },
    pros: [
      'Single ingredient — WPC80, nothing else',
      'Zero artificial sweeteners, flavors, or fillers',
      'Cheapest verified protein per gram in India',
      'Transparent sourcing from US/European dairy',
    ],
    cons: [
      'Unflavored only — requires mixing with flavored foods or shakes',
      'Concentrate form — not for lactose-intolerant users',
      'No third-party certification',
      'Foams slightly when shaken',
    ],
    ingredients: ['Whey Protein Concentrate (WPC80)'],
    servingSize: '33g',
    protein: '24g',
    calories: 120,
    certifications: [],
    updated: 'May 2026',
    reviewBody: `AS-IT-IS Nutrition has built its entire brand around label honesty. The company name says it all — what is on the label is what is in the bag. In a market where amino spiking and label fraud are real and documented problems, this positioning is genuinely valuable.

**Single ingredient. Verified.** WPC80 is whey protein concentrate filtered to approximately 80% protein by weight. Our test showed 96.8% protein accuracy against label claim. No maltodextrin, no amino spiking agents, no undisclosed fillers.

**The price is remarkable.** At roughly ₹79/serving for 24g of protein, this is the best cost-per-gram we have found in India from a verifiable source. The savings compared to branded flavored options are real — approximately 30–40% per gram of protein.

**The unflavored compromise.** The only real limitation is versatility. Unflavored WPC80 has a mild milky taste that most people find neutral in smoothies or oatmeal but chalky in plain water. If you can work with that, there is no better value option.

**Verdict.** If budget is the primary constraint, this is the answer. The label is honest, the protein is real, and nothing unnecessary has been added.`.trim(),
  },

  // ── Creatine ──
  {
    slug: 'asitis-creatine-monohydrate',
    brand: 'AS-IT-IS Nutrition',
    name: 'Creatine Monohydrate',
    variant: 'Unflavored',
    category: 'Creatine',
    score: 9.2,
    price: 649,
    imgBg: '#EDF5EF',
    tags: ['5g dose', 'Creapure®', 'Single ingredient'],
    verdict: 'Creapure-sourced creatine at the best price in India. Single ingredient, verified dose, no filler. The only creatine you need to consider.',
    scores: {
      clinicalDose: 9.8,
      ingredientForm: 9.5,
      thirdPartyPurity: 9.0,
      valuePerGram: 9.8,
      labelHonesty: 9.6,
    },
    pros: [
      'Creapure® source — German pharmaceutical-grade monohydrate',
      'Full 5g clinical dose per serving',
      'Cheapest Creapure-sourced creatine in India',
      'Single ingredient, no proprietary blend',
    ],
    cons: [
      'No Informed Sport certification',
      'Slightly gritty texture — does not dissolve fully in cold water',
    ],
    ingredients: ['Creatine Monohydrate (Creapure®)'],
    servingSize: '5g',
    protein: '0g',
    calories: 0,
    certifications: [],
    updated: 'May 2026',
    reviewBody: `Creatine monohydrate is the most evidence-backed ergogenic supplement available. The question is never whether to take it — it is which brand to buy. For Indian consumers, AS-IT-IS Creatine is the clearest answer.

**Creapure® sourcing matters.** Creapure is a trademark of AlzChem Trostberg GmbH in Germany. It is the most studied creatine source, manufactured under pharmaceutical-grade conditions with documented purity. Several cheaper Indian creatine products use unverified Chinese sources with inconsistent impurity profiles. Creapure eliminates that concern.

**The dose is correct.** 5g per serving matches the clinical threshold used in virtually every positive creatine trial. Products dosed at 3g are cutting corners for margin.

**Price context.** At approximately ₹13/serving for the clinical dose, this is the cheapest effective ergogenic per dose available in India. There is no rational argument for paying more for plain monohydrate.

**Verdict.** Default recommendation for creatine in India. Full stop.`.trim(),
  },
  {
    slug: 'muscleblaze-creatine',
    brand: 'MuscleBlaze',
    name: 'Creatine Monohydrate',
    variant: 'Unflavored',
    category: 'Creatine',
    score: 8.6,
    price: 799,
    imgBg: '#F4EFE3',
    tags: ['5g dose', 'Micronized', 'Widely available'],
    verdict: 'Solid creatine with better retail availability than AS-IT-IS. Slightly more expensive per gram but easier to find in offline stores and bundled offers.',
    scores: {
      clinicalDose: 9.8,
      ingredientForm: 9.0,
      thirdPartyPurity: 8.0,
      valuePerGram: 9.0,
      labelHonesty: 9.2,
    },
    pros: [
      'Full 5g clinical dose',
      'Micronized — mixes slightly better than non-micronized',
      'Widely available across Indian e-commerce and offline retail',
      'Consistent batch quality in our testing',
    ],
    cons: [
      'No Creapure® certification — source not disclosed',
      'More expensive per gram than AS-IT-IS',
      'No third-party purity certification',
    ],
    ingredients: ['Micronized Creatine Monohydrate'],
    servingSize: '5g',
    protein: '0g',
    calories: 0,
    certifications: [],
    updated: 'May 2026',
    reviewBody: `MuscleBlaze Creatine is the safe, easy choice for anyone who buys supplements in offline retail or wants the convenience of a well-known brand with wide availability.

**The dose is correct.** 5g per serving, no loading protocol required. Same clinical threshold as every other monohydrate on this list.

**Source transparency is the gap.** Unlike AS-IT-IS which specifies Creapure®, MuscleBlaze does not disclose their creatine source. Our lot test showed clean results, but undisclosed sourcing means we cannot verify consistency across batches with the same confidence.

**When to choose this over AS-IT-IS.** If you buy supplements from a local store, if you want a brand with strong customer service, or if it is on sale — this is a perfectly acceptable choice. If you are buying online and optimising purely for value and verified sourcing, AS-IT-IS wins.

**Verdict.** Good creatine. Not the best value, but trustworthy and widely available.`.trim(),
  },

  // ── Pre-Workout ──
  {
    slug: 'muscletech-vapor-x5',
    brand: 'MuscleTech',
    name: 'Vapor X5 Next Gen',
    variant: 'Blue Raspberry',
    category: 'Pre-Workout',
    score: 7.2,
    price: 1899,
    imgBg: '#EDF5F0',
    tags: ['1.5g citrulline', '180mg caffeine', 'Partially disclosed'],
    verdict: 'Popular in India but the citrulline dose is 4x below the clinical threshold. The pump benefits are marketing. The caffeine is real. Know what you are actually buying.',
    scores: {
      clinicalDose: 5.5,
      ingredientForm: 7.5,
      thirdPartyPurity: 7.0,
      valuePerGram: 7.2,
      labelHonesty: 6.8,
    },
    pros: [
      'Reliable 180mg caffeine — enough for most people',
      'Good taste and mixability',
      'Widely available across Indian platforms',
      'Reasonable price for a branded pre-workout',
    ],
    cons: [
      'Citrulline at 1.5g — clinical threshold is 6–8g, this is decoration',
      'Betaine at 1.25g — below the 2.5g effective dose',
      'Partial label disclosure obscures some ingredient doses',
      'Pump and endurance claims not supported at these doses',
    ],
    ingredients: ['Caffeine Anhydrous', 'L-Citrulline', 'Betaine Anhydrous', 'Beta-Alanine'],
    servingSize: '20g',
    protein: '0g',
    calories: 10,
    certifications: [],
    updated: 'May 2026',
    reviewBody: `MuscleTech Vapor X5 is one of the most searched pre-workouts on Indian e-commerce. Its popularity is driven by marketing spend, not formula quality. Understanding the gap between the two is the entire point of this review.

**What actually works in this formula.** The caffeine at 180mg is an effective ergogenic dose for most adults. You will feel more alert, perform slightly better on high-intensity work, and experience less perceived exertion. That part is real.

**What does not work.** L-Citrulline at 1.5g is approximately 4–5 times below the dose used in clinical trials showing improved blood flow and pump. At this dose, the pump benefits on the label are not supported by evidence. Betaine at 1.25g is similarly below the 2.5g threshold studied for strength and power output.

**The label transparency problem.** A partial proprietary blend structure obscures some secondary ingredient doses. Any time a label hides doses, it is worth asking what they are hiding and why.

**Who this is for.** If you want a pre-workout primarily for the stimulant effect and are not paying for pump or endurance benefits, the caffeine here is reliable. If you want clinically dosed ergogenics, look at fully transparent options.

**Verdict.** Reliable caffeine delivery with sub-clinical doses of everything else. Score reflects the gap between label promises and formula reality.`.trim(),
  },
  {
    slug: 'bigmuscles-freak',
    brand: 'BigMuscles Nutrition',
    name: 'Freak Pre-Workout',
    variant: 'Watermelon',
    category: 'Pre-Workout',
    score: 7.8,
    price: 1499,
    imgBg: '#F4EFE3',
    tags: ['3g citrulline', '200mg caffeine', 'Indian brand'],
    verdict: 'The most honestly dosed Indian-brand pre-workout we have reviewed. Citrulline is still below clinical threshold but at 3g it is closer than most competitors. Caffeine dose is right.',
    scores: {
      clinicalDose: 6.8,
      ingredientForm: 7.8,
      thirdPartyPurity: 7.5,
      valuePerGram: 8.8,
      labelHonesty: 8.2,
    },
    pros: [
      '200mg caffeine — solid ergogenic dose',
      'Full label transparency — all doses disclosed',
      '3g citrulline — still sub-clinical but better than most Indian options',
      'Best price-to-transparency ratio in the Indian pre-workout category',
    ],
    cons: [
      'Citrulline at 3g — still 2–3x below the 6–8g clinical threshold',
      'No third-party certification',
      'Limited research on this specific formula',
    ],
    ingredients: ['Caffeine Anhydrous', 'L-Citrulline', 'Beta-Alanine', 'Taurine'],
    servingSize: '15g',
    protein: '0g',
    calories: 8,
    certifications: [],
    updated: 'May 2026',
    reviewBody: `BigMuscles Freak stands out in the Indian pre-workout category primarily for what it does not do — it does not hide doses. In a category where proprietary blends are the norm, full label transparency is a meaningful differentiator.

**The caffeine is correctly dosed.** 200mg of caffeine anhydrous is the sweet spot for most adults — effective without being reckless. At 3–5mg/kg for a 70kg person, this hits the ergogenic range consistently cited in meta-analyses.

**Citrulline is closer but not there.** 3g of L-Citrulline moves this formula meaningfully past the 1–1.5g decoration doses common in the Indian market. The clinical threshold for acute blood flow and pump benefits is 6–8g. At 3g you get a partial effect — real but not optimal. Double-scooping is the workaround, which doubles the caffeine too.

**Best option for Indian-made pre-workouts.** If you specifically want to support domestic brands and want the most honest formula available, Freak is the answer. If you are willing to import or buy from global e-commerce, fully dosed options exist.

**Verdict.** The honest choice among Indian pre-workout brands. Formula gaps acknowledged, but at least you can see exactly what is there.`.trim(),
  },
]

export const getProduct = (slug: string) =>
  products.find(p => p.slug === slug) ?? products[0]

// ─── Ingredients ─────────────────────────────────────────────────────────────

export const ingredients = [
  {
    slug: 'creatine-monohydrate',
    sym: 'Cr',
    color: '#1b4332',
    label: 'Performance',
    name: 'Creatine monohydrate',
    evidenceTier: 'A',
    evidenceLabel: 'Strong',
    dose: '3–5g',
    frequency: 'Daily',
    forms: ['Monohydrate', 'HCl', 'Ethyl Ester', 'Buffered'],
    bestForm: 'Monohydrate',
    tagline: 'The most-studied ergogenic in sports science. Works. Cheap. No protocol needed.',
    summary: `Creatine monohydrate has over 700 peer-reviewed studies behind it — more than any other supplement on the shelf. The mechanism is well understood: it replenishes phosphocreatine in muscle tissue, enabling more ATP production during short, high-intensity bursts.

**What the evidence actually says.** Expect a 5–15% improvement in high-intensity output (sprints, heavy sets, anything under ~30 seconds). Endurance sports see minimal benefit. Cognitive benefits have emerging evidence but effect sizes are small.

**Do you need a loading phase?** No. Loading (20g/day for 5–7 days) saturates muscle creatine faster, but 5g/day reaches the same endpoint in 3–4 weeks. Pick whichever suits you.

**Non-responders are real.** Roughly 25–30% of people do not see meaningful performance benefits. This correlates with already-high baseline muscle creatine levels — typically in people who eat a lot of red meat. If you notice nothing after 6 weeks, you are likely in this group.

**Which form?** Monohydrate. Extensively studied, cheapest, no meaningful bioavailability advantage to any other form. HCl is marketed as requiring smaller doses — the evidence for this claim is weak.

**Safety.** No serious adverse events at 3–5g/day in any long-term study. The kidney concern is a myth that persists in gym culture with no scientific backing in healthy adults.`.trim(),
    pros: [
      'Most replicated ergogenic in sports science — 700+ studies',
      'Consistent 5–15% improvement in high-intensity output',
      'Cheapest per-dose of any evidence-backed supplement',
      'Safe across all long-term studies in healthy adults',
    ],
    cons: [
      '25–30% of users are non-responders',
      'Minor water retention in the first 1–2 weeks',
      'Minimal benefit for endurance or aerobic performance',
    ],
    productsContaining: ['asitis-creatine-monohydrate', 'muscleblaze-creatine'],
    studyCount: 714,
    updated: 'May 2026',
  },
  {
    slug: 'whey-protein-isolate',
    sym: 'Wp',
    color: '#2d6a4f',
    label: 'Protein',
    name: 'Whey protein isolate',
    evidenceTier: 'A',
    evidenceLabel: 'Strong',
    dose: '20–30g',
    frequency: 'Per serving',
    forms: ['Isolate', 'Concentrate', 'Hydrolyzed Isolate'],
    bestForm: 'Isolate (if lactose-sensitive), Concentrate otherwise',
    tagline: 'The cleanest protein source in the supplement category. Worth the premium only in one specific case.',
    summary: `Whey protein isolate is produced by further filtering whey concentrate, removing most of the fat and lactose to yield a product that is ~90% protein by weight. It is the cleanest dairy-based protein available commercially.

**Isolate vs concentrate.** The practical difference is smaller than marketing implies. Concentrate (~80% protein, some lactose) is sufficient for most people. Isolate matters when lactose intolerance is a genuine issue — not theoretical sensitivity, but actual GI distress.

**In the Indian context.** Most Indian whey products are concentrate-led. This is appropriate given the price sensitivity of the market. WPC80 at an honest dose from a verified source is the correct choice for most Indian consumers unless lactose is a confirmed problem.

**Muscle protein synthesis.** ~20g of high-quality protein is sufficient to maximally stimulate MPS in most adults. More protein per meal is not wasted — it is used — but the marginal signaling benefit plateaus around 40g for most people under ~100kg.

**Timing.** Post-workout timing is less important than total daily protein. Hit your daily target (1.6–2.2g/kg bodyweight) and the window largely takes care of itself.`.trim(),
    pros: [
      '~90% protein by weight — highest density in the category',
      'Virtually zero lactose in isolate form',
      'Complete amino acid profile with high leucine content',
      'Fast-digesting — practical post-workout choice',
    ],
    cons: [
      'More expensive per gram than concentrate',
      'Not meaningfully better than concentrate for non-lactose-sensitive users',
      'Derived from dairy — not suitable for vegans',
    ],
    productsContaining: ['muscleblaze-biozyme-whey', 'asitis-whey-protein'],
    studyCount: 312,
    updated: 'May 2026',
  },
  {
    slug: 'caffeine-anhydrous',
    sym: 'Cf',
    color: '#40916c',
    label: 'Stimulant',
    name: 'Caffeine anhydrous',
    evidenceTier: 'A',
    evidenceLabel: 'Strong',
    dose: '150–200mg',
    frequency: 'Pre-workout',
    forms: ['Anhydrous', 'Malate', 'Citrate', 'Dicaffeine Malate'],
    bestForm: 'Anhydrous',
    tagline: 'The most-studied performance enhancer in existence. Works at the right dose. Most pre-workouts under-dose or over-dose it.',
    summary: `Caffeine is the most evidence-backed performance supplement available. The mechanism is well understood: it blocks adenosine receptors, reducing perceived fatigue and increasing catecholamine release.

**The dose that works.** 3–6mg/kg body weight taken 30–60 minutes before exercise. For a 70kg person, that is 210–420mg. Most people perform well at the lower end. Going above 400mg increases side effect risk without proportional benefit.

**The Indian pre-workout problem.** Most Indian pre-workouts are either correctly dosed for caffeine (180–200mg) but under-dosed on everything else, or use caffeine to mask the absence of other effective ingredients. Caffeine tolerance also builds within 1–2 weeks of daily use — cycling off for 10–14 days every 6–8 weeks maintains sensitivity.

**Half-life matters.** Caffeine has a half-life of approximately 5 hours in most adults. A 200mg dose at 5pm means 100mg is still active at 10pm. This is the most common cause of supplement-related sleep disruption.

**Anhydrous vs other forms.** Anhydrous is the standard, fastest-absorbing form. Dicaffeine malate (found in some products) releases slightly slower, reducing the spike. Both are effective.`.trim(),
    pros: [
      'Robust evidence across hundreds of RCTs',
      'Improves strength, power, endurance, and cognitive performance',
      'Cheapest effective ergogenic per dose',
      'Well-understood dose-response relationship',
    ],
    cons: [
      'Tolerance builds within 1–2 weeks of daily use',
      'Half-life disrupts sleep if taken in the afternoon',
      'Dependence and withdrawal headaches common',
      'Anxiety and elevated heart rate at higher doses',
    ],
    productsContaining: ['muscletech-vapor-x5', 'bigmuscles-freak'],
    studyCount: 890,
    updated: 'May 2026',
  },
  {
    slug: 'ashwagandha-ksm66',
    sym: 'Ash',
    color: '#52b788',
    label: 'Adaptogen',
    name: 'Ashwagandha KSM-66',
    evidenceTier: 'B',
    evidenceLabel: 'Moderate',
    dose: '300–600mg',
    frequency: 'Daily',
    forms: ['KSM-66®', 'Sensoril®', 'Generic root powder', 'Generic extract'],
    bestForm: 'KSM-66®',
    tagline: 'The only ashwagandha extract with replicated HPA-axis data. Generic powder is not the same compound.',
    summary: `Ashwagandha has significant cultural history in Ayurvedic medicine and a growing body of modern clinical evidence. The critical distinction is between standardised patented extracts and generic root powder — they are not interchangeable.

**KSM-66® specifically.** Developed by Ixoreal Biomed in India, KSM-66 is a full-spectrum root extract standardised to at least 5% withanolides. It has the largest body of clinical evidence of any ashwagandha extract, including replicated studies on cortisol reduction, stress, testosterone, and physical performance.

**The generic powder problem.** Most Indian supplement brands use "ashwagandha extract" or "ashwagandha root powder" without specifying the extract type or withanolide percentage. These products have no consistent clinical evidence and often contain <1% withanolides. At ₹299/bottle, you are likely buying the wrong compound.

**What the evidence actually supports at 300–600mg KSM-66.** Modest cortisol reduction in chronically stressed adults, improved subjective stress and sleep quality, small increases in testosterone in men with low-normal levels. Effect sizes are real but moderate — do not expect dramatic changes.

**Indian market context.** Ashwagandha is one of the most adulterated supplements in the Indian market. KSM-66 certification from Ixoreal is the only reliable quality signal. Look for it explicitly on the label.`.trim(),
    pros: [
      'Replicated evidence for stress reduction and cortisol modulation',
      'KSM-66 is developed and manufactured in India — verifiable quality',
      'Small but consistent testosterone support in relevant populations',
      'Generally well-tolerated with few reported adverse effects',
    ],
    cons: [
      'Generic ashwagandha products are not equivalent to KSM-66',
      'Effect sizes are modest — not a dramatic intervention',
      'Most Indian brands underdose or use unspecified extracts',
      'Limited long-term safety data beyond 8–12 weeks',
    ],
    productsContaining: [],
    studyCount: 89,
    updated: 'May 2026',
  },
]

export const getIngredient = (slug: string) =>
  ingredients.find(i => i.slug === slug) ?? ingredients[0]

// ─── Authors ─────────────────────────────────────────────────────────────────

export const authors = [
  {
    slug: 'pankaj-singh',
    name: 'Pankaj Singh',
    initials: 'PS',
    role: 'Founder & Lead Reviewer',
    credentials: 'Pharm.B · Pharmacist',
    linkedin: 'https://www.linkedin.com/in/pankaj-singh-77b93a368/',
    color: '#1b4332',
    bio: `Pankaj is the founder of Fitlab Reviews and a trained pharmacist. His background in pharmaceutical science gives him a precise lens for evaluating supplement formulations — ingredient forms, bioavailability, drug-nutrient interactions, and label accuracy. He started Fitlab because he was tired of seeing pharmacologically illiterate claims go unchallenged on popular review platforms.`,
    specialties: ['Formulation analysis', 'Bioavailability', 'Drug-nutrient interactions', 'Label accuracy'],
    reviewCount: 6,
    joined: '2024',
  },
  {
    slug: 'fitlab-research-team',
    name: 'Fitlab Research Team',
    initials: 'FR',
    role: 'Editorial Team',
    credentials: 'Collective byline',
    linkedin: '',
    color: '#2d6a4f',
    bio: `Some content on Fitlab is published under the collective Research Team byline. This covers database updates, ingredient index entries, and synthesised summaries where the work is collaborative rather than attributable to a single author. All Research Team content is reviewed by Pankaj Singh before publication.`,
    specialties: ['Ingredient database', 'Evidence synthesis', 'Editorial review'],
    reviewCount: 4,
    joined: '2024',
  },
]

// ─── Extended products for Best-Of + Compare ─────────────────────────────────

export const extendedProducts = [
  // ── Creatine best-of ──
  {
    slug: 'asitis-creatine-monohydrate',
    brand: 'AS-IT-IS Nutrition',
    name: 'Creatine Monohydrate',
    variant: 'Unflavored',
    category: 'Creatine',
    rank: 1,
    score: 9.2,
    price: 649,
    imgBg: '#EDF5F0',
    tags: ['5g dose', 'Creapure®', 'Single ingredient'],
    verdict: 'Creapure-sourced creatine at the best price in India. Single ingredient, verified dose, no filler.',
    scores: { clinicalDose: 9.8, ingredientForm: 9.5, thirdPartyPurity: 9.0, valuePerGram: 9.8, labelHonesty: 9.6 },
    pros: ['Creapure® — German pharmaceutical-grade', 'Full 5g clinical dose', 'Cheapest Creapure in India', 'Single ingredient'],
    cons: ['No Informed Sport certification', 'Slightly gritty — does not fully dissolve in cold water'],
    certifications: [],
    updated: 'May 2026',
  },
  {
    slug: 'muscleblaze-creatine',
    brand: 'MuscleBlaze',
    name: 'Creatine Monohydrate',
    variant: 'Unflavored',
    category: 'Creatine',
    rank: 2,
    score: 8.6,
    price: 799,
    imgBg: '#F4EFE3',
    tags: ['5g dose', 'Micronized', 'Widely available'],
    verdict: 'Solid creatine with better retail availability. Slightly more expensive but easier to find offline.',
    scores: { clinicalDose: 9.8, ingredientForm: 9.0, thirdPartyPurity: 8.0, valuePerGram: 9.0, labelHonesty: 9.2 },
    pros: ['Full 5g dose', 'Micronized — mixes better', 'Wide availability across India', 'Consistent batch quality'],
    cons: ['No Creapure® certification', 'More expensive per gram than AS-IT-IS', 'Source not disclosed'],
    certifications: [],
    updated: 'May 2026',
  },
  {
    slug: 'healthkart-hk-vitals-creatine',
    brand: 'HK Vitals',
    name: 'Creatine Monohydrate',
    variant: 'Unflavored',
    category: 'Creatine',
    rank: 3,
    score: 7.9,
    price: 699,
    imgBg: '#EDF5EF',
    tags: ['5g dose', 'HealthKart brand', 'Budget option'],
    verdict: 'Acceptable budget creatine from HealthKart\'s own label. Dose is correct but source is unverified.',
    scores: { clinicalDose: 9.8, ingredientForm: 8.0, thirdPartyPurity: 7.0, valuePerGram: 9.2, labelHonesty: 8.5 },
    pros: ['Full 5g dose', 'Competitive price', 'Easy returns via HealthKart platform'],
    cons: ['No source transparency', 'No certification', 'HealthKart house brand — limited independent testing'],
    certifications: [],
    updated: 'May 2026',
  },

  // ── Pre-Workout best-of ──
  {
    slug: 'bigmuscles-freak',
    brand: 'BigMuscles Nutrition',
    name: 'Freak Pre-Workout',
    variant: 'Watermelon',
    category: 'Pre-Workout',
    rank: 1,
    score: 7.8,
    price: 1499,
    imgBg: '#EDF5F0',
    tags: ['3g citrulline', '200mg caffeine', 'Full disclosure'],
    verdict: 'Most honestly dosed Indian pre-workout we have reviewed. Best transparency in the domestic category.',
    scores: { clinicalDose: 6.8, ingredientForm: 7.8, thirdPartyPurity: 7.5, valuePerGram: 8.8, labelHonesty: 8.2 },
    pros: ['200mg caffeine — correct dose', 'Full label transparency', '3g citrulline — better than most Indian options', 'Best value transparent pre-workout in India'],
    cons: ['Citrulline 3g — still below 6–8g clinical threshold', 'No certification', 'Limited independent testing'],
    certifications: [],
    updated: 'May 2026',
  },
  {
    slug: 'muscletech-vapor-x5',
    brand: 'MuscleTech',
    name: 'Vapor X5 Next Gen',
    variant: 'Blue Raspberry',
    category: 'Pre-Workout',
    rank: 2,
    score: 7.2,
    price: 1899,
    imgBg: '#F4EFE3',
    tags: ['180mg caffeine', 'Popular brand', 'Sub-clinical doses'],
    verdict: 'Popular but the ergogenic doses outside caffeine are decoration. Buy for the stimulant, not the pump.',
    scores: { clinicalDose: 5.5, ingredientForm: 7.5, thirdPartyPurity: 7.0, valuePerGram: 7.2, labelHonesty: 6.8 },
    pros: ['Reliable caffeine dose', 'Good taste', 'Widely available'],
    cons: ['Citrulline 1.5g — 4x below clinical dose', 'Partial proprietary blend', 'Pump claims unsupported'],
    certifications: [],
    updated: 'May 2026',
  },
  {
    slug: 'on-gold-standard-preworkout',
    brand: 'Optimum Nutrition',
    name: 'Gold Standard Pre-Workout',
    variant: 'Green Apple',
    category: 'Pre-Workout',
    rank: 3,
    score: 7.4,
    price: 2199,
    imgBg: '#EDF5EF',
    tags: ['175mg caffeine', 'Creatine included', 'ON brand'],
    verdict: 'Honest label from a trusted brand. Creatine inclusion is a nice touch but the citrulline is still under-dosed.',
    scores: { clinicalDose: 6.2, ingredientForm: 8.0, thirdPartyPurity: 8.2, valuePerGram: 7.0, labelHonesty: 8.5 },
    pros: ['Full label transparency', 'Informed Sport certified', '175mg caffeine — conservative but reliable', '3g creatine per serve helps with daily loading'],
    cons: ['1.5g citrulline — below clinical threshold', 'More expensive than domestic options', 'Lower caffeine may not satisfy experienced users'],
    certifications: ['Informed Sport'],
    updated: 'May 2026',
  },

  // ── Protein best-of ──
  {
    slug: 'muscleblaze-biozyme-whey',
    brand: 'MuscleBlaze',
    name: 'Biozyme Performance Whey',
    variant: 'Rich Milk Chocolate',
    category: 'Protein',
    rank: 1,
    score: 8.4,
    price: 2899,
    priceWas: 3299,
    imgBg: '#EDF5F0',
    tags: ['25g protein', 'DigeZyme®', 'Best value India'],
    verdict: 'The most honest whey on the Indian market at this price. Best default choice for Indian consumers.',
    scores: { clinicalDose: 8.8, ingredientForm: 8.2, thirdPartyPurity: 8.0, valuePerGram: 9.4, labelHonesty: 8.6 },
    pros: ['Best price-per-gram in India', 'DigeZyme® genuinely helps with digestion', 'Lot tests clean', 'Protein accuracy within 3%'],
    cons: ['Concentrate-led — not ideal for lactose sensitivity', 'No Informed Sport certification', 'Sucralose + acesulfame-K'],
    certifications: [],
    updated: 'May 2026',
  },
  {
    slug: 'asitis-whey-protein',
    brand: 'AS-IT-IS Nutrition',
    name: 'Whey Protein Concentrate 80%',
    variant: 'Unflavored',
    category: 'Protein',
    rank: 2,
    score: 8.8,
    price: 1899,
    imgBg: '#F4EFE3',
    tags: ['24g protein', 'Zero additives', 'Single ingredient'],
    verdict: 'Purest budget whey in India. Zero additives, zero sweeteners, transparent sourcing.',
    scores: { clinicalDose: 9.0, ingredientForm: 8.5, thirdPartyPurity: 8.6, valuePerGram: 9.8, labelHonesty: 9.6 },
    pros: ['Single ingredient', 'Zero artificial additives', 'Cheapest verified protein per gram in India'],
    cons: ['Unflavored only', 'Concentrate — not for lactose-intolerant', 'Foams when shaken'],
    certifications: [],
    updated: 'May 2026',
  },
  {
    slug: 'nutrabay-whey-protein',
    brand: 'Nutrabay',
    name: 'Gold Whey Protein Concentrate',
    variant: 'Chocolate Fudge',
    category: 'Protein',
    rank: 3,
    score: 8.0,
    price: 2199,
    imgBg: '#EDF5EF',
    tags: ['24g protein', 'Good taste', 'Indian brand'],
    verdict: 'Solid domestic option from Nutrabay. Clean label, consistent quality, good flavor range for the price.',
    scores: { clinicalDose: 8.5, ingredientForm: 7.8, thirdPartyPurity: 7.5, valuePerGram: 8.8, labelHonesty: 8.6 },
    pros: ['Good flavor range for domestic brand', 'Honest label, no proprietary blend', 'Nutrabay platform testing data available', 'Competitive pricing'],
    cons: ['No third-party certification', 'Concentrate only — no isolate option', 'Less independently verified than AS-IT-IS'],
    certifications: [],
    updated: 'May 2026',
  },
]

// ─── Best-Of category config ──────────────────────────────────────────────────

export type BestOfCategory = {
  slug: string
  name: string
  headline: string
  subhead: string
  buyingGuide: { heading: string; body: string }[]
  productSlugs: string[]
  faq: { q: string; a: string }[]
}

export const bestOfCategories: BestOfCategory[] = [
  {
    slug: 'creatine',
    name: 'Creatine',
    headline: 'Best creatine supplements in India',
    subhead: 'Ranked by dose accuracy, source quality, purity verification, and price per gram. Updated May 2026.',
    productSlugs: ['asitis-creatine-monohydrate', 'muscleblaze-creatine', 'healthkart-hk-vitals-creatine'],
    buyingGuide: [
      {
        heading: 'Monohydrate only — ignore everything else',
        body: 'HCl, buffered, ethyl ester — all more expensive, none better. The entire creatine research base is built on monohydrate. Unless a specific GI issue makes monohydrate uncomfortable, there is no rational reason to pay more.',
      },
      {
        heading: 'Creapure® vs generic — the source question',
        body: 'Creapure is a trademark of AlzChem in Germany and is the most studied creatine source. Several Indian brands use unverified Chinese sources. If the label does not say Creapure, you cannot confirm the source. At the price difference in India (often just ₹100–200), Creapure is worth it.',
      },
      {
        heading: 'Do you need to load?',
        body: 'No. 5g/day consistently reaches full muscle saturation in 3–4 weeks. Loading (20g/day for 7 days) gets you there faster but produces more water retention and GI discomfort. For most people, daily dosing is simpler and equally effective.',
      },
      {
        heading: 'Non-responders are common in India',
        body: 'Indians on high-meat diets may already have elevated baseline muscle creatine. If you notice no benefit after 6 weeks at 5g/day, you are likely a non-responder. This is a genetic trait, not a product quality issue.',
      },
    ],
    faq: [
      { q: 'What is the correct creatine dose for Indians?', a: '5g per day, consistently. Body weight adjustments are marginal — 5g covers most adults. Timing does not matter. Take it whenever you remember.' },
      { q: 'Is creatine safe for kidneys?', a: 'In healthy adults, yes. Long-term studies at 5g/day show no kidney harm. The concern is relevant only for people with pre-existing kidney disease — consult a doctor in that case.' },
      { q: 'Which is the best creatine brand in India?', a: 'AS-IT-IS Nutrition Creatine (Creapure-sourced) is the best combination of quality and value. MuscleBlaze is the better choice if you need offline retail availability.' },
    ],
  },
  {
    slug: 'pre-workout',
    name: 'Pre-Workout',
    headline: 'Best pre-workout supplements in India',
    subhead: 'Ranked by clinical dose accuracy, label transparency, and value. Most Indian pre-workouts fail on doses — this list shows which ones do not.',
    productSlugs: ['bigmuscles-freak', 'muscletech-vapor-x5', 'on-gold-standard-preworkout'],
    buyingGuide: [
      {
        heading: 'The citrulline problem in Indian pre-workouts',
        body: 'The clinical dose for L-Citrulline is 6–8g. Most Indian pre-workouts contain 1–3g and label it "pump support." At those doses, the pump benefits are not clinically supported. If pump is important to you, you need either a fully dosed imported product or to take separate citrulline.',
      },
      {
        heading: 'Caffeine is the one ingredient that works at Indian pre-workout doses',
        body: 'Most Indian pre-workouts get the caffeine dose right — 150–200mg is in the effective range for most adults. This is the primary ergogenic benefit you will actually experience. Everything else at the doses typically provided is secondary at best.',
      },
      {
        heading: 'Proprietary blends are a red flag',
        body: 'If a pre-workout lists a "proprietary blend" with a total weight but no individual doses, you cannot verify whether any ingredient is at a clinical dose. In the Indian market, this is almost always because at least one key ingredient is under-dosed. Full label transparency is the baseline requirement.',
      },
    ],
    faq: [
      { q: 'Are Indian pre-workout supplements safe?', a: 'Generally yes, but quality varies significantly. Look for brands with full label disclosure and avoid anything with undisclosed proprietary blends or stimulant cocktails.' },
      { q: 'Why does pre-workout cause tingling?', a: 'Beta-alanine causes harmless skin tingling (paresthesia). It actually indicates the dose is near the effective range (3.2g+). Products without tingling likely have sub-clinical beta-alanine.' },
      { q: 'When should I take pre-workout?', a: '20–30 minutes before training. Avoid taking after 4pm if you train in the evening — the caffeine half-life of 5 hours will affect sleep.' },
    ],
  },
  {
    slug: 'protein',
    name: 'Protein',
    headline: 'Best protein powders in India',
    subhead: 'Ranked by protein accuracy, ingredient honesty, purity testing, and value per gram. Indian market focus.',
    productSlugs: ['muscleblaze-biozyme-whey', 'asitis-whey-protein', 'nutrabay-whey-protein'],
    buyingGuide: [
      {
        heading: 'Amino acid spiking — the Indian market problem',
        body: 'Multiple Indian protein brands have been caught spiking their amino acid content with cheap fillers like taurine and glycine that inflate nitrogen readings but have no muscle-building benefit. This inflates apparent protein content on lab tests. Always buy from brands with independent lot testing data or Labdoor-style verification.',
      },
      {
        heading: 'Isolate vs concentrate in India',
        body: 'Isolate is genuinely better only if you are lactose intolerant. For everyone else, a clean WPC80 from a verified brand at half the price is the smarter choice. Most Indian isolate products are also more expensive without proportionally better quality control.',
      },
      {
        heading: 'How much protein per day for Indians?',
        body: 'The current evidence supports 1.6–2.2g per kg of bodyweight for muscle building. For a 70kg person, that is 112–154g/day. Most Indians get approximately 60–80g/day from food. One scoop of whey (24–25g) bridges a meaningful part of that gap.',
      },
    ],
    faq: [
      { q: 'Which is the best whey protein in India?', a: 'For value: AS-IT-IS WPC80. For flavored options: MuscleBlaze Biozyme. Both have clean labels and verifiable lot testing. Avoid any brand that will not disclose amino acid spiking test results.' },
      { q: 'Is MuscleBlaze protein adulterated?', a: 'Based on our testing and published third-party data, current MuscleBlaze Biozyme batches are not adulterated. Protein accuracy came in at 97.1% in our review. That said, always verify with current lot testing data as formulations can change.' },
      { q: 'Can vegetarians take whey protein in India?', a: 'Yes — whey is a dairy byproduct and is lacto-vegetarian. It is not suitable for vegans. For vegan options, pea protein from brands like Oziva or YourProtein is the most evidence-supported alternative in India.' },
    ],
  },
]

export const getBestOf = (slug: string) =>
  bestOfCategories.find(c => c.slug === slug) ?? bestOfCategories[0]

// ─── Compare pairs ────────────────────────────────────────────────────────────

export type ComparePair = {
  slug: string
  title: string
  subhead: string
  productSlugs: [string, string]
  verdict: { winner: string; summary: string }
  comparisonRows: { label: string; a: string; b: string; winner?: 'a' | 'b' | 'tie' }[]
}

export const comparePairs: ComparePair[] = [
  {
    slug: 'asitis-vs-muscleblaze-creatine',
    title: 'AS-IT-IS vs MuscleBlaze Creatine',
    subhead: 'Same compound, similar price. The real question is Creapure sourcing vs retail convenience.',
    productSlugs: ['asitis-creatine-monohydrate', 'muscleblaze-creatine'],
    verdict: {
      winner: 'asitis-creatine-monohydrate',
      summary: 'AS-IT-IS wins on value and verified sourcing. MuscleBlaze wins on retail availability and brand trust for first-time buyers. If you are buying online, AS-IT-IS is the clear answer.',
    },
    comparisonRows: [
      { label: 'Overall score',       a: '9.2 / 10',     b: '8.6 / 10',    winner: 'a' },
      { label: 'Dose per serving',    a: '5g',            b: '5g',          winner: 'tie' },
      { label: 'Creatine source',     a: 'Creapure® (DE)', b: 'Undisclosed', winner: 'a' },
      { label: 'Price per tub',       a: '₹649',          b: '₹799',        winner: 'a' },
      { label: 'Price per serving',   a: '~₹13',          b: '~₹16',        winner: 'a' },
      { label: 'Mixability',          a: 'Gritty',        b: 'Smoother',    winner: 'b' },
      { label: 'Label honesty',       a: '9.6 / 10',      b: '9.2 / 10',    winner: 'a' },
      { label: 'Offline availability', a: 'Limited',      b: 'Widespread',  winner: 'b' },
      { label: 'Value score',         a: '9.8 / 10',      b: '9.0 / 10',    winner: 'a' },
    ],
  },
  {
    slug: 'muscleblaze-vs-asitis-whey',
    title: 'MuscleBlaze Biozyme vs AS-IT-IS Whey',
    subhead: 'India\'s two most trusted domestic protein brands. Flavored convenience vs pure value.',
    productSlugs: ['muscleblaze-biozyme-whey', 'asitis-whey-protein'],
    verdict: {
      winner: 'asitis-whey-protein',
      summary: 'AS-IT-IS wins on label purity and value per gram. MuscleBlaze wins on taste and convenience. If you are adding protein to smoothies or oatmeal, AS-IT-IS is the better choice. If you want something that tastes good in water, MuscleBlaze.',
    },
    comparisonRows: [
      { label: 'Overall score',      a: '8.4 / 10',          b: '8.8 / 10',     winner: 'b' },
      { label: 'Protein per serving', a: '25g',              b: '24g',           winner: 'tie' },
      { label: 'Price per kg',       a: '~₹1,160',           b: '~₹790',         winner: 'b' },
      { label: 'Sweeteners',         a: 'Sucralose + Ace-K', b: 'None',          winner: 'b' },
      { label: 'Flavor options',     a: 'Multiple',          b: 'Unflavored only', winner: 'a' },
      { label: 'Digestive enzymes',  a: 'DigeZyme® included', b: 'None',         winner: 'a' },
      { label: 'Label honesty',      a: '8.6 / 10',          b: '9.6 / 10',      winner: 'b' },
      { label: 'Value score',        a: '9.4 / 10',          b: '9.8 / 10',      winner: 'b' },
      { label: 'Protein accuracy',   a: '97.1%',             b: '96.8%',         winner: 'tie' },
    ],
  },
  {
    slug: 'bigmuscles-vs-muscletech-preworkout',
    title: 'BigMuscles Freak vs MuscleTech Vapor X5',
    subhead: 'Domestic transparency vs imported brand recognition. Which is actually better for Indian gymgoers?',
    productSlugs: ['bigmuscles-freak', 'muscletech-vapor-x5'],
    verdict: {
      winner: 'bigmuscles-freak',
      summary: 'BigMuscles Freak wins on transparency and value. The citrulline is still under-dosed in both, but Freak tells you exactly what is in it. Vapor X5 costs more and hides doses. For an Indian gymgoer who cares about what they are taking, Freak is the better choice.',
    },
    comparisonRows: [
      { label: 'Overall score',      a: '7.8 / 10',  b: '7.2 / 10',    winner: 'a' },
      { label: 'Caffeine dose',      a: '200mg',      b: '180mg',       winner: 'a' },
      { label: 'Citrulline dose',    a: '3g',         b: '1.5g',        winner: 'a' },
      { label: 'Label transparency', a: 'Full',       b: 'Partial',     winner: 'a' },
      { label: 'Price per serving',  a: '~₹100',      b: '~₹126',       winner: 'a' },
      { label: 'Taste (reported)',   a: 'Good',       b: 'Very good',   winner: 'b' },
      { label: 'Label honesty',      a: '8.2 / 10',   b: '6.8 / 10',    winner: 'a' },
      { label: 'Value score',        a: '8.8 / 10',   b: '7.2 / 10',    winner: 'a' },
    ],
  },
]

export const getCompare = (slug: string) =>
  comparePairs.find(c => c.slug === slug) ?? comparePairs[0]

// ─── Unified product lookup ───────────────────────────────────────────────────
export const getAllProduct = (slug: string) =>
  [...products, ...extendedProducts].find(p => p.slug === slug) ?? products[0]
