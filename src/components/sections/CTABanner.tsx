import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/AnimatedSection";

type Props = {
  title?: string;
  subtitle?: string;
};

export function CTABanner({
  title = "Ready to Get Started?",
  subtitle = "Request a free, no-obligation quote today. We respond promptly and make the process as straightforward as possible.",
}: Props) {
  return (
    <section className="py-20 md:py-24 bg-brand-dark relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand to-brand-dark opacity-60" />
      <div className="absolute right-0 top-0 w-96 h-96 bg-brand-accent/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />

      <Container className="relative">
        <AnimatedSection className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight text-balance">
              {title}
            </h2>
            <p className="mt-4 text-white/70 text-lg leading-relaxed">
              {subtitle}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-accent text-white font-semibold rounded-lg text-base hover:bg-brand-accent-hover transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 whitespace-nowrap"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="mailto:hello@aedis.ltd"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-lg text-base hover:bg-white/20 transition-all duration-200 border border-white/20 whitespace-nowrap"
            >
              <Mail className="w-4 h-4" />
              hello@aedis.ltd
            </a>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
