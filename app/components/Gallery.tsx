const projects = [
  { title: "Modern Living Room Refresh", tag: "Interior", grad: "from-sky-500 to-brand" },
  { title: "Full Exterior Repaint", tag: "Exterior", grad: "from-amber-500 to-orange-700" },
  { title: "Kitchen Cabinet Makeover", tag: "Cabinets", grad: "from-emerald-500 to-teal-700" },
  { title: "Heritage Trim & Siding", tag: "Exterior", grad: "from-indigo-500 to-brand" },
  { title: "Office Suite Repaint", tag: "Commercial", grad: "from-slate-500 to-slate-800" },
  { title: "Deck Stain & Seal", tag: "Staining", grad: "from-amber-600 to-rose-700" },
];

export default function Gallery() {
  return (
    <section id="work" className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">
            Our Work
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Recent projects we&apos;re proud of
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Swap these placeholders with real before-and-after photos — nothing
            sells a paint job like seeing it.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <figure
              key={p.title}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-200"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${p.grad} transition-transform duration-500 group-hover:scale-105`}
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white ring-1 ring-white/30">
                  {p.tag}
                </span>
                <p className="mt-2 text-lg font-bold text-white">{p.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
