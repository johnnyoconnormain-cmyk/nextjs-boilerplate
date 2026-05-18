import { site } from "../site-config";
import { Icon } from "./icons";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-brand text-white"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(60rem 30rem at 80% -10%, #1d6fb8 0%, transparent 60%), radial-gradient(40rem 25rem at 0% 110%, #f59e0b33 0%, transparent 60%)",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-28">
        <div className="animate-fade-up">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-medium ring-1 ring-white/20">
            <Icon name="star" width={16} height={16} className="text-accent" />
            Trusted by {site.city} homeowners for {site.yearsInBusiness}+ years
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            A Fresh Coat That{" "}
            <span className="text-accent">Feels Like New</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-blue-100">
            {site.name} delivers flawless interior &amp; exterior painting in{" "}
            {site.city}, {site.region} and surrounding areas. Honest quotes,
            clean job sites, and results you&apos;ll love — guaranteed.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#quote"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-slate-900 shadow-lg transition-transform hover:scale-[1.03]"
            >
              Get My Free Estimate
              <Icon name="arrow" width={18} height={18} />
            </a>
            <a
              href={`tel:${site.phoneHref}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 px-6 py-3.5 text-base font-semibold text-white ring-1 ring-white/30 transition-colors hover:bg-white/20"
            >
              <Icon name="phone" width={18} height={18} />
              {site.phoneDisplay}
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-blue-100">
            {[
              "Free, no-pressure estimates",
              site.licenseInfo,
              "Satisfaction guaranteed",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Icon name="check" width={16} height={16} className="text-accent" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-fade-up">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, #1d6fb8 0%, #0b3d6b 55%, #082c4d 100%)",
              }}
            />
            <div className="absolute inset-0 grid place-items-center p-8 text-center">
              <div>
                <span className="grid mx-auto h-16 w-16 place-items-center rounded-2xl bg-accent text-slate-900">
                  <Icon name="roller" width={32} height={32} />
                </span>
                <p className="mt-5 text-2xl font-bold">
                  {site.yearsInBusiness}+ Years
                </p>
                <p className="text-blue-100">of beautiful results</p>
                <p className="mt-6 text-sm text-blue-200">
                  Replace this panel with a real project photo for an even
                  stronger first impression.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
