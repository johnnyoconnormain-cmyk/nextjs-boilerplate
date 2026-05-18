import { site } from "../site-config";
import { Icon, Trinacria } from "./icons";

const points = [
  "Unobtrusive, quiet, and clean on every job site",
  "Well-organized planning so no time is wasted",
  "Thorough prep — the real key to a lasting finish",
  "Patient, honest color guidance from Mario himself",
  "On time and on budget, with commitments kept",
];

export default function About() {
  return (
    <section id="about" className="bg-paper py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="order-2 lg:order-1">
          <div className="relative aspect-[5/4] overflow-hidden rounded-sm bg-plum-deep shadow-xl ring-1 ring-ink/10">
            <Trinacria
              size={300}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-paper/10"
            />
            <div className="absolute inset-0 grid place-items-center p-8 text-center text-paper">
              <div>
                <p className="font-display text-6xl font-bold">
                  {site.yearsInBusiness}+
                </p>
                <p className="mt-2 text-lg font-semibold">
                  years painting {site.city} &amp; {site.areaName}
                </p>
                <p className="mt-4 text-sm text-paper/70">
                  Swap for a photo of Mario &amp; the crew on a job site.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-green">
            About {site.name}
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
            Local painters who show up &amp; do it right
          </h2>
          <p className="mt-4 text-lg text-ink/65">
            Since {site.established}, Mario&apos;s Painting has been the
            careful, dependable choice for homes and businesses across{" "}
            {site.city} and {site.areaName}. We strive to make painting a
            low-stress experience — you&apos;ll barely know we&apos;re there
            until the work speaks for itself.
          </p>

          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-green/15 text-green-deep">
                  <Icon name="check" width={14} height={14} />
                </span>
                <span className="text-ink/75">{p}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#quote"
              className="inline-flex items-center gap-2 bg-green px-7 py-4 text-base font-bold uppercase tracking-wide text-paper shadow-[4px_4px_0_0_var(--plum)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_0_var(--plum)]"
            >
              Start Your Project
              <Icon name="arrow" width={18} height={18} />
            </a>
            <span className="text-sm text-ink/55">
              WA License {site.license}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
