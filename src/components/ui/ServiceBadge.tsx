'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import type { ServiceLine } from '@/types'

const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-badge px-3 py-1 text-badge font-medium',
  {
    variants: {
      service: {
        'web-software': 'bg-badge-web-bg text-badge-web-text',
        ecommerce: 'bg-badge-ecommerce-bg text-badge-ecommerce-text',
        'ai-automation': 'bg-badge-ai-bg text-badge-ai-text',
        consulting: 'bg-badge-consulting-bg text-badge-consulting-text',
      },
    },
    defaultVariants: {
      service: 'web-software',
    },
  }
)

type ServiceBadgeProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants> & {
    className?: string
    label: string
    service: ServiceLine
  }

export function ServiceBadge({ className, service, label, ...props }: ServiceBadgeProps) {
  return (
    <span className={cn(badgeVariants({ service }), className)} {...props}>
      {label}
    </span>
  )
}
