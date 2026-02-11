import { NextRequest, NextResponse } from 'next/server'
import { appendToSheet } from '@/lib/google-sheets'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { fullName, workEmail, organisationName, organisationType, region, utmSource } = body

    if (!fullName || !workEmail || !organisationType) {
      return NextResponse.json(
        { success: false, error: 'All fields are required.' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(workEmail)) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid email address.' },
        { status: 400 }
      )
    }

    const timestamp = new Date().toLocaleString('en-GB', {
      timeZone: 'Europe/London',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })

    await appendToSheet([
      [timestamp, fullName, workEmail, organisationName || '', organisationType, region || '', utmSource || ''],
    ])

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Signup error:', error)
    return NextResponse.json(
      { success: false, error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
