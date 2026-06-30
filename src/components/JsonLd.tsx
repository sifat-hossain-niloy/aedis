export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.aedis.ltd/#business",
    name: "Aedis Solutions Ltd",
    description:
      "Professional property maintenance services across London including plumbing, electrical, carpentry, tiling & building works, and general maintenance.",
    url: "https://www.aedis.ltd",
    email: "hello@aedis.ltd",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3rd Floor, 86-90 Paul Street",
      addressLocality: "London",
      postalCode: "EC2A 4NE",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.5887,
      longitude: -0.2053,
    },
    areaServed: [
      { "@type": "City", name: "London" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Property Maintenance Services",
      itemListElement: [
        "Plumbing",
        "Electrical",
        "Carpentry",
        "General Maintenance",
        "Tiling & Building Works",
      ].map((service, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: { "@type": "Service", name: service },
      })),
    },
    priceRange: "££",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
