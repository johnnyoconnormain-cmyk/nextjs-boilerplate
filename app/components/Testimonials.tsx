import { testimonials } from "../site-config";
import { Icon } from "./icons";

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-bone-deep/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-lime-deep">
            Reviews
          </p>
          <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-ink sm:text-4xl lg:text-5xl">
            What clients say
          </h2>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className="flex flex-col rounded-2xl border border-ink/10 bg-bone p-7"
            >
              <Icon
                name="quote"
                width={32}
                height={32}
                className="text-lime"
              />
              <p className="mt-3 flex-1 text-lg leading-relaxed text-ink/85">
                {t.quote}
              </p>
              <footer className="mt-6 flex items-center justify-between border-t border-ink/10 pt-4">
                <span className="font-semibold text-ink">{t.name}</span>
                <span className="text-xs font-bold uppercase tracking-widest text-navy">
                  {t.source}
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
        <p className="mt-8 text-xs text-ink/45">
          Themes from typical landscape-client feedback — replace with verbatim
          customer quotes once you have permission to publish them.
        </p>
      </div>
    </section>
  );
}
