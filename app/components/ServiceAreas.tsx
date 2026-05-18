import { site } from "../site-config";
import { Icon } from "./icons";

export default function ServiceAreas() {
  return (
    <section id="areas" className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand">
          Service Area
        </p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Proudly serving {site.city} &amp; nearby communities
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Not sure if you&apos;re in our area? Just ask — we&apos;re always
          happy to travel for the right project.
        </p>

        <ul className="mt-10 flex flex-wrap justify-center gap-3">
          {site.serviceAreas.map((a) => (
            <li
              key={a}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
            >
              <Icon name="check" width={14} height={14} className="text-brand" />
              {a}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
