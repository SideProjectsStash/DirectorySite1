import Link from "next/link";
import { notFound } from "next/navigation";
import { listings, getListing } from "@/lib/listings";

export function generateStaticParams() {
  return listings.map((l) => ({ slug: l.slug }));
}

export default async function ListingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const listing = getListing(slug);

  if (!listing) notFound();

  return (
    <article>
      <Link href="/" className="muted">
        &larr; Back to listings
      </Link>
      <span className="badge">{listing.category}</span>
      <h1>{listing.name}</h1>
      <p className="muted">{listing.location}</p>
      <p>{listing.description}</p>
      {listing.website && (
        <p>
          <a href={listing.website} target="_blank" rel="noopener noreferrer">
            Visit website
          </a>
        </p>
      )}
    </article>
  );
}
