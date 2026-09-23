'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

type CaseStudyCardProps = {
  industry: string
  title: string
  challenge: string
  impact: string
  className?: string
  delay?: number
}

export function CaseStudyCard({ industry, title, challenge, impact, className, delay = 0 }: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -4 }}
      className={cn(
        'bg-white border border-line rounded-card p-8 hover:border-brand-500 transition-all duration-300 group flex flex-col',
        className
      )}
    >
      <div className="inline-flex items-center rounded-badge bg-brand-500/10 text-brand-700 px-3 py-1 text-badge mb-4 self-start">
        {industry}
      </div>

      <h3 className="text-h3 text-brand-900 mb-3">{title}</h3>

      <p className="text-body text-ink-500 mb-6 flex-grow">{challenge}</p>

      <div className="pt-4 border-t border-line">
        <p className="text-small font-medium text-gold-600 uppercase tracking-wide mb-1">Impact</p>
        <p className="text-body text-ink-900">{impact}</p>
      </div>
    </motion.div>
  )
}
