import { ShieldCheck, Clock, Award, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerChildren, StaggerItem } from "@/components/AnimatedSection";
import { AnimatedSection } from "@/components/AnimatedSection";

const usps = [
  {
    icon: Star,
    title: "Quality Workmanship",
    description:
      "Every job is completed to a high standard — no cutting corners, no quick fixes. We take pride in delivering work that truly lasts.",
  },
  {
    icon: Clock,
    title: "Punctual & Reliable",
    description:
      "We respect your time. Our team arrives when stated and keeps you updated proactively if anything changes.",
  },
  {
    icon: Award,
    title: "Multi-Trade Expertise",
    description:
      "Highly experienced operatives across all trades — saving you time and the hassle of coordinating multiple contractors.",
  },
  {
    icon: ShieldCheck,
    title: "Satisfaction Guaranteed",
    description:
      "We stand behind every job we complete. If you are not satisfied, we come back and make it right — no questions asked.",
  },
];

export function USPs() {
  return (
    <section className="py-20 md:py-28 bg-brand">
      <Container>
        <AnimatedSection>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="The Aedis Difference"
            description="We are building a property maintenance company with a genuinely commercial standard of service — responsive, professional, and accountable."
            centered
            light
          />
        </AnimatedSection>

        <StaggerChildren
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          staggerDelay={0.1}
        >
          {usps.map((usp) => {
            const Icon = usp.icon;
            return (
              <StaggerItem key={usp.title}>
                <div className="bg-white/8 border border-white/12 rounded-xl p-7 hover:bg-white/12 transition-colors duration-300">
                  <div className="w-12 h-12 rounded-xl bg-brand-accent/20 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-brand-accent" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3">
                    {usp.title}
                  </h3>
                  <p className="text-white/65 text-sm leading-relaxed">
                    {usp.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </Container>
    </section>
  );
}
