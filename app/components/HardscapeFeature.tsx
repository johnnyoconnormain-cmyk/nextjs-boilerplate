import { Icon } from "./icons";

export default function HardscapeFeature() {
  return (
    <section className="bg-navy-deep py-20 text-bone lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
        <div className="lg:col-span-5">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-lime">
            Featured Work
          </p>
          <h2 className="mt-3 text-3xl font-black uppercase tracking-tight sm:text-4xl lg:text-5xl">
            Hardscapes that{" "}
            <span className="text-lime">hold up.</span>
          </h2>
          <p className="mt-4 text-lg text-bone/80">
            Patios, walkways, retaining walls, rockeries and river beds —
            engineered to add focus, balance, and real long-term property value
            with minimal upkeep.
          </p>
          <ul className="mt-6 space-y-3 text-bone/85">
            {[
              "Proper base prep so the work doesn't shift in a few seasons",
              "Drainage planned in from day one, not added as an afterthought",
              "Materials matched to the property and your maintenance appetite",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <Icon
                  name="check"
                  width={18}
                  height={18}
                  className="mt-0.5 shrink-0 text-lime"
                />
                {t}
              </li>
            ))}
          </ul>
          <a
            href="#quote"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-lime px-7 py-4 text-base font-extrabold uppercase tracking-wide text-navy-deep transition-transform hover:scale-[1.03]"
          >
            Plan my hardscape
            <Icon name="arrow" width={18} height={18} />
          </a>
        </div>

        <div className="lg:col-span-7">
          <div className="grid grid-cols-6 gap-3">
            <div
              className="col-span-4 aspect-[4/3] rounded-2xl ring-1 ring-bone/10"
              style={{
                background:
                  "linear-gradient(135deg, #6b6056 0%, #3e3a34 60%, #1f1c18 100%)",
              }}
            >
              <p className="m-4 text-[0.65rem] font-bold uppercase tracking-widest text-bone/70">
                Patio + retaining wall
              </p>
            </div>
            <div
              className="col-span-2 aspect-square rounded-2xl ring-1 ring-bone/10"
              style={{
                background:
                  "linear-gradient(135deg, #3e6431 0%, #1f3a1e 100%)",
              }}
            >
              <p className="m-4 text-[0.65rem] font-bold uppercase tracking-widest text-bone/70">
                Lawn install
              </p>
            </div>
            <div
              className="col-span-2 aspect-square rounded-2xl ring-1 ring-bone/10"
              style={{
                background:
                  "linear-gradient(135deg, #2a6f9e 0%, #14385a 100%)",
              }}
            >
              <p className="m-4 text-[0.65rem] font-bold uppercase tracking-widest text-bone/80">
                Water feature
              </p>
            </div>
            <div
              className="col-span-4 aspect-[4/3] rounded-2xl ring-1 ring-bone/10"
              style={{
                background:
                  "linear-gradient(135deg, #8a6a3a 0%, #4a3a1f 100%)",
              }}
            >
              <p className="m-4 text-[0.65rem] font-bold uppercase tracking-widest text-bone/80">
                Walkway + rockery
              </p>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-bone/45">
            Placeholder tiles — drop in real project photos for the strongest
            impact.
          </p>
        </div>
      </div>
    </section>
  );
}
