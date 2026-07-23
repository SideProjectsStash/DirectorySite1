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
  {
    slug: "gilded-page-books",
    name: "Gilded Page Books",
    category: "Retail",
    location: "Providence, RI",
    description: "Used and rare books, with a standing poetry night on Thursdays.",
    website: "https://example.com",
  },
  {
    slug: "sunset-auto-works",
    name: "Sunset Auto Works",
    category: "Automotive",
    location: "Tucson, AZ",
    description: "Independent repair shop specializing in older imports.",
    website: "https://example.com",
  },
  {
    slug: "marisol-taqueria",
    name: "Marisol Taquería",
    category: "Restaurant",
    location: "San Diego, CA",
    description: "Family-run taquería serving Baja-style seafood since 1994.",
    website: "https://example.com",
  },
  {
    slug: "beacon-hill-dental",
    name: "Beacon Hill Dental",
    category: "Health",
    location: "Boston, MA",
    description: "General and cosmetic dentistry, accepting new patients.",
    website: "https://example.com",
  },
  {
    slug: "copper-creek-landscaping",
    name: "Copper Creek Landscaping",
    category: "Home Services",
    location: "Boise, ID",
    description: "Design, installation, and seasonal maintenance for dry climates.",
  },
];

export function getListing(slug: string): Listing | undefined {
  return listings.find((l) => l.slug === slug);
}

export function getCategories(): string[] {
  return [...new Set(listings.map((l) => l.category))].sort();
}
