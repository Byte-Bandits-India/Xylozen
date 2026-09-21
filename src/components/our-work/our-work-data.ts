import React from 'react'
import { Eye, Users, HardHat } from 'lucide-react'
import { FAQItem } from '@/components/services/ServiceSubpageFAQs'

export interface CaseStudyStat {
  num?: number
  prefix?: string
  suffix?: string
  rawText?: string
  label: string
}

export interface CaseStudy {
  id: string
  number: string
  client: string
  badgeLabel: string
  badgeColor: string
  title: string
  industry: string
  solutionType: string
  challenge: string
  capabilities: string[]
  impact: string
  timeline: string
  icon: React.ComponentType<{ className?: string }>
  stats: CaseStudyStat[]
  technologies: string[]
}

export interface TelemetryMetric {
  value: number
  suffix: string
  label: string
  sublabel: string
  duration?: number
}

export const telemetryMetrics: TelemetryMetric[] = [
  {
    value: 40,
    suffix: '%',
    label: 'Faster Checkout Flow',
    sublabel: 'Titan × Tata Storefront',
    duration: 2,
  },
  {
    value: 12,
    suffix: ' hrs',
    label: 'Saved Per Recruiter / Wk',
    sublabel: 'HireAI Screening Engine',
    duration: 1.8,
  },
  {
    value: 30,
    suffix: ' Days',
    label: 'Scope to Production',
    sublabel: 'Rapid Enterprise Delivery',
    duration: 2,
  },
  {
    value: 99.9,
    suffix: '%',
    label: 'Uptime SLA Standard',
    sublabel: 'Guaranteed Concurrency',
    duration: 2.2,
  },
]

export const flagshipCaseStudies: CaseStudy[] = [
  {
    id: 'titan-tata',
    number: '01',
    client: 'Titan × Tata',
    badgeLabel: 'Healthcare & Retail',
    badgeColor: 'bg-brand-500/10 text-brand-700',
    title: 'Remote Eye Examination & Assisted Sales Platform',
    industry: 'Healthcare and Retail Technology',
    solutionType: 'Remote examination and assisted sales platform',
    challenge:
      'Titan × Tata required a solution that could connect customers with expert optometrists across widespread retail store locations without requiring an optometrist to be physically present at every location.',
    capabilities: [
      'Live low-latency video consultations between customers and certified optometrists',
      'Remote hardware access to in-store examination diagnostic devices',
      'Real-time optical machine operation and bi-directional telemetry',
      'Instant diagnostic data capture with automated digital prescription generation',
      'Direct synchronization into the in-store POS and retail purchase journey',
    ],
    impact:
      'The platform enabled expert eye-care access across retail locations while connecting the examination process directly to the customer’s purchase journey. It established a scalable foundation for a broader multi-vendor and optometrist ecosystem.',
    timeline: 'Delivered in 1 Month',
    icon: Eye,
    stats: [
      { num: 1, suffix: ' Month', label: 'Scope to Production' },
      { num: 100, suffix: '%', label: 'Remote Exam Coverage' },
      { rawText: 'Direct', label: 'POS Sales Sync' },
    ],
    technologies: ['React', 'Next.js', 'WebRTC', 'Node.js', 'Hardware WebSockets', 'PostgreSQL'],
  },
  {
    id: 'hireai',
    number: '02',
    client: 'HireAI',
    badgeLabel: 'AI Micro-SaaS',
    badgeColor: 'bg-emerald-500/10 text-emerald-700',
    title: 'Intelligent Recruitment & Candidate Ranking Platform',
    industry: 'Recruitment and Human Resources',
    solutionType: 'AI-powered recruitment Micro-SaaS',
    challenge:
      'Traditional recruitment workflows require recruiters to manually review high volumes of unstructured resumes, causing critical placement delays, reviewer fatigue, and inconsistent candidate screening.',
    capabilities: [
      'AI-powered resume parsing across complex multilingual PDF and DOCX formats',
      'Natural language processing for semantic skill extraction and experience taxonomy',
      'Intelligent candidate ranking and contextual job-match scoring',
      'Collaborative recruiter pipeline dashboards and interview coordination',
      'Recruitment velocity and diversity analytics reporting',
      'Cloud-based multi-tenant Micro-SaaS architecture',
    ],
    impact:
      'HireAI reduced resume-screening time from days to minutes, allowing recruiters to focus on higher-value candidate interactions. The platform improved screening consistency and increased hiring capacity without requiring additional headcount.',
    timeline: '3-Week MVP Release',
    icon: Users,
    stats: [
      { rawText: 'Days → Mins', label: 'Screening Latency' },
      { num: 12, suffix: ' hrs/wk', label: 'Recruiter Time Saved' },
      { rawText: 'Zero', label: 'Headcount Overhead' },
    ],
    technologies: ['Python', 'FastAPI', 'Claude 3.5', 'OpenAI Embeddings', 'Next.js', 'PostgreSQL', 'Redis'],
  },
  {
    id: 'vision-safety',
    number: '03',
    client: 'VisionGuard Infrastructure',
    badgeLabel: 'Computer Vision',
    badgeColor: 'bg-teal-500/10 text-teal-700',
    title: 'AI-Powered Construction Safety & Hazard Monitoring',
    industry: 'Construction and Infrastructure',
    solutionType: 'Computer vision-based safety monitoring system',
    challenge:
      'Construction enterprises often depend on manual visual inspections to monitor safety compliance across active sites. This approach is time-consuming, inconsistent, and difficult to scale across concurrent hazardous sites.',
    capabilities: [
      'Automated high-framerate PPE, helmet, and safety harness detection at the edge',
      'Real-time hazard alerting pipeline with instant supervisor notifications',
      'Centralized multi-site compliance monitoring dashboards',
      'Cryptographic safety violation audit trails and incident timeline replay',
      'Automated inspection-ready regulatory reporting and site scorecards',
      'Robust distributed edge computing compatible with standard CCTV RTSP streams',
    ],
    impact:
      'The system drastically reduced dependence on manual site inspections, accelerated the identification of safety violations, lowered monitoring effort, and provided 24/7 compliance visibility across hazardous construction sites.',
    timeline: '6-Week Edge Deployment',
    icon: HardHat,
    stats: [
      { rawText: 'Real-Time', label: 'Violation Detection' },
      { num: 24, suffix: '/7', label: 'Multi-Site Monitoring' },
      { rawText: 'Audit-Ready', label: 'Compliance Reporting' },
    ],
    technologies: ['Python', 'OpenCV', 'YOLOv8', 'RTSP Streams', 'Docker', 'FastAPI', 'PostgreSQL'],
  },
]

export const ourWorkFaqs: FAQItem[] = [
  {
    question: 'How does Xylozen approach fixed-scope delivery timelines?',
    answer:
      'Every project begins with a 48-hour architectural scoping phase where we establish non-negotiable weekly sprint milestones. For MVPs like HireAI and Titan × Tata, our battle-tested component primitives and modular backend architectures allow us to deliver complete, production-verified software within 3 to 6 weeks.',
  },
  {
    question: 'Do we own the full intellectual property and code upon project completion?',
    answer:
      'Yes, 100%. From day one, you receive complete commercial ownership of all code, configuration files, schema definitions, and design assets. We deliver modular directories written in strict TypeScript and Python with zero proprietary vendor lock-in.',
  },
  {
    question: 'Can Xylozen engineer custom hardware or IoT device integrations?',
    answer:
      'Yes. As demonstrated in our Titan × Tata optical deployment, we engineer low-latency WebSockets, serial protocol drivers, and edge runtime connectors that link physical testing devices directly with web browsers and cloud ERPs.',
  },
  {
    question: 'How do you handle enterprise data privacy and model security for AI systems?',
    answer:
      'We enforce zero data retention policies and tenant isolation. For private enterprise workflows, we deploy models in self-hosted VPC environments on AWS, Azure, or private hardware, ensuring client data is never used to train public foundation models.',
  },
]
