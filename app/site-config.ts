// =============================================================================
// REAL business details for Mario's Painting, Ellensburg WA.
// Taken from the live mariospainting.org site (header + services page).
// =============================================================================

export const site = {
  name: "Mario's Painting",
  // Their actual tagline strip from the site header.
  tagline: "Interior · Exterior · Commercial · Residential",
  pitch: "Highly Professional Painting",
  // Real number shown on the live site (NOT the outdated directory listings).
  phoneDisplay: "509-859-3263",
  phoneHref: "+15098593263",
  email: "marchesipainter@gmail.com",
  // Washington State contractor license # shown on their site.
  license: "MARIOP*852LK",
  established: 2006,
  get yearsInBusiness() {
    return new Date().getFullYear() - this.established;
  },
  city: "Ellensburg",
  region: "WA",
  areaName: "the Kittitas Valley",
  serviceAreas: [
    "Ellensburg",
    "Kittitas",
    "Cle Elum",
    "Roslyn",
    "South Cle Elum",
    "Thorp",
    "Easton",
    "Vantage",
  ],
  address: {
    street: "604 E 5th Ave",
    city: "Ellensburg",
    region: "WA",
    postalCode: "98926",
  },
  hours: "Mon–Fri: 8:00 AM – 5:00 PM",
  licenseInfo: "Licensed, Bonded & Insured",
  // Drop a real logo file in /public and set this (e.g. "/logo.png").
  // Left blank → the built-in Trinacria emblem + wordmark is used.
  logo: "",
  social: { facebook: "", instagram: "", google: "" },
} as const;

// Service copy is taken from their live site (lightly tidied).
export const services = [
  {
    title: "Interior Painting",
    swatch: "#6a1f5c",
    description:
      "We strive to make interior painting a low-stress experience. We're unobtrusive, quiet, and clean — well-organized planning ensures no time is wasted.",
    icon: "roller",
  },
  {
    title: "Exterior Painting",
    swatch: "#4f8a2f",
    description:
      "Preparation is the key to exterior painting. Our crew has an eye for detail, taking every necessary step to make sure your home looks outstanding.",
    icon: "house",
  },
  {
    title: "Cabinet Painting",
    swatch: "#9a5a1f",
    description:
      "Tired oak made new again. Our cabinet refinishing turns dated kitchens into bright, modern spaces — see the before & after below.",
    icon: "cabinet",
  },
  {
    title: "Wood Restoration",
    swatch: "#7a4326",
    description:
      "Choosing the right contractor makes all the difference. From decks to fences, we have plenty of wood restoration experience.",
    icon: "log",
  },
  {
    title: "Commercial",
    swatch: "#3a4a63",
    description:
      "Storefronts, offices, and rental properties painted on schedule and on budget, with flexible scheduling to fit your business.",
    icon: "building",
  },
  {
    title: "Residential",
    swatch: "#2f5d3a",
    description:
      "From a single room to a whole home, we treat your house with the care, cleanliness, and respect it deserves.",
    icon: "heritage",
  },
];

// Paraphrased from the themes in public Angi / HomeAdvisor reviews.
// Replace with verbatim quotes + names once you have permission.
export const testimonials = [
  {
    quote:
      "On time and on budget from start to finish. Mario was patient helping us choose colors, and the workmanship was outstanding.",
    name: "Verified homeowner",
    source: "Angi review",
  },
  {
    quote:
      "Friendly, professional, and thorough. They kept everything clean and quiet and treated our older home with real care.",
    name: "Verified homeowner",
    source: "HomeAdvisor review",
  },
  {
    quote:
      "Courteous crew that made every commitment on time. We'd absolutely hire Mario's Painting again.",
    name: "Verified homeowner",
    source: "HomeAdvisor review",
  },
];
