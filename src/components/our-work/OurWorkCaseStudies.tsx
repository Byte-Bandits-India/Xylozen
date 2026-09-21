'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Check,
  ArrowRight,
  ChevronDown,
  Zap,
} from 'lucide-react'
import CountUp from '@/components/CountUp'
import { ServiceArchitectureLogo } from '@/components/ui/ServiceArchitectureLogo'
import { TechLogo } from '@/components/ui/TechLogo'
import { flagshipCaseStudies } from './our-work-data'

interface ProjectCanvasConfig {
  sourceFeeds: {
    title: string
  }[]
  dashboardTitle: string
  statMetric: {
    value: number
    prefix?: string
    suffix: string
    label: string
  }
  chartBars: { color: string; height: string }[]
  teamAvatars: { initials: string; bg: string }[]
}

const canvasConfigs: Record<string, ProjectCanvasConfig> = {
  'titan-tata': {
    sourceFeeds: [
      { title: 'Optical Diagnostic Devices' },
      { title: 'Optometrist Video Hub' },
      { title: 'Storefront Retail POS' },
    ],
    dashboardTitle: 'Platform overview',
    statMetric: {
      value: 100,
      suffix: '%',
      label: 'Remote Exam Coverage',
    },
    chartBars: [
      { color: 'bg-indigo-500', height: 'h-12' },
      { color: 'bg-amber-400', height: 'h-8' },
      { color: 'bg-rose-400', height: 'h-10' },
      { color: 'bg-emerald-400', height: 'h-7' },
      { color: 'bg-blue-500', height: 'h-11' },
      { color: 'bg-violet-400', height: 'h-6' },
    ],
    teamAvatars: [
      { initials: 'TT', bg: 'bg-indigo-600' },
      { initials: 'OP', bg: 'bg-emerald-600' },
      { initials: 'XZ', bg: 'bg-slate-900' },
    ],
  },
  hireai: {
    sourceFeeds: [
      { title: 'Multilingual Resume Ingest' },
      { title: 'Semantic Skill Taxonomy' },
      { title: 'Candidate Ranking Engine' },
    ],
    dashboardTitle: 'Pipeline overview',
    statMetric: {
      value: 12,
      suffix: ' hrs/wk',
      label: 'Recruiter Time Saved',
    },
    chartBars: [
      { color: 'bg-emerald-500', height: 'h-12' },
      { color: 'bg-teal-400', height: 'h-9' },
      { color: 'bg-indigo-400', height: 'h-11' },
      { color: 'bg-amber-400', height: 'h-7' },
      { color: 'bg-blue-500', height: 'h-10' },
      { color: 'bg-rose-400', height: 'h-6' },
    ],
    teamAvatars: [
      { initials: 'HR', bg: 'bg-emerald-600' },
      { initials: 'AI', bg: 'bg-indigo-600' },
      { initials: 'XZ', bg: 'bg-slate-900' },
    ],
  },
  'vision-safety': {
    sourceFeeds: [
      { title: 'Multi-Site CCTV RTSP' },
      { title: 'Edge GPU Inference' },
      { title: 'Safety Violation Dispatch' },
    ],
    dashboardTitle: 'Safety monitor overview',
    statMetric: {
      value: 24,
      suffix: '/7',
      label: 'Site Safety Monitoring',
    },
    chartBars: [
      { color: 'bg-teal-500', height: 'h-12' },
      { color: 'bg-indigo-400', height: 'h-10' },
      { color: 'bg-amber-400', height: 'h-8' },
      { color: 'bg-emerald-400', height: 'h-11' },
      { color: 'bg-cyan-500', height: 'h-7' },
      { color: 'bg-rose-400', height: 'h-6' },
    ],
    teamAvatars: [
      { initials: 'VG', bg: 'bg-teal-600' },
      { initials: 'CV', bg: 'bg-indigo-600' },
      { initials: 'XZ', bg: 'bg-slate-900' },
    ],
  },
}

export function OurWorkCaseStudies() {
  const [selectedId, setSelectedId] = useState<string>('titan-tata')
  const [isDeepDiveOpen, setIsDeepDiveOpen] = useState<boolean>(false)

  const activeStudy = flagshipCaseStudies.find((s) => s.id === selectedId) || flagshipCaseStudies[0]
  const canvasConfig = canvasConfigs[selectedId] || canvasConfigs['titan-tata']
  const ActiveIcon = activeStudy.icon

  return (
    <section id="case-studies" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-line">
      <div className="container-section">
        {/* ================================================================= */}
        {/* SECTION HEADER (Strict globals.css typography)                     */}
        {/* ================================================================= */}
        <div className="text-left mb-12 sm:mb-16">
          <span className="text-badge font-mono uppercase tracking-wider text-brand-500 mb-3 inline-block font-semibold">
            FLAGSHIP CASE STUDIES
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-h2 font-bold text-brand-900 tracking-tight leading-tight mb-3">
            Connected strategy &amp; execution
          </h2>
          <p className="text-small sm:text-body text-ink-500 leading-relaxed max-w-2xl">
            Set cross-organizational goals with clear architectural ownership and execute them
            effectively across enterprise production systems.
          </p>
        </div>

        {/* ================================================================= */}
        {/* MAIN UNIFIED SHOWCASE (No outer card, spacious layout)           */}
        {/* ================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-12 sm:mb-16">
          {/* ------------------------------------------------------------- */}
          {/* LEFT COLUMN: Interactive Project Switcher List                */}
          {/* ------------------------------------------------------------- */}
          <div className="lg:col-span-5 xl:col-span-5 space-y-4 sm:space-y-5">
            {flagshipCaseStudies.map((study) => {
              const isSelected = study.id === selectedId

              return (
                <div
                  key={study.id}
                  onClick={() => setSelectedId(study.id)}
                  className={`rounded-2xl p-5 sm:p-6 lg:p-7 transition-all duration-200 cursor-pointer text-left relative ${
                    isSelected
                      ? 'bg-indigo-50/70 border border-indigo-200/80 shadow-sm'
                      : 'border border-transparent hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3
                      className={`text-h2 font-bold tracking-tight ${
                        isSelected ? 'text-brand-900' : 'text-slate-800'
                      }`}
                    >
                      {study.client}
                    </h3>
                  </div>
                  <p
                    className={`text-body leading-relaxed ${
                      isSelected ? 'text-slate-700 font-medium' : 'text-ink-500'
                    }`}
                  >
                    {study.solutionType}
                  </p>
                </div>
              )
            })}
          </div>

          {/* ------------------------------------------------------------- */}
          {/* RIGHT COLUMN: Tinted Connected Canvas (Interactive Diagram)  */}
          {/* ------------------------------------------------------------- */}
          <div className="lg:col-span-7 xl:col-span-7">
            <div className="bg-[#ECE8FD] border border-indigo-100/80 rounded-3xl p-6 sm:p-8 lg:p-10 relative overflow-hidden min-h-[500px] lg:min-h-[560px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStudy.id}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.3 }}
                  className="w-full relative z-10"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    {/* Left: 3 Stacked Feeds with connecting lines */}
                    <div className="md:col-span-5 space-y-4 relative">
                      {canvasConfig.sourceFeeds.map((feed, fIdx) => (
                        <div
                          key={fIdx}
                          className="bg-white rounded-2xl p-4 sm:p-5 border border-indigo-100/80 shadow-sm relative group hover:shadow-md transition-all"
                        >
                          <div className="mb-3">
                            <span className="text-body font-bold text-slate-900 leading-tight block">
                              {feed.title}
                            </span>
                          </div>

                          {/* Clean Abstract Data Lines (matching reference design) */}
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <div className="h-1.5 flex-1 bg-slate-100 rounded-full" />
                              <div className="h-1.5 w-10 bg-indigo-400 rounded-full" />
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="h-1.5 flex-1 bg-slate-100 rounded-full" />
                              <div className="h-1.5 w-16 bg-indigo-500 rounded-full" />
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="h-1.5 flex-1 bg-slate-100 rounded-full" />
                              <div className="h-1.5 w-7 bg-indigo-300 rounded-full" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Right: Elevated White Dashboard Card */}
                    <div className="md:col-span-7 relative">
                      <div className="bg-white rounded-2xl sm:rounded-3xl border border-white/90 shadow-xl shadow-indigo-950/10 p-6 sm:p-8 space-y-6">
                        {/* Card Title - Clean and un-cluttered */}
                        <div className="border-b border-slate-100 pb-4">
                          <h4 className="text-h3 font-bold text-slate-900">
                            {canvasConfig.dashboardTitle}
                          </h4>
                        </div>

                        {/* Floating Primary Metric Card */}
                        <div className="bg-slate-50/80 border border-slate-200/70 rounded-2xl p-4 sm:p-5 flex items-center justify-between">
                          <div>
                            <div className="text-caption text-slate-500 font-medium">
                              {canvasConfig.statMetric.label}
                            </div>
                            <div className="text-h1 font-bold font-mono text-brand-900 flex items-baseline gap-1 mt-0.5">
                              {canvasConfig.statMetric.prefix}
                              <CountUp to={canvasConfig.statMetric.value} duration={1.8} />
                              <span>{canvasConfig.statMetric.suffix}</span>
                            </div>
                          </div>
                          <div className="w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                            <Zap className="w-5 h-5" />
                          </div>
                        </div>

                        {/* Visual Chart - Clean Stacked Vertical Bars & Graphic */}
                        <div className="flex items-center justify-between gap-6 pt-1">
                          {/* Vertical bar chart matching reference image */}
                          <div className="flex items-end gap-2.5 h-16 pt-2 flex-1">
                            {canvasConfig.chartBars.map((bar, bIdx) => (
                              <div
                                key={bIdx}
                                className={`flex-1 ${bar.height} ${bar.color} rounded-t-md transition-all`}
                              />
                            ))}
                          </div>

                          {/* Mini pie / status ring graphic */}
                          <div className="flex items-center gap-2 shrink-0">
                            <div className="w-12 h-12 rounded-full border-4 border-indigo-500 border-t-amber-400 border-r-emerald-400 rotate-45" />
                            <div className="space-y-1">
                              <div className="w-2 h-2 rounded-full bg-indigo-500" />
                              <div className="w-2 h-2 rounded-full bg-amber-400" />
                              <div className="w-2 h-2 rounded-full bg-emerald-400" />
                            </div>
                          </div>
                        </div>

                        {/* Avatars Row */}
                        <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                          <div className="flex items-center -space-x-2">
                            {canvasConfig.teamAvatars.map((av, aIdx) => (
                              <div
                                key={aIdx}
                                className={`w-7 h-7 rounded-full ${av.bg} text-white font-mono text-caption flex items-center justify-center font-bold ring-2 ring-white`}
                              >
                                {av.initials}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* ================================================================= */}
        {/* CASE STUDY DEEP-DIVE ACCORDION TRAY                               */}
        {/* ================================================================= */}
        <div className="border-t sm:border border-line rounded-none sm:rounded-2xl bg-transparent sm:bg-white overflow-visible sm:overflow-hidden shadow-none sm:shadow-xs">
          <button
            type="button"
            onClick={() => setIsDeepDiveOpen(!isDeepDiveOpen)}
            className="w-full py-5 px-0 sm:p-6 flex items-center justify-between bg-transparent sm:bg-surface/30 hover:bg-transparent sm:hover:bg-surface/60 transition-colors cursor-pointer text-left gap-4"
          >
            <div className="flex items-center gap-3 min-w-0">
              {/* Left SVG Icon: hidden on mobile */}
              <div className="hidden sm:flex w-9 h-9 rounded-lg bg-brand-500/10 items-center justify-center text-brand-700 shrink-0">
                <ActiveIcon className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-badge font-mono uppercase text-brand-500 font-semibold block mb-1">
                  TECHNICAL SPECIFICATIONS &amp; OUTCOMES
                </span>
                <span className="text-h3 font-bold text-brand-900 leading-tight block">
                  {activeStudy.client}: {activeStudy.title}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              {/* Architecture Logo Cube SVG: hidden on mobile */}
              <div
                className={`hidden sm:flex w-10 h-10 sm:w-11 sm:h-11 rounded-xl items-center justify-center transition-all duration-300 ${
                  isDeepDiveOpen
                    ? 'bg-brand-500/15 text-brand-600 border border-brand-500/30 shadow-xs'
                    : 'bg-surface hover:bg-slate-200/80 text-slate-600 border border-line'
                }`}
                title={isDeepDiveOpen ? 'Collapse Deep Dive' : 'Explore Full Architecture'}
                aria-label={isDeepDiveOpen ? 'Collapse Deep Dive' : 'Explore Full Architecture'}
              >
                <ServiceArchitectureLogo
                  className={`w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300 ${
                    isDeepDiveOpen ? 'rotate-90 text-brand-600 scale-105' : 'text-slate-600'
                  }`}
                />
              </div>

              {/* Chevron indicator */}
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  isDeepDiveOpen ? 'rotate-180 text-brand-600' : 'text-slate-400'
                }`}
              />
            </div>
          </button>

          <AnimatePresence>
            {isDeepDiveOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="overflow-hidden border-t border-line"
              >
                <div className="py-6 px-0 sm:p-8 lg:p-10 space-y-8 bg-transparent sm:bg-white">
                  {/* Two Column Breakdown: Challenge & Solution */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Operational Challenge */}
                    <div className="lg:col-span-5 space-y-4">
                      <div className="bg-transparent sm:bg-surface/50 border-0 sm:border border-line rounded-none sm:rounded-xl p-0 sm:p-5">
                        <div className="text-caption font-mono uppercase tracking-wider text-ink-700 font-semibold mb-2">
                          The Operational Challenge
                        </div>
                        <p className="text-small text-ink-500 leading-relaxed">
                          {activeStudy.challenge}
                        </p>
                      </div>

                      {/* Fast Stat Badges */}
                      <div className="grid grid-cols-3 gap-4 sm:gap-3 pt-2 sm:pt-0">
                        {activeStudy.stats.map((st, sIdx) => (
                          <div
                            key={sIdx}
                            className="bg-transparent sm:bg-white border-0 sm:border border-line rounded-none sm:rounded-lg p-0 sm:p-3 text-left sm:text-center"
                          >
                            <div className="text-h3 font-bold font-mono text-brand-900 flex items-center sm:justify-center gap-0.5">
                              {st.num !== undefined ? (
                                <>
                                  {st.prefix}
                                  <CountUp to={st.num} duration={2} />
                                  {st.suffix}
                                </>
                              ) : (
                                st.rawText
                              )}
                            </div>
                            <div className="text-caption text-ink-500 leading-tight mt-1 sm:mt-0.5">
                              {st.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Engineered Capabilities Checklist */}
                    <div className="lg:col-span-7 space-y-4">
                      <div className="text-caption font-mono uppercase tracking-wider text-brand-700 font-semibold">
                        The Engineered Solution Included:
                      </div>

                      <div className="border-0 sm:border border-line rounded-none sm:rounded-xl divide-y divide-line overflow-visible sm:overflow-hidden bg-transparent sm:bg-white">
                        {activeStudy.capabilities.map((cap, cIdx) => (
                          <div
                            key={cIdx}
                            className="flex items-start gap-3 py-3.5 px-0 sm:p-4 text-small text-ink-700"
                          >
                            {/* Checkmark: SVG on desktop, clean bullet on mobile */}
                            <span className="hidden sm:inline-flex shrink-0 mt-0.5">
                              <Check className="w-4 h-4 text-emerald-600" />
                            </span>
                            <span className="sm:hidden text-brand-500 font-bold shrink-0 mt-0.5 text-small">
                              &bull;
                            </span>
                            <span className="leading-snug">{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Technology Stack Tags */}
                  <div className="pt-6 border-t border-line flex flex-col sm:flex-row sm:items-center justify-between gap-5 sm:gap-4">
                    <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                      <span className="text-caption font-mono uppercase text-ink-500 mr-1 font-semibold block sm:inline w-full sm:w-auto">
                        Tech Stack:
                      </span>
                      {activeStudy.technologies.map((tech, tIdx) => (
                        <React.Fragment key={tIdx}>
                          {/* Mobile: Clean text badge, no SVGs */}
                          <span className="sm:hidden px-3 py-1.5 rounded-lg bg-surface border border-line text-caption font-mono font-medium text-slate-800">
                            {tech}
                          </span>

                          {/* Desktop: TechLogo SVG card with hover tooltip */}
                          <div
                            title={tech}
                            aria-label={tech}
                            className="hidden sm:flex group relative w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-surface/70 hover:bg-white border border-line hover:border-brand-500 shadow-2xs hover:shadow-xs items-center justify-center p-2.5 transition-all duration-200 cursor-pointer"
                          >
                            <TechLogo
                              name={tech}
                              className="w-7 h-7 sm:w-8 sm:h-8 object-contain transition-transform duration-200 group-hover:scale-110"
                            />

                            {/* Sleek Tooltip */}
                            <div className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-20 whitespace-nowrap px-2.5 py-1 rounded-md bg-slate-900 text-white text-caption font-mono shadow-md">
                              {tech}
                            </div>
                          </div>
                        </React.Fragment>
                      ))}
                    </div>

                    <Link href="/#contact" className="w-full sm:w-auto">
                      <button
                        type="button"
                        className="text-caption text-brand-600 hover:text-brand-800 font-semibold flex items-center gap-1.5 cursor-pointer"
                      >
                        <span>Inquire About Similar Architecture</span>
                        <span className="hidden sm:inline-block">
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                        <span className="sm:hidden text-caption">&rarr;</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
