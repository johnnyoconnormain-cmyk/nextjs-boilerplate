import { site } from "../site-config";
import { Icon, BROval } from "./icons";

const points = [
  "Family-owned and operated since 1999 — same people, same standards",
  "Reliable, scheduled service so your property stays consistently sharp",
  "Practical landscape design that respects the Pacific Northwest setting",
  "Crews trained in lawn care, irrigation, and hardscape — not just mowing",
  "Honest quotes, clear communication, no surprise upcharges",
];

export default function About() {
  return (
    <section id="about" className="bg-bone py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="order-2 lg:order-1 lg:col-span-5">
          <div className="relative aspect-[5/4] overflow-hidden rounded-3xl bg-navy-deep shadow-xl ring-1 ring-ink/10">
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-1/2"
              style={{
                background:
                  "linear-gradient(180deg, #4a7eb6 0%, #6fa8d8 60%, transparent 100%)",
              }}
            />
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-1/2 mow-stripes"
              style={{ background: "#2f5d3a" }}
            />
            <div className="absolute inset-0 grid place-items-center">
              <BROval size={120} className="opacity-90" />
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 lg:col-span-7">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-lime-deep">
            About {site.name}
          </p>
          <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Family-owned. <span className="text-navy">{site.yearsInBusiness}+ years.</span>{" "}
            Bellevue-rooted.
          </h2>
          <p className="mt-4 text-lg text-ink/65">
            We&apos;ve been creating and maintaining landscapes across{" "}
            {site.city} and {site.areaName} since {site.established}. Our
            crews handle the full picture — design, install, hardscapes, lawn
            care, irrigation, and ongoing maintenance — so your property has
            one team accountable for the whole thing.
          </p>

          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-lime text-navy-deep">
                  <Icon name="check" width={14} height={14} />
                </span>
                <span className="text-ink/75">{p}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#quote"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-4 text-base font-extrabold uppercase tracking-wide text-bone transition-colors hover:bg-navy-deep"
            >
              Start your project
              <Icon name="arrow" width={18} height={18} />
            </a>
            <span className="text-sm text-ink/55">
              {site.licenseInfo}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
