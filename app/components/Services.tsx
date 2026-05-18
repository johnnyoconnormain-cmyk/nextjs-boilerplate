import { services } from "../site-config";
import { Icon } from "./icons";

export default function Services() {
  return (
    <section id="services" className="bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-green">
            What We Do
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
            Services, done right
          </h2>
          <p className="mt-4 text-lg text-ink/65">
            Every job — large or small — gets the same careful prep, premium
            materials, and a tidy, respectful crew.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden border border-ink/10 bg-paper-deep/40 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className="h-2 w-full"
                style={{ background: s.swatch }}
              />
              <div className="p-7">
                <span
                  className="grid h-12 w-12 place-items-center rounded-sm text-paper"
                  style={{ background: s.swatch }}
                >
                  <Icon name={s.icon} width={24} height={24} />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-ink">
                  {s.title}
                </h3>
                <p className="mt-2 text-ink/65">{s.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#quote"
            className="inline-flex items-center gap-2 bg-plum px-7 py-4 text-base font-bold uppercase tracking-wide text-paper shadow-[4px_4px_0_0_var(--green)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_0_var(--green)]"
          >
            Request a Free Estimate
            <Icon name="arrow" width={18} height={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
