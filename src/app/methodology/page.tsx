import PageShell from '@/components/PageShell'
import JsonLd from '@/components/JsonLd'


const SITE_URL = "https://fitlabreviews.com"
const webPageSchema = {
  "@context": "https://schema.org",
  "@type":    "WebPage",
  name:       "Methodology — Fitlab Reviews",
  description: "How Fitlab evaluates supplements. Every step, in order.",
  url:        "https://fitlabreviews.com/methodology",
  publisher:  { "@type": "Organization", name: "Fitlab Reviews", url: "https://fitlabreviews.com" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fitlabreviews.com" },
      { "@type": "ListItem", position: 2, name: "Methodology", item: "https://fitlabreviews.com/methodology" },
    ],
  },
}
export const metadata = {
  title: 'Methodology — Fitlab Reviews',
  description: 'How Fitlab evaluates supplements. Every step, in order, with no omissions.',
  alternates: { canonical: 'https://fitlabreviews.com/methodology' },
}

const steps = [
  {
    n: '01', title: 'Product selection',
    body: 'We prioritize products by US sales volume (top 20 in each category on Amazon), then expand based on reader requests. We don\'t accept products for review — we source them independently or purchase retail. Free samples go in the bin.',
  },
  {
    n: '02', title: 'Label analysis',
    body: 'Every ingredient is logged against our clinical dose database. We check the form (e.g., magnesium glycinate vs oxide), total dose per serving, and whether proprietary blends obscure individual doses. Blends that hide critical ingredient amounts receive a mandatory label honesty deduction.',
  },
  {
    n: '03', title: 'Third-party verification',
    body: 'We cross-reference Labdoor, ConsumerLab, Informed Sport, and NSF databases. When a lot-specific test exists, we use it. When only certification exists, we flag it as certification-verified rather than lot-tested. The distinction matters.',
  },
  {
    n: '04', title: 'Evidence grading',
    body: 'We use a modified GRADE framework: A (strong — multiple RCTs, consistent outcomes), B (moderate — some RCT evidence, mixed outcomes), C (limited — observational or mechanistic only), D (insufficient — insufficient human data). Grades apply to specific doses and populations, not ingredients in the abstract.',
  },
  {
    n: '05', title: 'Scoring against the rubric',
    body: 'Five criteria, fixed weights, applied identically to every product. Clinical dose (25%), Ingredient form (20%), Third-party purity (20%), Value per gram (20%), Label honesty (15%). Weights haven\'t changed since March 2024. If they change, we re-score every affected product and publish a changelog.',
  },
  {
    n: '06', title: 'Peer review',
    body: 'Every review is read by a second team member before publication. Reviews touching clinical claims require a co-sign from our PhD-credentialed researcher. We don\'t publish on a schedule — we publish when the review is accurate.',
  },
  {
    n: '07', title: 'Maintenance',
    body: 'We re-evaluate products when: formulas change, new lot-test data appears, new clinical evidence changes our dose assessment, or price movement meaningfully changes value-per-gram scores. Updated reviews show a version timestamp and change summary.',
  },
]

export default function MethodologyPage() {
  return (
    <>
      <JsonLd schema={webPageSchema} />
      <PageShell crumbs={[{ label: 'Home', href: '/' }, { label: 'Methodology' }]}>

      {/* Header */}
      <section className="py-16 sm:py-20 border-b border-rule">
        <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
          <div className="max-w-[680px]">
            <div className="skirt mb-4">How we work</div>
            <h1
              className="font-sans font-semibold leading-[1.04] tracking-[-0.035em] text-ink2 mb-5"
              style={{ fontSize: 'clamp(34px, 4.5vw, 58px)' }}
            >
              The review process,{' '}
              <em className="hero-em">nothing omitted.</em>
            </h1>
            <p className="text-[15px] sm:text-[17px] leading-[1.7] text-ink3 mb-6">
              We publish how we work because we want you to be able to disagree with us.
              If our methodology is wrong, we want to know. If our weights are off,
              tell us. The rubric is versioned — we track what changed and why.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a href="/scoring-rubric"
                 className="inline-flex items-center gap-2 rounded-full px-[20px] py-[11px] text-[13px] font-medium bg-clay text-white hover:bg-clayd transition-all duration-150">
                View scoring rubric →
              </a>
              <a href="/conflicts-policy"
                 className="inline-flex items-center gap-2 rounded-full px-[20px] py-[11px] text-[13px] font-medium bg-paper3 text-ink2 border border-rule hover:border-clay transition-all duration-150">
                Conflicts policy
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Process steps */}
      <section className="py-16 sm:py-20 border-b border-rule">
        <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
          <div className="skirt mb-10">The process — step by step</div>
          <div className="max-w-[760px] space-y-0">
            {steps.map((s, i) => (
              <div
                key={i}
                className={`flex gap-5 sm:gap-8 py-8 ${i < steps.length - 1 ? 'border-b border-rule' : ''}`}
              >
                <div className="shrink-0 pt-0.5">
                  <span className="font-serif-body text-[28px] text-clay">{s.n}</span>
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-[16px] sm:text-[17px] tracking-[-0.015em] text-ink2 mb-2 leading-[1.3]">
                    {s.title}
                  </h3>
                  <p className="text-[14px] sm:text-[15px] leading-[1.75] text-ink3 m-0">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we don't do */}
      <section className="py-16 sm:py-20 bg-paper2 border-b border-rule">
        <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16 items-start">
            <div>
              <div className="skirt mb-5">Explicit exclusions</div>
              <h2
                className="font-sans font-semibold leading-[1.1] tracking-[-0.025em] text-ink2 mb-4"
                style={{ fontSize: 'clamp(24px, 2.8vw, 36px)' }}
              >
                Things we will{' '}
                <em className="section-em">never do.</em>
              </h2>
              <p className="text-[14px] text-ink3 leading-[1.7]">
                Clear lines matter. Here's ours — no exceptions, no "special circumstances."
              </p>
            </div>
            <ul className="space-y-0 list-none p-0 m-0">
              {[
                'Accept payment or free samples in exchange for coverage',
                'Allow brands to preview or request changes to reviews before publication',
                'Weight affiliate commission rates in our ranking decisions',
                'Publish a review without independent third-party data',
                'Use proprietary blend products without flagging dose opacity',
                'Suppress a negative finding because it affects a revenue relationship',
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start py-4 border-b border-rule last:border-b-0">
                  <span className="text-clay font-bold text-[16px] shrink-0 mt-0.5">✕</span>
                  <span className="text-[14px] text-ink3 leading-[1.65]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Rubric CTA */}
      <section className="py-14">
        <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-8 bg-clay rounded-[14px]">
            <div>
              <div className="text-[11px] font-medium tracking-[0.18em] uppercase text-white/60 mb-2">Current version</div>
              <h3 className="font-sans font-semibold text-[20px] text-white tracking-[-0.02em] mb-1">
                Scoring Rubric v3.1
              </h3>
              <p className="text-[13px] text-white/70">Updated March 2024 — full changelog available</p>
            </div>
            <a href="/scoring-rubric"
               className="shrink-0 inline-flex items-center gap-2 rounded-full px-[20px] py-[11px] text-[13px] font-medium bg-white text-clay hover:bg-paper3 transition-all duration-150">
              View rubric →
            </a>
          </div>
        </div>
      </section>

    </PageShell>
    </>
  )
}
