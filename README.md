# Eco Biochar — landing page

Single-page Vietnamese product site for **Eco Biochar** (Công ty Cổ phần Agrichar Vĩnh Long): biochar made from coconut shells, in two formats — Biochar Chunk and Biochar Powder.

Built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4 and lucide-react. No backend.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npx tsc --noEmit
npm run build && npm start
```

## Structure

| Path | Purpose |
| --- | --- |
| `app/` | Layout (fonts, metadata), page composition, global tokens (`globals.css`), icon |
| `components/layout/` | Header, mobile navigation, footer |
| `components/sections/` | One component per page section |
| `components/ui/` | Buttons, section heading, reveal-on-scroll, marquee, product dialog, logo |
| `content/` | All copy and data (products, process, applications, FAQ, partners, images, contact) |
| `lib/contact.ts` | Form options, Vietnamese validation, submission |
| `docs/` | Implementation plan and content inventory (which copy is sourced vs. drafted) |

## Configuration

| Variable | Effect |
| --- | --- |
| `NEXT_PUBLIC_CONTACT_ENDPOINT` | URL that receives the contact form as JSON (`POST`). Without it the form runs in **demo mode** and clearly tells the visitor nothing was sent. |
| `NEXT_PUBLIC_SITE_URL` | Production origin used for Open Graph image URLs. |

## Before launch

- Replace contact placeholders in `content/site.ts` (email, phone).
- Replace brand images in `public/images/` (currently taken from the report's identity figures; packaging is a design render) and update `content/images.ts`.
- Confirm product specifications and packaging sizes; copy currently says "liên hệ để nhận thông số".
- Connect a form endpoint.
- See `docs/content-inventory.md` for every item marked *Cần xác nhận*.
