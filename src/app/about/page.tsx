import PageShell from '@/components/PageShell'
import JsonLd from '@/components/JsonLd'
import { authors } from '@/lib/data'
import AuthorHoverCard from '@/components/AuthorHoverCard'


const SITE_URL = "https://fitlabreviews.com"
const webPageSchema = {
  "@context": "https://schema.org",
  "@type":    "WebPage",
  name:       "About Fitlab Reviews",
  description: "Why we built Fitlab, who\'s behind it, and what we believe about the supplement industry.",
  url:        "https://fitlabreviews.com/about",
  publisher:  { "@type": "Organization", name: "Fitlab Reviews", url: "https://fitlabreviews.com" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fitlabreviews.com" },
      { "@type": "ListItem", position: 2, name: "About", item: "https://fitlabreviews.com/about" },
    ],
  },
}
export const metadata = {
  title: 'About — Fitlab Reviews',
  description: 'Why we built Fitlab, who\'s behind it, and what we actually believe about the supplement industry.',
  alternates: { canonical: 'https://fitlabreviews.com/about' },
}

const values = [
  {
    n: '01',
    title: 'The rubric comes before the review.',
    body: 'We wrote our scoring methodology before we evaluated a single product. Criteria first, then apply them — no reverse-engineering scores to match a desired outcome.',
  },
  {
    n: '02',
    title: 'Sponsored content is disclosed. Always.',
    body: 'When a brand works with us, it\'s labeled clearly. Sponsored or paid content never influences our independent rubric scores — those are editorially separate and governed by our conflicts policy.',
  },
  {
    n: '03',
    title: 'We cite the studies or we don\'t make the claim.',
    body: 'Every mechanism claim, dose recommendation, and evidence grade links to a published study or a Cochrane-level review. "Studies suggest" without a citation is something we try hard to eliminate.',
  },
  {
    n: '04',
    title: 'Non-responders are real. We say so.',
    body: 'Creatine doesn\'t work for roughly 30% of people. Most review sites skip this because it\'s bad for conversions. We include it because it\'s true.',
  },
]

export default function AboutPage() {
  return (
    <>
      <JsonLd schema={webPageSchema} />
      <PageShell crumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}>

      {/* Hero */}
      <section className="py-16 sm:py-20 lg:py-24 border-b border-rule">
        <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
          <div className="max-w-[760px]">
            <div className="skirt mb-4">About Fitlab</div>
            <h1
              className="font-sans font-semibold leading-[1.04] tracking-[-0.035em] text-ink2 mb-6"
              style={{ fontSize: 'clamp(36px, 4.8vw, 64px)' }}
            >
              Built because we were tired of{' '}
              <em className="hero-em">being misled.</em>
            </h1>
            <p className="text-[16px] sm:text-[18px] leading-[1.7] text-ink3 max-w-[620px]">
              The supplement industry spends more on marketing than formulation.
              Most review sites rank what they're paid to rank. We started Fitlab
              with one rule: publish the scoring methodology before the first review.
              Everything else follows from that.
            </p>
          </div>
        </div>
      </section>

      {/* Origin story */}
      <section className="py-16 sm:py-20 border-b border-rule">
        <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
          <div className="grid gap-12 md:grid-cols-[2fr_1fr] md:gap-20 items-start">
            <div>
              <div className="skirt mb-5">Origin</div>
              <div className="space-y-5 text-[15px] sm:text-[16px] leading-[1.75] text-ink3">
                <p>
                  Fitlab was founded by Pankaj Singh, a trained pharmacist who got tired of
                  seeing pharmacologically illiterate supplement claims go unchallenged on
                  popular review platforms. His background in pharmaceutical science — formulation,
                  bioavailability, drug-nutrient interactions — gave him a precise lens that most
                  fitness reviewers simply don't have.
                </p>
                <p>
                  The core problem with the supplement review ecosystem isn't that reviewers are
                  bad at reviewing. It's that the incentive structure makes honest reviewing
                  economically irrational. When revenue depends on affiliate commissions, and
                  commissions are higher on expensive products, rankings drift toward expensive
                  products regardless of quality.
                </p>
                <p>
                  Fitlab separates editorial scores from commercial relationships. Rubric scores
                  are independent. Sponsored content exists — and is clearly labeled — but it
                  never touches the scoring methodology. The rubric is public, versioned, and
                  applied identically to every product we evaluate.
                </p>
              </div>
            </div>

            {/* Stats column */}
            <div className="space-y-1">
              {[
                { n: '2024',  label: 'Founded' },
                { n: '614',   label: 'Products reviewed' },
                { n: 'Pharm.B', label: 'Founder credential' },
                { n: 'v3.1',  label: 'Current rubric version' },
                { n: '100%',  label: 'Scores publicly visible' },
              ].map(s => (
                <div key={s.label} className="flex items-baseline justify-between py-4 border-b border-rule">
                  <span className="text-[13px] text-muted">{s.label}</span>
                  <span className="font-serif-body text-[24px] text-clay">{s.n}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20 border-b border-rule bg-paper2">
        <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
          <div className="skirt mb-10">What we believe</div>
          <div className="grid gap-0 md:grid-cols-2">
            {values.map((v, i) => (
              <div
                key={i}
                className={[
                  'py-8 border-b border-rule md:px-8',
                  i % 2 === 0 ? 'md:pl-0 md:border-r' : '',
                  i >= values.length - 2 ? 'md:border-b-0' : '',
                ].join(' ')}
              >
                <span className="font-serif-body text-[20px] text-clay block mb-3">{v.n}</span>
                <h3 className="font-sans font-semibold text-[17px] tracking-[-0.015em] text-ink2 mb-3 leading-[1.3]">
                  {v.title}
                </h3>
                <p className="text-[14px] leading-[1.7] text-ink3">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team — uses client component for hover */}
      <section className="py-16 sm:py-20">
        <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <div className="skirt mb-3">The team</div>
              <h2
                className="font-sans font-semibold leading-[1.04] tracking-[-0.03em] text-ink2 mt-2"
                style={{ fontSize: 'clamp(28px, 3vw, 42px)' }}
              >
                People behind{' '}
                <em className="section-em">every review.</em>
              </h2>
            </div>
            <a
              href="/authors"
              className="text-[13px] font-medium text-clay border border-clay rounded-full px-4 py-2 hover:bg-clay hover:text-white transition-all duration-150 whitespace-nowrap"
            >
              Meet the team →
            </a>
          </div>

          {/* AuthorHoverCard is a client component */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 max-w-[760px]">
            {authors.map(a => (
              <AuthorHoverCard key={a.slug} author={a} />
            ))}
          </div>
        </div>
      </section>

    </PageShell>
    </>
  )
}
