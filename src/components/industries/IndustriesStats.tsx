'use client'

import React from 'react'
import CountUp from '@/components/CountUp'
import { industryStats } from './industries-data'

export function IndustriesStats() {
  return (
    <section className="bg-surface/40 border-b border-line py-8 sm:py-10">
      <div className="container-section">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {industryStats.map((stat, idx) => (
            <div key={idx} className="border-l-2 border-brand-500 pl-4 sm:pl-5">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-mono text-brand-900 tracking-tight flex items-baseline gap-0.5">
                {stat.prefix}
                <CountUp to={stat.value} duration={2} />
                <span>{stat.suffix}</span>
              </div>
              <div className="text-caption sm:text-small font-bold text-ink-900 mt-1">
                {stat.label}
              </div>
              <div className="text-caption text-ink-500 line-clamp-2 mt-0.5">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
