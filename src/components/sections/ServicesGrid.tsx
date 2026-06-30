import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { AnimatedSection, StaggerChildren, StaggerItem } from "@/components/AnimatedSection";

export function ServicesGrid() {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <Container>
        <AnimatedSection className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-accent mb-3">
                What We Do
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight text-balance">
                Our Services
              </h2>
              <p className="mt-4 text-slate-600 text-lg max-w-xl leading-relaxed">
                A focused range of trade services — all delivered to the same
                high standard, by the same trusted team.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-brand text-brand font-semibold rounded-lg hover:bg-brand hover:text-white transition-all duration-200 text-sm shrink-0"
            >
              All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>

        <StaggerChildren
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.08}
        >
          {services.map((service) => {
            return (
              <StaggerItem key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex flex-col h-full bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-brand-accent hover:shadow-lg transition-all duration-300"
                >
                  {/* Colour accent bar */}
                  <div className="h-1.5 bg-brand-accent w-0 group-hover:w-full transition-all duration-500" />

                  <div className="p-7 flex flex-col flex-1">
                    <ServiceIcon
                      slug={service.slug}
                      icon={service.icon}
                      accentColor={service.accentColor}
                      variant="card"
                    />

                    <h3 className="font-bold text-slate-900 text-lg mb-3 group-hover:text-brand transition-colors">
                      {service.name}
                    </h3>

                    <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-5">
                      {service.shortDescription}
                    </p>

                    {/* Feature bullets */}
                    <ul className="space-y-1.5 mb-6">
                      {service.features.slice(0, 3).map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-slate-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-1.5 text-sm font-semibold text-brand-accent group-hover:gap-3 transition-all duration-200">
                      Learn more
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </Container>
    </section>
  );
}
