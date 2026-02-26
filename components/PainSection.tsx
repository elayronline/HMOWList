'use client'

import { motion } from 'framer-motion'
import { Search, TrendingDown, ClipboardList, Clock } from 'lucide-react'

const pains = [
  {
    icon: Search,
    title: '5 Tabs, Zero Answers',
    description:
      "Property portals, council registers, planning portals, EPC databases — all open in different tabs, none talking to each other. You're stitching together data that should be in one place.",
  },
  {
    icon: TrendingDown,
    title: 'Dead Ends Everywhere',
    description:
      'Half the properties you find are already gone, non-compliant, or sitting in an Article 4 zone. Hours wasted before you even pick up the phone.',
  },
  {
    icon: ClipboardList,
    title: 'Compliance by Spreadsheet',
    description:
      'Licensing checks, planning history, HMO registers. Your team is doing it all manually, property by property. It doesn\u2019t scale.',
  },
  {
    icon: Clock,
    title: 'People Waiting While You Search',
    description:
      "Whether it\u2019s a tenant waiting to be housed, a deal slipping away, or a target being missed \u2014 slow sourcing has real consequences.",
  },
]

export function PainSection() {
  return (
    <section className="bg-bg-alt px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-[family-name:var(--font-fraunces)] text-2xl font-bold sm:text-3xl"
        >
          Still sourcing HMOs the hard way?
        </motion.h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {pains.map((pain, i) => (
            <motion.div
              key={pain.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-border bg-white p-6 text-center shadow-sm"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                <pain.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-4 text-lg font-bold">{pain.title}</h3>
              <p className="mt-2 text-sm text-text-muted">{pain.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
