'use client'

import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { aboutDeliveryStages } from '@/components/about/about-data'

export function OurWorkHowWeWork() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const checkScroll = () => {
    if (!sliderRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current
    setCanScrollLeft(scrollLeft > 10)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
  }

  useEffect(() => {
    checkScroll()
    const el = sliderRef.current
    if (el) {
      el.addEventListener('scroll', checkScroll, { passive: true })
      window.addEventListener('resize', checkScroll)
      return () => {
        el.removeEventListener('scroll', checkScroll)
        window.removeEventListener('resize', checkScroll)
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current)
        }
      }
    }
  }, [])

  const handleScroll = (direction: 'left' | 'right') => {
    const container = sliderRef.current
    if (!container) return

    const cards = Array.from(container.children) as HTMLElement[]
    if (!cards.length) return

    const containerRect = container.getBoundingClientRect()
    const currentScroll = container.scrollLeft

    const cardPositions = cards.map((card) => { const cardRect = card.getBoundingClientRect()
      return cardRect.left - containerRect.left + currentScroll
    })

    let targetLeft: number

    if (direction === 'right') {
      const nextPos = cardPositions.find((pos) => pos > currentScroll + 15)
      targetLeft = nextPos !== undefined ? nextPos : container.scrollWidth - container.clientWidth
    } else {
      const prevPositions = cardPositions.filter((pos) => pos < currentScroll - 15)
      targetLeft = prevPositions.length > 0 ? prevPositions[prevPositions.length - 1] : 0
    }
    container.style.scrollSnapType = 'none'

    container.scrollTo({
      left: Math.max(0, targetLeft),
      behavior: 'smooth',
    })

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current)
    }

    const reenableSnap = () => {
      if (container) {
        container.style.scrollSnapType = ''
      }
      checkScroll()
    }

    if ('onscrollend' in window) {
      container.addEventListener('scrollend', reenableSnap, { once: true })
    }
    scrollTimeoutRef.current = setTimeout(reenableSnap, 500)
  }

  return (
    <section id="how-we-work" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-line select-none overflow-hidden">
      <div className="container-section">
        {/* Section Header with Proper Typography Tokens from globals.css */}
        <div className="mb-8 sm:mb-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-badge text-slate-700 mb-3 font-medium">
            <span className="w-2 h-2 rounded-full bg-cta" />
            <span>DISCIPLINED DELIVERY FRAMEWORK</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-h2 font-medium text-brand-900 tracking-tight leading-tight mb-3">
            A Disciplined Approach to Building High-Value Digital Products
          </h2>
          <p className="text-small sm:text-body text-ink-500 leading-relaxed font-normal">
            At Xylozen, every engagement begins with business understanding, not a technology stack. We combine strategic discovery, product thinking, and engineering excellence to create solutions that are commercially relevant, technically resilient, and built for long-term value.
          </p>
        </div>

        {/* Horizontal Scroll Card Carousel: Wrapped in container on left, full width on right */}
        <div
          ref={sliderRef}
          style={{
            width: 'calc(50vw + 50%)',
            marginRight: 'calc(-50vw + 50%)',
          }}
          className="flex gap-6 sm:gap-8 overflow-x-auto scroll-smooth scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory pb-4 pr-8 sm:pr-12 lg:pr-16"
        >
          {aboutDeliveryStages.map((stage) => (
            <div
              key={stage.id}
              id={stage.id}
              className="w-[85vw] sm:w-[500px] md:w-[560px] lg:w-[600px] shrink-0 snap-start scroll-mt-32 flex flex-col"
            >
              {/* Media Card Container */}
              <div className="group block">
                <div className="relative aspect-[16/10] w-full rounded-[24px] sm:rounded-[28px] overflow-hidden bg-slate-100 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300">
                  <Image
                    src={stage.image}
                    alt={`${stage.title} delivery step`}
                    fill
                    sizes="(max-width: 768px) 85vw, (max-width: 1200px) 560px, 600px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>
              </div>

              {/* Simple Editorial Caption Below Image */}
              <div className="mt-4 sm:mt-5 text-left">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-caption font-mono text-brand-600 font-medium">{stage.step}</span>
                  <span className="text-caption text-slate-400">&bull;</span>
                  <span className="text-caption text-slate-500 font-medium">{stage.phase}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-medium text-slate-900 mb-2">
                  {stage.title}
                </h3>
                <p className="text-small sm:text-body text-slate-600 font-normal leading-relaxed">
                  {stage.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Right Circular Navigation Controls: Aligned inside container */}
        <div className="flex items-center justify-end gap-3 mt-6 sm:mt-8 pt-2">
          {/* Previous Button (←) */}
          <button
            type="button"
            onClick={() => handleScroll('left')}
            disabled={!canScrollLeft}
            aria-label="Previous step"
            className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95 ${
              canScrollLeft
                ? 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300'
                : 'bg-slate-50 text-slate-300 border-slate-200 cursor-not-allowed opacity-50'
            }`}
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Next Button (→) */}
          <button
            type="button"
            onClick={() => handleScroll('right')}
            disabled={!canScrollRight}
            aria-label="Next step"
            className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95 shadow-sm ${
              canScrollRight
                ? 'bg-brand-900 hover:bg-cta text-white hover:scale-105'
                : 'bg-slate-300 text-white cursor-not-allowed opacity-60'
            }`}
          >
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </button>
        </div>
      </div>
    </section>
  )
}
