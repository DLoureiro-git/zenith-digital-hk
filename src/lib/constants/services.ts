export interface ProcessStep {
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface PricingTier {
  name: string;
  description: string;
}

export interface ServiceDetail {
  slug: string;
  number: string;
  icon: string;
  title: string;
  body: string;
  longDescription: string;
  process: ProcessStep[];
  deliverables: string[];
  faq: FAQ[];
  pricing: PricingTier[];
}

export const SERVICES_DETAIL: ServiceDetail[] = [
  {
    slug: "ai-strategy",
    number: "01",
    icon: "brain-circuit",
    title: "AI Strategy & Roadmapping",
    body: "From executive vision to technical architecture — we design AI adoption programmes that create compounding advantage, not one-off pilots.",
    longDescription:
      "Every enterprise AI journey begins with clarity. We work directly with leadership teams to assess your organisation's AI readiness, identify the highest-impact opportunities, and build a phased roadmap that balances quick wins with long-term transformation.\n\nOur approach is grounded in operational reality, not hype. We audit existing data infrastructure, evaluate vendor ecosystems, and map AI capabilities to specific business outcomes — revenue growth, cost reduction, or competitive moat. The result is a strategy document your board can trust and your engineering team can execute.\n\nWhether you are a Fortune 500 exploring generative AI or a scale-up looking to embed intelligence into your core product, our roadmaps give you a clear path from where you are to where AI can take you.",
    process: [
      {
        title: "Discovery & Assessment",
        description:
          "Deep-dive into your business model, data assets, current tech stack, and organisational readiness for AI adoption.",
      },
      {
        title: "Opportunity Mapping",
        description:
          "Identify and prioritise AI use cases by impact, feasibility, and strategic alignment — scored against your KPIs.",
      },
      {
        title: "Architecture Design",
        description:
          "Blueprint the technical architecture, data pipelines, model selection, and integration points required for each initiative.",
      },
      {
        title: "Roadmap & Governance",
        description:
          "Deliver a phased implementation roadmap with milestones, resource plans, risk mitigation, and governance frameworks.",
      },
      {
        title: "Executive Alignment",
        description:
          "Present findings and recommendations to leadership with clear ROI projections and decision frameworks.",
      },
    ],
    deliverables: [
      "AI Readiness Assessment Report",
      "Prioritised Use Case Portfolio",
      "Technical Architecture Blueprint",
      "12-Month Implementation Roadmap",
      "Executive Summary & ROI Projections",
      "Vendor & Tool Evaluation Matrix",
    ],
    faq: [
      {
        question: "How long does a typical strategy engagement take?",
        answer:
          "Most engagements run 4-8 weeks depending on organisation size and complexity. We can accelerate to 2 weeks for focused assessments.",
      },
      {
        question: "Do we need existing AI capabilities to start?",
        answer:
          "Not at all. Our strategy engagements are designed for organisations at any stage — from AI-curious to those looking to scale existing initiatives.",
      },
      {
        question: "What industries do you specialise in?",
        answer:
          "We have deep expertise in financial services, retail, logistics, and professional services across APAC, though our frameworks are industry-agnostic.",
      },
      {
        question: "Can you help us secure budget for AI initiatives?",
        answer:
          "Yes. Our deliverables include ROI models and executive presentations specifically designed to support internal budget approval processes.",
      },
    ],
    pricing: [
      {
        name: "Essentials",
        description:
          "AI readiness assessment and high-level roadmap for teams exploring their first AI initiatives. Contact us for a tailored quote.",
      },
      {
        name: "Professional",
        description:
          "Full strategy engagement with architecture design, use case prioritisation, and 12-month roadmap. Contact us for a tailored quote.",
      },
      {
        name: "Enterprise",
        description:
          "Comprehensive transformation programme with ongoing advisory, governance setup, and quarterly roadmap reviews. Contact us for a tailored quote.",
      },
    ],
  },
  {
    slug: "agentic-systems",
    number: "02",
    icon: "workflow",
    title: "Agentic System Design",
    body: "We build multi-agent pipelines that automate complex commercial workflows, reducing operational overhead and accelerating throughput.",
    longDescription:
      "Agentic AI represents a paradigm shift from tools that respond to tools that act. We design and deploy multi-agent systems where specialised AI agents collaborate autonomously to execute complex business workflows — from lead qualification to content production to compliance monitoring.\n\nOur agent architectures follow battle-tested patterns: hierarchical orchestration, tool-use protocols, memory systems, and human-in-the-loop checkpoints. Every system is built with observability, guardrails, and graceful degradation as first-class concerns.\n\nWe have shipped production agentic systems that manage marketing campaigns, prospect and qualify sales leads, and orchestrate entire content pipelines — all running 24/7 with minimal human oversight. This is not demo-ware; these are systems handling real commercial operations at scale.",
    process: [
      {
        title: "Workflow Analysis",
        description:
          "Map your current business processes to identify automation candidates, decision points, and human-in-the-loop requirements.",
      },
      {
        title: "Agent Architecture",
        description:
          "Design the multi-agent topology — defining agent roles, communication protocols, tool access, and orchestration patterns.",
      },
      {
        title: "Build & Integrate",
        description:
          "Develop agents with appropriate LLM backends, tool integrations, memory systems, and connect to your existing infrastructure.",
      },
      {
        title: "Testing & Guardrails",
        description:
          "Rigorous testing including adversarial scenarios, edge cases, and implementation of safety guardrails and kill switches.",
      },
      {
        title: "Deploy & Monitor",
        description:
          "Production deployment with full observability dashboards, alerting, and ongoing performance optimisation.",
      },
    ],
    deliverables: [
      "Agent Architecture Documentation",
      "Production-Ready Agent System",
      "Observability & Monitoring Dashboard",
      "Guardrail & Safety Framework",
      "Operations Runbook",
    ],
    faq: [
      {
        question: "What LLM providers do you work with?",
        answer:
          "We are provider-agnostic and work with OpenAI, Anthropic, Google, Mistral, and open-source models via Ollama. We select the best model for each agent's specific task.",
      },
      {
        question: "How do you handle agent errors and hallucinations?",
        answer:
          "Every agent system includes structured output validation, confidence thresholds, fallback paths, and human escalation triggers. We design for failure from day one.",
      },
      {
        question: "Can agents integrate with our existing tools?",
        answer:
          "Yes. We build custom tool integrations for CRMs, ERPs, databases, APIs, and internal systems. If it has an API, an agent can use it.",
      },
    ],
    pricing: [
      {
        name: "Pilot",
        description:
          "Single-agent automation for one defined workflow. Ideal for proving the concept within your organisation. Contact us for a tailored quote.",
      },
      {
        name: "Multi-Agent",
        description:
          "Full multi-agent system with orchestration, tool integrations, and production deployment. Contact us for a tailored quote.",
      },
      {
        name: "Platform",
        description:
          "Enterprise agent platform with custom agent builder, monitoring suite, and dedicated support. Contact us for a tailored quote.",
      },
    ],
  },
  {
    slug: "llm-integration",
    number: "03",
    icon: "database-zap",
    title: "LLM Integration & Fine-Tuning",
    body: "Custom model deployment, RAG architecture, and domain fine-tuning — AI that knows your business, not just the internet.",
    longDescription:
      "Off-the-shelf LLMs are powerful but generic. We specialise in making large language models deeply understand your domain — your terminology, your processes, your data. Through retrieval-augmented generation (RAG), fine-tuning, and custom model pipelines, we turn general-purpose AI into a specialist that speaks your language.\n\nOur RAG implementations go beyond naive vector search. We build hybrid retrieval systems with semantic chunking, metadata filtering, re-ranking, and citation tracking — ensuring your AI gives accurate, traceable answers grounded in your proprietary knowledge base.\n\nFor organisations with unique domain requirements, we offer supervised fine-tuning on your data, creating models that outperform general-purpose alternatives on your specific tasks while maintaining cost efficiency and low latency in production.",
    process: [
      {
        title: "Data Audit & Preparation",
        description:
          "Evaluate your knowledge base, documents, and data assets. Clean, chunk, and structure content for optimal retrieval or training.",
      },
      {
        title: "Architecture Selection",
        description:
          "Choose the right approach — RAG, fine-tuning, or hybrid — based on your use case, data volume, latency requirements, and budget.",
      },
      {
        title: "Implementation",
        description:
          "Build the retrieval pipeline, embedding infrastructure, vector store, and LLM integration with your application layer.",
      },
      {
        title: "Evaluation & Tuning",
        description:
          "Systematic evaluation against ground-truth datasets, with iterative tuning of retrieval parameters, prompts, and model configuration.",
      },
    ],
    deliverables: [
      "Knowledge Base Pipeline",
      "RAG System with Citation Tracking",
      "Fine-Tuned Domain Model (if applicable)",
      "Evaluation Report & Benchmarks",
      "API Integration Layer",
      "Maintenance & Update Procedures",
    ],
    faq: [
      {
        question: "RAG vs fine-tuning — which do we need?",
        answer:
          "RAG is best when your knowledge changes frequently and you need traceable citations. Fine-tuning excels for consistent style, domain terminology, or specific output formats. We often recommend a hybrid approach.",
      },
      {
        question: "How do you handle sensitive or confidential data?",
        answer:
          "We can deploy entirely on-premises or within your cloud VPC. For fine-tuning, data never leaves your infrastructure. We follow strict data handling protocols aligned with APAC privacy regulations.",
      },
      {
        question: "What vector databases do you work with?",
        answer:
          "We have production experience with Pinecone, Weaviate, ChromaDB, Qdrant, and pgvector. Selection depends on your scale, hosting preferences, and existing infrastructure.",
      },
    ],
    pricing: [
      {
        name: "RAG Starter",
        description:
          "Standard RAG implementation with vector search over your document corpus. Contact us for a tailored quote.",
      },
      {
        name: "Advanced RAG",
        description:
          "Hybrid retrieval with re-ranking, metadata filtering, and multi-source knowledge integration. Contact us for a tailored quote.",
      },
      {
        name: "Custom Model",
        description:
          "Full fine-tuning pipeline with evaluation framework, deployment infrastructure, and ongoing model management. Contact us for a tailored quote.",
      },
    ],
  },
  {
    slug: "marketing-intelligence",
    number: "04",
    icon: "bar-chart-3",
    title: "AI-Powered Marketing Intelligence",
    body: "We transform marketing operations with autonomous campaign management, predictive analytics, and content at scale.",
    longDescription:
      "Marketing teams are drowning in channels, data, and creative demands. We build AI systems that autonomously manage campaigns, generate content, optimise spend, and surface insights — turning your marketing operation from reactive to predictive.\n\nOur flagship platform, AdPilot, powers this service with six specialised AI agents handling everything from audience segmentation to creative generation to performance analysis. But we also build custom marketing intelligence solutions tailored to your specific channels, audiences, and business model.\n\nFrom AI-generated ad copy that outperforms human baselines to predictive budget allocation that maximises ROAS, we bring genuine artificial intelligence to every stage of the marketing funnel. Not buzzwords — measurable results.",
    process: [
      {
        title: "Marketing Audit",
        description:
          "Analyse your current marketing stack, channels, creative workflow, and performance data to identify AI-ready opportunities.",
      },
      {
        title: "Solution Design",
        description:
          "Design the AI marketing architecture — which agents handle which tasks, integration with ad platforms, and approval workflows.",
      },
      {
        title: "Platform Build",
        description:
          "Develop and integrate AI agents for content generation, campaign management, audience analysis, and performance optimisation.",
      },
      {
        title: "Launch & Optimise",
        description:
          "Go live with supervised autonomy, gradually increasing agent independence as confidence and performance benchmarks are met.",
      },
    ],
    deliverables: [
      "Marketing AI Platform (custom or AdPilot deployment)",
      "Campaign Automation Agents",
      "Content Generation Pipeline",
      "Performance Analytics Dashboard",
      "Marketing Team Training Programme",
    ],
    faq: [
      {
        question: "Does this replace our marketing team?",
        answer:
          "No. It amplifies them. AI handles the repetitive, data-heavy work — your team focuses on strategy, creativity, and brand. Most clients see their teams become 3-5x more productive.",
      },
      {
        question: "Which ad platforms do you integrate with?",
        answer:
          "We have native integrations with Meta Ads, Google Ads, TikTok Ads, and LinkedIn Campaign Manager. Custom integrations for other platforms are available.",
      },
      {
        question: "How quickly can we see results?",
        answer:
          "Most clients see measurable improvements within the first 30 days. Full platform deployment typically takes 6-10 weeks from kickoff to production.",
      },
      {
        question: "Can the AI generate creative assets?",
        answer:
          "Yes. Our systems generate ad copy, email sequences, social content, and can direct AI image generation — all aligned with your brand guidelines and tone of voice.",
      },
    ],
    pricing: [
      {
        name: "Starter",
        description:
          "AI-powered analytics and content suggestions for a single channel. Contact us for a tailored quote.",
      },
      {
        name: "Growth",
        description:
          "Multi-channel campaign automation with AI agents for content, targeting, and optimisation. Contact us for a tailored quote.",
      },
      {
        name: "Enterprise",
        description:
          "Full marketing intelligence platform with custom agents, dedicated support, and white-label options. Contact us for a tailored quote.",
      },
    ],
  },
  {
    slug: "enterprise-training",
    number: "05",
    icon: "users-round",
    title: "Enterprise AI Training",
    body: "Practical, hands-on programmes that build AI fluency across your teams — from C-suite to operations.",
    longDescription:
      "The biggest bottleneck in AI adoption is not technology — it is people. We deliver immersive, hands-on training programmes that transform how your organisation thinks about and works with AI. No slides-only workshops; participants build real AI solutions during our sessions.\n\nOur curriculum spans three levels: executive programmes for strategic AI literacy, manager workshops for identifying and scoping AI opportunities, and practitioner boot camps for technical teams building with LLMs, agents, and automation. Every programme is customised to your industry and internal use cases.\n\nWe have trained teams across financial services, logistics, retail, and professional services — and the most common feedback is that our programmes are the inflection point where AI went from abstract concept to practical daily tool.",
    process: [
      {
        title: "Needs Assessment",
        description:
          "Evaluate current AI literacy levels, identify skill gaps, and define learning objectives aligned with your AI strategy.",
      },
      {
        title: "Curriculum Design",
        description:
          "Build a custom training programme with modules, exercises, and case studies relevant to your industry and internal use cases.",
      },
      {
        title: "Delivery",
        description:
          "Facilitate workshops and boot camps — in person or remote — with hands-on labs, real-world projects, and expert instruction.",
      },
      {
        title: "Assessment & Certification",
        description:
          "Evaluate participant progress, provide individual feedback, and issue completion certifications for your records.",
      },
      {
        title: "Ongoing Support",
        description:
          "Post-programme office hours, resource library access, and quarterly refresher sessions to maintain momentum.",
      },
    ],
    deliverables: [
      "Custom Training Curriculum",
      "Workshop Materials & Lab Guides",
      "Hands-On Project Templates",
      "Participant Assessment Reports",
      "AI Resource Library Access",
    ],
    faq: [
      {
        question: "What formats are available?",
        answer:
          "We offer 1-day executive workshops, 3-day manager intensives, and 2-week practitioner boot camps. All available in-person (Hong Kong, Singapore, Dubai) or remote.",
      },
      {
        question: "Do participants need technical backgrounds?",
        answer:
          "No. Our executive and manager tracks are designed for non-technical leaders. Practitioner tracks assume basic programming knowledge but we provide pre-work to level-set.",
      },
      {
        question: "Can you train our internal AI champions?",
        answer:
          "Absolutely. Our train-the-trainer programme equips internal champions to continue AI education after our engagement ends, creating self-sustaining AI literacy.",
      },
    ],
    pricing: [
      {
        name: "Workshop",
        description:
          "Single-day executive or team workshop for up to 25 participants. Contact us for a tailored quote.",
      },
      {
        name: "Programme",
        description:
          "Multi-day intensive training with hands-on labs, custom curriculum, and assessment. Contact us for a tailored quote.",
      },
      {
        name: "Academy",
        description:
          "Ongoing training partnership with quarterly sessions, train-the-trainer, and continuous curriculum updates. Contact us for a tailored quote.",
      },
    ],
  },
  {
    slug: "ai-governance",
    number: "06",
    icon: "shield-check",
    title: "AI Governance & Compliance",
    body: "Enterprise-grade frameworks for responsible AI deployment — risk assessment, audit trails, and regulatory alignment across APAC jurisdictions.",
    longDescription:
      "As AI systems take on more decision-making authority, governance is no longer optional — it is a board-level imperative. We help organisations build comprehensive AI governance frameworks that satisfy regulators, protect customers, and enable innovation without reckless risk.\n\nOur governance practice covers the full spectrum: risk assessment frameworks, bias detection and mitigation, model documentation standards, audit trail infrastructure, and regulatory compliance mapping across APAC jurisdictions including Hong Kong, Singapore, Japan, and mainland China.\n\nWe stay ahead of the rapidly evolving regulatory landscape — from the EU AI Act's extraterritorial reach to Singapore's Model AI Governance Framework to Hong Kong's ethical AI principles. Our clients do not just comply; they lead their industries in responsible AI deployment.",
    process: [
      {
        title: "Risk Assessment",
        description:
          "Comprehensive audit of your AI systems, data practices, and decision-making processes against regulatory requirements and industry standards.",
      },
      {
        title: "Framework Design",
        description:
          "Build your AI governance framework — policies, procedures, roles, and review processes tailored to your risk profile and regulatory environment.",
      },
      {
        title: "Technical Implementation",
        description:
          "Deploy monitoring, audit trail, bias detection, and explainability tools integrated with your AI systems.",
      },
      {
        title: "Training & Rollout",
        description:
          "Train your teams on governance procedures, establish review boards, and operationalise the framework across the organisation.",
      },
    ],
    deliverables: [
      "AI Risk Assessment Report",
      "Governance Framework & Policy Documents",
      "Regulatory Compliance Mapping",
      "Bias Detection & Monitoring Tools",
      "Audit Trail Infrastructure",
      "Board-Ready Governance Dashboard",
    ],
    faq: [
      {
        question: "Which regulations do you cover?",
        answer:
          "We cover the EU AI Act, Singapore PDPA and Model AI Governance Framework, Hong Kong PCPD AI guidelines, Japan APPI, China's AI regulations, and more. We maintain a living regulatory tracker.",
      },
      {
        question: "Do we need governance if we only use third-party AI tools?",
        answer:
          "Yes. Using third-party AI tools like ChatGPT or Copilot still creates governance obligations around data privacy, output accuracy, and liability. Our frameworks cover both custom and third-party AI usage.",
      },
      {
        question: "How do you handle bias detection?",
        answer:
          "We implement statistical fairness metrics, demographic parity testing, and continuous monitoring. For high-stakes decisions, we add human review checkpoints and explainability layers.",
      },
      {
        question: "Can you help with AI insurance and liability?",
        answer:
          "We can advise on risk frameworks that support AI insurance underwriting and help structure liability provisions for AI-involved decisions. We partner with specialist legal firms for jurisdictional advice.",
      },
    ],
    pricing: [
      {
        name: "Assessment",
        description:
          "AI risk audit and compliance gap analysis with actionable recommendations. Contact us for a tailored quote.",
      },
      {
        name: "Framework",
        description:
          "Full governance framework design, policy documentation, and technical implementation. Contact us for a tailored quote.",
      },
      {
        name: "Managed Governance",
        description:
          "Ongoing governance partnership with quarterly audits, regulatory updates, and continuous monitoring. Contact us for a tailored quote.",
      },
    ],
  },
] as const;
