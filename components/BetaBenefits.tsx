'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import { Rocket, Eye, MessageSquare } from 'lucide-react'

const benefits = [
  {
    icon: Rocket,
    title: 'Source From Day One',
    description: 'Access the live platform immediately. Not a waitlist — a working tool.',
  },
  {
    icon: Eye,
    title: 'First Look at Features',
    description: 'See and use new features before they go public. Stay ahead of every other sourcer.',
  },
  {
    icon: MessageSquare,
    title: 'Shape What Comes Next',
    description: 'Your feedback directly influences the roadmap. Tell us what to build.',
  },
]

function AnimatedCounter({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const controls = animate(0, target, {
      duration: 1.5,
      onUpdate(value) {
        setDisplayValue(Math.round(value))
      },
    })

    return () => controls.stop()
  }, [isInView, target])

  return <span ref={ref}>{displayValue}</span>
}

const TOTAL_SPOTS = 100
const REMAINING = 43
const FILLED = TOTAL_SPOTS - REMAINING
const FILL_PERCENT = (FILLED / TOTAL_SPOTS) * 100

export function BetaBenefits() {
  return (
    <section className="bg-bg-alt px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-[family-name:var(--font-fraunces)] text-2xl font-bold sm:text-3xl"
        >
          Early adopters don&apos;t just test — they lead.
        </motion.h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-border bg-white p-6 text-center shadow-sm"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                <benefit.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-4 text-lg font-bold">{benefit.title}</h3>
              <p className="mt-2 text-sm text-text-muted">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Urgency counter with progress bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-14 max-w-md text-center"
        >
          <p className="text-6xl font-bold text-accent sm:text-7xl">
            <AnimatedCounter target={REMAINING} />
          </p>
          <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-text-muted">
            of {TOTAL_SPOTS} beta places remaining
          </p>
          {/* Progress bar */}
          <div className="mx-auto mt-4 h-3 max-w-xs overflow-hidden rounded-full bg-surface-3">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${FILL_PERCENT}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="h-full rounded-full bg-accent"
            />
          </div>
          <p className="mt-2 text-xs text-text-muted">{FILLED} spots claimed</p>
        </motion.div>
      </div>
    </section>
  )
}
