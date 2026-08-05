import type { Metadata } from "next";
import PropertyCard from "@/components/PropertyCard";
import { listings } from "@/lib/data";

export const metadata: Metadata = {
  title: "Listings | The Agency Oklahoma",
};

export default function ListingsPage() {
  return (
    <div>
      <section className="border-b border-black/10 bg-[#0d0d0c] py-20 text-center text-white">
        <p className="text-xs uppercase tracking-[0.4em] text-[#c7a86a]">
          Properties
        </p>
        <h1 className="mt-4 font-serif text-4xl sm:text-5xl">
          Current Listings
        </h1>
        <p className="mx-auto mt-4 max-w-xl px-6 text-white/70">
          Browse homes represented by The Agency Oklahoma across the
          metro&apos;s most sought-after neighborhoods.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        {/* Filter bar (visual only) */}
        <div className="mb-12 flex flex-wrap gap-3 border border-black/10 bg-white p-4">
          <select className="flex-1 min-w-[160px] border border-black/10 px-4 py-3 text-sm text-[#1a1a1a]/70">
            <option>Any Price</option>
            <option>$400k &ndash; $700k</option>
            <option>$700k &ndash; $1M</option>
            <option>$1M+</option>
          </select>
          <select className="flex-1 min-w-[160px] border border-black/10 px-4 py-3 text-sm text-[#1a1a1a]/70">
            <option>Any Beds</option>
            <option>3+</option>
            <option>4+</option>
            <option>5+</option>
          </select>
          <select className="flex-1 min-w-[160px] border border-black/10 px-4 py-3 text-sm text-[#1a1a1a]/70">
            <option>Any Neighborhood</option>
            <option>Nichols Hills</option>
            <option>Edmond</option>
            <option>Midtown</option>
            <option>Western Avenue</option>
            <option>Deer Creek</option>
          </select>
          <button className="bg-[#0d0d0c] px-8 py-3 text-xs font-medium uppercase tracking-[0.2em] text-white hover:bg-[#c7a86a] hover:text-[#0d0d0c]">
            Filter
          </button>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {listings.map((listing) => (
            <PropertyCard key={listing.id} listing={listing} />
          ))}
        </div>
      </section>
    </div>
  );
}
