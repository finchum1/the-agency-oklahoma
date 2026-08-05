import Image from "next/image";
import Link from "next/link";
import type { Listing } from "@/lib/data";

const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);

export default function PropertyCard({ listing }: { listing: Listing }) {
  return (
    <Link href={`/listings/${listing.id}`} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#e8e6df]">
        <Image
          src={listing.image}
          alt={listing.address}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 bg-[#0d0d0c] px-3 py-1 text-[11px] uppercase tracking-[0.15em] text-white">
          {listing.status}
        </span>
      </div>
      <div className="mt-4">
        <p className="font-serif text-xl text-[#1a1a1a]">
          {formatPrice(listing.price)}
        </p>
        <p className="mt-1 text-sm text-[#1a1a1a]/80">
          {listing.address}, {listing.city}
        </p>
        <p className="mt-2 text-xs uppercase tracking-[0.1em] text-[#1a1a1a]/50">
          {listing.beds} Beds &middot; {listing.baths} Baths &middot;{" "}
          {listing.sqft.toLocaleString()} Sq Ft
        </p>
      </div>
    </Link>
  );
}
