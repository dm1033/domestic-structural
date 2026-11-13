# Domestic Structural — agent notes

Marketing site for a domestic structural engineering practice. No accounts, payments or database; the only dynamic feature is the Netlify Forms enquiry.

## Architecture

- `src/routes/__root.tsx` — document shell, site-wide meta (from `site.name` / `site.description`), Google Fonts links, SVG favicon.
- `src/routes/index.tsx` → `src/components/MarketingPage.tsx` — home page: hero, facts strip, numbered services register, extensions/foundations feature split, planning callout, process, FAQ (`<details>`), enquiry form.
- `src/routes/services/$serviceId.tsx` → `src/components/ServicePage.tsx` — one page per service; loader uses `findService` and throws `notFound()` for unknown ids.
- `src/components/EnquiryForm.tsx` — controlled service select shared with the page so "Enquire" links preselect a service. Includes an "other" option.
- `src/components/SiteHeader.tsx`, `SiteFooter.tsx` (title-block styled), `BeamMark.tsx` (I-section logo), `NotFoundPage.tsx`.
- `src/data/services.ts` — the service list (ids are URL slugs, codes like `S-01`). `src/data/site.ts` — brand, form config, `processSteps`, `faqs`, and the `cdn()` image helper.

## Forms

The form name is `project-enquiry`, posted URL-encoded to `/__forms.html` (not `/`, which SSR handles). `public/__forms.html` is the static registration Netlify scans at deploy; keep its fields identical to the React form (form-name, subject, service-id, service-name, name, email, phone, postcode, message, bot-field). `src/data/services.test.ts` checks this. Form detection has been enabled for the site.

## Design conventions

- Palette and fonts are Tailwind theme tokens in `src/styles.css`: `paper`, `paper-deep`, `ink`, `ink-soft`, `oxide` (steel primer red), `rule`; fonts Instrument Serif (`.display`), Public Sans (body), IBM Plex Mono (`.annot` labels).
- Visual language is an engineering drawing sheet: faint grid background, square corners, 1px ink borders, mono annotations, dimension lines (`.dim`), hard offset shadow on the form.
- Motion is limited to `.rise` / `.draw` load animations and is disabled under `prefers-reduced-motion`.
- Images live in `public/img` (AI-generated photography) and must be referenced through `cdn(file, width)` so the Image CDN serves resized WebP.

## Content caution

Copy avoids unverifiable claims (no accreditations, prices, phone numbers or service areas). Add real contact details, accreditations and coverage area only when the owner provides them.
