'use client'

interface CompareRow {
  label: string
  a: string
  b: string
  winner?: 'a' | 'b' | 'tie'
}

export default function CompareTable({
  rows,
  labelA,
  labelB,
}: {
  rows: CompareRow[]
  labelA: string
  labelB: string
}) {
  return (
    <div className="min-w-[480px]">
      {/* Header */}
      <div
        className="grid pb-3 border-b-2 border-ink2"
        style={{ gridTemplateColumns: '1fr 1fr 1fr' }}
      >
        <div className="text-[11px] tracking-[0.14em] uppercase text-muted font-medium">
          Criteria
        </div>
        <div className="text-[12px] font-semibold text-ink2 text-center px-2 truncate">
          {labelA.split(' ').slice(0, 3).join(' ')}
        </div>
        <div className="text-[12px] font-semibold text-ink2 text-center px-2 truncate">
          {labelB.split(' ').slice(0, 2).join(' ')}
        </div>
      </div>

      {/* Rows */}
      {rows.map((row, i) => (
        <div
          key={i}
          className="grid py-3.5 border-b border-rule last:border-b-0 items-center"
          style={{ gridTemplateColumns: '1fr 1fr 1fr' }}
        >
          {/* Label */}
          <span className="text-[12px] sm:text-[13px] text-muted pr-3">
            {row.label}
          </span>

          {/* Value A */}
          <div
            className={`text-center px-2 py-1.5 rounded-[8px] mx-1 transition-colors ${
              row.winner === 'a'
                ? 'bg-clay/10 text-clay font-semibold'
                : row.winner === 'tie'
                ? 'text-ink3'
                : 'text-ink3'
            }`}
          >
            <span className="text-[12px] sm:text-[13px]">{row.a}</span>
            {row.winner === 'a' && (
              <span className="ml-1.5 text-[10px] text-clay">✓</span>
            )}
          </div>

          {/* Value B */}
          <div
            className={`text-center px-2 py-1.5 rounded-[8px] mx-1 transition-colors ${
              row.winner === 'b'
                ? 'bg-clay/10 text-clay font-semibold'
                : row.winner === 'tie'
                ? 'text-ink3'
                : 'text-ink3'
            }`}
          >
            <span className="text-[12px] sm:text-[13px]">{row.b}</span>
            {row.winner === 'b' && (
              <span className="ml-1.5 text-[10px] text-clay">✓</span>
            )}
          </div>
        </div>
      ))}

      {/* Win count footer */}
      {(() => {
        const winsA = rows.filter(r => r.winner === 'a').length
        const winsB = rows.filter(r => r.winner === 'b').length
        const ties  = rows.filter(r => r.winner === 'tie').length
        return (
          <div
            className="grid pt-4 mt-1 border-t-2 border-ink2"
            style={{ gridTemplateColumns: '1fr 1fr 1fr' }}
          >
            <div className="text-[11px] tracking-[0.14em] uppercase text-muted font-medium">
              Wins
            </div>
            <div className="text-center">
              <span
                className="font-serif-body text-[20px]"
                style={{ color: winsA > winsB ? '#1b4332' : '#7A736B' }}
              >
                {winsA}
              </span>
              <span className="text-[10px] text-muted ml-1">/ {rows.length}</span>
            </div>
            <div className="text-center">
              <span
                className="font-serif-body text-[20px]"
                style={{ color: winsB > winsA ? '#1b4332' : '#7A736B' }}
              >
                {winsB}
              </span>
              <span className="text-[10px] text-muted ml-1">/ {rows.length}</span>
            </div>
          </div>
        )
      })()}
    </div>
  )
}
