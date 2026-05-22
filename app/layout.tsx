import type { Metadata } from "next";
import "./globals.css";
import { site } from "./site-config";

const description = `${site.legalName} — ${site.tagline}. Landscape design, installation, hardscapes, lawn care, and year-round maintenance for ${site.city}, ${site.region} and ${site.areaName}. Family-owned since ${site.established}. Call ${site.phoneDisplay}.`;

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Landscape Design, Installation & Maintenance in ${site.city}, ${site.region}`,
    template: `%s | ${site.name}`,
  },
  description,
  keywords: [
    "Bellevue landscaping",
    "landscaping Bellevue WA",
    "Eastside landscape company",
    "HOA landscape maintenance Bellevue",
    "commercial landscaping Bellevue",
    "hardscape Bellevue",
    "lawn care Bellevue",
    "irrigation Bellevue",
  ],
  openGraph: {
    title: `${site.name} | Landscaping in ${site.city}, ${site.region}`,
    description,
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LandscapeService",
  name: site.legalName,
  description,
  telephone: site.phoneHref,
  email: site.email,
  foundingDate: String(site.established),
  address: {
    "@type": "PostalAddress",
    postOfficeBoxNumber: site.address.poBox,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: "US",
  },
  areaServed: site.serviceAreas.map((a) => ({ "@type": "City", name: a })),
  openingHours: "Mo-Fr 08:00-17:00",
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
