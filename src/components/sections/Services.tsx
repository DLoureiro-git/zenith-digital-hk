"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import type { Service } from "@/lib/constants";

// ---------------------------------------------------------------------------
// Inline SVG icons (Lucide-style, 32px, stroke-only)
// ---------------------------------------------------------------------------

const ServiceIcon = ({ icon }: { icon: Service["icon"] }) => {
  const common = {
    width: 32,
    height: 32,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "text-accent-primary",
  };

  switch (icon) {
    case "brain-circuit":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="4" />
          <line x1="12" y1="2" x2="12" y2="8" />
          <line x1="20" y1="12" x2="16" y2="12" />
          <line x1="12" y1="16" x2="12" y2="22" />
          <line x1="4" y1="12" x2="8" y2="12" />
          <circle cx="12" cy="2" r="1" fill="currentColor" />
          <circle cx="20" cy="12" r="1" fill="currentColor" />
          <circle cx="12" cy="22" r="1" fill="currentColor" />
        </svg>
      );
    case "workflow":
      return (
        <svg {...common}>
          <rect x="2" y="4" width="6" height="4" rx="1" />
          <rect x="9" y="10" width="6" height="4" rx="1" />
          <rect x="16" y="16" width="6" height="4" rx="1" />
          <line x1="5" y1="8" x2="12" y2="10" />
          <line x1="12" y1="14" x2="19" y2="16" />
        </svg>
      );
    case "database-zap":
      return (
        <svg {...common}>
          <ellipse cx="12" cy="5" rx="8" ry="3" />
          <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
          <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
          <path d="M13 17l2-4h-3l2-4" strokeWidth={2} />
        </svg>
      );
    case "bar-chart-3":
      return (
        <svg {...common}>
          <rect x="4" y="14" width="4" height="7" rx="0.5" />
          <rect x="10" y="9" width="4" height="12" rx="0.5" />
          <rect x="16" y="4" width="4" height="17" rx="0.5" />
          <line x1="2" y1="21" x2="22" y2="21" />
        </svg>
      );
    case "users-round":
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3.5" />
          <path d="M2 20c0-3.31 3.13-6 7-6s7 2.69 7 6" />
          <circle cx="17" cy="9" r="2.5" />
          <path d="M22 20c0-2.21-1.79-4-4-4-.82 0-1.58.25-2.21.67" />
        </svg>
      );
    default:
      return null;
  }
};

// ---------------------------------------------------------------------------
// Animation variants
// ---------------------------------------------------------------------------

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function Services() {
  return (
    <section id="services" className="bg-bg-primary py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-accent-primary font-body">
            What We Do
          </p>
          <h2 className="mb-6 font-display text-3xl font-semibold text-text-primary md:text-5xl whitespace-pre-line">
            {"AI built for\nenterprise reality."}
          </h2>
          <p className="mx-auto max-w-2xl font-body text-lg text-text-secondary">
            We don&apos;t experiment. We deploy intelligence that runs in
            production, integrates with your stack, and moves your business.
          </p>
        </motion.div>

        {/* Card grid — 3 cols first row, 2 cols centered second row */}
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.number}
              variants={cardVariants}
              className={`rounded-xl border border-border-subtle bg-bg-secondary p-8 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong ${
                i >= 3 ? "md:col-span-1 lg:col-start-auto" : ""
              }`}
              style={
                i === 3
                  ? { gridColumn: undefined }
                  : undefined
              }
            >
              <span className="mb-4 block font-body text-sm font-semibold text-accent-primary">
                {service.number}
              </span>
              <div className="mb-4">
                <ServiceIcon icon={service.icon} />
              </div>
              <h3 className="mb-3 font-body text-xl font-semibold text-text-primary">
                {service.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-text-secondary">
                {service.body}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Centered last 2 cards on large screens using a second row wrapper */}
      </div>
    </section>
  );
}
