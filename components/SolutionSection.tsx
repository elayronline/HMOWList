'use client'

import { motion } from 'framer-motion'
import { Map, CheckCircle, BarChart3, Home, Search, Zap } from 'lucide-react'

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
    icon: Search,
    title: 'Spot Conversion Opportunities',
    description: 'Surface properties with HMO potential based on room count, property size, local regulations, and area rules — not just what\u2019s already licensed.',
  },
  {
    icon: Home,
    title: 'Beyond Listings',
    description: 'We analyse title data, property sources, and regulatory conditions to find opportunities that aren\u2019t on anyone else\u2019s radar.',
  },
  {
    icon: BarChart3,
    title: 'Viability at a Glance',
    description: 'Yield estimates, compliance status, and property data — assess any HMO opportunity before you pick up the phone.',
  },
  {
    icon: Zap,
    title: 'Every HMO Interest, One Platform',
    description: 'Whether you\u2019re placing tenants, assessing compliance, sourcing investments, or managing stock — HMO Hunter is built for how you actually work.',
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
            One platform. One search. Only compliant results.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-muted">
            HMO Hunter brings together compliance data, licensing, property listings, title records,
            and regulatory intelligence — so you find viable HMO opportunities, not dead ends.
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
