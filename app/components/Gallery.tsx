const projects = [
  { title: "Interior Repaint", tag: "Interior", grad: "from-[#6a1f5c] to-[#45123c]" },
  { title: "Craftsman Exterior", tag: "Exterior", grad: "from-[#4f8a2f] to-[#3a6622]" },
  { title: "Deck & Wood Restoration", tag: "Restoration", grad: "from-[#7a4326] to-[#4a2614]" },
  { title: "Historic Bungalow", tag: "Heritage", grad: "from-[#c98a2b] to-[#8a5a1f]" },
  { title: "Commercial Storefront", tag: "Commercial", grad: "from-[#3a4a63] to-[#222e42]" },
  { title: "New Construction", tag: "Residential", grad: "from-[#2f5d3a] to-[#1c3a24]" },
];

export default function Gallery() {
  return (
    <section id="work" className="bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-green">
            Photo Galleries
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
            Recent work we&apos;re proud of
          </h2>
          <p className="mt-4 text-lg text-ink/65">
            Drop in real before-and-after photos here — nothing sells a paint
            job like seeing it.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <figure
              key={p.title}
              className={`group relative aspect-[4/3] overflow-hidden rounded-sm ring-1 ring-ink/10 ${
                i % 2 ? "sm:rotate-[0.6deg]" : "sm:-rotate-[0.6deg]"
              }`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${p.grad} transition-transform duration-500 group-hover:scale-105`}
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-5">
                <span className="inline-block bg-paper/20 px-2.5 py-1 text-[0.7rem] font-bold uppercase tracking-widest text-paper ring-1 ring-paper/30">
                  {p.tag}
                </span>
                <p className="mt-2 font-display text-lg font-bold text-paper">
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
