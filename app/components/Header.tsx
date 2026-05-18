"use client";

import { useState } from "react";
import { site } from "../site-config";
import { Icon } from "./icons";

const links = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Our Work" },
  { href: "#reviews", label: "Reviews" },
  { href: "#areas", label: "Areas" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2 font-bold tracking-tight">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand text-white">
            <Icon name="roller" width={20} height={20} />
          </span>
          <span className="text-lg text-slate-900">{site.name}</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-brand"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${site.phoneHref}`}
            className="flex items-center gap-2 text-sm font-semibold text-slate-900 transition-colors hover:text-brand"
          >
            <Icon name="phone" width={18} height={18} />
            {site.phoneDisplay}
          </a>
          <a
            href="#quote"
            className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition-transform hover:scale-[1.03]"
          >
            Free Quote
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 md:hidden"
        >
          <span className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-slate-900" />
            <span className="block h-0.5 w-5 bg-slate-900" />
            <span className="block h-0.5 w-5 bg-slate-900" />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium text-slate-700"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-slate-100 pt-3">
              <a
                href={`tel:${site.phoneHref}`}
                className="flex items-center gap-2 py-1 text-sm font-semibold text-slate-900"
              >
                <Icon name="phone" width={18} height={18} />
                {site.phoneDisplay}
              </a>
              <a
                href="#quote"
                onClick={() => setOpen(false)}
                className="rounded-lg bg-accent px-4 py-2 text-center text-sm font-semibold text-slate-900"
              >
                Get a Free Quote
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
