import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { listings } from "@/lib/data";

const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);

export function generateStaticParams() {
  return listings.map((listing) => ({ id: listing.id }));
}

export default async function ListingDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const listing = listings.find((l) => l.id === id);
  if (!listing) notFound();

  return (
    <div>
      <div className="relative h-[60vh] min-h-[400px] w-full">
        <Image
          src={listing.image}
          alt={listing.address}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full px-6 pb-10 text-white lg:px-10">
          <div className="mx-auto max-w-7xl">
            <span className="bg-[#0d0d0c] px-3 py-1 text-[11px] uppercase tracking-[0.15em]">
              {listing.status}
            </span>
            <h1 className="mt-4 font-serif text-3xl sm:text-4xl">
              {listing.address}
            </h1>
            <p className="mt-1 text-white/80">{listing.city}</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="font-serif text-3xl text-[#0d0d0c]">
              {formatPrice(listing.price)}
            </p>
            <div className="mt-4 flex gap-8 border-y border-black/10 py-4 text-sm uppercase tracking-[0.1em] text-[#1a1a1a]/60">
              <span>{listing.beds} Beds</span>
              <span>{listing.baths} Baths</span>
              <span>{listing.sqft.toLocaleString()} Sq Ft</span>
            </div>
            <h2 className="mt-8 font-serif text-xl text-[#0d0d0c]">
              About This Home
            </h2>
            <p className="mt-4 leading-relaxed text-[#1a1a1a]/80">
              {listing.description} Located in {listing.neighborhood}, this
              property offers convenient access to Oklahoma City&apos;s best
              dining, shopping, and schools. Contact The Agency Oklahoma to
              schedule a private showing.
            </p>
          </div>

          <div className="border border-black/10 bg-white p-8">
            <h3 className="font-serif text-xl text-[#0d0d0c]">
              Request a Showing
            </h3>
            <form className="mt-6 flex flex-col gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="border border-black/10 px-4 py-3 text-sm outline-none placeholder:text-[#1a1a1a]/40"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-black/10 px-4 py-3 text-sm outline-none placeholder:text-[#1a1a1a]/40"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="border border-black/10 px-4 py-3 text-sm outline-none placeholder:text-[#1a1a1a]/40"
              />
              <textarea
                placeholder={`I'm interested in ${listing.address}.`}
                rows={4}
                className="border border-black/10 px-4 py-3 text-sm outline-none placeholder:text-[#1a1a1a]/40"
              />
              <button
                type="submit"
                className="bg-[#0d0d0c] px-8 py-3 text-xs font-medium uppercase tracking-[0.2em] text-white hover:bg-[#e61d25] hover:text-[#0d0d0c]"
              >
                Request Info
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16">
          <Link
            href="/listings"
            className="text-xs font-medium uppercase tracking-[0.2em] text-[#0d0d0c] hover:underline"
          >
            &larr; Back to All Listings
          </Link>
        </div>
      </div>
    </div>
  );
}
