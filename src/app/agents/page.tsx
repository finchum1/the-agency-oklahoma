import type { Metadata } from "next";
import { agents } from "@/lib/agents";

export const metadata: Metadata = {
  title: "Our Agents | The Agency Oklahoma",
};

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function AgentsPage() {
  return (
    <div>
      <section className="border-b border-black/10 bg-[#0d0d0c] py-20 text-center text-white">
        <p className="text-xs uppercase tracking-[0.4em] text-white">
          Our Team
        </p>
        <h1 className="mt-4 font-serif text-4xl sm:text-5xl">
          Meet The Agents
        </h1>
        <p className="mx-auto mt-4 max-w-xl px-6 text-white/70">
          {agents.length} licensed agents serving Oklahoma City, Edmond,
          Nichols Hills, and the surrounding metro.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {agents.map((agent) => (
            <div key={agent.slug} className="group border border-black/10 p-6">
              <div className="flex aspect-square w-20 items-center justify-center bg-[#0d0d0c] font-serif text-2xl text-white">
                {initials(agent.name)}
              </div>
              <div className="mt-5">
                <h3 className="font-serif text-xl text-[#0d0d0c]">
                  {agent.name}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-[#0d0d0c]">
                  {agent.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#1a1a1a]/70">
                  {agent.bio}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {agent.specialties.map((tag) => (
                    <span
                      key={tag}
                      className="border border-black/10 px-2 py-1 text-[10px] uppercase tracking-[0.1em] text-[#1a1a1a]/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-[11px] uppercase tracking-[0.1em] text-[#1a1a1a]/40">
                  OK License #{agent.license}
                </p>
                <a
                  href="/contact"
                  className="mt-2 inline-block text-xs font-medium uppercase tracking-[0.15em] text-[#0d0d0c] hover:underline"
                >
                  Contact {agent.name.split(" ")[0]} &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
