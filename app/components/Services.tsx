import { services } from "../site-config";
import { Icon } from "./icons";

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">
            What We Do
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Painting services done right
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            From a single accent wall to a full exterior repaint, every job
            gets the same careful prep, premium materials, and tidy finish.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-slate-200 bg-white p-7 transition-all hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand text-white transition-colors group-hover:bg-accent group-hover:text-slate-900">
                <Icon name={s.icon} width={24} height={24} />
              </span>
              <h3 className="mt-5 text-xl font-bold text-slate-900">
                {s.title}
              </h3>
              <p className="mt-2 text-slate-600">{s.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#quote"
            className="inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark"
          >
            Request a Free Quote
            <Icon name="arrow" width={18} height={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
