import Link from "next/link";
import { listings, getCategories } from "@/lib/listings";

export default function HomePage() {
  const categories = getCategories();

  return (
    <>
      <h1>Browse the directory</h1>
      <p className="muted">
        {listings.length} listings across {categories.length} categories.
      </p>

      <ul className="card-grid">
        {listings.map((listing) => (
          <li key={listing.slug} className="card">
            <span className="badge">{listing.category}</span>
            <h2>
              <Link href={`/listings/${listing.slug}`}>{listing.name}</Link>
            </h2>
            <p className="muted">{listing.location}</p>
            <p>{listing.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
