import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | The Agency Oklahoma",
};

export default function ContactPage() {
  return (
    <div>
      <section className="border-b border-black/10 bg-[#0d0d0c] py-20 text-center text-white">
        <p className="text-xs uppercase tracking-[0.4em] text-white">
          Get In Touch
        </p>
        <h1 className="mt-4 font-serif text-4xl sm:text-5xl">Contact Us</h1>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl text-[#0d0d0c]">
              Visit Our Office
            </h2>
            <div className="mt-6 space-y-4 text-sm text-[#1a1a1a]/70">
              <p>6208 N Western Ave<br />Oklahoma City, OK 73118</p>
              <p>
                <a href="tel:+14055550100" className="hover:text-[#0d0d0c]">
                  (405) 555-0100
                </a>
              </p>
              <p>
                <a
                  href="mailto:hello@theagencyoklahoma.com"
                  className="hover:text-[#0d0d0c]"
                >
                  hello@theagencyoklahoma.com
                </a>
              </p>
              <p>Monday &ndash; Friday: 9am &ndash; 6pm<br />Saturday: 10am &ndash; 4pm</p>
            </div>
          </div>

          <form className="border border-black/10 bg-white p-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="First Name"
                className="border border-black/10 px-4 py-3 text-sm outline-none placeholder:text-[#1a1a1a]/40"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border border-black/10 px-4 py-3 text-sm outline-none placeholder:text-[#1a1a1a]/40"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="mt-4 w-full border border-black/10 px-4 py-3 text-sm outline-none placeholder:text-[#1a1a1a]/40"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="mt-4 w-full border border-black/10 px-4 py-3 text-sm outline-none placeholder:text-[#1a1a1a]/40"
            />
            <textarea
              placeholder="How can we help?"
              rows={5}
              className="mt-4 w-full border border-black/10 px-4 py-3 text-sm outline-none placeholder:text-[#1a1a1a]/40"
            />
            <button
              type="submit"
              className="mt-6 bg-[#0d0d0c] px-8 py-3 text-xs font-medium uppercase tracking-[0.2em] text-white hover:bg-[#e61d25] hover:text-[#0d0d0c]"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
