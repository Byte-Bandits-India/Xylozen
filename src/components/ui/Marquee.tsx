'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

type MarqueeProps = {
  children: React.ReactNode
  className?: string
  speed?: number
}

export function Marquee({ children, className, speed = 30 }: MarqueeProps) {
  return (
    <div className={cn('relative overflow-hidden', className)}>
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: speed,
            ease: 'linear',
          },
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  )
}
