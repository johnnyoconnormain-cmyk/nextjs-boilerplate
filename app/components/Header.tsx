"use client";

import { useState } from "react";
import { site } from "../site-config";
import { Icon } from "./icons";
import BrandLogo from "./BrandLogo";

// Same five top-level nav items as the live site, just less cluttered.
const links = [
  { href: "#services", label: "Services" },
  { href: "#serve", label: "Who We Serve" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Our Work" },
  { href: "#quote", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-bone/95 backdrop-blur">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" aria-label={site.name}>
          <BrandLogo />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-ink/70 transition-colors hover:text-navy"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${site.phoneHref}`}
            className="flex items-center gap-2 rounded-full bg-lime px-4 py-2 text-sm font-bold text-navy-deep transition-colors hover:bg-lime-deep"
          >
            <Icon name="phone" width={16} height={16} />
            {site.phoneDisplay}
          </a>
          <a
            href="#quote"
            className="rounded-full bg-navy px-5 py-2 text-sm font-bold uppercase tracking-wide text-bone transition-colors hover:bg-navy-deep"
          >
            Request a Service
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-md border border-ink/15 lg:hidden"
        >
          <span className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-ink" />
            <span className="block h-0.5 w-5 bg-ink" />
            <span className="block h-0.5 w-5 bg-ink" />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-ink/10 bg-bone lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-semibold text-ink/80"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-ink/10 pt-3">
              <a
                href={`tel:${site.phoneHref}`}
                className="flex items-center justify-center gap-2 rounded-full bg-lime px-4 py-2.5 text-sm font-bold text-navy-deep"
              >
                <Icon name="phone" width={16} height={16} />
                {site.phoneDisplay}
              </a>
              <a
                href="#quote"
                onClick={() => setOpen(false)}
                className="rounded-full bg-navy px-4 py-2.5 text-center text-sm font-bold uppercase tracking-wide text-bone"
              >
                Request a Service
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
