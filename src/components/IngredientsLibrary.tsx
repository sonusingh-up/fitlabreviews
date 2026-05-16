'use client'
import { useEffect, useRef } from 'react'

const ingredients = [
  { sym: 'Cr',  color: '#1b4332', label: 'Performance',   name: 'Creatine monohydrate', slug: 'creatine-monohydrate',
    desc: 'The most-studied ergogenic in history. 5g/day, no loading phase needed. Works in roughly 70% of people — and the 30% who don\'t respond aren\'t lying.',
    dose: '3–5g · daily', ev: 'A · strong' },
  { sym: 'Wp',  color: '#2d6a4f', label: 'Protein',       name: 'Whey protein isolate', slug: 'whey-protein-isolate',
    desc: 'Isolate is worth the extra cost only if lactose bothers you. Otherwise concentrate at ~$0.04/g of protein beats isolate every time.',
    dose: '20–30g · serving', ev: 'A · strong' },
  { sym: 'Ω3',  color: '#40916c', label: 'Essential fat',  name: 'EPA + DHA (fish oil)', slug: 'ingredients',
    desc: 'Most fish oil is rancid before it reaches you. Check for a TOTOX score below 26. If the label doesn\'t show one, pick a different brand.',
    dose: '1–3g · daily', ev: 'B · moderate' },
  { sym: 'Ash', color: '#52b788', label: 'Adaptogen',      name: 'Ashwagandha KSM-66', slug: 'ashwagandha-ksm66',
    desc: 'The only ashwagandha extract with replicated HPA-axis data. Generic "ashwagandha powder" at lower prices is not the same compound.',
    dose: '300–600mg · daily', ev: 'B · moderate' },
  { sym: 'D3',  color: '#74c69d', label: 'Vitamin',        name: 'Vitamin D3', slug: 'ingredients',
    desc: 'Get your 25(OH)D tested before supplementing. If you\'re above 50 ng/mL you don\'t need this. Below 30 — almost everyone does.',
    dose: '1k–2k IU · daily', ev: 'B · moderate' },
  { sym: 'Mg',  color: '#1b4332', label: 'Mineral',        name: 'Magnesium glycinate', slug: 'ingredients',
    desc: 'The oxide form is basically useless. Glycinate or malate only. Sleep, cramps, and recovery all respond — but only if you\'re actually deficient.',
    dose: '200–400mg · daily', ev: 'B · moderate' },
  { sym: 'Cf',  color: '#2d6a4f', label: 'Stimulant',      name: 'Caffeine anhydrous', slug: 'caffeine-anhydrous',
    desc: '3–6 mg/kg before training. Beyond that you\'re chasing jitters not performance. Half-life is 5 hours — your 4pm scoop is your 9pm problem.',
    dose: '3–6 mg/kg · acute', ev: 'A · strong' },
  { sym: 'Cit', color: '#40916c', label: 'Vasodilator',    name: 'L-Citrulline malate', slug: 'ingredients',
    desc: 'Ignore anything under 6g per dose. The pump products with 3g are selling you a feeling, not a result. Clinical threshold is non-negotiable.',
    dose: '6–8g · pre-WO', ev: 'B · moderate' },
]

export default function IngredientsLibrary() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          el.querySelectorAll('.scroll-reveal').forEach((node, i) => {
            setTimeout(() => node.classList.add('in-view'), i * 60)
          })
          obs.disconnect()
        }
      },
      { threshold: 0.06 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-paper2">
      <div ref={sectionRef} className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">

        <div className="mb-10 md:mb-12 md:grid md:grid-cols-[1.25fr_0.75fr] md:gap-12 md:items-end">
          <div className="scroll-reveal">
            <div className="skirt mb-3">Ingredient index</div>
            <h2
              className="font-sans font-semibold leading-[1.04] tracking-[-0.03em] text-ink2 mt-3"
              style={{ fontSize: 'clamp(30px, 3.6vw, 48px)' }}
            >
              The compounds behind<br />
              the claims —<br />
              <em className="section-em">plain English</em>, no hype.
            </h2>
            <a href="/ingredients" className="inline-block mt-4 text-[13px] font-medium text-clay hover:underline">
              Full ingredient index →
            </a>
          </div>
          <div className="scroll-reveal mt-4 md:mt-0 text-[14px] text-ink3 leading-[1.65] md:max-w-[380px] md:justify-self-end" style={{ transitionDelay: '80ms' }}>
            Mechanism, dose range, evidence grade, and the honest answer on
            whether it actually works for most people — not the cherry-picked
            responder in the study abstract.
          </div>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 rounded-[14px] overflow-hidden border border-rule"
          style={{ gap: '1px', background: '#D3CCBE' }}
        >
          {ingredients.map((ing, i) => (
            <a
              key={i}
              href={ing.slug === 'ingredients' ? '/ingredients' : `/ingredients/${ing.slug}`}
              className="scroll-reveal ing-shimmer flex flex-col bg-paper2 transition-colors duration-200 hover:bg-paper3 cursor-pointer"
              style={{ padding: '24px 20px 22px', transitionDelay: `${i * 50}ms` }}
            >
              <div
                className="font-serif-display leading-[0.95] tracking-[-0.045em] mb-5 transition-transform duration-300 group-hover:scale-105"
                style={{ fontSize: '52px', color: ing.color, fontVariationSettings: '"opsz" 144' }}
              >
                {ing.sym}
              </div>
              <div className="text-[10px] tracking-[0.2em] uppercase font-medium mb-1" style={{ color: ing.color }}>
                {ing.label}
              </div>
              <h4 className="font-sans font-medium text-[15px] tracking-[-0.012em] text-ink2 mb-1.5">
                {ing.name}
              </h4>
              <p className="text-[13px] leading-[1.6] text-ink3 mb-3 flex-1">{ing.desc}</p>
              <div
                className="flex items-center justify-between pt-3 mt-auto text-[11px] text-muted"
                style={{ borderTop: '1px dashed #D3CCBE' }}
              >
                <span className="tracking-[0.04em]">{ing.dose}</span>
                <span className="font-medium" style={{ color: ing.color }}>{ing.ev}</span>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-8 scroll-reveal">
          <a href="/ingredients" className="inline-flex items-center gap-2 rounded-full px-[22px] py-[13px] text-[14px] font-medium bg-paper3 text-ink2 border border-rule transition-all duration-150 hover:border-clay hover:text-clay">
            Browse all 312 ingredients →
          </a>
        </div>
      </div>
    </section>
  )
}
