"use client";

import { motion } from "framer-motion";

// ---------------------------------------------------------------------------
// Milestone data
// ---------------------------------------------------------------------------

interface Milestone {
  year: string;
  title: string;
  description: string;
}

const MILESTONES: Milestone[] = [
  {
    year: "2024 Q3",
    title: "Company Founded",
    description:
      "Zenith Digital HK established in Hong Kong Science Park.",
  },
  {
    year: "2024 Q4",
    title: "First Platform Launch",
    description:
      "The Selection goes live — premium automotive marketplace.",
  },
  {
    year: "2025 Q1",
    title: "AdPilot Beta",
    description:
      "AI marketing platform enters beta with first enterprise clients.",
  },
  {
    year: "2025 Q2",
    title: "Marco Launch",
    description:
      "Intelligent prospecting engine deployed for B2B sales teams.",
  },
  {
    year: "2025 Q3",
    title: "APAC Expansion",
    description:
      "Partnerships in Singapore, Tokyo, and Mumbai markets.",
  },
  {
    year: "2025 Q4",
    title: "Enterprise Ready",
    description:
      "AI Governance framework and compliance toolkit launched.",
  },
];

// ---------------------------------------------------------------------------
// Animation variants
// ---------------------------------------------------------------------------

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
} as const;

// ---------------------------------------------------------------------------
// Timeline
// ---------------------------------------------------------------------------

export function Timeline() {
  return (
    <div className="relative mx-auto max-w-4xl">
      {/* Vertical line — left on mobile, center on desktop */}
      <div className="absolute left-4 top-0 h-full w-px bg-border-medium md:left-1/2 md:-translate-x-px" />

      <div className="space-y-12 md:space-y-16">
        {MILESTONES.map((milestone, i) => {
          const isEven = i % 2 === 0;

          return (
            <motion.div
              key={milestone.year}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="relative flex items-start"
            >
              {/* ---- Mobile layout (always left-aligned) ---- */}
              <div className="md:hidden flex w-full pl-12">
                {/* Dot */}
                <div className="absolute left-2.5 top-1 h-3 w-3 rounded-full bg-accent-primary shadow-[0_0_12px_rgba(59,130,246,0.5)]" />

                <div>
                  <span className="font-body text-sm font-semibold text-accent-primary">
                    {milestone.year}
                  </span>
                  <h3 className="font-body text-lg font-semibold text-text-primary">
                    {milestone.title}
                  </h3>
                  <p className="mt-1 text-sm text-text-secondary">
                    {milestone.description}
                  </p>
                </div>
              </div>

              {/* ---- Desktop layout (alternating left/right) ---- */}
              <div className="hidden md:flex w-full items-start">
                {/* Left side content */}
                <div className="w-1/2 pr-12 text-right">
                  {isEven && (
                    <div>
                      <span className="font-body text-sm font-semibold text-accent-primary">
                        {milestone.year}
                      </span>
                      <h3 className="font-body text-lg font-semibold text-text-primary">
                        {milestone.title}
                      </h3>
                      <p className="mt-1 text-sm text-text-secondary">
                        {milestone.description}
                      </p>
                    </div>
                  )}
                </div>

                {/* Center dot */}
                <div className="absolute left-1/2 -translate-x-1/2 top-1 h-3 w-3 rounded-full bg-accent-primary shadow-[0_0_12px_rgba(59,130,246,0.5)]" />

                {/* Right side content */}
                <div className="w-1/2 pl-12">
                  {!isEven && (
                    <div>
                      <span className="font-body text-sm font-semibold text-accent-primary">
                        {milestone.year}
                      </span>
                      <h3 className="font-body text-lg font-semibold text-text-primary">
                        {milestone.title}
                      </h3>
                      <p className="mt-1 text-sm text-text-secondary">
                        {milestone.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
