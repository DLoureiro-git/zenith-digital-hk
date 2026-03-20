"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { TeamMember } from "@/lib/constants/team";

// ---------------------------------------------------------------------------
// Animation variants
// ---------------------------------------------------------------------------

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
} as const;

// ---------------------------------------------------------------------------
// Social icons (16px, stroke-only)
// ---------------------------------------------------------------------------

function LinkedInIcon() {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4l11.733 16h4.267l-11.733-16z" />
      <path d="M4 20l6.768-6.768" />
      <path d="M20 4l-6.768 6.768" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// TeamGrid
// ---------------------------------------------------------------------------

interface TeamGridProps {
  members: TeamMember[];
}

export function TeamGrid({ members }: TeamGridProps) {
  return (
    <motion.div
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      {members.map((member) => (
        <motion.div
          key={member.name}
          variants={cardVariants}
          className="glass rounded-2xl p-6 text-center transition-all duration-500 hover:border-border-glow hover:shadow-[0_0_40px_rgba(59,130,246,0.08)]"
        >
          {/* Avatar */}
          <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full ring-2 ring-accent-primary/30 ring-offset-2 ring-offset-bg-secondary">
            <Image
              src={member.image}
              alt={member.name}
              width={96}
              height={96}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Name */}
          <h3 className="font-body text-lg font-semibold text-text-primary">
            {member.name}
          </h3>

          {/* Role */}
          <p className="text-sm text-accent-primary">{member.role}</p>

          {/* Bio */}
          <p className="mt-2 text-sm text-text-secondary">{member.bio}</p>

          {/* Social links */}
          {(member.social.linkedin || member.social.twitter) && (
            <div className="mt-4 flex items-center justify-center gap-3">
              {member.social.linkedin && (
                <a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on LinkedIn`}
                  className="text-text-tertiary transition-colors duration-300 hover:text-accent-primary"
                >
                  <LinkedInIcon />
                </a>
              )}
              {member.social.twitter && (
                <a
                  href={member.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on X`}
                  className="text-text-tertiary transition-colors duration-300 hover:text-accent-primary"
                >
                  <TwitterIcon />
                </a>
              )}
            </div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}
