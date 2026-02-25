'use client'

import { VideoPlayer } from './VideoPlayer'
import { SignupForm } from './SignupForm'

export function HeroSection() {
  return (
    <section id="hero" className="px-4 pt-12 pb-16 sm:px-6 sm:pt-20 sm:pb-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Headline , always on top */}
        <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-0 lg:hidden">
          <h1 className="font-[family-name:var(--font-fraunces)] text-3xl font-black leading-tight text-text">
            Find Compliant HMOs. Source Smarter. Move Faster.
          </h1>
          <p className="mt-4 text-base text-text-muted">
            Cut HMO sourcing from hours to minutes. Search compliance data, licensing status,
            Article 4 zones, and 300+ council registers — all in one place.
          </p>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left Column , Desktop: headline + video, Mobile: form first */}
          <div className="order-2 lg:order-1">
            {/* Desktop headline (hidden on mobile since shown above) */}
            <div className="hidden lg:block">
              <h1 className="font-[family-name:var(--font-fraunces)] text-[2.8rem] font-black leading-tight text-text">
                Find Compliant HMOs. Source Smarter. Move Faster.
              </h1>
              <p className="mt-5 text-base text-text-muted">
                Cut HMO sourcing from hours to minutes. Search 300+ council registers, licensing
                status, Article 4 zones, and yield projections — all in one place.
              </p>
            </div>
            <div className="lg:mt-8">
              <VideoPlayer />
            </div>
          </div>

          {/* Right Column , Form (shows first on mobile via order) */}
          <div className="order-1 lg:order-2">
            <SignupForm
              id="signup-form"
              header="Get Early Beta Access"
              subheader="Be one of 100 professionals to trial the platform before public launch."
              variant="hero"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
