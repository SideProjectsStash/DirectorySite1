# Directory Site

A bare-bones [Next.js](https://nextjs.org) directory website — a browsable list of
listings with an individual page for each one. Styled with
[Tailwind CSS](https://tailwindcss.com) v4. Intentionally minimal; meant as a
starting point to build on.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
app/
  layout.tsx              # Shared header/footer shell
  page.tsx                # Home — grid of all listings
  listings/[slug]/page.tsx # Individual listing page
  globals.css             # Tailwind import + design tokens (@theme)
lib/
  listings.ts             # Placeholder data + helpers
postcss.config.mjs        # Wires up the Tailwind PostCSS plugin
```

## Styling

Styles are Tailwind utility classes applied inline. Colors and the font stack
live as tokens in the `@theme` block in [app/globals.css](app/globals.css) —
`--color-accent` there generates `text-accent`, `border-accent`, `bg-accent`,
etc., so changing a brand color is a one-line edit.

## Adding a listing

Add an object to the `listings` array in [lib/listings.ts](lib/listings.ts). Each
listing needs a unique `slug`, which becomes its URL: `/listings/<slug>`.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |

## Next steps

Ideas for when we build this out:

- Replace the hardcoded data in `lib/listings.ts` with a database or CMS
- Search and category filtering
- Listing submission form
- Images / logos per listing
- SEO metadata per listing page and a sitemap
