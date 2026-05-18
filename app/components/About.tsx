import { site } from "../site-config";
import { Icon } from "./icons";

const points = [
  "Detailed written estimates — no hidden fees or surprises",
  "Premium, low-VOC paints that last for years",
  "Meticulous surface prep for a flawless finish",
  "Daily cleanup — we leave it better than we found it",
  "Friendly crew that respects your home and time",
];

export default function About() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="order-2 lg:order-1">
          <div className="relative aspect-[5/4] overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-200">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, #f59e0b 0%, #0b3d6b 100%)",
              }}
            />
            <div className="absolute inset-0 grid place-items-center p-8 text-center text-white">
              <div>
                <p className="text-5xl font-extrabold">
                  {site.yearsInBusiness}+
                </p>
                <p className="mt-2 text-lg font-medium">
                  years serving {site.city} &amp; nearby
                </p>
                <p className="mt-4 text-sm text-white/80">
                  Swap this for a photo of Mario and the crew on a job site.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">
            About {site.name}
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Local painters who actually show up
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            For more than {site.yearsInBusiness} years, {site.name} has helped
            families and businesses across {site.city} and the surrounding
            communities fall back in love with their spaces. We&apos;re a
            locally owned crew that treats every project — big or small — like
            it&apos;s our own home.
          </p>

          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
                  <Icon name="check" width={14} height={14} />
                </span>
                <span className="text-slate-700">{p}</span>
              </li>
            ))}
          </ul>

          <a
            href="#quote"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-slate-900 shadow-sm transition-transform hover:scale-[1.03]"
          >
            Start Your Project
            <Icon name="arrow" width={18} height={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
