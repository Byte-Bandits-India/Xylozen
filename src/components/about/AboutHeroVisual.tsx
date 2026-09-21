'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ArrowRight, Cpu, Sparkles, Workflow, Layers, Rocket } from 'lucide-react'

interface StudioCapability {
  id: string
  label: string
  title: string
  description: string
  badgeText: string
  icon: React.ComponentType<{ className?: string }>
  iconBg: string
  targetId: string
}

const studioCapabilities: StudioCapability[] = [
  {
    id: 'ai-native',
    label: 'Agentic AI',
    title: 'Agentic Systems & AI Models',
    description: 'Autonomous multi-agent workflows, specialized LLM pipelines, and custom vision reasoning.',
    badgeText: 'FOUNDATIONAL AI',
    icon: Cpu,
    iconBg: 'bg-brand-500/10 text-brand-700 border-brand-500/20',
    targetId: 'why-xylozen',
  },
  {
    id: 'web-apps',
    label: 'Web Apps',
    title: 'Enterprise Web Applications',
    description: 'High-throughput Next.js & React architectures with sub-second page performance.',
    badgeText: 'MODERN TECH STACK',
    icon: Layers,
    iconBg: 'bg-blue-500/10 text-blue-700 border-blue-500/20',
    targetId: 'how-we-work',
  },
  {
    id: 'microsaas',
    label: 'Micro-SaaS',
    title: 'Micro-SaaS & Domain Engines',
    description: 'Focused software products engineered to automate niche industrial and operational workflows.',
    badgeText: 'RAPID COMMERCE',
    icon: Sparkles,
    iconBg: 'bg-teal-500/10 text-teal-700 border-teal-500/20',
    targetId: 'why-xylozen',
  },
  {
    id: 'automation',
    label: 'Automation',
    title: 'Workflow Automation Mesh',
    description: 'Eliminating repetitive human tasks through resilient event queues and API bridges.',
    badgeText: 'ZERO REDUNDANCY',
    icon: Workflow,
    iconBg: 'bg-amber-500/10 text-amber-700 border-amber-500/20',
    targetId: 'how-we-work',
  },
  {
    id: 'mvp',
    label: 'MVP Engineering',
    title: '3 to 6-Week Production MVPs',
    description: 'Fast-cycle prototypes built with production architecture, ready to scale from day one.',
    badgeText: 'RAPID GO-TO-MARKET',
    icon: Rocket,
    iconBg: 'bg-violet-500/10 text-violet-700 border-violet-500/20',
    targetId: 'why-xylozen',
  },
]

export function AboutHeroVisual() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const active = studioCapabilities[selectedIndex]
  const ActiveIcon = active.icon

  // Auto-scroll / auto-cycle through studio capabilities every 3.5 seconds
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % studioCapabilities.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [isPaused])

  const scrollToAnchor = (targetId: string) => {
    const el = document.getElementById(targetId)
    if (el) {
      const headerOffset = 100
      const elementPosition = el.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full max-w-[440px] sm:max-w-[480px] lg:max-w-[430px] xl:max-w-[470px] mx-auto select-none pt-4 pb-8 px-2 sm:px-4"
    >
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-gradient-to-tr from-brand-500/10 via-blue-400/10 to-teal-400/8 rounded-full blur-3xl pointer-events-none" />

      {/* ===================================================================== */}
      {/* MAIN PORTRAIT CARD (3D Cartoon Studio Architect)                      */}
      {/* ===================================================================== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative rounded-[2.25rem] overflow-hidden border border-line shadow-2xl shadow-brand-900/10 bg-surface aspect-[4/4.6]"
      >
        <Image
          src="/images/agents/engineer.jpg"
          alt="Xylozen Engineering Lead"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 480px"
          className="object-cover object-top"
        />

        {/* Soft Bottom Vignette for Image Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900/30 via-transparent to-transparent pointer-events-none" />
      </motion.div>

      {/* ===================================================================== */}
      {/* TOP-RIGHT FLOATING BADGE: Production Telemetry Status                  */}
      {/* ===================================================================== */}
      <motion.div
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
            Chennai to Global
          </div>
          <div className="text-[11px] text-slate-500 font-medium leading-none mt-0.5">
            100% In-House Engineering Team
          </div>
        </div>
      </motion.div>

      {/* ===================================================================== */}
      {/* BOTTOM-LEFT FLOATING CARD: Interactive Studio Capability Telemetry    */}
      {/* ===================================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute -bottom-5 -left-2 sm:-bottom-6 sm:-left-5 z-20 bg-white rounded-2xl border border-slate-200/90 shadow-2xl shadow-slate-950/14 p-4 sm:p-5 max-w-[325px] sm:max-w-[370px] w-full"
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
                <p className="text-[11px] sm:text-[12px] text-slate-500 leading-snug mt-0.5 line-clamp-2">
                  {active.description}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Auto-Cycling Indicator & Deep Dive Link */}
        <div className="flex items-center justify-between gap-2 mt-3.5 pt-2.5 border-t border-slate-100">
          <div className="flex items-center gap-1.5" title="Cycling studio capabilities">
            {studioCapabilities.map((cap, idx) => {
              const isSelected = idx === selectedIndex

              return (
                <div
                  key={cap.id}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    isSelected ? 'w-6 bg-brand-500' : 'w-1.5 bg-slate-200'
                  }`}
                />
              )
            })}
          </div>

          <button
            type="button"
            onClick={() => scrollToAnchor(active.targetId)}
            className="text-[11px] font-semibold text-brand-600 hover:text-brand-800 flex items-center gap-1 cursor-pointer transition-colors"
          >
            <span>Explore {active.label}</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </motion.div>
    </div>
  )
}
