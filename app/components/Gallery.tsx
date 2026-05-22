const projects = [
  { title: "HOA Common Areas", tag: "Maintenance", grad: "from-[#2f5d3a] to-[#14281b]" },
  { title: "Backyard Patio & Wall", tag: "Hardscape", grad: "from-[#7a6a4a] to-[#3a2f1f]" },
  { title: "Apartment Community", tag: "Multifamily", grad: "from-[#1d3b6f] to-[#0d1f3e]" },
  { title: "Front Yard Refresh", tag: "Residential", grad: "from-[#5a9046] to-[#2f5d3a]" },
  { title: "Office Park Beds", tag: "Commercial", grad: "from-[#3a4a63] to-[#1a2436]" },
  { title: "Irrigation Rebuild", tag: "Irrigation", grad: "from-[#2a6f9e] to-[#14385a]" },
];

export default function Gallery() {
  return (
    <section id="work" className="bg-bone py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-lime-deep">
              Our Work
            </p>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Recent projects
            </h2>
          </div>
          <p className="max-w-sm text-sm text-ink/55">
            Drop in real project photos here — before-and-after pairs convert
            best. These tiles are placeholders.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <figure
              key={p.title}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-ink/10"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${p.grad} transition-transform duration-500 group-hover:scale-105`}
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-5">
                <span className="inline-block rounded-full bg-bone/15 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-bone ring-1 ring-bone/30">
                  {p.tag}
                </span>
                <p className="mt-2 text-lg font-extrabold text-bone">
                  {p.title}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
