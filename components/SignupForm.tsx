'use client'

import { useState } from 'react'
import { getStoredUTMParams } from '@/lib/utm'

import { SuccessState } from './SuccessState'
import { Shield, CheckCircle } from 'lucide-react'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

interface SignupFormProps {
  id: string
  header: string
  subheader: string
  variant?: 'hero' | 'full'
  microcopy?: string
}

const organisationTypes = [
  'Local Authority',
  'Housing Association',
  'Private Investor / Landlord',
  'Council Housing Team',
  'Property Agent / Sourcer',
  'Other',
]

const regions = [
  'London',
  'South East',
  'South West',
  'East of England',
  'West Midlands',
  'East Midlands',
  'Yorkshire & Humber',
  'North West',
  'North East',
  'Wales',
  'Scotland',
  'Northern Ireland',
]

export function SignupForm({ id, header, subheader, variant = 'full', microcopy }: SignupFormProps) {
  const [fullName, setFullName] = useState('')
  const [workEmail, setWorkEmail] = useState('')
  const [organisationName, setOrganisationName] = useState('')
  const [organisationType, setOrganisationType] = useState('')
  const [region, setRegion] = useState('')
  const [state, setState] = useState<FormState>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const isHero = variant === 'hero'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage('')

    if (!fullName.trim() || !workEmail.trim() || !organisationType) {
      setErrorMessage('All fields are required.')
      return
    }

    if (!isHero && (!organisationName.trim() || !region)) {
      setErrorMessage('All fields are required.')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(workEmail)) {
      setErrorMessage('Please enter a valid email address.')
      return
    }

    setState('submitting')

    try {
      const utmParams = getStoredUTMParams()
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: fullName.trim(),
          workEmail: workEmail.trim(),
          organisationName: isHero ? '' : organisationName.trim(),
          organisationType,
          region: isHero ? '' : region,
          utmSource: utmParams.utm_source || '',
        }),
      })

      const data = await response.json()

      if (!data.success) {
        throw new Error(data.error || 'Something went wrong')
      }

      setState('success')
    } catch (error) {
      setState('error')
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.')
    }
  }

  const inputClass =
    'w-full rounded-lg border border-border bg-surface-3 px-4 py-3 text-sm text-text placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent disabled:opacity-50'
  const selectClass =
    'w-full rounded-lg border border-border bg-surface-3 px-4 py-3 text-sm text-text focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent disabled:opacity-50 appearance-none'

  return (
    <div id={id} className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8">
      {state === 'success' ? (
        <SuccessState />
      ) : (
        <>
          <h3 className="text-lg font-bold">{header}</h3>
          <p className="mt-1 text-[0.82rem] text-text-muted">{subheader}</p>

          <form onSubmit={handleSubmit} className="mt-5">
            {isHero ? (
              /* Hero: 3 fields , Name, Email, Organisation Type */
              <div className="space-y-3">
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Full name"
                  className={inputClass}
                  disabled={state === 'submitting'}
                />
                <input
                  type="email"
                  value={workEmail}
                  onChange={(e) => setWorkEmail(e.target.value)}
                  placeholder="Work email"
                  className={inputClass}
                  disabled={state === 'submitting'}
                />
                <select
                  value={organisationType}
                  onChange={(e) => setOrganisationType(e.target.value)}
                  className={selectClass}
                  disabled={state === 'submitting'}
                >
                  <option value="" disabled>
                    Select your organisation type
                  </option>
                  {organisationTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              /* Full: 5 fields , compact 2-col grid */
              <div className="space-y-3">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Full name"
                    className={inputClass}
                    disabled={state === 'submitting'}
                  />
                  <input
                    type="email"
                    value={workEmail}
                    onChange={(e) => setWorkEmail(e.target.value)}
                    placeholder="Work email"
                    className={inputClass}
                    disabled={state === 'submitting'}
                  />
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <input
                    type="text"
                    value={organisationName}
                    onChange={(e) => setOrganisationName(e.target.value)}
                    placeholder="Organisation name"
                    className={inputClass}
                    disabled={state === 'submitting'}
                  />
                  <select
                    value={organisationType}
                    onChange={(e) => setOrganisationType(e.target.value)}
                    className={selectClass}
                    disabled={state === 'submitting'}
                  >
                    <option value="" disabled>
                      Organisation type
                    </option>
                    {organisationTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <select
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className={selectClass}
                  disabled={state === 'submitting'}
                >
                  <option value="" disabled>
                    Select region
                  </option>
                  {regions.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <button
              type="submit"
              disabled={state === 'submitting'}
              className="mt-4 w-full cursor-pointer rounded-lg bg-accent px-6 py-3 font-bold text-white transition-colors hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {state === 'submitting' ? (
                <span className="inline-flex items-center justify-center gap-2">
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Securing your spot...
                </span>
              ) : (
                'Secure My Spot'
              )}
            </button>

            {errorMessage && <p className="mt-2 text-sm text-red-500">{errorMessage}</p>}
            <p className="mt-2 text-center text-[0.78rem] text-text-muted">
              {microcopy || 'Register now. You\u2019ll only be charged when the beta goes live.'}
            </p>
          </form>

          {/* What you get */}
          <div className="mt-4 space-y-1.5">
            {[
              'Find compliant HMOs in minutes, not hours',
              'Built for placements, compliance, stock management, and investment',
              'Shape the platform around how your team actually works',
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                <p className="text-xs text-text-muted">{item}</p>
              </div>
            ))}
          </div>

          {/* GDPR / Trust signal */}
          <div className="mt-4 flex items-center justify-center gap-1.5">
            <Shield className="h-3.5 w-3.5 text-text-muted" />
            <p className="text-[0.7rem] text-text-muted">
              GDPR compliant. Your data is encrypted and never shared.
            </p>
          </div>
          {isHero && (
            <p className="mt-2 text-center text-xs font-semibold text-accent">
              No payment until the beta goes live.
            </p>
          )}
        </>
      )}
    </div>
  )
}
