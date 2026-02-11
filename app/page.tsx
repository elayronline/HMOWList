'use client'

import { Suspense } from 'react'
import { UTMTracker } from '@/components/UTMTracker'
import { StickyBar } from '@/components/StickyBar'
import { HeroSection } from '@/components/HeroSection'
import { SocialProofBar } from '@/components/SocialProofBar'
import { PainSection } from '@/components/PainSection'
import { SolutionSection } from '@/components/SolutionSection'
import { BetaBenefits } from '@/components/BetaBenefits'
import { SignupForm } from '@/components/SignupForm'
import { HowItWorks } from '@/components/HowItWorks'
import { ICPTabs } from '@/components/ICPTabs'
import { FAQAccordion } from '@/components/FAQAccordion'
import { Footer } from '@/components/Footer'

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
      <SolutionSection />
      <BetaBenefits />

      {/* Second Sign-Up Form — immediately after urgency */}
      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <SignupForm
            id="signup-form-2"
            header="Secure Your Beta Spot"
            subheader="10 seconds. 5 fields. You're in."
            variant="full"
            microcopy="No card required. Beta places are limited."
          />
        </div>
      </section>

      <HowItWorks />

      <Suspense fallback={null}>
        <ICPTabs />
      </Suspense>

      <FAQAccordion />
      <Footer />
    </main>
  )
}
