'use client'

import { Suspense } from 'react'
import { UTMTracker } from '@/components/UTMTracker'
import { StickyBar } from '@/components/StickyBar'
import { HeroSection } from '@/components/HeroSection'
import { SocialProofBar } from '@/components/SocialProofBar'
import { PainSection } from '@/components/PainSection'
import { BeforeAfter } from '@/components/BeforeAfter'
import { SolutionSection } from '@/components/SolutionSection'
import { BetaBenefits } from '@/components/BetaBenefits'
import { SignupForm } from '@/components/SignupForm'
import { HowItWorks } from '@/components/HowItWorks'
import { ICPTabs } from '@/components/ICPTabs'
import { FAQAccordion } from '@/components/FAQAccordion'
import { Footer } from '@/components/Footer'
import { REMAINING, TOTAL_SPOTS } from '@/lib/constants'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={null}>
        <UTMTracker />
      </Suspense>

      <StickyBar />
      <HeroSection />
      <SocialProofBar />
      <PainSection />
      <BeforeAfter />
      <SolutionSection />
      <BetaBenefits />

      <HowItWorks />

      {/* Second Sign-Up Form , immediately after "What happens next?" */}
      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <SignupForm
            id="signup-form-2"
            header="Secure Your Beta Spot"
            subheader="10 seconds. 5 fields. You're in."
            variant="full"
            microcopy="Takes 10 seconds. Lock in Pro access at £19/mo — forever."
          />
        </div>
      </section>

      <Suspense fallback={null}>
        <ICPTabs />
      </Suspense>

      <FAQAccordion />

      {/* Final CTA , catch warm visitors who read the whole page */}
      <section className="bg-bg-alt px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-[family-name:var(--font-fraunces)] text-2xl font-bold sm:text-3xl">
            Ready to source smarter?
          </h2>
          <p className="mt-3 text-sm text-text-muted">
            Join the first wave of housing professionals using HMO Hunter.
          </p>
          <button
            onClick={() => {
              const form = document.getElementById('signup-form-2') || document.getElementById('signup-form')
              form?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="mt-6 cursor-pointer rounded-lg bg-accent px-8 py-3 font-bold text-white transition-colors hover:bg-accent-dark"
          >
            Join the Beta
          </button>
          <p className="mt-3 text-xs text-text-muted">{REMAINING} of {TOTAL_SPOTS} beta places remaining</p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
