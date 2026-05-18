import { testimonials } from "../site-config";
import { Icon } from "./icons";

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">
            Reviews
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Homeowners love the results
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-7"
            >
              <div className="flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon key={i} name="star" width={18} height={18} />
                ))}
              </div>
              <p className="mt-4 flex-1 text-slate-700">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-6">
                <p className="font-bold text-slate-900">{t.name}</p>
                <p className="text-sm text-slate-500">{t.location}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
