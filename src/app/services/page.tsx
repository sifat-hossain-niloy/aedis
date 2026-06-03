import type { Metadata } from "next";
import Link from "next/link";
import {
  Wrench, Droplets, Zap, LayoutGrid, Hammer,
  ArrowRight, LucideIcon,
} from "lucide-react";
import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/sections/CTABanner";
import { AnimatedSection, StaggerChildren, StaggerItem } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore all property maintenance services offered by Aedis Solutions Ltd — plumbing, electrical, carpentry, general maintenance, and tiling & building works across London.",
  alternates: { canonical: "https://www.aedis.ltd/services" },
  openGraph: {
    title: "Property Maintenance Services | Aedis Solutions Ltd",
    description:
      "Expert plumbing, electrical, carpentry, general maintenance, and tiling & building works across London.",
    url: "https://www.aedis.ltd/services",
  },
};

const iconMap: Record<string, LucideIcon> = {
  Wrench, Droplets, Zap, LayoutGrid, Hammer,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-dark pt-32 pb-20">
        <Container>
          <AnimatedSection>
            <p className="text-brand-accent text-sm font-semibold uppercase tracking-widest mb-4">
              What We Offer
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white max-w-3xl leading-tight text-balance">
              Professional Property Maintenance Services
            </h1>
            <p className="mt-5 text-white/70 text-lg max-w-2xl leading-relaxed">
              A comprehensive range of trade services delivered to a
              consistently high standard — all under one roof, across North
              West London.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-white">
        <Container>
          <StaggerChildren
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            staggerDelay={0.08}
          >
            {services.map((service) => {
              const Icon = iconMap[service.icon] ?? Wrench;
              return (
                <StaggerItem key={service.slug}>
                  <div className="group bg-white border border-slate-200 rounded-2xl p-8 hover:border-brand-accent hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-5">
                      <div
                        className={`w-14 h-14 rounded-xl ${service.accentColor} flex items-center justify-center shrink-0`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand transition-colors">
                          {service.name}
                        </h2>
                        <p className="text-slate-600 text-sm leading-relaxed mb-5">
                          {service.shortDescription}
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 gap-x-4 mb-6">
                          {service.features.slice(0, 4).map((f) => (
                            <li
                              key={f}
                              className="text-xs text-slate-600 flex items-center gap-2"
                            >
                              <span className="w-1 h-1 rounded-full bg-brand-accent shrink-0" />
                              {f}
                            </li>
                          ))}
                        </ul>
                        <Link
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent hover:text-brand-accent-hover transition-colors"
                        >
                          Learn more
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </Container>
      </section>

      <CTABanner
        title="Need a Service Not Listed?"
        subtitle="Contact us to discuss your specific requirements. Our multi-trade team can handle most property maintenance needs."
      />
    </>
  );
}
