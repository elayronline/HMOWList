import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

interface WaitlistEntry {
  email: string
  source: string
  timestamp: string
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_term?: string
  utm_content?: string
}

const DATA_DIR = path.join(process.cwd(), 'data')
const WAITLIST_FILE = path.join(DATA_DIR, 'waitlist.json')

async function ensureDataDir() {
  try {
    await fs.access(DATA_DIR)
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true })
  }
}

async function readWaitlist(): Promise<WaitlistEntry[]> {
  try {
    const data = await fs.readFile(WAITLIST_FILE, 'utf-8')
    return JSON.parse(data)
  } catch {
    return []
  }
}

async function writeWaitlist(entries: WaitlistEntry[]) {
  await ensureDataDir()
  await fs.writeFile(WAITLIST_FILE, JSON.stringify(entries, null, 2))
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      email,
      source = 'unknown',
      utm_source,
      utm_medium,
      utm_campaign,
      utm_term,
      utm_content,
    } = body

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

    const entry: WaitlistEntry = {
      email: normalizedEmail,
      source,
      timestamp: new Date().toISOString(),
      ...(utm_source && { utm_source }),
      ...(utm_medium && { utm_medium }),
      ...(utm_campaign && { utm_campaign }),
      ...(utm_term && { utm_term }),
      ...(utm_content && { utm_content }),
    }

    const webhookUrl = process.env.WAITLIST_WEBHOOK_URL

    // If webhook URL is configured, forward the data
    if (webhookUrl) {
      try {
        const webhookResponse = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(entry),
        })

        if (!webhookResponse.ok) {
          console.error('Webhook failed:', await webhookResponse.text())
          // Don't fail the request, still save locally as backup
        }
      } catch (webhookError) {
        console.error('Webhook error:', webhookError)
        // Don't fail the request, still save locally as backup
      }
    }

    // In development or as a backup, save to local file
    if (process.env.NODE_ENV === 'development' || !webhookUrl) {
      const waitlist = await readWaitlist()

      // Check for duplicate
      const exists = waitlist.some((e) => e.email === normalizedEmail)
      if (exists) {
        return NextResponse.json(
          { message: 'You\'re already on the list!', alreadyExists: true },
          { status: 200 }
        )
      }

      waitlist.push(entry)
      await writeWaitlist(waitlist)
    }

    // If no webhook configured in production, still return success
    // (they can check the logs or we save locally as fallback)
    if (!webhookUrl && process.env.NODE_ENV === 'production') {
      console.log('Waitlist signup (no webhook configured):', entry)
    }

    return NextResponse.json(
      { message: 'Successfully joined the waitlist!', success: true },
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

// GET endpoint to retrieve waitlist (dev only)
export async function GET(request: NextRequest) {
  if (process.env.NODE_ENV !== 'development') {
    return NextResponse.json(
      { error: 'Not available in production' },
      { status: 403 }
    )
  }

  try {
    const waitlist = await readWaitlist()
    return NextResponse.json({ count: waitlist.length, entries: waitlist })
  } catch (error) {
    console.error('Error reading waitlist:', error)
    return NextResponse.json(
      { error: 'Failed to read waitlist' },
      { status: 500 }
    )
  }
}
