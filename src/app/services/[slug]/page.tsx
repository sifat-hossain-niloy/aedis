import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Wrench, Droplets, Zap, LayoutGrid, Hammer,
  CheckCircle2, ArrowLeft, ArrowRight, LucideIcon,
} from "lucide-react";
import { services, getServiceBySlug } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { CTABanner } from "@/components/sections/CTABanner";
import { AnimatedSection, StaggerChildren, StaggerItem } from "@/components/AnimatedSection";

const iconMap: Record<string, LucideIcon> = {
  Wrench, Droplets, Zap, LayoutGrid, Hammer,
};

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(
  props: PageProps<"/services/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `https://www.aedis.ltd/services/${slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://www.aedis.ltd/services/${slug}`,
    },
  };
}

export default async function ServicePage(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const Icon = iconMap[service.icon] ?? Wrench;
  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-dark pt-32 pb-20">
        <Container>
          <AnimatedSection>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-white/60 text-sm hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              All Services
            </Link>
            <div className="flex items-start gap-5">
              <div
                className={`w-16 h-16 rounded-2xl ${service.accentColor} flex items-center justify-center shrink-0`}
              >
                <Icon className="w-7 h-7" />
              </div>
              <div>
                <p className="text-brand-accent text-sm font-semibold uppercase tracking-widest mb-2">
                  Our Services
                </p>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight text-balance">
                  {service.name}
                </h1>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Content */}
      <section className="py-20 md:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <h2 className="text-2xl font-bold text-slate-900 mb-5">
                  About This Service
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {service.longDescription}
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.1} className="mt-12">
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  What&apos;s Included
                </h3>
                <StaggerChildren
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                  staggerDelay={0.07}
                >
                  {service.features.map((feature) => (
                    <StaggerItem key={feature}>
                      <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700 font-medium">
                          {feature}
                        </span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerChildren>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <aside>
              <AnimatedSection direction="right">
                <div className="bg-brand rounded-2xl p-7 text-white sticky top-28">
                  <h3 className="font-bold text-xl mb-3">
                    Get a Free Quote
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-6">
                    Interested in our {service.name.toLowerCase()} service?
                    Contact us today for a free, no-obligation quote.
                  </p>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-brand-accent rounded-lg font-semibold text-sm hover:bg-brand-accent-hover transition-colors mb-4"
                  >
                    Request a Quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="mailto:hello@aedissolutions.co.uk"
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-white/10 border border-white/20 rounded-lg font-semibold text-sm hover:bg-white/20 transition-colors"
                  >
                    hello@aedissolutions.co.uk
                  </a>
                </div>
              </AnimatedSection>
            </aside>
          </div>
        </Container>
      </section>

      {/* Related services */}
      {otherServices.length > 0 && (
        <section className="py-16 bg-slate-50 border-t border-slate-100">
          <Container>
            <AnimatedSection>
              <h2 className="text-2xl font-bold text-slate-900 mb-8">
                Other Services
              </h2>
            </AnimatedSection>
            <StaggerChildren
              className="grid grid-cols-1 sm:grid-cols-3 gap-5"
              staggerDelay={0.08}
            >
              {otherServices.map((s) => {
                const RelatedIcon = iconMap[s.icon] ?? Wrench;
                return (
                  <StaggerItem key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="group flex items-center gap-4 p-5 bg-white rounded-xl border border-slate-200 hover:border-brand-accent hover:shadow-md transition-all duration-300"
                    >
                      <div
                        className={`w-10 h-10 rounded-lg ${s.accentColor} flex items-center justify-center shrink-0`}
                      >
                        <RelatedIcon className="w-4 h-4" />
                      </div>
                      <span className="font-semibold text-sm text-slate-800 group-hover:text-brand transition-colors">
                        {s.name}
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-400 ml-auto group-hover:text-brand-accent transition-colors" />
                    </Link>
                  </StaggerItem>
                );
              })}
            </StaggerChildren>
          </Container>
        </section>
      )}

      <CTABanner />
    </>
  );
}
