import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { site } from "./site-config";

const description = `${site.name} — ${site.tagline} serving ${site.city}, ${site.region} and ${site.areaName} since ${site.established}. Interior, exterior, historic restoration, floor coatings & more. ${site.licenseInfo}. Free estimates: ${site.phoneDisplay}.`;

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Painters in ${site.city}, ${site.region}`,
    template: `%s | ${site.name}`,
  },
  description,
  keywords: [
    "Ellensburg painter",
    "Ellensburg painting contractor",
    "Kittitas Valley painters",
    "interior painting Ellensburg",
    "exterior painting Ellensburg",
    "historic home restoration WA",
    "epoxy floor coating Ellensburg",
  ],
  openGraph: {
    title: `${site.name} | Painting Contractor in ${site.city}, ${site.region}`,
    description,
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HousePainter",
  name: site.name,
  description,
  telephone: site.phoneHref,
  email: site.email,
  foundingDate: String(site.established),
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
