export type Testimonial = {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah M.",
    location: "Finchley",
    rating: 5,
    text: "Absolutely brilliant service from start to finish. The team arrived exactly on time, completed the work to an excellent standard, and left everything spotless. Would highly recommend to anyone.",
    service: "General Maintenance",
  },
  {
    id: 2,
    name: "James K.",
    location: "Hendon",
    rating: 5,
    text: "Had Aedis Solutions install a new bathroom and the result is stunning. Professional, tidy, and great attention to detail. Very happy with the outcome and the price was very fair.",
    service: "Plumbing & Tiling",
  },
  {
    id: 3,
    name: "Patricia O.",
    location: "Golders Green",
    rating: 5,
    text: "Quick response to an emergency call-out, problem solved efficiently and at a reasonable price. Refreshingly honest and professional — exactly the kind of company you want when things go wrong.",
    service: "Plumbing",
  },
  {
    id: 4,
    name: "David T.",
    location: "South West London",
    rating: 5,
    text: "Aedis rewired our property and the standard of work was excellent. Clean, professional, and completed on time. Every question was answered clearly and the price was very fair.",
    service: "Electrical",
  },
  {
    id: 5,
    name: "Leila H.",
    location: "Barnet",
    rating: 5,
    text: "The fitted wardrobes look incredible — exactly what I envisioned. Aedis clearly take pride in their work. Professional from the first visit right through to the final tidy-up.",
    service: "Carpentry",
  },
  {
    id: 6,
    name: "Michael B.",
    location: "Finchley",
    rating: 5,
    text: "Used Aedis for full electrical testing and new lighting in our office. They worked around our hours, caused minimal disruption, and the quality of workmanship is excellent throughout.",
    service: "Electrical",
  },
];
