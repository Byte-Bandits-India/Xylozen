import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { ScrollExpand } from '@/components/ScrollExpand'
import scrollExpandImg from '@/assets/home/scrollExpand.jpg'
import { WhatWeDo } from '@/components/sections/WhatWeDo'
import { OurWork } from '@/components/sections/OurWork'
import { Industries } from '@/components/sections/Industries'
import { WhyXylozen } from '@/components/sections/WhyXylozen'
import { FinalCTA } from '@/components/sections/FinalCTA'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ScrollExpand src={scrollExpandImg.src} shrinkAmount={0.11}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-white text-center flex flex-col items-center select-none">
            {/* Main Headline */}
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-display font-bold text-white mb-4 sm:mb-6 tracking-tight">
              Where Clean Architecture <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-teal-200 to-white">
                Powers Unbroken Execution
              </span>
            </h2>

            {/* Subtext */}
            <p className="text-sm sm:text-base md:text-lead text-slate-200/90 max-w-2xl mx-auto mb-6 sm:mb-10 px-2 leading-relaxed">
              Every system is engineered for longevity, high concurrency, and zero downtime.
              Your dedicated pod designs, builds, and maintains your complete technical infrastructure.
            </p>
          </div>
        </ScrollExpand>
        <WhatWeDo />
        <OurWork />
        <Industries />
        <WhyXylozen />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}

