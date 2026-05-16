import PageShell from '@/components/PageShell'
import JsonLd from '@/components/JsonLd'

const SITE_URL = 'https://fitlabreviews.com'

export const metadata = {
  title: 'Research Hub',
  description: 'Long-form research guides on supplements, ingredients, and training nutrition — written for the Indian market by a pharmacist.',
  alternates: { canonical: `${SITE_URL}/research` },
}

// Guides — will be replaced with MDX content later
const guides = [
  {
    slug: 'creatine-complete-guide',
    category: 'Performance',
    title: 'The complete guide to creatine for Indian athletes',
    excerpt: 'Everything the research actually says — loading protocols, non-responders, which source to buy in India, and why most creatine marketing is noise.',
    readTime: '12 min',
    published: 'May 2026',
    live: false,
  },
  {
    slug: 'whey-protein-india-guide',
    category: 'Protein',
    title: 'Whey protein in India: what to buy, what to avoid, and how to spot label fraud',
    excerpt: 'A pharmacist\'s breakdown of amino acid spiking, label accuracy testing, and which Indian brands have a clean record.',
    readTime: '15 min',
    published: 'May 2026',
    live: false,
  },
  {
    slug: 'pre-workout-doses-explained',
    category: 'Pre-Workout',
    title: 'Why most Indian pre-workouts are underdosed — and what to do about it',
    excerpt: 'Clinical dose thresholds for every major pre-workout ingredient. How to read a label and identify which products are actually worth buying.',
    readTime: '10 min',
    published: 'May 2026',
    live: false,
  },
  {
    slug: 'supplement-timing-evidence',
    category: 'Fundamentals',
    title: 'Supplement timing: what the evidence actually says',
    excerpt: 'Pre-workout, post-workout, morning, evening — the timing debate resolved by the research, not by gym mythology.',
    readTime: '8 min',
    published: 'Coming soon',
    live: false,
  },
  {
    slug: 'indian-supplement-adulteration',
    category: 'Consumer safety',
    title: 'The adulteration problem in Indian supplements — and how to protect yourself',
    excerpt: 'Amino acid spiking, heavy metal contamination, mislabeled doses. What has been found in Indian market testing and how to buy safely.',
    readTime: '14 min',
    published: 'Coming soon',
    live: false,
  },
  {
    slug: 'evidence-grading-explained',
    category: 'Methodology',
    title: 'How we grade evidence: a plain-English explanation of RCTs, meta-analyses, and why it matters',
    excerpt: 'The difference between a study and evidence. Why "studies show" is often meaningless. How to read a supplement claim critically.',
    readTime: '9 min',
    published: 'Coming soon',
    live: false,
  },
]

const categoryColors: Record<string, string> = {
  'Performance':      '#1b4332',
  'Protein':          '#2d6a4f',
  'Pre-Workout':      '#40916c',
  'Fundamentals':     '#52b788',
  'Consumer safety':  '#B95C3A',
  'Methodology':      '#7A736B',
}

export default function ResearchHub() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Research Hub — Fitlab Reviews',
    url: `${SITE_URL}/research`,
    publisher: { '@type': 'Organization', name: 'Fitlab Reviews', url: SITE_URL },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type':    'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',    item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Research', item: `${SITE_URL}/research` },
    ],
  }

  return (
    <>
      <JsonLd schema={[schema, breadcrumbSchema]} />
      <PageShell crumbs={[{ label: 'Home', href: '/' }, { label: 'Research' }]}>

        {/* Header */}
        <section className="py-14 sm:py-18 border-b border-rule">
          <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
            <div className="max-w-[640px]">
              <div className="skirt mb-4">Research hub · {guides.length} guides</div>
              <h1
                className="font-sans font-semibold leading-[1.04] tracking-[-0.035em] text-ink2 mb-4"
                style={{ fontSize: 'clamp(32px, 4.5vw, 56px)' }}
              >
                Long answers to the questions<br />
                <em className="hero-em">you actually Google at 11pm.</em>
              </h1>
              <p className="text-[15px] sm:text-[17px] leading-[1.7] text-ink3">
                Evidence-weighted, dose-specific, and written for what is actually sold
                in India. No affiliate filler. No "consult your doctor" cop-outs.
              </p>
            </div>
          </div>
        </section>

        {/* Guides list */}
        <section className="py-14 sm:py-16">
          <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
            <div className="max-w-[760px] space-y-0">
              {guides.map((g, i) => (
                <div
                  key={i}
                  className={`py-7 ${i < guides.length - 1 ? 'border-b border-rule' : ''} ${!g.live ? 'opacity-70' : ''}`}
                >
                  <div className="flex flex-wrap items-center gap-2.5 mb-3">
                    <span
                      className="text-[10px] font-semibold tracking-[0.14em] uppercase rounded-full px-2.5 py-1"
                      style={{ background: `${categoryColors[g.category]}18`, color: categoryColors[g.category] }}
                    >
                      {g.category}
                    </span>
                    <span className="text-[12px] text-muted">{g.readTime} read</span>
                    <span className="text-muted opacity-40">·</span>
                    <span className="text-[12px] text-muted">{g.published}</span>
                    {!g.live && (
                      <span className="text-[10px] font-medium tracking-[0.1em] uppercase bg-paper2 border border-rule text-muted rounded-full px-2 py-0.5">
                        Coming soon
                      </span>
                    )}
                  </div>

                  {g.live ? (
                    <a href={`/research/${g.slug}`} className="group">
                      <h2 className="font-sans font-semibold text-[17px] sm:text-[19px] tracking-[-0.015em] text-ink2 mb-2 leading-[1.3] group-hover:text-clay transition-colors">
                        {g.title}
                      </h2>
                      <p className="text-[14px] leading-[1.7] text-muted">{g.excerpt}</p>
                      <div className="text-[13px] text-clay font-medium mt-3 group-hover:underline">Read guide →</div>
                    </a>
                  ) : (
                    <>
                      <h2 className="font-sans font-semibold text-[17px] sm:text-[19px] tracking-[-0.015em] text-ink2 mb-2 leading-[1.3]">
                        {g.title}
                      </h2>
                      <p className="text-[14px] leading-[1.7] text-muted">{g.excerpt}</p>
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* Newsletter CTA */}
            <div className="mt-10 p-6 bg-clay/8 border border-clay/25 rounded-[14px] max-w-[760px]">
              <div className="skirt mb-2" style={{ color: '#1b4332' }}>Get notified</div>
              <p className="text-[14px] text-ink3 leading-[1.65] mb-4">
                New guides publish every 2–3 weeks. Subscribe to the Monday brief and we will
                send you a summary the day each one goes live.
              </p>
              <a
                href="/#newsletter"
                className="inline-flex items-center gap-2 rounded-full px-[20px] py-[11px] text-[13px] font-medium bg-clay text-white hover:bg-clayd transition-all duration-150"
              >
                Subscribe to newsletter →
              </a>
            </div>
          </div>
        </section>

      </PageShell>
    </>
  )
}
