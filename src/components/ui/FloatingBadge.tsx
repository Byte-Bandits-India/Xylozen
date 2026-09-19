'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

type FloatingBadgeProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  rotation?: number
}

export function FloatingBadge({ children, className, delay = 0, rotation = 0 }: FloatingBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: rotation }}
      animate={{ opacity: 1, y: 0, rotate: rotation }}
      transition={{
        duration: 0.8,
        delay,
        ease: 'easeOut',
      }}
      whileHover={{ scale: 1.05, rotate: rotation + 2 }}
      className={cn('absolute bg-white border border-line rounded-lg px-4 py-3 shadow-lg backdrop-blur-sm', className)}
    >
      {children}
    </motion.div>
  )
}
