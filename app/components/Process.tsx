import { Icon } from "./icons";

const steps = [
  {
    n: "1",
    title: "Free Estimate",
    body: "Call or send the form. We visit, listen, and give you a clear written quote — no pressure, no obligation.",
  },
  {
    n: "2",
    title: "Plan & Prep",
    body: "We schedule around you, protect your floors and furnishings, and do the thorough prep that makes a finish last.",
  },
  {
    n: "3",
    title: "Careful Painting",
    body: "Quiet, tidy, well-organized work with premium materials and crisp lines — room by room, done properly.",
  },
  {
    n: "4",
    title: "Walkthrough",
    body: "We clean up completely and walk it with you. It isn't finished until you're genuinely happy.",
  },
];

export default function Process() {
  return (
    <section className="bg-paper-deep py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-green">
            How It Works
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
            A simple, stress-free process
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="relative border border-ink/10 bg-paper p-7"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-plum font-display text-lg font-bold text-paper">
                {s.n}
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-ink">
                {s.title}
              </h3>
              <p className="mt-2 text-ink/65">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#quote"
            className="inline-flex items-center gap-2 text-base font-bold uppercase tracking-wide text-plum hover:text-green"
          >
            Get started today
            <Icon name="arrow" width={18} height={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
