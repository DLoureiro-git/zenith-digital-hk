import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { SERVICES_DETAIL } from "@/lib/constants/services";
import { createMetadata } from "@/lib/utils/metadata";
import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";

/* -------------------------------------------------------------------------- */
/*  Static params — pre-render every service slug at build time               */
/* -------------------------------------------------------------------------- */

export function generateStaticParams() {
  return SERVICES_DETAIL.map((s) => ({ slug: s.slug }));
}

/* -------------------------------------------------------------------------- */
/*  Dynamic metadata per service                                              */
/* -------------------------------------------------------------------------- */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DETAIL.find((s) => s.slug === slug);
  if (!service) return {};
  return createMetadata({
    title: service.title,
    description: service.body,
    path: `/services/${slug}`,
  });
}

/* -------------------------------------------------------------------------- */
/*  Page component                                                            */
/* -------------------------------------------------------------------------- */

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES_DETAIL.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <Navbar />

      {/* ------------------------------------------------------------------ */}
      {/*  Hero                                                               */}
      {/* ------------------------------------------------------------------ */}
      <PageHero
        tag={`Service ${service.number}`}
        title={service.title}
        subtitle={service.body}
      />

      {/* ------------------------------------------------------------------ */}
      {/*  Overview — long description + service image                        */}
      {/* ------------------------------------------------------------------ */}
      <Section>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          {/* Text */}
          <div>
            <h2 className="mb-6 font-display text-2xl font-semibold text-text-primary md:text-3xl">
              Overview
            </h2>
            <div className="space-y-4 font-body text-base leading-relaxed text-text-secondary">
              {service.longDescription.split("\n\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border-medium bg-bg-card">
            <Image
              src={`/images/services/${service.slug}.jpg`}
              alt={service.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/*  Process — numbered steps on dark background                        */}
      {/* ------------------------------------------------------------------ */}
      <Section dark>
        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-accent-primary/40" />
            <span className="text-xs uppercase tracking-[0.2em] text-accent-primary font-body">
              Our Process
            </span>
            <span className="h-px w-8 bg-accent-primary/40" />
          </div>
          <h2 className="font-display text-2xl font-semibold text-text-primary md:text-4xl">
            How we deliver results.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {service.process.map((step, i) => (
            <div
              key={step.title}
              className="group relative rounded-2xl border border-border-medium bg-bg-card p-8 backdrop-blur-sm transition-all duration-500 hover:border-border-glow hover:shadow-[0_0_40px_rgba(59,130,246,0.08)]"
            >
              {/* Gradient border on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 border-gradient" />

              {/* Step number */}
              <span className="mb-4 block font-body text-3xl font-bold text-accent-primary/20">
                {String(i + 1).padStart(2, "0")}
              </span>

              <h3 className="mb-3 font-body text-lg font-semibold text-text-primary">
                {step.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-text-secondary">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/*  Deliverables — checklist in 2-column grid                          */}
      {/* ------------------------------------------------------------------ */}
      <Section>
        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-accent-primary/40" />
            <span className="text-xs uppercase tracking-[0.2em] text-accent-primary font-body">
              Deliverables
            </span>
            <span className="h-px w-8 bg-accent-primary/40" />
          </div>
          <h2 className="font-display text-2xl font-semibold text-text-primary md:text-4xl">
            What you receive.
          </h2>
        </div>

        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 md:grid-cols-2">
          {service.deliverables.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-xl border border-border-medium bg-bg-card p-5 transition-colors duration-300 hover:border-border-glow"
            >
              {/* Check icon */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mt-0.5 shrink-0 text-accent-primary"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span className="font-body text-sm text-text-primary">
                {item}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/*  FAQ — static accordion (all open, no JS)                           */}
      {/* ------------------------------------------------------------------ */}
      <Section dark>
        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-accent-primary/40" />
            <span className="text-xs uppercase tracking-[0.2em] text-accent-primary font-body">
              FAQ
            </span>
            <span className="h-px w-8 bg-accent-primary/40" />
          </div>
          <h2 className="font-display text-2xl font-semibold text-text-primary md:text-4xl">
            Common questions.
          </h2>
        </div>

        <div className="mx-auto max-w-3xl space-y-6">
          {service.faq.map((item) => (
            <div
              key={item.question}
              className="rounded-xl border border-border-medium bg-bg-card p-6 transition-colors duration-300 hover:border-border-glow"
            >
              <h3 className="mb-3 font-body text-base font-semibold text-text-primary">
                {item.question}
              </h3>
              <p className="font-body text-sm leading-relaxed text-text-secondary">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/*  Pricing tiers                                                      */}
      {/* ------------------------------------------------------------------ */}
      <Section>
        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-accent-primary/40" />
            <span className="text-xs uppercase tracking-[0.2em] text-accent-primary font-body">
              Pricing
            </span>
            <span className="h-px w-8 bg-accent-primary/40" />
          </div>
          <h2 className="font-display text-2xl font-semibold text-text-primary md:text-4xl">
            Engagement options.
          </h2>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {service.pricing.map((tier, i) => (
            <div
              key={tier.name}
              className={`group relative rounded-2xl border p-8 backdrop-blur-sm transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.08)] hover:-translate-y-1 ${
                i === 1
                  ? "border-border-glow bg-bg-card glow-blue"
                  : "border-border-medium bg-bg-card hover:border-border-glow"
              }`}
            >
              {/* Gradient border on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 border-gradient" />

              {/* Tier name */}
              <span className="mb-2 block font-body text-xs font-semibold uppercase tracking-widest text-accent-primary">
                {tier.name}
              </span>

              {/* Description */}
              <p className="font-body text-sm leading-relaxed text-text-secondary">
                {tier.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/*  CTA band                                                           */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-bg-secondary py-20 text-center">
        <h2 className="mb-4 font-display text-3xl text-text-primary md:text-4xl">
          Ready to get started?
        </h2>
        <p className="mx-auto mb-8 max-w-xl font-body text-text-secondary">
          Let&apos;s discuss how {service.title.toLowerCase()} can transform
          your operations.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full border border-accent-primary/40 bg-accent-primary/10 px-8 py-3 text-sm font-body font-medium text-accent-primary transition-all duration-300 hover:bg-accent-primary hover:text-[#050a18] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
        >
          Book a Call
        </a>
      </section>

      <Footer />
    </>
  );
}
