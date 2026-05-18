import Link from "next/link";
import {
  Wrench,
  Droplets,
  Zap,
  LayoutGrid,
  BellRing,
  Camera,
  Hammer,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerChildren, StaggerItem } from "@/components/AnimatedSection";
import { AnimatedSection } from "@/components/AnimatedSection";

const iconMap: Record<string, LucideIcon> = {
  Wrench,
  Droplets,
  Zap,
  LayoutGrid,
  BellRing,
  Camera,
  Hammer,
};

export function ServicesGrid() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <AnimatedSection>
          <SectionHeading
            eyebrow="What We Do"
            title="Our Services"
            description="From emergency call-outs to planned refurbishment — our multi-trade team handles every aspect of property maintenance to a consistently high standard."
            centered
          />
        </AnimatedSection>

        <StaggerChildren
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          staggerDelay={0.08}
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? Wrench;
            return (
              <StaggerItem key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex flex-col h-full bg-white border border-slate-200 rounded-xl p-6 hover:border-brand-accent hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${service.accentColor} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-brand transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed flex-1">
                    {service.shortDescription}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Learn more
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerChildren>

        <AnimatedSection className="mt-10 text-center" delay={0.2}>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-brand text-brand font-semibold rounded-lg hover:bg-brand hover:text-white transition-all duration-200 text-sm"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </Container>
    </section>
  );
}
