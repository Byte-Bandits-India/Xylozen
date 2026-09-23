import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { ScrollExpand } from '@/components/ScrollExpand'
import scrollExpandImg from '@/assets/home/scrollExpand.webp'
import { WhatWeDo } from '@/components/sections/WhatWeDo'
import { OurWork } from '@/components/sections/OurWork'
import { Industries } from '@/components/sections/Industries'
import { WhyXylozen } from '@/components/sections/WhyXylozen'
import { FinalCTA } from '@/components/sections/FinalCTA'

export const metadata: Metadata = {
  title: 'Xylozen Technologies | Precision Operationalized',
  description:
    'From your first website to a fully automated business, designed, built, integrated, and maintained by one team. International-standard engineering for web, commerce, and AI automation.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Xylozen Technologies | Precision Operationalized',
    description:
      'From your first website to a fully automated business, designed, built, integrated, and maintained by one team.',
    url: 'https://xylozen.com',
    siteName: 'Xylozen Technologies',
    images: [
      {
        url: '/opengraph.webp',
        width: 1200,
        height: 630,
        alt: 'Xylozen Technologies',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xylozen Technologies | Precision Operationalized',
    description:
      'From your first website to a fully automated business, designed, built, integrated, and maintained by one team.',
    images: ['/opengraph.webp'],
  },
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ScrollExpand src={scrollExpandImg.src} shrinkAmount={0.11}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-white text-center flex flex-col items-center justify-center my-auto w-full select-none">
            {/* Main Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-h1 font-bold text-white mb-3 tracking-tight leading-tight">
              Where Clean Architecture <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-teal-200 to-white">
                Powers Unbroken Execution
              </span>
            </h2>

            {/* Subtext */}
            <p className="text-small sm:text-body text-slate-200/90 max-w-2xl mx-auto mb-4 sm:mb-8 px-2 leading-relaxed">
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

