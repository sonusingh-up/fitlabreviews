import PageShell from '@/components/PageShell'
import JsonLd from '@/components/JsonLd'
import { authors } from '@/lib/data'


const SITE_URL = "https://fitlabreviews.com"
const webPageSchema = {
  "@context": "https://schema.org",
  "@type":    "WebPage",
  name:       "Authors — Fitlab Reviews",
  description: "The researchers and professionals behind every Fitlab review.",
  url:        "https://fitlabreviews.com/authors",
  publisher:  { "@type": "Organization", name: "Fitlab Reviews", url: "https://fitlabreviews.com" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fitlabreviews.com" },
      { "@type": "ListItem", position: 2, name: "Authors", item: "https://fitlabreviews.com/authors" },
    ],
  },
}
export const metadata = {
  title: 'Authors — Fitlab Reviews',
  description: 'The people behind every Fitlab review.',
  alternates: { canonical: 'https://fitlabreviews.com/authors' },
}

export default function AuthorsPage() {
  return (
    <>
      <JsonLd schema={webPageSchema} />
      <PageShell crumbs={[{ label: 'Home', href: '/' }, { label: 'Authors' }]}>

      {/* Header */}
      <section className="py-16 sm:py-20 border-b border-rule">
        <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
          <div className="max-w-[640px]">
            <div className="skirt mb-4">Our team</div>
            <h1
              className="font-sans font-semibold leading-[1.04] tracking-[-0.035em] text-ink2 mb-5"
              style={{ fontSize: 'clamp(34px, 4.5vw, 58px)' }}
            >
              Written by people who{' '}
              <em className="hero-em">know the science.</em>
            </h1>
            <p className="text-[15px] sm:text-[17px] leading-[1.7] text-ink3">
              Every review on Fitlab is written or reviewed by someone with
              relevant professional or academic credentials. Name on the byline
              means they wrote it and stand behind it.
            </p>
          </div>
        </div>
      </section>

      {/* Author cards */}
      <section className="py-16 sm:py-20">
        <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
          <div className="space-y-6 max-w-[840px]">
            {authors.map(a => (
              <div
                key={a.slug}
                id={a.slug}
                className="bg-paper3 border border-rule rounded-[14px] overflow-hidden"
              >
                <div className="p-6 sm:p-8 grid gap-6 sm:grid-cols-[auto_1fr] items-start">

                  {/* Avatar */}
                  <div
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-white font-sans font-semibold text-[20px] sm:text-[24px] shrink-0"
                    style={{ background: a.color }}
                  >
                    {a.initials}
                  </div>

                  {/* Info */}
                  <div>
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h2 className="font-sans font-semibold text-[20px] sm:text-[22px] tracking-[-0.02em] text-ink2">
                          {a.name}
                        </h2>
                        <div className="text-[13px] text-muted mt-0.5">{a.role}</div>
                      </div>
                      <div className="flex flex-wrap gap-2 items-center">
                        <span
                          className="text-[11px] font-medium tracking-[0.08em] uppercase rounded-full px-3 py-1.5 border"
                          style={{ background: `${a.color}12`, color: a.color, borderColor: `${a.color}30` }}
                        >
                          {a.credentials}
                        </span>
                        {a.linkedin && (
                          <a
                            href={a.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] font-medium tracking-[0.06em] uppercase rounded-full px-3 py-1.5 border border-rule bg-white text-muted hover:text-ink2 hover:border-ink2 transition-colors"
                          >
                            LinkedIn ↗
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-[14px] sm:text-[15px] leading-[1.7] text-ink3 mb-5">
                      {a.bio}
                    </p>

                    {/* Meta row */}
                    <div className="flex flex-wrap gap-x-8 gap-y-3 pt-5 border-t border-rule">
                      <div>
                        <div className="text-[11px] text-muted tracking-[0.08em] uppercase mb-1">Joined</div>
                        <div className="font-serif-body text-[22px] text-clay">{a.joined}</div>
                      </div>
                      <div>
                        <div className="text-[11px] text-muted tracking-[0.08em] uppercase mb-2">Specialties</div>
                        <div className="flex flex-wrap gap-1.5">
                          {a.specialties.map(s => (
                            <span
                              key={s}
                              className="text-[11px] bg-paper border border-rule rounded-full px-2.5 py-1 text-ink3"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Write for us */}
      <section className="py-14 bg-paper2 border-t border-rule">
        <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
          <div className="max-w-[600px]">
            <div className="skirt mb-3">Join the team</div>
            <h3
              className="font-sans font-semibold tracking-[-0.025em] text-ink2 mb-4 leading-[1.15]"
              style={{ fontSize: 'clamp(22px, 2.5vw, 32px)' }}
            >
              We review applications from professionals with relevant credentials and a genuine interest in evidence-based nutrition.
            </h3>
            <p className="text-[14px] text-ink3 leading-[1.7] mb-6">
              If you have a pharmacy, nutrition, or exercise science background and want to
              write content that doesn't compromise on accuracy — reach out.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full px-[22px] py-[13px] text-[14px] font-medium bg-clay text-white transition-all duration-150 hover:bg-clayd cursor-pointer"
            >
              Get in touch →
            </a>
          </div>
        </div>
      </section>

    </PageShell>
    </>
  )
}
