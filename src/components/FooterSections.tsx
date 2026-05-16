'use client'
import { useState, useEffect, useRef } from 'react'

const brands = [
  'Optimum Nutrition', 'Dymatize', 'MuscleBlaze', 'Thorne',
  'Bulk', 'MyProtein', 'Nutrabay', 'Gorilla Mode',
]

const footerCols: { head: string; links: { label: string; href: string }[] }[] = [
  { head: 'Content', links: [
    { label: 'All Reviews',      href: '/reviews' },
    { label: 'Ingredients',      href: '/ingredients' },
    { label: 'Comparisons',      href: '/compare' },
    { label: 'Stacks',           href: '/stacks' },
    { label: 'Protocols',        href: '/protocols' },
    { label: 'Research',         href: '/research' },
    { label: 'Blog',             href: '/blog' },
  ]},
  { head: 'Best Of', links: [
    { label: 'Best Creatine',    href: '/best/creatine' },
    { label: 'Best Pre-Workout', href: '/best/pre-workout' },
    { label: 'Best Protein',     href: '/best/protein' },
  ]},
  { head: 'Company', links: [
    { label: 'About',            href: '/about' },
    { label: 'Authors',          href: '/authors' },
    { label: 'Methodology',      href: '/methodology' },
    { label: 'Scoring rubric',   href: '/scoring-rubric' },
    { label: 'Conflicts policy', href: '/conflicts-policy' },
    { label: 'Contact',          href: '/contact' },
  ]},
  { head: 'Reach', links: [
    { label: 'Newsletter',  href: '#' },
    { label: 'Twitter / X', href: '#' },
    { label: 'Instagram',   href: '#' },
    { label: 'RSS',         href: '#' },
  ]},
]

export function BrandsRow() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
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
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="py-12 sm:py-16">
      <div ref={ref} className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
        <div className="scroll-reveal skirt mb-5">Brands on our radar · 38 reviewed</div>
        <div className="flex gap-6 sm:gap-8 overflow-x-auto pb-1 flex-nowrap sm:flex-wrap no-scrollbar">
          {brands.map((b, i) => (
            <div
              key={b}
              className="scroll-reveal font-sans font-medium text-[15px] text-muted cursor-pointer transition-all duration-200 hover:text-clay shrink-0"
              style={{ opacity: 0.78, transitionDelay: `${i * 50}ms` }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '1' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '0.78' }}
            >
              {i % 2 === 1
                ? <em className="font-serif-body text-[16px]">{b}</em>
                : b
              }
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Newsletter() {
  const [done, setDone] = useState(false)
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
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="border-t border-rule py-16 sm:py-20 lg:py-24" style={{ background: '#E8E1D2' }}>
      <div ref={ref} className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
        <div className="grid gap-8 sm:gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div>
            <div className="scroll-reveal skirt mb-3">The Monday brief</div>
            <h3
              className="scroll-reveal font-sans font-semibold leading-[1.1] tracking-[-0.03em] text-ink2 mt-3"
              style={{ fontSize: 'clamp(24px, 3vw, 38px)', transitionDelay: '80ms' }}
            >
              One email. What actually{' '}
              <em className="section-em">moved</em> in supplement science this week. Nothing else.
            </h3>
            <p className="scroll-reveal text-[14px] text-muted mt-3 leading-[1.65]" style={{ transitionDelay: '140ms' }}>
              No product launches. No affiliate round-ups. Just the one finding worth knowing about.
            </p>
          </div>
          <div className="scroll-reveal" style={{ transitionDelay: '100ms' }}>
            <form
              onSubmit={e => { e.preventDefault(); setDone(true); setTimeout(() => setDone(false), 2500) }}
              className="flex items-center bg-white border border-rule rounded-full transition-colors focus-within:border-clay overflow-hidden"
              style={{ padding: '5px 5px 5px 18px' }}
            >
              <input
                type="email" required
                placeholder="you@domain.com"
                className="flex-1 min-w-0 border-0 outline-none bg-transparent font-sans text-[14px] text-ink2 placeholder:text-muted py-2.5"
              />
              <button
                type="submit"
                className="bg-clay text-white border-0 rounded-full px-5 py-2.5 font-sans text-[13px] font-medium cursor-pointer transition-colors hover:bg-clayd shrink-0 whitespace-nowrap"
              >
                {done ? 'Done ✓' : 'Subscribe'}
              </button>
            </form>
            <div className="mt-3 text-[12px] text-muted">
              12,800 readers · one-click unsubscribe from every email.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer style={{ padding: '64px 0 48px', background: '#0D0D0D', color: '#C9C2B5' }}>
      <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">

        <div className="grid gap-8 grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">

          {/* Brand col */}
          <div className="col-span-2 lg:col-span-1">
            <a href="/" className="inline-flex items-center gap-2.5 font-sans font-semibold text-[15px] text-white">
              <span className="w-7 h-7 flex items-center justify-center text-white font-serif-body text-base shrink-0"
                    style={{ background: '#1b4332', borderRadius: '8px' }}>
                f
              </span>
              <span>
                <strong>Fitlab</strong>
                <span style={{ color: '#52b788' }} className="font-bold mx-px">·</span>
                Reviews
              </span>
            </a>
            <p className="font-sans text-[13px] leading-[1.65] max-w-[290px] mt-3 mb-4"
               style={{ color: '#9C948A' }}>
              Independent supplement research. We don't take brand money —
              so when we say something works, we mean it.
            </p>
          </div>

          {/* Nav cols */}
          {footerCols.map(col => (
            <div key={col.head}>
              <h6 className="text-[10px] sm:text-[11px] tracking-[0.22em] uppercase font-medium m-0 mb-4"
                  style={{ color: '#9C948A' }}>
                {col.head}
              </h6>
              {col.links.map(l => (
                <a key={l.label} href={l.href}
                   className="block text-[13px] py-1 transition-all duration-150"
                   style={{ color: '#E2DACE', opacity: 0.86 }}
                   onMouseEnter={e => {
                     ;(e.currentTarget as HTMLElement).style.opacity = '1'
                     ;(e.currentTarget as HTMLElement).style.color = '#52b788'
                   }}
                   onMouseLeave={e => {
                     ;(e.currentTarget as HTMLElement).style.opacity = '0.86'
                     ;(e.currentTarget as HTMLElement).style.color = '#E2DACE'
                   }}>
                  {l.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Disclosure */}
        <div className="mt-10 pt-6 text-[12px] leading-[1.65]"
             style={{ borderTop: '1px solid #2a2824', color: '#9C948A' }}>
          <p className="mb-3">
            <strong style={{ color: '#E2DACE', fontWeight: 500 }}>Not medical advice.</strong>{' '}
            Fitlab content is for informational purposes only and reflects our reading of published
            research. Nothing on this site replaces a licensed physician, dietitian, or pharmacist.
            Talk to a qualified professional before starting, stopping, or combining any supplement.
          </p>
          <p className="mb-3">
            <strong style={{ color: '#E2DACE', fontWeight: 500 }}>US-market analysis.</strong>{' '}
            All lot tests and pricing reflect US-distributed products. Gray-market imports are
            outside what we can verify.
          </p>
          <p>
            <strong style={{ color: '#E2DACE', fontWeight: 500 }}>Affiliate disclosure.</strong>{' '}
            Some links are Amazon affiliate links. We earn a small commission if you buy —
            it doesn't change the scores, rankings, or what we say about anything.
          </p>
        </div>

        {/* Legal */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-6 pt-5 gap-3 text-[12px]"
             style={{ borderTop: '1px solid #2a2824', color: '#7A736B' }}>
          <div>© 2026 Fitlab Research · Independent · Made in California</div>
          <div className="flex gap-5">
            {[{label:'Privacy',href:'/privacy'},{label:'Terms',href:'/terms'},{label:'RSS',href:'#'}].map(l => (
              <a key={l.label} href={l.href} className="transition-colors"
                 style={{ color: '#9C948A' }}
                 onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#52b788')}
                 onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = '#9C948A')}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
