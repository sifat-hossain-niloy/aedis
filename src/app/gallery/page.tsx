import type { Metadata } from "next";
import { Camera } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/sections/CTABanner";
import { AnimatedSection, StaggerChildren, StaggerItem } from "@/components/AnimatedSection";

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

const placeholderProjects = [
  { id: 1, title: "Bathroom Renovation", service: "Plumbing & Tiling", location: "West London", bg: "from-cyan-800 to-blue-900" },
  { id: 2, title: "Kitchen Tiling", service: "Tiling & Building Works", location: "North London", bg: "from-stone-700 to-slate-800" },
  { id: 3, title: "Bespoke Fitted Wardrobes", service: "Carpentry", location: "Central London", bg: "from-amber-700 to-orange-900" },
  { id: 4, title: "Electrical Rewire", service: "Electrical", location: "South West London", bg: "from-yellow-700 to-amber-900" },
  { id: 5, title: "Full Bathroom Fit-Out", service: "Plumbing", location: "North West London", bg: "from-blue-700 to-cyan-900" },
  { id: 6, title: "Kitchen Cabinet Install", service: "Carpentry", location: "West London", bg: "from-amber-800 to-amber-950" },
  { id: 7, title: "Floor Tiling — Open Plan", service: "Tiling & Building Works", location: "Central London", bg: "from-stone-600 to-stone-900" },
  { id: 8, title: "Property Maintenance", service: "General Maintenance", location: "North London", bg: "from-brand to-brand-dark" },
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
              description="We are actively building our portfolio. Real project photography will be added shortly — check back soon."
            />
          </AnimatedSection>

          <StaggerChildren
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
            staggerDelay={0.06}
          >
            {placeholderProjects.map((project) => (
              <StaggerItem key={project.id}>
                <div className="group rounded-xl overflow-hidden border border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  {/* Placeholder image */}
                  <div
                    className={`bg-gradient-to-br ${project.bg} aspect-[4/3] flex items-center justify-center relative`}
                  >
                    <Camera className="w-10 h-10 text-white/30" />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-xs font-medium bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm">
                        Photo coming soon
                      </span>
                    </div>
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
              <Camera className="w-10 h-10 text-slate-400 mx-auto mb-4" />
              <h3 className="font-bold text-slate-900 text-lg mb-2">
                More Coming Soon
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                We are photographing completed projects and will be updating
                this gallery regularly. Follow us on social media or check back
                to see our latest work.
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
