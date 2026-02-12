'use client'

import { useState } from 'react'
import { CheckCircle, Linkedin, Copy, Mail } from 'lucide-react'

export function SuccessState() {
  const [copied, setCopied] = useState(false)

  const pageUrl = typeof window !== 'undefined' ? window.location.href : 'https://hmohunter.com'

  const handleCopyLink = () => {
    navigator.clipboard.writeText(pageUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`
  const emailSubject = encodeURIComponent('HMO Hunter Beta')
  const emailBody = encodeURIComponent(
    `I just signed up for early access to HMO Hunter , a new UK platform built for HMO sourcing. If you source HMOs for a council, housing association, or as a private investor, worth a look: ${pageUrl}`
  )

  return (
    <div className="text-center">
      <CheckCircle className="mx-auto h-14 w-14 text-accent" />
      <h3 className="mt-4 font-[family-name:var(--font-fraunces)] text-2xl font-bold">
        You&apos;re In.
      </h3>
      <p className="mt-2 text-sm text-text-muted">
        Welcome to HMO Hunter. We&apos;ll email you within 48 hours with your access details and
        everything you need to get started.
      </p>

      <div className="mt-6 border-t border-border pt-6">
        <p className="font-semibold">Know someone who should be on this list?</p>
        <p className="mt-1 text-sm text-text-muted">
          Share HMO Hunter with a colleague and help them get ahead too.
        </p>
        <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-center">
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-surface-3 px-4 py-2 text-sm font-medium text-text transition-colors hover:bg-border"
          >
            <Linkedin className="h-4 w-4" />
            Share on LinkedIn
          </a>
          <button
            onClick={handleCopyLink}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-surface-3 px-4 py-2 text-sm font-medium text-text transition-colors hover:bg-border"
          >
            <Copy className="h-4 w-4" />
            {copied ? 'Copied!' : 'Copy Link'}
          </button>
          <a
            href={`mailto:?subject=${emailSubject}&body=${emailBody}`}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-surface-3 px-4 py-2 text-sm font-medium text-text transition-colors hover:bg-border"
          >
            <Mail className="h-4 w-4" />
            Email a Colleague
          </a>
        </div>
      </div>
    </div>
  )
}
