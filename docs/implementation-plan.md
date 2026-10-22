# Eco Biochar — Implementation Plan

## 1. Project understanding & goals

Eco Biochar is the startup project and core biochar product line of **Công ty Cổ phần Agrichar Vĩnh Long** (brand identity: *AGRICHAR VĨNH LONG*). It turns coconut shells from processing facilities in Bến Tre and the Mekong Delta into biochar via oxygen-limited pyrolysis, sold in two formats (chunk and powder), primarily to B2B buyers.

Goal: a single-page, Vietnamese, production-quality landing page that:

- explains the circular model and the two products accurately (source: the report *"Tiểu luận YTKN – Nhóm 5"*),
- feels premium, editorial and agricultural rather than SaaS-like,
- routes B2B buyers to an inquiry path (samples, technical specs, bulk supply, partnerships),
- makes no claims the report does not support.

## 2. Reference website analysis — https://senpine.vercel.app/

Inspected live in a browser at 1440 px and 390 px.

### Verified observations

| Area | Observation |
| --- | --- |
| Stack | Next.js (Turbopack chunks). |
| Typography | Single family, **Be Vietnam Pro**. H1 ≈ 86 px / 600. Headlines split into two tones: first phrase dark/heavy, second phrase lighter weight + accent color ("Từ tự nhiên. / Dệt nên *tương lai*."). |
| Color | Warm ivory body `#F6F3EA`; deep green dark sections `#14281F` / `#1B3528`; footer `#F0EBDF`; muted gold accent on eyebrows. |
| Intro | Full-screen splash (logo mark on dark green) before content. |
| Header | Sticky, ivory at ~96 % opacity, brand wordmark with `✳` mark at left, plain text nav, small icon tools at right. Mobile: icons + hamburger. |
| Hero | Full-bleed photo with dark overlay; uppercase eyebrow with leading rule; oversized two-tone headline; one solid light button + one text link with arrow; "Cuộn để khám phá" cue; a marquee ribbon follows. |
| Section heads | Eyebrow "01 / NGUỒN GỐC & CÔNG NGHỆ" → large two-tone H2 left, short intro paragraph right. |
| Origins | Two large photo cards side by side with labels overlaid on the image. |
| Journey | Dark-green section: large image left, numbered step list right (01–07) acting as an accordion; small disclaimer that steps are still to be validated. |
| Materials | Horizontal rail of tall image cards; below each: name, small uppercase meta, description, price row with arrow. |
| Collection | Filter tabs + horizontally scrollable product cards. |
| Footer | Brand + tagline, 3–4 link columns, utility toggles. |
| Mobile | Single column, full-width primary CTA, sections keep the same eyebrow → headline rhythm; a floating chat button. |
| Tone | Honest qualifiers in small type ("Quy trình định hướng… cần được thử nghiệm"). |

### What we adapt vs. redesign

- **Adapt:** ivory/deep-green rhythm, two-tone oversized headlines, eyebrow numbering, sticky translucent header, hero eyebrow + dual CTA, marquee ribbon, dark "journey" section with numbered steps, editorial split headings, honest small-print disclaimers, generous whitespace.
- **Redesign:** no intro splash (cost to first paint), no prices / product passport / careers / AI chat / theme & language toggles (not in scope or not supported by the report). Product presentation becomes two contrasting panels (charcoal vs. kraft) instead of a rail, since there are only two formats. Display type uses a serif (Fraunces) to give the agricultural brand an editorial, tactile voice while body text stays on Be Vietnam Pro like the reference.

## 3. Brand & product summary (from the report)

- Slogan: **"Tái sinh giá trị – Xanh hóa nông nghiệp"** (p.2).
- Logo (Fig 1.1): seedling growing from biochar in a coconut-shell bowl, wrapped by circular green arrows; wordmark "AGRICHAR — VĨNH LONG —".
- Official palette (Fig 1.2) — used as design tokens:

| Token | Name | Hex | Report usage |
| --- | --- | --- | --- |
| `forest` | Xanh rừng đậm | `#0B5D38` | logo, headings, primary identity |
| `leaf` | Xanh lá | `#4CAF50` | secondary surfaces, graphics |
| `mint` | Xanh tươi | `#00C896` | accents, buttons, UI details |
| `earth` | Nâu đất | `#8B5E3C` | illustration, packaging |
| `coconut` | Nâu dừa | `#C69C6D` | secondary surfaces |
| `char` | Đen Biochar | `#1A1A1A` | text, icons |
| `cream` | Trắng kem | `#FAFAF5` | main background |
| `soft` | Xanh nhạt | `#EAF7EE` | secondary background |

  Derived (not in report): `forest-deep #082F1F` and `forest-ink #0A2418` for dark sections, `kraft #E9DCC6` for the powder panel, `muted #5E6458` for secondary text, `line` hairlines.
- Products: **Biochar Chunk** (than sinh học dạng cục/mảnh) and **Biochar Powder** (dạng nghiền/bột); the report calls the line *EcoBiochar Base*.
- Process: 9 steps (p.33–36), presented as 6 stages.
- Customers: B2B direct use (priority), B2B production/mixing, B2B intermediaries, B2C (supporting).
- Hedges required: effect depends on soil/feedstock/conditions; no fixed mixing ratio yet; carbon credits = long-term opportunity; heat reuse = orientation; financial projections are hypothetical; named organisations in Fig 2.2 are only "dự kiến tiếp cận".

## 4. Sitemap & section structure

Single route `/` with anchors:

| # | Section | Anchor | Purpose |
| --- | --- | --- | --- |
| – | Header | – | Brand, nav, CTA |
| 1 | Hero | `#top` | Product + purpose in one view |
| 2 | Câu chuyện | `#ve-chung-toi` | Problem → coconut-shell focus → value chain |
| 3 | Sản phẩm | `#san-pham` | Chunk & Powder + detail dialog |
| 4 | Quy trình | `#quy-trinh` | 6-stage circular production |
| 5 | Ứng dụng | `#ung-dung` | Tabbed application areas |
| 6 | Vì sao Eco Biochar | `#khac-biet` | Differentiation |
| 7 | Hợp tác | `#hop-tac` | B2B partner types + inquiry shortcuts |
| 8 | FAQ | `#hoi-dap` | Accordion |
| 9 | Liên hệ | `#lien-he` | Closing CTA + form |
| – | Footer | – | Brand, links, placeholders |

## 5. Visual direction & tokens

Concept: **Premium Organic / Circular Agriculture** — ivory paper, forest-green ink, charcoal texture, kraft warmth.

- Type: Fraunces (display, opsz axis, Vietnamese subset) + Be Vietnam Pro (body/UI). Scale (fluid `clamp`): display 3–6.5 rem, h2 2.25–4.25 rem, h3 1.5–2 rem, body 1–1.125 rem, eyebrow 0.75 rem / 0.18 em tracking.
- Spacing: section padding `clamp(5rem, 10vw, 9rem)`; container max 1320 px with 20–48 px gutters.
- Shape: mostly square edges, 2–4 px radii on controls, large radius only on the circular motif. Hairline borders instead of shadows.
- Texture: CSS/SVG noise grain on charcoal and kraft panels (no image needed).
- Motif: the logo's circular arrow drawn as an SVG ring that frames the hero visual.

## 6. Component architecture

```
app/layout.tsx           fonts, metadata, <html lang="vi">
app/page.tsx             composes sections (server)
app/globals.css          @theme tokens, base, utilities, reduced-motion
components/layout/       Header (client), MobileNavigation (client), Footer
components/sections/     HeroSection, BrandStorySection, ProductShowcase (client),
                         ProductionProcess (client), ApplicationsSection (client),
                         WhyEcoBiochar, PartnershipSection, FAQSection (client),
                         ContactSection (+ ContactForm client)
components/ui/           Button/ButtonLink, SectionHeading, Reveal (client), Marquee,
                         ProductDialog (client), CircularMark, Logo
content/                 site, products, process, applications, why, partners, faq, images
lib/contact.ts           validation + submitInquiry (endpoint or demo)
lib/inquiry.ts           tiny event bus to prefill the form from CTAs
```

All copy and repeated data live in `content/*.ts` with TypeScript types.

## 7. Implementation sequence

1. Scaffold Next.js 16 + Tailwind v4 + lucide-react. ✅
2. Extract brand assets from the PDF (logo, packaging render). ✅
3. Tokens, fonts, primitives.
4. Content modules.
5. Sections top-down; interactions.
6. Metadata, icon, README.
7. Lint / typecheck / build; browser review at 1440 / 768 / 390; fixes.

## 8. Asset requirements

| Asset | Source | Status |
| --- | --- | --- |
| Logo full + mark (transparent PNG) | Report Fig 1.1, background keyed out | Done |
| Packaging render (duo + per product crops) | Report Fig 1.3 | Done — design render, labelled as such |
| Real production / farm photography | Company | **Missing** — sections use packaging renders + CSS textures |
| Product specifications | Company | **Missing** — copy says "Liên hệ để nhận thông số" |
| Contact details, domain, social links | Company | **Missing** — placeholders |

All image references are centralised in `content/images.ts`.

## 9. Interaction specifications

| Element | Behaviour |
| --- | --- |
| Header | Transparent over hero; after 24 px scroll → ivory 92 % + blur + hairline. Active section highlighted via IntersectionObserver. |
| Mobile menu | Button `aria-expanded`/`aria-controls`; full-screen panel; focus moves in, Tab trapped, Esc and link click close; body scroll locked; focus returns to the toggle. |
| Smooth scroll | CSS `scroll-behavior: smooth` (disabled under reduced motion); `scroll-margin-top` for header offset. |
| Product CTA | Opens native `<dialog>` (Esc / backdrop / close button); "Yêu cầu thông số & mẫu thử" closes dialog, prefills form (product + inquiry type), scrolls to `#lien-he`. |
| Process | 6 stages as buttons (`aria-pressed`) — selecting one reveals its detailed steps in a panel; arrows keys move between stages. Mobile: vertical list with the same panel inline. |
| Applications | WAI-ARIA tabs, roving tabindex, ←/→/Home/End. |
| Partnership chips | Prefill the inquiry type and scroll to the form. |
| FAQ | Buttons with `aria-expanded` controlling regions; animated via `grid-template-rows`. |
| Form | Native inputs; validation on submit and on blur after first submit; Vietnamese messages; focus first invalid field; states idle → submitting → success/error. Without `NEXT_PUBLIC_CONTACT_ENDPOINT` the success message states clearly that it is a demo and nothing was sent. |
| Reveal | Fade/translate on first intersection; content visible by default without JS and under reduced motion. |

## 10. Responsive strategy

Mobile-first. Breakpoints: `sm 640`, `md 768`, `lg 1024`, `xl 1280`. Hero stacks (copy → visual) below `lg`. Product panels stack below `lg`. Process is a 6-column row at `lg+`, vertical timeline below. Headlines use `clamp()` and `text-wrap: balance`; verify no horizontal overflow at 390 px.

## 11. Accessibility

Semantic landmarks (`header`, `nav`, `main`, `section[aria-labelledby]`, `footer`), one `h1`, ordered headings, skip link, visible focus ring (mint outline), AA contrast on all text, alt text in Vietnamese, labelled form controls with `aria-invalid`/`aria-describedby`, live region for form status, `prefers-reduced-motion` honoured.

## 12. SEO & performance

`metadata` with Vietnamese title/description, Open Graph (packaging image), `icon`, no canonical (production URL unknown). `next/image` with explicit sizes; hero image `priority`, others lazy. Fonts via `next/font` (self-hosted, `display: swap`). Server components by default; client JS limited to interactive islands. No animation libraries.

## 13. Testing strategy

- `npm run lint`, `npx tsc --noEmit`, `npm run build`.
- Manual browser checks at 1440 / 768 / 390 px: first fold, wrapping, overflow (`scrollWidth`), header/mobile menu, all anchors and CTAs, dialog, tabs/accordion keyboard, form validation and demo state, console errors, reduced motion.

## 14. Risks, assumptions, open questions

- Brand assets are AI-styled renders from the report; acceptable as identity references but should be replaced with official vector logo and real photography.
- Packaging render shows "5KG"/"1KG" and "Độ ẩm < 10%"; these are not confirmed specs and are not repeated in page copy.
- No backend: form is demo-only until an endpoint is configured.
- Open questions for the team: official contact channels, domain, product specs/packaging sizes, sample policy, legal entity status.

## 15. Acceptance criteria

1. All sections in §4 implemented and reachable from navigation.
2. Copy matches the report or is marked as drafted in `docs/content-inventory.md`.
3. No invented specs, prices, certifications, testimonials, partners or metrics.
4. Layout usable without overflow at 1440 / 768 / 390 px.
5. Nav, mobile menu, product dialog, process selector, tabs, FAQ and form all work by mouse and keyboard.
6. Form validates in Vietnamese and states honestly that submissions are not sent in demo mode.
7. Lint, typecheck and build pass.
8. Reduced-motion users see no animation.

## 16. Update — English and dark theme

- **i18n:** `app/[lang]` with `generateStaticParams` (`vi`, `en`), dictionaries in `content/vi.ts` / `content/en.ts` typed by `content/types.ts`. Sections receive their slice of the dictionary as props, so client components never import the dictionaries directly. `proxy.ts` redirects `/` by `Accept-Language`. `hreflang` alternates and per-locale Open Graph are set in `generateMetadata`. Anchor IDs are shared across locales; the language switch keeps the current hash and does a full document load (a client transition re-renders `<html>` and would drop the theme attribute).
- **Theme:** semantic tokens (`surface`, `ink`, `heading`, `accent`, `eyebrow`, `tint`, `kraft`, `section-dark`, `primary`, `danger`…) defined for `[data-theme="light"]` and `[data-theme="dark"]` in `globals.css`; brand-fixed colours (mint, cream, char, forest-ink) stay constant. An inline `<head>` script (Next's "preventing flash before hydration" pattern) resolves saved choice → system preference before paint. Icons in the toggle switch via a `dark:` custom variant, so markup is identical on server and client.

## 17. Update — intro and hero motion

- **Intro** (`components/layout/Intro.tsx`, styles in `globals.css`): mirrors the reference's sequence (line-art mark draws in, name/tagline rise from blur, loading rule, corner labels, skip button, upward wipe at ~2.3s). The boot script sets `html[data-intro]` before first paint: `on` for the first page of a session, `off` when already seen or when reduced motion is requested; the overlay is only displayed for `on`, so there is no flash either way.
- **Hero entrance:** staggered rise/fade of eyebrow, headline phrases, copy, CTAs and facts; product image unveils upward, settles, then breathes slowly; orbit ring rotates; background glow drifts. Delays add `--hero-delay` (2.45s while the intro plays, 300ms after skipping, 0 otherwise). Everything ends in its normal state and is disabled under `prefers-reduced-motion`.
