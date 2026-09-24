export interface BenefitGroup {
  groupTitle: string
  items: string[]
}

export interface PricingTier {
  id: string
  title: string
  badge?: string
  headline: string
  subtext: string
  ctaText: string
  ctaLink: string
  featured?: boolean
  benefitGroups: BenefitGroup[]
}

export interface PricingStat {
  value: number
  prefix?: string
  suffix?: string
  label: string
  detail: string
}

export interface ComparisonFeature {
  category: string
  features: {
    name: string
    mvp: string | boolean
    pod: string | boolean
    audit: string | boolean
  }[]
}

export const pricingStats: PricingStat[] = [
  {
    value: 100,
    suffix: '%',
    label: 'IP & Code Ownership',
    detail: 'Full repository, design system, and cloud infrastructure ownership.',
  },
  {
    value: 0,
    label: 'Hidden Fees or Markup',
    detail: 'Transparent milestone contracts and predictable sprint billing.',
  },
  {
    value: 2,
    suffix: '-Week',
    label: 'Sprint Demo Cadence',
    detail: 'Live functional software demonstrations delivered every 14 days.',
  },
  {
    value: 30,
    suffix: '-Day',
    label: 'Post-Launch Warranty',
    detail: 'Immediate bug-fixing and operational hardening support included.',
  },
]

export const pricingTiers: PricingTier[] = [
  {
    id: 'fixed-scope-mvp',
    title: 'Fixed-Scope MVP',
    badge: 'Fast-Track Build',
    headline: 'Fixed Milestone Scope',
    subtext: 'Turn validated concepts into production software with cost certainty.',
    ctaText: 'Scope Your MVP',
    ctaLink: '/contact',
    featured: false,
    benefitGroups: [
      {
        groupTitle: 'Core Deliverables',
        items: [
          'Interactive Figma UI/UX prototype & design system',
          'Production Next.js & strict TypeScript web application',
          'Scalable backend API & database architecture',
          'Automated CI/CD deployment & cloud hosting setup',
        ],
      },
      {
        groupTitle: 'Commercial & Governance',
        items: [
          '100% IP and full Git repository ownership',
          'Zero vendor lock-in architecture',
          'Bi-weekly functional demo milestones',
          '30-day post-launch bug warranty & support',
        ],
      },
    ],
  },
  {
    id: 'dedicated-pod',
    title: 'Dedicated Engineering Pod',
    badge: 'Best Value',
    headline: 'Sprint-Based Pod',
    subtext: 'Your dedicated senior engineering team for sustained velocity.',
    ctaText: 'Assemble Your Pod',
    ctaLink: '/contact',
    featured: true,
    benefitGroups: [
      {
        groupTitle: 'Pod Composition & Access',
        items: [
          'Dedicated senior full-stack engineers assigned 100%',
          'Agentic AI and automation specialist included',
          'Senior technical lead & architecture governance',
          'Direct Slack & GitHub real-time collaboration',
        ],
      },
      {
        groupTitle: 'Engineering Rigor & SLA',
        items: [
          'Daily async standups & bi-weekly release cycles',
          'Automated unit, integration & end-to-end testing',
          'Continuous cloud infrastructure telemetry',
          'Flexible scaling up or down with 30-day notice',
        ],
      },
    ],
  },
  {
    id: 'architecture-audit',
    title: 'AI & Architecture Audit',
    badge: 'Technical Scoping',
    headline: 'Fixed Evaluation Fee',
    subtext: 'Uncover bottlenecks, eliminate debt, and blueprint AI workflows.',
    ctaText: 'Book Technical Audit',
    ctaLink: '/contact',
    featured: false,
    benefitGroups: [
      {
        groupTitle: 'Audit Deliverables',
        items: [
          'Codebase latency, query & performance analysis',
          'Database query & indexing optimization blueprint',
          'Security posture and OWASP compliance review',
          'High-impact AI agent & workflow feasibility map',
        ],
      },
      {
        groupTitle: 'Strategic Outcomes',
        items: [
          'Executive architectural health scorecard',
          'Step-by-step modernization & refactoring runbook',
          'Identification of concurrency bottlenecks',
          '14-day post-audit architectural advisory support',
        ],
      },
    ],
  },
]

export const pricingComparison: ComparisonFeature[] = [
  {
    category: 'Engineering & Team Structure',
    features: [
      {
        name: 'Dedicated Senior Engineers',
        mvp: 'Assigned Pod',
        pod: 'Dedicated 100%',
        audit: 'Lead Architect',
      },
      {
        name: 'Senior Technical Lead Governance',
        mvp: true,
        pod: true,
        audit: true,
      },
      {
        name: 'Direct Slack / Git Access',
        mvp: true,
        pod: true,
        audit: true,
      },
      {
        name: 'Daily Standups & Sprint Planning',
        mvp: 'Bi-weekly',
        pod: 'Daily / Weekly',
        audit: 'Milestone syncs',
      },
    ],
  },
  {
    category: 'Codebase & Architecture',
    features: [
      {
        name: '100% IP & Repository Ownership',
        mvp: true,
        pod: true,
        audit: true,
      },
      {
        name: 'Strict TypeScript Type Safety',
        mvp: true,
        pod: true,
        audit: true,
      },
      {
        name: 'Automated CI/CD & Deployments',
        mvp: true,
        pod: true,
        audit: 'Assessment',
      },
      {
        name: 'Zero Vendor Lock-In Architecture',
        mvp: true,
        pod: true,
        audit: true,
      },
    ],
  },
  {
    category: 'Commercial & Warranty',
    features: [
      {
        name: 'Commercial Certainty',
        mvp: 'Fixed Scope & Price',
        pod: 'Predictable Sprint Rate',
        audit: 'Fixed Audit Fee',
      },
      {
        name: 'Post-Launch Warranty',
        mvp: '30 Days Included',
        pod: 'Continuous SLA',
        audit: '14-Day Q&A Support',
      },
      {
        name: 'Scale Up / Down Flexibility',
        mvp: 'Milestone-based',
        pod: '30-day notice',
        audit: 'Fixed 2-week engagement',
      },
    ],
  },
]

export const pricingFaqs = [
  {
    question: 'How do you calculate pricing for custom projects and MVPs?',
    answer:
      'We price Fixed-Scope MVPs based on the validated scope, technical complexity, third-party integrations, and timeline required to reach production readiness. After a technical scoping session, we provide a transparent, fixed commercial quote with no surprise fees or scope drift.',
  },
  {
    question: 'Do we own 100% of the code and intellectual property?',
    answer:
      'Yes, absolutely. From the moment code is committed, all intellectual property, repository access, design files, deployment runbooks, and configurations belong exclusively to your organization. We do not hold proprietary code or retain any vendor lock-in.',
  },
  {
    question: 'How does billing work for Dedicated Engineering Pods?',
    answer:
      'Dedicated pods are billed on a transparent monthly or bi-weekly sprint cadence. You receive a dedicated team of senior developers, an AI specialist, and a technical lead focused exclusively on your product roadmap with zero overhead.',
  },
  {
    question: 'What happens if we need to change scope during an MVP build?',
    answer:
      'We use an agile milestone approach. If your market priorities evolve mid-sprint, we collaboratively assess the change, swap backlog items of equivalent complexity without additional cost, or adjust the milestone scope transparently.',
  },
  {
    question: 'What is included in the 30-day post-launch warranty?',
    answer:
      'Every fixed-scope product build includes 30 days of comprehensive post-launch support. This covers bug remediation, infrastructure stabilization, telemetry validation, and performance tuning at zero additional cost.',
  },
  {
    question: 'Can we transition from an MVP build into a Dedicated Pod?',
    answer:
      'Yes, this is a very common path for our clients. Once your MVP is validated in production, the exact same engineering team that built the foundation can transition into a dedicated sprint pod to iterate, build advanced features, and scale operations.',
  },
]
