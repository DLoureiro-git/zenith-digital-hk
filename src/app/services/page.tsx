import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { SERVICES_DETAIL } from "@/lib/constants/services";
import { createMetadata } from "@/lib/utils/metadata";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Services",
  description:
    "From AI strategy to agentic systems, LLM integration, marketing intelligence, training, and governance — enterprise AI services built for production.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <PageHero
        tag="What We Do"
        title="AI built for enterprise reality."
        subtitle="We deploy intelligence that runs in production, integrates with your stack, and moves your business forward across every vertical."
      />

      <Section>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES_DETAIL.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative rounded-2xl border border-border-medium bg-bg-card p-8 backdrop-blur-sm transition-all duration-500 hover:border-border-glow hover:shadow-[0_0_40px_rgba(59,130,246,0.08)] hover:-translate-y-1"
            >
              {/* Gradient border on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 border-gradient" />

              {/* Number */}
              <span className="mb-4 block font-body text-[11px] font-semibold tracking-widest text-accent-primary/60">
                {service.number}
              </span>

              {/* Icon placeholder — accent circle */}
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-primary/10">
                <div className="h-5 w-5 rounded-full bg-accent-primary/60" />
              </div>

              {/* Title */}
              <h3 className="mb-3 font-body text-xl font-semibold text-text-primary">
                {service.title}
              </h3>

              {/* Body */}
              <p className="mb-6 font-body text-sm leading-relaxed text-text-secondary">
                {service.body}
              </p>

              {/* Learn more arrow */}
              <span className="inline-flex items-center gap-1 font-body text-sm font-medium text-accent-primary transition-transform duration-300 group-hover:translate-x-1">
                Learn more
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Footer />
    </>
  );
}
