// =============================================================================
// EDIT THIS FILE with the real business details before going live.
// Everything the site displays (phone, email, address, hours, areas) comes
// from here so you only change it in one place.
// =============================================================================

export const site = {
  name: "Mario's Painting",
  tagline: "Professional Interior & Exterior Painting",
  // Use a real, dialable number. Format the display however you like;
  // `phoneHref` must be digits only with country code.
  phoneDisplay: "(555) 123-4567",
  phoneHref: "+15551234567",
  email: "hello@mariospainting.org",
  // Service area — shown in the hero, footer, and SEO data.
  city: "Springfield",
  region: "IL",
  serviceAreas: [
    "Springfield",
    "Chatham",
    "Rochester",
    "Sherman",
    "Riverton",
    "Auburn",
    "New Berlin",
    "Pawnee",
  ],
  address: {
    street: "123 Main Street",
    city: "Springfield",
    region: "IL",
    postalCode: "62701",
  },
  hours: "Mon–Sat: 7:00 AM – 6:00 PM",
  yearsInBusiness: 20,
  licenseInfo: "Licensed & Insured",
  // Social links — leave "" to hide.
  social: {
    facebook: "",
    instagram: "",
    google: "",
  },
} as const;

export const services = [
  {
    title: "Interior Painting",
    description:
      "Walls, ceilings, trim, and accent finishes that transform any room. Clean lines, low-odor paints, and zero mess left behind.",
    icon: "roller",
  },
  {
    title: "Exterior Painting",
    description:
      "Boost curb appeal and protect your home from the elements with durable, weather-resistant coatings and expert prep.",
    icon: "house",
  },
  {
    title: "Cabinet Refinishing",
    description:
      "Give your kitchen a brand-new look for a fraction of a remodel with factory-smooth cabinet painting and refinishing.",
    icon: "cabinet",
  },
  {
    title: "Drywall & Repair",
    description:
      "Cracks, holes, water damage, and texture matching — repaired and painted so you'd never know it was there.",
    icon: "patch",
  },
  {
    title: "Deck & Fence Staining",
    description:
      "Protect and beautify outdoor wood with premium stains and sealants that stand up to sun, rain, and snow.",
    icon: "deck",
  },
  {
    title: "Commercial Painting",
    description:
      "Offices, retail, and rental properties painted on schedule and on budget — with flexible after-hours scheduling.",
    icon: "building",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Mario and his crew repainted our entire interior in three days. Spotless work, on time, and they treated our home like their own. Couldn't be happier.",
    name: "Jennifer R.",
    location: "Homeowner, Springfield",
  },
  {
    quote:
      "Best contractor experience we've had. Honest quote, no surprises, and the exterior looks better than the day we bought the house.",
    name: "Mark T.",
    location: "Homeowner, Chatham",
  },
  {
    quote:
      "We use Mario's Painting for all of our rental turnovers. Reliable, fast, and the price is always fair. Highly recommend.",
    name: "Diana P.",
    location: "Property Manager, Rochester",
  },
] as const;
