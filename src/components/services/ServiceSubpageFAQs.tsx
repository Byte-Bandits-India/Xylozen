'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export interface FAQItem {
  question: string
  answer: string
}

interface ServiceSubpageFAQsProps {
  title?: string
  subtitle?: string
  faqs: FAQItem[]
}

export function ServiceSubpageFAQs({
  title = 'Frequently Asked Technical Questions',
  subtitle = 'Clear answers about IP ownership, architecture, and deployment standards.',
  faqs,
}: ServiceSubpageFAQsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (idx: number) => {
    setOpenIndex((current) => (current === idx ? null : idx))
  }

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-line">
      <div className="container-section max-w-4xl">
        <div className="mb-10 text-center sm:text-left">
          <span className="text-badge font-mono uppercase tracking-wider text-brand-500 mb-2 block">
            TECHNICAL DUE DILIGENCE
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-900 tracking-tight mb-2">
            {title}
          </h2>
          <p className="text-small sm:text-body text-ink-500">
            {subtitle}
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className="border border-line rounded-xl overflow-hidden transition-colors hover:border-brand-500/40"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-5 text-left bg-surface/30 hover:bg-surface/60 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-brand-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-ink-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-brand-500' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="p-5 pt-3 text-small text-ink-500 leading-relaxed bg-white border-t border-line/60">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
