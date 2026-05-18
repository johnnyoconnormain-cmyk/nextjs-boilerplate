import { testimonials } from "../site-config";
import { Icon } from "./icons";

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-paper-deep py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-green">
            Reviews
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
            What neighbors are saying
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className="relative flex flex-col border border-ink/10 bg-paper p-7"
            >
              <Icon
                name="quote"
                width={34}
                height={34}
                className="text-green/30"
              />
              <p className="mt-3 flex-1 font-display text-lg leading-relaxed text-ink/85">
                {t.quote}
              </p>
              <footer className="mt-6 flex items-center justify-between border-t border-ink/10 pt-4">
                <span className="font-semibold text-ink">{t.name}</span>
                <span className="text-xs font-bold uppercase tracking-widest text-green-deep">
                  {t.source}
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-ink/45">
          Themes from public reviews — replace with verbatim quotes once you
          have permission to publish them.
        </p>
      </div>
    </section>
  );
}
