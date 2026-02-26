'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'

const tabs = [
  {
    key: 'la',
    label: 'Local Authority Sourcers',
    content:
      'Stop wasting hours on non-compliant properties. HMO Hunter filters by licensing status, Article 4 zones, and compliance data — and surfaces conversion opportunities based on room sizes and local regulations. Source faster, meet targets, house people sooner.',
  },
  {
    key: 'ha',
    label: 'Housing Associations',
    content:
      'Build a scalable HMO pipeline without the spreadsheet chaos. Search verified housing stock across temporary, shared, and social lets — with compliance data, conversion potential analysis, and yield projections built in. Procurement-ready intelligence in one place.',
  },
  {
    key: 'investor',
    label: 'Private Investors & Landlords',
    content:
      'Find high-yield HMOs and spot conversion opportunities before the market does. Yield projections, Article 4 mapping, room size analysis, and verified compliance data — so every deal you pursue is worth your time and capital.',
  },
  {
    key: 'council',
    label: 'Council Housing Teams',
    content:
      'House vulnerable tenants faster with verified HMO data. Source compliant temporary and shared accommodation — and identify properties with conversion potential based on size and local regulations. One search. Verified results. Faster placements.',
  },
]

export function ICPTabs() {
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    const icp = searchParams.get('icp')
    if (icp) {
      const idx = tabs.findIndex((t) => t.key === icp)
      if (idx >= 0) setActiveTab(idx)
    }
  }, [searchParams])

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-bg-alt px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-[family-name:var(--font-fraunces)] text-2xl font-bold sm:text-3xl">
          Built For You
        </h2>

        {/* Desktop: Tabs */}
        <div className="mt-10 hidden lg:block">
          <div className="flex border-b border-border">
            {tabs.map((tab, i) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(i)}
                className={`cursor-pointer px-6 py-3 text-sm font-semibold transition-colors ${
                  activeTab === i
                    ? 'border-b-2 border-accent text-accent-dark'
                    : 'text-text-muted hover:text-text'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="mt-6 rounded-xl border border-border bg-white p-8 shadow-sm">
            <p className="text-text-muted leading-relaxed">{tabs[activeTab].content}</p>
          </div>
        </div>

        {/* Mobile: Stacked */}
        <div className="mt-8 space-y-4 lg:hidden">
          {tabs.map((tab) => (
            <div key={tab.key} className="rounded-xl border border-border bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-accent-dark">{tab.label}</h3>
              <p className="mt-2 text-sm text-text-muted leading-relaxed">{tab.content}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
