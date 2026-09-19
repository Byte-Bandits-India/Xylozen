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
        {/* 1. SECTION HEADER (Strictly from OurWork.MD & HomePage.MD)            */}
        {/* ===================================================================== */}
        <div className="mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-badge text-slate-700 mb-3">
            <span className="w-2 h-2 rounded-full bg-cta" />
            Our Work
          </div>
          <h2 className="text-h1 font-bold text-slate-900">
            Precision, in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-900 via-brand-700 to-brand-500">
              production
            </span>
          </h2>
          <p className="text-lead font-semibold text-slate-800 pt-3">
            Real products. Complex challenges. Measurable outcomes.
          </p>
          <p className="text-lead text-slate-600 max-w-2xl pt-1.5">
            At Xylozen, we work beyond conventional software delivery. We identify operational challenges, engineer intelligent solutions, and take ownership from concept to deployment. Our selected projects demonstrate how AI-native systems, web applications, and custom digital platforms can create measurable business value.
          </p>
        </div>

        {/* ===================================================================== */}
        {/* 2. STICKY OVERLAPPING CARDS STACK                                     */}
        {/* ===================================================================== */}
        <div className="relative w-full pt-4 pb-10">
          {/* ------------------------------------------------------------------- */}
          {/* CARD 1: Titan × Tata — Remote Eye Examination Platform              */}
          {/* ------------------------------------------------------------------- */}
          <div
            className="sticky top-[112px] sm:top-[118px] lg:top-[124px] transition-all duration-300"
            style={{
              zIndex: 10,
              marginBottom: '150px',
            }}
          >
            <div className="w-full rounded-[28px] sm:rounded-[36px] bg-[#F4F5F7] border border-slate-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.04)] p-6 sm:p-8 lg:p-10 xl:p-12 min-h-[500px] lg:min-h-[530px] flex items-center overflow-hidden transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
                {/* Left Column: Project Overview */}
                <div className="lg:col-span-5 flex flex-col justify-center">
                  {/* Title */}
                  <h3 className="text-h2 font-bold text-slate-900 mb-3">
                    Titan &times; Tata &mdash; Remote Eye Examination Platform
                  </h3>

                  {/* Challenge Description */}
                  <p className="text-body text-slate-600 mb-5 max-w-md">
                    Titan &times; Tata required a solution that could connect customers with expert optometrists without requiring an optometrist to be physically present at every location.
                  </p>
                </div>

                {/* Right Column: Clean White Screen with Platform Capabilities */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-slate-200/90 relative overflow-hidden select-none w-full min-h-[380px] flex flex-col justify-between">
                    <div>
                      {/* Top Header */}
                      <div className="pb-3.5 border-b border-slate-100 flex items-center justify-between">
                        <div>
                          <div className="text-h3 font-bold text-slate-900">
                            Titan &times; Tata &mdash; Remote Eye Examination Platform
                          </div>
                          <div className="text-small text-slate-500 mt-0.5">
                            Remote examination and assisted sales platform
                          </div>
                        </div>
                      </div>

                      {/* Capabilities List */}
                      <div className="mt-4 space-y-2.5">
                        <div className="text-badge text-slate-800">
                          The platform enabled:
                        </div>
                        <div className="rounded-xl border border-slate-200/80 divide-y divide-slate-100 text-body overflow-hidden">
                          <div className="flex items-center gap-3 px-4 py-3 bg-white text-slate-800 font-medium">
                            <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>Live video consultations with optometrists</span>
                          </div>
                          <div className="flex items-center gap-3 px-4 py-3 bg-slate-50/50 text-slate-800 font-medium">
                            <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>Remote access to in-store examination devices</span>
                          </div>
                          <div className="flex items-center gap-3 px-4 py-3 bg-white text-slate-800 font-medium">
                            <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>Real-time machine operation</span>
                          </div>
                          <div className="flex items-center gap-3 px-4 py-3 bg-slate-50/50 text-slate-800 font-medium">
                            <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>Instant diagnostic data capture</span>
                          </div>
                          <div className="flex items-center gap-3 px-4 py-3 bg-white text-slate-800 font-medium">
                            <Check className="w-4 h-4 text-emerald-600 shrink-0" />
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
            className="sticky top-[144px] sm:top-[154px] lg:top-[166px] transition-all duration-300"
            style={{
              zIndex: 20,
              marginBottom: '150px',
            }}
          >
            <div className="w-full rounded-[28px] sm:rounded-[36px] bg-[#F4F5F7] border border-slate-200/90 shadow-[0_-16px_36px_rgba(0,0,0,0.08),0_24px_48px_rgba(0,0,0,0.06)] p-6 sm:p-8 lg:p-10 xl:p-12 min-h-[500px] lg:min-h-[530px] flex items-center overflow-hidden transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
                {/* Left Column: Project Overview */}
                <div className="lg:col-span-5 flex flex-col justify-center">

                  {/* Title */}
                  <h3 className="text-h2 font-bold text-slate-900 mb-3">
                    HireAI &mdash; Intelligent Recruitment Platform
                  </h3>

                  {/* Challenge Description */}
                  <p className="text-body text-slate-600 mb-5 max-w-md">
                    Traditional recruitment workflows often require recruiters to manually review large volumes of resumes, resulting in delays and inconsistent screening. Xylozen developed HireAI, a cloud-based recruitment platform designed to automate and improve the candidate screening process.
                  </p>
                </div>

                {/* Right Column: Clean White Screen with Platform Capabilities */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-slate-200/90 relative overflow-hidden select-none w-full min-h-[380px] flex flex-col justify-between">
                    <div>
                      {/* Top Header */}
                      <div className="pb-3.5 border-b border-slate-100 flex items-center justify-between">
                        <div>
                          <div className="text-h3 font-bold text-slate-900">
                            HireAI &mdash; Intelligent Recruitment Platform
                          </div>
                          <div className="text-small text-slate-500 mt-0.5">
                            AI-powered recruitment Micro-SaaS
                          </div>
                        </div>
                      </div>

                      {/* Capabilities List */}
                      <div className="mt-4 space-y-2.5">
                        <div className="text-badge text-slate-800">
                          The platform included:
                        </div>
                        <div className="rounded-xl border border-slate-200/80 divide-y divide-slate-100 text-body overflow-hidden">
                          <div className="flex items-center gap-3 px-4 py-3 bg-white text-slate-800 font-medium">
                            <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>AI-powered resume parsing</span>
                          </div>
                          <div className="flex items-center gap-3 px-4 py-3 bg-slate-50/50 text-slate-800 font-medium">
                            <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>Natural language processing for skill extraction</span>
                          </div>
                          <div className="flex items-center gap-3 px-4 py-3 bg-white text-slate-800 font-medium">
                            <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>Intelligent candidate ranking</span>
                          </div>
                          <div className="flex items-center gap-3 px-4 py-3 bg-slate-50/50 text-slate-800 font-medium">
                            <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>Recruiter dashboards</span>
                          </div>
                          <div className="flex items-center gap-3 px-4 py-3 bg-white text-slate-800 font-medium">
                            <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>Recruitment analytics</span>
                          </div>
                          <div className="flex items-center gap-3 px-4 py-3 bg-slate-50/50 text-slate-800 font-medium">
                            <Check className="w-4 h-4 text-emerald-600 shrink-0" />
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
            className="sticky top-[176px] sm:top-[190px] lg:top-[208px] transition-all duration-300"
            style={{
              zIndex: 30,
              marginBottom: '100px',
            }}
          >
            <div className="w-full rounded-[28px] sm:rounded-[36px] bg-[#F4F5F7] border border-slate-200/90 shadow-[0_-20px_44px_rgba(0,0,0,0.1),0_28px_56px_rgba(0,0,0,0.08)] p-6 sm:p-8 lg:p-10 xl:p-12 min-h-[500px] lg:min-h-[530px] flex items-center overflow-hidden transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
                {/* Left Column: Project Overview */}
                <div className="lg:col-span-5 flex flex-col justify-center">

                  {/* Title */}
                  <h3 className="text-h2 font-bold text-slate-900 mb-3">
                    AI-Powered Construction Safety Monitoring
                  </h3>

                  {/* Challenge Description */}
                  <p className="text-body text-slate-600 mb-5 max-w-md">
                    Construction companies often depend on manual inspections to monitor safety compliance across active sites. This approach can be time-consuming, inconsistent, and difficult to scale across multiple locations. Xylozen engineered an AI-powered monitoring system using computer vision to identify safety violations and support centralized compliance management.
                  </p>
                </div>

                {/* Right Column: Clean White Screen with Platform Capabilities */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-slate-200/90 relative overflow-hidden select-none w-full min-h-[380px] flex flex-col justify-between">
                    <div>
                      {/* Top Header */}
                      <div className="pb-3.5 border-b border-slate-100 flex items-center justify-between">
                        <div>
                          <div className="text-h3 font-bold text-slate-900">
                            AI-Powered Construction Safety Monitoring
                          </div>
                          <div className="text-small text-slate-500 mt-0.5">
                            Computer vision-based safety monitoring system
                          </div>
                        </div>
                      </div>

                      {/* Capabilities List */}
                      <div className="mt-4 space-y-2.5">
                        <div className="text-badge text-slate-800">
                          The system enabled:
                        </div>
                        <div className="rounded-xl border border-slate-200/80 divide-y divide-slate-100 text-body overflow-hidden">
                          <div className="flex items-center gap-3 px-4 py-3 bg-white text-slate-800 font-medium">
                            <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>Automated PPE and helmet detection</span>
                          </div>
                          <div className="flex items-center gap-3 px-4 py-3 bg-slate-50/50 text-slate-800 font-medium">
                            <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>Real-time safety alerts</span>
                          </div>
                          <div className="flex items-center gap-3 px-4 py-3 bg-white text-slate-800 font-medium">
                            <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>Centralized compliance dashboards</span>
                          </div>
                          <div className="flex items-center gap-3 px-4 py-3 bg-slate-50/50 text-slate-800 font-medium">
                            <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>Multi-site monitoring</span>
                          </div>
                          <div className="flex items-center gap-3 px-4 py-3 bg-white text-slate-800 font-medium">
                            <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>Audit trails</span>
                          </div>
                          <div className="flex items-center gap-3 px-4 py-3 bg-slate-50/50 text-slate-800 font-medium">
                            <Check className="w-4 h-4 text-emerald-600 shrink-0" />
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
