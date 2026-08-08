import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Buy a Home | The Agency Oklahoma",
};

const steps = [
  {
    title: "Discovery Call",
    body: "We start by understanding your goals, timeline, and must-haves for your next home.",
  },
  {
    title: "Private Tours",
    body: "Your agent curates a list of homes worth seeing and arranges private showings on your schedule.",
  },
  {
    title: "Offer & Negotiation",
    body: "We build a competitive offer strategy and negotiate on your behalf every step of the way.",
  },
  {
    title: "Closing",
    body: "We coordinate inspections, lending, and closing logistics so nothing falls through the cracks.",
  },
];

export default function BuyPage() {
  return (
    <div>
      <section className="relative flex h-[55vh] min-h-[420px] items-center justify-center overflow-hidden bg-[#0d0d0c] text-center text-white">
        <Image
          src="https://picsum.photos/seed/aokbuy/1600/900"
          alt="Buying a home in Oklahoma City"
          fill
          className="object-cover opacity-50"
        />
        <div className="relative z-10 px-6">
          <p className="text-xs uppercase tracking-[0.4em] text-white">
            Buy
          </p>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl">
            Find Your Next Home
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            A dedicated buyer specialist, curated listings, and a proven
            process from first tour to closing day.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.title}>
              <span className="font-serif text-3xl text-[#0d0d0c]">
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

        <div className="mt-20 flex flex-col items-center gap-4 border-t border-black/10 pt-16 text-center">
          <h2 className="font-serif text-2xl text-[#0d0d0c] sm:text-3xl">
            Ready to start touring homes?
          </h2>
          <div className="mt-2 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/listings"
              className="bg-[#0d0d0c] px-8 py-3 text-xs font-medium uppercase tracking-[0.2em] text-white hover:bg-[#e61d25] hover:text-[#0d0d0c]"
            >
              Browse Listings
            </Link>
            <Link
              href="/contact"
              className="border border-[#0d0d0c] px-8 py-3 text-xs font-medium uppercase tracking-[0.2em] text-[#0d0d0c] hover:bg-[#0d0d0c] hover:text-white"
            >
              Talk to an Agent
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
