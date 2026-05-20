import Link from "next/link";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StarRating } from "@/components/ui/StarRating";
import { StaggerChildren, StaggerItem, AnimatedSection } from "@/components/AnimatedSection";

type Props = {
  limit?: number;
  showViewAll?: boolean;
};

export function TestimonialsSection({ limit = 3, showViewAll = true }: Props) {
  const displayed = testimonials.slice(0, limit);

  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <Container>
        <AnimatedSection>
          <SectionHeading
            eyebrow="Client Reviews"
            title="What Our Clients Say"
            description="We let the quality of our work speak for itself — here is what our clients across London have to say."
            centered
          />
        </AnimatedSection>

        <StaggerChildren
          className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.1}
        >
          {displayed.map((t) => (
            <StaggerItem key={t.id}>
              <div className="bg-white rounded-xl p-7 shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start justify-between mb-4">
                  <StarRating rating={t.rating} />
                  <Quote className="w-7 h-7 text-brand-accent/20 shrink-0" />
                </div>
                <p className="text-slate-700 leading-relaxed text-sm flex-1 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-5 pt-5 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">
                      {t.name}
                    </p>
                    <p className="text-xs text-slate-500">{t.location}</p>
                  </div>
                  <span className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full font-medium">
                    {t.service}
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {showViewAll && (
          <AnimatedSection className="mt-10 text-center" delay={0.2}>
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-brand text-brand font-semibold rounded-lg hover:bg-brand hover:text-white transition-all duration-200 text-sm"
            >
              Read All Reviews
            </Link>
          </AnimatedSection>
        )}
      </Container>
    </section>
  );
}
