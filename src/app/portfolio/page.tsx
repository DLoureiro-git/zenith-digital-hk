import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { CaseStudyCard } from "@/components/portfolio/CaseStudyCard";
import { CASE_STUDIES } from "@/lib/constants/portfolio";
import { createMetadata } from "@/lib/utils/metadata";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = createMetadata({
  title: "Portfolio",
  description:
    "Explore our AI projects — from marketing intelligence platforms to autonomous sales agents.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <PageHero
        tag="Our Work"
        title="AI solutions that deliver real results."
        subtitle="From autonomous marketing platforms to intelligent prospecting engines — every project is built for production, not presentations."
      />
      <Section>
        <div className="space-y-24">
          {CASE_STUDIES.map((study, i) => (
            <CaseStudyCard key={study.name} {...study} index={i} />
          ))}
        </div>
      </Section>

      {/* CTA band before footer */}
      <section className="bg-bg-secondary py-20 text-center">
        <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-4">
          Ready to build something extraordinary?
        </h2>
        <p className="font-body text-text-secondary mb-8 max-w-xl mx-auto">
          Let&apos;s discuss how AI can transform your operations.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-accent-primary/40 bg-accent-primary/10 px-8 py-3 text-sm font-body font-medium text-accent-primary transition-all duration-300 hover:bg-accent-primary hover:text-[#050a18] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
        >
          Book a Call
        </a>
      </section>

      <Footer />
    </>
  );
}
