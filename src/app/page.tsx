import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { USPs } from "@/components/sections/USPs";
import { ServiceAreaSection } from "@/components/sections/ServiceAreaSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { LocalBusinessJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Professional Property Maintenance London | Aedis Solutions Ltd",
  description:
    "Expert property maintenance across London — plumbing, electrical, tiling, carpentry, alarms, CCTV and general maintenance. Professional, reliable, and guaranteed.",
  alternates: { canonical: "https://www.aedis.ltd" },
};

export default function HomePage() {
  return (
    <>
      <LocalBusinessJsonLd />
      <Hero />
      <StatsBar />
      <ServicesGrid />
      <USPs />
      <ServiceAreaSection />
      <TestimonialsSection limit={3} showViewAll />
      <CTABanner />
    </>
  );
}
