import {
  Cpu,
  Target,
  ShieldCheck,
  Building,
  Handshake,
  Compass,
  Code2,
  Workflow,
  Sparkles,
} from 'lucide-react'

export interface WhyPillar {
  id: string
  number: string
  name: string
  tagline: string
  badgeText: string
  summary: string
  anchor: string
  image: string
  keyTakeaways: string[]
  icon: typeof Cpu
}

export interface DeliveryStage {
  id: string
  number: string
  step: string
  title: string
  phase: string
  description: string
  deliverables: string[]
  outcome: string
  image: string
}

export interface AboutStatItem {
  value: number
  suffix?: string
  prefix?: string
  displayOverride?: string
  label: string
  sublabel: string
}

export interface CommitmentItem {
  id: string
  number: string
  title: string
  tagline: string
  description: string
  icon: typeof Target
}

export interface AboutFaqItem {
  id: string
  question: string
  answer: string
  category: string
}

// =============================================================================
// 1. WHY XYLOZEN: 5 CORE PILLARS (Strictly from info/Content/aboutUs.MD)
// =============================================================================
export const aboutWhyPillars: WhyPillar[] = [
  {
    id: 'ai-native',
    number: '01',
    name: 'AI-Native Thinking',
    tagline: 'Foundational, Not an Afterthought',
    badgeText: 'INTELLIGENT ARCHITECTURE',
    summary:
      'We treat AI as a foundational capability; it is not a feature added at the end. Our solutions are designed to use intelligent automation, data, and connected systems from the ground up.',
    anchor: 'why-xylozen',
    image: '/images/agents/engineer.jpg',
    keyTakeaways: [
      'Agentic reasoning engines & LLM pipelines built directly into data models',
      'Continuous telemetry ingestion & real-time automated decision flows',
      'Elimination of redundant manual steps across core business processes',
    ],
    icon: Cpu,
  },
  {
    id: 'outcome-driven',
    number: '02',
    name: 'Outcome-Driven Engineering',
    tagline: 'Business Impact Precedes Code',
    badgeText: 'MEASURABLE BUSINESS VALUE',
    summary:
      'Every product begins with a clear understanding of the problem, the users, the workflow, and the expected business impact. We build software to solve business constraints, not to pad tech stacks.',
    anchor: 'why-xylozen',
    image: '/images/agents/scheduler.jpg',
    keyTakeaways: [
      'Clear definition of operational friction before selecting frameworks',
      'Target KPIs established upfront: velocity, accuracy, and operational throughput',
      'Bi-weekly milestone demonstrations tied strictly to user workflows',
    ],
    icon: Target,
  },
  {
    id: 'end-to-end',
    number: '03',
    name: 'End-to-End Ownership',
    tagline: 'From Strategy to Sustained Scale',
    badgeText: 'COMPLETE PRODUCT LIFECYCLE',
    summary:
      'We support the complete journey, including discovery, strategy, design, engineering, deployment, integration, and continuous improvement. You partner with product architects, not ticket handlers.',
    anchor: 'why-xylozen',
    image: '/images/agents/operations.jpg',
    keyTakeaways: [
      'Discovery, systems architecture, and UX wireframing conducted under one roof',
      'Full-stack engineering: cloud infrastructure, backend microservices, and client apps',
      'Production hardening, automated CI/CD pipelines, and observability monitoring',
    ],
    icon: ShieldCheck,
  },
  {
    id: 'built-around-you',
    number: '04',
    name: 'Built Around Your Business',
    tagline: 'Tailored to Your Operating Model',
    badgeText: 'ADAPTIVE PLATFORMS',
    summary:
      'We do not force every organization into the same technology model. We create solutions aligned with your industry, operations, goals, and growth stage.',
    anchor: 'why-xylozen',
    image: '/images/agents/realestate.jpg',
    keyTakeaways: [
      'Custom database schemas and business logic tailored to your exact domain',
      'Flexible deployment topology: on-premise edge, private cloud, or serverless',
      'Zero vendor lock-in with clean modular code and thorough documentation',
    ],
    icon: Building,
  },
  {
    id: 'long-term',
    number: '05',
    name: 'Long-Term Partnership',
    tagline: 'Engineering That Scales With You',
    badgeText: 'POST-LAUNCH EVOLUTION',
    summary:
      'Our relationship does not end at launch. We remain involved through optimization, maintenance, scaling, and future product development as your organization grows.',
    anchor: 'why-xylozen',
    image: '/images/agents/manufacturing.jpg',
    keyTakeaways: [
      'SLA-backed production monitoring, security patching, and capacity planning',
      'Quarterly architectural reviews to integrate emerging AI and infrastructure updates',
      'Seamless knowledge transfer and code handover to your internal team whenever needed',
    ],
    icon: Handshake,
  },
]

// =============================================================================
// 2. HOW WE WORK: 8-STAGE DISCIPLINED DELIVERY PROCESS (from howWeWork.MD)
// =============================================================================
export const aboutDeliveryStages: DeliveryStage[] = [
  {
    id: 'stage-1',
    number: '01',
    step: 'STAGE 01',
    title: 'Strategic Discovery',
    phase: 'Commercial & Context Foundation',
    description:
      'We begin by understanding your business model, operating environment, customer expectations, existing systems, and growth objectives. This phase establishes the commercial and operational context behind the product before any solution is proposed.',
    deliverables: [
      'Stakeholder & workflow interview synthesis',
      'System landscape & data flow mapping',
      'Technical constraint & compliance audit',
    ],
    outcome: 'Deep operational context and clear business objectives.',
    image: '/images/industries/retail.jpg',
  },
  {
    id: 'stage-2',
    number: '02',
    step: 'STAGE 02',
    title: 'Opportunity Definition',
    phase: 'Scoping & Success Criteria',
    description:
      'We translate business challenges into clearly defined opportunities, priorities, and measurable outcomes. Together, we establish the product vision, success criteria, functional scope, technical considerations, and investment priorities.',
    deliverables: [
      'Product requirements document (PRD)',
      'KPI benchmark scorecard',
      'MVP scope boundary & milestone roadmap',
    ],
    outcome: 'Clear product vision with locked success criteria.',
    image: '/images/industries/healthcare.jpg',
  },
  {
    id: 'stage-3',
    number: '03',
    step: 'STAGE 03',
    title: 'Product & Technical Architecture',
    phase: 'System & Schema Blueprinting',
    description:
      'Our team defines the product structure, user journeys, system architecture, technology direction, integrations, and scalability requirements. The objective is to create a strong foundation that supports both immediate execution and future expansion.',
    deliverables: [
      'Cloud & microservices topology diagram',
      'Database schema & data contract models',
      'Third-party API & hardware integration specs',
    ],
    outcome: 'Resilient architectural foundation engineered for scale.',
    image: '/images/industries/real-estate.jpg',
  },
  {
    id: 'stage-4',
    number: '04',
    step: 'STAGE 04',
    title: 'Experience & Solution Design',
    phase: 'Workflows & User Journeys',
    description:
      'We design intuitive user experiences and practical workflows that reflect how your customers, teams, and stakeholders operate. Every interaction is considered with usability, efficiency, accessibility, and business performance in mind.',
    deliverables: [
      'Interactive Figma prototypes & design tokens',
      'High-fidelity user journey maps',
      'Component design system & responsive guidelines',
    ],
    outcome: 'Intuitive, frictionless workflows built for real users.',
    image: '/images/industries/logistics.jpg',
  },
  {
    id: 'stage-5',
    number: '05',
    step: 'STAGE 05',
    title: 'Controlled Product Development',
    phase: 'Engineering & Agile Sprints',
    description:
      'We develop the product through structured execution, transparent communication, and continuous validation. Our engineering process emphasizes code quality, security, performance, maintainability, and alignment with agreed product objectives.',
    deliverables: [
      'Two-week sprint cadences with staging previews',
      'Clean, modular TypeScript / Next.js / Python codebases',
      'Automated unit & integration test suites',
    ],
    outcome: 'Production-grade software built with extreme engineering rigor.',
    image: '/images/industries/manufacturing.jpg',
  },
  {
    id: 'stage-6',
    number: '06',
    step: 'STAGE 06',
    title: 'Validation & Quality Assurance',
    phase: 'Rigorous Verification',
    description:
      'Before deployment, the solution is rigorously reviewed against functional, technical, and operational requirements. We validate system behavior, user workflows, integrations, performance, and reliability to ensure the product is ready for real-world use.',
    deliverables: [
      'End-to-end automated regression testing',
      'Security penetration & vulnerability audit',
      'Load testing & latency telemetry verification',
    ],
    outcome: 'Zero critical flaws and verified production readiness.',
    image: '/images/architecture/edge_network.jpg',
  },
  {
    id: 'stage-7',
    number: '07',
    step: 'STAGE 07',
    title: 'Deployment & Operational Readiness',
    phase: 'Production Launch & Handover',
    description:
      'We support the transition from development to production through deployment planning, infrastructure configuration, documentation, and operational handover. The goal is a stable launch with the foundations required for ongoing management and growth.',
    deliverables: [
      'Automated blue-green CI/CD deployment pipelines',
      'Infrastructure as Code (IaC) configuration',
      'Comprehensive operator runbooks & admin training',
    ],
    outcome: 'Flawless production go-live with complete team confidence.',
    image: '/images/architecture/database_cluster.jpg',
  },
  {
    id: 'stage-8',
    number: '08',
    step: 'STAGE 08',
    title: 'Continuous Improvement & Scale',
    phase: 'Post-Launch Evolution',
    description:
      'Our engagement does not end at launch. We use product feedback, performance insights, and evolving business requirements to guide future improvements. From new integrations and automation to advanced AI capabilities, we help the product evolve.',
    deliverables: [
      'Real-time APM telemetry & error tracking',
      'Continuous feature roadmap prioritization',
      'Infrastructure scaling & AI model fine-tuning',
    ],
    outcome: 'Continuous business value and sustained competitive advantage.',
    image: '/images/architecture/app_core.jpg',
  },
]

// =============================================================================
// 3. ABOUT STATS (Studio Benchmarks)
// =============================================================================
export const aboutStats: AboutStatItem[] = [
  {
    value: 100,
    suffix: '%',
    label: 'In-House Team',
    sublabel: 'Zero outsourcing; direct access to architects',
  },
  {
    value: 8,
    suffix: '-Stage',
    label: 'Delivery Framework',
    sublabel: 'From strategic discovery to sustained scale',
  },
  {
    value: 0,
    displayOverride: 'HQ',
    prefix: 'Chennai',
    label: 'Global Delivery Base',
    sublabel: 'International delivery standards from Chennai, India',
  },
  {
    value: 0,
    displayOverride: '100%',
    suffix: 'IP',
    label: 'Full Client Ownership',
    sublabel: 'Complete code ownership, schemas & deployment runbooks',
  },
]

// =============================================================================
// 4. STUDIO COMMITMENT (from howWeWork.MD closing)
// =============================================================================
export const aboutCommitments: CommitmentItem[] = [
  {
    id: 'strategy',
    number: '01',
    title: 'Clear Strategy',
    tagline: 'Business-Led Architecture',
    description:
      'We never write code in a vacuum. Every system architecture begins with business model analysis, operational bottlenecks, and quantifiable financial impact.',
    icon: Compass,
  },
  {
    id: 'engineering',
    number: '02',
    title: 'Strong Engineering',
    tagline: 'Modern, Scalable Systems',
    description:
      'We use typed, modular, and resilient technologies, from Next.js and Python microservices to vector datastores and edge inference brokers.',
    icon: Code2,
  },
  {
    id: 'transparency',
    number: '03',
    title: 'Transparent Execution',
    tagline: 'Open Sprints & Direct Access',
    description:
      'No layers of account managers. You collaborate directly with lead product engineers with weekly staging deployments and shared Slack/GitHub channels.',
    icon: Workflow,
  },
  {
    id: 'outcomes',
    number: '04',
    title: 'Measurable Outcomes',
    tagline: 'Commercial Value Delivered',
    description:
      'We gauge our success by production throughput: latency reductions, checkout conversions, manual work hours eliminated, and revenue generated.',
    icon: Sparkles,
  },
]

// =============================================================================
// 5. ABOUT & DELIVERY FAQS (for ServiceSubpageFAQs)
// =============================================================================
export const aboutFaqs: AboutFaqItem[] = [
  {
    id: 'about-faq-1',
    category: 'Studio Model',
    question: 'How does Xylozen differ from a traditional software agency?',
    answer:
      'Traditional agencies sell hours or build simple functional software and walk away. Xylozen is an AI-native product studio that takes end-to-end ownership from business discovery to production scaling. We treat AI as foundational, focus on commercial outcomes, and provide direct access to the engineers building your system.',
  },
  {
    id: 'about-faq-2',
    category: 'Intellectual Property',
    question: 'Do we own 100% of the code, intellectual property, and infrastructure?',
    answer:
      'Yes, absolutely. All codebases, database schemas, AI orchestration workflows, infrastructure configurations, and design assets belong entirely to you from day one. There are zero licensing lock-ins or proprietary black-box fees.',
  },
  {
    id: 'about-faq-3',
    category: 'Delivery Framework',
    question: 'How long does the 8-stage delivery process typically take?',
    answer:
      'For a production MVP or workflow automation platform, Stages 1 through 7 typically span 4 to 8 weeks. Strategic Discovery and Architecture take the first 1–2 weeks, followed by bi-weekly development sprints with working staging builds.',
  },
  {
    id: 'about-faq-4',
    category: 'Team & Collaboration',
    question: 'Where is the engineering team located, and how do we communicate?',
    answer:
      'Our product engineering studio is headquartered in Chennai, India, working with clients globally across the US, UK, Middle East, and Asia-Pacific. We work in your time zone with dedicated Slack/Discord communication, weekly sprint demos, and full repository access.',
  },
  {
    id: 'about-faq-5',
    category: 'Post-Launch',
    question: 'What happens after Stage 7 (Deployment & Go-Live)?',
    answer:
      'We enter Stage 8: Continuous Improvement & Scale. We provide SLA-backed uptime monitoring, security patching, and ongoing feature sprints based on real user analytics, telemetry, and emerging AI capabilities.',
  },
]
