'use client'

import React from 'react'
import { motion } from 'framer-motion'
import CountUp from '@/components/CountUp'

interface StatItem {
  value: number
  suffix: string
  label: string
  detail: string
}

const statsData: StatItem[] = [
  {
    value: 3,
    suffix: '-Week',
    label: 'Average MVP launch',
    detail: 'From scope to production',
  },
  {
    value: 40,
    suffix: '%',
    label: 'Checkout speed boost',
    detail: 'Checkout latency reduction',
  },
  {
    value: 12,
    suffix: '+ hrs',
    label: 'Saved / week via AI',
    detail: 'Operator hours reclaimed',
  },
  {
    value: 99.9,
    suffix: '%',
    label: 'Uptime SLA standard',
    detail: 'Guaranteed cloud availability',
  },
]

export function ServicesStats() {
  return (
    <section className="bg-white border-b border-line py-10 sm:py-14">
      <div className="container-section">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {statsData.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col pt-4 border-t border-line/70"
            >
              <div className="flex items-baseline gap-1 mb-1.5">
                <CountUp
                  to={stat.value}
                  from={0}
                  duration={2}
                  className="font-mono text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-900 tracking-tight"
                />
                <span className="font-mono text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-900 tracking-tight">
                  {stat.suffix}
                </span>
              </div>
              <p className="text-small sm:text-body font-semibold text-ink-900 leading-snug">
                {stat.label}
              </p>
              <p className="text-caption text-ink-500 mt-1 leading-normal">
                {stat.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

