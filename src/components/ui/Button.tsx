'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer select-none',
  {
    variants: {
      variant: {
        'primary-cta': 'bg-cta text-white hover:bg-[#D93A16] active:bg-[#D93A16] border-0 shadow-sm shadow-cta/20 hover:shadow-md',
        'primary-brand': 'bg-brand-gradient text-white hover:opacity-95 active:opacity-90 border-0 shadow-md shadow-brand-900/20 hover:shadow-lg',
        ghost: 'bg-white text-brand-900 border border-line hover:bg-surface active:bg-surface shadow-none',
      },
      size: {
        default: 'px-6 py-2.5 text-btn rounded-button',
        lg: 'px-8 py-3.5 text-lead font-semibold rounded-button',
      },
    },
    defaultVariants: {
      variant: 'primary-brand',
      size: 'default',
    },
  }
)

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    className?: string
  }

export function Button({ className, variant, size, children, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...props}>
      {children}
    </button>
  )
}
