'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Eye, Users, HardHat } from 'lucide-react'
import { ourWorkHero } from '@/assets/images'

interface ProjectHighlight {
  id: string
  tabLabel: string
  badgeLabel: string
  topPillTitle: string
  topPillSub: string
  icon: React.ComponentType<{ className?: string }>
  iconBg: string
  title: string
  description: string
  metricLabel: string
  targetId: string
}

const projectHighlights: ProjectHighlight[] = [
  {
    id: 'titan-tata',
    tabLabel: 'Titan × Tata',
    badgeLabel: 'Healthcare & Retail',
    topPillTitle: 'Production verified',
    topPillSub: '1-month delivery · active',
    icon: Eye,
    iconBg: 'bg-brand-500/10 text-brand-700 border-brand-500/20',
    title: 'Titan × Tata Optical Platform',
    description: 'Low-latency WebSockets hardware diagnostics synced directly to in-store POS.',
    metricLabel: '100% Exam Coverage',
    targetId: 'titan-tata',
  },
  {
    id: 'hireai',
    tabLabel: 'HireAI',
    badgeLabel: 'AI Micro-SaaS',
    topPillTitle: 'NLP Model Active',
    topPillSub: '12 hrs/wk saved · live',
    icon: Users,
    iconBg: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20',
    title: 'HireAI Candidate Ranking',
    description: 'Semantic resume parsing engine saving recruiters 12 hrs/wk with zero overhead.',
    metricLabel: '12 hrs/wk Saved',
    targetId: 'hireai',
  },
  {
    id: 'vision-safety',
    tabLabel: 'VisionGuard',
    badgeLabel: 'Computer Vision',
    topPillTitle: 'Edge Inference Live',
    topPillSub: 'Sub-50ms latency · 24/7',
    icon: HardHat,
    iconBg: 'bg-teal-500/10 text-teal-700 border-teal-500/20',
    title: 'VisionGuard Site Safety',
    description: 'Autonomous edge CCTV hazard monitoring with instant compliance alerting.',
    metricLabel: '24/7 Site Alerting',
    targetId: 'vision-safety',
  },
]

export function OurWorkHeroVisual() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const active = projectHighlights[selectedIndex]
  const ActiveIcon = active.icon

  return (
    <div className="relative w-full max-w-[440px] sm:max-w-[480px] lg:max-w-[430px] xl:max-w-[470px] mx-auto select-none pt-4 pb-8 px-2 sm:px-4">
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-gradient-to-tr from-brand-500/10 via-blue-400/10 to-teal-400/8 rounded-full blur-3xl pointer-events-none" />

      {/* ===================================================================== */}
      {/* MAIN PORTRAIT CARD                                                    */}
      {/* ===================================================================== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative rounded-[2.25rem] overflow-hidden border border-slate-200/80 shadow-2xl shadow-slate-900/8 bg-slate-100 aspect-[4/4.6]"
      >
        <Image
          src={ourWorkHero}
          alt="Xylozen Engineering Lead architecting production enterprise systems"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 480px"
          className="object-cover object-center"
        />

        {/* Soft Bottom Vignette for Image Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent pointer-events-none" />
      </motion.div>

      {/* ===================================================================== */}
      {/* TOP-RIGHT FLOATING BADGE: Production Telemetry Status                  */}
      {/* ===================================================================== */}
      <motion.div
        key={`top-${active.id}`}
        initial={{ opacity: 0, y: -10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 z-20 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-950/10 py-2.5 px-3.5 sm:px-4 flex items-center gap-3"
      >
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
          <Check className="w-4 h-4 stroke-[2.5]" />
        </div>
        <div className="text-left">
          <div className="text-[13px] sm:text-sm font-bold text-slate-900 leading-tight">
            {active.topPillTitle}
          </div>
          <div className="text-[11px] text-slate-500 font-medium leading-none mt-0.5">
            {active.topPillSub}
          </div>
        </div>
      </motion.div>

      {/* ===================================================================== */}
      {/* BOTTOM-LEFT FLOATING CARD: Interactive Project Telemetry               */}
      {/* ===================================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute -bottom-5 -left-2 sm:-bottom-6 sm:-left-5 z-20 bg-white rounded-2xl border border-slate-200/90 shadow-2xl shadow-slate-950/14 p-4 sm:p-5 max-w-[320px] sm:max-w-[365px] w-full"
      >

        {/* Dynamic Project Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
          >
            {/* Header: Icon and Title */}
            <div className="flex items-start gap-3 mb-2">
              <div
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl border flex items-center justify-center shrink-0 mt-0.5 ${active.iconBg}`}
              >
                <ActiveIcon className="w-5 h-5 stroke-[2]" />
              </div>
              <div className="pr-2">
                <h4 className="text-[13px] sm:text-sm font-bold text-slate-900 tracking-tight leading-snug">
                  {active.title}
                </h4>
                <p className="text-[11px] sm:text-[12px] text-slate-500 leading-snug mt-0.5">
                  {active.description}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Project Selector Tabs */}
        <div className="flex items-center justify-between gap-1.5 mt-3.5 pt-2 border-t border-slate-100">
          <div className="flex items-center gap-1">
            {projectHighlights.map((proj, idx) => {
              const isSelected = idx === selectedIndex

              return (
                <button
                  key={proj.id}
                  type="button"
                  onClick={() => setSelectedIndex(idx)}
                  className={`text-[11px] font-medium px-2 py-1 rounded-md transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-brand-500 text-white font-semibold shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {proj.tabLabel}
                </button>
              )
            })}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
