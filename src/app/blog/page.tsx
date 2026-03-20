import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { createMetadata } from "@/lib/utils/metadata";

export const metadata = createMetadata({
  title: "Blog",
  description:
    "AI perspectives from the field — strategy, engineering, and compliance insights from the Zenith Digital HK team.",
  path: "/blog",
});

/* -------------------------------------------------------------------------- */
/*  Placeholder blog posts                                                    */
/* -------------------------------------------------------------------------- */

const BLOG_POSTS = [
  {
    title: "Why Most AI Pilots Fail — and How to Actually Deploy",
    excerpt:
      "The gap between AI proof-of-concept and production deployment is where most enterprises stumble. Here's what separates successful AI programmes from expensive experiments.",
    category: "Strategy",
    readTime: "8 min read",
    date: "Coming Soon",
  },
  {
    title: "Building Agentic Workflows: Lessons from 3 Production Systems",
    excerpt:
      "After deploying multi-agent systems across marketing, sales, and automotive verticals, we've learned what works — and what doesn't — in production agentic AI.",
    category: "Engineering",
    readTime: "12 min read",
    date: "Coming Soon",
  },
  {
    title: "LLM Cost Optimization: How We Cut Inference Costs by 60%",
    excerpt:
      "Running LLMs in production doesn't have to break the bank. Our practical guide to model selection, caching, batching, and prompt engineering for cost efficiency.",
    category: "Technical",
    readTime: "10 min read",
    date: "Coming Soon",
  },
  {
    title: "APAC AI Compliance: Navigating PDPA, GDPR, and China's PIPL",
    excerpt:
      "Operating AI systems across Asia-Pacific means navigating a complex web of data protection regulations. Here's your practical compliance roadmap.",
    category: "Compliance",
    readTime: "15 min read",
    date: "Coming Soon",
  },
] as const;

/* -------------------------------------------------------------------------- */
/*  Category badge colour mapping                                             */
/* -------------------------------------------------------------------------- */

const CATEGORY_COLOURS: Record<string, string> = {
  Strategy: "bg-blue-500/15 text-blue-400",
  Engineering: "bg-emerald-500/15 text-emerald-400",
  Technical: "bg-violet-500/15 text-violet-400",
  Compliance: "bg-amber-500/15 text-amber-400",
};

/* -------------------------------------------------------------------------- */
/*  Page component                                                            */
/* -------------------------------------------------------------------------- */

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <PageHero
        tag="Insights"
        title="AI perspectives from the field."
        subtitle="Strategy, engineering, and compliance insights drawn from real production deployments across APAC."
      />

      {/* ------------------------------------------------------------------ */}
      {/*  Article preview grid                                               */}
      {/* ------------------------------------------------------------------ */}
      <Section>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.title}
              className="group relative rounded-2xl border border-border-medium bg-bg-card p-8 backdrop-blur-sm transition-all duration-500 hover:border-border-glow hover:shadow-[0_0_40px_rgba(59,130,246,0.08)]"
            >
              {/* Gradient border on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 border-gradient" />

              {/* Top row — category + read time */}
              <div className="mb-4 flex items-center gap-3">
                <span
                  className={`inline-block rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${
                    CATEGORY_COLOURS[post.category] ??
                    "bg-accent-primary/15 text-accent-primary"
                  }`}
                >
                  {post.category}
                </span>
                <span className="font-body text-xs text-text-tertiary">
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h3 className="mb-3 font-body text-xl font-semibold text-text-primary">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="mb-6 font-body text-sm leading-relaxed text-text-secondary">
                {post.excerpt}
              </p>

              {/* Coming soon badge */}
              <span className="inline-block rounded-full border border-border-medium bg-bg-secondary px-4 py-1.5 font-body text-xs font-medium text-text-tertiary">
                {post.date}
              </span>
            </article>
          ))}
        </div>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/*  Newsletter signup                                                  */}
      {/* ------------------------------------------------------------------ */}
      <Section dark>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-2xl font-semibold text-text-primary md:text-3xl">
            Stay updated
          </h2>
          <p className="mb-8 font-body text-base text-text-secondary">
            Get notified when we publish new insights on AI strategy,
            engineering, and compliance.
          </p>

          {/* Email form — visual only, no functionality */}
          <div className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="you@company.com"
              aria-label="Email address"
              readOnly
              className="flex-1 rounded-full border border-border-medium bg-bg-card px-5 py-3 font-body text-sm text-text-primary placeholder:text-text-tertiary outline-none transition-colors duration-300 focus:border-border-glow"
            />
            <button
              type="button"
              className="rounded-full border border-accent-primary/40 bg-accent-primary/10 px-6 py-3 font-body text-sm font-medium text-accent-primary transition-all duration-300 hover:bg-accent-primary hover:text-[#050a18] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
            >
              Subscribe
            </button>
          </div>

          <p className="mt-4 font-body text-xs text-text-tertiary">
            No spam. Unsubscribe any time.
          </p>
        </div>
      </Section>

      <Footer />
    </>
  );
}
