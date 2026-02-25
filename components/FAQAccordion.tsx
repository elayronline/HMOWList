'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: 'What is HMO Hunter?',
    answer:
      'HMO Hunter is the UK\'s first dedicated sourcing platform for Houses in Multiple Occupation. It brings together compliance data, licensing status, Article 4 mapping, and property search into one place — so housing professionals can find compliant HMOs and act on them faster than ever.',
  },
  {
    question: 'Who is HMO Hunter for?',
    answer:
      'Local authority HMO sourcers, housing associations, private investors and landlords, council housing teams, and property agents sourcing temporary, shared, social, or student accommodation.',
  },
  {
    question: 'What does "beta access" mean?',
    answer:
      'You get access to the live working platform from day one. You can source real properties immediately. As an early adopter, you also get first look at new features and a direct voice in shaping the product roadmap.',
  },
  {
    question: 'How much does it cost?',
    answer:
      'Beta users get full Pro access for just £19/month — and that rate is locked in forever, even after launch when the price increases significantly. This is the lowest price HMO Hunter will ever be offered at, and it\u2019s only available to the first 100 users.',
  },
  {
    question: 'How is this different from Rightmove, Zoopla, or council registers?',
    answer:
      "Those platforms weren't built for HMO professionals. HMO Hunter is purpose-built for HMO sourcing , with compliance checks, licensing data, Article 4 mapping, and yield analysis integrated directly into every search. You only see opportunities that are actually viable.",
  },
  {
    question: 'What data does HMO Hunter use?',
    answer:
      'We aggregate and verify data from multiple public and proprietary sources including council licensing registers, planning databases, EPC records, and market intelligence to give you the most complete picture of every HMO opportunity.',
  },
  {
    question: 'When will I get access after signing up?',
    answer:
      "Once you sign up, you'll receive an email with your payment and access link as soon as the beta is live. Keep an eye on your inbox — we'll let you know as soon as it's ready.",
  },
]

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center font-[family-name:var(--font-fraunces)] text-2xl font-bold sm:text-3xl">
          Frequently Asked Questions
        </h2>
        <div className="mt-10 space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-xl border border-border bg-white shadow-sm">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full cursor-pointer items-center justify-between p-5 text-left"
              >
                <span className="pr-4 font-semibold">{faq.question}</span>
                {openIndex === i ? (
                  <Minus className="h-5 w-5 shrink-0 text-accent" />
                ) : (
                  <Plus className="h-5 w-5 shrink-0 text-text-muted" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm leading-relaxed text-text-muted">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
