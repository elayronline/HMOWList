/**
 * Analytics helper functions
 * Replace these implementations with your analytics provider (e.g., Plausible, Fathom, GA4)
 */

export type AnalyticsEvent = {
  name: string
  properties?: Record<string, string | number | boolean>
}

/**
 * Track a custom event
 */
export function trackEvent(event: AnalyticsEvent): void {
  // Placeholder: integrate your analytics provider here
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
    console.log('[Analytics Event]', event.name, event.properties)
  }

  // Example: Plausible
  // if (typeof window !== 'undefined' && (window as any).plausible) {
  //   (window as any).plausible(event.name, { props: event.properties })
  // }

  // Example: Google Analytics 4
  // if (typeof window !== 'undefined' && (window as any).gtag) {
  //   (window as any).gtag('event', event.name, event.properties)
  // }
}

/**
 * Track page view
 */
export function trackPageView(url: string): void {
  trackEvent({ name: 'pageview', properties: { url } })
}

/**
 * Track waitlist signup
 */
export function trackWaitlistSignup(source?: string): void {
  trackEvent({
    name: 'waitlist_signup',
    properties: { source: source || 'direct' }
  })
}

/**
 * Track CTA click
 */
export function trackCTAClick(ctaName: string): void {
  trackEvent({ name: 'cta_click', properties: { cta: ctaName } })
}
