'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import {
  ShieldCheck,
  Zap,
  Check,
  Users,
  Bot,
  Brain,
  Code2,
  ShoppingBag,
  Database,
  ArrowRight,
  TrendingUp,
} from 'lucide-react'
import { useLenis } from 'lenis/react'
import {
  customer1,
  customer2,
  customer3,
  customer4,
  podArchitect,
  podFullstack,
  podDelivery,
} from '@/assets/images'

export function Hero() {
  const [activeSwitch, setActiveSwitch] = useState<'without' | 'with' | null>('with')
  const isWithoutToggled = activeSwitch === 'without'
  const isWithToggled = activeSwitch === 'with'

  const toggleWithout = () => {
    setActiveSwitch((prev) => (prev === 'without' ? null : 'without'))
  }

  const toggleWith = () => {
    setActiveSwitch((prev) => (prev === 'with' ? null : 'with'))
  }

  const lenis = useLenis()

  const scrollToSection = (id: string) => {
    const cleanId = id.replace('#', '')
    const element = document.getElementById(cleanId)

    if (lenis) {
      if (element) {
        lenis.scrollTo(element, { offset: -80, duration: 1.2 })
      } else {
        lenis.scrollTo(0, { duration: 1.2 })
      }
      return
    }

    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="relative flex flex-col justify-between overflow-hidden bg-white pt-24 sm:pt-28 pb-0">
      
      {/* ========================================================================= */}
      {/* 1. MINIMAL ARCHITECTURAL BACKGROUND ACCENTS (Clean, Non-Intrusive)         */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Soft atmospheric ambient light */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[650px] h-[320px] bg-slate-100/70 rounded-full blur-3xl -z-10" />

        {/* Subtle grid guideline accents framing the top hero canvas */}
        <svg
          className="absolute inset-0 w-full h-full opacity-60"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="hero-circuit-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <circle cx="24" cy="24" r="0.8" fill="#CBD5E1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-circuit-grid)" />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* 2. MAIN HERO STAGE (Bounded Container with Pixel-Perfect Grey Connectors)  */}
      {/* ========================================================================= */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pt-4 pb-14">
        
        {/* ----------------------------------------------------------------------- */}
        {/* TOP TIER: Center Headline Flanked by Left & Right Floating Cards        */}
        {/* ----------------------------------------------------------------------- */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 items-center min-h-0 lg:min-h-[290px] mb-10 sm:mb-14 lg:mb-20">
          
          {/* ===================================================================== */}
          {/* TOP-LEFT: Without vs With Xylozen Card + Clean Grey Connectors        */}
          {/* ===================================================================== */}
          <div className="hidden lg:flex lg:col-span-3 justify-start relative">
            {/* Clean Grey Architectural Bus: Runs down, taps into card, continues toward workflow */}
            <div className="absolute -left-6 -top-10 w-10 h-[210px] pointer-events-none">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 40 210">
                {/* Vertical bus line with top arrow */}
                <line x1="16" y1="0" x2="16" y2="48" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4 4" />
                <path d="M 16 6 L 12 14 M 16 6 L 20 14" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />

                {/* Horizontal tap into card's left edge */}
                <line x1="16" y1="48" x2="24" y2="48" stroke="#CBD5E1" strokeWidth="1.5" />
                <circle cx="24" cy="48" r="2.5" fill="#94A3B8" />

                {/* Vertical bus continuing down below card toward customers */}
                <line x1="16" y1="48" x2="16" y2="180" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4 4" />
                <path d="M 16 180 L 12 172 M 16 180 L 20 172" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>

            {/* Card Body */}
            <div className="w-[260px] bg-white rounded-2xl p-4 border border-line shadow-md shadow-brand-900/[0.03] select-none hover:shadow-xl hover:scale-[1.02] transition-all duration-300 relative z-10">
              {/* Row 1: Without Xylozen */}
              <div
                className="flex items-center justify-between py-2 border-b border-line/60 cursor-pointer group rounded-lg px-2 -mx-2 hover:bg-slate-50/80 transition-colors"
                onClick={toggleWithout}
                role="switch"
                aria-checked={isWithoutToggled}
                aria-label="Without Xylozen"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    toggleWithout()
                  }
                }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`text-sm font-bold transition-colors duration-200 ${
                      isWithoutToggled ? 'text-slate-900' : 'text-ink-500'
                    }`}
                  >
                    8%
                  </span>
                  <span
                    className={`text-sm font-medium transition-colors duration-200 ${
                      isWithoutToggled
                        ? 'text-slate-900 font-semibold'
                        : 'text-ink-500 group-hover:text-slate-700'
                    }`}
                  >
                    Without Xylozen
                  </span>
                </div>
                <div
                  className={`w-8 h-4.5 rounded-full transition-colors duration-200 p-0.5 flex items-center ${
                    isWithoutToggled ? 'bg-teal-500' : 'bg-slate-200'
                  }`}
                >
                  <div
                    className={`w-3.5 h-3.5 rounded-full bg-white shadow-xs transition-transform duration-200 ease-out ${
                      isWithoutToggled ? 'translate-x-3.5' : 'translate-x-0'
                    }`}
                  />
                </div>
              </div>

              {/* Row 2: With Xylozen */}
              <div
                className="flex items-center justify-between pt-2.5 cursor-pointer group rounded-lg px-2 -mx-2 hover:bg-slate-50/80 transition-colors"
                onClick={toggleWith}
                role="switch"
                aria-checked={isWithToggled}
                aria-label="With Xylozen"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    toggleWith()
                  }
                }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`text-sm font-bold flex items-center transition-colors duration-200 ${
                      isWithToggled ? 'text-brand-500' : 'text-ink-500'
                    }`}
                  >
                    99%
                    <TrendingUp
                      className={`w-4 h-4 ml-1 transition-colors duration-200 ${
                        isWithToggled ? 'text-teal-600' : 'text-slate-400'
                      }`}
                    />
                  </span>
                  <span
                    className={`text-sm font-semibold transition-colors duration-200 ${
                      isWithToggled
                        ? 'text-brand-900'
                        : 'text-ink-500 group-hover:text-brand-700'
                    }`}
                  >
                    With Xylozen
                  </span>
                </div>
                <div
                  className={`w-8 h-4.5 rounded-full transition-colors duration-200 p-0.5 flex items-center ${
                    isWithToggled ? 'bg-teal-500' : 'bg-slate-200'
                  }`}
                >
                  <div
                    className={`w-3.5 h-3.5 rounded-full bg-white shadow-xs transition-transform duration-200 ease-out ${
                      isWithToggled ? 'translate-x-3.5' : 'translate-x-0'
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ===================================================================== */}
          {/* CENTER: Main Headline + Subtitle + Pill Buttons (bg-brand-gradient)  */}
          {/* ===================================================================== */}
          <div className="col-span-1 lg:col-span-6 text-center mx-auto max-w-2xl px-2">
            {/* Tagline pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-5 rounded-full bg-slate-100/80 border border-slate-200/60">
              <span className="text-small text-ink-500">
                Technology &bull; Innovation &bull; Solutions
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-display font-bold text-brand-900 mb-4 tracking-tight">
              Precision Operationalized
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lead text-ink-500 max-w-[54ch] mx-auto mb-6 sm:mb-8 px-1">
              From your first website to a fully automated business, designed, built, integrated,
              and maintained by one in-house team.
            </p>

            {/* Action Buttons (10% Action Orange CTA + Ghost Supporting) */}
            <div className="flex flex-row flex-wrap items-center justify-center gap-3 sm:gap-3.5 w-auto mx-auto">
              <button
                onClick={() => scrollToSection('contact')}
                className="group w-auto px-5 sm:px-8 py-2.5 sm:py-3 rounded-lg bg-cta hover:bg-[#C13010] text-white text-btn shadow-sm shadow-cta/20 hover:shadow-md transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
              >
                <span>Talk to us</span>
                <ArrowRight className="w-4.5 h-4.5 opacity-90 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollToSection('our-work')}
                className="w-auto px-5 sm:px-8 py-2.5 sm:py-3 rounded-lg bg-surface border border-line hover:border-slate-300 text-brand-900 hover:text-brand-500 text-btn transition-all duration-200 cursor-pointer shadow-xs flex items-center justify-center"
              >
                See our work
              </button>
            </div>
          </div>

          {/* ===================================================================== */}
          {/* TOP-RIGHT: Zero-Defect Security Card + Clean Grey Connectors          */}
          {/* ===================================================================== */}
          <div className="hidden lg:flex lg:col-span-3 justify-end relative">
            {/* Clean Grey Architectural Bus: Runs down, taps into security card, continues toward Pod */}
            <div className="absolute -right-6 -top-10 w-10 h-[210px] pointer-events-none">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 40 210">
                {/* Vertical bus line with top arrow */}
                <line x1="24" y1="0" x2="24" y2="48" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4 4" />
                <path d="M 24 6 L 20 14 M 24 6 L 28 14" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />

                {/* Horizontal tap into card's right edge */}
                <line x1="24" y1="48" x2="16" y2="48" stroke="#CBD5E1" strokeWidth="1.5" />
                <circle cx="16" cy="48" r="2.5" fill="#94A3B8" />

                {/* Vertical bus continuing down below card toward Pod */}
                <line x1="24" y1="48" x2="24" y2="180" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4 4" />
                <path d="M 24 180 L 20 172 M 24 180 L 28 172" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>

            {/* Card Body */}
            <div className="w-[230px] bg-white rounded-2xl p-4 border border-line shadow-md shadow-brand-900/[0.03] select-none hover:shadow-xl hover:scale-[1.02] transition-all duration-300 relative z-10">
              <div className="flex items-center gap-1.5 mb-3">
                <span className="w-2 h-2 rounded-full bg-teal-500" />
                <span className="text-sm font-semibold text-ink-500">
                  Zero-Defect Security
                </span>
              </div>

              <div
                className="w-full h-24 rounded-xl flex items-center justify-center relative overflow-hidden border border-line/50"
                style={{
                  backgroundImage: 'radial-gradient(circle, #CBD5E1 0.9px, transparent 0.9px)',
                  backgroundSize: '10px 10px',
                  backgroundColor: '#FAFAFA',
                }}
              >
                <div className="w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center shadow-sm relative z-10 transition-all duration-300 hover:scale-115 hover:shadow-lg hover:shadow-teal-500/30 cursor-pointer">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ----------------------------------------------------------------------- */}
        {/* BOTTOM TIER: Connected Architecture Workflow (Seamless Flow Pipeline)   */}
        {/* ----------------------------------------------------------------------- */}
        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6 items-center">
            
            {/* =================================================================== */}
            {/* 1. LEFT CARD: "Your Customers"                                      */}
            {/* =================================================================== */}
            <div className="md:col-span-4 flex flex-col relative">
              <div className="text-base font-sans font-semibold text-brand-900 mb-2 pl-0 md:pl-1 flex items-center justify-center md:justify-start gap-2">
                <Users className="w-4.5 h-4.5 text-brand-500" />
                <span>Your Customers</span>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-line shadow-lg shadow-brand-900/[0.03] hover:shadow-xl transition-all duration-300 relative h-[270px] flex flex-col justify-center">
                {/* 3x3 Grid */}
                <div className="grid grid-cols-3 gap-2.5 aspect-square max-w-[210px] mx-auto w-full">
                  <div className="rounded-xl bg-surface/70 border border-line/40 transition-colors duration-300 hover:bg-surface" />
                  <div className="rounded-xl overflow-hidden border border-line/60 bg-blue-50 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-115 hover:shadow-lg hover:shadow-blue-500/20 hover:border-blue-400 hover:z-20 relative">
                    <UserAvatar1 />
                  </div>
                  <div className="rounded-xl bg-surface/70 border border-line/40 transition-colors duration-300 hover:bg-surface" />

                  <div className="rounded-xl overflow-hidden border border-line/60 bg-teal-50 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-115 hover:shadow-lg hover:shadow-teal-500/20 hover:border-teal-400 hover:z-20 relative">
                    <UserAvatar2 />
                  </div>
                  <div className="rounded-xl bg-surface/70 border border-line/40 transition-colors duration-300 hover:bg-surface" />
                  <div className="rounded-xl overflow-hidden border border-line/60 bg-violet-50 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-115 hover:shadow-lg hover:shadow-violet-500/20 hover:border-violet-400 hover:z-20 relative">
                    <UserAvatar3 />
                  </div>

                  <div className="rounded-xl bg-surface/70 border border-line/40 transition-colors duration-300 hover:bg-surface" />
                  <div className="rounded-xl overflow-hidden border border-line/60 bg-amber-50 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-115 hover:shadow-lg hover:shadow-amber-500/20 hover:border-amber-400 hover:z-20 relative">
                    <UserAvatar4 />
                  </div>
                  <div className="rounded-xl bg-surface/70 border border-line/40 transition-colors duration-300 hover:bg-surface" />
                </div>

                {/* Left Edge Terminal Dot at Starting */}
                <div className="hidden md:block absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-slate-300 ring-4 ring-white shadow-xs z-20" />

                {/* Right Edge Terminal Dot (visible on desktop) */}
                <div className="hidden md:block absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-brand-500 ring-4 ring-white shadow-xs z-20" />

                {/* Mobile Bottom Terminal Dot */}
                <div className="md:hidden absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-brand-500 ring-4 ring-white shadow-xs z-20" />
              </div>

              {/* Mobile Vertical Down Connector to Card 2 */}
              <div className="md:hidden flex flex-col items-center justify-center py-2 relative h-10">
                <div className="w-[2px] h-full bg-gradient-to-b from-brand-500 to-slate-300" />
                <div className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-brand-500 animate-pulse ring-4 ring-white shadow-xs" />
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col relative">
              <div className="text-base font-sans font-semibold text-brand-900 mb-2 text-center flex items-center justify-center gap-2">
                <Zap className="w-4.5 h-4.5 text-brand-500" />
                <span>Autonomous Pipeline</span>
              </div>

              <div
                className="rounded-2xl border border-dashed border-slate-200 relative min-h-[300px] md:min-h-0 md:h-[270px] flex items-center justify-between p-3 sm:p-4 overflow-visible hover:border-slate-300 hover:shadow-md transition-all duration-300"
                style={{
                  backgroundImage: 'radial-gradient(circle, #CBD5E1 0.8px, transparent 0.8px)',
                  backgroundSize: '16px 16px',
                  backgroundColor: '#FBFBFC',
                }}
              >
                {/* ========================================================= */}
                {/* DESKTOP VIEW: Horizontal Architecture Workflow            */}
                {/* ========================================================= */}
                <div className="hidden md:flex items-center justify-between w-full h-full relative overflow-visible">
                  {/* Horizontal Bridge Line from Card 1 across the grid gap */}
                  <div className="absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 w-4 lg:w-6 h-[1.5px] bg-slate-300 rounded-full z-10" />
                  <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-slate-400 ring-2 ring-white shadow-xs z-20" />

                  {/* Left Branching Distributor Wires (from Left Edge to 3 Bubbles) */}
                  <svg
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-7 lg:w-8 h-[130px] pointer-events-none z-0"
                    viewBox="0 0 32 130"
                    fill="none"
                  >
                    {/* Branch to Top Bubble (Web & Software) */}
                    <path d="M 0 65 C 16 65, 12 16, 32 16" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />
                    {/* Branch to Center Bubble (Ecommerce) */}
                    <line x1="0" y1="65" x2="32" y2="65" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />
                    {/* Branch to Bottom Bubble (AI & Automation) */}
                    <path d="M 0 65 C 16 65, 12 114, 32 114" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>

                  {/* Three Clean Input Channel Bubbles */}
                  <div className="flex flex-col justify-between h-[130px] shrink-0 relative z-10 ml-0.5 sm:ml-1">
                    <div
                      className="w-7 h-7 rounded-full bg-white border border-slate-200 shadow-xs flex items-center justify-center text-brand-500 hover:scale-120 hover:shadow-md hover:shadow-brand-500/25 hover:border-brand-400 transition-all duration-300 cursor-pointer"
                      title="Web & Software Systems"
                    >
                      <Code2 className="w-3.5 h-3.5" />
                    </div>
                    <div
                      className="w-7 h-7 rounded-full bg-white border border-slate-200 shadow-xs flex items-center justify-center text-teal-600 hover:scale-120 hover:shadow-md hover:shadow-teal-500/25 hover:border-teal-400 transition-all duration-300 cursor-pointer"
                      title="Ecommerce Stores"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                    </div>
                    <div
                      className="w-7 h-7 rounded-full bg-white border border-slate-200 shadow-xs flex items-center justify-center text-violet-500 hover:scale-120 hover:shadow-md hover:shadow-violet-500/25 hover:border-violet-400 transition-all duration-300 cursor-pointer"
                      title="AI & Automation Pipelines"
                    >
                      <Database className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Delicate Grey Bezier Connector Wires Converging to Core Pill */}
                  <svg
                    className="w-6 sm:w-8 h-[130px] overflow-visible shrink-0 pointer-events-none"
                    viewBox="0 0 32 130"
                    fill="none"
                  >
                    {/* Top Bubble Wire to Center */}
                    <path d="M 0 16 C 16 16, 16 65, 32 65" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />
                    {/* Middle Bubble Wire to Center */}
                    <line x1="0" y1="65" x2="32" y2="65" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />
                    {/* Bottom Bubble Wire to Center */}
                    <path d="M 0 114 C 16 114, 16 65, 32 65" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>

                  {/* Central Core Pill (bg-brand-gradient) */}
                  <div className="relative group shrink-0 mx-1 sm:mx-2 z-10">
                    <div className="px-3.5 sm:px-4 py-2 rounded-full bg-brand-gradient text-white font-sans font-semibold text-xs sm:text-sm tracking-wide shadow-md shadow-brand-900/20 hover:shadow-xl hover:shadow-brand-900/30 hover:scale-105 transition-all duration-300 flex items-center gap-1.5 whitespace-nowrap cursor-pointer">
                      <Zap className="w-3.5 h-3.5 text-teal-300 fill-teal-300" />
                      <span>Xylozen</span>
                    </div>
                  </div>

                  {/* Clean Grey Connector to the Right with Verified Micro Badges */}
                  <div className="flex items-center shrink-0 z-10">
                    <div className="w-2 sm:w-3 h-[1.5px] bg-slate-300 rounded-full" />
                    <div
                      className="w-5 h-5 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-500 shadow-xs hover:scale-125 hover:shadow-md hover:shadow-amber-500/30 transition-all duration-300 cursor-pointer"
                      title="Autonomous Acceleration"
                    >
                      <Zap className="w-2.5 h-2.5 fill-amber-400" />
                    </div>
                    <div className="w-1.5 sm:w-2 h-[1.5px] bg-slate-300 rounded-full" />
                    <div
                      className="w-5 h-5 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600 shadow-xs hover:scale-125 hover:shadow-md hover:shadow-teal-500/30 transition-all duration-300 cursor-pointer"
                      title="Quality & Zero Defects Verified"
                    >
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <div className="w-2 sm:w-3 h-[1.5px] bg-slate-300 rounded-full" />
                  </div>

                  {/* Right Edge Terminal Dot and Bridge to Card 3 */}
                  <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-teal-500 ring-2 ring-white shadow-xs z-20" />
                  <div className="absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 w-4 lg:w-6 h-[1.5px] bg-slate-300 rounded-full z-10" />
                </div>

                {/* ========================================================= */}
                {/* MOBILE VIEW: Vertical Flow Architecture Pipeline          */}
                {/* ========================================================= */}
                <div className="md:hidden flex flex-col items-center justify-between h-full w-full py-1 z-10 relative">
                  {/* Top Incoming Terminal Dot from Card 1 */}
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-brand-500 ring-4 ring-white shadow-xs z-20" />

                  {/* Wire from Top Dot into the 3 Channel Bubbles */}
                  <div className="flex flex-col items-center w-full pt-1">
                    <div className="w-[1.5px] h-3 bg-slate-300" />

                    {/* 3 Input Channels across a clean horizontal row */}
                    <div className="flex items-center justify-center gap-6 sm:gap-8 w-full">
                      <div className="flex flex-col items-center gap-1 group">
                        <div className="w-8 h-8 rounded-full bg-white border border-slate-200 shadow-xs flex items-center justify-center text-brand-500">
                          <Code2 className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono text-ink-500 font-medium">Software</span>
                      </div>
                      <div className="flex flex-col items-center gap-1 group">
                        <div className="w-8 h-8 rounded-full bg-white border border-slate-200 shadow-xs flex items-center justify-center text-teal-600">
                          <ShoppingBag className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono text-ink-500 font-medium">Ecommerce</span>
                      </div>
                      <div className="flex flex-col items-center gap-1 group">
                        <div className="w-8 h-8 rounded-full bg-white border border-slate-200 shadow-xs flex items-center justify-center text-violet-500">
                          <Database className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono text-ink-500 font-medium">AI & Auto</span>
                      </div>
                    </div>

                    {/* Converging Vertical Lines to Center Xylozen Pill */}
                    <svg className="w-48 h-7 pointer-events-none mt-1" viewBox="0 0 192 28" fill="none">
                      <path d="M 32 0 C 32 14, 96 14, 96 28" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />
                      <line x1="96" y1="0" x2="96" y2="28" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M 160 0 C 160 14, 96 14, 96 28" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>

                  {/* Central Core Pill (Xylozen) */}
                  <div className="relative group my-1">
                    <div className="px-5 py-2.5 rounded-full bg-brand-gradient text-white font-sans font-semibold text-xs sm:text-sm tracking-wide shadow-md shadow-brand-900/20 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-teal-300 fill-teal-300" />
                      <span>Xylozen Core</span>
                    </div>
                  </div>

                  {/* Bottom: Micro Badges + Exit to Card 3 */}
                  <div className="flex flex-col items-center w-full">
                    <div className="w-[1.5px] h-2 bg-slate-300" />

                    <div className="flex items-center gap-2 py-1 px-3.5 rounded-full bg-white border border-slate-200 shadow-xs">
                      <div className="flex items-center gap-1.5 text-[11px] font-mono font-medium text-amber-700">
                        <div className="w-4 h-4 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-500">
                          <Zap className="w-2.5 h-2.5 fill-amber-400" />
                        </div>
                        <span>Accelerated</span>
                      </div>
                      <span className="text-slate-300">•</span>
                      <div className="flex items-center gap-1.5 text-[11px] font-mono font-medium text-teal-700">
                        <div className="w-4 h-4 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>Zero Defects</span>
                      </div>
                    </div>

                    <div className="w-[1.5px] h-2 bg-slate-300" />
                  </div>

                  {/* Bottom Outgoing Terminal Dot connecting to Card 3 */}
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-teal-500 ring-4 ring-white shadow-xs z-20" />
                </div>
              </div>

              {/* Mobile Vertical Down Connector to Card 3 */}
              <div className="md:hidden flex flex-col items-center justify-center py-2 relative h-10">
                <div className="w-[2px] h-full bg-gradient-to-b from-teal-500 to-amber-500" />
                <div className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse ring-4 ring-white shadow-xs" />
              </div>
            </div>

            {/* =================================================================== */}
            {/* 3. RIGHT CARD: "Your Dedicated Pod" (Constellation Layout)          */}
            {/* =================================================================== */}
            <div className="md:col-span-4 flex flex-col relative">
              <div className="text-base font-sans font-semibold text-brand-900 mb-2 flex items-center justify-center md:justify-end gap-2 pr-0 md:pr-1">
                <Zap className="w-4.5 h-4.5 text-amber-500 fill-amber-500" />
                <span>Your Dedicated Pod</span>
              </div>

              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-line shadow-lg shadow-brand-900/[0.03] hover:shadow-xl transition-all duration-300 relative h-[270px] flex flex-col justify-center">
                {/* Left Edge Terminal Dot receiving connection from Center Node (desktop) */}
                <div className="hidden md:block absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-amber-500 ring-4 ring-white shadow-xs z-20" />

                {/* Top Edge Terminal Dot receiving connection from Center Node (mobile) */}
                <div className="md:hidden absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-amber-500 ring-4 ring-white shadow-xs z-20" />

                {/* Constellation Container: exact geometric center matches SVG lines */}
                <div className="relative w-full h-[200px]">
                  
                  {/* Mathematically Aligned Constellation Lines */}
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none z-0"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Incoming wire from Center Node: from top on mobile, from left edge on desktop */}
                    <line className="md:hidden" x1="50%" y1="0" x2="50%" y2="50%" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="3 3" />
                    <line className="hidden md:block" x1="0" y1="50%" x2="50%" y2="50%" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="3 3" />

                    {/* Constellation rays from center hub (50%, 50%) to nodes */}
                    <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="#CBD5E1" strokeWidth="1.2" strokeDasharray="3 3" />
                    <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="#CBD5E1" strokeWidth="1.2" strokeDasharray="3 3" />
                    <line x1="50%" y1="50%" x2="18%" y2="76%" stroke="#CBD5E1" strokeWidth="1.2" strokeDasharray="3 3" />
                    <line x1="50%" y1="50%" x2="50%" y2="76%" stroke="#CBD5E1" strokeWidth="1.2" strokeDasharray="3 3" />
                    <line x1="50%" y1="50%" x2="82%" y2="76%" stroke="#CBD5E1" strokeWidth="1.2" strokeDasharray="3 3" />
                  </svg>

                  {/* Top Left: Architect */}
                  <div className="absolute left-[20%] top-[20%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10 group cursor-pointer">
                    <div className="w-8 h-8 rounded-full bg-brand-900/5 border border-line flex items-center justify-center overflow-hidden bg-white shadow-xs transition-all duration-300 group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-blue-500/25 group-hover:border-blue-500 group-hover:ring-2 group-hover:ring-blue-500/20">
                      <PodAvatar1 />
                    </div>
                    <span className="absolute top-full left-1/2 -translate-x-1/2 pt-1 whitespace-nowrap text-caption text-ink-500 group-hover:text-brand-900 font-medium transition-colors pointer-events-none text-center">
                      Architect
                    </span>
                  </div>

                  {/* Top Right: Full-Stack */}
                  <div className="absolute left-[80%] top-[20%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10 group cursor-pointer">
                    <div className="w-8 h-8 rounded-full bg-brand-900/5 border border-line flex items-center justify-center overflow-hidden bg-white shadow-xs transition-all duration-300 group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-indigo-500/25 group-hover:border-indigo-500 group-hover:ring-2 group-hover:ring-indigo-500/20">
                      <PodAvatar2 />
                    </div>
                    <span className="absolute top-full left-1/2 -translate-x-1/2 pt-1 whitespace-nowrap text-caption text-ink-500 group-hover:text-brand-900 font-medium transition-colors pointer-events-none text-center">
                      Full-Stack
                    </span>
                  </div>

                  {/* Center Hub: Dedicated Pod Core */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10 group cursor-pointer">
                    <div className="w-10 h-10 rounded-2xl bg-white border border-amber-300/80 shadow-sm flex items-center justify-center relative transition-all duration-300 group-hover:scale-115 group-hover:shadow-lg group-hover:shadow-amber-500/30 group-hover:border-amber-400">
                      <div className="w-5 h-5 rounded-full bg-amber-500/15 flex items-center justify-center">
                        <Zap className="w-3 h-3 text-amber-500 fill-amber-500" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Left: Automation */}
                  <div className="absolute left-[18%] top-[76%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10 group cursor-pointer">
                    <div className="w-8 h-8 rounded-full bg-violet-50 border border-violet-200 text-violet-600 flex items-center justify-center shadow-xs transition-all duration-300 group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-violet-500/30 group-hover:border-violet-400 group-hover:ring-2 group-hover:ring-violet-500/20">
                      <Bot className="w-4 h-4" />
                    </div>
                    <span className="absolute top-full left-1/2 -translate-x-1/2 pt-1 whitespace-nowrap text-caption text-ink-500 group-hover:text-violet-700 font-medium transition-colors pointer-events-none text-center">
                      Automation
                    </span>
                  </div>

                  {/* Bottom Center: Delivery */}
                  <div className="absolute left-1/2 top-[76%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10 group cursor-pointer">
                    <div className="w-8 h-8 rounded-full bg-brand-900/5 border border-line flex items-center justify-center overflow-hidden bg-white shadow-xs transition-all duration-300 group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-pink-500/25 group-hover:border-pink-500 group-hover:ring-2 group-hover:ring-pink-500/20">
                      <PodAvatar3 />
                    </div>
                    <span className="absolute top-full left-1/2 -translate-x-1/2 pt-1 whitespace-nowrap text-caption text-ink-500 group-hover:text-brand-900 font-medium transition-colors pointer-events-none text-center">
                      Delivery
                    </span>
                  </div>

                  {/* Bottom Right: Decision */}
                  <div className="absolute left-[82%] top-[76%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10 group cursor-pointer">
                    <div className="w-8 h-8 rounded-full bg-teal-50 border border-teal-200 text-teal-600 flex items-center justify-center shadow-xs transition-all duration-300 group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-teal-500/30 group-hover:border-teal-400 group-hover:ring-2 group-hover:ring-teal-500/20">
                      <Brain className="w-4 h-4" />
                    </div>
                    <span className="absolute top-full left-1/2 -translate-x-1/2 pt-1 whitespace-nowrap text-caption text-ink-500 group-hover:text-teal-700 font-medium transition-colors pointer-events-none text-center">
                      Decision
                    </span>
                  </div>

                </div>

                {/* Clean Grey Exit Line dropping straight down toward Marquee */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-full w-8 h-10 pointer-events-none">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 32 40">
                    <line x1="16" y1="0" x2="16" y2="30" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4 4" />
                    <path d="M 16 30 L 12 22 M 16 30 L 20 22" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>

                {/* Mobile Bottom Terminal Indicator */}
                <div className="md:hidden absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-slate-300 ring-4 ring-white shadow-xs z-20" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

// =============================================================================
// REAL USER PROFILE AVATARS
// =============================================================================

function UserAvatar1() {
  return (
    <Image
      src={customer1}
      alt="Customer testimonial avatar"
      fill
      priority
      sizes="32px"
      className="object-cover object-center"
    />
  )
}

function UserAvatar2() {
  return (
    <Image
      src={customer2}
      alt="Customer testimonial avatar"
      fill
      priority
      sizes="32px"
      className="object-cover object-center"
    />
  )
}

function UserAvatar3() {
  return (
    <Image
      src={customer3}
      alt="Customer testimonial avatar"
      fill
      priority
      sizes="32px"
      className="object-cover object-center"
    />
  )
}

function UserAvatar4() {
  return (
    <Image
      src={customer4}
      alt="Customer testimonial avatar"
      fill
      priority
      sizes="32px"
      className="object-cover object-center"
    />
  )
}

function PodAvatar1() {
  return (
    <Image
      src={podArchitect}
      alt="Dedicated pod architect team member"
      fill
      priority
      sizes="32px"
      className="object-cover object-center rounded-full"
    />
  )
}

function PodAvatar2() {
  return (
    <Image
      src={podFullstack}
      alt="Dedicated pod full-stack engineer"
      fill
      priority
      sizes="32px"
      className="object-cover object-center rounded-full"
    />
  )
}

function PodAvatar3() {
  return (
    <Image
      src={podDelivery}
      alt="Dedicated pod delivery specialist"
      fill
      priority
      sizes="32px"
      className="object-cover object-center rounded-full"
    />
  )
}
