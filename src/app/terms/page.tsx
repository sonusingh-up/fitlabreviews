import PageShell from '@/components/PageShell'
import JsonLd from '@/components/JsonLd'

const SITE_URL = 'https://fitlabreviews.com'

export const metadata = {
  title: 'Terms of Service',
  description: 'Terms governing use of Fitlab Reviews — content licence, disclaimers, affiliate relationships, and liability limits.',
  alternates: { canonical: `${SITE_URL}/terms` },
  robots: { index: true, follow: false },
}

const EFFECTIVE_DATE = 'May 2026'
const CONTACT_EMAIL  = 'editorial@fitlabreviews.com'

const sections = [
  {
    id: 'acceptance',
    heading: 'Acceptance of terms',
    body: `By accessing or using fitlabreviews.com ("the Site"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Site.

Fitlab Reviews is operated by Pankaj Singh ("we", "us", "Fitlab"), a pharmacist and independent publisher based in India. These Terms apply to all visitors and users of the Site.`,
  },
  {
    id: 'content',
    heading: 'Content and intellectual property',
    body: `All content on the Site — including review text, ingredient summaries, scoring methodologies, guides, and images — is the original work of Fitlab Reviews unless otherwise stated, and is protected by copyright under Indian and international law.

You may share links to any page on this site freely. You may quote brief excerpts (up to 100 words) for commentary or educational purposes provided you attribute the source and link back to the original page.

You may not reproduce full articles, reviews, or guides on other websites, publications, or AI training datasets without explicit written permission. Contact ${CONTACT_EMAIL} for licensing enquiries.`,
  },
  {
    id: 'not-medical-advice',
    heading: 'Not medical or pharmaceutical advice',
    body: `The content on Fitlab Reviews is for informational and educational purposes only. It does not constitute medical advice, pharmaceutical advice, diagnosis, treatment recommendation, or a substitute for consultation with a qualified healthcare professional.

Pankaj Singh is a trained pharmacist. Content on this site reflects his professional knowledge and reading of published research. It does not constitute a patient-pharmacist relationship. No content on this site should be used to self-diagnose, self-treat, or make decisions about supplement use without consulting a licensed medical or pharmaceutical professional — particularly if you are pregnant, nursing, taking prescription medications, or managing any health condition.

Supplement efficacy, safety, and appropriate dosing varies by individual. What the evidence supports for a population may not apply to you specifically.`,
  },
  {
    id: 'accuracy',
    heading: 'Accuracy and updates',
    body: `We make every reasonable effort to ensure the accuracy of content on this site. However, supplement formulas change, new research emerges, prices fluctuate, and product availability varies. We cannot guarantee that all information is current at all times.

Prices shown are approximate and sourced from publicly available Indian retail data. Actual prices may differ. Always verify current pricing and availability directly with the retailer before purchasing.

We welcome corrections. If you believe any content contains a factual error, contact us at ${CONTACT_EMAIL} with a specific correction and supporting evidence.`,
  },
  {
    id: 'affiliate',
    heading: 'Affiliate relationships and commercial content',
    body: `Fitlab Reviews participates in affiliate programmes including Amazon Associates. When you click an affiliate link and make a purchase, we may earn a commission at no extra cost to you. Affiliate links are disclosed on all pages that contain them.

Affiliate commission rates do not influence product rankings or review scores. Our scoring rubric is public and applied identically to all products regardless of commercial relationship.

We also accept sponsored content from brands. Sponsored content is always clearly labeled "Sponsored" or "Paid partnership" at the top of the page and is kept entirely separate from our editorial reviews and scoring. See our Conflicts of Interest Policy for full details.`,
  },
  {
    id: 'user-conduct',
    heading: 'Acceptable use',
    body: `You agree not to use this Site to:

— Scrape, copy, or reproduce content for AI training datasets or competing publications without permission
— Attempt to gain unauthorised access to any part of the Site or its infrastructure
— Submit false or misleading information via the contact form
— Engage in any activity that disrupts or interferes with the Site's operation
— Use the Site in any way that violates applicable Indian or international law

We reserve the right to block access to users who violate these terms.`,
  },
  {
    id: 'disclaimers',
    heading: 'Disclaimers and limitation of liability',
    body: `The Site is provided on an "as is" and "as available" basis without warranties of any kind, express or implied.

To the fullest extent permitted by applicable law, Fitlab Reviews and Pankaj Singh shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Site or any content on it — including but not limited to decisions made about supplement purchases, health outcomes resulting from supplement use, or financial losses.

Our maximum liability to you for any claim arising from use of this Site shall not exceed the amount you paid to use the Site, which is zero (the Site is free to access).`,
  },
  {
    id: 'third-party',
    heading: 'Third-party links and services',
    body: `The Site contains links to third-party websites including product retailers, research publications, and reference sources. These links are provided for convenience. We do not endorse and are not responsible for the content, privacy practices, or accuracy of any third-party site.

Clicking an affiliate link takes you to a third-party retailer. That retailer's own terms and privacy policy apply once you leave this Site.`,
  },
  {
    id: 'governing-law',
    heading: 'Governing law and jurisdiction',
    body: `These Terms are governed by the laws of India. Any disputes arising from use of this Site shall be subject to the exclusive jurisdiction of the courts of India.

If any provision of these Terms is found to be unenforceable, the remaining provisions continue in full force and effect.`,
  },
  {
    id: 'changes',
    heading: 'Changes to these terms',
    body: `We may update these Terms from time to time. Updated terms are effective when posted. The effective date at the top of this page will reflect the most recent revision. Continued use of the Site after changes constitutes acceptance of the updated Terms.`,
  },
  {
    id: 'contact-terms',
    heading: 'Contact',
    body: `For questions about these Terms, contact:

Pankaj Singh — Fitlab Reviews
Email: ${CONTACT_EMAIL}

We respond to all legal enquiries within 15 business days.`,
  },
]

export default function TermsPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type':    'WebPage',
    name:       'Terms of Service — Fitlab Reviews',
    url:        `${SITE_URL}/terms`,
    publisher:  { '@type': 'Organization', name: 'Fitlab Reviews', url: SITE_URL },
  }

  return (
    <>
      <JsonLd schema={schema} />
      <PageShell
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Terms of Service' }]}
        showNewsletter={false}
      >

        {/* Header */}
        <section className="py-14 sm:py-18 border-b border-rule">
          <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
            <div className="max-w-[680px]">
              <div className="skirt mb-4">Legal</div>
              <h1
                className="font-sans font-semibold leading-[1.04] tracking-[-0.035em] text-ink2 mb-4"
                style={{ fontSize: 'clamp(32px, 4.2vw, 52px)' }}
              >
                Terms of Service
              </h1>
              <p className="text-[15px] text-muted leading-[1.65]">
                Effective date: {EFFECTIVE_DATE} &nbsp;·&nbsp; Fitlab Reviews &nbsp;·&nbsp;{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-clay hover:underline">
                  {CONTACT_EMAIL}
                </a>
              </p>

              {/* Key points */}
              <div className="mt-7 p-5 bg-paper3 border border-rule rounded-[12px]">
                <div className="text-[11px] font-semibold tracking-[0.14em] uppercase text-muted mb-3">
                  Key points
                </div>
                <ul className="space-y-2 list-none p-0 m-0">
                  {[
                    'Content is copyrighted — brief quotes with attribution are fine, full reproduction is not.',
                    'Nothing here is medical advice. Always consult a healthcare professional.',
                    'Affiliate links are present and disclosed. They do not affect our scores.',
                    'Sponsored content exists and is always clearly labeled.',
                    'Governed by Indian law.',
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2.5 text-[13.5px] text-ink3 leading-[1.55]">
                      <span className="text-muted font-bold shrink-0">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="py-12 sm:py-16">
          <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
            <div className="grid gap-10 lg:grid-cols-[200px_1fr] lg:gap-16 items-start">

              {/* Sticky TOC */}
              <nav className="hidden lg:block lg:sticky lg:top-24">
                <div className="text-[11px] tracking-[0.14em] uppercase text-muted font-medium mb-4">
                  Contents
                </div>
                <div className="space-y-1">
                  {sections.map(s => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="block text-[13px] text-muted hover:text-clay py-1 transition-colors"
                    >
                      {s.heading}
                    </a>
                  ))}
                </div>
              </nav>

              {/* Content */}
              <div className="max-w-[680px] space-y-0">
                {sections.map((s, i) => (
                  <div
                    key={s.id}
                    id={s.id}
                    className={`py-8 ${i < sections.length - 1 ? 'border-b border-rule' : ''}`}
                  >
                    <h2 className="font-sans font-semibold text-[17px] tracking-[-0.015em] text-ink2 mb-4">
                      {s.heading}
                    </h2>
                    <div className="space-y-4">
                      {s.body.split('\n\n').map((para, j) => {
                        if (para.startsWith('—')) {
                          return (
                            <ul key={j} className="space-y-2 list-none p-0 m-0">
                              {para.split('\n').map((line, k) => (
                                <li key={k} className="flex gap-2.5 text-[14px] text-ink3 leading-[1.6]">
                                  <span className="text-muted shrink-0">—</span>
                                  {line.replace(/^— /, '')}
                                </li>
                              ))}
                            </ul>
                          )
                        }
                        return (
                          <p key={j} className="text-[14.5px] leading-[1.75] text-ink3">
                            {para}
                          </p>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </PageShell>
    </>
  )
}
