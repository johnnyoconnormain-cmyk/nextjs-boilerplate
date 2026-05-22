import { site } from "../site-config";
import { Icon } from "./icons";
import BrandLogo from "./BrandLogo";

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-bone/75">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <BrandLogo light />
          <p className="mt-5 max-w-sm text-sm">
            {site.tagline} for {site.city}, {site.region} and{" "}
            {site.areaName}. {site.licenseInfo} · serving the Eastside since{" "}
            {site.established}.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-widest text-bone">
            Contact
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={`tel:${site.phoneHref}`}
                className="flex items-center gap-2 transition-colors hover:text-bone"
              >
                <Icon name="phone" width={15} height={15} />
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2 break-all transition-colors hover:text-bone"
              >
                <Icon name="mail" width={15} height={15} />
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="pin" width={15} height={15} className="mt-0.5 shrink-0" />
              <span>
                {site.address.poBox}
                <br />
                {site.address.city}, {site.address.region}{" "}
                {site.address.postalCode}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Icon name="clock" width={15} height={15} />
              {site.hours}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-widest text-bone">
            Explore
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ["#services", "Services"],
              ["#serve", "Who We Serve"],
              ["#work", "Our Work"],
              ["#about", "About Us"],
              ["#quote", "Request a Service"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="transition-colors hover:text-bone">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-bone/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p>{site.serviceAreas.slice(0, 5).join(" · ")} &amp; more</p>
        </div>
      </div>
    </footer>
  );
}
