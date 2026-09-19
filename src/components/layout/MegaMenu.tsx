'use client'

import React from 'react'
import { ArrowRight } from 'lucide-react'
import { MegaMenuData } from './nav-data'
import { MegaMenuVisual } from './MegaMenuVisual'

interface MegaMenuProps {
  data: MegaMenuData
  onItemClick: (href: string) => void
}

export function MegaMenu({ data, onItemClick }: MegaMenuProps) {
  const EyebrowIcon = data.eyebrowIcon
  const isMultiCol = data.items.length > 3

  return (
    <div className="w-full bg-white rounded-2xl border border-line shadow-2xl shadow-brand-900/12 overflow-hidden select-none">
      <div className="grid grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-line/70">
        
        {/* Left Column: Clean Navigation Items (no huge text paragraphs, no tags) */}
        <div className="col-span-12 md:col-span-7 p-6 flex flex-col justify-between">
          <div>
            {/* Header / Eyebrow */}
            <div className="flex items-center gap-2 mb-4 text-badge text-ink-500">
              <EyebrowIcon className="w-4 h-4 text-brand-500" />
              <span>{data.eyebrow}</span>
            </div>

            {/* Clean Sub-menu Items Grid */}
            <div className={`grid gap-2 ${isMultiCol ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
              {data.items.map((item, index) => {
                const ItemIcon = item.icon
                return (
                  <button
                    key={index}
                    onClick={() => onItemClick(item.href)}
                    className="flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl text-left transition-all duration-150 bg-transparent hover:bg-surface border border-transparent hover:border-line/70 group cursor-pointer"
                  >
                    <div className={`w-10 h-10 shrink-0 rounded-lg flex items-center justify-center ${item.iconBg} ${item.iconColor} transition-transform group-hover:scale-105`}>
                      <ItemIcon className="w-5 h-5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="text-body font-semibold text-brand-900 group-hover:text-brand-500 transition-colors">
                        {item.title}
                      </div>
                      {item.subtitle && (
                        <div className="text-small text-ink-500 truncate mt-0.5">
                          {item.subtitle}
                        </div>
                      )}
                    </div>

                    <ArrowRight className="w-4 h-4 text-ink-500/40 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150 shrink-0" />
                  </button>
                )
              })}
            </div>
          </div>

          {/* Bottom Footer: Quick Action & Delivery Tag */}
          <div className="pt-4 mt-5 border-t border-line/60 flex items-center justify-between">
            <button
              onClick={() => onItemClick(data.viewAllHref)}
              className="inline-flex items-center gap-1.5 text-small font-semibold text-brand-500 hover:text-brand-700 transition-colors group cursor-pointer"
            >
              <span>{data.viewAllText}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <span className="text-caption text-ink-500/70">
              Chennai &bull; Worldwide Delivery
            </span>
          </div>
        </div>

        {/* Right Column: Geometric SVG Shape Showcase (Strictly shapes, no text or other data) */}
        <div className="col-span-12 md:col-span-5 bg-surface/40 p-6 flex items-center justify-center">
          <MegaMenuVisual menuId={data.id} />
        </div>

      </div>
    </div>
  )
}
