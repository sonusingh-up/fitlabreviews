import PageShell from '@/components/PageShell'
import JsonLd from '@/components/JsonLd'
import { comparePairs, getAllProduct } from '@/lib/data'
import CompareCard from '@/components/CompareCard'

const SITE_URL = 'https://fitlabreviews.com'

export const metadata = {
  title: 'Supplement Comparisons',
  description: 'Head-to-head supplement comparisons for the Indian market. Same rubric, same criteria — which one actually wins?',
  alternates: { canonical: `${SITE_URL}/compare` },
}

export default function CompareHub() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Supplement Comparisons — Fitlab Reviews',
    url: `${SITE_URL}/compare`,
    publisher: { '@type': 'Organization', name: 'Fitlab Reviews', url: SITE_URL },
  }

  const comingSoon = [
    'MuscleBlaze Biozyme vs AS-IT-IS Whey Isolate',
    'AS-IT-IS Creatine vs Nutrabay Creatine',
    'BigMuscles Freak vs ON Gold Standard Pre-Workout',
    'MuscleBlaze Whey vs Nutrabay Gold Whey',
  ]

  return (
    <>
      <JsonLd schema={schema} />
      <PageShell crumbs={[{ label: 'Home', href: '/' }, { label: 'Compare' }]}>

        {/* Header */}
        <section className="py-14 sm:py-18 border-b border-rule">
          <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
            <div className="max-w-[640px]">
              <div className="skirt mb-4">Comparisons · {comparePairs.length} live</div>
              <h1
                className="font-sans font-semibold leading-[1.04] tracking-[-0.035em] text-ink2 mb-4"
                style={{ fontSize: 'clamp(32px, 4.5vw, 56px)' }}
              >
                Head-to-head.<br />
                <em className="hero-em">Same rubric. No bias.</em>
              </h1>
              <p className="text-[15px] sm:text-[17px] leading-[1.7] text-ink3">
                Both products scored identically. The winner is determined by rubric score —
                not by which product has a higher affiliate commission.
              </p>
            </div>
          </div>
        </section>

        {/* Live comparisons */}
        <section className="py-14 sm:py-16 border-b border-rule">
          <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
            <div className="skirt mb-8">Published comparisons</div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {comparePairs.map(pair => {
                const [a, b] = pair.productSlugs.map(s => getAllProduct(s))
                const winner = getAllProduct(pair.verdict.winner)
                return (
                  <CompareCard
                    key={pair.slug}
                    slug={pair.slug}
                    brandA={a.brand}
                    nameA={a.name}
                    scoreA={a.score}
                    brandB={b.brand}
                    nameB={b.name}
                    scoreB={b.score}
                    winnerName={winner.name}
                    winnerBrand={winner.brand}
                    verdictSummary={pair.verdict.summary}
                  />
                )
              })}

              {/* Coming soon cards */}
              {comingSoon.map((title, i) => (
                <div key={i} className="bg-paper2 border border-rule border-dashed rounded-[14px] p-5 sm:p-6 opacity-60">
                  <div className="text-[10px] tracking-[0.12em] uppercase text-muted font-medium mb-3">Coming soon</div>
                  <div className="font-medium text-[14px] text-ink3 leading-[1.4]">{title}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Suggest a comparison */}
        <section className="py-12 bg-paper2">
          <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
            <div className="max-w-[560px]">
              <div className="skirt mb-3">Suggest a comparison</div>
              <p className="text-[14px] text-ink3 leading-[1.7] mb-4">
                Two products you want compared? Send us the names and we will add it to the queue.
                Priority is given to comparisons that are commonly searched in India.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full px-[20px] py-[11px] text-[13px] font-medium bg-clay text-white hover:bg-clayd transition-all duration-150"
              >
                Suggest a comparison →
              </a>
            </div>
          </div>
        </section>

      </PageShell>
    </>
  )
}
