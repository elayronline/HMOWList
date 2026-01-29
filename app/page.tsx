'use client'

import { Suspense } from 'react'
import { WaitlistForm } from '@/components/WaitlistForm'
import { UTMTracker } from '@/components/UTMTracker'
import { trackCTAClick } from '@/lib/analytics'

const features = [
  {
    title: 'Deal Signals',
    description:
      'Instant checks on HMO licensing requirements, Article 4 restrictions, EPC ratings, and local rent comparables—so you know what you\'re buying before you commit.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Portfolio Scenarios',
    description:
      'Model hold, upgrade, or exit strategies over 5 to 20 years. See how decisions compound across your entire portfolio, not just one property.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
  },
  {
    title: 'HMO Yield & Cashflow',
    description:
      'Room-by-room rent analysis with realistic void assumptions. Calculate net yields that reflect what actually lands in your account each month.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Compliance Radar',
    description:
      'Track HMO regulations, upcoming EPC requirements, and licensing renewals. Stay ahead of changes that could affect your returns.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Area Intelligence',
    description:
      'Understand local HMO saturation, tenant demand, and council attitudes before you waste time on unsuitable deals.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Due Diligence Checklists',
    description:
      'Structured workflows for viewing properties, analysing deals, and preparing offers. Nothing gets missed.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
]

const steps = [
  {
    number: '01',
    title: 'Enter a property',
    description: 'Paste a Rightmove or Zoopla link, or enter an address manually.',
  },
  {
    number: '02',
    title: 'Get instant analysis',
    description: 'HMO Hunter pulls licensing data, comps, and compliance info automatically.',
  },
  {
    number: '03',
    title: 'Make informed decisions',
    description: 'Compare scenarios, spot red flags early, and move on the right deals.',
  },
]

const faqs = [
  {
    question: 'What is HMO Hunter?',
    answer:
      'HMO Hunter is a deal analysis tool built specifically for UK HMO investors. It helps you quickly assess whether a property is worth pursuing by pulling together licensing requirements, rent comparables, compliance data, and financial projections in one place.',
  },
  {
    question: 'When will HMO Hunter launch?',
    answer:
      'We\'re currently in private development. Join the waitlist to be notified when we open early access. Waitlist members will get priority access and the opportunity to shape the product.',
  },
  {
    question: 'How much will it cost?',
    answer:
      'Pricing hasn\'t been finalised yet. We\'re focused on building something genuinely useful first. Waitlist members will receive early-bird pricing when we launch.',
  },
  {
    question: 'What data sources do you use?',
    answer:
      'We aggregate data from public records, council licensing registers, EPC databases, and rental market sources. All data is sourced legally and updated regularly.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Yes. We take data protection seriously. Your email is stored securely and will only be used to notify you about HMO Hunter updates. We don\'t sell or share your information.',
  },
]

export default function Home() {
  const scrollToFeatures = () => {
    trackCTAClick('see_features')
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen">
      {/* UTM Parameter Tracking */}
      <Suspense fallback={null}>
        <UTMTracker />
      </Suspense>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            HMO Hunter
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl">
            Find, model, and de-risk UK HMO deals faster.{' '}
            <span className="font-medium text-brand-600">Coming soon.</span>
          </p>

          <div className="mx-auto mt-10 max-w-md">
            <WaitlistForm source="hero" buttonText="Join the Waitlist" />
          </div>

          <button
            onClick={scrollToFeatures}
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-brand-600 transition-colors hover:text-brand-700"
          >
            See what you&apos;ll get
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Decorative gradient blob */}
        <div className="absolute -top-24 right-0 -z-10 h-[400px] w-[400px] rounded-full bg-brand-100 opacity-50 blur-3xl" />
      </section>

      {/* Social Proof Strip */}
      <section className="border-y border-gray-100 bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-gray-500">
            Built for serious HMO investors
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3 sm:gap-8">
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Data-driven analysis, not guesswork
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">
                UK-focused with local council data
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Built by property investors, for investors
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to analyse HMO deals
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Stop juggling spreadsheets and council websites. Get the insights you need in one place.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="inline-flex rounded-lg bg-brand-50 p-3 text-brand-600">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How it works
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              From property link to informed decision in minutes.
            </p>
          </div>

          <div className="mt-12 space-y-8 sm:space-y-12">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex items-start gap-6"
              >
                <div className="flex-shrink-0">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-lg font-bold text-white">
                    {step.number}
                  </span>
                </div>
                <div className="pt-1">
                  <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently asked questions
            </h2>
          </div>

          <div className="mt-12 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <div key={faq.question} className="py-6">
                <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                <p className="mt-3 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-brand-600 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Be first in line
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-brand-100">
            Join the waitlist for early access to HMO Hunter. No spam, just updates on our progress.
          </p>
          <div className="mx-auto mt-8 max-w-md">
            <WaitlistForm source="footer_cta" buttonText="Get Early Access" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div>
              <p className="text-xl font-bold text-gray-900">HMO Hunter</p>
              <p className="mt-1 text-sm text-gray-500">
                UK HMO deal analysis, simplified.
              </p>
            </div>
            <nav className="flex gap-6 text-sm text-gray-600">
              <a href="#features" className="transition-colors hover:text-gray-900">
                Features
              </a>
              <a
                href="mailto:hello@hmohunter.co.uk"
                className="transition-colors hover:text-gray-900"
              >
                Contact
              </a>
            </nav>
          </div>
          <div className="mt-8 border-t border-gray-100 pt-8 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} HMO Hunter. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
