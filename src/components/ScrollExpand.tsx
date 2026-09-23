'use client';

import React, { useRef } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export interface ScrollExpandProps {
  src?: string | { src: string };
  mediaType?: 'image' | 'video';
  poster?: string;
  alt?: string;
  title?: string;
  scrollHint?: string;
  startWidth?: number;
  startHeight?: number;
  startRadius?: number;
  endRadius?: number;
  mediaZoom?: number;
  scrollDistance?: number;
  holdDistance?: number;
  smoothing?: number;
  overlayScrim?: number;
  useWindowScroll?: boolean;
  enabled?: boolean;
  shrinkAmount?: number;
  maxRadius?: number;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  [key: string]: unknown;
}

const ScrollExpand: React.FC<ScrollExpandProps> = ({
  src = '',
  mediaType = 'image',
  poster = '',
  alt = '',
  title = '',
  scrollHint: _scrollHint = '',
  smoothing: _smoothing = 0.08,
  enabled: _enabled = true,
  shrinkAmount = 0.11,
  maxRadius: _maxRadius = 24,
  children,
  className = '',
  style,
  ...rest
}: ScrollExpandProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start 15%'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 24,
    mass: 0.15,
  });

  const targetScale = 1 - shrinkAmount;

  // Smoothly shrinks as you scroll down into view; stays shrunk as you scroll down full.
  // Expands ONLY when you go back to the top!
  const scale = useTransform(smoothProgress, [0, 1], [1, targetScale]);

  // Synchronized gentle multi-plane parallax
  const mediaScale = useTransform(smoothProgress, [0, 1], [1.08, 1.0]);

  const resolvedSrc = typeof src === 'string' ? src : (src as { src?: string })?.src || '';

  const media =
    mediaType === 'video' ? (
      <video
        className="absolute inset-0 w-full h-full object-cover origin-center select-none"
        src={resolvedSrc}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
      />
    ) : (
      <Image
        className="object-cover origin-center select-none"
        src={resolvedSrc}
        alt={alt || 'Xylozen Engineering Pod in Production'}
        fill
        sizes="90vw"
        draggable={false}
      />
    );

  return (
    <section
      ref={containerRef}
      className={`relative w-full overflow-hidden py-8 sm:py-12 md:py-16 ${className}`.trim()}
      style={style}
      {...rest}
    >
      {/* Ambient glowing backdrop behind the card */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[450px] sm:h-[650px] bg-brand-500/15 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-teal-500/10 rounded-full blur-[110px]" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* The Card: Exactly 90% width mx-auto with smooth in-and-out expand and shrink */}
      <div className="w-[90%] mx-auto flex items-center justify-center">
        <motion.div
          style={{ scale }}
          className="relative w-full min-h-[420px] sm:min-h-[540px] md:h-[720px] lg:h-[780px] flex flex-col justify-center items-center overflow-hidden origin-center rounded-2xl sm:rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.65)] ring-1 ring-white/15 [will-change:transform]"
        >
          {/* Media background with smooth parallax */}
          <motion.div
            style={{ scale: mediaScale }}
            className="absolute inset-0 w-full h-full overflow-hidden [will-change:transform]"
          >
            {media}
          </motion.div>

          {/* Gradient scrim for text legibility */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_top,rgba(5,28,80,0.92),rgba(5,28,80,0.48)_50%,rgba(5,28,80,0.7))]" />

          {/* Overlay Content: Always centered on mobile and desktop */}
          <div className="relative z-20 w-full flex-1 flex flex-col items-center justify-center p-4 sm:p-8 md:p-14 text-center my-auto">
            {children ? (
              children
            ) : title ? (
              <div className="max-w-3xl mx-auto flex flex-col items-center select-none">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white/90 text-badge mb-4 shadow-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Dedicated Pods in Production
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-h2 font-bold text-white [text-shadow:0_4px_30px_rgba(0,0,0,0.7)]">
                  {title}
                </h3>
              </div>
            ) : null}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { ScrollExpand };
export default ScrollExpand;
