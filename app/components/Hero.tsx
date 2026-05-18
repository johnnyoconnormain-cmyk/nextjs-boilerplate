import { site } from "../site-config";
import { Icon, Trinacria } from "./icons";

const swatches = [
  { c: "#6a1f5c", label: "Plum" },
  { c: "#4f8a2f", label: "Garden" },
  { c: "#c98a2b", label: "Ochre" },
  { c: "#3a4a63", label: "Slate" },
  { c: "#7a4326", label: "Walnut" },
  { c: "#2f5d3a", label: "Pine" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-plum-deep text-paper">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #fff 0 2px, transparent 2px 22px)",
        }}
      />
      <Trinacria
        size={420}
        className="pointer-events-none absolute -right-24 -top-16 text-paper/[0.05]"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:py-28">
        <div className="animate-fade-up lg:col-span-7">
          <p className="mb-5 inline-flex items-center gap-2 border border-paper/25 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-paper/85">
            <span className="inline-block h-2 w-2 rounded-full bg-green" />
            Ellensburg &amp; {site.areaName} · Since {site.established}
          </p>
          <h1 className="font-display text-4xl font-bold uppercase leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.7rem]">
            Highly
            <span className="relative mx-2 inline-block text-green">
              Professional
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="10"
                viewBox="0 0 200 10"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M2 7c40-5 90-6 196-3"
                  fill="none"
                  stroke="var(--green)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            Painting
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-paper/80">
            For nearly {site.yearsInBusiness} years, Mario has painted{" "}
            {site.city}&apos;s homes, historic bungalows, and businesses the
            careful way — unobtrusive, quiet, and clean, with work finished on
            time and on budget. No gimmicks. Just craftsmanship that lasts.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#quote"
              className="inline-flex items-center justify-center gap-2 bg-green px-7 py-4 text-base font-bold uppercase tracking-wide text-paper shadow-[4px_4px_0_0_rgba(0,0,0,0.35)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.35)]"
            >
              Get My Free Estimate
              <Icon name="arrow" width={18} height={18} />
            </a>
            <a
              href={`tel:${site.phoneHref}`}
              className="inline-flex items-center justify-center gap-2 border border-paper/35 px-7 py-4 text-base font-bold text-paper transition-colors hover:bg-paper/10"
            >
              <Icon name="phone" width={18} height={18} />
              {site.phoneDisplay}
            </a>
          </div>

          <ul className="mt-9 flex flex-wrap gap-x-7 gap-y-2 text-sm text-paper/75">
            {[
              site.licenseInfo,
              `License ${site.license}`,
              "On time & on budget",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Icon name="check" width={16} height={16} className="text-green" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-fade-up lg:col-span-5">
          <div className="relative mx-auto max-w-sm">
            <div className="rotate-[2deg] border-4 border-paper bg-paper p-3 shadow-2xl">
              <div className="grid grid-cols-2">
                {swatches.map((s, i) => (
                  <div
                    key={s.label}
                    className="flex flex-col justify-between p-4 text-white"
                    style={{ background: s.c, aspectRatio: "1.4" }}
                  >
                    <span className="text-[0.65rem] font-bold uppercase tracking-widest opacity-80">
                      No. {i + 1}
                    </span>
                    <span className="font-display text-lg">{s.label}</span>
                  </div>
                ))}
              </div>
              <p className="px-1 pb-1 pt-3 text-center font-display text-sm text-ink">
                Mario&apos;s hand-mixed color fan
              </p>
            </div>
            <div className="absolute -right-4 -top-6 -rotate-12 rounded-full border-[3px] border-green bg-paper px-4 py-3 text-center shadow-lg">
              <span className="block font-display text-2xl font-bold leading-none text-plum">
                {site.yearsInBusiness}+
              </span>
              <span className="block text-[0.6rem] font-bold uppercase tracking-widest text-green-deep">
                Years
              </span>
            </div>
            <div
              aria-hidden
              className="animate-drip absolute -bottom-7 left-10 h-8 w-2 rounded-b-full bg-green"
            />
            <div
              aria-hidden
              className="animate-drip absolute -bottom-10 left-24 h-12 w-2.5 rounded-b-full bg-green"
              style={{ animationDelay: "0.5s" }}
            />
          </div>
        </div>
      </div>
      <div className="brush-edge h-6 w-full bg-paper" />
    </section>
  );
}
