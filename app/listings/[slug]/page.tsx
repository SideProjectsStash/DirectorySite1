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
      <Link href="/" className="text-muted hover:underline">
        &larr; Back to listings
      </Link>
      <span className="inline-block rounded-full border border-border px-2.5 py-0.5 text-xs tracking-[0.04em] text-muted uppercase">
        {listing.category}
      </span>
      <h1 className="my-[0.67em] text-[2em] font-bold">{listing.name}</h1>
      <p className="my-4 text-muted">{listing.location}</p>
      <p className="my-4">{listing.description}</p>
      {listing.website && (
        <p className="my-4">
          <a
            href={listing.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Visit website
          </a>
        </p>
      )}
    </article>
  );
}
