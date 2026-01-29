'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { getUTMParams, storeUTMParams } from '@/lib/utm'

export function UTMTracker() {
  const searchParams = useSearchParams()

  useEffect(() => {
    const utmParams = getUTMParams(searchParams)
    storeUTMParams(utmParams)
  }, [searchParams])

  return null
}
