export type Listing = {
  id: string;
  address: string;
  city: string;
  neighborhood: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  status: "For Sale" | "Pending" | "Sold";
  image: string;
  description: string;
};

export type Agent = {
  id: string;
  name: string;
  title: string;
  phone: string;
  email: string;
  image: string;
  bio: string;
};

export type Neighborhood = {
  id: string;
  name: string;
  blurb: string;
  image: string;
};

// Placeholder imagery via picsum.photos seeded URLs — swap for real
// listing/headshot photography before launch.
const photo = (seed: string, w = 1200, h = 800) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const listings: Listing[] = [
  {
    id: "nichols-hills-manor",
    address: "1420 Guilford Ln",
    city: "Nichols Hills, OK",
    neighborhood: "Nichols Hills",
    price: 1895000,
    beds: 5,
    baths: 6,
    sqft: 6200,
    status: "For Sale",
    image: photo("aoklisting1"),
    description:
      "A gated estate on one of Nichols Hills' most sought-after lanes, with a chef's kitchen, wine cellar, and resort-style pool.",
  },
  {
    id: "gaillardia-fairway",
    address: "3315 Muirfield Village",
    city: "Oklahoma City, OK",
    neighborhood: "Gaillardia",
    price: 1250000,
    beds: 4,
    baths: 5,
    sqft: 5100,
    status: "For Sale",
    image: photo("aoklisting2"),
    description:
      "Golf-course living behind the gates of Gaillardia, with a private courtyard and unobstructed fairway views.",
  },
  {
    id: "western-ave-modern",
    address: "2211 NW 18th St",
    city: "Oklahoma City, OK",
    neighborhood: "Western Avenue",
    price: 685000,
    beds: 3,
    baths: 3,
    sqft: 2850,
    status: "Pending",
    image: photo("aoklisting3"),
    description:
      "Walkable modern build steps from Western Avenue's restaurants and boutiques, with rooftop skyline views.",
  },
  {
    id: "edmond-lakeside",
    address: "4890 Kelly Pointe Dr",
    city: "Edmond, OK",
    neighborhood: "Edmond",
    price: 975000,
    beds: 4,
    baths: 4,
    sqft: 4400,
    status: "For Sale",
    image: photo("aoklisting4"),
    description:
      "Lakeside retreat in one of Edmond's premier communities, with a walk-out lower level and private dock.",
  },
  {
    id: "midtown-brownstone",
    address: "816 NW 10th St",
    city: "Oklahoma City, OK",
    neighborhood: "Midtown",
    price: 549000,
    beds: 3,
    baths: 3,
    sqft: 2200,
    status: "For Sale",
    image: photo("aoklisting5"),
    description:
      "A refined brownstone-style townhome in the heart of Midtown, blocks from Automobile Alley.",
  },
  {
    id: "deer-creek-estate",
    address: "17705 Traditions Dr",
    city: "Edmond, OK",
    neighborhood: "Deer Creek",
    price: 1420000,
    beds: 5,
    baths: 5,
    sqft: 5800,
    status: "Sold",
    image: photo("aoklisting6"),
    description:
      "New-construction estate in Deer Creek schools, with a scullery kitchen and oversized outdoor living room.",
  },
];

export const agents: Agent[] = [
  {
    id: "avery-lockhart",
    name: "Avery Lockhart",
    title: "Managing Broker",
    phone: "(405) 555-0142",
    email: "avery@theagencyoklahoma.com",
    image: photo("aokagent1", 600, 600),
    bio: "Avery leads the brokerage with two decades of experience in Oklahoma City's luxury and new-construction markets.",
  },
  {
    id: "marcus-webb",
    name: "Marcus Webb",
    title: "Senior Partner",
    phone: "(405) 555-0198",
    email: "marcus@theagencyoklahoma.com",
    image: photo("aokagent2", 600, 600),
    bio: "Marcus specializes in Nichols Hills and Gaillardia estates, with a background in architecture and design.",
  },
  {
    id: "priya-nandan",
    name: "Priya Nandan",
    title: "Listing Specialist",
    phone: "(405) 555-0173",
    email: "priya@theagencyoklahoma.com",
    image: photo("aokagent3", 600, 600),
    bio: "Priya's marketing-first approach has made her one of the top-producing listing agents in the Edmond corridor.",
  },
  {
    id: "jordan-flynt",
    name: "Jordan Flynt",
    title: "Buyer Specialist",
    phone: "(405) 555-0164",
    email: "jordan@theagencyoklahoma.com",
    image: photo("aokagent4", 600, 600),
    bio: "Jordan guides first-time and relocating buyers through every step of finding a home in Greater OKC.",
  },
  {
    id: "camille-reyes",
    name: "Camille Reyes",
    title: "Relocation Director",
    phone: "(405) 555-0121",
    email: "camille@theagencyoklahoma.com",
    image: photo("aokagent5", 600, 600),
    bio: "Camille built the brokerage's relocation practice, helping corporate transferees settle across the metro.",
  },
  {
    id: "declan-shaw",
    name: "Declan Shaw",
    title: "New Development Advisor",
    phone: "(405) 555-0187",
    email: "declan@theagencyoklahoma.com",
    image: photo("aokagent6", 600, 600),
    bio: "Declan partners with builders across Edmond and Yukon to bring new-construction communities to market.",
  },
];

export const neighborhoods: Neighborhood[] = [
  {
    id: "nichols-hills",
    name: "Nichols Hills",
    blurb: "Storied estates and tree-lined lanes minutes from downtown.",
    image: photo("aokhood1"),
  },
  {
    id: "edmond",
    name: "Edmond",
    blurb: "Top-rated schools, lake living, and master-planned communities.",
    image: photo("aokhood2"),
  },
  {
    id: "midtown",
    name: "Midtown OKC",
    blurb: "Walkable urban living among restored brownstones and hospitals.",
    image: photo("aokhood3"),
  },
  {
    id: "western-avenue",
    name: "Western Avenue",
    blurb: "Boutique shopping and dining with character-filled bungalows.",
    image: photo("aokhood4"),
  },
  {
    id: "deer-creek",
    name: "Deer Creek",
    blurb: "New construction and acreage homesites on the metro's edge.",
    image: photo("aokhood5"),
  },
  {
    id: "downtown-okc",
    name: "Downtown OKC",
    blurb: "High-rise living steps from Scissortail Park and the Bricktown Canal.",
    image: photo("aokhood6"),
  },
];
