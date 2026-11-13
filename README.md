# Domestic Structural

Website for a domestic structural engineering practice: steel beam design, extension design, foundation design, planning drawings, and structural inspections for homeowners and builders. Visitors browse services and send a project enquiry, which is collected by Netlify Forms.

## Technologies

- TanStack Start (React 19, file-based routing, SSR) on Netlify
- Tailwind CSS 4 with a custom "drawing sheet" theme in `src/styles.css`
- Netlify Forms for project enquiries (registered via `public/__forms.html`)
- Netlify Image CDN for responsive WebP versions of the photos in `public/img`

## Running locally

```bash
pnpm install
netlify dev        # full Netlify emulation, including forms and image CDN
# or
pnpm dev           # Vite only, on http://localhost:3000
```

Other scripts: `pnpm test`, `pnpm typecheck`, `pnpm format`.

## Editing content

- Services (copy, deliverables, typical projects, images): `src/data/services.ts`
- Site name/description, process steps, FAQs: `src/data/site.ts`
