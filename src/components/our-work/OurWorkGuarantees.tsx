import React from 'react'
import { Layers, ShieldCheck, Activity } from 'lucide-react'

export function OurWorkGuarantees() {
  return (
    <section className="py-16 sm:py-20 bg-surface/30 border-b border-line">
      <div className="container-section">
        <div className="mb-12 max-w-2xl">
          <span className="text-badge font-mono uppercase tracking-wider text-brand-500 mb-2 block">
            DELIVERY GUARANTEES
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-h2 font-bold text-brand-900 tracking-tight">
            How Xylozen executes production systems
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-line rounded-card p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-700 mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-h3 font-semibold text-brand-900 mb-2">
                One Team, Three Capabilities
              </h3>
              <p className="text-small text-ink-500 leading-relaxed">
                AI, web software, and high-velocity commerce unified under one roof—never stitched together
                across disparate agency vendors or third-party freelancers.
              </p>
            </div>
          </div>

          <div className="bg-white border border-line rounded-card p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-700 mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-h3 font-semibold text-brand-900 mb-2">
                Delivery, Not Just Design
              </h3>
              <p className="text-small text-ink-500 leading-relaxed">
                International-standard execution. We don’t deliver Figma mocks and walk away—we write strict,
                typed code, deploy containers, run test suites, and guarantee uptime.
              </p>
            </div>
          </div>

          <div className="bg-white border border-line rounded-card p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-700 mb-4">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="text-h3 font-semibold text-brand-900 mb-2">
                Direct Engineering Access
              </h3>
              <p className="text-small text-ink-500 leading-relaxed">
                Zero account management bloat. You collaborate directly with the lead architects and senior
                engineers writing your code and designing your infrastructure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
