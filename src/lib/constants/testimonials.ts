export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  image?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Zenith didn't just deploy AI — they transformed how our entire marketing operation thinks.",
    author: "David Chen",
    role: "CEO",
    company: "Pacific Retail Group",
    location: "Hong Kong",
    image: "/images/testimonials/david-chen.jpg",
  },
  {
    quote:
      "The agentic systems they built process in hours what used to take our team weeks.",
    author: "Lisa Wong",
    role: "COO",
    company: "Meridian Logistics",
    location: "Singapore",
    image: "/images/testimonials/lisa-wong.jpg",
  },
  {
    quote:
      "Finally, an AI consultancy that understands Asian markets. Their local expertise is unmatched.",
    author: "Raj Patel",
    role: "CTO",
    company: "NovaPay Financial",
    location: "Mumbai",
    image: "/images/testimonials/raj-patel.jpg",
  },
  {
    quote:
      "AdPilot gave us a 3\u00d7 improvement in campaign velocity. The ROI was immediate.",
    author: "Michael Tanaka",
    role: "VP Marketing",
    company: "Sakura Commerce",
    location: "Tokyo",
    image: "/images/testimonials/michael-tanaka.jpg",
  },
  {
    quote:
      "Their AI governance framework helped us achieve full PDPA compliance ahead of schedule.",
    author: "Sophia Lim",
    role: "Head of Compliance",
    company: "AsiaSecure",
    location: "Bangkok",
    image: "/images/testimonials/sophia-lim.jpg",
  },
  {
    quote:
      "From strategy to production in 8 weeks. Zenith's speed of execution is remarkable.",
    author: "Thomas Nguyen",
    role: "Founder",
    company: "VietTech Solutions",
    location: "Ho Chi Minh City",
    image: "/images/testimonials/thomas-nguyen.jpg",
  },
] as const;
