'use client'
import { useState, useEffect, useRef } from 'react'

const categories = [
  { label: 'Protein',     count: 142 },
  { label: 'Creatine',    count: 38 },
  { label: 'Pre-workout', count: 61 },
  { label: 'Vitamins',    count: 94 },
  { label: 'Omega-3',     count: 27 },
  { label: 'Fat loss',    count: 22 },
  { label: 'Sleep',       count: 31 },
]

const picks = [
  {
    rank: '01', score: '9.1', imgBg: '#EDF5F0',
    brand: 'Optimum Nutrition',
    name: 'Gold Standard 100% Whey',
    nameEm: 'Double Rich Chocolate',
    tags: ['24g protein', 'WPI-led blend', 'Informed Sport'],
    verdict: 'Fifteen years on the market and still the most-replicated lot on Labdoor. The label hasn\'t lied once. That\'s rarer than you think.',
    price: '$58', priceWas: '$64',
  },
  {
    rank: '02', score: '8.6', imgBg: '#F4EFE3',
    brand: 'Dymatize',
    name: 'ISO100 Whey Isolate',
    nameEm: 'Unflavored',
    tags: ['25g protein', 'Hydrolyzed', 'Lactose-free'],
    verdict: 'The only isolate that earns its $0.06/g premium consistently. If lactose isn\'t your problem, the concentrate is fine. If it is — this one actually helps.',
    price: '$72',
  },
  {
    rank: '03', score: '8.4', imgBg: '#EDF5EF',
    brand: 'MuscleBlaze',
    name: 'Biozyme Performance Whey',
    nameEm: 'Rich Milk Chocolate',
    tags: ['25g protein', 'DigeZyme® blend', 'Value pick'],
    verdict: 'Ignore the enzyme marketing — it\'s window dressing. What matters: the macro split is honest and our lot tested clean. Best value on this list.',
    price: '$46',
  },
]

export default function TopPicks() {
  const [active, setActive] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          el.querySelectorAll('.scroll-reveal').forEach((node, i) => {
            setTimeout(() => node.classList.add('in-view'), i * 90)
          })
          obs.disconnect()
        }
      },
      { threshold: 0.08 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div ref={sectionRef} className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">

        {/* Section head */}
        <div className="mb-10 md:mb-12 md:grid md:grid-cols-[1.25fr_0.75fr] md:gap-12 md:items-end">
          <div className="scroll-reveal">
            <div className="skirt mb-3">Editor's picks · May 2026</div>
            <h2
              className="font-sans font-semibold leading-[1.04] tracking-[-0.03em] text-ink2 mt-3"
              style={{ fontSize: 'clamp(30px, 3.6vw, 48px)' }}
            >
              If you only buy<br />
              <em className="section-em">three things</em> this year.
            </h2>
          </div>
          <div className="scroll-reveal mt-4 md:mt-0 text-[14px] text-ink3 leading-[1.65] md:max-w-[380px] md:justify-self-end" style={{ transitionDelay: '80ms' }}>
            No affiliate bonuses. No launch-week bumps. These three have held their
            score across six consecutive re-evaluations. That's the whole filter.
          </div>
        </div>

        {/* Category pills */}
        <div className="scroll-reveal flex gap-2 overflow-x-auto pb-2 mb-8 -mx-5 px-5 sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0 lg:flex-wrap no-scrollbar"
             style={{ transitionDelay: '120ms' }}>
          {categories.map((c, i) => (
            <button
              key={c.label}
              onClick={() => setActive(i)}
              className={`text-[13px] rounded-full px-4 py-2 border transition-all duration-150 cursor-pointer font-normal whitespace-nowrap shrink-0
                ${active === i
                  ? 'bg-clay text-white border-clay'
                  : 'bg-paper3 text-ink2 border-rule hover:border-clay hover:text-clay'}`}
            >
              {c.label}
              <span className={`ml-1.5 text-[11px] ${active === i ? 'text-white/70' : 'text-muted2'}`}>
                {c.count}
              </span>
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {picks.map((p, i) => (
            <div key={i} className="scroll-reveal" style={{ transitionDelay: `${160 + i * 90}ms` }}>
              <PickCard {...p} />
            </div>
          ))}
        </div>

        {/* Sources */}
        <p className="scroll-reveal mt-6 text-[12px] sm:text-[12.5px] text-muted leading-[1.65] border-t border-rule pt-4">
          Graded against{' '}
          <a href="/scoring-rubric" className="text-ink2 border-b border-rule hover:border-clay hover:text-clay transition-colors">
            public rubric v3.1
          </a>
          {' '}· Amazon affiliate links present — they don't change the order ·
          prices as of Apr 2026 · this is not medical advice.
        </p>
      </div>
    </section>
  )
}

function PickCard(p: typeof picks[0]) {
  return (
    <article
      className="bg-paper3 border border-rule rounded-[14px] overflow-hidden flex flex-col transition-all duration-[250ms] ease-out hover:-translate-y-[3px] group"
      onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 18px 40px rgba(27,67,50,.10)')}
      onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
    >
      <div
        className="relative border-b border-rule flex items-center justify-center"
        style={{ aspectRatio: '5/4', background: p.imgBg }}
      >
        <span className="absolute top-3 left-3.5 font-serif-body text-[13px] text-muted">
          №&nbsp;{p.rank}
        </span>
        <span className="absolute top-3 right-3 bg-clay text-white rounded-full px-2.5 py-1 text-[11px] font-medium inline-flex items-baseline gap-1">
          <span className="font-serif-body text-[14px]">{p.score}</span>
          <span className="text-[9px] opacity-70">/ 10</span>
        </span>
        <div className="w-[60%] h-[70%] flex items-center justify-center">
          <div className="w-20 h-28 rounded-lg opacity-20 transition-transform duration-300 group-hover:scale-105"
               style={{ background: 'linear-gradient(135deg,#D3CCBE,#1b433230)' }} />
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5">
        <div className="text-[10px] tracking-[0.18em] uppercase text-muted font-medium">{p.brand}</div>
        <h3 className="font-sans font-medium text-[17px] tracking-[-0.015em] text-ink2 leading-[1.25] mt-1.5 mb-1">
          {p.name} —{' '}
          <em className="font-serif-body" style={{ fontStyle: 'italic', color: '#1b4332' }}>{p.nameEm}</em>
        </h3>

        <div className="flex flex-wrap gap-1.5 mt-3 mb-3">
          {p.tags.map(t => (
            <span key={t} className="text-[11px] text-ink3 bg-paper border border-rule rounded-full px-2.5 py-0.5">
              {t}
            </span>
          ))}
        </div>

        <p className="text-[13px] sm:text-[14px] text-ink3 leading-[1.6] flex-1">{p.verdict}</p>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-rule">
          <div className="font-sans font-medium text-[15px] text-ink2">
            {p.price}
            {p.priceWas && <s className="text-muted font-normal ml-1.5 text-[13px]">{p.priceWas}</s>}
          </div>
          <button className="text-[12px] sm:text-[13px] text-clay border border-clay rounded-full px-3 py-1.5 bg-transparent transition-all duration-150 hover:bg-clay hover:text-white cursor-pointer whitespace-nowrap">
            Read review →
          </button>
        </div>
      </div>
    </article>
  )
}
