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
    <section id="quote" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-brand shadow-xl lg:grid lg:grid-cols-5">
          <div className="p-8 text-white lg:col-span-2 lg:p-12">
            <h2 className="text-3xl font-extrabold tracking-tight">
              Get your free estimate
            </h2>
            <p className="mt-4 text-blue-100">
              Tell us a bit about your project and we&apos;ll get back to you
              fast — usually the same day — with a clear, honest quote.
            </p>

            <div className="mt-8 space-y-4 text-sm">
              <a
                href={`tel:${site.phoneHref}`}
                className="flex items-center gap-3 font-semibold"
              >
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/10">
                  <Icon name="phone" width={18} height={18} />
                </span>
                {site.phoneDisplay}
              </a>
              <p className="flex items-center gap-3 text-blue-100">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/10">
                  <Icon name="clock" width={18} height={18} />
                </span>
                {site.hours}
              </p>
            </div>
          </div>

          <div className="bg-white p-8 lg:col-span-3 lg:p-12">
            {status === "success" ? (
              <div className="flex h-full min-h-[20rem] flex-col items-center justify-center text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-green-100 text-green-600">
                  <Icon name="check" width={32} height={32} />
                </span>
                <h3 className="mt-5 text-2xl font-bold text-slate-900">
                  Request received!
                </h3>
                <p className="mt-2 max-w-sm text-slate-600">
                  Thanks for reaching out. We&apos;ll be in touch shortly. Need
                  us sooner? Call{" "}
                  <a
                    href={`tel:${site.phoneHref}`}
                    className="font-semibold text-brand"
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
                  <Field
                    label="Phone"
                    name="phone"
                    type="tel"
                    required
                  />
                </div>
                <Field label="Email" name="email" type="email" required />

                <div>
                  <label
                    htmlFor="service"
                    className="mb-1.5 block text-sm font-medium text-slate-700"
                  >
                    Service needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
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
                    className="mb-1.5 block text-sm font-medium text-slate-700"
                  >
                    Project details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Rooms, square footage, timeline, anything helpful…"
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
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
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-slate-900 shadow-sm transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "submitting"
                    ? "Sending…"
                    : "Send My Free Quote Request"}
                  {status !== "submitting" && (
                    <Icon name="arrow" width={18} height={18} />
                  )}
                </button>
                <p className="text-center text-xs text-slate-500">
                  No spam, ever. We only use your info to contact you about
                  your project.
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
        className="mb-1.5 block text-sm font-medium text-slate-700"
      >
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
      />
    </div>
  );
}
