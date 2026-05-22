import { site } from "../site-config";
import { Icon } from "./icons";

export default function ServiceAreas() {
  return (
    <section id="areas" className="bg-bone py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-lime-deep">
          Service Area
        </p>
        <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-ink sm:text-4xl lg:text-5xl">
          Proudly serving {site.areaName}
        </h2>
        <p className="mt-4 text-lg text-ink/65">
          Based in {site.city}, {site.region}. Not sure if you&apos;re in our
          range? Just ask.
        </p>

        <ul className="mt-10 flex flex-wrap justify-center gap-2.5">
          {site.serviceAreas.map((a) => (
            <li
              key={a}
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-bone-deep/40 px-4 py-2 text-sm font-semibold text-ink/75"
            >
              <Icon name="pin" width={14} height={14} className="text-navy" />
              {a}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
