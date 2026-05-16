'use client'

interface Product {
  slug: string
  brand: string
  name: string
  score: number
  price: number
  imgBg: string
}

export default function ProductHoverCard({ p }: { p: Product }) {
  return (
    <a
      href={`/reviews/${p.slug}`}
      className="group bg-paper3 border border-rule rounded-[14px] p-5 flex items-start gap-4 transition-all duration-200 hover:-translate-y-px"
      onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 10px 28px rgba(27,67,50,.09)')}
      onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
    >
      {/* Score bubble */}
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
        style={{ background: p.imgBg }}
      >
        <span className="font-serif-body text-[16px]" style={{ color: '#1b4332' }}>
          {p.score}
        </span>
      </div>
      <div className="min-w-0">
        <div className="text-[10px] tracking-[0.14em] uppercase text-muted font-medium mb-0.5">
          {p.brand}
        </div>
        <div className="font-sans font-semibold text-[14px] text-ink2 tracking-[-0.01em] leading-[1.3] group-hover:text-clay transition-colors">
          {p.name}
        </div>
        <div className="text-[12px] text-muted mt-0.5">${p.price}</div>
      </div>
    </a>
  )
}
