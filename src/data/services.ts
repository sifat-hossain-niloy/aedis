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

export const services: Service[] = [
  {
    slug: "general-maintenance",
    name: "General Property Maintenance",
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
      "Professional general property maintenance in London. Reliable, experienced tradespeople serving residential and commercial clients across the city.",
  },
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
      "Reliable plumbing in London. Emergency repairs to full installations — Aedis Solutions serves residential and commercial clients across the city.",
  },
  {
    slug: "electrical",
    name: "Electrical",
    shortDescription:
      "Safe, reliable electrical services delivered by experienced, qualified electricians.",
    longDescription:
      "Safety and quality are at the heart of our electrical services. Whether you need new sockets, full rewires, lighting installations, or fault finding, our electricians deliver work that meets all required UK standards and regulations, giving you complete confidence in every job.",
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
      "Professional electrical services in London. Safe, qualified electricians serving residential and commercial clients across the city.",
  },
  {
    slug: "tiling",
    name: "Tiling",
    shortDescription:
      "Precision tiling for kitchens, bathrooms, floors, and all wall surfaces.",
    longDescription:
      "Our tiling specialists deliver flawless results across all types of tile and surface. From intricate mosaic designs to large-format floor tiles, we bring precision and care to every job, ensuring a finish that is both beautiful and built to last for years to come.",
    icon: "LayoutGrid",
    accentColor: "bg-stone-100 text-stone-700",
    features: [
      "Kitchen and bathroom wall tiling",
      "Floor tiling (all materials)",
      "Wet room and shower installations",
      "Mosaic and feature tile work",
      "Tile repairs and re-grouting",
      "Large-format tile installation",
    ],
    metaTitle: "Tiling Services London | Aedis Solutions Ltd",
    metaDescription:
      "Expert tiling in London. Kitchen, bathroom, floor and wall tiling by experienced specialists across the city.",
  },
  {
    slug: "alarms",
    name: "Alarms",
    shortDescription:
      "Professional alarm system installation and maintenance to secure your property.",
    longDescription:
      "Protect what matters most with our professional alarm installation and maintenance service. We install and service a range of intruder alarm systems for residential and commercial properties, providing reliable security and the peace of mind that comes with a properly protected property.",
    icon: "BellRing",
    accentColor: "bg-red-100 text-red-700",
    features: [
      "Intruder alarm installation",
      "Alarm system servicing and maintenance",
      "Wireless and wired alarm systems",
      "Upgrades to existing systems",
      "Regular testing and certification",
      "Commercial and residential systems",
    ],
    metaTitle: "Alarm Installation London | Aedis Solutions Ltd",
    metaDescription:
      "Professional alarm installation and maintenance in London. Securing homes and businesses across the city.",
  },
  {
    slug: "cctv",
    name: "CCTV",
    shortDescription:
      "High-definition CCTV installation for comprehensive property security.",
    longDescription:
      "Our CCTV solutions provide clear, reliable surveillance for homes and businesses. From single cameras to full multi-site systems, we design, install, and maintain CCTV setups that give you full visibility and control over your property at all times, including remote viewing access.",
    icon: "Camera",
    accentColor: "bg-slate-100 text-slate-700",
    features: [
      "HD and 4K camera installation",
      "Indoor and outdoor camera systems",
      "Remote viewing and app setup",
      "Full system design and planning",
      "Recording and storage solutions",
      "System maintenance and upgrades",
    ],
    metaTitle: "CCTV Installation London | Aedis Solutions Ltd",
    metaDescription:
      "Professional CCTV installation in London. HD security cameras for homes and businesses across the city.",
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
      "Expert carpentry and joinery in London. Bespoke fitted furniture and woodwork by skilled carpenters across the city.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
