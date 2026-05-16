'use client'

interface CompareCardProps {
  slug: string
  brandA: string
  nameA: string
  scoreA: number
  brandB: string
  nameB: string
  scoreB: number
  winnerName: string
  winnerBrand: string
  verdictSummary: string
}

export default function CompareCard({
  slug, brandA, nameA, scoreA, brandB, nameB, scoreB,
  winnerName, winnerBrand, verdictSummary,
}: CompareCardProps) {
  return (
    <a
      href={`/compare/${slug}`}
      className="group bg-paper3 border border-rule rounded-[14px] p-5 sm:p-6 flex flex-col gap-4 transition-all duration-200 hover:-translate-y-px"
      onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 10px 28px rgba(27,67,50,.09)')}
      onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
    >
      {/* VS row */}
      <div className="flex items-center gap-3">
        <div className="flex-1 min-w-0">
          <div className="text-[10px] tracking-[0.12em] uppercase text-muted mb-0.5">{brandA}</div>
          <div className="font-medium text-[13px] text-ink2 truncate">
            {nameA.split(' ').slice(0, 3).join(' ')}
          </div>
          <div className="font-serif-body text-[18px] mt-0.5" style={{ color: '#1b4332' }}>{scoreA}</div>
        </div>
        <div className="text-[13px] font-serif-body text-muted shrink-0">vs</div>
        <div className="flex-1 min-w-0 text-right">
          <div className="text-[10px] tracking-[0.12em] uppercase text-muted mb-0.5">{brandB}</div>
          <div className="font-medium text-[13px] text-ink2 truncate">
            {nameB.split(' ').slice(0, 3).join(' ')}
          </div>
          <div className="font-serif-body text-[18px] mt-0.5" style={{ color: '#1b4332' }}>{scoreB}</div>
        </div>
      </div>

      <div className="border-t border-rule" />

      <div>
        <div className="text-[10px] tracking-[0.12em] uppercase text-clay font-medium mb-1">Winner</div>
        <div className="font-medium text-[13px] text-ink2">{winnerName}</div>
        <div className="text-[12px] text-muted mt-1 leading-[1.5] line-clamp-2">
          {verdictSummary.split('.')[0]}.
        </div>
      </div>

      <div className="text-[12px] text-clay font-medium group-hover:underline mt-auto">
        See full comparison →
      </div>
    </a>
  )
}
