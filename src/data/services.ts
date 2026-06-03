export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  accentColor: string;
  features: string[];
  metaTitle: string;
  metaDescription: string;
};

// Order: Plumbing, Electrical, Carpentry, General Maintenance, Tiling/Building Works
export const services: Service[] = [
  {
    slug: "plumbing",
    name: "Plumbing",
    shortDescription:
      "Expert plumbing services for residential and commercial properties across London.",
    longDescription:
      "Our skilled plumbers deliver reliable solutions for everything from leaking pipes and dripping taps to full bathroom installations. We work cleanly, efficiently, and ensure all plumbing work is completed to the highest standard with minimal disruption to your property.",
    icon: "Droplets",
    accentColor: "bg-cyan-100 text-cyan-700",
    features: [
      "Leak detection and repair",
      "Tap, fixture and fitting installation",
      "Full bathroom installations",
      "Pipe replacement and rerouting",
      "Drainage solutions",
      "Emergency plumbing call-outs",
    ],
    metaTitle: "Plumbing Services London | Aedis Solutions Ltd",
    metaDescription:
      "Reliable plumbing services across London. Emergency repairs to full installations — Aedis Solutions Ltd delivers quality plumbing throughout the city.",
  },
  {
    slug: "electrical",
    name: "Electrical",
    shortDescription:
      "Safe, reliable electrical services delivered by experienced, qualified electricians.",
    longDescription:
      "Safety and quality are at the heart of our electrical services. Whether you need new sockets, full rewires, lighting installations, or fault finding, our electricians deliver work that meets all required UK standards and regulations.",
    icon: "Zap",
    accentColor: "bg-yellow-100 text-yellow-700",
    features: [
      "Socket and switch installation",
      "Lighting design and installation",
      "Fault finding and diagnosis",
      "Consumer unit upgrades",
      "Full and partial rewires",
      "Electrical Installation Condition Reports (EICR)",
    ],
    metaTitle: "Electrician London | Aedis Solutions Ltd",
    metaDescription:
      "Professional electrical services across London. Safe, qualified electricians delivering quality work throughout the city.",
  },
  {
    slug: "carpentry",
    name: "Carpentry",
    shortDescription:
      "Skilled carpentry for bespoke joinery, fitted furniture, and all woodwork.",
    longDescription:
      "From bespoke fitted wardrobes and kitchen cabinets to structural joinery and door fitting, our carpenters deliver craftsmanship of the highest standard. We take pride in every joint and finish, ensuring your carpentry work enhances your property and stands the test of time.",
    icon: "Hammer",
    accentColor: "bg-amber-100 text-amber-700",
    features: [
      "Fitted wardrobes and storage",
      "Door hanging and fitting",
      "Skirting boards and architraves",
      "Staircase repairs and installation",
      "Kitchen cabinet installation",
      "Bespoke joinery and woodwork",
    ],
    metaTitle: "Carpentry Services London | Aedis Solutions Ltd",
    metaDescription:
      "Expert carpentry and joinery across London. Bespoke fitted furniture and woodwork by skilled carpenters throughout the city.",
  },
  {
    slug: "general-maintenance",
    name: "General Maintenance",
    shortDescription:
      "Comprehensive maintenance solutions to keep your property in excellent condition year-round.",
    longDescription:
      "From minor repairs to scheduled upkeep, our general property maintenance service covers everything you need to keep your property performing at its best. Our experienced team handles all types of maintenance work efficiently and to a consistently high standard, giving you complete peace of mind.",
    icon: "Wrench",
    accentColor: "bg-blue-100 text-blue-700",
    features: [
      "Scheduled maintenance programmes",
      "Minor repairs and reactive fixes",
      "Full property inspections",
      "Emergency call-out service",
      "Preventative upkeep",
      "Multi-trade capability in one visit",
    ],
    metaTitle: "General Property Maintenance London | Aedis Solutions Ltd",
    metaDescription:
      "Professional general property maintenance across London. Reliable, experienced tradespeople delivering quality maintenance throughout the city.",
  },
  {
    slug: "tiling-building-works",
    name: "Tiling & Building Works",
    shortDescription:
      "Precision tiling and quality building works for all residential and commercial properties.",
    longDescription:
      "Our specialists deliver flawless results across all types of tile and surface, as well as a broad range of building works. From intricate mosaic designs to large-format floor tiles, and from wall rendering to structural repairs, we bring the same precision and care to every job.",
    icon: "LayoutGrid",
    accentColor: "bg-stone-100 text-stone-700",
    features: [
      "Kitchen and bathroom wall tiling",
      "Floor tiling (all materials)",
      "Wet room and shower installations",
      "Large-format tile installation",
      "Wall rendering and plastering",
      "General building repairs",
    ],
    metaTitle: "Tiling & Building Works London | Aedis Solutions Ltd",
    metaDescription:
      "Expert tiling and building works across London. Kitchen, bathroom, floor and wall tiling plus building works throughout the city.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
