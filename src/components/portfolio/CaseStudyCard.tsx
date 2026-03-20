"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MetricsGrid } from "./MetricsGrid";
import { TechStack } from "./TechStack";

interface CaseStudyCardProps {
  name: string;
  tag: string;
  description: string;
  challenge: string;
  solution: string;
  results: string;
  metrics: { value: string; label: string }[];
  techStack: string[];
  testimonial: { quote: string; author: string; role: string };
  accentColor: string;
  image: string;
  index: number;
}

export function CaseStudyCard({
  name,
  tag,
  description,
  challenge,
  solution,
  results,
  metrics,
  techStack,
  testimonial,
  accentColor,
  image,
  index,
}: CaseStudyCardProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, x: isEven ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full"
    >
      <div
        className={`flex flex-col ${
          isEven ? "lg:flex-row" : "lg:flex-row-reverse"
        } gap-10 lg:gap-16 items-start`}
      >
        {/* ---- Image section ---- */}
        <div className="w-full lg:w-1/2 flex-shrink-0">
          <div className="relative aspect-video rounded-2xl overflow-hidden">
            <Image
              src={image}
              alt={`${name} case study`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            {/* Gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, ${accentColor}22 0%, transparent 60%)`,
              }}
            />
          </div>
        </div>

        {/* ---- Content section ---- */}
        <div className="w-full lg:w-1/2 space-y-6">
          {/* Tag badge */}
          <span
            className="inline-block rounded-full px-4 py-1 text-xs font-body font-medium text-text-secondary border"
            style={{ borderColor: `${accentColor}66` }}
          >
            {tag}
          </span>

          {/* Name */}
          <h3 className="font-display text-3xl md:text-4xl text-text-primary">
            {name}
          </h3>

          {/* Description */}
          <p className="font-body text-text-secondary leading-relaxed">
            {description}
          </p>

          {/* Challenge / Solution / Results */}
          <div className="space-y-5">
            <div>
              <h4 className="font-body text-sm uppercase tracking-widest text-accent-primary mb-2">
                Challenge
              </h4>
              <p className="font-body text-sm text-text-tertiary leading-relaxed">
                {challenge}
              </p>
            </div>

            <div>
              <h4 className="font-body text-sm uppercase tracking-widest text-accent-primary mb-2">
                Solution
              </h4>
              <p className="font-body text-sm text-text-tertiary leading-relaxed">
                {solution}
              </p>
            </div>

            <div>
              <h4 className="font-body text-sm uppercase tracking-widest text-accent-primary mb-2">
                Results
              </h4>
              <p className="font-body text-sm text-text-tertiary leading-relaxed">
                {results}
              </p>
            </div>
          </div>

          {/* Metrics */}
          <MetricsGrid metrics={metrics} accentColor={accentColor} />

          {/* Tech Stack */}
          <div>
            <h4 className="font-body text-xs uppercase tracking-widest text-text-tertiary mb-3">
              Tech Stack
            </h4>
            <TechStack stack={techStack} />
          </div>

          {/* Testimonial */}
          <blockquote
            className="glass rounded-xl p-5 border-l-2"
            style={{ borderLeftColor: accentColor }}
          >
            <p className="font-body text-sm text-text-secondary italic leading-relaxed">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <footer className="mt-3">
              <span className="font-body text-sm font-medium text-text-primary">
                {testimonial.author}
              </span>
              <span className="font-body text-xs text-text-tertiary block">
                {testimonial.role}
              </span>
            </footer>
          </blockquote>
        </div>
      </div>
    </motion.article>
  );
}
