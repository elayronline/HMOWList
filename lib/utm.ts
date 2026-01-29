/**
 * UTM parameter handling utilities
 */

export type UTMParams = {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_term?: string
  utm_content?: string
}

/**
 * Extract UTM parameters from URL search params
 */
export function getUTMParams(searchParams: URLSearchParams): UTMParams {
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const
  const params: UTMParams = {}

  for (const key of utmKeys) {
    const value = searchParams.get(key)
    if (value) {
      params[key] = value
    }
  }

  return params
}

/**
 * Store UTM params in sessionStorage for persistence across page navigations
 */
export function storeUTMParams(params: UTMParams): void {
  if (typeof window !== 'undefined' && Object.keys(params).length > 0) {
    sessionStorage.setItem('utm_params', JSON.stringify(params))
  }
}

/**
 * Retrieve stored UTM params from sessionStorage
 */
export function getStoredUTMParams(): UTMParams {
  if (typeof window === 'undefined') return {}

  const stored = sessionStorage.getItem('utm_params')
  if (!stored) return {}

  try {
    return JSON.parse(stored)
  } catch {
    return {}
  }
}
