import type { Metadata } from "next";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StarRating } from "@/components/ui/StarRating";
import { CTABanner } from "@/components/sections/CTABanner";
import { AnimatedSection, StaggerChildren, StaggerItem } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Client Reviews & Testimonials",
  description:
    "Read what our clients say about Aedis Solutions Ltd — trusted property maintenance across North West London. Consistently five-star reviews.",
  alternates: { canonical: "https://www.aedis.ltd/testimonials" },
  openGraph: {
    title: "Client Reviews | Aedis Solutions Ltd",
    description:
      "Read reviews from satisfied clients across North West London.",
    url: "https://www.aedis.ltd/testimonials",
  },
};

export default function TestimonialsPage() {
  const totalReviews = testimonials.length;
  const avgRating = (
    testimonials.reduce((sum, t) => sum + t.rating, 0) / totalReviews
  ).toFixed(1);

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-dark pt-32 pb-20">
        <Container>
          <AnimatedSection>
            <p className="text-brand-accent text-sm font-semibold uppercase tracking-widest mb-4">
              Client Reviews
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white max-w-3xl leading-tight text-balance">
              What Our Clients Say About Us
            </h1>
            <div className="mt-8 flex flex-wrap gap-8">
              <div className="bg-white/10 border border-white/15 rounded-xl px-6 py-4">
                <p className="text-4xl font-extrabold text-white">{avgRating}</p>
                <StarRating rating={5} className="mt-1 mb-1" />
                <p className="text-white/60 text-xs">Average Rating</p>
              </div>
              <div className="bg-white/10 border border-white/15 rounded-xl px-6 py-4">
                <p className="text-4xl font-extrabold text-white">{totalReviews}</p>
                <p className="text-white/60 text-xs mt-2">Client Reviews</p>
              </div>
              <div className="bg-white/10 border border-white/15 rounded-xl px-6 py-4">
                <p className="text-4xl font-extrabold text-white">100%</p>
                <p className="text-white/60 text-xs mt-2">Satisfaction Rate</p>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Reviews grid */}
      <section className="py-20 md:py-28 bg-slate-50">
        <Container>
          <AnimatedSection className="mb-12">
            <SectionHeading
              eyebrow="Reviews"
              title="Honest Feedback from Real Clients"
              description="We are proud of the work we deliver and the relationships we build. Here is what our clients have to say."
            />
          </AnimatedSection>

          <StaggerChildren
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            staggerDelay={0.08}
          >
            {testimonials.map((t) => (
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

          {/* Leave a review prompt */}
          <AnimatedSection className="mt-16" delay={0.2}>
            <div className="bg-brand rounded-2xl p-8 md:p-10 text-center text-white">
              <h3 className="text-xl font-bold mb-3">
                Have You Used Our Services?
              </h3>
              <p className="text-white/70 text-sm leading-relaxed max-w-xl mx-auto mb-6">
                We would love to hear your feedback. Reviews on Google help
                other customers find us and help us continue to improve our
                service.
              </p>
              <a
                href="https://g.page/r/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand font-semibold rounded-lg text-sm hover:bg-slate-100 transition-colors"
              >
                Leave a Google Review
              </a>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
