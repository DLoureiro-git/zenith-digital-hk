export const SITE = {
  name: "Zenith Digital HK",
  tagline: "AI Intelligence for Enterprise Asia",
  description: "Hong Kong's premier AI consultancy — building agentic systems, deploying AI platforms, and transforming enterprise operations across Asia-Pacific.",
  email: "hello@zenithdigital.hk",
  location: "Hong Kong · Asia-Pacific",
  year: 2025,
  copyright: `© ${new Date().getFullYear()} Zenith Digital HK. All rights reserved.`,
  social: {
    linkedin: "https://linkedin.com/company/zenith-digital-hk",
    twitter: "https://x.com/zenithdigitalhk",
    github: "https://github.com/DLoureiro-git",
  },
} as const;

export interface Service {
  slug: string;
  number: string;
  icon: string;
  title: string;
  body: string;
}

export const SERVICES: Service[] = [
  {
    slug: "ai-strategy",
    number: "01",
    icon: "brain-circuit",
    title: "AI Strategy & Roadmapping",
    body: "From executive vision to technical architecture — we design AI adoption programmes that create compounding advantage, not one-off pilots.",
  },
  {
    slug: "agentic-systems",
    number: "02",
    icon: "workflow",
    title: "Agentic System Design",
    body: "We build multi-agent pipelines that automate complex commercial workflows, reducing operational overhead and accelerating throughput.",
  },
  {
    slug: "llm-integration",
    number: "03",
    icon: "database-zap",
    title: "LLM Integration & Fine-Tuning",
    body: "Custom model deployment, RAG architecture, and domain fine-tuning — AI that knows your business, not just the internet.",
  },
  {
    slug: "marketing-intelligence",
    number: "04",
    icon: "bar-chart-3",
    title: "AI-Powered Marketing Intelligence",
    body: "We transform marketing operations with autonomous campaign management, predictive analytics, and content at scale.",
  },
  {
    slug: "enterprise-training",
    number: "05",
    icon: "users-round",
    title: "Enterprise AI Training",
    body: "Practical, hands-on programmes that build AI fluency across your teams — from C-suite to operations.",
  },
  {
    slug: "ai-governance",
    number: "06",
    icon: "shield-check",
    title: "AI Governance & Compliance",
    body: "Enterprise-grade frameworks for responsible AI deployment — risk assessment, audit trails, and regulatory alignment across APAC jurisdictions.",
  },
];

export interface ProductMetric {
  value: string;
  label: string;
}

export interface Product {
  tag: string;
  name: string;
  tagline: string;
  description: string;
  metrics: ProductMetric[];
  accentColor: string;
  status: "Live" | "Beta" | "Coming Soon";
}

export const PRODUCTS: Product[] = [
  {
    tag: "AI Marketing",
    name: "AdPilot",
    tagline: "Autonomous marketing intelligence for growth-obsessed teams.",
    description: "AdPilot orchestrates multi-channel campaigns through AI agents — from creative generation to audience targeting to performance analysis — with minimal human intervention. Built for agencies and ambitious brands.",
    metrics: [
      { value: "6", label: "Specialized AI agents" },
      { value: "3\u00d7", label: "Faster campaign cycles" },
      { value: "\u221e", label: "Scalable content output" },
    ],
    accentColor: "#3B82F6",
    status: "Live",
  },
  {
    tag: "AI Sales",
    name: "Marco",
    tagline: "The commercial AI agent that prospects, qualifies, and closes.",
    description: "Marco is an intelligent prospecting and outreach agent designed for enterprise pipelines. It researches targets, generates personalised outreach, validates approval workflows, and adapts in real time.",
    metrics: [
      { value: "AI-first", label: "Prospecting engine" },
      { value: "Excel", label: "Validation gateway" },
      { value: "ROI", label: "Structured scoring" },
    ],
    accentColor: "#06B6D4",
    status: "Beta",
  },
  {
    tag: "Premium Automotive",
    name: "The Selection",
    tagline: "Europe's finest cars, curated for the Portuguese market.",
    description: "A premium digital platform for importing high-end European vehicles into Portugal — with intelligent car sourcing, transparent pricing, concierge import services, and a curated marketplace experience.",
    metrics: [
      { value: "EU", label: "Vehicle sourcing network" },
      { value: "PT", label: "Import compliance" },
      { value: "\u2726", label: "White-glove experience" },
    ],
    accentColor: "#8B5CF6",
    status: "Live",
  },
];

export const MARQUEE_ROW_1 = [
  "Anthropic Partner",
  "OpenAI Ecosystem",
  "Microsoft Azure",
  "Hong Kong Science Park",
  "Prisma88",
  "AdPilot",
  "Marco",
  "The Selection",
];

export const MARQUEE_ROW_2 = [
  "AI Strategy",
  "Agentic Systems",
  "Enterprise Automation",
  "APAC Digital Transformation",
  "LLM Integration",
  "Workflow Intelligence",
];

export const WHY_ZENITH_POINTS = [
  "Frontier AI, not vendor resale",
  "Results measured in operations, not slides",
  "Regional fluency across HK, Mainland, SEA",
  "Founding team with real product in production",
];

export interface Stat {
  value: string;
  suffix?: string;
  label: string;
  isNumeric: boolean;
}

export const STATS: Stat[] = [
  { value: "3", suffix: "+", label: "AI platforms built & deployed", isNumeric: true },
  { value: "100", suffix: "%", label: "In-house methodology \u2014 no resell", isNumeric: true },
  { value: "APAC", label: "Primary geographic focus", isNumeric: false },
  { value: "2025", label: "Founded in Hong Kong", isNumeric: false },
];

export const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export interface FooterLink {
  label: string;
  href: string;
  badge?: string;
}

export const FOOTER_SERVICES: FooterLink[] = [
  { label: "AI Strategy", href: "/services/ai-strategy" },
  { label: "Agentic Systems", href: "/services/agentic-systems" },
  { label: "LLM Integration", href: "/services/llm-integration" },
  { label: "AI Marketing", href: "/services/marketing-intelligence" },
  { label: "Training", href: "/services/enterprise-training" },
  { label: "AI Governance", href: "/services/ai-governance" },
];

export const FOOTER_PRODUCTS: FooterLink[] = [
  { label: "AdPilot", href: "#products" },
  { label: "Marco", href: "#products", badge: "Beta" },
  { label: "The Selection", href: "#products" },
];

export const FOOTER_COMPANY: FooterLink[] = [
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog", badge: "Soon" },
  { label: "Contact", href: "#contact" },
  { label: "Privacy Policy", href: "#" },
];
