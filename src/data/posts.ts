export type PostSection = {
  heading?: string;
  body?: string[];
  list?: string[];
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: number;
  category: string;
  sections: PostSection[];
  metaTitle: string;
  metaDescription: string;
};

export const posts: Post[] = [
  {
    slug: "how-much-does-a-plumber-cost-in-london",
    title: "How Much Does a Plumber Cost in London? (2025 Price Guide)",
    excerpt:
      "Plumbing costs in London vary widely depending on the job and timing. Here is a clear breakdown of what to expect — and how to avoid overpaying.",
    date: "2025-06-15",
    readTime: 5,
    category: "Plumbing",
    metaTitle: "How Much Does a Plumber Cost in London? 2025 Price Guide",
    metaDescription:
      "Wondering what a plumber costs in London? This guide breaks down callout fees, hourly rates, and typical job costs so you know exactly what to expect.",
    sections: [
      {
        heading: "Average plumber costs in London",
        body: [
          "London plumbers typically charge a callout fee of £60–£100, plus an hourly rate of £80–£150 depending on the company, location, and time of day. For out-of-hours and emergency work, those rates can rise to £150–£250 per hour.",
          "Most straightforward jobs — a dripping tap, a leaking pipe under a sink, a running toilet — take between 30 minutes and an hour once the plumber is on site. You should budget for at least one hour of labour even for simple fixes, as most companies apply a minimum charge.",
        ],
      },
      {
        heading: "What affects the price?",
        body: [
          "Several factors push plumbing costs up or down in London:",
        ],
        list: [
          "Emergency vs. scheduled — emergency callouts can cost 2–3× the standard rate",
          "Time of day — evening, weekend, and bank holiday work carries a premium",
          "Type of work — a new bathroom installation is priced very differently from a tap washer replacement",
          "Access difficulty — pipes hidden behind tiling or in awkward spaces take longer",
          "Parts required — always ask whether the quote includes materials or just labour",
        ],
      },
      {
        heading: "Common jobs and typical costs",
        body: [
          "Here is a rough guide to what specific plumbing jobs cost across London:",
        ],
        list: [
          "Dripping tap repair: £70–£150 (including callout)",
          "Leaking pipe repair: £100–£250",
          "Toilet cistern repair: £100–£200",
          "Outside tap installation: £150–£300",
          "Full bathroom installation: £2,000–£5,000+ (labour only)",
          "Emergency burst pipe: £200–£500+",
        ],
      },
      {
        heading: "How to get the best value",
        body: [
          "The best way to avoid being overcharged is to book a scheduled visit rather than an emergency callout whenever the job can wait. Always ask for a written quote before work begins, and check whether VAT and parts are included.",
          "Choosing a local, multi-trade company often works out cheaper than specialist plumbing firms — especially for smaller jobs where the callout fee represents a large proportion of the total cost.",
        ],
      },
    ],
  },
  {
    slug: "5-signs-you-need-an-emergency-electrician",
    title: "5 Warning Signs You Need to Call an Electrician Immediately",
    excerpt:
      "Electrical faults are one of the leading causes of house fires in the UK. These five warning signs mean you should stop what you are doing and call a qualified electrician now.",
    date: "2025-06-22",
    readTime: 4,
    category: "Electrical",
    metaTitle: "5 Signs You Need an Emergency Electrician | Aedis Solutions",
    metaDescription:
      "Electrical problems that are ignored can become dangerous fast. Here are 5 warning signs that mean you should call a qualified electrician straight away.",
    sections: [
      {
        heading: "Do not ignore these warning signs",
        body: [
          "Electrical faults are responsible for around 25,000 house fires every year in the UK. Most of them start with early warning signs that were missed or ignored. If you notice any of the following in your home or property, call a qualified electrician as soon as possible.",
        ],
      },
      {
        heading: "1. Circuit breakers that keep tripping",
        body: [
          "A circuit breaker that trips once is doing its job — protecting the circuit from overload. But if the same breaker trips repeatedly, there is an underlying fault: a short circuit, an overloaded circuit, or a faulty appliance drawing too much current. Reset it once. If it trips again, leave it off and call an electrician.",
        ],
      },
      {
        heading: "2. Flickering or dimming lights",
        body: [
          "Occasional flickering when a high-draw appliance switches on is normal. Persistent flickering — especially across multiple rooms — points to loose wiring, a failing connection, or an overloaded circuit. Never assume it is just the bulb.",
        ],
      },
      {
        heading: "3. Burning smell, scorch marks, or warm sockets",
        body: [
          "A burning smell near a socket, switch, or consumer unit is an emergency. Turn off the power to that circuit at the fuse box immediately. Scorch marks or discolouration around a socket mean arcing has already occurred — the wiring inside has been burning. This needs same-day attention.",
        ],
      },
      {
        heading: "4. Electric shocks from switches or appliances",
        body: [
          "A mild tingle when touching a switch or plug is never normal. It indicates current is flowing where it should not be — through the earthing system, through you. This is a serious fault and should be investigated by a qualified electrician before the circuit is used again.",
        ],
      },
      {
        heading: "5. Wiring that is more than 25–30 years old",
        body: [
          "Old wiring does not fail overnight, but it does degrade. If your property has not had an electrical installation condition report (EICR) in the last 5–10 years, or if you have moved into a property built before 2000 and do not know the history of the electrics, a professional inspection is a sensible precaution.",
        ],
      },
      {
        heading: "What to do if you spot a fault",
        body: [
          "Switch off power to the affected area at the consumer unit if it is safe to do so. Do not attempt to investigate or repair electrical faults yourself — even with the power off, capacitors and other components can hold charge. Call a qualified, Part P registered electrician.",
        ],
      },
    ],
  },
  {
    slug: "property-maintenance-checklist-london-landlords",
    title: "Property Maintenance Checklist for London Landlords (Seasonal Guide)",
    excerpt:
      "Staying on top of property maintenance protects your investment, keeps tenants happy, and keeps you compliant with your legal obligations. Here is a practical seasonal checklist.",
    date: "2025-07-01",
    readTime: 6,
    category: "General Maintenance",
    metaTitle: "Property Maintenance Checklist for London Landlords | Aedis Solutions",
    metaDescription:
      "A practical seasonal property maintenance checklist for London landlords — covering plumbing, electrics, carpentry and building works to keep properties in top condition.",
    sections: [
      {
        heading: "Why regular maintenance matters",
        body: [
          "As a London landlord, you have a legal duty to keep your property safe and in good repair under the Landlord and Tenant Act 1985 and the Homes (Fitness for Human Habitation) Act 2018. Beyond your legal obligations, a well-maintained property commands higher rents, retains tenants for longer, and avoids the expensive emergency repairs that come from neglect.",
          "Breaking maintenance into seasonal tasks makes it manageable. Here is what to check and when.",
        ],
      },
      {
        heading: "Spring",
        list: [
          "Inspect the roof for winter damage — missing or cracked tiles, blocked gutters",
          "Check exterior brickwork and pointing for deterioration",
          "Test all smoke and carbon monoxide alarms and replace batteries",
          "Check pipework for any freeze damage that has become apparent as temperatures rise",
          "Inspect garden fencing, gates, and boundary walls",
          "Service the boiler ahead of the next heating season",
        ],
      },
      {
        heading: "Summer",
        list: [
          "Ideal time for planned electrical work — less disruption to tenants",
          "Repaint exterior woodwork — windows, doors, fascias",
          "Inspect and clear gutters and downpipes",
          "Check flat roofs and felt for blistering or cracking",
          "Address any damp patches that appeared during winter",
          "Deep clean communal areas if applicable",
        ],
      },
      {
        heading: "Autumn",
        list: [
          "Bleed radiators and check the heating system is working before winter",
          "Insulate exposed pipes in loft spaces and outbuildings",
          "Clear gutters of fallen leaves",
          "Check and test the boiler — book a gas safety certificate if due",
          "Inspect window seals and draught-proof doors",
          "Check loft insulation is adequate",
        ],
      },
      {
        heading: "Winter",
        list: [
          "Know where the stopcock is and ensure tenants do too",
          "Keep heating on a low setting in void properties to prevent frozen pipes",
          "Respond quickly to reports of leaks or damp — cold weather accelerates damage",
          "Check outdoor taps and garden hose connections are turned off and drained",
        ],
      },
      {
        heading: "Consider a maintenance contract",
        body: [
          "Many London landlords find that an annual maintenance contract with a multi-trade company works out significantly cheaper than managing one-off callouts. You get priority response times, consistent tradespeople who know your properties, and predictable costs that are easier to budget for.",
        ],
      },
    ],
  },
  {
    slug: "bathroom-tiling-cost-guide-london",
    title: "Bathroom Tiling Cost Guide: What to Expect in London (2025)",
    excerpt:
      "Tiling is one of the most visible and durable upgrades you can make to a bathroom. Here is what professional tiling costs in London in 2025, and what affects the price.",
    date: "2025-07-05",
    readTime: 5,
    category: "Tiling",
    metaTitle: "Bathroom Tiling Cost Guide London 2025 | Aedis Solutions",
    metaDescription:
      "How much does bathroom tiling cost in London? This guide covers supply and labour costs, what affects pricing, and how to get the best result for your budget.",
    sections: [
      {
        heading: "Labour costs for tiling in London",
        body: [
          "A professional tiler in London typically charges £200–£350 per day. The exact day rate depends on their experience, the complexity of the job, and whether they are a sole trader or working through a company.",
          "A standard bathroom with straightforward wall tiles and a tiled floor takes 2–4 days for a skilled tiler. More complex layouts — herringbone, large-format tiles, or intricate feature walls — take longer and cost more.",
        ],
      },
      {
        heading: "Supply costs: how much do tiles cost?",
        body: [
          "Tile costs vary enormously depending on the material and format:",
        ],
        list: [
          "Budget ceramic tiles: £10–£25 per m²",
          "Mid-range porcelain: £25–£60 per m²",
          "Large-format porcelain (600×600mm+): £40–£100 per m²",
          "Natural stone (marble, travertine): £60–£200+ per m²",
          "Handmade or designer tiles: £100–£400+ per m²",
        ],
      },
      {
        heading: "Typical bathroom tiling costs",
        body: [
          "Putting labour and materials together, here is what you should budget for a typical London bathroom:",
        ],
        list: [
          "Small shower enclosure (2 m²): £400–£900",
          "Standard bathroom floor (4–6 m²): £500–£1,200",
          "Full bathroom wall tiling (12–20 m²): £1,200–£3,500",
          "Complete bathroom retile (walls and floor): £2,000–£5,500",
        ],
      },
      {
        heading: "What affects the cost?",
        list: [
          "Tile size — large-format tiles require more precision and specialist equipment",
          "Pattern — diagonal or herringbone layouts create more cuts and take longer",
          "Surface preparation — old tiles that need removing or walls that need levelling add time and cost",
          "Grout and adhesive type — waterproof systems for wet rooms cost more",
          "Access — awkward spaces or high ceilings add difficulty",
        ],
      },
      {
        heading: "Tips for getting the best result",
        body: [
          "Always order 10–15% more tiles than the calculated area to account for cuts and breakages. Choose your tiles before getting quotes so suppliers can give accurate material costs. And ask to see examples of previous tiling work before committing — consistency of grout lines and precision of cuts is a clear indicator of skill level.",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
