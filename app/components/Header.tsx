"use client";

import { useState } from "react";
import { site } from "../site-config";
import { Icon } from "./icons";
import BrandLogo from "./BrandLogo";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Galleries" },
  { href: "#about", label: "About Us" },
  { href: "#reviews", label: "Reviews" },
  { href: "#areas", label: "Areas" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-plum-deep text-center text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-paper/80">
        <p className="py-1.5">{site.tagline}</p>
      </div>
      <div className="border-b border-ink/10 bg-paper/95 backdrop-blur">
        <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#top" aria-label={site.name}>
            <BrandLogo />
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-bold uppercase tracking-wide text-ink/70 transition-colors hover:text-plum"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={`tel:${site.phoneHref}`}
              className="flex items-center gap-2 text-base font-bold text-plum transition-colors hover:text-green"
            >
              <Icon name="phone" width={18} height={18} />
              {site.phoneDisplay}
            </a>
            <a
              href="#quote"
              className="bg-green px-4 py-2.5 text-sm font-bold uppercase tracking-wide text-paper shadow-[3px_3px_0_0_var(--plum)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0_0_var(--plum)]"
            >
              Free Estimate
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-sm border border-ink/15 lg:hidden"
          >
            <span className="space-y-1.5">
              <span className="block h-0.5 w-5 bg-ink" />
              <span className="block h-0.5 w-5 bg-ink" />
              <span className="block h-0.5 w-5 bg-ink" />
            </span>
          </button>
        </div>

        {open && (
          <div className="border-t border-ink/10 bg-paper lg:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-sm font-bold uppercase tracking-wide text-ink/80"
                >
                  {l.label}
                </a>
              ))}
              <div className="mt-3 flex flex-col gap-2 border-t border-ink/10 pt-3">
                <a
                  href={`tel:${site.phoneHref}`}
                  className="flex items-center gap-2 py-1 text-base font-bold text-plum"
                >
                  <Icon name="phone" width={18} height={18} />
                  {site.phoneDisplay}
                </a>
                <a
                  href="#quote"
                  onClick={() => setOpen(false)}
                  className="bg-green px-4 py-2.5 text-center text-sm font-bold uppercase tracking-wide text-paper"
                >
                  Get a Free Estimate
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
