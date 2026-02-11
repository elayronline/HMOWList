'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function StickyBar() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const heroSection = document.getElementById('hero')
    if (!heroSection) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting)
      },
      { threshold: 0 }
    )

    observer.observe(heroSection)
    return () => observer.disconnect()
  }, [])

  const scrollToForm = () => {
    const form = document.getElementById('signup-form-2') || document.getElementById('signup-form')
    form?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 right-0 left-0 z-50 bg-accent-dark"
        >
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5 sm:px-6">
            <p className="text-sm font-medium text-white">
              <span className="hidden sm:inline">🟢 Beta places filling fast — Only early adopters get priority access at launch</span>
              <span className="sm:hidden">🟢 Beta places filling fast</span>
            </p>
            <button
              onClick={scrollToForm}
              className="cursor-pointer rounded-lg bg-white px-4 py-1.5 text-sm font-semibold text-accent-dark transition-opacity hover:opacity-90"
            >
              Get Early Access ↓
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
