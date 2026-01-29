import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      name,
      email,
      industry,
      source = 'unknown',
      utm_source,
      utm_medium,
      utm_campaign,
      utm_term,
      utm_content,
    } = body

    // Validate name
    if (!name || typeof name !== 'string' || !name.trim()) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      )
    }

    // Validate email
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    const normalizedEmail = email.toLowerCase().trim()

    if (!isValidEmail(normalizedEmail)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    // Validate industry
    if (!industry || typeof industry !== 'string') {
      return NextResponse.json(
        { error: 'Industry is required' },
        { status: 400 }
      )
    }

    // Check for duplicate
    const { data: existing } = await supabase
      .from('waitlist')
      .select('email')
      .eq('email', normalizedEmail)
      .single()

    if (existing) {
      return NextResponse.json(
        { message: "You're already on the list!", alreadyExists: true },
        { status: 200 }
      )
    }

    // Insert into Supabase
    const { error } = await supabase.from('waitlist').insert({
      name: name.trim(),
      email: normalizedEmail,
      industry,
      source,
      utm_source: utm_source || null,
      utm_medium: utm_medium || null,
      utm_campaign: utm_campaign || null,
      utm_term: utm_term || null,
      utm_content: utm_content || null,
    })

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Something went wrong. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Successfully joined the waiting list!', success: true },
      { status: 201 }
    )
  } catch (error) {
    console.error('Waitlist error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
