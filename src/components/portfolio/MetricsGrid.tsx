"use client";

import { motion } from "framer-motion";

interface MetricsGridProps {
  metrics: { value: string; label: string }[];
  accentColor: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export function MetricsGrid({ metrics, accentColor }: MetricsGridProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric, i) => (
        <motion.div
          key={metric.label}
          className="glass rounded-xl p-4 text-center"
          style={{ borderTop: `2px solid ${accentColor}` }}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          custom={i}
        >
          <span className="block font-display text-2xl md:text-3xl text-text-primary">
            {metric.value}
          </span>
          <span className="block mt-1 text-xs font-body text-text-secondary">
            {metric.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
