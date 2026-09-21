'use client'

import React from 'react'
import CountUp from '@/components/CountUp'
import { telemetryMetrics } from './our-work-data'

export function OurWorkStats() {
  return (
    <section className="bg-surface/30 border-b border-line py-8 sm:py-10">
      <div className="container-section">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {telemetryMetrics.map((metric, idx) => (
            <div key={idx} className="border-l-2 border-brand-500 pl-4">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-brand-900 tracking-tight flex items-baseline gap-0.5">
                <CountUp to={metric.value} duration={metric.duration ?? 2} />
                <span>{metric.suffix}</span>
              </div>
              <div className="text-caption font-semibold text-ink-700 mt-0.5">{metric.label}</div>
              <div className="text-caption text-ink-500">{metric.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
