'use client'

import React from 'react'
import AccordionGallery, { AccordionGalleryItem } from '@/components/ui/AccordionGallery'

const architectureTiers: AccordionGalleryItem[] = [
  {
    image: '/images/architecture/edge_network.jpg',
    label: 'Global Edge & DNS',
    description:
      'Anycast BGP routing, automated DDoS mitigation, TLS 1.3 termination, and edge caching for static assets with sub-20ms first-byte response.',
    link: '#contact',
  },
  {
    image: '/images/architecture/app_core.jpg',
    label: 'Modern Application Core',
    description:
      'Next.js 14 streaming SSR, zero-waterfall server components, edge middleware auth, and dynamic route compilation with 99.9% uptime SLA.',
    link: '#contact',
  },
  {
    image: '/images/architecture/microservices_mesh.jpg',
    label: 'Microservices Mesh',
    description:
      'Stateless containerized services, OAuth2/RBAC security, resilient gRPC/REST APIs, and 10,000+ requests per second throughput.',
    link: '#contact',
  },
  {
    image: '/images/architecture/event_queue.jpg',
    label: 'Event Queues & Stream',
    description:
      'BullMQ and Redis streams orchestrating asynchronous background jobs, idempotent webhook dispatches, and dead-letter queue retries.',
    link: '#contact',
  },
  {
    image: '/images/architecture/database_cluster.jpg',
    label: 'Persistence & Cache',
    description:
      'PostgreSQL read-replica pooling with PgBouncer, automated WAL archiving, row-level security, and sub-millisecond Redis session caching.',
    link: '#contact',
  },
]

export function WebSoftwareArchitectureVisual() {
  return (
    <div className="w-full">
      <AccordionGallery
        items={architectureTiers}
        defaultIndex={1}
        expandRatio={0.48}
        trigger="hover"
        height="500px"
        gap="12px"
        radius="1.25rem"
      />
    </div>
  )
}
