'use client'
import { useState } from 'react'
import PageShell from '@/components/PageShell'

const reasons = [
  { value: 'correction',  label: 'Correction or factual dispute' },
  { value: 'editorial',   label: 'Editorial inquiry' },
  { value: 'research',    label: 'Research collaboration' },
  { value: 'conflict',    label: 'Report a conflict of interest' },
  { value: 'other',       label: 'Something else' },
]

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [subject, setSubject] = useState('')

  return (
    <PageShell
      crumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
      showNewsletter={false}
    >
      {/* Header */}
      <section className="py-16 sm:py-20 border-b border-rule">
        <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
          <div className="max-w-[600px]">
            <div className="skirt mb-4">Contact</div>
            <h1
              className="font-sans font-semibold leading-[1.04] tracking-[-0.035em] text-ink2 mb-5"
              style={{ fontSize: 'clamp(32px, 4.2vw, 54px)' }}
            >
              Say something{' '}
              <em className="hero-em">worth saying.</em>
            </h1>
            <p className="text-[15px] sm:text-[17px] leading-[1.7] text-ink3">
              We read everything. We respond to corrections, factual disputes, and
              research questions. We don't respond to PR pitches, link-building requests,
              or anything asking us to change a score for non-evidential reasons.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="max-w-site mx-auto px-5 sm:px-8 lg:px-14">
          <div className="grid gap-12 lg:grid-cols-[1fr_380px] lg:gap-16 items-start">

            {/* Form */}
            <div>
              {sent ? (
                <div className="bg-clay/8 border border-clay/20 rounded-[14px] p-8 text-center">
                  <div className="font-serif-body text-[40px] text-clay mb-3">✓</div>
                  <h3 className="font-sans font-semibold text-[20px] text-ink2 mb-2">Got it.</h3>
                  <p className="text-[14px] text-muted leading-[1.65]">
                    We'll respond within 5 business days for editorial matters,
                    48 hours for correction requests.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={e => { e.preventDefault(); setSent(true) }}
                  className="space-y-5"
                >
                  {/* Name + Email */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="skirt block mb-2">Name</label>
                      <input
                        required
                        type="text"
                        placeholder="Your name"
                        className="w-full border border-rule rounded-[10px] px-4 py-3 text-[14px] text-ink2 bg-paper3 placeholder:text-muted outline-none transition-colors focus:border-clay"
                      />
                    </div>
                    <div>
                      <label className="skirt block mb-2">Email</label>
                      <input
                        required
                        type="email"
                        placeholder="you@domain.com"
                        className="w-full border border-rule rounded-[10px] px-4 py-3 text-[14px] text-ink2 bg-paper3 placeholder:text-muted outline-none transition-colors focus:border-clay"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="skirt block mb-2">Subject</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {reasons.map(r => (
                        <button
                          key={r.value}
                          type="button"
                          onClick={() => setSubject(r.value)}
                          className={`text-[12px] sm:text-[13px] rounded-full px-3.5 py-2 border text-left transition-all duration-150 cursor-pointer
                            ${subject === r.value
                              ? 'bg-clay text-white border-clay'
                              : 'bg-paper3 text-ink2 border-rule hover:border-clay hover:text-clay'}`}
                        >
                          {r.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="skirt block mb-2">Message</label>
                    <textarea
                      required
                      rows={6}
                      placeholder="Be specific. If it's a correction, link the review and the study you think contradicts our finding."
                      className="w-full border border-rule rounded-[10px] px-4 py-3 text-[14px] text-ink2 bg-paper3 placeholder:text-muted outline-none transition-colors focus:border-clay resize-none leading-[1.65]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="rounded-full px-[22px] py-[13px] text-[14px] font-medium bg-clay text-white hover:bg-clayd transition-all duration-150 cursor-pointer"
                  >
                    Send message →
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar info */}
            <div className="space-y-6">
              {[
                {
                  icon: '✓',
                  title: 'Corrections',
                  body: 'We take factual disputes seriously. Cite the study that contradicts our finding. If you\'re right, we update the review, note the correction, and thank you in the changelog.',
                  tag: '48hr response',
                },
                {
                  icon: '→',
                  title: 'Editorial inquiries',
                  body: 'Press, podcast, and academic inquiries welcome. Brand PR inquiries are not responded to.',
                  tag: '5 business days',
                },
                {
                  icon: '!',
                  title: 'Conflict reports',
                  body: 'If you believe a review has been influenced by a commercial relationship, tell us. We investigate and publish a response regardless of outcome.',
                  tag: 'Always investigated',
                },
              ].map((item, i) => (
                <div key={i} className="bg-paper3 border border-rule rounded-[14px] p-5">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="text-clay font-bold text-[16px] mt-0.5">{item.icon}</span>
                    <h3 className="font-sans font-semibold text-[15px] text-ink2 tracking-[-0.01em]">
                      {item.title}
                    </h3>
                    <span className="ml-auto text-[10px] font-medium tracking-[0.08em] uppercase text-clay bg-clay/10 rounded-full px-2.5 py-1 whitespace-nowrap">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-[13px] text-muted leading-[1.65] pl-6 m-0">{item.body}</p>
                </div>
              ))}

              <div className="text-[12.5px] text-muted leading-[1.7] pt-2">
                Direct email:{' '}
                <a href="mailto:editorial@fitlabreviews.com"
                   className="text-clay hover:underline">
                  editorial@fitlabreviews.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
