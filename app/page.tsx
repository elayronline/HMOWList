'use client'

import { Suspense } from 'react'
import { WaitlistForm } from '@/components/WaitlistForm'
import { UTMTracker } from '@/components/UTMTracker'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={null}>
        <UTMTracker />
      </Suspense>

      {/* Hero + Primary CTA */}
      <section className="relative bg-gradient-to-b from-brand-50 to-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            HMO Hunter
          </h1>

          <p className="mt-6 text-xl font-semibold text-gray-800 sm:text-2xl">
            Find high-yield HMO opportunities before you commit.
          </p>

          {/* Primary CTA */}
          <div className="mx-auto mt-10 max-w-md">
            <p className="mb-3 text-sm font-medium text-gray-500">
              Get early access
            </p>
            <WaitlistForm source="hero" buttonText="Join the Waiting List" />
          </div>
        </div>

        <div className="absolute -top-24 right-0 -z-10 h-[400px] w-[400px] rounded-full bg-brand-100 opacity-50 blur-3xl" />
      </section>

      {/* The Problem */}
      <section className="border-t border-gray-100 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            The problem
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Finding compliant, high-yield HMOs takes weeks of manual research. Checking licensing,
            planning rules, and local regulations across multiple sources.
          </p>
        </div>
      </section>

      {/* The Solution */}
      <section className="bg-gray-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Our approach
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            One platform that analyses properties against current UK regulations. Identify
            viable HMOs in minutes, not weeks.
          </p>

          <div className="mt-8 inline-flex flex-wrap justify-center gap-3">
            <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-gray-200">
              Compliance checks
            </span>
            <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-gray-200">
              Licensing data
            </span>
            <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-gray-200">
              Yield analysis
            </span>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-brand-600 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Join the waiting list
          </h2>
          <p className="mt-3 text-brand-100">
            Priority access. Founders pricing. No spam.
          </p>
          <div className="mx-auto mt-8 max-w-md">
            <WaitlistForm source="footer_cta" buttonText="Get Early Access" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white px-4 py-6 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} HMO Hunter
        </p>
      </footer>
    </main>
  )
}
