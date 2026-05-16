'use client'
import { useEffect, useRef } from 'react'

const rubric = [
  { num: '01', title: 'Clinical dose',      desc: 'Does the serving size match the dose that moved the needle in the actual trial? Not "contains ingredient X" — contains it at the right amount.', weight: '25%' },
  { num: '02', title: 'Ingredient form',    desc: 'Magnesium oxide vs glycinate. L-arginine vs citrulline. Form matters more than the name on the label.', weight: '20%' },
  { num: '03', title: 'Third-party purity', desc: 'NSF, Informed Sport, or Labdoor lot-level testing. We don\'t accept brand-funded audits. Independent only.', weight: '20%' },
  { num: '04', title: 'Value per gram',     desc: 'Cost per gram of clinically active ingredient — not per scoop, not per tub. Context-adjusted for certified vs non-certified products.', weight: '20%' },
  { num: '05', title: 'Label honesty',      desc: 'Proprietary blends, amino spiking, hidden stimulants, and the fine-print games brands play when they\'re hiding something.', weight: '15%' },
]

export default function Editorial() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          el.querySelectorAll('.scroll-reveal').forEach((node, i) => {
            setTimeout(() => node.classList.add('in-view'), i * 80)
          })
          obs.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div ref={ref} className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
        <div className="grid gap-10 md:gap-[72px] md:grid-cols-2 md:items-start">

          {/* Pull quote */}
          <div className="scroll-reveal">
            <p
              className="font-serif-display leading-[1.2] tracking-[-0.018em] text-ink2 m-0"
              style={{ fontSize: 'clamp(24px, 3vw, 40px)', fontVariationSettings: '"opsz" 96' }}
            >
              A lot of what you're{' '}
              <em style={{ color: '#1b4332', fontStyle: 'italic' }}>paying for</em>{' '}
              is the marketing that convinced you to buy it. We wrote a rubric
              so you never have to take our word for it
              <span style={{ color: '#1b4332' }}>.</span>
            </p>
            <div className="mt-5 text-[13px] text-muted">
              — <span className="text-ink2 font-medium">The Fitlab Research Team</span>
              {' '}· Rubric v3.1 · April 2026
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap gap-3">
              {['Open methodology', 'No brand deals', 'Lot-tested products only'].map(b => (
                <span key={b}
                      className="inline-flex items-center gap-1.5 text-[12px] font-medium text-clay bg-clay/8 border border-clay/20 rounded-full px-3 py-1.5">
                  <span className="text-[10px]">✓</span> {b}
                </span>
              ))}
            </div>
          </div>

          {/* Rubric list */}
          <ul className="p-0 m-0 list-none border-t border-rule">
            {rubric.map((r, i) => (
              <li
                key={r.num}
                className="scroll-reveal py-5 border-b border-rule flex gap-4 items-baseline"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <span className="font-serif-body text-[22px] leading-none shrink-0 w-8"
                      style={{ color: '#1b4332' }}>
                  {r.num}
                </span>
                <div className="flex-1 min-w-0">
                  <h5 className="m-0 mb-1 font-sans font-medium text-[14px] sm:text-[15px] text-ink2 tracking-[-0.005em]">
                    {r.title}
                  </h5>
                  <p className="m-0 text-[12.5px] sm:text-[13px] text-muted leading-[1.6]">{r.desc}</p>
                </div>
                <span className="font-serif-body text-[16px] sm:text-[18px] text-ink2 text-right shrink-0 ml-2"
                      style={{ color: '#1b4332' }}>
                  {r.weight}
                </span>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  )
}
