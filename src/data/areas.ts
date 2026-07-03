export type Area = {
  slug: string;
  name: string;
  region: string;
  intro: string;
  servicesNote: string;
  landmarks: string[];
  metaTitle: string;
  metaDescription: string;
};

export const areas: Area[] = [
  {
    slug: "north-london",
    name: "North London",
    region: "North London",
    intro:
      "Aedis Solutions Ltd provides property maintenance services across North London, covering residential and commercial properties from Barnet to Islington. Our multi-trade team handles plumbing, electrical, carpentry, tiling, and general maintenance — all under one roof.",
    servicesNote:
      "Whether you need an emergency plumber, a qualified electrician, or a skilled tiler for a bathroom renovation, our team is based locally and typically available within 24–48 hours for non-emergency work and same-day for emergencies.",
    landmarks: [
      "Barnet",
      "Finchley",
      "Hendon",
      "Golders Green",
      "Hampstead",
      "Highgate",
      "Archway",
      "Islington",
    ],
    metaTitle: "Property Maintenance North London | Aedis Solutions Ltd",
    metaDescription:
      "Professional property maintenance across North London. Plumbing, electrical, carpentry, tiling, and general maintenance from a trusted local team. Call 0204 652 1027.",
  },
  {
    slug: "hendon",
    name: "Hendon",
    region: "North West London",
    intro:
      "Aedis Solutions Ltd is your local property maintenance company in Hendon. We serve homeowners, landlords, and businesses across NW4 and the surrounding areas with a full range of trade services delivered to a consistently high standard.",
    servicesNote:
      "From a dripping tap to a full bathroom renovation, our Hendon-based team covers every trade you need. No job is too small — and our multi-trade capability means you deal with one company rather than coordinating multiple contractors.",
    landmarks: [
      "Hendon Central",
      "Brent Cross",
      "Golders Green",
      "Mill Hill",
      "West Hendon",
      "Church End",
    ],
    metaTitle: "Property Maintenance Hendon NW4 | Aedis Solutions Ltd",
    metaDescription:
      "Trusted property maintenance in Hendon and NW4. Plumbing, electrical, tiling, carpentry and general maintenance. Local team, fast response. Call 0204 652 1027.",
  },
  {
    slug: "finchley",
    name: "Finchley",
    region: "North London",
    intro:
      "Aedis Solutions Ltd provides reliable property maintenance across Finchley and the surrounding N2, N3, and N12 postcodes. We work with homeowners, landlords, and letting agents to keep properties in excellent condition year-round.",
    servicesNote:
      "Our trades cover plumbing, electrical work, carpentry, tiling, and general maintenance. We offer both scheduled maintenance programmes and reactive callouts — often available same-day for urgent issues.",
    landmarks: [
      "East Finchley",
      "North Finchley",
      "Finchley Central",
      "Woodside Park",
      "Whetstone",
      "Friern Barnet",
    ],
    metaTitle: "Property Maintenance Finchley N2 N3 N12 | Aedis Solutions Ltd",
    metaDescription:
      "Reliable property maintenance across Finchley, N2, N3, and N12. Plumbing, electrical, tiling, carpentry and more from a trusted local team. Call 0204 652 1027.",
  },
  {
    slug: "golders-green",
    name: "Golders Green",
    region: "North West London",
    intro:
      "Aedis Solutions Ltd serves homeowners and landlords in Golders Green and the wider NW11 area with professional property maintenance services. We are a multi-trade team, which means one call covers everything from a leaking pipe to a full tiling project.",
    servicesNote:
      "Golders Green is one of our core service areas. Our team understands the mix of property types in the area — from Victorian terraces to modern apartments — and adapts our approach to suit each property.",
    landmarks: [
      "Golders Green",
      "Temple Fortune",
      "Childs Hill",
      "Hampstead Garden Suburb",
      "North End",
    ],
    metaTitle: "Property Maintenance Golders Green NW11 | Aedis Solutions Ltd",
    metaDescription:
      "Expert property maintenance in Golders Green and NW11. Plumbing, electrical, carpentry, tiling and general maintenance. Call Aedis Solutions on 0204 652 1027.",
  },
];

export function getAreaBySlug(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}
