'use client'
import { useEffect, useRef, useState } from 'react'

const stats = [
  { n: 38,   unit: '',  label: 'Products reviewed & scored' },
  { n: 12,   unit: '',  label: 'Ingredients mapped to clinical evidence' },
  { n: 6,    unit: '',  label: 'In-depth research guides' },
  { n: 4800, unit: '+', label: 'Monthly readers' },
]

function StatCell({
  n, unit, label, delay,
}: {
  n: number; unit: string; label: string; delay: number
}) {
  const ref      = useRef<HTMLDivElement>(null)
  const [val, setVal]       = useState(0)
  const [started, setStarted] = useState(false)

  // Trigger on intersection
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); obs.disconnect() } },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  // Count up after start
  useEffect(() => {
    if (!started) return
    const duration  = 1400
    const startTime = performance.now()
    const isFloat   = n % 1 !== 0

    const tick = (now: number) => {
      const raw      = (now - startTime) / duration
      const progress = Math.min(raw, 1)
      const eased    = 1 - Math.pow(1 - progress, 3)
      const current  = eased * n
      setVal(isFloat ? parseFloat(current.toFixed(1)) : Math.round(current))
      if (progress < 1) requestAnimationFrame(tick)
    }
    const id = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(id)
  }, [started, n])

  const display = started ? val : 0

  return (
    <div ref={ref} className="py-8 px-5 sm:py-10 sm:px-7">
      <div
        className="font-sans font-medium leading-none tracking-[-0.03em] text-ink2 tabular-nums"
        style={{ fontSize: 'clamp(32px, 4vw, 44px)' }}
      >
        {display.toLocaleString('en-IN')}
        {unit && (
          <span
            className="font-serif-body text-clay ml-0.5"
            style={{ fontSize: 'clamp(18px, 2.4vw, 24px)' }}
          >
            {unit}
          </span>
        )}
      </div>
      <div className="mt-2.5 text-[12px] sm:text-[13px] text-muted leading-[1.55]">
        {label}
      </div>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="py-16">
      <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-b border-rule">
          {stats.map((s, i) => (
            <div
              key={i}
              className={[
                i % 2 === 0 ? 'border-r border-rule' : '',
                i < 2 ? 'border-b border-rule md:border-b-0' : '',
                i === stats.length - 1 ? 'md:border-r-0' : 'md:border-r md:border-rule',
              ].join(' ')}
            >
              <StatCell {...s} delay={i * 80} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
