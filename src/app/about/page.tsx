import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { TeamGrid } from "@/components/about/TeamGrid";
import { EventsShowcase } from "@/components/about/EventsShowcase";
import { Timeline } from "@/components/about/Timeline";
import { TestimonialSlider } from "@/components/about/TestimonialSlider";
import { TEAM_MEMBERS } from "@/lib/constants/team";
import { EVENTS } from "@/lib/constants/events";
import { TESTIMONIALS } from "@/lib/constants/testimonials";
import { createMetadata } from "@/lib/utils/metadata";

export const metadata = createMetadata({
  title: "About",
  description:
    "Meet the team behind Zenith Digital HK — AI architects, engineers, and strategists building the future of enterprise AI in Asia-Pacific.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <PageHero
        tag="About Us"
        title="The team behind the intelligence."
        subtitle="A collective of AI architects, engineers, and strategists — united by a mission to make enterprise AI actually work."
      />

      {/* ------------------------------------------------------------------ */}
      {/* Mission                                                            */}
      {/* ------------------------------------------------------------------ */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 font-display text-3xl text-text-primary md:text-4xl">
            Our Mission
          </h2>
          <p className="font-body text-lg leading-relaxed text-text-secondary">
            We believe AI should be more than a buzzword in boardroom
            presentations. Zenith Digital HK exists to bridge the gap between AI
            potential and enterprise reality &mdash; building systems that run in
            production, generate measurable ROI, and compound in value over
            time.
          </p>
        </div>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Leadership Team                                                    */}
      {/* ------------------------------------------------------------------ */}
      <Section dark>
        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-accent-primary/40" />
            <span className="font-body text-xs uppercase tracking-[0.2em] text-accent-primary">
              Our People
            </span>
            <span className="h-px w-8 bg-accent-primary/40" />
          </div>
          <h2 className="mb-4 font-display text-3xl font-semibold text-text-primary md:text-5xl">
            Leadership Team
          </h2>
          <p className="mx-auto max-w-2xl font-body text-lg text-text-secondary">
            A multidisciplinary team across AI research, engineering, and
            business strategy.
          </p>
        </div>
        <TeamGrid members={TEAM_MEMBERS} />
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Timeline                                                           */}
      {/* ------------------------------------------------------------------ */}
      <Section>
        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-accent-primary/40" />
            <span className="font-body text-xs uppercase tracking-[0.2em] text-accent-primary">
              Milestones
            </span>
            <span className="h-px w-8 bg-accent-primary/40" />
          </div>
          <h2 className="mb-4 font-display text-3xl font-semibold text-text-primary md:text-5xl">
            Our Journey
          </h2>
        </div>
        <Timeline />
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Conference Presence                                                */}
      {/* ------------------------------------------------------------------ */}
      <Section dark>
        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-accent-primary/40" />
            <span className="font-body text-xs uppercase tracking-[0.2em] text-accent-primary">
              Events
            </span>
            <span className="h-px w-8 bg-accent-primary/40" />
          </div>
          <h2 className="mb-4 font-display text-3xl font-semibold text-text-primary md:text-5xl">
            Conference Presence
          </h2>
          <p className="mx-auto max-w-2xl font-body text-lg text-text-secondary">
            Building relationships and sharing knowledge across the global AI
            ecosystem.
          </p>
        </div>
        <EventsShowcase events={EVENTS} />
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Testimonials                                                       */}
      {/* ------------------------------------------------------------------ */}
      <Section>
        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-accent-primary/40" />
            <span className="font-body text-xs uppercase tracking-[0.2em] text-accent-primary">
              Testimonials
            </span>
            <span className="h-px w-8 bg-accent-primary/40" />
          </div>
          <h2 className="mb-4 font-display text-3xl font-semibold text-text-primary md:text-5xl">
            What Our Clients Say
          </h2>
        </div>
        <TestimonialSlider testimonials={TESTIMONIALS} />
      </Section>

      <Footer />
    </>
  );
}
