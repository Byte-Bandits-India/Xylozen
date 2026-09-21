'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  ShieldCheck,
  Bot,
  Sparkles,
  Cpu,
} from 'lucide-react'

export function ServicesHeroVisual() {
  return (
    <div className="relative w-full max-w-[540px] xl:max-w-[580px] mx-auto select-none py-2 px-2 sm:px-4">
      {/* Ambient Multi-Hue Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-gradient-to-tr from-brand-500/15 via-teal-400/10 to-violet-500/12 rounded-full blur-3xl pointer-events-none" />

      {/* ===================================================================== */}
      {/* MAIN CONSOLE CARD (Clean, Grand, Architectural Chassis)               */}
      {/* ===================================================================== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-7 shadow-2xl shadow-brand-900/5"
      >
        {/* Top Header Console Bar */}
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            </div>
            <span className="text-xs font-mono text-ink-500 font-medium pl-2 border-l border-slate-200 truncate">
              xylozen.precision.mesh
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-[11px] font-mono text-emerald-700 font-semibold shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>99.99% UPTIME</span>
          </div>
        </div>

        {/* Central Architectural Mesh Canvas */}
        <div className="relative h-64 sm:h-72 rounded-2xl bg-gradient-to-b from-slate-50/90 via-white to-slate-50/70 border border-slate-200/80 p-5 flex items-center justify-center overflow-hidden">
          {/* SVG Tech Grid Pattern */}
          <svg
            className="absolute inset-0 w-full h-full opacity-25 text-slate-400 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
          >
            <defs>
              <pattern
                id="mesh-dots-tall"
                x="0"
                y="0"
                width="18"
                height="18"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="1.5" cy="1.5" r="1" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mesh-dots-tall)" />
          </svg>

          {/* SVG Connecting Bus Lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 380 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 50 120 L 330 120"
              stroke="#CBD5E1"
              strokeWidth="1.5"
              strokeDasharray="5 5"
            />
            <path
              d="M 190 120 L 190 40"
              stroke="#CBD5E1"
              strokeWidth="1.5"
              strokeDasharray="5 5"
            />
            <path
              d="M 190 120 L 190 200"
              stroke="#CBD5E1"
              strokeWidth="1.5"
              strokeDasharray="5 5"
            />
          </svg>

          {/* Top Status Capsule */}
          <div className="absolute top-3.5 z-10 flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-[11px] font-mono text-brand-900 shadow-xs">
            <Cpu className="w-3.5 h-3.5 text-brand-500" />
            <span className="font-semibold">&lt; 38ms API Latency</span>
          </div>

          {/* Node 1: Secured Gateway (Left) */}
          <div className="absolute left-4 sm:left-6 z-10 flex flex-col items-center">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white border border-emerald-200/80 shadow-md shadow-emerald-500/10 flex items-center justify-center text-emerald-600">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <span className="text-xs font-mono font-semibold text-brand-900 mt-1.5">
              Gateway
            </span>
            <span className="text-[10px] text-ink-500">TLS 1.3</span>
          </div>

          {/* Center Hub: Xylozen Precision Core */}
          <motion.div
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-20 flex flex-col items-center justify-center"
          >
            {/* Concentric subtle rings */}
            <div className="absolute w-24 h-24 rounded-full border border-brand-500/20 bg-brand-500/5 pointer-events-none" />

            {/* Core Box */}
            <div className="relative z-10 w-18 h-18 sm:w-20 sm:h-20 rounded-2xl bg-white border-2 border-brand-500 p-2.5 shadow-lg shadow-brand-500/20 flex flex-col items-center justify-center">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white flex items-center justify-center shadow-xs mb-1">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-[10px] font-mono font-bold text-brand-900 tracking-tight">
                Xylozen
              </span>
            </div>
          </motion.div>

          {/* Node 2: Agentic Engine (Right) */}
          <div className="absolute right-4 sm:right-6 z-10 flex flex-col items-center">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white border border-violet-200/80 shadow-md shadow-violet-500/10 flex items-center justify-center text-violet-600">
              <Bot className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <span className="text-xs font-mono font-semibold text-brand-900 mt-1.5">
              Agentic
            </span>
            <span className="text-[10px] text-ink-500">Autonomous</span>
          </div>

          {/* Bottom Status Capsule */}
          <div className="absolute bottom-3.5 z-10 flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-[11px] font-mono text-brand-700 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
            <span>High-Concurrency Mesh</span>
          </div>
        </div>

        {/* Clean System Telemetry Footer Bar */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-ink-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="font-semibold text-brand-900">SYSTEMS OPERATIONAL</span>
          </div>
          <span className="text-ink-400">CHENNAI &bull; GLOBAL PODS</span>
        </div>
      </motion.div>
    </div>
  )
}

