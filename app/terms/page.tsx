import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service | HMO Hunter',
  description: 'HMO Hunter terms of service. The terms governing your use of the platform.',
}

export default function TermsOfService() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <Link href="/" className="text-sm text-accent hover:underline">
        &larr; Back to home
      </Link>

      <h1 className="mt-8 font-[family-name:var(--font-fraunces)] text-3xl font-bold">
        Terms of Service
      </h1>
      <p className="mt-2 text-sm text-text-muted">Last updated: February 2026</p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-text-muted">
        <section>
          <h2 className="text-lg font-bold text-text">1. About these terms</h2>
          <p className="mt-2">
            These terms of service (&quot;Terms&quot;) govern your use of the HMO Hunter website and platform operated by HMO Hunter Ltd (&quot;HMO Hunter&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;). By signing up for beta access or using our services, you agree to be bound by these Terms.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-text">2. Beta access</h2>
          <p className="mt-2">
            HMO Hunter is currently in beta. By signing up, you acknowledge that:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li>The platform is under active development and may contain bugs or incomplete features</li>
            <li>Features may change, be added, or be removed without prior notice</li>
            <li>Beta access is provided at no cost and may be revoked at our discretion</li>
            <li>Service availability is not guaranteed during the beta period</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-text">3. Your account</h2>
          <p className="mt-2">
            When you sign up, you agree to provide accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-text">4. Acceptable use</h2>
          <p className="mt-2">You agree not to:</p>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li>Use the platform for any unlawful purpose</li>
            <li>Scrape, crawl, or extract data from the platform using automated means</li>
            <li>Attempt to gain unauthorised access to our systems or other users&apos; accounts</li>
            <li>Resell, redistribute, or commercially exploit platform data without our written consent</li>
            <li>Interfere with or disrupt the platform or its infrastructure</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-text">5. Data and accuracy</h2>
          <p className="mt-2">
            HMO Hunter aggregates data from multiple public and proprietary sources. While we take reasonable steps to ensure accuracy, we do not guarantee that all information on the platform is complete, current, or error-free.
          </p>
          <p className="mt-2">
            You should independently verify any information before making investment, procurement, or housing decisions. HMO Hunter is a sourcing tool, not a substitute for professional advice.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-text">6. Intellectual property</h2>
          <p className="mt-2">
            All content, features, and functionality of the HMO Hunter platform, including but not limited to text, graphics, logos, and software, are the property of HMO Hunter Ltd and are protected by UK and international intellectual property laws.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-text">7. Limitation of liability</h2>
          <p className="mt-2">
            To the fullest extent permitted by law, HMO Hunter Ltd shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities, arising from your use of the platform.
          </p>
          <p className="mt-2">
            The platform is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, whether express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-text">8. Termination</h2>
          <p className="mt-2">
            We may suspend or terminate your access to the platform at any time, with or without cause, and with or without notice. You may also stop using the platform at any time.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-text">9. Changes to these terms</h2>
          <p className="mt-2">
            We reserve the right to update these Terms at any time. Changes will be posted on this page with an updated revision date. Continued use of the platform after changes constitutes acceptance of the new terms.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-text">10. Governing law</h2>
          <p className="mt-2">
            These Terms are governed by and construed in accordance with the laws of England and Wales. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-text">11. Contact</h2>
          <p className="mt-2">
            If you have any questions about these Terms, contact us at{' '}
            <a href="mailto:hmohunteruk@gmail.com" className="text-accent hover:underline">
              hello@hmohunter.co.uk
            </a>.
          </p>
        </section>
      </div>
    </main>
  )
}
