'use client'

import { motion } from 'framer-motion'
import { FILLED } from '@/lib/constants'

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
          Trusted by <span className="font-bold text-accent">{FILLED}</span> housing professionals across local authorities, housing associations, private investors, and council teams.
        </p>
      </div>
    </motion.section>
  )
}
