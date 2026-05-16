import PageShell from '@/components/PageShell'
import JsonLd from '@/components/JsonLd'


const SITE_URL = "https://fitlabreviews.com"
const webPageSchema = {
  "@context": "https://schema.org",
  "@type":    "WebPage",
  name:       "Conflicts of Interest Policy — Fitlab Reviews",
  description: "How Fitlab handles affiliate revenue, sponsored content, and editorial independence.",
  url:        "https://fitlabreviews.com/conflicts-policy",
  publisher:  { "@type": "Organization", name: "Fitlab Reviews", url: "https://fitlabreviews.com" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fitlabreviews.com" },
      { "@type": "ListItem", position: 2, name: "Conflicts Policy", item: "https://fitlabreviews.com/conflicts-policy" },
    ],
  },
}
export const metadata = {
  title: 'Conflicts of Interest Policy — Fitlab Reviews',
  description: 'How Fitlab handles affiliate revenue, sponsored content, and editorial independence.',
  alternates: { canonical: 'https://fitlabreviews.com/conflicts-policy' },
}

export default function ConflictsPolicyPage() {
  return (
    <>
      <JsonLd schema={webPageSchema} />
      <PageShell crumbs={[{ label: 'Home', href: '/' }, { label: 'Conflicts Policy' }]}>

      {/* Header */}
      <section className="py-16 sm:py-20 border-b border-rule">
        <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
          <div className="max-w-[680px]">
            <div className="skirt mb-4">Conflicts of interest</div>
            <h1
              className="font-sans font-semibold leading-[1.04] tracking-[-0.035em] text-ink2 mb-5"
              style={{ fontSize: 'clamp(32px, 4.2vw, 54px)' }}
            >
              Our revenue model,{' '}
              <em className="hero-em">fully disclosed.</em>
            </h1>
            <p className="text-[15px] sm:text-[17px] leading-[1.7] text-ink3">
              We think the supplement review space is broken partly because sites hide
              how they make money. Here's exactly how we make money, what's editorial,
              what's commercial, and where the line is between them.
            </p>
          </div>
        </div>
      </section>

      {/* Revenue model */}
      <section className="py-14 sm:py-16 border-b border-rule">
        <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <div className="skirt mb-5">How we make money</div>
              <div className="space-y-5 text-[14px] sm:text-[15px] leading-[1.75] text-ink3">
                <p>
                  <strong className="text-ink2 font-semibold">Affiliate commissions.</strong>{' '}
                  When you click a product link and purchase through Amazon or another
                  retailer, we earn a commission — typically 3–8% depending on category.
                  Affiliate links are disclosed on every page that contains them.
                </p>
                <p>
                  <strong className="text-ink2 font-semibold">Sponsored content.</strong>{' '}
                  Fitlab does accept sponsored content from brands. Sponsored posts are
                  clearly labeled <span className="font-semibold text-ink2">"Sponsored"</span> or{' '}
                  <span className="font-semibold text-ink2">"Paid partnership"</span> at the top
                  of the page — never buried in a footnote. Sponsored content is commercial
                  writing, not editorial review.
                </p>
                <p>
                  <strong className="text-ink2 font-semibold">No pay-to-rank.</strong>{' '}
                  Sponsored content and affiliate commissions never influence rubric scores
                  or where a product ranks in our independent reviews. A brand can pay
                  for a sponsored post and still score 4.2 on our rubric. Both will be live
                  on the site simultaneously, clearly labeled differently.
                </p>
              </div>
            </div>

            {/* Revenue breakdown */}
            <div>
              <div className="skirt mb-5">Revenue sources (approximate)</div>
              {[
                { label: 'Amazon Associates',     pct: 65, color: '#1b4332' },
                { label: 'Other retail affiliate', pct: 20, color: '#52b788' },
                { label: 'Sponsored content',      pct: 12, color: '#74c69d' },
                { label: 'Direct support',         pct: 3,  color: '#D3CCBE' },
              ].map((r, i) => (
                <div key={i} className="mb-4">
                  <div className="flex justify-between text-[13px] mb-1.5">
                    <span className="text-ink3">{r.label}</span>
                    <span className="font-medium text-ink2">{r.pct}%</span>
                  </div>
                  <div className="h-2 bg-paper2 rounded-full overflow-hidden border border-rule">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${r.pct}%`, background: r.color }}
                    />
                  </div>
                </div>
              ))}
              <p className="text-[12px] text-muted mt-4 leading-[1.6]">
                Approximate figures, updated annually.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The wall between editorial and commercial */}
      <section className="py-14 sm:py-16 bg-paper2 border-b border-rule">
        <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
          <div className="skirt mb-8">The editorial / commercial separation</div>
          <div className="grid gap-6 sm:grid-cols-2 max-w-[860px]">

            {/* Editorial side */}
            <div className="bg-clay/8 border border-clay/25 rounded-[14px] p-6">
              <div
                className="text-[11px] font-semibold tracking-[0.16em] uppercase mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1.5"
                style={{ background: '#1b4332', color: '#fff' }}
              >
                Editorial
              </div>
              <ul className="space-y-3 list-none p-0 m-0">
                {[
                  'Rubric scores (Clinical dose, Form, Purity, Value, Label honesty)',
                  'Product rankings and best-of lists',
                  'Ingredient evidence summaries',
                  'Review verdicts and star scores',
                  'Dose recommendations',
                ].map((item, i) => (
                  <li key={i} className="flex gap-2.5 text-[13px] text-ink3 leading-[1.55]">
                    <span className="text-clay font-bold shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[12px] text-muted mt-4 leading-[1.6]">
                These are governed by the scoring rubric only. No brand payment
                affects any item in this column.
              </p>
            </div>

            {/* Commercial side */}
            <div className="bg-paper3 border border-rule rounded-[14px] p-6">
              <div
                className="text-[11px] font-semibold tracking-[0.16em] uppercase mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1.5 bg-ink2 text-white"
              >
                Commercial
              </div>
              <ul className="space-y-3 list-none p-0 m-0">
                {[
                  'Sponsored posts (always labeled "Sponsored")',
                  'Paid brand spotlights (always labeled "Paid partnership")',
                  'Affiliate product links',
                  'Newsletter sponsorships (always labeled "Sponsor")',
                ].map((item, i) => (
                  <li key={i} className="flex gap-2.5 text-[13px] text-ink3 leading-[1.55]">
                    <span className="text-ink2 font-bold shrink-0">$</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[12px] text-muted mt-4 leading-[1.6]">
                These are commercial arrangements. Clearly labeled. Never mixed
                with editorial scoring content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hard rules */}
      <section className="py-14 sm:py-16 border-b border-rule">
        <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
          <div className="max-w-[720px]">
            <div className="skirt mb-6">Hard rules — no exceptions</div>
            <div className="space-y-0">
              {[
                {
                  rule: 'Sponsored content is always labeled before the headline.',
                  detail: 'The word "Sponsored" or "Paid partnership" appears at the very top of the page — before the title, before any content. It is never in a footnote, never in grey text at the bottom.',
                },
                {
                  rule: 'Affiliate commission rates never affect rubric placement.',
                  detail: 'A product with a 10% commission and a 7.2 rubric score ranks below a product with 2% commission and 8.5. Always. No editorial override exists for this.',
                },
                {
                  rule: 'Brands cannot change rubric scores.',
                  detail: 'Brands cannot preview, comment on, or request changes to editorial review scores before or after publication. Rubric scores change only when product formulas change or new evidence emerges.',
                },
                {
                  rule: 'Sponsored content is not editorial review.',
                  detail: 'A sponsored post about a product is a commercial arrangement. It lives in a separate section of the site, has a different URL structure, and is never indexed alongside independent reviews of the same product.',
                },
                {
                  rule: 'Score changes from formula updates are always disclosed.',
                  detail: 'When a product is reformulated and its score changes, we publish a version note explaining what changed, what the previous score was, and why.',
                },
              ].map((item, i) => (
                <div key={i} className={`py-6 ${i < 4 ? 'border-b border-rule' : ''}`}>
                  <h3 className="font-sans font-semibold text-[15px] text-ink2 mb-2 flex items-start gap-2.5">
                    <span className="text-clay mt-0.5">✓</span>
                    {item.rule}
                  </h3>
                  <p className="text-[13.5px] text-ink3 leading-[1.7] pl-5 m-0">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sponsored content enquiries */}
      <section className="py-14 sm:py-16 border-b border-rule bg-paper2">
        <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
          <div className="max-w-[640px]">
            <div className="skirt mb-4">Work with us</div>
            <h2
              className="font-sans font-semibold tracking-[-0.025em] text-ink2 mb-4 leading-[1.15]"
              style={{ fontSize: 'clamp(22px, 2.5vw, 32px)' }}
            >
              Interested in a sponsored placement or brand partnership?
            </h2>
            <p className="text-[14px] text-ink3 leading-[1.75] mb-6">
              We work with brands whose products are genuinely competitive on the evidence.
              We don't guarantee positive editorial coverage as part of any commercial
              arrangement — but we do offer clearly labeled sponsored content, newsletter
              sponsorships, and ingredient spotlights. All clearly disclosed, always separate
              from our rubric scoring.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full px-[22px] py-[13px] text-[14px] font-medium bg-clay text-white transition-all duration-150 hover:bg-clayd"
            >
              Get in touch →
            </a>
          </div>
        </div>
      </section>

      {/* FTC */}
      <section className="py-14 sm:py-16">
        <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
          <div className="max-w-[640px]">
            <div className="skirt mb-5">FTC compliance & legal</div>
            <div className="space-y-4 text-[14px] sm:text-[15px] leading-[1.75] text-ink3">
              <p>
                In accordance with FTC guidelines, all affiliate links and sponsored content
                on Fitlab are clearly disclosed on every page that contains them.
              </p>
              <p>
                We participate in the Amazon Associates Program and various other affiliate
                networks. Participation is disclosed in our footer on every page.
              </p>
              <p>
                Questions about a specific content relationship? Contact us at{' '}
                <a
                  href="mailto:editorial@fitlabreviews.com"
                  className="text-clay border-b border-clay/30 hover:border-clay transition-colors"
                >
                  editorial@fitlabreviews.com
                </a>
                . We respond to all editorial integrity inquiries within 5 business days.
              </p>
            </div>
          </div>
        </div>
      </section>

    </PageShell>
    </>
  )
}
