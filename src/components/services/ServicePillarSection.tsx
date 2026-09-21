'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight, Layers, Cpu, ExternalLink } from 'lucide-react'
import { ServicePillarData } from '@/types'
import { ServiceBadge } from '@/components/ui/ServiceBadge'
import Link from 'next/link'

interface ServicePillarSectionProps {
  pillar: ServicePillarData
  index: number
  showDetailLink?: boolean
}

export function ServicePillarSection({
  pillar,
  index,
  showDetailLink = true,
}: ServicePillarSectionProps) {
  const isEven = index % 2 === 0
  const bgClass = isEven ? 'bg-white' : 'bg-surface/50'

  return (
    <section
      id={pillar.id}
      className={`py-16 sm:py-20 lg:py-24 border-b border-line scroll-mt-20 ${bgClass}`}
    >
      <div className="container-section">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 max-w-4xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <ServiceBadge service={pillar.line} label={pillar.badgeLabel} />
            <span className="text-caption font-mono text-ink-500 uppercase tracking-wider">
              Service Pillar 0{index + 1}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-h2 font-bold text-brand-900 tracking-tight mb-3">
            {pillar.title}
          </h2>

          <p className="text-lg sm:text-lead font-medium text-brand-700 mb-4">
            {pillar.tagline}
          </p>

          <p className="text-body text-ink-500 max-w-prose leading-relaxed">
            {pillar.summary}
          </p>
        </motion.div>

        {/* 4 Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 sm:mb-16">
          {pillar.capabilities.map((cap, capIdx) => (
            <motion.div
              key={capIdx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: capIdx * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white border border-line rounded-card p-6 sm:p-7 hover:border-brand-500 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-caption font-mono text-brand-700 bg-brand-500/10 px-2.5 py-0.5 rounded-full">
                    {cap.tag}
                  </span>
                  <span className="text-caption font-mono text-ink-500">
                    0{capIdx + 1}
                  </span>
                </div>
                <h3 className="text-lg sm:text-h3 font-semibold text-brand-900 mb-2">
                  {cap.title}
                </h3>
                <p className="text-small text-ink-500 leading-relaxed">
                  {cap.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Deliverables & Evidence Dual Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Deliverables & Tech Stack (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white border border-line rounded-card p-6 sm:p-8"
          >
            <div className="flex items-center gap-2 mb-4 text-small font-semibold text-brand-900">
              <Layers className="w-4 h-4 text-brand-500" />
              <span>Concrete Deliverables &amp; Engineering Standards</span>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              {pillar.deliverables.map((item, dIdx) => (
                <li key={dIdx} className="flex items-start gap-2.5 text-small text-ink-900">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>

            {/* Tech Stack Pills */}
            <div className="pt-6 border-t border-line">
              <div className="flex items-center gap-2 mb-3 text-caption font-semibold text-ink-500 uppercase tracking-wider">
                <Cpu className="w-3.5 h-3.5 text-brand-500" />
                <span>Primary Tech Stack</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {pillar.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="inline-flex items-center px-3 py-1 rounded-md bg-surface border border-line text-small font-mono text-brand-900"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Production Evidence Callout (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 bg-brand-900 text-white rounded-card p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between"
          >
            {/* Subtle highlight gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <span className="text-caption font-mono uppercase tracking-wider text-teal-400">
                  Production Evidence
                </span>
                <span className="text-caption text-slate-light">
                  {pillar.evidence.industry}
                </span>
              </div>

              <div className="mb-4">
                <div className="text-2xl sm:text-3xl font-mono font-bold text-white mb-1">
                  {pillar.evidence.metric}
                </div>
                <div className="text-base font-semibold text-teal-200">
                  {pillar.evidence.client}
                </div>
              </div>

              <p className="text-small text-slate-light leading-relaxed mb-6">
                {pillar.evidence.description}
              </p>
            </div>

            <div className="relative pt-4 border-t border-slate-700/60 flex flex-wrap items-center justify-between gap-3">
              <Link
                href={pillar.evidence.link || '/#our-work'}
                className="inline-flex items-center gap-1.5 text-small font-semibold text-teal-400 hover:text-teal-300 transition-colors"
              >
                <span>View project breakdown</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>

              {showDetailLink && (
                <Link
                  href={`/services/${pillar.id}`}
                  className="inline-flex items-center gap-1 text-small font-semibold text-white hover:text-teal-300 transition-colors"
                >
                  <span>Dedicated page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
