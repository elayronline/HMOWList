'use client'

import { motion } from 'framer-motion'
import { Map, CheckCircle, BarChart3, Home, Bell, Zap } from 'lucide-react'

const features = [
  {
    icon: Map,
    title: 'Article 4 Mapping',
    description: 'See Article 4 zones overlaid on every search. Never waste time on restricted areas.',
  },
  {
    icon: CheckCircle,
    title: 'Compliance Built In',
    description: 'Licensing status, HMO compliance data, and regulatory checks — done automatically.',
  },
  {
    icon: BarChart3,
    title: 'Yield Projections',
    description: 'Instant yield estimates so you can assess viability before you even visit.',
  },
  {
    icon: Home,
    title: 'All Housing Types',
    description: 'Temporary, shared, social, and student housing — all searchable in one place.',
  },
  {
    icon: Bell,
    title: 'Untapped Opportunities',
    description:
      "Spot properties with HMO conversion potential that aren't on anyone else's radar yet.",
  },
  {
    icon: Zap,
    title: 'Move First',
    description:
      'Verified data means faster decisions. See it, assess it, act on it — before your competitors.',
  },
]

export function SolutionSection() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-[family-name:var(--font-fraunces)] text-2xl font-bold sm:text-3xl">
            One platform. One search. Only viable opportunities.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-muted">
            HMO Hunter brings together everything you need to source HMOs and spot untapped
            opportunities — without the spreadsheet chaos.
          </p>
        </motion.div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-border bg-white p-6 text-center shadow-sm"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                <feature.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-4 text-lg font-bold">{feature.title}</h3>
              <p className="mt-2 text-sm text-text-muted">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
