import type { Metadata } from "next";
import Image from "next/image";
import { agents } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Agents | The Agency Oklahoma",
};

export default function AgentsPage() {
  return (
    <div>
      <section className="border-b border-black/10 bg-[#0d0d0c] py-20 text-center text-white">
        <p className="text-xs uppercase tracking-[0.4em] text-[#c7a86a]">
          Our Team
        </p>
        <h1 className="mt-4 font-serif text-4xl sm:text-5xl">
          Meet The Agents
        </h1>
        <p className="mx-auto mt-4 max-w-xl px-6 text-white/70">
          Local expertise, global reach. Get to know the people behind The
          Agency Oklahoma.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {agents.map((agent) => (
            <div key={agent.id} className="group">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#e8e6df]">
                <Image
                  src={agent.image}
                  alt={agent.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                />
              </div>
              <div className="mt-5">
                <h3 className="font-serif text-xl text-[#0d0d0c]">
                  {agent.name}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-[#c7a86a]">
                  {agent.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#1a1a1a]/70">
                  {agent.bio}
                </p>
                <div className="mt-4 flex flex-col gap-1 text-sm text-[#1a1a1a]/70">
                  <a href={`tel:${agent.phone}`} className="hover:text-[#c7a86a]">
                    {agent.phone}
                  </a>
                  <a
                    href={`mailto:${agent.email}`}
                    className="hover:text-[#c7a86a]"
                  >
                    {agent.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
