import { ServicePillarData, DeliveryStep } from '@/types'

export const servicePillars: ServicePillarData[] = [
  {
    id: 'web-software',
    line: 'web-software',
    badgeLabel: 'Web & Software',
    title: 'Software that runs your business the way an enterprise runs theirs.',
    tagline: 'From company websites to internal systems and dashboards — built to hold up under real use.',
    summary:
      'We engineer resilient, production-ready web platforms, internal management systems, and custom software architectures. No generic templates or stitched dependencies—every codebase is purpose-built for operational scale, high concurrency, and long-term maintainability.',
    capabilities: [
      {
        title: 'Custom Web Applications & Portals',
        description:
          'High-performance web applications built on modern frameworks with clean component architecture, role-based workflows, and seamless responsiveness across devices.',
        tag: 'Modern Frontends',
      },
      {
        title: 'Internal Operations & Dashboards',
        description:
          'Mission-critical internal tooling, operations dashboards, and management portals that consolidate complex organizational workflows and eliminate manual spreadsheets.',
        tag: 'Operations',
      },
      {
        title: 'Micro-SaaS & MVP Development',
        description:
          'Fast, structured development of complete software products and MVPs within 3 to 6 weeks, built with scalable multi-tenant architecture and clean commercial IP.',
        tag: 'Rapid Launch',
      },
      {
        title: 'Scalable APIs & Cloud Infrastructure',
        description:
          'Robust backend systems, microservices, and API layers designed for high concurrency, low latency, database pooling, and uninterrupted operational availability.',
        tag: 'Cloud & API',
      },
    ],
    deliverables: [
      '100% full-codebase ownership and commercial IP handover',
      'Fully automated CI/CD pipelines with zero-downtime deployment',
      'Role-based access control (RBAC) and OAuth security compliance',
      'Optimized database schemas with connection pooling and caching',
      'Comprehensive RESTful / GraphQL API documentation',
      'Production telemetry, error monitoring, and 99.9% uptime architecture',
    ],
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'Python',
      'PostgreSQL',
      'Redis',
      'Docker',
      'AWS / GCP',
      'Tailwind CSS',
    ],
    evidence: {
      client: 'Titan × Tata',
      industry: 'Healthcare & Retail Technology',
      metric: '1-Month Deployment',
      description:
        'Engineered a remote eye-examination platform featuring live video consultations, remote optical device control, and instant diagnostic capture deployed directly to optical stores.',
      link: '/#our-work',
    },
  },
  {
    id: 'ecommerce',
    line: 'ecommerce',
    badgeLabel: 'Ecommerce',
    title: 'Live, selling, and getting paid — without you learning to code.',
    tagline: 'Stores built on the platform that fits you, from fast-launch to fully custom.',
    summary:
      'We build high-converting ecommerce platforms engineered for speed, frictionless checkout, and unbroken operation during high-volume traffic surges. From headless architectures to custom commerce engines, we eliminate drop-off and streamline catalog and order operations.',
    capabilities: [
      {
        title: 'Custom & Headless Storefronts',
        description:
          'Sub-second page transitions, bespoke UI interactions, and headless commerce architectures that decouple presentation from backend logic for unrivaled conversion speed.',
        tag: 'Headless Commerce',
      },
      {
        title: 'High-Conversion Checkout Engines',
        description:
          'Streamlined, distraction-free checkout flows with multi-currency routing, local payment rails, address autofill, and one-click purchase capabilities.',
        tag: 'Checkout Systems',
      },
      {
        title: 'Inventory & Multi-Channel Sync',
        description:
          'Automated data pipelines that synchronize product catalogs, inventory levels, order statuses, and ERP records in real time across physical stores and digital marketplaces.',
        tag: 'Omnichannel Sync',
      },
      {
        title: 'B2B & Wholesale Commerce Portals',
        description:
          'Specialized commerce workflows for wholesale buyers, featuring tiered pricing tables, volume discount triggers, custom credit terms, and bulk reorder sheets.',
        tag: 'B2B Portals',
      },
    ],
    deliverables: [
      'Mobile-first responsive storefronts optimized for Core Web Vitals',
      'Multi-gateway payment integrations (Razorpay, Stripe, UPI, Apple Pay)',
      'Real-time automated inventory synchronization across warehouses',
      'Automated cart abandonment recovery pipelines and webhook notifications',
      'Faceted search, filter indexing, and product recommendation engines',
      'Zero-downtime architecture tested for flash sales and heavy concurrency',
    ],
    techStack: [
      'Shopify Plus',
      'MedusaJS',
      'Next.js Commerce',
      'TypeScript',
      'Stripe',
      'Razorpay',
      'Algolia',
      'PostgreSQL',
      'Redis',
    ],
    evidence: {
      client: 'Apparel & Retail Brands',
      industry: 'Retail & Commerce',
      metric: '40% Faster Checkout',
      description:
        'Re-architected the checkout funnel and catalog pipeline, resulting in 40% faster checkout completion, unified inventory sync, and zero cart drop-offs during promotions.',
      link: '/#our-work',
    },
  },
  {
    id: 'ai-automation',
    line: 'ai-automation',
    badgeLabel: 'Agentic AI & Automation',
    title: 'A digital team that works while you sleep.',
    tagline: "Agents that don't just answer — they complete the work.",
    summary:
      'We treat AI as a foundational operational capability, not an afterthought. We engineer autonomous agentic workflows, computer vision systems, and intelligent data pipelines that execute tasks end-to-end within your actual business systems.',
    capabilities: [
      {
        title: 'Autonomous Agentic Workflows',
        description:
          'Goal-driven autonomous agents capable of multi-step decision-making, API tool execution, data validation, and autonomous workflow completion without human bottlenecks.',
        tag: 'Agentic Systems',
      },
      {
        title: 'Intelligent Document & Data Extraction',
        description:
          'High-accuracy NLP pipelines that extract, categorize, and validate information from unstructured PDFs, emails, invoices, and resumes in seconds.',
        tag: 'NLP & OCR',
      },
      {
        title: 'Computer Vision & Visual Compliance',
        description:
          'Edge and cloud computer vision models that analyze live video streams for PPE compliance, hazard identification, defect detection, and operational alerts.',
        tag: 'Computer Vision',
      },
      {
        title: 'Enterprise Workflow RPA & Telemetry',
        description:
          'Intelligent bots that interface with legacy enterprise software, syncing records, triaging support queues, and executing cross-platform operational steps.',
        tag: 'Workflow RPA',
      },
    ],
    deliverables: [
      'Autonomous agent pods with human-in-the-loop verification controls',
      'Sub-minute unstructured document processing and extraction pipelines',
      'Custom fine-tuned LLM agents with vector retrieval (RAG) on private data',
      'Real-time edge or cloud computer vision inference with alert webhooks',
      'Strict data privacy guardrails and private cloud / on-premise deployments',
      'Immutable audit logging, operational telemetry, and performance tracing',
    ],
    techStack: [
      'LangChain',
      'LlamaIndex',
      'OpenAI / Anthropic / Gemini',
      'FastAPI',
      'Python',
      'Pinecone / Qdrant',
      'YOLO',
      'OpenCV',
      'Docker',
    ],
    evidence: {
      client: 'HireAI & Vision Systems',
      industry: 'Recruitment & Construction Safety',
      metric: '12+ hrs/wk Saved',
      description:
        'Reduced resume screening time from days to minutes with HireAI, and deployed real-time computer vision safety monitoring across distributed active job sites.',
      link: '/#our-work',
    },
  },
]

export const deliverySteps: DeliveryStep[] = [
  {
    number: '01',
    title: 'Strategic Discovery',
    description:
      'We begin by analyzing your business model, operating environment, customer journeys, legacy software, and growth priorities before recommending any technology.',
    output: 'Commercial & Operational Blueprint',
  },
  {
    number: '02',
    title: 'Opportunity Definition',
    description:
      'We translate core business bottlenecks into clearly scoped technical opportunities with measurable KPIs, success criteria, and investment priorities.',
    output: 'Product Scope & Metric Scorecard',
  },
  {
    number: '03',
    title: 'Product & Technical Architecture',
    description:
      'Our senior architects map data models, user journeys, microservice structures, API boundaries, cloud infrastructure, and security requirements.',
    output: 'Architecture Blueprint & Schema',
  },
  {
    number: '04',
    title: 'Experience & Solution Design',
    description:
      'We design practical user workflows and clean, distraction-free interfaces that reflect how your teams and customers actually operate day to day.',
    output: 'Figma Systems & Interaction Specs',
  },
  {
    number: '05',
    title: 'Controlled Product Development',
    description:
      'Execution through disciplined 2-week engineering sprints with strict code reviews, transparent Slack/Git updates, and regular demo milestones.',
    output: 'Production Codebase & CI/CD Pipelines',
  },
  {
    number: '06',
    title: 'Validation & Quality Assurance',
    description:
      'Rigorous end-to-end testing covering functional workflows, edge cases, load testing under high concurrency, security audits, and regression tests.',
    output: 'QA Verification & Security Sign-off',
  },
  {
    number: '07',
    title: 'Deployment & Operational Readiness',
    description:
      'Production deployment with automated rollback safeguards, infrastructure telemetry, comprehensive documentation, and hands-on team handover.',
    output: 'Production Release & Runbook',
  },
  {
    number: '08',
    title: 'Continuous Improvement & Scale',
    description:
      'Our partnership extends beyond launch with SLA guarantees, performance monitoring, incremental feature development, and autonomous scaling.',
    output: 'Ongoing SLA & Roadmap Evolution',
  },
]

export const engagementModels = [
  {
    id: 'dedicated-pod',
    title: 'Dedicated Engineering Pod',
    badge: 'Long-Term Scale',
    headline: 'Your permanent international-standard engineering team',
    description:
      'An autonomous pod of full-stack engineers, AI specialists, and a senior technical lead dedicated 100% to building and scaling your digital infrastructure.',
    highlights: [
      'Dedicated senior full-stack & AI engineers',
      'Daily standups, direct Slack access, zero account layers',
      'Bi-weekly production sprint releases',
      'Full technical ownership and architecture governance',
    ],
    ctaText: 'Assemble Your Pod',
    ctaLink: '/#contact',
    featured: true,
  },
  {
    id: 'fixed-scope-mvp',
    title: 'Fixed-Scope MVP Build',
    badge: '3 to 6-Week Launch',
    headline: 'From concept to live production in weeks, not quarters',
    description:
      'A structured, fast-paced sprint designed to turn validated ideas into production-grade software ready for real users and capital deployment.',
    highlights: [
      'Fixed commercial scope and timeline certainty',
      'End-to-end delivery: architecture, UI, code, and deployment',
      'Production-ready code with no disposable prototypes',
      'Full commercial IP ownership and documentation handover',
    ],
    ctaText: 'Scope Your MVP',
    ctaLink: '/#contact',
    featured: false,
  },
  {
    id: 'architecture-audit',
    title: 'Architecture & AI Audit',
    badge: 'Technical Scoping',
    headline: 'Uncover bottlenecks, reduce debt, and map AI integration',
    description:
      'A comprehensive 2-week technical evaluation of your current codebase, database schema, performance bottlenecks, and automation opportunities.',
    highlights: [
      'In-depth codebase and database performance review',
      'Identification of scalability blockers and security gaps',
      'Actionable AI automation and agentic feasibility map',
      'Step-by-step refactoring and modernization roadmap',
    ],
    ctaText: 'Request an Audit',
    ctaLink: '/#contact',
    featured: false,
  },
]

export const industryMatrix = [
  {
    name: 'Retail & Ecommerce',
    headline: 'Stores that convert and scale',
    description:
      'High-speed headless storefronts, frictionless checkout engines, and automated inventory sync across warehouses and physical stores.',
    link: '/industries#retail',
  },
  {
    name: 'Real Estate',
    headline: 'Listings, portals, and lead systems',
    description:
      'Custom property management platforms, verified listing portals, and automated inquiry distribution systems.',
    link: '/industries#real-estate',
  },
  {
    name: 'Healthcare',
    headline: 'Secure, compliant patient-facing systems',
    description:
      'HIPAA/GDPR-compliant telehealth platforms, remote diagnostic device integrations, and appointment coordination tools.',
    link: '/industries#healthcare',
  },
  {
    name: 'Logistics',
    headline: 'Tracking, dashboards, and automation',
    description:
      'Real-time shipment telemetry dashboards, dispatch optimization algorithms, and automated supply-chain documentation.',
    link: '/industries#logistics',
  },
  {
    name: 'Manufacturing',
    headline: 'Internal systems connecting the floor to the office',
    description:
      'Machine monitoring telemetry, computer vision safety compliance, and ERP integration that unifies the shop floor with executive reporting.',
    link: '/industries#manufacturing',
  },
]
