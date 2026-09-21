'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Compass, Rocket, ShieldCheck } from 'lucide-react'

interface ConsultationPillar {
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
}

const consultationPillars: ConsultationPillar[] = [
  {
    id: 'technical-scoping',
    tabLabel: 'Technical Scoping',
    badgeLabel: 'Direct architect consultation',
    topPillTitle: 'Architects Available',
    topPillSub: '< 24h response SLA · Chennai HQ',
    icon: Compass,
    iconBg: 'bg-brand-500/10 text-brand-700 border-brand-500/20',
    title: 'Direct Engineering Scoping',
    description: 'Skip sales reps. Consult directly with an enterprise architect to evaluate tech stack & feasibility.',
    metricLabel: '< 24h Response',
  },
  {
    id: 'rapid-mvp',
    tabLabel: '3-6 Wk MVP',
    badgeLabel: 'Rapid production MVP',
    topPillTitle: 'Production Guaranteed',
    topPillSub: '3 to 6-week delivery · active',
    icon: Rocket,
    iconBg: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20',
    title: 'Rapid Production MVPs',
    description: 'Disciplined 8-stage delivery turning operational workflows into production software.',
    metricLabel: '3–6 Wks Scope',
  },
  {
    id: 'ai-audit',
    tabLabel: 'AI Feasibility',
    badgeLabel: 'AI & Automation Mesh',
    topPillTitle: '100% In-House Pod',
    topPillSub: 'Zero outsourcing · international rigor',
    icon: ShieldCheck,
    iconBg: 'bg-teal-500/10 text-teal-700 border-teal-500/20',
    title: 'AI Feasibility & System Audit',
    description: 'Evaluate agentic automation, microservices concurrency, and security compliance for your systems.',
    metricLabel: '100% In-House Team',
  },
]

export function ContactHeroVisual() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const active = consultationPillars[selectedIndex]
  const ActiveIcon = active.icon

  // Auto-cycle through consultation pillars every 3.8 seconds, pause on hover
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % consultationPillars.length)
    }, 3800)

    return () => clearInterval(interval)
  }, [isPaused])

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full max-w-[440px] sm:max-w-[480px] lg:max-w-[430px] xl:max-w-[470px] mx-auto select-none pt-4 pb-8 px-2 sm:px-4"
    >
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-gradient-to-tr from-brand-500/10 via-blue-400/10 to-teal-400/8 rounded-full blur-3xl pointer-events-none" />

      {/* ===================================================================== */}
      {/* MAIN PORTRAIT CARD                                                    */}
      {/* ===================================================================== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative rounded-[2.25rem] overflow-hidden border border-line shadow-2xl shadow-brand-900/10 bg-surface aspect-[4/4.6]"
      >
        <Image
          src="/images/contact-hero.jpg"
          alt="Xylozen Senior Engineering Architect in Chennai Technology Studio"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 480px"
          className="object-cover object-top"
        />

        {/* Soft Bottom Vignette for Image Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900/30 via-transparent to-transparent pointer-events-none" />
      </motion.div>

      {/* ===================================================================== */}
      {/* TOP-RIGHT FLOATING BADGE: Availability / Fast Response Status         */}
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
      {/* BOTTOM-LEFT FLOATING CARD: Interactive Consultation Scoping Pillars   */}
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
          <div className="flex items-center gap-1 flex-wrap">
            {consultationPillars.map((pillar, idx) => {
              const isSelected = idx === selectedIndex

              return (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => setSelectedIndex(idx)}
                  className={`text-[11px] font-medium px-2 py-1 rounded-md transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-brand-500 text-white font-semibold shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {pillar.tabLabel}
                </button>
              )
            })}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
