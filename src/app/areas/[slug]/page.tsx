import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { areas, getAreaBySlug } from "@/data/areas";
import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { CTABanner } from "@/components/sections/CTABanner";
import { AnimatedSection, StaggerChildren, StaggerItem } from "@/components/AnimatedSection";

export async function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(
  props: PageProps<"/areas/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const area = getAreaBySlug(slug);
  if (!area) return {};
  return {
    title: area.metaTitle,
    description: area.metaDescription,
    alternates: { canonical: `https://www.aedis.ltd/areas/${slug}` },
    openGraph: {
      title: area.metaTitle,
      description: area.metaDescription,
      url: `https://www.aedis.ltd/areas/${slug}`,
    },
  };
}

export default async function AreaPage(props: PageProps<"/areas/[slug]">) {
  const { slug } = await props.params;
  const area = getAreaBySlug(slug);
  if (!area) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-dark pt-32 pb-20">
        <Container>
          <AnimatedSection>
            <div className="flex items-center gap-2 text-brand-accent text-sm font-semibold uppercase tracking-widest mb-4">
              <MapPin className="w-4 h-4" />
              {area.region}
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white max-w-3xl leading-tight text-balance">
              Property Maintenance in {area.name}
            </h1>
            <p className="mt-5 text-white/70 text-lg max-w-2xl leading-relaxed">
              {area.intro}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-accent text-white font-semibold rounded-lg hover:bg-brand-accent-hover transition-colors"
              >
                Get a free quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:02046521027"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
              >
                <Phone className="w-4 h-4" />
                0204 652 1027
              </a>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Services we offer in this area */}
      <section className="py-20 md:py-24 bg-white">
        <Container>
          <AnimatedSection className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Services We Offer in {area.name}
            </h2>
            <p className="text-slate-600 leading-relaxed max-w-2xl">
              {area.servicesNote}
            </p>
          </AnimatedSection>

          <StaggerChildren
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            staggerDelay={0.07}
          >
            {services.map((service) => (
              <StaggerItem key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex items-start gap-4 p-5 bg-white border border-slate-200 rounded-xl hover:border-brand-accent hover:shadow-md transition-all duration-300"
                >
                  <div className={`w-10 h-10 rounded-lg shrink-0 flex items-center justify-center ${service.accentColor}`}>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm group-hover:text-brand transition-colors mb-1">
                      {service.name}
                    </p>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      {/* Areas covered */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <Container>
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Areas We Cover Near {area.name}
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  We serve {area.name} and surrounding neighbourhoods including:
                </p>
                <ul className="grid grid-cols-2 gap-2">
                  {area.landmarks.map((lm) => (
                    <li key={lm} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                      {lm}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-brand rounded-2xl p-8 text-white">
                <h3 className="font-bold text-xl mb-3">
                  Get a Quote in {area.name}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  We offer free, no-obligation quotes for all work. Most
                  enquiries receive a response within a few hours.
                </p>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-brand-accent rounded-lg font-semibold text-sm hover:bg-brand-accent-hover transition-colors mb-3"
                >
                  Contact us
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="mailto:hello@aedis.ltd"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-white/10 border border-white/20 rounded-lg font-semibold text-sm hover:bg-white/20 transition-colors"
                >
                  hello@aedis.ltd
                </a>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <CTABanner
        title={`Trusted Property Maintenance in ${area.name}`}
        subtitle="One call, every trade. Contact Aedis Solutions for a free quote on any property maintenance work."
      />
    </>
  );
}
