import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, ArrowRight, Phone } from "lucide-react";
import { posts, getPostBySlug } from "@/data/posts";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/AnimatedSection";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `https://www.aedis.ltd/blog/${slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://www.aedis.ltd/blog/${slug}`,
      type: "article",
    },
  };
}

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

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const otherPosts = posts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <section className="bg-brand-dark pt-32 pb-16">
        <Container>
          <AnimatedSection>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/60 text-sm hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              All articles
            </Link>

            <div className="flex items-center gap-3 mb-5">
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full ${
                  categoryColours[post.category] ?? "bg-slate-100 text-slate-600"
                }`}
              >
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-white/50">
                <Clock className="w-3 h-3" />
                {post.readTime} min read
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white max-w-3xl leading-tight text-balance">
              {post.title}
            </h1>

            <p className="mt-4 text-white/60 text-sm">
              Published {formatDate(post.date)} · Aedis Solutions Ltd
            </p>
          </AnimatedSection>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Article body */}
            <article className="lg:col-span-2">
              <AnimatedSection>
                <p className="text-lg text-slate-600 leading-relaxed mb-10 font-medium border-l-4 border-brand-accent pl-5">
                  {post.excerpt}
                </p>
              </AnimatedSection>

              {post.sections.map((section, i) => (
                <AnimatedSection key={i} delay={i * 0.05} className="mb-10">
                  {section.heading && (
                    <h2 className="text-xl font-bold text-slate-900 mb-4">
                      {section.heading}
                    </h2>
                  )}
                  {section.body?.map((para, j) => (
                    <p key={j} className="text-slate-600 leading-relaxed mb-4">
                      {para}
                    </p>
                  ))}
                  {section.list && (
                    <ul className="space-y-2 mt-3">
                      {section.list.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-slate-600 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0 mt-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </AnimatedSection>
              ))}

              {/* Inline CTA */}
              <AnimatedSection delay={0.2} className="mt-12 p-7 bg-slate-50 rounded-2xl border border-slate-200">
                <p className="text-sm text-slate-500 uppercase font-semibold tracking-widest mb-2">
                  Aedis Solutions Ltd
                </p>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Need help with this in London?
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  Our multi-trade team covers plumbing, electrical, carpentry,
                  tiling, and general maintenance across London.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-brand text-white font-semibold text-sm rounded-lg hover:bg-brand/90 transition-colors"
                  >
                    Get a free quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="tel:02046521027"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-slate-300 text-slate-700 font-semibold text-sm rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    0204 652 1027
                  </a>
                </div>
              </AnimatedSection>
            </article>

            {/* Sidebar */}
            <aside>
              <AnimatedSection direction="right" className="sticky top-28 space-y-6">
                <div className="bg-brand rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Get a Free Quote</h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-5">
                    Based in London? Our team can help. Contact us for a free,
                    no-obligation quote.
                  </p>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-brand-accent rounded-lg font-semibold text-sm hover:bg-brand-accent-hover transition-colors mb-3"
                  >
                    Request a quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="tel:02046521027"
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-white/10 border border-white/20 rounded-lg font-semibold text-sm hover:bg-white/20 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    0204 652 1027
                  </a>
                </div>

                {otherPosts.length > 0 && (
                  <div className="bg-white border border-slate-200 rounded-2xl p-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
                      More articles
                    </p>
                    <div className="space-y-4">
                      {otherPosts.map((p) => (
                        <Link
                          key={p.slug}
                          href={`/blog/${p.slug}`}
                          className="group block"
                        >
                          <p className="text-sm font-semibold text-slate-800 group-hover:text-brand transition-colors leading-snug mb-1">
                            {p.title}
                          </p>
                          <p className="text-xs text-slate-400 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {p.readTime} min read
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </AnimatedSection>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
