import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/sections/CTABanner";
import { AnimatedSection, StaggerChildren, StaggerItem } from "@/components/AnimatedSection";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Gallery — Our Work",
  description:
    "View completed projects and work examples from Aedis Solutions Ltd — property maintenance, plumbing, electrical, tiling, carpentry and more across London.",
  alternates: { canonical: "https://www.aedis.ltd/gallery" },
  openGraph: {
    title: "Gallery — Our Work | Aedis Solutions Ltd",
    description:
      "See examples of our property maintenance work across London.",
    url: "https://www.aedis.ltd/gallery",
  },
};

const projects = [
  { id: 1, title: "Bathroom Renovation",        service: "Plumbing & Tiling",      location: "West London",       img: "1-bathroom-renovation.jpg" },
  { id: 2, title: "Kitchen Renovation",          service: "Tiling & Building Works", location: "North London",      img: "2-kitchen-tiling.jpg" },
  { id: 3, title: "Bespoke Joinery & Shelving",  service: "Carpentry",              location: "Central London",    img: "3-fitted-wardrobes.jpg" },
  { id: 4, title: "Electrical Rewire",           service: "Electrical",             location: "South West London", img: "4-electrical-rewire.jpg" },
  { id: 5, title: "Full Bathroom Fit-Out",       service: "Plumbing",               location: "North West London", img: "5-bathroom-fitout.jpg" },
  { id: 6, title: "Kitchen Cabinet Install",     service: "Carpentry",              location: "West London",       img: "6-kitchen-cabinets.jpg" },
  { id: 7, title: "Large-Format Tiling",         service: "Tiling & Building Works", location: "Central London",   img: "7-floor-tiling.jpg" },
  { id: 8, title: "Property Maintenance",        service: "General Maintenance",    location: "North London",      img: "8-property-maintenance.jpg" },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-dark pt-32 pb-20">
        <Container>
          <AnimatedSection>
            <p className="text-brand-accent text-sm font-semibold uppercase tracking-widest mb-4">
              Our Work
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white max-w-3xl leading-tight text-balance">
              Projects We&apos;re Proud Of
            </h1>
            <p className="mt-5 text-white/70 text-lg max-w-2xl leading-relaxed">
              A selection of completed projects from across our service area.
              Photos from client work will be added as our portfolio grows.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Gallery grid */}
      <section className="py-20 md:py-28 bg-white">
        <Container>
          <AnimatedSection className="mb-12">
            <SectionHeading
              eyebrow="Portfolio"
              title="Completed Projects"
              description="A selection of work from across our services. Real project photos will be added as our portfolio grows."
            />
          </AnimatedSection>

          <StaggerChildren
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
            staggerDelay={0.06}
          >
            {projects.map((project) => (
              <StaggerItem key={project.id}>
                <div className="group rounded-xl overflow-hidden border border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`${BASE}/gallery/${project.img}`}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="font-bold text-slate-900 text-sm mb-1">
                      {project.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-brand-accent font-medium">
                        {project.service}
                      </span>
                      <span className="text-xs text-slate-400">
                        {project.location}
                      </span>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <AnimatedSection className="mt-16 text-center" delay={0.2}>
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-10 max-w-lg mx-auto">
              <h3 className="font-bold text-slate-900 text-lg mb-2">
                More Projects Coming Soon
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                We are photographing completed client jobs and will be updating
                this gallery regularly. Check back soon to see our latest work.
              </p>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <CTABanner
        title="Like What You See?"
        subtitle="Contact us to discuss your project. We provide free, no-obligation quotes for all enquiries."
      />
    </>
  );
}
