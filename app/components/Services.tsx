import { services } from "../site-config";
import { Icon } from "./icons";

export default function Services() {
  return (
    <section id="services" className="bg-bone-deep/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-lime-deep">
            What We Do
          </p>
          <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Six pillars. <span className="text-navy">Everything outside.</span>
          </h2>
          <p className="mt-4 max-w-xl text-lg text-ink/65">
            From a single mow to a full landscape build-out — we cover it. The
            long list is grouped into six clear services so you can find what
            you need fast.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-bone shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className="flex items-center gap-3 px-6 py-4 text-bone"
                style={{ background: s.color }}
              >
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/15">
                  <Icon name={s.icon} width={22} height={22} />
                </span>
                <h3 className="text-lg font-extrabold uppercase tracking-wide">
                  {s.title}
                </h3>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-ink/70">{s.blurb}</p>
                <ul className="mt-4 space-y-1.5 text-sm text-ink/75">
                  {s.items.map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Icon
                        name="check"
                        width={14}
                        height={14}
                        className="mt-1 shrink-0 text-lime-deep"
                      />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#quote"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-4 text-base font-extrabold uppercase tracking-wide text-bone transition-colors hover:bg-navy-deep"
          >
            Get a free estimate
            <Icon name="arrow" width={18} height={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
