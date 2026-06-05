import Link from "next/link";
import { CheckCircle2, ArrowRight, ShieldCheck, Clock, Star, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedSection, StaggerChildren, StaggerItem } from "@/components/AnimatedSection";

const pillars = [
  {
    icon: Star,
    title: "Quality Guaranteed",
    description: "Every job completed to a high standard — no shortcuts, no compromise.",
  },
  {
    icon: Clock,
    title: "Punctual & Reliable",
    description: "We arrive when agreed and keep you informed every step of the way.",
  },
  {
    icon: Users,
    title: "Multi-Trade Expertise",
    description: "One team, multiple trades — saving you time and coordination hassle.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Guaranteed",
    description: "All work is guaranteed on completion. We stand behind what we deliver.",
  },
];

const keyPoints = [
  "Professional domestic and commercial service.",
  "Experienced operatives across all trades",
  "Transparent pricing with no hidden charges",
  "Clean, tidy working practices on every job",
  "Responsive communication throughout",
];

export function AboutSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — Company story */}
          <AnimatedSection direction="left">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-accent mb-4">
              About Aedis Solutions
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-6 text-balance">
              A Property Maintenance Company Built on High Standards
            </h2>
            <p className="text-slate-600 leading-relaxed mb-5">
              Aedis Solutions Ltd was established with a single purpose: to raise the
              standard of property maintenance in London. Our commitment is simple —
              quality workmanship, clear communication, and a service that landlords,
              developers, and property managers can genuinely rely on.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Our team brings hands-on expertise across plumbing, electrical, carpentry,
              tiling, and general maintenance. Whether it&apos;s a single repair or an
              ongoing maintenance programme, every job receives the same focused attention
              to detail.
            </p>

            <ul className="space-y-3 mb-8">
              {keyPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">{point}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-white font-semibold rounded-lg text-sm hover:bg-brand-mid transition-colors"
            >
              More About Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>

          {/* Right — Trust pillars */}
          <AnimatedSection direction="right" delay={0.1}>
            <StaggerChildren
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
              staggerDelay={0.08}
            >
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <StaggerItem key={pillar.title}>
                    <div className="bg-slate-50 border border-slate-100 rounded-xl p-6 hover:border-brand-accent hover:shadow-md transition-all duration-300">
                      <div className="w-11 h-11 rounded-xl bg-brand/8 flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5 text-brand" />
                      </div>
                      <h3 className="font-bold text-slate-900 text-sm mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerChildren>

            {/* Stats strip */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              {[
                { value: "2026", label: "Established" },
                { value: "5+", label: "Services" },
                { value: "100%", label: "Guaranteed" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-brand rounded-xl p-4 text-center"
                >
                  <p className="text-2xl font-extrabold text-white">{stat.value}</p>
                  <p className="text-xs text-white/60 mt-1 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
