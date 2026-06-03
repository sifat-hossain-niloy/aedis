import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ServiceAreaSection } from "@/components/sections/ServiceAreaSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { LocalBusinessJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Professional Property Maintenance London | Aedis Solutions Ltd",
  description:
    "Expert property maintenance across London — plumbing, electrical, carpentry, tiling & building works, and general maintenance. Professional, reliable, and guaranteed.",
  alternates: { canonical: "https://www.aedis.ltd" },
};

export default function HomePage() {
  return (
    <>
      <LocalBusinessJsonLd />
      {/* 1. Hero — strong first impression */}
      <Hero />
      {/* 2. About — who we are, trust signals */}
      <AboutSection />
      {/* 3. Services — what we offer */}
      <ServicesGrid />
      {/* 4. Coverage — where we work */}
      <ServiceAreaSection />
      {/* 5. Social proof */}
      <TestimonialsSection limit={3} showViewAll />
      {/* 6. CTA */}
      <CTABanner />
    </>
  );
}
