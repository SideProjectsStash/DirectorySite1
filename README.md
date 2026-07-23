# Directory Site

A bare-bones [Next.js](https://nextjs.org) directory website — a browsable list of
listings with an individual page for each one. Intentionally minimal; meant as a
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
  globals.css             # All styling (plain CSS, no framework)
lib/
  listings.ts             # Placeholder data + helpers
```

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
