'use client'

import React from 'react'
import { Check } from 'lucide-react'

// =============================================================================
// MAIN COMPONENT: OurWork SECTION
// Content EXCLUSIVELY from info/Content/OurWork.MD and info/Content/HomePage.MD
// UI structured as requested: Simple, clean, proper sticky card stack
// =============================================================================

export function OurWork() {
  return (
    <section
      id="our-work"
      className="py-6 sm:py-4 bg-[#FFFFFF] relative selection:bg-brand-500 selection:text-white"
    >
      <div className="container-section  w-full">
        {/* ===================================================================== */}
        {/* ===================================================================== */}
        {/* 1. SECTION HEADER (Strictly from OurWork.MD & HomePage.MD)            */}
        {/* ===================================================================== */}
        <div className="mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-badge text-slate-700 mb-3">
            <span className="w-2 h-2 rounded-full bg-cta" />
            Our Work
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-h1 font-bold text-slate-900">
            Precision, in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-900 via-brand-700 to-brand-500">
              production
            </span>
          </h2>
          <p className="text-base sm:text-lead font-semibold text-slate-800 pt-2 sm:pt-3">
            Real products. Complex challenges. Measurable outcomes.
          </p>
          <p className="text-sm sm:text-lead text-slate-600 max-w-2xl pt-1.5 leading-relaxed">
            At Xylozen, we work beyond conventional software delivery. We identify operational challenges, engineer intelligent solutions, and take ownership from concept to deployment. Our selected projects demonstrate how AI-native systems, web applications, and custom digital platforms can create measurable business value.
          </p>
        </div>

        {/* ===================================================================== */}
        {/* 2. STICKY OVERLAPPING CARDS STACK                                     */}
        {/* ===================================================================== */}
        <div className="relative w-full pt-2 sm:pt-4 pb-10">
          {/* ------------------------------------------------------------------- */}
          {/* CARD 1: Titan × Tata — Remote Eye Examination Platform              */}
          {/* ------------------------------------------------------------------- */}
          <div
            className="relative lg:sticky lg:top-[124px] mb-8 sm:mb-12 lg:mb-[150px] transition-all duration-300"
            style={{
              zIndex: 10,
            }}
          >
            <div className="w-full rounded-2xl sm:rounded-[36px] bg-[#F4F5F7] border border-slate-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.04)] p-4 sm:p-7 lg:p-10 xl:p-12 min-h-0 lg:min-h-[530px] flex items-center overflow-hidden transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-12 items-center w-full">
                {/* Left Column: Project Overview */}
                <div className="lg:col-span-5 flex flex-col justify-center">
                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl lg:text-h2 font-bold text-slate-900 mb-2 sm:mb-3">
                    Titan &times; Tata &mdash; Remote Eye Examination Platform
                  </h3>

                  {/* Challenge Description */}
                  <p className="text-sm sm:text-body text-slate-600 mb-4 sm:mb-5 max-w-md leading-relaxed">
                    Titan &times; Tata required a solution that could connect customers with expert optometrists without requiring an optometrist to be physically present at every location.
                  </p>
                </div>

                {/* Right Column: Clean White Screen with Platform Capabilities */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-7 shadow-xs border border-slate-200/90 relative overflow-hidden select-none w-full min-h-0 sm:min-h-[380px] flex flex-col justify-between">
                    <div>
                      {/* Top Header */}
                      <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
                        <div>
                          <div className="text-base sm:text-h3 font-bold text-slate-900">
                            Titan &times; Tata
                          </div>
                          <div className="text-xs sm:text-small text-slate-500 mt-0.5">
                            Remote examination and assisted sales platform
                          </div>
                        </div>
                        <span className="hidden sm:inline-flex px-2.5 py-1 rounded-md bg-slate-100 text-xs font-semibold text-slate-600">
                          Production
                        </span>
                      </div>

                      {/* Capabilities List */}
                      <div className="mt-3 sm:mt-4 space-y-2 sm:space-y-2.5">
                        <div className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                          The platform enabled:
                        </div>
                        <div className="rounded-xl border border-slate-200/80 divide-y divide-slate-100 text-xs sm:text-body overflow-hidden">
                          <div className="flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-2.5 sm:py-3 bg-white text-slate-800 font-medium">
                            <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
                            <span>Live video consultations with optometrists</span>
                          </div>
                          <div className="flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-2.5 sm:py-3 bg-slate-50/50 text-slate-800 font-medium">
                            <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
                            <span>Remote access to in-store examination devices</span>
                          </div>
                          <div className="flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-2.5 sm:py-3 bg-white text-slate-800 font-medium">
                            <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
                            <span>Real-time machine operation</span>
                          </div>
                          <div className="flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-2.5 sm:py-3 bg-slate-50/50 text-slate-800 font-medium">
                            <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
                            <span>Instant diagnostic data capture</span>
                          </div>
                          <div className="flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-2.5 sm:py-3 bg-white text-slate-800 font-medium">
                            <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
                            <span>Direct integration with the sales workflow</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------------- */}
          {/* CARD 2: HireAI — Intelligent Recruitment Platform                   */}
          {/* ------------------------------------------------------------------- */}
          <div
            className="relative lg:sticky lg:top-[166px] mb-8 sm:mb-12 lg:mb-[150px] transition-all duration-300"
            style={{
              zIndex: 20,
            }}
          >
            <div className="w-full rounded-2xl sm:rounded-[36px] bg-[#F4F5F7] border border-slate-200/90 shadow-[0_-16px_36px_rgba(0,0,0,0.08),0_24px_48px_rgba(0,0,0,0.06)] p-4 sm:p-7 lg:p-10 xl:p-12 min-h-0 lg:min-h-[530px] flex items-center overflow-hidden transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-12 items-center w-full">
                {/* Left Column: Project Overview */}
                <div className="lg:col-span-5 flex flex-col justify-center">

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl lg:text-h2 font-bold text-slate-900 mb-2 sm:mb-3">
                    HireAI &mdash; Intelligent Recruitment Platform
                  </h3>

                  {/* Challenge Description */}
                  <p className="text-sm sm:text-body text-slate-600 mb-4 sm:mb-5 max-w-md leading-relaxed">
                    Traditional recruitment workflows often require recruiters to manually review large volumes of resumes, resulting in delays and inconsistent screening. Xylozen developed HireAI, a cloud-based recruitment platform designed to automate and improve the candidate screening process.
                  </p>
                </div>

                {/* Right Column: Clean White Screen with Platform Capabilities */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-7 shadow-xs border border-slate-200/90 relative overflow-hidden select-none w-full min-h-0 sm:min-h-[380px] flex flex-col justify-between">
                    <div>
                      {/* Top Header */}
                      <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
                        <div>
                          <div className="text-base sm:text-h3 font-bold text-slate-900">
                            HireAI
                          </div>
                          <div className="text-xs sm:text-small text-slate-500 mt-0.5">
                            AI-powered recruitment Micro-SaaS
                          </div>
                        </div>
                        <span className="hidden sm:inline-flex px-2.5 py-1 rounded-md bg-slate-100 text-xs font-semibold text-slate-600">
                          Micro-SaaS
                        </span>
                      </div>

                      {/* Capabilities List */}
                      <div className="mt-3 sm:mt-4 space-y-2 sm:space-y-2.5">
                        <div className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                          The platform included:
                        </div>
                        <div className="rounded-xl border border-slate-200/80 divide-y divide-slate-100 text-xs sm:text-body overflow-hidden">
                          <div className="flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-2.5 sm:py-3 bg-white text-slate-800 font-medium">
                            <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
                            <span>AI-powered resume parsing</span>
                          </div>
                          <div className="flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-2.5 sm:py-3 bg-slate-50/50 text-slate-800 font-medium">
                            <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
                            <span>Natural language processing for skill extraction</span>
                          </div>
                          <div className="flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-2.5 sm:py-3 bg-white text-slate-800 font-medium">
                            <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
                            <span>Intelligent candidate ranking</span>
                          </div>
                          <div className="flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-2.5 sm:py-3 bg-slate-50/50 text-slate-800 font-medium">
                            <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
                            <span>Recruiter dashboards</span>
                          </div>
                          <div className="flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-2.5 sm:py-3 bg-white text-slate-800 font-medium">
                            <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
                            <span>Recruitment analytics</span>
                          </div>
                          <div className="flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-2.5 sm:py-3 bg-slate-50/50 text-slate-800 font-medium">
                            <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
                            <span>Cloud-based Micro-SaaS architecture</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------------- */}
          {/* CARD 3: AI-Powered Construction Safety Monitoring                   */}
          {/* ------------------------------------------------------------------- */}
          <div
            className="relative lg:sticky lg:top-[208px] mb-6 sm:mb-10 lg:mb-[100px] transition-all duration-300"
            style={{
              zIndex: 30,
            }}
          >
            <div className="w-full rounded-2xl sm:rounded-[36px] bg-[#F4F5F7] border border-slate-200/90 shadow-[0_-20px_44px_rgba(0,0,0,0.1),0_28px_56px_rgba(0,0,0,0.08)] p-4 sm:p-7 lg:p-10 xl:p-12 min-h-0 lg:min-h-[530px] flex items-center overflow-hidden transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-12 items-center w-full">
                {/* Left Column: Project Overview */}
                <div className="lg:col-span-5 flex flex-col justify-center">

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl lg:text-h2 font-bold text-slate-900 mb-2 sm:mb-3">
                    AI-Powered Construction Safety Monitoring
                  </h3>

                  {/* Challenge Description */}
                  <p className="text-sm sm:text-body text-slate-600 mb-4 sm:mb-5 max-w-md leading-relaxed">
                    Construction companies often depend on manual inspections to monitor safety compliance across active sites. This approach can be time-consuming, inconsistent, and difficult to scale across multiple locations. Xylozen engineered an AI-powered monitoring system using computer vision to identify safety violations and support centralized compliance management.
                  </p>
                </div>

                {/* Right Column: Clean White Screen with Platform Capabilities */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-7 shadow-xs border border-slate-200/90 relative overflow-hidden select-none w-full min-h-0 sm:min-h-[380px] flex flex-col justify-between">
                    <div>
                      {/* Top Header */}
                      <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
                        <div>
                          <div className="text-base sm:text-h3 font-bold text-slate-900">
                            VisionGuard
                          </div>
                          <div className="text-xs sm:text-small text-slate-500 mt-0.5">
                            Computer vision-based safety monitoring system
                          </div>
                        </div>
                        <span className="hidden sm:inline-flex px-2.5 py-1 rounded-md bg-slate-100 text-xs font-semibold text-slate-600">
                          CV Platform
                        </span>
                      </div>

                      {/* Capabilities List */}
                      <div className="mt-3 sm:mt-4 space-y-2 sm:space-y-2.5">
                        <div className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                          The system enabled:
                        </div>
                        <div className="rounded-xl border border-slate-200/80 divide-y divide-slate-100 text-xs sm:text-body overflow-hidden">
                          <div className="flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-2.5 sm:py-3 bg-white text-slate-800 font-medium">
                            <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
                            <span>Automated PPE and helmet detection</span>
                          </div>
                          <div className="flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-2.5 sm:py-3 bg-slate-50/50 text-slate-800 font-medium">
                            <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
                            <span>Real-time safety alerts</span>
                          </div>
                          <div className="flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-2.5 sm:py-3 bg-white text-slate-800 font-medium">
                            <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
                            <span>Centralized compliance dashboards</span>
                          </div>
                          <div className="flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-2.5 sm:py-3 bg-slate-50/50 text-slate-800 font-medium">
                            <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
                            <span>Multi-site monitoring</span>
                          </div>
                          <div className="flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-2.5 sm:py-3 bg-white text-slate-800 font-medium">
                            <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
                            <span>Audit trails</span>
                          </div>
                          <div className="flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-2.5 sm:py-3 bg-slate-50/50 text-slate-800 font-medium">
                            <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
                            <span>Streamlined reporting</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
