import { site } from "../site-config";
import { Icon } from "./icons";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy-deep text-bone">
      {/* Layered sky → green hero stage (placeholder for a real photo). */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #4a7eb6 0%, #6fa8d8 35%, #cfe1c2 62%, #5a9046 75%, #2f5d3a 100%)",
        }}
      />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-32 mow-stripes" />

      <div className="relative mx-auto grid max-w-7xl items-end gap-10 px-4 pb-24 pt-24 sm:px-6 lg:grid-cols-12 lg:px-8 lg:pb-32 lg:pt-28">
        <div className="animate-fade-up lg:col-span-8">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-bone/15 px-3 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-bone backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-lime" />
            Family-owned · {site.city}, {site.region} · Since {site.established}
          </p>
          <h1 className="text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-[5.25rem]">
            Landscapes,
            <br />
            <span className="text-lime">done properly.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-bone/90">
            Design, installation, hardscapes, and year-round maintenance for
            homes, HOAs, apartments, and businesses across {site.city} and{" "}
            {site.areaName}. Reliable, sharp, and built to add real value to
            your property.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#quote"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-lime px-7 py-4 text-base font-extrabold uppercase tracking-wide text-navy-deep transition-transform hover:scale-[1.03]"
            >
              Request a Service
              <Icon name="arrow" width={18} height={18} />
            </a>
            <a
              href={`tel:${site.phoneHref}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-bone/40 bg-bone/10 px-7 py-4 text-base font-bold text-bone backdrop-blur transition-colors hover:bg-bone/20"
            >
              <Icon name="phone" width={18} height={18} />
              {site.phoneDisplay}
            </a>
          </div>

          <ul className="mt-9 flex flex-wrap gap-x-7 gap-y-2 text-sm text-bone/85">
            {[
              `${site.yearsInBusiness}+ years on the Eastside`,
              site.licenseInfo,
              "Free estimates, no pressure",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Icon name="check" width={16} height={16} className="text-lime" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* The Money Magazine hook — actually their best line. */}
        <div className="animate-fade-up lg:col-span-4">
          <div className="relative ml-auto max-w-sm rounded-3xl bg-bone p-7 text-ink shadow-2xl">
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-lime-deep">
              By the numbers
            </span>
            <p className="mt-3 text-5xl font-black text-navy">100–200%</p>
            <p className="mt-2 text-sm font-semibold text-ink/70">
              Recovery value commercial landscaping can deliver at the time of
              sale.
            </p>
            <p className="mt-3 text-[0.7rem] font-medium uppercase tracking-widest text-ink/45">
              — Money Magazine
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl bg-navy-deep p-4 text-bone">
                <p className="text-3xl font-black text-lime">
                  {site.yearsInBusiness}+
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-bone/75">
                  Years in business
                </p>
              </div>
              <div className="rounded-xl bg-bone-deep p-4">
                <p className="text-3xl font-black text-navy">4</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-ink/65">
                  Property types served
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
