import Image from "next/image";
import Link from "next/link";
import PropertyCard from "@/components/PropertyCard";
import { listings, neighborhoods } from "@/lib/data";

export default function Home() {
  const featured = listings.slice(0, 3);
  const featuredHoods = neighborhoods.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative flex h-[92vh] min-h-[560px] items-center justify-center overflow-hidden bg-[#0d0d0c]">
        <Image
          src="https://picsum.photos/seed/aokhero/1920/1080"
          alt="Oklahoma City skyline"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0c] via-[#0d0d0c]/30 to-[#0d0d0c]/40" />

        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center text-white">
          <p className="text-xs uppercase tracking-[0.4em] text-white">
            50+ Years of Real Estate Experience
          </p>
          <h1 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            The Agency Oklahoma
          </h1>
          <p className="mt-6 max-w-xl text-base text-white/80 sm:text-lg">
            A boutique real estate brokerage representing Oklahoma&apos;s most
            distinctive properties and the clients who call them home.
          </p>

          {/* Search bar */}
          <form className="mt-10 flex w-full max-w-2xl flex-col gap-3 bg-white p-3 shadow-xl sm:flex-row">
            <input
              type="text"
              placeholder="City, neighborhood, or address"
              className="flex-1 bg-transparent px-4 py-3 text-sm text-[#1a1a1a] outline-none placeholder:text-[#1a1a1a]/40"
            />
            <button
              type="submit"
              className="bg-[#0d0d0c] px-8 py-3 text-xs font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#e61d25] hover:text-[#0d0d0c]"
            >
              Search Homes
            </button>
          </form>

          <div className="mt-8 flex gap-8 text-xs uppercase tracking-[0.15em] text-white/70">
            <Link href="/buy" className="hover:text-white">Buy a Home</Link>
            <Link href="/sell" className="hover:text-white">Sell a Home</Link>
            <Link href="/agents" className="hover:text-white">Meet Our Agents</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-14 text-center sm:grid-cols-4 lg:px-10">
          {[
            ["$480M+", "Sold Volume"],
            ["18", "Years in OKC"],
            ["1,200+", "Homes Sold"],
            ["24", "Agents"],
          ].map(([stat, label]) => (
            <div key={label}>
              <p className="font-serif text-3xl text-[#0d0d0c] sm:text-4xl">
                {stat}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.15em] text-[#1a1a1a]/50">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Listings */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="flex flex-col items-center text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[#0d0d0c]">
            Featured Properties
          </p>
          <h2 className="mt-4 font-serif text-3xl text-[#0d0d0c] sm:text-4xl">
            Currently Representing
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((listing) => (
            <PropertyCard key={listing.id} listing={listing} />
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            href="/listings"
            className="border border-[#0d0d0c] px-8 py-3 text-xs font-medium uppercase tracking-[0.2em] text-[#0d0d0c] transition-colors hover:bg-[#0d0d0c] hover:text-white"
          >
            View All Listings
          </Link>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="bg-[#0d0d0c] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col items-center text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-white">
              Where We Work
            </p>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
              Explore Oklahoma City Neighborhoods
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {featuredHoods.map((hood) => (
              <Link
                key={hood.id}
                href="/neighborhoods"
                className="group relative block aspect-[3/4] overflow-hidden"
              >
                <Image
                  src={hood.image}
                  alt={hood.name}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="font-serif text-2xl">{hood.name}</h3>
                  <p className="mt-2 text-sm text-white/70">{hood.blurb}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-10">
        <h2 className="font-serif text-3xl text-[#0d0d0c] sm:text-4xl">
          Ready to make your move?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[#1a1a1a]/70">
          Whether you&apos;re buying your first home or listing an estate,
          our agents bring local expertise and a global network to every
          transaction.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="bg-[#0d0d0c] px-8 py-3 text-xs font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#e61d25] hover:text-[#0d0d0c]"
          >
            Contact Us
          </Link>
          <Link
            href="/agents"
            className="border border-[#0d0d0c] px-8 py-3 text-xs font-medium uppercase tracking-[0.2em] text-[#0d0d0c] transition-colors hover:bg-[#0d0d0c] hover:text-white"
          >
            Meet Our Agents
          </Link>
        </div>
      </section>
    </div>
  );
}
