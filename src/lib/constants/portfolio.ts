export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface CaseStudyTestimonial {
  quote: string;
  author: string;
  role: string;
}

export interface CaseStudy {
  slug: string;
  name: string;
  tag: string;
  description: string;
  challenge: string;
  solution: string;
  results: string;
  metrics: CaseStudyMetric[];
  techStack: string[];
  testimonial: CaseStudyTestimonial;
  accentColor: string;
  image: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "adpilot",
    name: "AdPilot",
    tag: "AI Marketing Platform",
    description:
      "A full-stack AI marketing platform that orchestrates multi-channel campaigns through six specialised agents — from audience segmentation and creative generation to performance analysis and budget optimisation.",
    challenge:
      "A fast-growing e-commerce group was spending 60+ hours per week on campaign management across Meta, Google, and TikTok. Creative production was the bottleneck, A/B testing was manual, and performance insights arrived too late to act on. They needed to scale output without scaling headcount.",
    solution:
      "We built AdPilot — a multi-agent marketing platform where each AI agent owns a specific domain: audience research, copy generation, creative direction, campaign deployment, performance monitoring, and strategic recommendations. The agents communicate through a structured orchestration layer, with human approval gates at key decision points. The platform integrates directly with Meta Marketing API, Google Ads, and the client's Supabase backend, enabling end-to-end campaign automation with full audit trails.",
    results:
      "Campaign launch cycles dropped from 2 weeks to 4 days. Creative output increased 5x with consistent brand voice. ROAS improved 40% in the first quarter through AI-driven budget reallocation. The marketing team shifted from execution to strategy, reclaiming 35+ hours per week.",
    metrics: [
      { value: "6", label: "AI Agents" },
      { value: "3\u00d7", label: "Faster Campaigns" },
      { value: "70+", label: "Data Models" },
      { value: "\u221e", label: "Scalable Output" },
    ],
    techStack: ["Next.js", "Supabase", "OpenAI", "Meta API", "Vercel"],
    testimonial: {
      quote:
        "AdPilot did not just automate our campaigns — it fundamentally changed how we think about marketing. Our team now focuses on strategy while the AI handles the execution at a scale we could never achieve manually.",
      author: "Jonathan Fai",
      role: "CMO, Pacific Commerce Group",
    },
    accentColor: "#3B82F6",
    image: "/images/portfolio/adpilot.jpg",
  },
  {
    slug: "marco",
    name: "Marco",
    tag: "AI Sales Intelligence",
    description:
      "An autonomous sales prospecting engine that harvests, enriches, scores, and validates business leads at scale — turning public data into qualified pipeline.",
    challenge:
      "A B2B consultancy was manually researching prospects, copying data between spreadsheets, and spending days qualifying leads that often turned out to be poor fits. Their sales team spent 70% of their time on research and only 30% on actual selling. They needed to invert that ratio.",
    solution:
      "We built Marco — an AI-powered prospecting engine that autonomously harvests company data from business registries, enriches each record with website analysis, contact discovery, and social presence via headless browser automation, then applies a multi-factor scoring algorithm (A-D grading) to prioritise outreach. The system processes asynchronously at scale using Playwright for web intelligence gathering and ChromaDB for semantic search across the enriched corpus. A validation layer ensures data quality before any outreach begins.",
    results:
      "The prospecting database grew to 15,905 indexed companies within weeks. Enrichment runs at 965 companies per hour — 4x faster than the previous manual process. Sales pipeline grew 4x in the first quarter. The sales team now spends 80% of their time selling to pre-qualified, scored leads.",
    metrics: [
      { value: "15,905", label: "Companies Indexed" },
      { value: "965/hr", label: "Enrichment Speed" },
      { value: "4\u00d7", label: "Pipeline Growth" },
      { value: "A-D", label: "Lead Scoring" },
    ],
    techStack: ["Python", "SQLite", "Playwright", "ChromaDB", "Ollama"],
    testimonial: {
      quote:
        "Marco turned our sales operation from guesswork into a precision instrument. We went from manually researching 20 companies a day to having thousands of scored, enriched leads ready for outreach.",
      author: "Ricardo Mendes",
      role: "Head of Sales, Iberian Growth Partners",
    },
    accentColor: "#06B6D4",
    image: "/images/portfolio/marco.jpg",
  },
  {
    slug: "the-selection",
    name: "The Selection",
    tag: "Premium Automotive",
    description:
      "A premium automotive marketplace that aggregates and curates vehicles from five European markets, delivering a white-glove car sourcing experience powered by intelligent scrapers and real-time data.",
    challenge:
      "Importing premium European cars into Portugal was a fragmented, opaque process. Buyers had to manually search across multiple country-specific platforms (AutoScout24, Mobile.de, Otomoto, Autovit, Coches.net), deal with language barriers, and navigate complex import regulations. There was no single platform that aggregated European inventory with a premium user experience.",
    solution:
      "We built The Selection — a curated automotive marketplace powered by five specialised web scrapers that continuously index premium vehicles across European markets. The platform features intelligent variant filtering (distinguishing ST from ST-Line, R from R-Line, M3 from M Sport), multi-market price comparison, and a concierge import service. Built as a lightweight HTML/CSS/JS frontend with Vercel serverless functions, the architecture maximises performance while staying within platform constraints. A CDP helper handles the most complex scraping targets.",
    results:
      "The platform indexes 1,235 car models across 107 brands from 5 European markets. Users find and compare premium vehicles in seconds instead of hours. The B2B Pro tier (Next.js SaaS) launched for professional importers. Zero platform fees for end consumers drove rapid adoption in the Portuguese market.",
    metrics: [
      { value: "1,235", label: "Car Models" },
      { value: "5", label: "EU Scrapers" },
      { value: "107", label: "Brands" },
      { value: "\u20ac0", label: "Platform Fee" },
    ],
    techStack: ["HTML/CSS/JS", "Vercel Serverless", "Puppeteer", "CDP"],
    testimonial: {
      quote:
        "The Selection made European car importing accessible. What used to take days of research across multiple sites now happens in a single, beautiful interface. It changed our business model entirely.",
      author: "Ana Ferreira",
      role: "Director, Atlantic Motors",
    },
    accentColor: "#8B5CF6",
    image: "/images/portfolio/theselection.jpg",
  },
] as const;
