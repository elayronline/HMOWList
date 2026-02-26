'use client'

import { motion } from 'framer-motion'
import { X, Check } from 'lucide-react'

const before = [
  'Juggle 5+ platforms to find one property',
  'Manually check licensing and Article 4 status',
  'Waste hours on non-compliant dead ends',
  'Miss conversion opportunities hidden in plain sight',
  'Track everything in spreadsheets that don\u2019t scale',
]

const after = [
  'One search across compliance data, listings, and title records',
  'Licensing, Article 4, EPC, and regulation checks built in',
  'Surface HMO conversion potential based on room sizes, property layout, and local rules',
  'Source faster — whether placing tenants, assessing stock, or closing deals',
  'Export-ready results your team can act on immediately',
]

export function BeforeAfter() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center font-[family-name:var(--font-fraunces)] text-2xl font-bold sm:text-3xl">
          What changes when you switch?
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {/* Before */}
          <div className="rounded-xl border border-red-200 bg-red-50/50 p-6">
            <p className="text-sm font-bold uppercase tracking-widest text-red-400">Without HMO Hunter</p>
            <ul className="mt-5 space-y-3">
              {before.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                  <span className="text-sm text-text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* After */}
          <div className="rounded-xl border border-accent/30 bg-accent/5 p-6">
            <p className="text-sm font-bold uppercase tracking-widest text-accent">With HMO Hunter</p>
            <ul className="mt-5 space-y-3">
              {after.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span className="text-sm text-text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
