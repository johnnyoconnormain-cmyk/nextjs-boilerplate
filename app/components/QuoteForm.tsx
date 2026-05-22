"use client";

import { useState } from "react";
import { site, services } from "../site-config";
import { Icon } from "./icons";

type Status = "idle" | "submitting" | "success" | "error";

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error ? err.message : "Please try again or call us.",
      );
    }
  }

  return (
    <section id="quote" className="bg-bone-deep/40 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-ink/10 bg-navy-deep shadow-xl lg:grid lg:grid-cols-5">
          <div className="p-8 text-bone lg:col-span-2 lg:p-12">
            <h2 className="text-3xl font-black uppercase tracking-tight">
              Request a service
            </h2>
            <p className="mt-4 text-bone/85">
              Tell us about your property and we&apos;ll follow up fast with a
              clear estimate. Prefer to talk first? Just call.
            </p>

            <div className="mt-8 space-y-3 text-sm">
              <a
                href={`tel:${site.phoneHref}`}
                className="flex items-center gap-3 font-bold"
              >
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-bone/10">
                  <Icon name="phone" width={18} height={18} />
                </span>
                {site.phoneDisplay}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 break-all text-bone/85"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-bone/10">
                  <Icon name="mail" width={18} height={18} />
                </span>
                {site.email}
              </a>
              <p className="flex items-center gap-3 text-bone/85">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-bone/10">
                  <Icon name="pin" width={18} height={18} />
                </span>
                {site.address.poBox}, {site.address.city}, {site.address.region}{" "}
                {site.address.postalCode}
              </p>
              <p className="flex items-center gap-3 text-bone/85">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-bone/10">
                  <Icon name="clock" width={18} height={18} />
                </span>
                {site.hours}
              </p>
            </div>
          </div>

          <div className="bg-bone p-8 lg:col-span-3 lg:p-12">
            {status === "success" ? (
              <div className="flex h-full min-h-[20rem] flex-col items-center justify-center text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-lime text-navy-deep">
                  <Icon name="check" width={32} height={32} />
                </span>
                <h3 className="mt-5 text-2xl font-extrabold text-ink">
                  Request received!
                </h3>
                <p className="mt-2 max-w-sm text-ink/65">
                  Thanks for reaching out. We&apos;ll be in touch shortly. Need
                  us sooner? Call{" "}
                  <a
                    href={`tel:${site.phoneHref}`}
                    className="font-bold text-navy"
                  >
                    {site.phoneDisplay}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full name" name="name" required />
                  <Field label="Phone" name="phone" type="tel" required />
                </div>
                <Field label="Email" name="email" type="email" required />

                <div>
                  <label
                    htmlFor="property"
                    className="mb-1.5 block text-sm font-semibold text-ink/80"
                  >
                    Property type
                  </label>
                  <select
                    id="property"
                    name="property"
                    required
                    defaultValue=""
                    className="w-full rounded-lg border border-ink/20 bg-bone px-4 py-2.5 text-ink outline-none focus:border-navy focus:ring-2 focus:ring-navy/20"
                  >
                    <option value="" disabled>
                      Select…
                    </option>
                    <option>Residential</option>
                    <option>HOA</option>
                    <option>Apartment / Condo</option>
                    <option>Commercial / Retail</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="mb-1.5 block text-sm font-semibold text-ink/80"
                  >
                    Service needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className="w-full rounded-lg border border-ink/20 bg-bone px-4 py-2.5 text-ink outline-none focus:border-navy focus:ring-2 focus:ring-navy/20"
                  >
                    <option value="" disabled>
                      Select a service…
                    </option>
                    {services.map((s) => (
                      <option key={s.title} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Other">Other / Not sure</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-semibold text-ink/80"
                  >
                    Project details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Property size, timeline, anything helpful…"
                    className="w-full rounded-lg border border-ink/20 bg-bone px-4 py-2.5 text-ink outline-none focus:border-navy focus:ring-2 focus:ring-navy/20"
                  />
                </div>

                {status === "error" && (
                  <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-lime px-6 py-4 text-base font-extrabold uppercase tracking-wide text-navy-deep transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "submitting"
                    ? "Sending…"
                    : "Request my free estimate"}
                  {status !== "submitting" && (
                    <Icon name="arrow" width={18} height={18} />
                  )}
                </button>
                <p className="text-center text-xs text-ink/50">
                  No spam — we only use your info to follow up on your project.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-sm font-semibold text-ink/80"
      >
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-ink/20 bg-bone px-4 py-2.5 text-ink outline-none focus:border-navy focus:ring-2 focus:ring-navy/20"
      />
    </div>
  );
}
