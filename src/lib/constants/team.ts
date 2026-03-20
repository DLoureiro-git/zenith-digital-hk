export interface SocialLinks {
  linkedin?: string;
  twitter?: string;
  github?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  social: SocialLinks;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Diogo Loureiro",
    role: "Founder & Chief AI Architect",
    bio: "Serial entrepreneur with 15+ years in enterprise tech. Built 3 AI platforms from zero to production.",
    image: "/images/team/diogo.jpg",
    social: {
      linkedin: "https://linkedin.com/in/diogoloureiro",
      twitter: "https://x.com/diaboreiro",
    },
  },
  {
    name: "Dr. Mei Chen",
    role: "Head of AI Research",
    bio: "PhD in Machine Learning from HKU. Former research scientist at Tencent AI Lab.",
    image: "/images/team/mei.jpg",
    social: {
      linkedin: "https://linkedin.com/in/meichen-ai",
    },
  },
  {
    name: "James Ko",
    role: "Director of Engineering",
    bio: "12 years building distributed systems. Ex-Alibaba Cloud, scaled services to 100M+ users.",
    image: "/images/team/james.jpg",
    social: {
      linkedin: "https://linkedin.com/in/jamesko-eng",
    },
  },
  {
    name: "Sarah Tan",
    role: "Client Success Lead",
    bio: "MBA INSEAD. Bridges the gap between AI capability and business outcomes across APAC.",
    image: "/images/team/sarah.jpg",
    social: {
      linkedin: "https://linkedin.com/in/sarahtan-cs",
    },
  },
  {
    name: "Alex Wu",
    role: "Marketing AI Specialist",
    bio: "Former CMO turned AI builder. Pioneered autonomous campaign management systems.",
    image: "/images/team/alex.jpg",
    social: {
      linkedin: "https://linkedin.com/in/alexwu-marketing",
      twitter: "https://x.com/alexwu_ai",
    },
  },
  {
    name: "Priya Sharma",
    role: "Data Engineering Lead",
    bio: "Expert in real-time data pipelines, ETL, and ML infrastructure. Ex-Grab, ex-Shopee.",
    image: "/images/team/priya.jpg",
    social: {
      linkedin: "https://linkedin.com/in/priyasharma-data",
    },
  },
] as const;
