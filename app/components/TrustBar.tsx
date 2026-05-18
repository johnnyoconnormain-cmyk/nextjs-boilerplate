import { site } from "../site-config";
import { Icon } from "./icons";

const items = [
  { icon: "award", title: `${site.yearsInBusiness}+ Years`, sub: "In business" },
  { icon: "shield", title: site.licenseInfo, sub: "For your protection" },
  { icon: "star", title: "5-Star Rated", sub: "By local homeowners" },
  { icon: "clock", title: "On-Time", sub: "Projects done right" },
];

export default function TrustBar() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden px-4 py-8 sm:px-6 lg:grid-cols-4 lg:px-8">
        {items.map((it) => (
          <div
            key={it.title}
            className="flex items-center gap-3 px-2 py-3"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-brand/10 text-brand">
              <Icon name={it.icon} width={22} height={22} />
            </span>
            <div>
              <p className="font-bold leading-tight text-slate-900">
                {it.title}
              </p>
              <p className="text-sm text-slate-500">{it.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
