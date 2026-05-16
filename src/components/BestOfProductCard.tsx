'use client'

interface Product {
  slug: string
  brand: string
  name: string
  variant?: string
  score: number
  price: number
  priceWas?: number
  imgBg: string
  tags: string[]
  verdict: string
  pros: string[]
  cons: string[]
  certifications?: string[]
}

export default function BestOfProductCard({
  product: p,
  rank,
  isTopPick,
}: {
  product: Product
  rank: number
  isTopPick: boolean
}) {
  return (
    <div
      className={`rounded-[14px] border overflow-hidden transition-all duration-200 ${
        isTopPick ? 'border-clay/40 bg-clay/5' : 'border-rule bg-paper3'
      }`}
      onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 12px 36px rgba(27,67,50,.09)')}
      onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
    >
      <div className="p-5 sm:p-6">
        <div className="grid gap-4 sm:grid-cols-[auto_1fr] sm:gap-6 items-start">

          {/* Rank + score block */}
          <div className="flex sm:flex-col items-center sm:items-center gap-4 sm:gap-2 shrink-0">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center border-2"
              style={{
                borderColor: isTopPick ? '#1b4332' : '#D3CCBE',
                background: isTopPick ? '#1b433212' : 'transparent',
              }}
            >
              <span
                className="font-serif-body text-[16px]"
                style={{ color: isTopPick ? '#1b4332' : '#7A736B' }}
              >
                {rank}
              </span>
            </div>
            <div className="text-center">
              <div
                className="font-serif-body text-[26px] leading-none"
                style={{ color: '#1b4332' }}
              >
                {p.score}
              </div>
              <div className="text-[10px] text-muted tracking-[0.08em]">/ 10</div>
            </div>
          </div>

          {/* Content */}
          <div className="min-w-0">
            {/* Header row */}
            <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
              <div>
                {isTopPick && (
                  <span
                    className="inline-block text-[10px] font-semibold tracking-[0.14em] uppercase text-white bg-clay rounded-full px-2.5 py-1 mb-2"
                  >
                    Top pick
                  </span>
                )}
                <div className="text-[10px] tracking-[0.16em] uppercase text-muted font-medium mb-0.5">
                  {p.brand}
                </div>
                <h3 className="font-sans font-semibold text-[17px] sm:text-[19px] tracking-[-0.015em] text-ink2 leading-[1.2]">
                  {p.name}
                  {p.variant && (
                    <em
                      className="font-serif-body ml-1.5 not-italic"
                      style={{ fontStyle: 'italic', color: '#3A3733', fontWeight: 300 }}
                    >
                      {p.variant}
                    </em>
                  )}
                </h3>
              </div>

              {/* Price + CTA */}
              <div className="flex items-center gap-3 shrink-0 flex-wrap sm:flex-nowrap">
                <div className="text-right">
                  <div className="font-semibold text-[16px] text-ink2">${p.price}</div>
                  {p.priceWas && (
                    <s className="text-[12px] text-muted">${p.priceWas}</s>
                  )}
                </div>
                <a
                  href={`https://www.amazon.in/s?k=${encodeURIComponent(p.name + " " + (p.brand || ""))}`}
                  target="_blank"
                  rel="nofollow sponsored"
                  className="text-[12px] sm:text-[13px] font-medium text-white bg-clay rounded-full px-4 py-2 hover:bg-clayd transition-colors whitespace-nowrap"
                >
                  Buy →
                </a>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-3">
              {p.tags.map(t => (
                <span
                  key={t}
                  className="text-[11px] text-ink3 bg-paper border border-rule rounded-full px-2.5 py-0.5"
                >
                  {t}
                </span>
              ))}
              {p.certifications && p.certifications.map(c => (
                <span
                  key={c}
                  className="text-[11px] font-medium rounded-full px-2.5 py-0.5 border"
                  style={{ background: '#1b433212', color: '#1b4332', borderColor: '#1b433230' }}
                >
                  ✓ {c}
                </span>
              ))}
            </div>

            {/* Verdict */}
            <p className="text-[13.5px] sm:text-[14px] text-ink3 leading-[1.65] mb-4">
              {p.verdict}
            </p>

            {/* Pros / cons inline */}
            <div className="grid gap-4 sm:grid-cols-2 pt-4 border-t border-rule">
              <ul className="space-y-1.5 list-none p-0 m-0">
                {p.pros.slice(0, 2).map((pro, i) => (
                  <li key={i} className="flex gap-2 text-[12.5px] text-ink3 leading-[1.5]">
                    <span className="text-clay font-bold shrink-0">+</span>
                    {pro}
                  </li>
                ))}
              </ul>
              <ul className="space-y-1.5 list-none p-0 m-0">
                {p.cons.slice(0, 2).map((con, i) => (
                  <li key={i} className="flex gap-2 text-[12.5px] text-ink3 leading-[1.5]">
                    <span className="text-muted font-bold shrink-0">–</span>
                    {con}
                  </li>
                ))}
              </ul>
            </div>

            {/* Read review link */}
            <div className="mt-4 pt-3">
              <a
                href={`/reviews/${p.slug}`}
                className="text-[12.5px] font-medium text-clay hover:underline transition-colors"
              >
                Read full review →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
