export interface BlogSection {
  title: string
  content?: string
  bullets?: string[]
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  category: string
  industry: string
  date: string
  readTime: string
  author: string
  summary: string
  image: string
  challenge: string
  solutionBullets: string[]
  deliveryNote?: string
  impact: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 'titan-tata-remote-examination',
    title: 'Titan × Tata — Remote Eye Examination Platform',
    slug: 'titan-tata-remote-examination-platform',
    category: 'Healthcare & Retail',
    industry: 'Healthcare and Retail Technology',
    date: 'September 2026',
    readTime: '3 min read',
    author: 'Xylozen Engineering',
    summary:
      'Connecting customers with optometrists across locations through live video consultations, remote examination device access, and real-time diagnostic capture.',
    image: '/images/industries/healthcare.jpg',
    challenge:
      'Titan × Tata required a solution that could connect customers with expert optometrists without requiring an optometrist to be physically present at every location.',
    solutionBullets: [
      'Live video consultations with optometrists',
      'Remote access to in-store examination devices',
      'Real-time machine operation',
      'Instant diagnostic data capture',
      'Direct integration with the sales workflow',
    ],
    deliveryNote: 'The complete solution was designed, engineered, and deployed within one month.',
    impact:
      'The platform enabled expert eye-care access across locations while connecting the examination process directly to the customer’s purchase journey. It also created a scalable foundation for a broader vendor and optometrist ecosystem.',
  },
  {
    id: 'hireai-recruitment-platform',
    title: 'HireAI — Intelligent Recruitment Platform',
    slug: 'hireai-intelligent-recruitment-platform',
    category: 'AI & Automation',
    industry: 'Recruitment and Human Resources',
    date: 'August 2026',
    readTime: '3 min read',
    author: 'Xylozen Engineering',
    summary:
      'A cloud-based recruitment Micro-SaaS automating resume parsing, NLP skill extraction, and candidate ranking to reduce screening time from days to minutes.',
    image: '/images/industries/retail.jpg',
    challenge:
      'Traditional recruitment workflows often require recruiters to manually review large volumes of resumes, resulting in delays and inconsistent screening.',
    solutionBullets: [
      'AI-powered resume parsing',
      'Natural language processing for skill extraction',
      'Intelligent candidate ranking',
      'Recruiter dashboards and recruitment analytics',
      'Cloud-based Micro-SaaS architecture',
    ],
    deliveryNote: 'Engineered for seamless recruiter adoption and enterprise-grade screening accuracy.',
    impact:
      'HireAI reduced resume-screening time from days to minutes, allowing recruiters to focus on higher-value activities. The platform improved screening consistency and increased hiring capacity without requiring additional headcount.',
  },
  {
    id: 'construction-safety-monitoring',
    title: 'AI-Powered Construction Safety Monitoring',
    slug: 'ai-construction-safety-monitoring',
    category: 'Computer Vision & AI',
    industry: 'Construction and Infrastructure',
    date: 'July 2026',
    readTime: '3 min read',
    author: 'Xylozen Engineering',
    summary:
      'An AI-powered computer vision system detecting PPE and helmet compliance in real-time, providing centralized alerts and audit trails across active construction sites.',
    image: '/images/industries/manufacturing.jpg',
    challenge:
      'Construction companies often depend on manual inspections to monitor safety compliance across active sites. This approach can be time-consuming, inconsistent, and difficult to scale across multiple locations.',
    solutionBullets: [
      'Automated PPE and helmet detection',
      'Real-time safety alerts',
      'Centralized compliance dashboards',
      'Multi-site monitoring',
      'Audit trails and streamlined reporting',
    ],
    deliveryNote: 'Built for zero-downtime stream processing across distributed worksites.',
    impact:
      'The system reduced dependence on manual inspections, accelerated the identification of safety violations, lowered monitoring effort, and improved compliance visibility across construction sites.',
  },
]
