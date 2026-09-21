'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  ShoppingBag,
  CreditCard,
  RefreshCw,
  Zap,
  CheckCircle2,
} from 'lucide-react'

export function EcommerceHeroVisual() {
  return (
    <div className="relative w-full max-w-[540px] xl:max-w-[580px] mx-auto select-none py-2">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-gradient-to-tr from-emerald-500/10 via-brand-500/5 to-amber-400/5 rounded-full blur-3xl pointer-events-none" />

      {/* MAIN CONSOLE CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-7 shadow-xl shadow-brand-900/5"
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
              xylozen.commerce.engine
            </span>
          </div>
        </div>

        {/* Central Architectural Mesh Canvas */}
        <div className="relative h-64 sm:h-72 rounded-2xl bg-gradient-to-b from-slate-50/80 via-white to-slate-50/60 border border-slate-200/80 p-5 flex items-center justify-center overflow-hidden">
          {/* SVG Tech Grid Pattern */}
          <svg
            className="absolute inset-0 w-full h-full opacity-20 text-slate-400 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
          >
            <defs>
              <pattern
                id="mesh-dots-ecom"
                x="0"
                y="0"
                width="18"
                height="18"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="1.5" cy="1.5" r="1" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mesh-dots-ecom)" />
          </svg>

          {/* SVG Connecting Bus Lines */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 380 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Horizontal Line */}
            <g className="cursor-pointer group/line">
              <path d="M 50 120 L 330 120" stroke="transparent" strokeWidth="20" />
              <path
                d="M 50 120 L 330 120"
                stroke="#CBD5E1"
                strokeWidth="1.5"
                strokeDasharray="5 5"
                className="transition-colors duration-200 group-hover/line:stroke-emerald-600"
              />
            </g>
            {/* Vertical Top Line */}
            <g className="cursor-pointer group/line">
              <path d="M 190 120 L 190 40" stroke="transparent" strokeWidth="20" />
              <path
                d="M 190 120 L 190 40"
                stroke="#CBD5E1"
                strokeWidth="1.5"
                strokeDasharray="5 5"
                className="transition-colors duration-200 group-hover/line:stroke-emerald-600"
              />
            </g>
            {/* Vertical Bottom Line */}
            <g className="cursor-pointer group/line">
              <path d="M 190 120 L 190 200" stroke="transparent" strokeWidth="20" />
              <path
                d="M 190 120 L 190 200"
                stroke="#CBD5E1"
                strokeWidth="1.5"
                strokeDasharray="5 5"
                className="transition-colors duration-200 group-hover/line:stroke-emerald-600"
              />
            </g>
          </svg>

          {/* Top Status Capsule */}
          <div className="absolute top-3.5 z-10 flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-[11px] font-mono text-brand-900 shadow-xs cursor-default transition-all duration-200 hover:border-slate-300">
            <Zap className="w-3.5 h-3.5 text-amber-500" />
            <span className="font-semibold">&lt; 0.4s Headless TTFB</span>
          </div>

          {/* Node 1: Headless Storefront (Left) */}
          <div className="absolute left-4 sm:left-6 z-10 flex flex-col items-center cursor-pointer group/node transition-transform duration-200 hover:-translate-y-0.5">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white border border-emerald-200 shadow-sm flex items-center justify-center text-emerald-600 transition-all duration-200 group-hover/node:border-emerald-500 group-hover/node:shadow-md group-hover/node:shadow-emerald-500/10">
              <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200 group-hover/node:scale-105" />
            </div>
            <span className="text-xs font-mono font-semibold text-brand-900 mt-1.5 transition-colors group-hover/node:text-emerald-600">
              Storefront
            </span>
            <span className="text-[10px] text-ink-500">Next Commerce</span>
          </div>

          {/* Center Hub: Checkout Core */}
          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-20 flex flex-col items-center justify-center cursor-pointer group/hub"
          >
            {/* Concentric subtle ring */}
            <div className="absolute w-24 h-24 rounded-full border border-emerald-500/15 bg-emerald-500/5 pointer-events-none transition-all duration-300 group-hover/hub:border-emerald-500/30 group-hover/hub:bg-emerald-500/10" />

            {/* Core Box */}
            <div className="relative z-10 w-18 h-18 sm:w-20 sm:h-20 rounded-2xl bg-white border-2 border-emerald-500 p-2.5 shadow-md shadow-emerald-500/15 flex flex-col items-center justify-center transition-all duration-200 group-hover/hub:shadow-lg group-hover/hub:shadow-emerald-500/20 group-hover/hub:scale-[1.03]">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 text-white flex items-center justify-center shadow-xs mb-1">
                <CreditCard className="w-4 h-4 text-white" />
              </div>
              <span className="text-[10px] font-mono font-bold text-brand-900 tracking-tight">
                Checkout
              </span>
            </div>
          </motion.div>

          {/* Node 2: ERP & Inventory Sync (Right) */}
          <div className="absolute right-4 sm:right-6 z-10 flex flex-col items-center cursor-pointer group/node transition-transform duration-200 hover:-translate-y-0.5">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white border border-brand-200 shadow-sm flex items-center justify-center text-brand-500 transition-all duration-200 group-hover/node:border-brand-500 group-hover/node:shadow-md group-hover/node:shadow-brand-500/10">
              <RefreshCw className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover/node:rotate-45" />
            </div>
            <span className="text-xs font-mono font-semibold text-brand-900 mt-1.5 transition-colors group-hover/node:text-brand-600">
              ERP &amp; Sync
            </span>
            <span className="text-[10px] text-ink-500">Real-Time Stock</span>
          </div>

          {/* Bottom Status Capsule */}
          <div className="absolute bottom-3.5 z-10 flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-[11px] font-mono text-brand-700 shadow-xs cursor-default transition-all duration-200 hover:border-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Zero Cart Drop-Off Engine</span>
          </div>
        </div>

        {/* Clean System Telemetry Footer Bar */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-ink-500">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span className="font-semibold text-brand-900">ORDER PIPELINES ACTIVE</span>
          </div>
          <span className="text-ink-400">40% SPEED BOOST</span>
        </div>
      </motion.div>
    </div>
  )
}
