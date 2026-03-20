export type EventRole = "Speaker" | "Exhibitor" | "Panelist" | "Attendee";

export interface Event {
  name: string;
  role: EventRole;
  topic: string;
  date: string;
  location: string;
  image: string;
}

export const EVENTS: Event[] = [
  {
    name: "GITEX Global Dubai 2025",
    role: "Speaker",
    topic: "AI Agents in Enterprise: From Pilot to Production",
    date: "October 2025",
    location: "Dubai, UAE",
    image: "/images/events/gitex-global-dubai-2025.jpg",
  },
  {
    name: "World AI Expo Dubai 2025",
    role: "Exhibitor",
    topic: "Showcasing AdPilot & Marco platforms",
    date: "May 2025",
    location: "Dubai, UAE",
    image: "/images/events/world-ai-expo-dubai-2025.jpg",
  },
  {
    name: "Web Summit Lisbon 2024",
    role: "Attendee",
    topic: "Networking with European AI ecosystem",
    date: "November 2024",
    location: "Lisbon, Portugal",
    image: "/images/events/web-summit-lisbon-2024.jpg",
  },
  {
    name: "CES Las Vegas 2025",
    role: "Exhibitor",
    topic: "AI-powered marketing intelligence demo",
    date: "January 2025",
    location: "Las Vegas, USA",
    image: "/images/events/ces-las-vegas-2025.jpg",
  },
  {
    name: "RISE Hong Kong 2024",
    role: "Panelist",
    topic: "The Future of Agentic AI in Asia",
    date: "September 2024",
    location: "Hong Kong",
    image: "/images/events/rise-hong-kong-2024.jpg",
  },
  {
    name: "AI Summit Singapore 2025",
    role: "Speaker",
    topic: "Building Multi-Agent Systems That Actually Work",
    date: "June 2025",
    location: "Singapore",
    image: "/images/events/ai-summit-singapore-2025.jpg",
  },
  {
    name: "Step Conference Dubai 2025",
    role: "Speaker",
    topic: "From Zero to AI Agency: A Founder's Journey",
    date: "February 2025",
    location: "Dubai, UAE",
    image: "/images/events/step-conference-dubai-2025.jpg",
  },
  {
    name: "Hong Kong FinTech Week 2024",
    role: "Exhibitor",
    topic: "AI compliance solutions for financial services",
    date: "October 2024",
    location: "Hong Kong",
    image: "/images/events/hong-kong-fintech-week-2024.jpg",
  },
] as const;
