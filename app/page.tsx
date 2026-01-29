'use client'

import { Suspense } from 'react'
import { WaitlistForm } from '@/components/WaitlistForm'
import { UTMTracker } from '@/components/UTMTracker'

const features = [
  {
    emoji: '🔍',
    title: 'Discover HMO-ready & conversion-potential properties',
    description: 'Find properties that are already compliant or have strong conversion potential.',
  },
  {
    emoji: '📜',
    title: 'Built-in compliance checks',
    description: 'Against up-to-date licensing and planning rules from UK authorities.',
  },
  {
    emoji: '📊',
    title: 'Data-led insights',
    description: 'Reduce risk and maximise returns with comprehensive property analysis.',
  },
  {
    emoji: '⚡',
    title: 'Save weeks of manual research in minutes',
    description: 'Automated checks that would take hours to do manually.',
  },
]

const audiences = [
  'Property investors',
  'Developers',
  'Deal sourcers',
  'Portfolio managers',
]

const earlyAccessPerks = [
  'Priority onboarding',
  'Founders-only pricing',
  'Early feature influence',
]

const faqs = [
  {
    question: 'Is this UK-only?',
    answer: 'Yes—HMO Hunter is built specifically around UK national and local authority regulations.',
  },
  {
    question: 'When are you launching?',
    answer: 'We\'re onboarding waiting list users first. Join to get priority access.',
  },
  {
    question: 'Will this replace manual due diligence?',
    answer: 'It dramatically reduces research time by surfacing compliant opportunities fast—final checks still recommended.',
  },
]

export default function Home() {
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
          <p className="mx-auto mt-6 max-w-2xl text-xl font-medium text-gray-700 sm:text-2xl">
            Find high-yield HMO opportunities—before you commit
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            <strong>HMO Hunter</strong> helps property investors and developers uncover{' '}
            <strong>existing and potential high-yield HMO opportunities</strong>—fast.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Our platform intelligently analyses properties against{' '}
            <strong>current UK government and local authority regulations</strong>, so you can
            identify compliant, viable HMOs before you invest time or capital.
          </p>
        </div>

        {/* Decorative gradient blob */}
        <div className="absolute -top-24 right-0 -z-10 h-[400px] w-[400px] rounded-full bg-brand-100 opacity-50 blur-3xl" />
      </section>

      {/* What You Get Section */}
      <section className="border-y border-gray-100 bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What you get
          </h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex gap-4 rounded-xl border border-gray-100 bg-gray-50 p-6"
              >
                <span className="text-3xl">{feature.emoji}</span>
                <div>
                  <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-12 max-w-2xl text-center text-lg text-gray-600">
            Whether you&apos;re scaling a portfolio or validating your next deal,{' '}
            <strong>HMO Hunter</strong> gives you clarity and confidence—<strong>before</strong> you commit.
          </p>
        </div>
      </section>

      {/* Join the Waiting List Section */}
      <section className="bg-brand-600 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Join the waiting list
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-brand-100">
            Be first to access HMO Hunter at launch.
          </p>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-white">
              Early access perks <span className="font-normal text-brand-200">(for waiting list members)</span>
            </h3>
            <ul className="mt-4 space-y-2">
              {earlyAccessPerks.map((perk) => (
                <li key={perk} className="flex items-center justify-center gap-2 text-brand-100">
                  <svg className="h-5 w-5 text-brand-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {perk}
                </li>
              ))}
            </ul>
          </div>

          <div className="mx-auto mt-8 max-w-md">
            <WaitlistForm source="main_cta" buttonText="Join the Waiting List" />
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="bg-gray-50 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Who it&apos;s for
          </h2>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {audiences.map((audience) => (
              <span
                key={audience}
                className="rounded-full bg-white px-5 py-2 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-gray-200"
              >
                {audience}
              </span>
            ))}
          </div>

          <p className="mt-8 text-lg font-medium text-brand-600">
            Built for the UK market.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            FAQs
          </h2>

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

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} HMO Hunter. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
