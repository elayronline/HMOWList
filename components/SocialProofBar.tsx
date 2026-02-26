'use client'

import { motion } from 'framer-motion'

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
        <p className="text-[0.82rem] font-semibold text-text-muted">
          The UK's first sourcing platform built exclusively for HMO professionals.
        </p>
      </div>
    </motion.section>
  )
}
