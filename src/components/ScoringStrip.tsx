'use client'
import { useEffect, useRef, useState } from 'react'

const bars = [
  { label: 'Clinical dose',      value: 9.2, pct: 92 },
  { label: 'Ingredient form',    value: 8.4, pct: 84 },
  { label: 'Third-party purity', value: 7.1, pct: 71 },
  { label: 'Value per gram',     value: 6.2, pct: 62 },
  { label: 'Label honesty',      value: 8.8, pct: 88 },
]

export default function ScoringStrip() {
  const ref = useRef<HTMLUListElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      entries => { if (entries[0].isIntersecting) { setAnimated(true); obs.disconnect() } },
      { threshold: 0.25 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          el.querySelectorAll('.scroll-reveal-dark').forEach((node, i) => {
            setTimeout(() => (node as HTMLElement).style.opacity = '1', i * 100)
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
    <section style={{ background: '#0D0D0D', color: '#E8E4DC' }}>
      <div className="py-16 sm:py-20 lg:py-24">
        <div ref={sectionRef} className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
          <div className="grid gap-10 md:gap-20 md:grid-cols-[1.05fr_0.95fr] md:items-center">

            {/* Left */}
            <div>
              <div className="skirt" style={{ color: '#9C948A' }}>How we decide</div>
              <h2
                className="font-sans font-semibold leading-[1.04] tracking-[-0.03em] mt-3"
                style={{ fontSize: 'clamp(30px, 3.6vw, 48px)', color: '#fff' }}
              >
                Five questions.<br />
                The same for every<br />
                product. <em className="font-serif-body" style={{ color: '#74c69d', fontVariationSettings: '"opsz" 72' }}>
                  No exceptions.
                </em>
              </h2>
              <p className="text-[15px] sm:text-[16px] leading-[1.65] mt-4 mb-7"
                 style={{ color: '#B9B3AA', maxWidth: '480px' }}>
                We built the rubric before we reviewed a single product. We haven't
                changed the weights since March 2024. When we update it, we re-score
                everything — and publish the changelog.
              </p>

              {/* Small stat callouts */}
              <div className="flex gap-4 flex-wrap mb-7">
                {[
                  { n: '100%', label: 'of scores are public' },
                  { n: '0',    label: 'paid placements ever' },
                ].map(s => (
                  <div key={s.label} className="border rounded-[10px] px-4 py-3"
                       style={{ borderColor: '#2a2824' }}>
                    <div className="font-serif-body text-[22px] leading-none" style={{ color: '#74c69d' }}>
                      {s.n}
                    </div>
                    <div className="text-[11px] mt-1 tracking-[0.08em] uppercase"
                         style={{ color: '#7A736B' }}>{s.label}</div>
                  </div>
                ))}
              </div>

              <a
                href="/methodology"
                className="inline-flex items-center gap-2 rounded-full px-[22px] py-[13px] text-[14px] font-medium border transition-all duration-200 cursor-pointer"
                style={{ borderColor: '#52b788', color: '#52b788' }}
                onMouseEnter={e => {
                  ;(e.currentTarget as HTMLElement).style.background = '#52b788'
                  ;(e.currentTarget as HTMLElement).style.color = '#0D0D0D'
                }}
                onMouseLeave={e => {
                  ;(e.currentTarget as HTMLElement).style.background = 'transparent'
                  ;(e.currentTarget as HTMLElement).style.color = '#52b788'
                }}
              >
                Read the full methodology →
              </a>
            </div>

            {/* Bars */}
            <ul ref={ref} className="m-0 p-0 list-none">
              {bars.map((b, i) => (
                <li
                  key={i}
                  className="py-4 flex items-center gap-3"
                  style={{ borderBottom: i < bars.length - 1 ? '1px solid #2a2824' : 'none' }}
                >
                  <span className="font-sans text-[11px] uppercase tracking-[0.14em] font-medium shrink-0"
                        style={{ color: '#A39B91', width: '120px' }}>
                    {b.label}
                  </span>
                  <div className="flex-1 h-[5px] rounded-full overflow-hidden"
                       style={{ background: '#2a2824' }}>
                    <div
                      className="h-full rounded-full"
                      style={{
                        background: 'linear-gradient(90deg, #2d6a4f, #74c69d)',
                        width: animated ? `${b.pct}%` : '0%',
                        transition: animated
                          ? `width 1.1s cubic-bezier(.22,.7,.2,1) ${i * 80}ms`
                          : 'none',
                      }}
                    />
                  </div>
                  <span className="font-serif-body text-[20px] text-right tracking-[-0.015em] shrink-0 w-10"
                        style={{ color: '#74c69d' }}>
                    {b.value}
                  </span>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
    </section>
  )
}
