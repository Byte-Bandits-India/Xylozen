import {
  Code2,
  ShoppingBag,
  Bot,
  FileText,
  Store,
  Building2,
  Stethoscope,
  Truck,
  Factory,
  Layers,
  Compass,
  BookOpen,
  LucideIcon,
} from 'lucide-react'

export interface SubMenuItem {
  title: string
  subtitle: string
  href: string
  icon: LucideIcon
  iconBg: string
  iconColor: string
}

export interface MegaMenuData {
  id: string
  label: string
  eyebrow: string
  eyebrowIcon: LucideIcon
  items: SubMenuItem[]
  viewAllText?: string
  viewAllHref?: string
  visualHeadline?: string
  visualSub?: string
}

export const navigationMenuData: Record<string, MegaMenuData> = {
  services: {
    id: 'services',
    label: 'Services',
    eyebrow: 'SERVICES',
    eyebrowIcon: Layers,
    items: [
      {
        title: 'Web & Software',
        subtitle: 'Enterprise portals, dashboards & systems',
        href: '/services/web-software',
        icon: Code2,
        iconBg: 'bg-brand-500/10',
        iconColor: 'text-brand-500',
      },
      {
        title: 'Ecommerce',
        subtitle: 'Custom storefronts & checkout engines',
        href: '/services/ecommerce',
        icon: ShoppingBag,
        iconBg: 'bg-teal-400/15',
        iconColor: 'text-teal-600',
      },
      {
        title: 'AI & Automation',
        subtitle: 'Intelligent automation & connected pipelines',
        href: '/services/ai-automation',
        icon: Bot,
        iconBg: 'bg-violet-500/10',
        iconColor: 'text-violet-500',
      },
    ],
    viewAllText: 'Explore all services & architecture',
    viewAllHref: '/services',
    visualHeadline: 'AI-Native Architecture',
    visualSub: 'Intelligent systems engineered for operational scale',
  },

  industries: {
    id: 'industries',
    label: 'Industries we Serve',
    eyebrow: 'SECTOR SOLUTIONS',
    eyebrowIcon: Store,
    items: [
      {
        title: 'Retail & Ecommerce',
        subtitle: 'High-converting stores & inventory sync',
        href: '/industries#retail',
        icon: Store,
        iconBg: 'bg-brand-500/10',
        iconColor: 'text-brand-500',
      },
      {
        title: 'Real Estate',
        subtitle: 'Portals, listings & lead management',
        href: '/industries#real-estate',
        icon: Building2,
        iconBg: 'bg-blue-50',
        iconColor: 'text-brand-700',
      },
      {
        title: 'Healthcare',
        subtitle: 'Secure & compliant patient platforms',
        href: '/industries#healthcare',
        icon: Stethoscope,
        iconBg: 'bg-teal-400/15',
        iconColor: 'text-teal-600',
      },
      {
        title: 'Logistics',
        subtitle: 'Tracking dashboards & dispatch flows',
        href: '/industries#logistics',
        icon: Truck,
        iconBg: 'bg-amber-50',
        iconColor: 'text-amber-600',
      },
      {
        title: 'Manufacturing',
        subtitle: 'Floor telemetry to ERP integration',
        href: '/industries#manufacturing',
        icon: Factory,
        iconBg: 'bg-violet-500/10',
        iconColor: 'text-violet-500',
      },
    ],
    viewAllText: 'Explore industry workflows',
    viewAllHref: '/industries',
    visualHeadline: 'Industry-Specific Tech',
    visualSub: 'Engineered for how your business actually operates',
  },

  resources: {
    id: 'resources',
    label: 'Resources',
    eyebrow: 'RESOURCES & INSIGHTS',
    eyebrowIcon: BookOpen,
    items: [
      {
        title: 'Blogs',
        subtitle: 'Architecture, engineering & technical perspectives',
        href: '/blogs',
        icon: BookOpen,
        iconBg: 'bg-violet-500/10',
        iconColor: 'text-violet-500',
      },
      {
        title: 'Case Studies',
        subtitle: 'Production outcomes, technical ROI & client proof',
        href: '/our-work',
        icon: FileText,
        iconBg: 'bg-teal-400/15',
        iconColor: 'text-teal-600',
      },
      {
        title: 'Pricing Models',
        subtitle: 'Sprint-based pods & fixed-scope MVP tiers',
        href: '/pricing',
        icon: Layers,
        iconBg: 'bg-brand-500/10',
        iconColor: 'text-brand-500',
      },
      {
        title: 'How We Work',
        subtitle: '8-stage disciplined product delivery lifecycle',
        href: '/our-work#how-we-work',
        icon: Compass,
        iconBg: 'bg-amber-50',
        iconColor: 'text-amber-600',
      },
    ],
  },
}
