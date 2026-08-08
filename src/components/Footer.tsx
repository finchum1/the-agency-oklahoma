import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0c] border-t border-white/10 text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/logo-red.png"
              alt="The Agency Oklahoma"
              width={1194}
              height={524}
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
              <li><Link href="/listings" className="hover:text-white">Listings</Link></li>
              <li><Link href="/neighborhoods" className="hover:text-white">Neighborhoods</Link></li>
              <li><Link href="/buy" className="hover:text-white">Buy</Link></li>
              <li><Link href="/sell" className="hover:text-white">Sell</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link href="/agents" className="hover:text-white">Our Agents</Link></li>
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>112 S Broadway, Edmond, OK 73034</li>
              <li>
                <a href="tel:+14052163693" className="hover:text-white">
                  405-216-3693
                </a>
              </li>
              <li>
                <a
                  href="mailto:wayne.kirby@theagencyre.com"
                  className="hover:text-white"
                >
                  wayne.kirby@theagencyre.com
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
