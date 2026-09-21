import { Store, Building2, Stethoscope, Truck, Factory, LucideIcon } from 'lucide-react'
import { FAQItem } from '@/components/services/ServiceSubpageFAQs'

export interface IndustryData {
  id: string
  name: string
  anchor: string
  badgeText: string
  tagline: string
  summary: string
  description: string
  icon: LucideIcon
  image: string
  accentColor: string
  operationalChallenge: string
  xylozenSolution: string
  capabilities: {
    title: string
    detail: string
  }[]
  techStack: string[]
  metrics: {
    value: number
    suffix: string
    prefix?: string
    label: string
  }
}

export const industriesData: IndustryData[] = [
  {
    id: 'retail',
    name: 'Retail & Ecommerce',
    anchor: 'retail',
    badgeText: 'Stores that convert and scale',
    tagline: 'High-converting stores & inventory sync',
    summary:
      'We help retail and ecommerce businesses improve customer experiences, streamline operations, and build scalable digital commerce platforms.',
    description:
      'From headless storefronts and automated catalog ingestion to frictionless one-click checkouts and multi-warehouse inventory reconciliation, we engineer commerce architectures that handle high-concurrency peak traffic without dropoffs.',
    icon: Store,
    image: '/images/agents/scheduler.jpg',
    accentColor: 'from-brand-500 to-indigo-600',
    operationalChallenge:
      'Fragmented ERP stock records, slow checkout abandonment, and inability to handle sudden traffic surges during flash sales and product drops.',
    xylozenSolution:
      'Headless Next.js edge storefronts coupled with sub-millisecond Redis inventory caching and event-driven webhook synchronizers connecting physical retail POS to cloud ERPs.',
    capabilities: [
      {
        title: 'Headless Commerce Architecture',
        detail: 'Sub-second page transitions, server-side streaming, and 100/100 Core Web Vitals storefronts.',
      },
      {
        title: 'Real-Time Inventory Synchronization',
        detail: 'Event-driven bi-directional sync across warehouse management, physical retail POS, and online store.',
      },
      {
        title: 'Custom High-Conversion Checkout',
        detail: 'Unified payment gateway routing, tax computation engines, and zero-latency cart sessions.',
      },
      {
        title: 'Assisted Digital Selling Platforms',
        detail: 'Real-time video consults and remote examination integration for high-consideration purchases.',
      },
    ],
    techStack: ['Next.js', 'PostgreSQL', 'Redis', 'Docker', 'FastAPI', 'Tailwind CSS'],
    metrics: {
      value: 40,
      suffix: '%',
      label: 'Faster Checkout Throughput',
    },
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    anchor: 'real-estate',
    badgeText: 'Listings, portals, and lead systems',
    tagline: 'Portals, listings & lead management',
    summary:
      'We develop digital solutions that simplify property management, customer engagement, internal workflows, and real estate operations.',
    description:
      'Custom listing portals, high-performance property filtering engines, automated lead routing, and lease management workflows that bridge agents, brokers, buyers, and tenants into a single synchronized interface.',
    icon: Building2,
    image: '/images/agents/realestate.jpg',
    accentColor: 'from-blue-600 to-cyan-600',
    operationalChallenge:
      'Unorganized multi-broker listing updates, slow inquiries handling, manual property onboarding, and zero transparency in tenant lease lifecycle workflows.',
    xylozenSolution:
      'Unified property data hubs with geospatial search indexing, automated lead qualification dispatch, and role-based portals for owners, brokers, and tenants.',
    capabilities: [
      {
        title: 'Geospatial Property Search Portals',
        detail: 'Instant polygon-based map searching, dynamic radius filtering, and interactive property tours.',
      },
      {
        title: 'Automated Lead Qualification & Routing',
        detail: 'Instant CRM distribution pipelines ensuring buyer inquiries reach the right regional broker in seconds.',
      },
      {
        title: 'Tenant & Lease Management Dashboards',
        detail: 'Automated rental invoicing, digital contract signing, and maintenance ticket tracking.',
      },
      {
        title: 'Multi-Channel Inventory Syndication',
        detail: 'Single-click listing publish to major real estate aggregators and social channels.',
      },
    ],
    techStack: ['Next.js', 'PostgreSQL', 'Docker', 'Python', 'FastAPI', 'Tailwind CSS'],
    metrics: {
      value: 70,
      suffix: '%',
      label: 'Reduction in Lead Response Latency',
    },
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    anchor: 'healthcare',
    badgeText: 'Secure, compliant patient-facing systems',
    tagline: 'Secure & compliant patient platforms',
    summary:
      'We build secure and intelligent platforms that improve accessibility, streamline processes, and support better coordination between customers, professionals, and service providers.',
    description:
      'Enterprise telehealth infrastructure, connected optical & medical diagnostic telemetry, HIPAA/GDPR-compliant electronic record synchronizers, and clinical appointment hubs engineered with zero compromises on security.',
    icon: Stethoscope,
    image: '/images/agents/engineer.jpg',
    accentColor: 'from-teal-500 to-emerald-600',
    operationalChallenge:
      'Siloed medical records, fragmented remote consultations, strict regulatory compliance constraints, and unreliable device connectivity across regional clinic branches.',
    xylozenSolution:
      'End-to-end encrypted WebRTC audio/video portals with connected diagnostic hardware drivers and audit-logged role-based access for specialists and patients.',
    capabilities: [
      {
        title: 'Telehealth & Remote Diagnostic Video',
        detail: 'Low-latency encrypted WebRTC consultation suites with connected medical sensor feeds.',
      },
      {
        title: 'HIPAA/GDPR-Compliant Clinical Records',
        detail: 'Role-based access control, cryptographic field encryption, and immutable audit logs.',
      },
      {
        title: 'Provider & Specialist Scheduling Hubs',
        detail: 'Multi-branch booking engines with calendar two-way sync and automated appointment reminders.',
      },
      {
        title: 'Connected Diagnostic Device Telemetry',
        detail: 'Direct hardware streaming (optometry, vitals, imaging) straight into specialist review portals.',
      },
    ],
    techStack: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Next.js', 'OpenCV'],
    metrics: {
      value: 100,
      suffix: '%',
      label: 'Encrypted Diagnostic Stream Compliance',
    },
  },
  {
    id: 'logistics',
    name: 'Logistics',
    anchor: 'logistics',
    badgeText: 'Tracking, dashboards, and automation',
    tagline: 'Tracking dashboards & dispatch flows',
    summary:
      'We engineer technology that improves visibility, automates repetitive workflows, and supports efficient coordination across logistics and supply-chain operations.',
    description:
      'High-throughput GPS telemetry ingestion pipelines, predictive route dispatch engines, dock scheduling consoles, and automated customs/manifest documentation tools built for mission-critical supply networks.',
    icon: Truck,
    image: '/images/agents/operations.jpg',
    accentColor: 'from-amber-500 to-orange-600',
    operationalChallenge:
      'Blind freight transit gaps, manual driver dispatching, error-prone paper manifests, and lack of real-time SLA breach notifications.',
    xylozenSolution:
      'Event-driven IoT telemetry queues consuming millions of GPS pings, paired with automated dispatch algorithms and live exception alert systems.',
    capabilities: [
      {
        title: 'Real-Time Fleet Telemetry Dashboards',
        detail: 'High-frequency GPS track ingestion with geofencing, dwell time analytics, and route playback.',
      },
      {
        title: 'Automated Dispatch & Route Assignment',
        detail: 'Algorithmic allocation considering vehicle capacity, delivery time windows, and driver shifts.',
      },
      {
        title: 'Digital Waybills & Manifest Automation',
        detail: 'OCR-powered bill of lading verification, electronic signatures, and instant customs sync.',
      },
      {
        title: 'Cross-Docking & Warehouse Coordination',
        detail: 'Live dock door management, inbound pallet staging, and outbound transfer coordination.',
      },
    ],
    techStack: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Redis', 'Next.js'],
    metrics: {
      value: 65,
      suffix: '%',
      label: 'Manual Dispatch Overhead Saved',
    },
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    anchor: 'manufacturing',
    badgeText: 'Internal systems that connect the floor to the office',
    tagline: 'Floor telemetry to ERP integration',
    summary:
      'We develop intelligent systems that help manufacturing businesses improve operational visibility, automate processes, monitor performance, and make better data-driven decisions.',
    description:
      'Shop-floor PLC and sensor data ingestion, edge computer vision for PPE & defect detection, Overall Equipment Effectiveness (OEE) dashboards, and enterprise ERP bridges connecting assembly lines to leadership.',
    icon: Factory,
    image: '/images/agents/manufacturing.jpg',
    accentColor: 'from-violet-600 to-indigo-700',
    operationalChallenge:
      'Disconnected machine floors with dark data, delayed safety incident awareness, manual shift log reporting, and lagging maintenance downtime.',
    xylozenSolution:
      'Edge AI vision inference servers processing RTSP camera streams for real-time safety monitoring, unified with MQTT machine telemetry fed into live executive dashboards.',
    capabilities: [
      {
        title: 'Computer Vision Safety & PPE Compliance',
        detail: 'Sub-50ms edge YOLO inference detecting hardhats, safety vests, and restricted zone breaches.',
      },
      {
        title: 'Shop-Floor to ERP Telemetry Pipeline',
        detail: 'MQTT/Modbus broker bridge transforming raw sensor metrics into structured ERP production logs.',
      },
      {
        title: 'Real-Time OEE & Machine Health Analytics',
        detail: 'Live tracking of Availability, Performance, and Quality with predictive anomaly warnings.',
      },
      {
        title: 'Digital Shift Handover & Quality Logs',
        detail: 'Mobile-responsive floor tablets for rapid quality checks, batch sign-offs, and maintenance audits.',
      },
    ],
    techStack: ['Python', 'OpenCV', 'FastAPI', 'Docker', 'PostgreSQL', 'Next.js'],
    metrics: {
      value: 24,
      suffix: '/7',
      label: 'Continuous Automated Floor Monitoring',
    },
  },
]

export const industryStats = [
  {
    value: 5,
    suffix: '+',
    label: 'Core Industry Verticals',
    detail: 'Retail, Real Estate, Healthcare, Logistics, and Manufacturing.',
  },
  {
    value: 100,
    suffix: '%',
    label: 'Custom Architecture',
    detail: 'Engineered for how your business actually operates with zero generic templates.',
  },
  {
    value: 3,
    suffix: '-6 Wks',
    label: 'Fixed-Scope MVP Cycles',
    detail: 'Rapid, production-grade software delivered with full source code ownership.',
  },
  {
    value: 0,
    suffix: '',
    prefix: '',
    label: 'Vendor Lock-in',
    detail: 'Complete intellectual property handover, repo rights, and deployable runbooks.',
  },
]

export const industryFaqs: FAQItem[] = [
  {
    question: 'How do you adapt your engineering to industry-specific regulations (HIPAA, GDPR, etc.)?',
    answer:
      'We treat regulatory compliance as a fundamental architectural requirement rather than an afterthought. For Healthcare, we build with field-level encryption, role-based access control (RBAC), and immutable audit logs. For Ecommerce and FinTech, we implement PCI-DSS-aligned payment gateways and localized data privacy boundaries.',
  },
  {
    question: 'Can you integrate with our legacy ERPs, internal CRMs, or shop-floor hardware?',
    answer:
      'Yes. Most of our enterprise deployments integrate directly with legacy systems such as SAP, Oracle, NetSuite, Salesforce, or specialized shop-floor PLC controllers via custom REST/gRPC API bridges, MQTT brokers, and asynchronous webhook queues.',
  },
  {
    question: 'What is the typical development timeline for an industry-specific digital platform?',
    answer:
      'Our structured Fixed-Scope MVPs are architected, developed, tested, and released to production in 3 to 6 weeks. For multi-stakeholder enterprise portals or complex IoT/AI rollouts, we execute via continuous 2-week engineering sprints with bi-weekly live demos.',
  },
  {
    question: 'Do we retain full ownership of the intellectual property and code?',
    answer:
      '100% yes. Upon delivery, you receive complete commercial ownership of the source code, design assets, database migrations, and CI/CD deployment scripts. No recurring platform lock-in fees or proprietary framework constraints.',
  },
]
