import type { Metadata } from "next";
import Image from "next/image";
import { neighborhoods } from "@/lib/data";

export const metadata: Metadata = {
  title: "Neighborhoods | The Agency Oklahoma",
};

export default function NeighborhoodsPage() {
  return (
    <div>
      <section className="border-b border-black/10 bg-[#0d0d0c] py-20 text-center text-white">
        <p className="text-xs uppercase tracking-[0.4em] text-[#c7a86a]">
          Where We Work
        </p>
        <h1 className="mt-4 font-serif text-4xl sm:text-5xl">
          Oklahoma City Neighborhoods
        </h1>
        <p className="mx-auto mt-4 max-w-xl px-6 text-white/70">
          From storied estates to walkable urban lofts, explore the areas we
          know best.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {neighborhoods.map((hood) => (
            <div key={hood.id} className="group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={hood.image}
                  alt={hood.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-serif text-xl text-[#0d0d0c]">
                  {hood.name}
                </h3>
                <p className="mt-2 text-sm text-[#1a1a1a]/70">{hood.blurb}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
