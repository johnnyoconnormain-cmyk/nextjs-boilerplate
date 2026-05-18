import { NextResponse } from "next/server";

// Leads submitted through the quote form land here.
//
// To actually RECEIVE these leads (the part that makes money), set ONE of:
//   • QUOTE_WEBHOOK_URL  – a Zapier/Make/CRM webhook; the lead JSON is POSTed
//                          to it so it can email/text you or create a CRM card.
//   • (or wire up an email provider like Resend below where noted.)
//
// With nothing configured the lead is still validated and logged to the
// server so the form works end-to-end during development.

export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real users never fill the hidden "company" field.
  if (typeof data.company === "string" && data.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = String(data.name ?? "").trim();
  const email = String(data.email ?? "").trim();
  const phone = String(data.phone ?? "").trim();
  const service = String(data.service ?? "").trim();
  const message = String(data.message ?? "").trim();

  if (!name || !email || !phone || !service) {
    return NextResponse.json(
      { error: "Please fill in your name, email, phone, and service." },
      { status: 400 },
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const lead = {
    name,
    email,
    phone,
    service,
    message,
    submittedAt: new Date().toISOString(),
  };

  const webhook = process.env.QUOTE_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    } catch (err) {
      console.error("Lead webhook failed:", err);
      return NextResponse.json(
        { error: "We couldn't submit your request. Please call us." },
        { status: 502 },
      );
    }
  } else {
    // No delivery configured yet — log so the lead isn't silently lost.
    console.log("NEW QUOTE LEAD (configure QUOTE_WEBHOOK_URL):", lead);
  }

  return NextResponse.json({ ok: true });
}
