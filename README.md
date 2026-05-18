# Mario's Painting — Website

Marketing and lead-generation site for a painting contractor, built with
Next.js 16, React 19, and Tailwind CSS v4.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configure the business

All business details (name, phone, email, address, hours, service areas,
services, testimonials) live in **`app/site-config.ts`**. Edit that one file
to update the whole site before going live.

## Receiving quote leads

The quote form posts to `app/api/quote/route.ts`. To actually receive leads,
set the `QUOTE_WEBHOOK_URL` environment variable to a Zapier / Make / CRM
webhook URL — submitted leads are POSTed there as JSON. Without it, leads are
validated and logged to the server only.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — lint the project
