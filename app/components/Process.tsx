import { Icon } from "./icons";

const steps = [
  {
    n: "01",
    title: "Walkthrough",
    body: "Tell us what you have and what you want. We walk the property and listen — at no cost.",
  },
  {
    n: "02",
    title: "Plan & Quote",
    body: "You get a clear, written proposal with scope, timing, and price. No vague guesses.",
  },
  {
    n: "03",
    title: "Install or Maintain",
    body: "Our crew shows up on schedule and does the work properly — design, install, or routine care.",
  },
  {
    n: "04",
    title: "Year-Round Care",
    body: "Want it to stay this way? We handle the ongoing maintenance so you don't have to think about it.",
  },
];

export default function Process() {
  return (
    <section className="relative bg-moss py-20 text-bone lg:py-28">
      <div aria-hidden className="absolute inset-0 mow-stripes opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-lime">
            How It Works
          </p>
          <h2 className="mt-3 text-3xl font-black uppercase tracking-tight sm:text-4xl lg:text-5xl">
            Four steps. No runaround.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl bg-bone/5 p-7 ring-1 ring-bone/15 backdrop-blur"
            >
              <span className="text-3xl font-black text-lime">{s.n}</span>
              <h3 className="mt-3 text-xl font-extrabold">{s.title}</h3>
              <p className="mt-2 text-bone/85">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="#quote"
            className="inline-flex items-center gap-2 text-base font-extrabold uppercase tracking-wide text-bone hover:text-lime"
          >
            Start with a free walkthrough
            <Icon name="arrow" width={18} height={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
