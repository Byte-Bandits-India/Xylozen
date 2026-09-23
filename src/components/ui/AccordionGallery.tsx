'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import { ArrowUpRight } from 'lucide-react'

export interface AccordionGalleryItem {
  image: string | StaticImageData
  label?: string
  link?: string
  description?: string
  [key: string]: unknown
}

export interface AccordionGalleryProps {
  items: AccordionGalleryItem[]
  defaultIndex?: number
  expandRatio?: number
  trigger?: 'hover' | 'click'
  orientation?: 'horizontal' | 'vertical'
  duration?: number
  parallax?: boolean
  className?: string
  height?: string | number
  mobileHeight?: string | number
  gap?: number | string
  mobileGap?: number | string
  radius?: string
}

export function AccordionGallery({
  items = [],
  defaultIndex = 2,
  expandRatio = 0.52,
  trigger = 'hover',
  orientation = 'horizontal',
  duration = 0.6,
  parallax = true,
  className = '',
  height = '480px',
  mobileHeight = '520px',
  gap = '12px',
  mobileGap = '8px',
  radius = '1.25rem', // 20px / rounded-2xl
}: AccordionGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number>(
    defaultIndex >= 0 && defaultIndex < items.length ? defaultIndex : 0
  )
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  if (!items || items.length === 0) {
    return null
  }

  // On mobile screens, automatically use vertical layout so content has full horizontal width
  const effectiveOrientation = isMobile ? 'vertical' : orientation
  const isHorizontal = effectiveOrientation === 'horizontal'
  const count = items.length

  // Calculate flex ratios: on mobile, give expanded item a generous vertical height
  const currentExpandRatio = isMobile ? Math.max(expandRatio, 0.54) : expandRatio
  const expandedFlex = count === 1 ? 100 : currentExpandRatio * 100
  const collapsedFlex =
    count === 1 ? 0 : Math.max(5, ((1 - currentExpandRatio) / (count - 1)) * 100)

  const handleItemInteraction = (index: number) => {
    setActiveIndex(index)
  }

  const handleMouseLeave = () => {
    if (!isMobile && trigger === 'hover' && defaultIndex !== undefined) {
      if (defaultIndex >= 0 && defaultIndex < count) {
        setActiveIndex(defaultIndex)
      }
    }
  }

  const containerHeight = typeof height === 'number' ? `${height}px` : height
  const activeHeight = isMobile
    ? typeof mobileHeight === 'number'
      ? `${mobileHeight}px`
      : mobileHeight || '520px'
    : containerHeight

  const activeGap = isMobile
    ? typeof mobileGap === 'number'
      ? `${mobileGap}px`
      : mobileGap || '8px'
    : typeof gap === 'number'
      ? `${gap}px`
      : gap

  return (
    <div
      onMouseLeave={handleMouseLeave}
      className={`relative w-full overflow-hidden select-none flex ${
        isHorizontal ? 'flex-row' : 'flex-col'
      } ${className}`}
      style={{
        height: activeHeight,
        gap: activeGap,
      }}
      role="region"
      aria-label="Interactive Accordion Gallery"
    >
      {items.map((item, index) => {
        const isExpanded = activeIndex === index
        const currentFlex = isExpanded ? expandedFlex : collapsedFlex

        const content = (
          <div
            onClick={(e) => {
              // Always expand on click/tap
              if (!isExpanded) {
                e.preventDefault()
              }
              handleItemInteraction(index)
            }}
            onMouseEnter={() => {
              if (!isMobile && trigger === 'hover') {
                handleItemInteraction(index)
              }
            }}
            onFocus={() => handleItemInteraction(index)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                handleItemInteraction(index)
              }
            }}
            tabIndex={0}
            role="button"
            aria-expanded={isExpanded}
            aria-label={item.label || `Gallery panel ${index + 1}`}
            className="group relative h-full w-full overflow-hidden cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            style={{
              borderRadius: radius,
              transition: `flex ${duration}s cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1)`,
            }}
          >
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full overflow-hidden bg-slate-900">
              <Image
                src={item.image}
                alt={item.label || item.description || 'Architectural workflow visualization'}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className={`object-cover transition-transform duration-700 ease-out ${
                  parallax
                    ? isExpanded
                      ? 'scale-105 group-hover:scale-110'
                      : 'scale-125 brightness-75 group-hover:brightness-90'
                    : 'scale-100'
                }`}
              />
            </div>

            {/* Ambient Vignette & Gradient Overlays */}
            <div
              className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
                isExpanded
                  ? 'bg-gradient-to-t from-black/90 via-black/40 to-black/15 opacity-100'
                  : 'bg-black/55 group-hover:bg-black/40 opacity-90'
              }`}
            />

            {/* Border Sheen */}
            <div
              className={`absolute inset-0 pointer-events-none border transition-colors duration-300 ${
                isExpanded
                  ? 'border-white/30 shadow-lg shadow-black/40'
                  : 'border-white/10 group-hover:border-white/20'
              }`}
              style={{ borderRadius: radius }}
            />

            {/* ================================================================= */}
            {/* EXPANDED CONTENT: Rich Heading, Details, and Optional Action       */}
            {/* ================================================================= */}
            <div
              className={`absolute inset-0 p-4 sm:p-7 flex flex-col justify-between transition-all duration-500 pointer-events-none ${
                isExpanded
                  ? 'opacity-100 translate-y-0 delay-100'
                  : 'opacity-0 translate-y-4 pointer-events-none'
              }`}
            >
              {/* Top Bar inside expanded card */}
              <div className="flex items-center justify-between w-full">
                <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[10px] sm:text-[11px] font-mono text-white/90 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  0{index + 1} / 0{count}
                </span>

                {item.link && item.link !== '#' && (
                  <span
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center border border-white/30 group-hover:bg-white group-hover:text-black transition-all"
                    aria-hidden="true"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </span>
                )}
              </div>

              {/* Bottom Details */}
              <div className="max-w-xl">
                {item.label && (
                  <h3 className="text-base sm:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-snug sm:leading-tight mb-1.5 sm:mb-2 drop-shadow-md">
                    {item.label}
                  </h3>
                )}
                {item.description && (
                  <p className="text-xs sm:text-small text-white/85 line-clamp-3 sm:line-clamp-2 leading-relaxed drop-shadow-xs">
                    {item.description}
                  </p>
                )}
              </div>
            </div>

            {/* ================================================================= */}
            {/* COLLAPSED CONTENT: Desktop Vertical Strip vs Mobile Horizontal Row */}
            {/* ================================================================= */}
            
            {/* DESKTOP COLLAPSED: Vertical pill & rotated label */}
            <div
              className={`hidden md:flex absolute inset-0 p-3 sm:p-4 flex-col justify-between items-center transition-all duration-300 pointer-events-none ${
                !isExpanded
                  ? 'opacity-100 scale-100 delay-150'
                  : 'opacity-0 scale-95 pointer-events-none'
              }`}
            >
              <span className="text-[10px] font-mono text-white/70 font-semibold bg-black/40 px-2 py-0.5 rounded-md backdrop-blur-xs">
                0{index + 1}
              </span>

              {item.label && isHorizontal && (
                <div className="overflow-hidden py-2">
                  <span
                    className="text-xs sm:text-small font-bold text-white/90 tracking-wide uppercase font-mono whitespace-nowrap block"
                    style={{
                      writingMode: 'vertical-rl',
                      transform: 'rotate(180deg)',
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              )}

              <div className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white/90 transition-colors" />
            </div>

            {/* MOBILE COLLAPSED: Clean Horizontal Bar */}
            <div
              className={`flex md:hidden absolute inset-0 px-3.5 py-2.5 items-center justify-between transition-all duration-300 pointer-events-none ${
                !isExpanded
                  ? 'opacity-100 delay-100'
                  : 'opacity-0 pointer-events-none'
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0 pr-2">
                <span className="text-[10px] font-mono text-white/90 font-semibold bg-black/50 px-2 py-0.5 rounded-md backdrop-blur-xs shrink-0">
                  0{index + 1}
                </span>
                {item.label && (
                  <span className="text-sm font-semibold text-white/90 truncate tracking-tight">
                    {item.label}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <span className="text-[10px] font-mono uppercase text-white/60 tracking-wider">Tap</span>
                <div className="w-1.5 h-1.5 rounded-full bg-white/50 group-hover:bg-white/90 transition-colors" />
              </div>
            </div>
          </div>
        )

        return (
          <div
            key={index}
            className="w-full md:w-auto h-auto md:h-full"
            style={{
              flex: `${currentFlex} 1 0%`,
              transition: `flex ${duration}s cubic-bezier(0.16, 1, 0.3, 1)`,
              minWidth: isHorizontal ? '48px' : '100%',
              minHeight: !isHorizontal ? '52px' : 'auto',
            }}
          >
            {item.link && item.link !== '#' && isExpanded ? (
              <Link href={item.link} className="block w-full h-full">
                {content}
              </Link>
            ) : (
              content
            )}
          </div>
        )
      })}
    </div>
  )
}

export default AccordionGallery
