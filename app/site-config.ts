// =============================================================================
// REAL business details for BR Landscaping, LLC (Bellevue, WA).
// Taken from the live brlandscaping.com site + the screenshot you shared.
// Edit this file to update copy across the whole site.
// =============================================================================

export const site = {
  name: "BR Landscaping",
  legalName: "BR Landscaping, LLC",
  tagline: "Commercial & Residential Landscaping",
  pitch: "High-Quality Landscape Maintenance & Installation",
  phoneDisplay: "(425) 502-9143",
  phoneHref: "+14255029143",
  email: "info@brlandscaping.com",
  established: 1999,
  get yearsInBusiness() {
    return new Date().getFullYear() - this.established;
  },
  city: "Bellevue",
  region: "WA",
  areaName: "the Eastside",
  serviceAreas: [
    "Bellevue",
    "Kirkland",
    "Redmond",
    "Issaquah",
    "Sammamish",
    "Mercer Island",
    "Newcastle",
    "Renton",
  ],
  address: {
    poBox: "P.O. Box 1373",
    city: "Bellevue",
    region: "WA",
    postalCode: "98009",
  },
  hours: "Mon–Fri: 8:00 AM – 5:00 PM",
  // Add the real WA contractor license # when you have it.
  license: "",
  licenseInfo: "Family-Owned · Licensed & Insured",
  // Drop a logo file in /public and set this (e.g. "/logo.png") to override
  // the built-in BR oval mark.
  logo: "",
  social: { facebook: "", instagram: "", google: "" },
} as const;

// The four customer types they actually serve.
export const audiences = [
  {
    key: "residential",
    title: "Residential",
    blurb:
      "Curb appeal, healthy lawns, and outdoor spaces you actually want to spend time in.",
    icon: "house",
  },
  {
    key: "hoa",
    title: "HOAs",
    blurb:
      "Common areas, entry monuments, and shared landscapes kept consistently sharp.",
    icon: "fence",
  },
  {
    key: "apartments",
    title: "Apartments & Condos",
    blurb:
      "Multifamily landscapes that help units lease faster and tenants stay longer.",
    icon: "building",
  },
  {
    key: "commercial",
    title: "Commercial & Retail",
    blurb:
      "First-impression landscaping for offices, retail centers, and business parks.",
    icon: "store",
  },
];

// Six pillars — the long tail of services is grouped inside, so visitors
// don't drown in a 20-item list like the current site.
export const services = [
  {
    title: "Landscape Design",
    color: "#1d3b6f",
    icon: "leaf",
    blurb:
      "Balanced, proportionate designs that bring plants, softscapes, and hardscapes into one cohesive look.",
    items: [
      "Site evaluation & concept design",
      "Plant selection & seasonal color planning",
      "3-season visual interest",
    ],
  },
  {
    title: "Installation",
    color: "#2f5d3a",
    icon: "shovel",
    blurb:
      "New installations and full renovations that blend naturally with the property — from beds to fences.",
    items: [
      "Sod, beds, trees & shrubs",
      "Fencing & arbors",
      "Drainage systems",
      "Water features",
    ],
  },
  {
    title: "Hardscapes",
    color: "#7a4326",
    icon: "wall",
    blurb:
      "Patios, paths, and walls engineered to add focus and value with minimal maintenance.",
    items: [
      "Patios & walkways",
      "Retaining walls",
      "Rockeries & river beds",
      "Pavers & flagstone",
    ],
  },
  {
    title: "Lawn Care",
    color: "#9ed52d",
    icon: "mower",
    blurb:
      "Lush, meticulously manicured lawns kept that way year-round with a plan built for your turf.",
    items: [
      "Mowing, edging & trimming",
      "Aeration & overseeding",
      "Fertilization",
      "Weed, pest & disease control",
    ],
  },
  {
    title: "Maintenance",
    color: "#1d3b6f",
    icon: "leaf",
    blurb:
      "Year-round care for residential, commercial, HOA, and apartment landscapes — reliable and tidy.",
    items: [
      "Seasonal cleanups",
      "Mulching & pruning",
      "Leaf removal & blowing",
      "Bed & border upkeep",
    ],
  },
  {
    title: "Irrigation & Drainage",
    color: "#2a6f9e",
    icon: "drop",
    blurb:
      "Water-saving irrigation built right and kept running — plus drainage that protects your investment.",
    items: [
      "Sprinkler install & repair",
      "Smart controllers",
      "Drainage & french drains",
      "Winterization",
    ],
  },
];

// Themes pulled from public reviews — replace with verbatim quotes + names
// once you have permission to publish them.
export const testimonials = [
  {
    quote:
      "Our HOA hired BR for our common areas and the difference was night and day. Reliable schedule, sharp results, easy to work with.",
    name: "HOA board member",
    source: "Bellevue, WA",
  },
  {
    quote:
      "They installed a beautiful patio and retained wall in our backyard. Crew was on time, tidy, and the work has held up perfectly.",
    name: "Homeowner",
    source: "Eastside, WA",
  },
  {
    quote:
      "We manage a multi-building apartment community. BR's team keeps it lease-ready year-round — would recommend to any property manager.",
    name: "Property manager",
    source: "Bellevue, WA",
  },
];
