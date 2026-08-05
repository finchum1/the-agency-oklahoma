import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0c] border-t border-white/10 text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/logo.avif"
              alt="The Agency Oklahoma"
              width={219}
              height={99}
              className="h-12 w-auto"
            />
            <p className="mt-4 text-sm leading-relaxed">
              Oklahoma City&apos;s boutique real estate brokerage for
              distinctive homes and the people who love them.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Explore
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link href="/listings" className="hover:text-[#c7a86a]">Listings</Link></li>
              <li><Link href="/neighborhoods" className="hover:text-[#c7a86a]">Neighborhoods</Link></li>
              <li><Link href="/buy" className="hover:text-[#c7a86a]">Buy</Link></li>
              <li><Link href="/sell" className="hover:text-[#c7a86a]">Sell</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link href="/agents" className="hover:text-[#c7a86a]">Our Agents</Link></li>
              <li><Link href="/about" className="hover:text-[#c7a86a]">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-[#c7a86a]">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>6208 N Western Ave, Oklahoma City, OK 73118</li>
              <li>
                <a href="tel:+14055550100" className="hover:text-[#c7a86a]">
                  (405) 555-0100
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@theagencyoklahoma.com"
                  className="hover:text-[#c7a86a]"
                >
                  hello@theagencyoklahoma.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} The Agency Oklahoma. All rights
            reserved. Equal Housing Opportunity.
          </p>
          <p>Independently owned and operated.</p>
        </div>
      </div>
    </footer>
  );
}
