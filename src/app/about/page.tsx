import type { Metadata } from "next";
import { CheckCircle2, Target, Users, Zap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/sections/CTABanner";
import { AnimatedSection, StaggerChildren, StaggerItem } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Aedis Solutions Ltd — a professional property maintenance company based in London, committed to delivering quality workmanship across London.",
  alternates: { canonical: "https://www.aedis.ltd/about" },
  openGraph: {
    title: "About Aedis Solutions Ltd",
    description:
      "Professional property maintenance delivered to a commercial standard across London.",
    url: "https://www.aedis.ltd/about",
  },
};

const values = [
  {
    icon: CheckCircle2,
    title: "Uncompromising Quality",
    description:
      "Every job is carried out to the same high standard, regardless of scope. We do not cut corners and we do not consider a job complete until it meets our own expectations.",
  },
  {
    icon: Target,
    title: "Commercial Professionalism",
    description:
      "We operate with the standards of a large commercial contractor — clear communication, proper documentation, and accountable service from start to finish.",
  },
  {
    icon: Zap,
    title: "Fast Response",
    description:
      "We understand that property issues can be urgent. Our team responds promptly and keeps you informed throughout — no chasing required.",
  },
  {
    icon: Users,
    title: "Multi-Trade Capability",
    description:
      "With experience spanning multiple trades, we can coordinate and execute complex jobs without you having to manage multiple contractors.",
  },
];

const commitments = [
  "Stated arrival times are always honoured",
  "Proactive communication if anything changes",
  "Work completed to a consistently high standard",
  "All work guaranteed on completion",
  "Transparent pricing — no hidden charges",
  "Clean, tidy working practices on every job",
];

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-brand-dark pt-32 pb-20">
        <Container>
          <AnimatedSection>
            <p className="text-brand-accent text-sm font-semibold uppercase tracking-widest mb-4">
              About Us
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white max-w-3xl leading-tight text-balance">
              A Property Maintenance Company Built for the Modern Era
            </h1>
            <p className="mt-6 text-white/70 text-lg max-w-2xl leading-relaxed">
              Aedis Solutions Ltd was founded in 2026 with a clear ambition: to
              build a property maintenance company that operates and feels
              genuinely professional — not a local handyman, but a
              well-structured, scalable business with high standards at its core.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Story */}
      <section className="py-20 md:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <SectionHeading
                eyebrow="Our Story"
                title="Building Something Professional from Day One"
              />
              <div className="mt-6 space-y-5 text-slate-600 leading-relaxed">
                <p>
                  Aedis Solutions Ltd was established with a single purpose: to
                  raise the standard of property maintenance in London. Our
                  commitment is simple — quality workmanship, clear
                  communication, and a service that landlords, developers, and
                  property managers can genuinely rely on.
                </p>
                <p>
                  We set out to change that. While we are a young company, our
                  operatives bring years of hands-on experience across plumbing,
                  electrical, carpentry, tiling, building works, and general
                  maintenance — all under one roof.
                </p>
                <p>
                  Our aim is to become the go-to property maintenance partner for
                  homeowners and businesses across London — trusted not
                  just for the quality of the work, but for the consistency and
                  reliability of our service.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.15}>
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <h3 className="font-bold text-slate-900 text-lg mb-6">
                  Our Commitments to You
                </h3>
                <ul className="space-y-3.5">
                  {commitments.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-20 md:py-24 bg-slate-50">
        <Container>
          <AnimatedSection>
            <SectionHeading
              eyebrow="Our Values"
              title="What Drives Everything We Do"
              centered
            />
          </AnimatedSection>
          <StaggerChildren
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6"
            staggerDelay={0.1}
          >
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <StaggerItem key={v.title}>
                  <div className="bg-white rounded-xl p-7 border border-slate-200 hover:shadow-md transition-shadow duration-300">
                    <div className="w-11 h-11 rounded-xl bg-brand/8 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-brand" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-base mb-2">
                      {v.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </Container>
      </section>

      {/* Company details */}
      <section className="py-16 bg-white border-t border-slate-100">
        <Container narrow>
          <AnimatedSection className="text-center">
            <p className="text-sm text-slate-500">
              Aedis Solutions Ltd · Registered in England &amp; Wales ·
              Company No. 16401111 · 3rd Floor, 86-90 Paul Street, London, EC2A
              4NE
            </p>
          </AnimatedSection>
        </Container>
      </section>

      <CTABanner
        title="Work With a Team That Gets It Right"
        subtitle="Contact us today for a free, no-obligation quote. We will respond promptly and talk you through exactly what is involved."
      />
    </>
  );
}
