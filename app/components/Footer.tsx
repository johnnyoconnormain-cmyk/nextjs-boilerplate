import { site } from "../site-config";
import { Icon } from "./icons";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-blue-100">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 text-lg font-bold text-white">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent text-slate-900">
              <Icon name="roller" width={20} height={20} />
            </span>
            {site.name}
          </div>
          <p className="mt-4 max-w-sm text-sm">
            {site.tagline} in {site.city}, {site.region} and surrounding areas.
            {" "}
            {site.licenseInfo}. Free estimates, guaranteed work.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-white">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={`tel:${site.phoneHref}`}
                className="transition-colors hover:text-white"
              >
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="transition-colors hover:text-white"
              >
                {site.email}
              </a>
            </li>
            <li>{site.hours}</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="#services" className="transition-colors hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#work" className="transition-colors hover:text-white">
                Our Work
              </a>
            </li>
            <li>
              <a href="#reviews" className="transition-colors hover:text-white">
                Reviews
              </a>
            </li>
            <li>
              <a href="#quote" className="transition-colors hover:text-white">
                Free Quote
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Serving {site.serviceAreas.slice(0, 4).join(" · ")} &amp; more</p>
        </div>
      </div>
    </footer>
  );
}
