import Link from "next/link";
import { listings, getCategories } from "@/lib/listings";

export default function HomePage() {
  const categories = getCategories();

  return (
    <>
      <h1 className="my-[0.67em] text-[2em] font-bold">Browse the directory</h1>
      <p className="my-4 text-muted">
        {listings.length} listings across {categories.length} categories.
      </p>

      <ul className="mt-8 grid list-none grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-4 p-0">
        {listings.map((listing) => (
          <li
            key={listing.slug}
            className="rounded-[10px] border border-border p-5"
          >
            <span className="inline-block rounded-full border border-border px-2.5 py-0.5 text-xs tracking-[0.04em] text-muted uppercase">
              {listing.category}
            </span>
            <h2 className="mt-2 mb-1 text-lg font-bold">
              <Link
                href={`/listings/${listing.slug}`}
                className="text-accent hover:underline"
              >
                {listing.name}
              </Link>
            </h2>
            <p className="my-1 text-[0.9375rem] text-muted">
              {listing.location}
            </p>
            <p className="my-1 text-[0.9375rem]">{listing.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
