'use client'
import { useEffect, useRef } from 'react'

export default function Hero() {
  return (
    <section className="py-12 sm:py-16 md:py-20 overflow-hidden relative">
      <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
        <div className="grid gap-10 items-center md:grid-cols-[1.1fr_0.9fr]">

          {/* Left — copy */}
          <div>
            {/* Eyebrow badge */}
            <div className="reveal reveal-d1 inline-flex items-center gap-2 bg-clay/10 border border-clay/20 rounded-full px-3.5 py-1.5 mb-6">
              <span className="live-dot" />
              <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-clay">
                614 products · updated weekly
              </span>
            </div>

            <h1
              className="reveal reveal-d2 font-sans font-semibold leading-[1.04] tracking-[-0.035em] text-ink2 mb-6"
              style={{ fontSize: 'clamp(36px, 5.4vw, 76px)' }}
            >
              Most supplements<br />
              don't work.<br />
              <em className="hero-em">These ones do.</em>
            </h1>

            <p className="reveal reveal-d3 text-[15px] sm:text-[17px] leading-[1.65] text-ink3 mb-8 max-w-[520px]">
              We read the studies. We check the doses. We ignore the influencers.
              Every review is graded against a public rubric — so you know exactly
              why something ranked where it did.
            </p>

            <div className="reveal reveal-d4 flex gap-3 flex-wrap mb-6">
              <a href="/reviews" className="inline-flex items-center gap-2 rounded-full px-[22px] py-[13px] text-[14px] font-medium bg-clay text-white border border-transparent transition-all duration-200 hover:bg-clayd hover:-translate-y-px">
                See what we trust →
              </a>
              <a href="/methodology" className="inline-flex items-center gap-2 rounded-full px-[22px] py-[13px] text-[14px] font-medium bg-paper3 text-ink2 border border-rule transition-all duration-150 hover:border-ink2 hover:bg-white">
                How we score
              </a>
            </div>

            <div className="reveal reveal-d5 flex items-center gap-2.5 text-[13px] text-muted">
              <span className="live-dot shrink-0" />
              Zero brand deals. Zero sponsored slots. Methodology is open-source.
            </div>
          </div>

          {/* Right — animated art */}
          <div
            className="relative w-full max-w-[480px] mx-auto md:max-w-[560px] md:justify-self-end"
            aria-hidden="true"
          >
            <div className="relative w-full" style={{ paddingBottom: '85%' }}>

              {/* Blob — drifts slowly */}
              <div
                className="absolute inset-0"
                style={{ opacity: 0.9, animation: 'blobDrift 14s ease-in-out infinite' }}
              >
                <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg"
                     className="w-full h-full" style={{ filter: 'blur(2px)' }}>
                  <defs>
                    <radialGradient id="g1" cx="35%" cy="48%" r="55%">
                      <stop offset="0%" stopColor="#A8D5BA" stopOpacity=".85" />
                      <stop offset="100%" stopColor="#A8D5BA" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="g2" cx="62%" cy="38%" r="55%">
                      <stop offset="0%" stopColor="#E8CC81" stopOpacity=".75" />
                      <stop offset="100%" stopColor="#E8CC81" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="g3" cx="58%" cy="72%" r="55%">
                      <stop offset="0%" stopColor="#74C69D" stopOpacity=".65" />
                      <stop offset="100%" stopColor="#74C69D" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="g4" cx="42%" cy="56%" r="36%">
                      <stop offset="0%" stopColor="#52B788" stopOpacity=".50" />
                      <stop offset="100%" stopColor="#52B788" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <ellipse cx="290" cy="320" rx="240" ry="225" fill="url(#g1)" />
                  <ellipse cx="360" cy="280" rx="190" ry="200" fill="url(#g2)" />
                  <ellipse cx="320" cy="380" rx="220" ry="180" fill="url(#g3)" />
                  <ellipse cx="290" cy="320" rx="120" ry="100" fill="url(#g4)" />
                </svg>
              </div>

              {/* Float card 1 — bobs at its own speed */}
              <FloatCard
                className="card-enter card-enter-d1"
                style={{
                  top: '4%', left: '4%',
                  animation: 'fadeUp 0.7s cubic-bezier(.22,.7,.2,1) 0.55s forwards, bob 5s ease-in-out 1.5s infinite',
                  opacity: 0,
                }}
              >
                <div className="skirt mb-1.5" style={{ color: '#2d6a4f' }}>Creatine · ON</div>
                <div className="font-sans font-medium text-ink2 text-[14px] sm:text-[15.5px] tracking-[-0.005em]">
                  3.0 — 5.0g <span className="text-muted font-normal">/ day</span>
                </div>
              </FloatCard>

              {/* Float card 2 — bobs slower */}
              <FloatCard
                style={{
                  top: '40%', right: '2%',
                  animation: 'fadeUp 0.7s cubic-bezier(.22,.7,.2,1) 0.72s forwards, bobSlow 6.5s ease-in-out 2s infinite',
                  opacity: 0,
                }}
              >
                <div className="skirt mb-1.5" style={{ color: '#2d6a4f' }}>Score</div>
                <div className="font-serif-display text-ink2 text-[20px] sm:text-[24px] tracking-[-0.02em]">
                  8.4 <span className="text-muted text-[13px]">/ 10</span>
                </div>
              </FloatCard>

              {/* Float card 3 — bobs offset */}
              <FloatCard
                style={{
                  bottom: '4%', left: '8%',
                  animation: 'fadeUp 0.7s cubic-bezier(.22,.7,.2,1) 0.90s forwards, bobSlow 7s ease-in-out 1s infinite',
                  opacity: 0,
                }}
              >
                <div className="skirt mb-1.5" style={{ color: '#2d6a4f' }}>Evidence</div>
                <div className="font-sans font-medium text-ink2 text-[14px] sm:text-[15.5px] tracking-[-0.005em]">
                  142 <span className="text-muted font-normal">studies reviewed</span>
                </div>
              </FloatCard>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FloatCard({
  children, style, className = '',
}: {
  children: React.ReactNode
  style?: React.CSSProperties
  className?: string
}) {
  return (
    <div
      className={`absolute bg-white border border-rule rounded-[14px] ${className}`}
      style={{
        padding: '11px 15px',
        boxShadow: '0 10px 32px rgba(27,67,50,.10)',
        minWidth: '120px',
        maxWidth: '48%',
        ...style,
      }}
    >
      {children}
    </div>
  )
}
