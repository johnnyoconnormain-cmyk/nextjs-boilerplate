import { site } from "../site-config";
import { Icon } from "./icons";
import BrandLogo from "./BrandLogo";

export default function Footer() {
  return (
    <footer className="bg-plum-deep text-paper/75">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <BrandLogo light />
          <p className="mt-4 max-w-sm text-sm">
            {site.tagline}. Serving {site.city}, {site.region} and{" "}
            {site.areaName} since {site.established}. {site.licenseInfo} — WA
            License {site.license}.
          </p>
        </div>

        <div>
          <h3 className="font-display font-bold uppercase tracking-wide text-paper">
            Contact
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={`tel:${site.phoneHref}`}
                className="flex items-center gap-2 transition-colors hover:text-paper"
              >
                <Icon name="phone" width={15} height={15} />
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2 break-all transition-colors hover:text-paper"
              >
                <Icon name="mail" width={15} height={15} />
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Icon name="pin" width={15} height={15} />
              {site.address.street}, {site.address.city}, {site.address.region}{" "}
              {site.address.postalCode}
            </li>
            <li className="flex items-center gap-2">
              <Icon name="clock" width={15} height={15} />
              {site.hours}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display font-bold uppercase tracking-wide text-paper">
            Explore
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ["#services", "Services"],
              ["#work", "Photo Galleries"],
              ["#about", "About Us"],
              ["#reviews", "Reviews"],
              ["#quote", "Free Estimate"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="transition-colors hover:text-paper">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>{site.serviceAreas.slice(0, 5).join(" · ")} &amp; more</p>
        </div>
      </div>
    </footer>
  );
}
