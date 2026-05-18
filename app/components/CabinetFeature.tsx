import { site } from "../site-config";
import { Icon } from "./icons";

export default function CabinetFeature() {
  return (
    <section className="bg-plum-deep py-20 text-paper lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-green">
            Most Requested
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
            Cabinet painting
          </h2>
          <p className="mt-4 text-lg text-paper/80">
            You don&apos;t need a full remodel to fall back in love with your
            kitchen. We transform dated oak cabinets into a bright, modern,
            factory-smooth finish — for a fraction of the cost of replacement.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Doors removed, degreased & sanded for a flawless bond",
              "Smooth, durable finish built to take daily kitchen wear",
              "Most kitchens completed in days, not weeks",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-paper/85">
                <Icon
                  name="check"
                  width={18}
                  height={18}
                  className="mt-0.5 shrink-0 text-green"
                />
                {t}
              </li>
            ))}
          </ul>
          <a
            href="#quote"
            className="mt-8 inline-flex items-center gap-2 bg-green px-7 py-4 text-base font-bold uppercase tracking-wide text-paper shadow-[4px_4px_0_0_rgba(0,0,0,0.35)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.35)]"
          >
            Quote My Cabinets
            <Icon name="arrow" width={18} height={18} />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Before", from: "#8a5a2a", to: "#5e3c18", tag: "Dated oak" },
            { label: "After", from: "#f3efe7", to: "#cdc7ba", tag: "Bright & modern" },
          ].map((p) => (
            <figure
              key={p.label}
              className="relative aspect-[3/4] overflow-hidden rounded-sm ring-1 ring-paper/15"
            >
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(160deg, ${p.from}, ${p.to})`,
                }}
              />
              <span className="absolute left-3 top-3 bg-plum-deep/80 px-2.5 py-1 text-[0.7rem] font-bold uppercase tracking-widest">
                {p.label}
              </span>
              <figcaption
                className="absolute inset-x-0 bottom-0 p-4 text-sm font-semibold"
                style={{ color: p.label === "After" ? "#1f1620" : "#f7f4ef" }}
              >
                {p.tag}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl px-4 text-center text-xs text-paper/45 sm:px-6 lg:px-8">
        Placeholder panels — drop in {site.name}&apos;s real before &amp; after
        photos for maximum impact.
      </p>
    </section>
  );
}
