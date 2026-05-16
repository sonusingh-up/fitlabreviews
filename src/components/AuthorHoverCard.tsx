'use client'

interface Author {
  slug: string
  name: string
  initials: string
  role: string
  credentials: string
  linkedin?: string
  color: string
  bio: string
  specialties: string[]
  reviewCount: number
  joined: string
}

export default function AuthorHoverCard({ author: a }: { author: Author }) {
  return (
    <a
      href={`/authors#${a.slug}`}
      className="group bg-paper3 border border-rule rounded-[14px] p-6 flex items-start gap-4 transition-all duration-200 hover:-translate-y-1"
      onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 12px 32px rgba(27,67,50,.09)')}
      onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
    >
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-sans font-semibold text-[15px] shrink-0"
        style={{ background: a.color }}
      >
        {a.initials}
      </div>
      <div>
        <div className="font-sans font-semibold text-[15px] text-ink2 mb-0.5">{a.name}</div>
        <div className="text-[12px] text-muted mb-2">{a.role}</div>
        <div
          className="text-[11px] tracking-[0.08em] uppercase font-medium"
          style={{ color: a.color }}
        >
          {a.credentials}
        </div>
      </div>
    </a>
  )
}
