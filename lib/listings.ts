export type Listing = {
  slug: string;
  name: string;
  category: string;
  location: string;
  description: string;
  website?: string;
};

// Placeholder data. Swap for a database / CMS later.
export const listings: Listing[] = [
  {
    slug: "acme-coffee",
    name: "Acme Coffee",
    category: "Cafe",
    location: "Portland, OR",
    description: "Small-batch roaster and neighborhood espresso bar.",
    website: "https://example.com",
  },
  {
    slug: "north-star-plumbing",
    name: "North Star Plumbing",
    category: "Home Services",
    location: "Austin, TX",
    description: "Licensed residential plumbing, 24/7 emergency calls.",
  },
  {
    slug: "riverbend-yoga",
    name: "Riverbend Yoga",
    category: "Fitness",
    location: "Asheville, NC",
    description: "Drop-in vinyasa and restorative classes seven days a week.",
  },
];

export function getListing(slug: string): Listing | undefined {
  return listings.find((l) => l.slug === slug);
}

export function getCategories(): string[] {
  return [...new Set(listings.map((l) => l.category))].sort();
}
