import { site } from "../site-config";
import { Icon } from "./icons";

const items = [
  {
    icon: "clock",
    title: `Since ${site.established}`,
    sub: "Family-owned & operated",
  },
  { icon: "shield", title: "Licensed & Insured", sub: "Bonded for your peace of mind" },
  { icon: "pin", title: `${site.city}, ${site.region}`, sub: `Serving ${site.areaName}` },
  { icon: "star", title: "Reliable Crews", sub: "Sharp work, on schedule" },
];

export default function TrustBar() {
  return (
    <section className="border-b border-ink/10 bg-bone">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 gap-y-6 px-4 py-10 sm:px-6 lg:grid-cols-4 lg:px-8">
        {items.map((it) => (
          <div key={it.title} className="flex items-center gap-3">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-navy text-lime">
              <Icon name={it.icon} width={22} height={22} />
            </span>
            <div>
              <p className="text-lg font-extrabold leading-tight text-ink">
                {it.title}
              </p>
              <p className="text-sm text-ink/55">{it.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
