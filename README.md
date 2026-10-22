# Eco Biochar — landing page

Single-page bilingual (Vietnamese / English) product site for **Eco Biochar** (Công ty Cổ phần Agrichar Vĩnh Long): biochar made from coconut shells, in two formats — Biochar Chunk and Biochar Powder.

Built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4 and lucide-react. No backend.

- **Languages:** Vietnamese at `/vi`, English at `/en`. `/` redirects by the browser's `Accept-Language` (Vietnamese by default) via `proxy.ts`.
- **Themes:** light and dark. The first visit follows the system setting; the toggle saves the choice in `localStorage` (`eco-theme`). An inline script in `app/[lang]/layout.tsx` applies it before first paint.
- **Intro:** a short animated splash (adapted from the reference site) on the first page of each browser session; skipped when the system requests reduced motion. Clear `sessionStorage` key `eco-intro` to see it again.

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
| `app/[lang]/` | Root layout per locale (fonts, metadata, theme script), page composition, design tokens (`globals.css`) |
| `proxy.ts` | Redirects `/` to `/vi` or `/en` |
| `components/layout/` | Header, mobile navigation, footer |
| `components/sections/` | One component per page section |
| `components/ui/` | Buttons, section heading, reveal-on-scroll, marquee, product dialog, logo |
| `content/` | `vi.ts` / `en.ts` dictionaries (all copy), `types.ts` (dictionary shape, locales), `images.ts` |
| `lib/contact.ts` | Form types, validation (messages come from the dictionaries), submission |
| `docs/` | Implementation plan and content inventory (which copy is sourced vs. drafted) |

## Configuration

| Variable | Effect |
| --- | --- |
| `NEXT_PUBLIC_CONTACT_ENDPOINT` | URL that receives the contact form as JSON (`POST`). Without it the form runs in **demo mode** and clearly tells the visitor nothing was sent. |
| `NEXT_PUBLIC_SITE_URL` | Production origin used for Open Graph image URLs. |

## Before launch

- Replace contact placeholders in `content/vi.ts` and `content/en.ts` (`contact.channels`).
- Have a native speaker review the English copy in `content/en.ts`.
- Replace brand images in `public/images/` (currently taken from the report's identity figures; packaging is a design render) and update `content/images.ts`.
- Confirm product specifications and packaging sizes; copy currently says "liên hệ để nhận thông số".
- Connect a form endpoint.
- See `docs/content-inventory.md` for every item marked *Cần xác nhận*.
