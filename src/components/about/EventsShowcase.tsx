"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Event, EventRole } from "@/lib/constants/events";

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
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
} as const;

// ---------------------------------------------------------------------------
// Role badge color map
// ---------------------------------------------------------------------------

const ROLE_COLORS: Record<EventRole, string> = {
  Speaker: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Exhibitor: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  Panelist: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  Attendee: "bg-gray-500/20 text-gray-400 border-gray-500/30",
};

// ---------------------------------------------------------------------------
// EventsShowcase
// ---------------------------------------------------------------------------

interface EventsShowcaseProps {
  events: Event[];
}

export function EventsShowcase({ events }: EventsShowcaseProps) {
  return (
    <>
      {/* Desktop: 4-column, 2-row grid */}
      <motion.div
        className="hidden md:grid md:grid-cols-4 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {events.map((event) => (
          <EventCard key={event.name} event={event} />
        ))}
      </motion.div>

      {/* Mobile: horizontal scroll */}
      <motion.div
        className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide md:hidden"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
      >
        {events.map((event) => (
          <div key={event.name} className="min-w-[280px] snap-start">
            <EventCard event={event} />
          </div>
        ))}
      </motion.div>
    </>
  );
}

// ---------------------------------------------------------------------------
// Event card
// ---------------------------------------------------------------------------

function EventCard({ event }: { event: Event }) {
  return (
    <motion.div
      variants={cardVariants}
      className="group relative aspect-[16/10] overflow-hidden rounded-xl"
    >
      {/* Background image */}
      <Image
        src={event.image}
        alt={event.name}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-4">
        {/* Role badge */}
        <span
          className={`mb-2 inline-flex w-fit items-center rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${ROLE_COLORS[event.role]}`}
        >
          {event.role}
        </span>

        {/* Event name */}
        <h3 className="font-body text-sm font-semibold text-white leading-tight">
          {event.name}
        </h3>

        {/* Date & location */}
        <p className="mt-1 text-xs text-white/60">
          {event.date} &middot; {event.location}
        </p>
      </div>
    </motion.div>
  );
}
