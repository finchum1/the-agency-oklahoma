import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sell a Home | The Agency Oklahoma",
};

const steps = [
  {
    title: "Home Valuation",
    body: "We provide a data-backed pricing strategy based on current market conditions and comparable sales.",
  },
  {
    title: "Staging & Photography",
    body: "Professional staging guidance and photography to present your home at its absolute best.",
  },
  {
    title: "Marketing",
    body: "Your listing is featured across our network, social channels, and premier real estate portals.",
  },
  {
    title: "Negotiation & Close",
    body: "We evaluate every offer and negotiate the best terms to get you to a confident closing.",
  },
];

export default function SellPage() {
  return (
    <div>
      <section className="relative flex h-[55vh] min-h-[420px] items-center justify-center overflow-hidden bg-[#0d0d0c] text-center text-white">
        <Image
          src="https://picsum.photos/seed/aoksell/1600/900"
          alt="Selling a home in Oklahoma City"
          fill
          className="object-cover opacity-50"
        />
        <div className="relative z-10 px-6">
          <p className="text-xs uppercase tracking-[0.4em] text-[#c7a86a]">
            Sell
          </p>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl">
            List With Confidence
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            A marketing-first approach that puts your home in front of the
            right buyers, faster.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.title}>
              <span className="font-serif text-3xl text-[#c7a86a]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-serif text-lg text-[#0d0d0c]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#1a1a1a]/70">
                {step.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 border-t border-black/10 pt-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-serif text-2xl text-[#0d0d0c] sm:text-3xl">
                What&apos;s your home worth?
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-[#1a1a1a]/70">
                Get a complimentary, no-obligation home valuation from a
                local agent who knows your neighborhood.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-block bg-[#0d0d0c] px-8 py-3 text-xs font-medium uppercase tracking-[0.2em] text-white hover:bg-[#c7a86a] hover:text-[#0d0d0c]"
              >
                Get a Free Valuation
              </Link>
            </div>

            <form className="border border-black/10 bg-white p-8">
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Property Address"
                  className="border border-black/10 px-4 py-3 text-sm outline-none placeholder:text-[#1a1a1a]/40"
                />
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
                <button
                  type="submit"
                  className="bg-[#0d0d0c] px-8 py-3 text-xs font-medium uppercase tracking-[0.2em] text-white hover:bg-[#c7a86a] hover:text-[#0d0d0c]"
                >
                  Request Valuation
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
