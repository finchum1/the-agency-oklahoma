// One-off generator: turns agents-data.json (factual data only) into
// src/lib/agents.ts, with an ORIGINAL short bio composed from those facts
// for each person. No bio text is copied from the source site.
import { readFileSync, writeFileSync } from "node:fs";

const raw = JSON.parse(
  readFileSync(new URL("../agents-data.json", import.meta.url), "utf-8")
);

function firstName(name) {
  return name.split(" ")[0];
}

// Specialty tags are short phrases that often contain proper nouns
// (place names, etc.), so we keep their original casing rather than
// force-lowercasing, which would mangle names like "Oklahoma City".
function lead(text) {
  return text;
}

function makeBio(agent, i) {
  const first = firstName(agent.name);
  const parts = agent.specialties.filter(Boolean);
  const isLeader = /Managing Partner/i.test(agent.title);

  const openers = [
    first + " is a licensed real estate agent with The Agency Oklahoma.",
    first + " works with buyers and sellers across the Oklahoma City metro as part of The Agency Oklahoma team.",
    first + " brings local market knowledge to every client relationship at The Agency Oklahoma.",
  ];
  const leaderOpener =
    first + " helps lead The Agency Oklahoma as " + agent.title + ".";

  let focusSentence = "";
  if (parts.length === 3) {
    focusSentence =
      first + "'s focus areas include " + lead(parts[0]) + ", " +
      lead(parts[1]) + ", and " + lead(parts[2]) + ".";
  } else if (parts.length === 2) {
    focusSentence =
      first + " focuses on " + lead(parts[0]) + " and " + lead(parts[1]) + ".";
  } else if (parts.length === 1) {
    focusSentence = first + " focuses on " + lead(parts[0]) + ".";
  }

  const closers = [
    "Licensed in Oklahoma (#" + agent.license + ").",
    "Oklahoma real estate license #" + agent.license + ".",
    "Reach out to connect on your next move — Oklahoma license #" + agent.license + ".",
  ];

  const opener = isLeader ? leaderOpener : openers[i % openers.length];
  const closer = closers[(i + 1) % closers.length];

  return [opener, focusSentence, closer].filter(Boolean).join(" ");
}

const agents = raw.map((a, i) => ({
  slug: a.slug,
  name: a.name,
  title: a.title,
  license: a.license,
  photoUrl: a.photoUrl,
  specialties: a.specialties.filter(Boolean),
  bio: makeBio(a, i),
}));

agents.sort((a, b) => {
  const aLead = /Managing Partner/i.test(a.title) ? 0 : 1;
  const bLead = /Managing Partner/i.test(b.title) ? 0 : 1;
  return aLead - bLead;
});

const header =
  "// Real roster data for The Agency Oklahoma, generated from factual\n" +
  "// fields (name, title, license #, photo URL, specialty tags) pulled from\n" +
  "// theagencyoklahoma.com/agent/*. Bios below are ORIGINAL text composed\n" +
  "// from those facts, no bio copy was reproduced from the source site.\n" +
  "// Photos are hotlinked directly from the brokerage's own site (not\n" +
  "// downloaded or re-hosted).\n\n" +
  "export type Agent = {\n" +
  "  slug: string;\n" +
  "  name: string;\n" +
  "  title: string;\n" +
  "  license: string;\n" +
  "  photoUrl: string;\n" +
  "  specialties: string[];\n" +
  "  bio: string;\n" +
  "};\n\n" +
  "export const agents: Agent[] = ";

const tsOut = header + JSON.stringify(agents, null, 2) + ";\n";

writeFileSync(new URL("../src/lib/agents.ts", import.meta.url), tsOut);
console.log("Wrote " + agents.length + " agents to src/lib/agents.ts");
