'use client'

import { motion } from 'framer-motion'
import { UserPlus, Mail, Rocket } from 'lucide-react'

const steps = [
  {
    icon: UserPlus,
    step: '1',
    title: 'Sign up',
    description: '10 seconds. Just your name, email, and role.',
  },
  {
    icon: Mail,
    step: '2',
    title: 'Get your access email',
    description: 'Within 48 hours with everything you need.',
  },
  {
    icon: Rocket,
    step: '3',
    title: 'Start sourcing',
    description: 'You\'ll receive an access link in your email when beta goes live. Click it and start finding viable HMOs immediately.',
  },
]

export function HowItWorks() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center font-[family-name:var(--font-fraunces)] text-2xl font-bold sm:text-3xl">
          What happens next?
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white text-lg font-bold">
                {s.step}
              </div>
              <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
              <p className="mt-1 text-sm text-text-muted">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
