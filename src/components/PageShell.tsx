import Nav from '@/components/Nav'
import { Newsletter, Footer } from '@/components/FooterSections'

interface Crumb { label: string; href?: string }

export default function PageShell({
  children,
  crumbs,
  showNewsletter = true,
}: {
  children: React.ReactNode
  crumbs?: Crumb[]
  showNewsletter?: boolean
}) {
  return (
    <>
      <Nav />
      {crumbs && crumbs.length > 0 && (
        <div className="border-b border-rule">
          <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14 py-3.5 flex items-center gap-2 text-[12px] text-muted">
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span className="opacity-40">·</span>}
                {c.href
                  ? <a href={c.href} className="hover:text-clay transition-colors">{c.label}</a>
                  : <span className="text-ink3 font-medium">{c.label}</span>}
              </span>
            ))}
          </div>
        </div>
      )}
      <main>{children}</main>
      {showNewsletter && <Newsletter />}
      <Footer />
    </>
  )
}
