import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy | HMO Hunter',
  description: 'HMO Hunter privacy policy. How we collect, use, and protect your data.',
}

export default function PrivacyPolicy() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <Link href="/" className="text-sm text-accent hover:underline">
        &larr; Back to home
      </Link>

      <h1 className="mt-8 font-[family-name:var(--font-fraunces)] text-3xl font-bold">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-text-muted">Last updated: February 2026</p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-text-muted">
        <section>
          <h2 className="text-lg font-bold text-text">1. Who we are</h2>
          <p className="mt-2">
            HMO Hunter Ltd (&quot;HMO Hunter&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates the website hmohunter.com. We are committed to protecting your personal data and your privacy. This policy explains how we collect, use, and safeguard your information when you visit our website or sign up for beta access.
          </p>
          <p className="mt-2">
            For any questions about this policy, contact us at{' '}
            <a href="mailto:hello@hmohunter.com" className="text-accent hover:underline">
              hello@hmohunter.com
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-text">2. What data we collect</h2>
          <p className="mt-2">When you sign up for beta access, we collect:</p>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li>Full name</li>
            <li>Work email address</li>
            <li>Organisation name</li>
            <li>Organisation type</li>
            <li>Region</li>
          </ul>
          <p className="mt-2">We also automatically collect:</p>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li>UTM parameters (to understand how you found us)</li>
            <li>Basic analytics data via Google Analytics (pages visited, device type, browser)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-text">3. How we use your data</h2>
          <p className="mt-2">We use your personal data to:</p>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li>Provide you with beta access to the HMO Hunter platform</li>
            <li>Send you access details and onboarding information</li>
            <li>Communicate updates about the platform, including new features</li>
            <li>Understand our user base and improve the product</li>
            <li>Respond to your enquiries</li>
          </ul>
          <p className="mt-2">
            We will not sell, rent, or share your personal data with third parties for marketing purposes.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-text">4. Legal basis for processing</h2>
          <p className="mt-2">We process your data on the following legal bases under UK GDPR:</p>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li><strong>Consent:</strong> When you submit the sign-up form, you consent to us processing your data for the purposes described above.</li>
            <li><strong>Legitimate interest:</strong> To improve our services and communicate relevant product updates.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-text">5. Third-party services</h2>
          <p className="mt-2">We use the following third-party services that may process your data:</p>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li><strong>Google Analytics:</strong> For website usage analytics</li>
            <li><strong>Google Sheets:</strong> For storing sign-up data</li>
            <li><strong>Meta (Facebook) Pixel:</strong> For advertising measurement</li>
            <li><strong>LinkedIn Insight Tag:</strong> For advertising measurement</li>
          </ul>
          <p className="mt-2">
            Each of these services has their own privacy policies governing their use of data.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-text">6. Data retention</h2>
          <p className="mt-2">
            We retain your personal data for as long as your account is active or as needed to provide you with our services. If you request deletion of your data, we will remove it within 30 days.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-text">7. Your rights</h2>
          <p className="mt-2">Under UK GDPR, you have the right to:</p>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Withdraw consent at any time</li>
            <li>Object to processing based on legitimate interest</li>
            <li>Request data portability</li>
          </ul>
          <p className="mt-2">
            To exercise any of these rights, email us at{' '}
            <a href="mailto:hello@hmohunter.com" className="text-accent hover:underline">
              hello@hmohunter.com
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-text">8. Cookies</h2>
          <p className="mt-2">
            Our website uses cookies for analytics and advertising measurement. These include cookies set by Google Analytics, Meta Pixel, and LinkedIn Insight Tag. You can manage cookie preferences through your browser settings.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-text">9. Data security</h2>
          <p className="mt-2">
            We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. All data is transmitted over encrypted connections (HTTPS).
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-text">10. Changes to this policy</h2>
          <p className="mt-2">
            We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
          </p>
        </section>
      </div>
    </main>
  )
}
