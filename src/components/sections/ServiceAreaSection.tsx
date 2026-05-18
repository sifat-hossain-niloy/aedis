import { MapPin, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/AnimatedSection";

const areas = [
  "Hendon",
  "Finchley",
  "Golders Green",
  "Southgate",
  "Barnet",
  "Edgware",
  "Mill Hill",
  "Whetstone",
  "East Finchley",
  "North Finchley",
  "Friern Barnet",
  "New Barnet",
];

export function ServiceAreaSection() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <SectionHeading
              eyebrow="Where We Work"
              title="Serving North West London"
              description="Based in London and operating primarily across the North West, we provide fast response times and reliable service across our coverage area."
            />
            <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-3">
              {areas.map((area) => (
                <li key={area} className="flex items-center gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                  {area}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-slate-500 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brand-accent shrink-0" />
              Not sure if we cover your area? Just get in touch — we&apos;re happy to discuss.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.15}>
            {/* Map placeholder — replace with Google Maps embed when available */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100 aspect-[4/3] flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/5 to-brand/10" />
              <div className="text-center z-10 p-8">
                <MapPin className="w-12 h-12 text-brand-accent mx-auto mb-4" />
                <p className="font-bold text-slate-700 text-lg">North West London</p>
                <p className="text-slate-500 text-sm mt-1">Service area map</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
