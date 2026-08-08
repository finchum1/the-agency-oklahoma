import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | The Agency Oklahoma",
};

export default function AboutPage() {
  return (
    <div>
      <section className="border-b border-black/10 bg-[#0d0d0c] py-20 text-center text-white">
        <p className="text-xs uppercase tracking-[0.4em] text-white">
          About Us
        </p>
        <h1 className="mt-4 font-serif text-4xl sm:text-5xl">
          Our Story
        </h1>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="https://picsum.photos/seed/aokabout/1000/750"
              alt="The Agency Oklahoma office"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-serif text-2xl text-[#0d0d0c] sm:text-3xl">
              A boutique brokerage built for Oklahoma City
            </h2>
            <p className="mt-5 leading-relaxed text-[#1a1a1a]/70">
              The Agency Oklahoma was founded to bring a more personal,
              design-forward approach to real estate in the Oklahoma City
              metro. We pair deep local market knowledge with modern
              marketing, so every listing gets the attention it deserves and
              every buyer gets an advocate who knows the neighborhoods
              inside and out.
            </p>
            <p className="mt-4 leading-relaxed text-[#1a1a1a]/70">
              From historic Nichols Hills estates to new construction in
              Edmond and Deer Creek, our agents specialize across the
              metro&apos;s most sought-after communities &mdash; and treat
              every transaction, big or small, with the same level of care.
            </p>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 gap-10 border-t border-black/10 pt-16 sm:grid-cols-3">
          {[
            {
              title: "Local Expertise",
              body: "Every agent lives and works in the neighborhoods they serve.",
            },
            {
              title: "Modern Marketing",
              body: "Professional photography, staging, and digital campaigns for every listing.",
            },
            {
              title: "White-Glove Service",
              body: "A dedicated point of contact from first showing through closing day.",
            },
          ].map((item) => (
            <div key={item.title}>
              <h3 className="font-serif text-lg text-[#0d0d0c]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#1a1a1a]/70">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
