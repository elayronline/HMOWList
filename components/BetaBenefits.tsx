'use client'

import { motion } from 'framer-motion'
import { Rocket, Eye, MessageSquare } from 'lucide-react'
import { TOTAL_SPOTS } from '@/lib/constants'

const benefits = [
  {
    icon: Rocket,
    title: 'Source Before Anyone Else',
    description: 'While other sourcers wait for launch, you\u2019re already finding opportunities. Every week on the platform early is a week ahead of your competition.',
  },
  {
    icon: Eye,
    title: 'Lowest Rate We\u2019ll Ever Offer',
    description: 'Beta users pay \u00a319/mo and keep that rate forever. After launch, the price goes up \u2014 but yours never will.',
  },
  {
    icon: MessageSquare,
    title: 'Built Around You',
    description: 'Beta users have a direct line to the team. What you need, we build. You\u2019re not just using the platform \u2014 you\u2019re shaping it.',
  },
]

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
          Why join the beta?
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

        {/* Beta spots callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-14 max-w-lg text-center"
        >
          <p className="font-[family-name:var(--font-fraunces)] text-xl font-bold sm:text-2xl">
            First {TOTAL_SPOTS} users shape the platform
          </p>
          <p className="mt-3 text-sm text-text-muted">
            Your feedback directly influences what we build. Early users get Pro access at £19/mo — locked in permanently.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
