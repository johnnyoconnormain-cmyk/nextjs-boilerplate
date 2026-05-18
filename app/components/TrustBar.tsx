import { site } from "../site-config";
import { Icon } from "./icons";

const items = [
  {
    icon: "clock",
    title: `${site.yearsInBusiness}+ Years`,
    sub: `Serving ${site.city} since ${site.established}`,
  },
  { icon: "shield", title: site.licenseInfo, sub: "For your protection" },
  { icon: "badge", title: site.license, sub: "WA contractor license" },
  { icon: "star", title: "On Time", sub: "On budget, every time" },
];

export default function TrustBar() {
  return (
    <section className="border-b border-ink/10 bg-paper">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 gap-y-6 px-4 py-9 sm:px-6 lg:grid-cols-4 lg:px-8">
        {items.map((it) => (
          <div key={it.title} className="flex items-center gap-3">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-plum/10 text-plum">
              <Icon name={it.icon} width={22} height={22} />
            </span>
            <div>
              <p className="font-display text-lg font-bold leading-tight text-ink">
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
