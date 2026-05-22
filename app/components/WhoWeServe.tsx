import { audiences } from "../site-config";
import { Icon } from "./icons";

export default function WhoWeServe() {
  return (
    <section id="serve" className="bg-bone py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-lime-deep">
            Who We Serve
          </p>
          <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Four kinds of properties.{" "}
            <span className="text-navy">One careful crew.</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((a) => (
            <div
              key={a.key}
              className="group relative overflow-hidden rounded-2xl border border-ink/10 bg-bone-deep/40 p-7 transition-all hover:-translate-y-1 hover:border-navy/40 hover:shadow-lg"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy text-lime transition-colors group-hover:bg-lime group-hover:text-navy-deep">
                <Icon name={a.icon} width={24} height={24} />
              </span>
              <h3 className="mt-5 text-xl font-extrabold text-ink">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">
                {a.blurb}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
