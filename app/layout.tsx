import type { Metadata } from "next";
import "./globals.css";
import { site } from "./site-config";

const description = `${site.name} provides professional interior and exterior painting, cabinet refinishing, and more in ${site.city}, ${site.region} and surrounding areas. ${site.licenseInfo}. Free estimates — call ${site.phoneDisplay}.`;

export const metadata: Metadata = {
  title: {
    default: `${site.name} | ${site.tagline} in ${site.city}, ${site.region}`,
    template: `%s | ${site.name}`,
  },
  description,
  keywords: [
    "painting contractor",
    "interior painting",
    "exterior painting",
    "house painters",
    "cabinet refinishing",
    `painters ${site.city}`,
    `${site.city} painting company`,
  ],
  openGraph: {
    title: `${site.name} | ${site.tagline}`,
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
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: "US",
  },
  areaServed: site.serviceAreas.map((a) => ({ "@type": "City", name: a })),
  openingHours: site.hours,
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
