'use client'

import { motion } from 'framer-motion'

const badges = [
  'Local Authorities',
  'Housing Associations',
  'Private Investors',
  'Council Housing Teams',
]

export function SocialProofBar() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
    >
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-[0.78rem] font-semibold uppercase tracking-widest text-text-muted">
          Built for professionals sourcing across
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          {badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-border bg-white px-5 py-2 text-[0.82rem] font-semibold text-text-muted"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
