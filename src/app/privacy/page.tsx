import PageShell from '@/components/PageShell'
import JsonLd from '@/components/JsonLd'

const SITE_URL = 'https://fitlabreviews.com'

export const metadata = {
  title: 'Privacy Policy',
  description: 'How Fitlab Reviews collects, uses, and protects your data. We use cookieless analytics and no tracking pixels.',
  alternates: { canonical: `${SITE_URL}/privacy` },
  robots: { index: true, follow: false },
}

const EFFECTIVE_DATE = 'May 2026'
const CONTACT_EMAIL  = 'editorial@fitlabreviews.com'

const sections = [
  {
    id: 'overview',
    heading: 'Overview',
    body: `Fitlab Reviews ("Fitlab", "we", "us") is an independent supplement review publication operated by Pankaj Singh, a pharmacist based in India. This Privacy Policy explains what data we collect, why we collect it, how it is used, and your rights with respect to that data.

We have designed this site to collect as little personal data as possible. We do not use advertising trackers, third-party cookies, or behavioural profiling. Our analytics are cookieless and privacy-first by design.

This policy applies to all visitors of fitlabreviews.com and any subdomains. By using the site, you accept the practices described here.`,
  },
  {
    id: 'what-we-collect',
    heading: 'What we collect',
    body: `We collect data in two ways:

**Analytics data (automatic, anonymous).** We use Plausible Analytics — a privacy-first, cookieless analytics tool hosted in the EU. Plausible does not set any cookies and does not track individual users across sessions or devices. The data collected is fully anonymised and includes: page URL visited, referrer source, browser type, operating system, device type, and country-level location. No IP addresses are stored. No personal identifiers are linked to this data. This data is used solely to understand which content is useful and to improve the site.

**Newsletter subscriptions (voluntary).** If you subscribe to the Fitlab newsletter, we collect your email address. This is the only piece of personally identifiable information we collect. It is used exclusively to send the newsletter and is never sold, rented, or shared with third parties. You can unsubscribe at any time from any email.

**Contact form submissions (voluntary).** If you use the contact form, we receive your name, email address, and message. This data is used only to respond to your enquiry and is not stored beyond what is necessary for that purpose.`,
  },
  {
    id: 'what-we-dont-collect',
    heading: 'What we do not collect',
    body: `We do not collect or use:

— Advertising cookies or tracking pixels (no Google Ads, Meta Pixel, or similar)
— Cross-site behavioural tracking data
— Device fingerprints or persistent user identifiers
— Payment information (we have no e-commerce functionality)
— Health or medical data
— Data from users under 18 years of age (our site is not directed at minors)`,
  },
  {
    id: 'affiliate-links',
    heading: 'Affiliate links and third-party sites',
    body: `Some links on Fitlab are affiliate links — primarily Amazon Associates. When you click an affiliate link, you are redirected to a third-party retailer. That retailer's privacy policy governs data collected on their site. We do not receive personal data about you from affiliate clicks. We receive only an anonymised commission signal if a purchase is made.

We are not responsible for the privacy practices of any third-party site linked from Fitlab.`,
  },
  {
    id: 'data-storage',
    heading: 'Data storage and security',
    body: `Analytics data is processed and stored by Plausible Analytics on EU-based servers (GDPR-compliant infrastructure). Newsletter email addresses are stored by our email service provider. Contact form submissions are received via email and stored in our inbox only as long as necessary to respond.

We take reasonable technical precautions to protect data submitted to us. However, no transmission over the internet is fully secure, and we cannot guarantee absolute security.`,
  },
  {
    id: 'indian-law',
    heading: 'Indian law compliance',
    body: `Fitlab Reviews complies with the Information Technology Act, 2000 (India) and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.

The only sensitive personal data we may collect is your email address for newsletter subscriptions. This is collected with your explicit consent and used only for the stated purpose. You may withdraw consent at any time by unsubscribing.

For queries related to your data rights under Indian law, contact us at ${CONTACT_EMAIL}.`,
  },
  {
    id: 'gdpr',
    heading: 'GDPR and European visitors',
    body: `If you are visiting from the European Economic Area (EEA), you have the following rights regarding your personal data:

— **Right of access** — request a copy of data we hold about you
— **Right to rectification** — correct inaccurate data
— **Right to erasure** — request deletion of your data
— **Right to object** — object to processing of your data
— **Right to data portability** — receive your data in a portable format

Our lawful basis for processing newsletter email addresses is consent (Article 6(1)(a) GDPR). Our lawful basis for anonymised analytics is legitimate interest (Article 6(1)(f) GDPR) — we have a legitimate interest in understanding site usage, and Plausible's cookieless design means no individual rights are affected.

To exercise any of these rights, email ${CONTACT_EMAIL}.`,
  },
  {
    id: 'cookies',
    heading: 'Cookies',
    body: `Fitlab does not use cookies for analytics, advertising, or tracking. The only cookies that may be set are strictly necessary functional cookies required for the site to operate (e.g., session state if you use the contact form). These cookies are not used for any tracking purpose and are not accessible to third parties.

Plausible Analytics — our analytics provider — is explicitly designed to require no cookies. You will not see a cookie consent banner on this site because we do not set tracking cookies.`,
  },
  {
    id: 'changes',
    heading: 'Changes to this policy',
    body: `We may update this Privacy Policy from time to time. When we do, we update the effective date at the top of this page. Continued use of the site after changes constitutes acceptance of the updated policy. For significant changes, we will post a notice on the site.`,
  },
  {
    id: 'contact',
    heading: 'Contact',
    body: `For any privacy-related questions or to exercise your data rights, contact:

Pankaj Singh
Fitlab Reviews
Email: ${CONTACT_EMAIL}

We respond to all privacy enquiries within 15 business days.`,
  },
]

export default function PrivacyPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type':    'WebPage',
    name:       'Privacy Policy — Fitlab Reviews',
    url:        `${SITE_URL}/privacy`,
    publisher:  { '@type': 'Organization', name: 'Fitlab Reviews', url: SITE_URL },
  }

  return (
    <>
      <JsonLd schema={schema} />
      <PageShell
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]}
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
                Privacy Policy
              </h1>
              <p className="text-[15px] text-muted leading-[1.65]">
                Effective date: {EFFECTIVE_DATE} &nbsp;·&nbsp; Fitlab Reviews &nbsp;·&nbsp;{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-clay hover:underline">
                  {CONTACT_EMAIL}
                </a>
              </p>

              {/* TL;DR card */}
              <div className="mt-7 p-5 bg-clay/8 border border-clay/25 rounded-[12px]">
                <div className="text-[11px] font-semibold tracking-[0.14em] uppercase text-clay mb-3">
                  Summary — what actually matters
                </div>
                <ul className="space-y-2 list-none p-0 m-0">
                  {[
                    'No advertising cookies. No tracking pixels. No behavioural data.',
                    'Analytics via Plausible — cookieless, EU-hosted, fully anonymous.',
                    'We only store your email if you subscribe to the newsletter.',
                    'We never sell, rent, or share personal data.',
                    'Unsubscribe from the newsletter in one click, any time.',
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2.5 text-[13.5px] text-ink3 leading-[1.55]">
                      <span className="text-clay font-bold shrink-0">✓</span>
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
                        if (para.startsWith('**')) {
                          const parts = para.split('**')
                          return (
                            <p key={j} className="text-[14.5px] leading-[1.75] text-ink3">
                              <strong className="text-ink2 font-semibold">{parts[1]}</strong>
                              {parts[2]}
                            </p>
                          )
                        }
                        if (para.startsWith('—')) {
                          return (
                            <ul key={j} className="space-y-2 list-none p-0 m-0">
                              {para.split('\n').map((line, k) => (
                                <li key={k} className="flex gap-2.5 text-[14px] text-ink3 leading-[1.6]">
                                  <span className="text-muted shrink-0">—</span>
                                  <span
                                    dangerouslySetInnerHTML={{
                                      __html: line.replace(/^— /, '').replace(
                                        /\*\*(.+?)\*\*/g,
                                        '<strong class="text-ink2 font-medium">$1</strong>'
                                      )
                                    }}
                                  />
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
