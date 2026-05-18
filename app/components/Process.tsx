const steps = [
  {
    n: "1",
    title: "Free Estimate",
    body: "Tell us about your project. We visit, measure, and give you a clear written quote — no pressure, no obligation.",
  },
  {
    n: "2",
    title: "Schedule & Prep",
    body: "We lock in a date that works for you, then protect your floors and furniture and prep every surface properly.",
  },
  {
    n: "3",
    title: "Expert Painting",
    body: "Our experienced crew applies premium coatings with crisp lines and even coverage, room by room.",
  },
  {
    n: "4",
    title: "Walkthrough",
    body: "We clean up completely and walk the job with you. It's not done until you're 100% happy.",
  },
];

export default function Process() {
  return (
    <section className="bg-brand py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            How It Works
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
            A simple, stress-free process
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl bg-white/5 p-7 ring-1 ring-white/10"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-accent text-lg font-extrabold text-slate-900">
                {s.n}
              </span>
              <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-blue-100">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
