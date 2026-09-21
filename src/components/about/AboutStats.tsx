'use client'

import React from 'react'
import CountUp from '@/components/CountUp'

const aboutStatsList = [
  {
    value: 100,
    prefix: '',
    suffix: '%',
    label: 'In-House Team',
    detail: 'Zero outsourcing; direct access to product architects.',
  },
  {
    value: 8,
    prefix: '',
    suffix: '-Stage',
    label: 'Disciplined Framework',
    detail: 'Structured execution from discovery to production scale.',
  },
  {
    value: 1,
    displayOverride: 'HQ',
    prefix: 'Chennai',
    suffix: '',
    label: 'Global Delivery Base',
    detail: 'International delivery standards from Chennai, India.',
  },
  {
    value: 100,
    prefix: '',
    suffix: '% IP',
    label: 'Full Client Ownership',
    detail: 'Complete codebases, schemas & deployment runbooks.',
  },
]

export function AboutStats() {
  return (
    <section className="bg-surface border-b border-line py-8 sm:py-10">
      <div className="container-section">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-line">
          {aboutStatsList.map((stat, idx) => (
            <div key={idx} className={idx > 0 ? 'pt-4 sm:pt-0 sm:pl-6 lg:pl-8' : ''}>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-mono text-slate-900 tracking-tight flex items-baseline gap-0.5">
                {stat.displayOverride ? (
                  <span>
                    {stat.prefix} <span className="text-cta text-2xl sm:text-3xl">{stat.displayOverride}</span>
                  </span>
                ) : (
                  <>
                    {stat.prefix}
                    <CountUp to={stat.value} duration={2} />
                    <span>{stat.suffix}</span>
                  </>
                )}
              </div>
              <div className="text-caption sm:text-small font-bold text-slate-900 mt-1">
                {stat.label}
              </div>
              <div className="text-caption text-slate-500 line-clamp-2 mt-0.5">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
