import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { posts } from "@/data/posts";
import { Container } from "@/components/ui/Container";
import { CTABanner } from "@/components/sections/CTABanner";
import { AnimatedSection, StaggerChildren, StaggerItem } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Blog — Property Maintenance Tips & Guides",
  description:
    "Practical guides on plumbing costs, electrical safety, property maintenance, and tiling for London homeowners and landlords.",
  alternates: { canonical: "https://www.aedis.ltd/blog" },
  openGraph: {
    title: "Blog | Aedis Solutions Ltd",
    description:
      "Practical property maintenance guides for London homeowners and landlords.",
    url: "https://www.aedis.ltd/blog",
  },
};

const categoryColours: Record<string, string> = {
  Plumbing: "bg-cyan-50 text-cyan-700",
  Electrical: "bg-yellow-50 text-yellow-700",
  "General Maintenance": "bg-blue-50 text-blue-700",
  Tiling: "bg-stone-100 text-stone-700",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      <section className="bg-brand-dark pt-32 pb-20">
        <Container>
          <AnimatedSection>
            <p className="text-brand-accent text-sm font-semibold uppercase tracking-widest mb-4">
              Resources
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white max-w-3xl leading-tight text-balance">
              Property Maintenance Guides
            </h1>
            <p className="mt-5 text-white/70 text-lg max-w-2xl leading-relaxed">
              Practical advice on plumbing, electrics, tiling, and general
              maintenance — written for London homeowners and landlords.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <Container>
          <StaggerChildren
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            staggerDelay={0.07}
          >
            {posts.map((post) => (
              <StaggerItem key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col h-full bg-white border border-slate-200 rounded-2xl p-8 hover:border-brand-accent hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        categoryColours[post.category] ?? "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-400">
                      <Clock className="w-3 h-3" />
                      {post.readTime} min read
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-brand transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-6">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1.5 text-sm font-semibold text-brand-accent group-hover:gap-3 transition-all duration-200">
                      Read article
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      <CTABanner
        title="Need a Tradesperson in London?"
        subtitle="Our multi-trade team covers plumbing, electrical, carpentry, tiling, and general maintenance across London."
      />
    </>
  );
}
