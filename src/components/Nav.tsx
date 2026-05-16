'use client'
import { useState } from 'react'

const navLinks = [
  { label: 'Reviews',     href: '/reviews',     active: false },
  { label: 'Ingredients', href: '/ingredients', active: false },
  { label: 'Compare',     href: '/compare',     active: false },
  { label: 'Stacks',      href: '/stacks',          active: false },
  { label: 'Research',    href: '/research',        active: false },
  { label: 'About',       href: '/about',           active: false },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header
        className="sticky top-0 z-50 border-b border-rule"
        style={{
          background: 'rgba(242,237,226,0.82)',
          backdropFilter: 'saturate(140%) blur(12px)',
          WebkitBackdropFilter: 'saturate(140%) blur(12px)',
        }}
      >
        <div className="max-w-site mx-auto flex items-center gap-4 h-[72px] px-5 sm:px-8 lg:px-14">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 font-sans font-semibold text-[15px] tracking-[-0.005em] text-ink2 shrink-0">
            <span
              className="w-7 h-7 flex items-center justify-center text-white font-serif-body text-base shrink-0"
              style={{ background: '#1b4332', borderRadius: '8px' }}
            >
              f
            </span>
            <span>
              <strong>Fitlab</strong>
              <span className="text-clay font-bold mx-px" style={{ color: '#1b4332' }}>·</span>
              Reviews
            </span>
          </a>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex gap-6 ml-3">
            {navLinks.map(l => (
              <a
                key={l.label}
                href={l.href}
                className={`text-[14px] font-normal transition-all duration-150 py-1.5 relative whitespace-nowrap
                  ${l.active ? 'text-ink2 opacity-100' : 'text-ink opacity-80 hover:opacity-100 hover:text-ink2'}`}
              >
                {l.label}
                {l.active && <span className="absolute left-0 right-0 bottom-0 h-px bg-clay" />}
              </a>
            ))}
          </nav>

          {/* Right */}
          <div className="ml-auto flex items-center gap-2.5">
            {/* Search pill — desktop only */}
            <div className="hidden xl:flex items-center gap-2 bg-paper3 border border-rule rounded-full px-3.5 py-[7px] text-muted text-[13px] min-w-[200px] cursor-text transition-colors hover:border-ink2">
              <span className="text-base leading-none">⌕</span>
              <span>Search ingredients…</span>
              <span className="ml-auto border border-rule rounded-[6px] px-1.5 py-px text-[11px] text-muted bg-white">⌘K</span>
            </div>
            {/* Search icon — md-xl */}
            <div className="hidden md:flex xl:hidden w-9 h-9 items-center justify-center bg-paper3 border border-rule rounded-full cursor-pointer text-muted hover:border-ink2 transition-colors">
              <span className="text-base leading-none">⌕</span>
            </div>

            {/* CTA — sm+ */}
            <button className="hidden sm:inline-flex items-center rounded-full px-4 py-2 text-[13px] font-medium bg-ink2 text-white transition-all duration-150 hover:bg-black cursor-pointer whitespace-nowrap">
              Explore research
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(o => !o)}
              aria-label="Menu"
              aria-expanded={open}
              className="lg:hidden w-9 h-9 rounded-full border border-rule bg-paper3 flex flex-col items-center justify-center gap-[5px] cursor-pointer shrink-0"
            >
              <span className="block w-4 h-px bg-ink2 transition-transform duration-200 origin-center"
                    style={open ? { transform: 'translateY(6px) rotate(45deg)' } : {}} />
              <span className="block w-4 h-px bg-ink2 transition-opacity duration-200"
                    style={open ? { opacity: 0 } : {}} />
              <span className="block w-4 h-px bg-ink2 transition-transform duration-200 origin-center"
                    style={open ? { transform: 'translateY(-6px) rotate(-45deg)' } : {}} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-x-0 top-[72px] bottom-0 bg-paper z-40 overflow-y-auto border-t border-rule transition-all duration-200 lg:hidden
          ${open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
      >
        <div className="px-5 pt-6 pb-10">
          <div className="flex items-center gap-2.5 bg-white border border-rule rounded-full px-4 py-2.5 mb-[18px]">
            <span className="text-muted text-base">⌕</span>
            <input
              className="flex-1 min-w-0 border-0 outline-none bg-transparent text-[14px] text-ink2 placeholder:text-muted"
              placeholder="Search ingredients, brands, studies…"
            />
          </div>
          {navLinks.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
               className="block font-sans text-[22px] font-medium tracking-[-0.015em] text-ink2 py-4 border-b border-rule">
              {l.label}
            </a>
          ))}
          <button onClick={() => setOpen(false)}
                  className="mt-6 w-full flex items-center justify-center rounded-full py-3.5 text-[14px] font-medium bg-ink2 text-white cursor-pointer">
            Explore research →
          </button>
        </div>
      </div>
    </>
  )
}
