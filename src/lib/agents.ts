// Real roster data for The Agency Oklahoma, generated from factual
// fields (name, title, license #, photo URL, specialty tags) pulled from
// theagencyoklahoma.com/agent/*. Bios below are ORIGINAL text composed
// from those facts — no bio copy was reproduced from the source site.
// `photoUrl` is kept for reference but is NOT currently rendered on the
// Agents page (src/app/agents/page.tsx uses initials placeholders
// instead) pending confirmation that reusing these photos here is
// authorized. Swap in real headshot files whenever they're available.

export type Agent = {
  slug: string;
  name: string;
  title: string;
  license: string;
  photoUrl: string;
  specialties: string[];
  bio: string;
};

export const agents: Agent[] = [
  {
    "slug": "wayne-kirby",
    "name": "Wayne Kirby",
    "title": "Managing Partner | Broker in Charge",
    "license": "155749",
    "photoUrl": "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85/https://media-production.lp-cdn.com/media/9ba25619-e27b-4d64-93f3-82023dc22cd3",
    "specialties": [
      "Residential Properties",
      "Oklahoma City Metro area",
      "Luxury Market"
    ],
    "bio": "Wayne helps lead The Agency Oklahoma as Managing Partner | Broker in Charge. Wayne's focus areas include Residential Properties, Oklahoma City Metro area, and Luxury Market. Oklahoma real estate license #155749."
  },
  {
    "slug": "wyatt-poindexter",
    "name": "Wyatt Poindexter",
    "title": "Managing Partner, The Agency Oklahoma City",
    "license": "130439",
    "photoUrl": "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85/https://media-production.lp-cdn.com/media/b6928d98-c510-4d7b-84fc-0eb06ab1b518",
    "specialties": [
      "Luxury real estate",
      "Complex negotiations",
      "Oklahoma luxury market"
    ],
    "bio": "Wyatt helps lead The Agency Oklahoma as Managing Partner, The Agency Oklahoma City. Wyatt's focus areas include Luxury real estate, Complex negotiations, and Oklahoma luxury market. Oklahoma real estate license #130439."
  },
  {
    "slug": "adam-hubregtse",
    "name": "Adam Hubregtse",
    "title": "Real Estate Agent",
    "license": "200131",
    "photoUrl": "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85/https://media-production.lp-cdn.com/media/b274a964-a511-4452-9f76-9a10eaf7811c",
    "specialties": [
      "Luxury Properties",
      "Investment Real Estate",
      "Oklahoma City Market"
    ],
    "bio": "Adam works with buyers and sellers across the Oklahoma City metro as part of The Agency Oklahoma team. Adam's focus areas include Luxury Properties, Investment Real Estate, and Oklahoma City Market. Reach out to connect on your next move — Oklahoma license #200131."
  },
  {
    "slug": "amie-turner",
    "name": "Amie Turner",
    "title": "Real Estate Agent",
    "license": "200381",
    "photoUrl": "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=1280/https://media-production.lp-cdn.com/media/41d0a764-bdb5-4dfb-94ad-2e78eeff3b3f",
    "specialties": [
      "New Construction & Renovations",
      "Tulsa & Surrounding Communities",
      "Family-Focused Home Search"
    ],
    "bio": "Amie brings local market knowledge to every client relationship at The Agency Oklahoma. Amie's focus areas include New Construction & Renovations, Tulsa & Surrounding Communities, and Family-Focused Home Search. Licensed in Oklahoma (#200381)."
  },
  {
    "slug": "andy-esposito",
    "name": "Andrew Esposito",
    "title": "Real Estate Agent",
    "license": "201424",
    "photoUrl": "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85/https://media-production.lp-cdn.com/media/afa8a0ff-66e1-4971-b231-23fced10926b",
    "specialties": [
      "New Construction",
      "Residential Lending",
      "Luxury Market"
    ],
    "bio": "Andrew is a licensed real estate agent with The Agency Oklahoma. Andrew's focus areas include New Construction, Residential Lending, and Luxury Market. Oklahoma real estate license #201424."
  },
  {
    "slug": "brad-mehl",
    "name": "Brad Mehl",
    "title": "Real Estate Agent",
    "license": "185412",
    "photoUrl": "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=1280/https://media-production.lp-cdn.com/media/c14e374c-d755-4bb2-9580-f574488c86b6",
    "specialties": [
      "First-time homebuyers",
      "Luxury real estate",
      "Oklahoma City market"
    ],
    "bio": "Brad works with buyers and sellers across the Oklahoma City metro as part of The Agency Oklahoma team. Brad's focus areas include First-time homebuyers, Luxury real estate, and Oklahoma City market. Reach out to connect on your next move — Oklahoma license #185412."
  },
  {
    "slug": "anna-sullivan",
    "name": "Anna Sullivan",
    "title": "Real Estate Agent",
    "license": "200721",
    "photoUrl": "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85/https://media-production.lp-cdn.com/media/0f5b1a0b-bde4-4b3c-b427-4f6e54e23eb8",
    "specialties": [
      "Luxury Real Estate",
      "First-Time Homebuyers",
      "Oklahoma City Metro"
    ],
    "bio": "Anna brings local market knowledge to every client relationship at The Agency Oklahoma. Anna's focus areas include Luxury Real Estate, First-Time Homebuyers, and Oklahoma City Metro. Licensed in Oklahoma (#200721)."
  },
  {
    "slug": "ashley-mullins",
    "name": "Ashley Mullins",
    "title": "Real Estate Agent",
    "license": "182035",
    "photoUrl": "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85/https://media-production.lp-cdn.com/media/4185f42a-ea5d-47dc-a5d6-8e4d8e206191",
    "specialties": [
      "Market Analysis & Negotiation",
      "Oklahoma City Luxury Real Estate",
      "First-Time Homebuyers"
    ],
    "bio": "Ashley is a licensed real estate agent with The Agency Oklahoma. Ashley's focus areas include Market Analysis & Negotiation, Oklahoma City Luxury Real Estate, and First-Time Homebuyers. Oklahoma real estate license #182035."
  },
  {
    "slug": "brandi-true",
    "name": "Brandi True",
    "title": "Real Estate Agent / Realtor",
    "license": "174547",
    "photoUrl": "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=1280/https://media-production.lp-cdn.com/media/8eb3002d-f26d-4ef0-a167-7ae28c152f01",
    "specialties": [
      "New Construction",
      "First-Time Homebuyers",
      "Luxury Residential Sales"
    ],
    "bio": "Brandi works with buyers and sellers across the Oklahoma City metro as part of The Agency Oklahoma team. Brandi's focus areas include New Construction, First-Time Homebuyers, and Luxury Residential Sales. Reach out to connect on your next move — Oklahoma license #174547."
  },
  {
    "slug": "brooke-fuser",
    "name": "Brooke Fuser",
    "title": "Real Estate Agent",
    "license": "206992",
    "photoUrl": "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=1280/https://media-production.lp-cdn.com/media/ae9155fe-df1c-4341-a7bc-839fcd5d80d8",
    "specialties": [
      "Oklahoma real estate",
      "Luxury lakeside development",
      "Residential investment properties"
    ],
    "bio": "Brooke brings local market knowledge to every client relationship at The Agency Oklahoma. Brooke's focus areas include Oklahoma real estate, Luxury lakeside development, and Residential investment properties. Licensed in Oklahoma (#206992)."
  },
  {
    "slug": "caitlin-rhodes",
    "name": "Caitlin Rhodes",
    "title": "Real Estate Agent",
    "license": "211211",
    "photoUrl": "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=1280/https://media-production.lp-cdn.com/media/022c4d7c-361b-4996-b9fb-237d35dbd0e0",
    "specialties": [
      "Luxury Brand Marketing",
      "High-End Property Representation",
      "Strategic Real Estate Development"
    ],
    "bio": "Caitlin is a licensed real estate agent with The Agency Oklahoma. Caitlin's focus areas include Luxury Brand Marketing, High-End Property Representation, and Strategic Real Estate Development. Oklahoma real estate license #211211."
  },
  {
    "slug": "cheri-rollins",
    "name": "Cheri Rollins",
    "title": "Real Estate Agent",
    "license": "160936",
    "photoUrl": "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85/https://media-production.lp-cdn.com/media/529def5d-53e6-45c2-adae-53f724d2867e",
    "specialties": [
      "Residential home buying/selling",
      "Investment properties",
      "Luxury market"
    ],
    "bio": "Cheri works with buyers and sellers across the Oklahoma City metro as part of The Agency Oklahoma team. Cheri's focus areas include Residential home buying/selling, Investment properties, and Luxury market. Reach out to connect on your next move — Oklahoma license #160936."
  },
  {
    "slug": "chris-hill",
    "name": "Chris Hill",
    "title": "Real Estate Agent",
    "license": "183598",
    "photoUrl": "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=1280/https://media-production.lp-cdn.com/media/d07e9cd3-f84f-47f0-a7ef-f99dc2675f9b",
    "specialties": [
      "Oklahoma City Real Estate",
      "Luxury Market",
      "Investment Properties"
    ],
    "bio": "Chris brings local market knowledge to every client relationship at The Agency Oklahoma. Chris's focus areas include Oklahoma City Real Estate, Luxury Market, and Investment Properties. Licensed in Oklahoma (#183598)."
  },
  {
    "slug": "david-kolb",
    "name": "David Kolb",
    "title": "Strategic Projects Manager, Common Good Development, LLC / Licensed Oklahoma Real Estate Agent",
    "license": "177828",
    "photoUrl": "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85/https://media-production.lp-cdn.com/media/78e7a5cd-f99e-4ba9-911d-e104d6a800ab",
    "specialties": [
      "Luxury Residential Sales",
      "Nonprofit/Faith-Based Development",
      "Community Real Estate Strategy"
    ],
    "bio": "David is a licensed real estate agent with The Agency Oklahoma. David's focus areas include Luxury Residential Sales, Nonprofit/Faith-Based Development, and Community Real Estate Strategy. Oklahoma real estate license #177828."
  },
  {
    "slug": "debbie-soriano",
    "name": "Debbie Soriano",
    "title": "Co-Principal, Luxe + Land Realty Group / Real Estate Agent",
    "license": "212302",
    "photoUrl": "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=1280/https://media-production.lp-cdn.com/media/2cadbb60-0652-4526-9f55-0fff9d58721f",
    "specialties": [
      "Luxury real estate sales",
      "Dallas-Fort Worth metroplex (Southlake, Westlake, Frisco)",
      "Oklahoma City real estate"
    ],
    "bio": "Debbie works with buyers and sellers across the Oklahoma City metro as part of The Agency Oklahoma team. Debbie's focus areas include Luxury real estate sales, Dallas-Fort Worth metroplex (Southlake, Westlake, Frisco), and Oklahoma City real estate. Reach out to connect on your next move — Oklahoma license #212302."
  },
  {
    "slug": "denita-henry",
    "name": "Denita Henry",
    "title": "Real Estate Agent",
    "license": "171971",
    "photoUrl": "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=1280/https://media-production.lp-cdn.com/media/9b31975b-7848-40ef-bfe6-1ebfc5775709",
    "specialties": [
      "Interior Design Expertise",
      "Residential Buying & Selling",
      "Custom Remodels & New Builds"
    ],
    "bio": "Denita brings local market knowledge to every client relationship at The Agency Oklahoma. Denita's focus areas include Interior Design Expertise, Residential Buying & Selling, and Custom Remodels & New Builds. Licensed in Oklahoma (#171971)."
  },
  {
    "slug": "dyane-holybee",
    "name": "Dyane Holybee",
    "title": "Real Estate Agent",
    "license": "179332",
    "photoUrl": "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85/https://media-production.lp-cdn.com/media/8d99c367-1fa5-4cbe-a06a-90e10e06afd9",
    "specialties": [
      "Luxury market",
      "Oklahoma City real estate",
      "Community-focused service"
    ],
    "bio": "Dyane is a licensed real estate agent with The Agency Oklahoma. Dyane's focus areas include Luxury market, Oklahoma City real estate, and Community-focused service. Oklahoma real estate license #179332."
  },
  {
    "slug": "evie-stover",
    "name": "Evie Stover",
    "title": "Real Estate Agent",
    "license": "185141",
    "photoUrl": "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85/https://media-production.lp-cdn.com/media/c0d2035a-0a1f-4ccf-8af2-7277d4156193",
    "specialties": [
      "Luxury Real Estate",
      "Home Flipping",
      "Oklahoma City Market"
    ],
    "bio": "Evie works with buyers and sellers across the Oklahoma City metro as part of The Agency Oklahoma team. Evie's focus areas include Luxury Real Estate, Home Flipping, and Oklahoma City Market. Reach out to connect on your next move — Oklahoma license #185141."
  },
  {
    "slug": "gina-underwood",
    "name": "Gina Underwood",
    "title": "Top-producing Realtor® and Team Leader",
    "license": "201866",
    "photoUrl": "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85/https://media-production.lp-cdn.com/media/382fdba3-be9a-4843-9cea-0da6651b92d1",
    "specialties": [
      "Home staging and presentation",
      "Luxury market sales",
      "Oklahoma City real estate"
    ],
    "bio": "Gina brings local market knowledge to every client relationship at The Agency Oklahoma. Gina's focus areas include Home staging and presentation, Luxury market sales, and Oklahoma City real estate. Licensed in Oklahoma (#201866)."
  },
  {
    "slug": "hannah-peters",
    "name": "Hannah Peters",
    "title": "Real Estate Agent",
    "license": "213161",
    "photoUrl": "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=1280/https://media-production.lp-cdn.com/media/70ab7ebf-88bd-481f-bcfd-bff0501709a8",
    "specialties": [
      "Buyer representation",
      "Seller representation",
      "Oklahoma City luxury market"
    ],
    "bio": "Hannah is a licensed real estate agent with The Agency Oklahoma. Hannah's focus areas include Buyer representation, Seller representation, and Oklahoma City luxury market. Oklahoma real estate license #213161."
  },
  {
    "slug": "jennifer-prudhom",
    "name": "Jennifer Prudhom",
    "title": "Real Estate Agent",
    "license": "206116",
    "photoUrl": "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=1280/https://media-production.lp-cdn.com/media/1ef0946a-1ae4-4fc5-ab0e-3ab97b0fcd78",
    "specialties": [
      "Residential buyer representation",
      "Residential seller representation",
      "Investment property consultation"
    ],
    "bio": "Jennifer works with buyers and sellers across the Oklahoma City metro as part of The Agency Oklahoma team. Jennifer's focus areas include Residential buyer representation, Residential seller representation, and Investment property consultation. Reach out to connect on your next move — Oklahoma license #206116."
  },
  {
    "slug": "john-norton",
    "name": "John Norton",
    "title": "Real Estate Agent",
    "license": "210702",
    "photoUrl": "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=1280/https://media-production.lp-cdn.com/media/b5346d78-2ce7-4098-84d5-2e785f65aaf2",
    "specialties": [
      "Lake Homes",
      "Luxury Residential",
      "Investment Properties"
    ],
    "bio": "John brings local market knowledge to every client relationship at The Agency Oklahoma. John's focus areas include Lake Homes, Luxury Residential, and Investment Properties. Licensed in Oklahoma (#210702)."
  },
  {
    "slug": "joseph-underwood",
    "name": "Joseph Underwood",
    "title": "Real Estate Agent",
    "license": "209232",
    "photoUrl": "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85/https://media-production.lp-cdn.com/media/d525ff14-0aad-4e16-b291-04c612e74f0d",
    "specialties": [
      "Luxury Real Estate",
      "Investment Properties",
      "First-Time Homebuyers"
    ],
    "bio": "Joseph is a licensed real estate agent with The Agency Oklahoma. Joseph's focus areas include Luxury Real Estate, Investment Properties, and First-Time Homebuyers. Oklahoma real estate license #209232."
  },
  {
    "slug": "joy-cox",
    "name": "Joy Cox",
    "title": "Licensed Real Estate Agent / Real Estate Operations Professional",
    "license": "201550",
    "photoUrl": "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85/https://media-production.lp-cdn.com/media/dbbfe989-98b7-4bb4-bbe2-281641366609",
    "specialties": [
      "Brokerage Operations",
      "Compliance & Disbursements",
      "Oklahoma City Real Estate"
    ],
    "bio": "Joy works with buyers and sellers across the Oklahoma City metro as part of The Agency Oklahoma team. Joy's focus areas include Brokerage Operations, Compliance & Disbursements, and Oklahoma City Real Estate. Reach out to connect on your next move — Oklahoma license #201550."
  },
  {
    "slug": "kacia-koch",
    "name": "Kacia Koch",
    "title": "Real Estate Agent",
    "license": "210925",
    "photoUrl": "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85/https://media-production.lp-cdn.com/media/29e9469e-25f3-4db2-9437-25232f17e082",
    "specialties": [
      "Oklahoma City Metro",
      "Luxury Real Estate",
      "Relationship Building"
    ],
    "bio": "Kacia brings local market knowledge to every client relationship at The Agency Oklahoma. Kacia's focus areas include Oklahoma City Metro, Luxury Real Estate, and Relationship Building. Licensed in Oklahoma (#210925)."
  },
  {
    "slug": "kale-springer",
    "name": "Kale Springer",
    "title": "Real Estate Agent",
    "license": "209127",
    "photoUrl": "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=1280/https://media-production.lp-cdn.com/media/7ef90836-fe80-48fc-8b8f-a23685b88f0d",
    "specialties": [
      "Oklahoma City real estate",
      "Luxury market",
      "Residential sales"
    ],
    "bio": "Kale is a licensed real estate agent with The Agency Oklahoma. Kale's focus areas include Oklahoma City real estate, Luxury market, and Residential sales. Oklahoma real estate license #209127."
  },
  {
    "slug": "katie-chapman",
    "name": "Katie Chapman",
    "title": "Real Estate Agent",
    "license": "179943",
    "photoUrl": "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85/https://media-production.lp-cdn.com/media/882096ec-e537-439f-a2c8-461c1bcb1ec0",
    "specialties": [
      "Lake Eufaula Real Estate",
      "Carlton Landing Market",
      "Lakeside Home Sales & Building"
    ],
    "bio": "Katie works with buyers and sellers across the Oklahoma City metro as part of The Agency Oklahoma team. Katie's focus areas include Lake Eufaula Real Estate, Carlton Landing Market, and Lakeside Home Sales & Building. Reach out to connect on your next move — Oklahoma license #179943."
  },
  {
    "slug": "kelli-osterman",
    "name": "Kelli Osterman",
    "title": "Licensed Real Estate Agent",
    "license": "151560",
    "photoUrl": "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85/https://media-production.lp-cdn.com/media/259ca02a-601a-4ed8-bb8a-68ddf254145d",
    "specialties": [
      "New Construction",
      "Interior Design Background",
      "Luxury Market"
    ],
    "bio": "Kelli brings local market knowledge to every client relationship at The Agency Oklahoma. Kelli's focus areas include New Construction, Interior Design Background, and Luxury Market. Licensed in Oklahoma (#151560)."
  },
  {
    "slug": "kennedy-brooks",
    "name": "Kennedy Brooks",
    "title": "Real Estate Agent",
    "license": "208221",
    "photoUrl": "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85/https://media-production.lp-cdn.com/media/cd6dc24f-b1b1-48d4-985c-ab6edb68a458",
    "specialties": [
      "Luxury Real Estate",
      "Oklahoma City Market",
      "Residential Sales"
    ],
    "bio": "Kennedy is a licensed real estate agent with The Agency Oklahoma. Kennedy's focus areas include Luxury Real Estate, Oklahoma City Market, and Residential Sales. Oklahoma real estate license #208221."
  },
  {
    "slug": "lauren-mueggenborg",
    "name": "Lauren Mueggenborg",
    "title": "Real Estate Agent",
    "license": "178424",
    "photoUrl": "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85/https://media-production.lp-cdn.com/media/8cb5d878-1fb3-4e46-8ef5-bfe09bd67ff9",
    "specialties": [
      "Luxury residential properties",
      "Farm and ranch properties",
      "Land sales"
    ],
    "bio": "Lauren works with buyers and sellers across the Oklahoma City metro as part of The Agency Oklahoma team. Lauren's focus areas include Luxury residential properties, Farm and ranch properties, and Land sales. Reach out to connect on your next move — Oklahoma license #178424."
  },
  {
    "slug": "lindsay-greene",
    "name": "Lindsay Greene",
    "title": "Real Estate Agent",
    "license": "176844",
    "photoUrl": "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85/https://media-production.lp-cdn.com/media/1858bb0b-c2e7-4a7a-9571-a9b15eea655f",
    "specialties": [
      "Luxury listings",
      "Commercial real estate",
      "Investor properties"
    ],
    "bio": "Lindsay brings local market knowledge to every client relationship at The Agency Oklahoma. Lindsay's focus areas include Luxury listings, Commercial real estate, and Investor properties. Licensed in Oklahoma (#176844)."
  },
  {
    "slug": "lindsey-thompson",
    "name": "Lindsey Thompson",
    "title": "Real Estate Agent",
    "license": "160509",
    "photoUrl": "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85/https://media-production.lp-cdn.com/media/87a59c69-ea1c-4076-adc7-10c6e9bb415b",
    "specialties": [
      "Residential Sales",
      "Luxury Market",
      "Oklahoma City/Edmond"
    ],
    "bio": "Lindsey is a licensed real estate agent with The Agency Oklahoma. Lindsey's focus areas include Residential Sales, Luxury Market, and Oklahoma City/Edmond. Oklahoma real estate license #160509."
  },
  {
    "slug": "lisa-avdeyev",
    "name": "Lisa Avdeyev",
    "title": "Real Estate Agent",
    "license": "210011",
    "photoUrl": "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85/https://media-production.lp-cdn.com/media/738bfc91-cff2-497a-9fe4-b3e81ed566b2",
    "specialties": [
      "Buying",
      "Selling",
      "Investing"
    ],
    "bio": "Lisa works with buyers and sellers across the Oklahoma City metro as part of The Agency Oklahoma team. Lisa's focus areas include Buying, Selling, and Investing. Reach out to connect on your next move — Oklahoma license #210011."
  },
  {
    "slug": "liz-hagan",
    "name": "Liz Hagan",
    "title": "Real Estate Agent",
    "license": "178703",
    "photoUrl": "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85/https://media-production.lp-cdn.com/media/bb2395c7-6f69-42b4-ab7c-c281735120fd",
    "specialties": [
      "Real estate operations & management",
      "Transaction coordination",
      "Oklahoma City luxury market"
    ],
    "bio": "Liz brings local market knowledge to every client relationship at The Agency Oklahoma. Liz's focus areas include Real estate operations & management, Transaction coordination, and Oklahoma City luxury market. Licensed in Oklahoma (#178703)."
  },
  {
    "slug": "mackenzie-ohagan",
    "name": "Mackenzie O'Hagan",
    "title": "Real Estate Agent",
    "license": "210140",
    "photoUrl": "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=1280/https://media-production.lp-cdn.com/media/d287b1fd-1fc7-42e1-afe4-85e9c3ed455c",
    "specialties": [
      "Residential buying & selling",
      "Real estate investment",
      "Luxury market expertise"
    ],
    "bio": "Mackenzie is a licensed real estate agent with The Agency Oklahoma. Mackenzie's focus areas include Residential buying & selling, Real estate investment, and Luxury market expertise. Oklahoma real estate license #210140."
  },
  {
    "slug": "marcie-hill",
    "name": "Marcie Hill",
    "title": "Real Estate Agent",
    "license": "174977",
    "photoUrl": "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=1280/https://media-production.lp-cdn.com/media/4aa442b2-9ddc-4cbc-9fa4-b1f5cd79b0b0",
    "specialties": [
      "Grand Lake area real estate",
      "Luxury Oklahoma City market",
      "Residential buying & selling"
    ],
    "bio": "Marcie works with buyers and sellers across the Oklahoma City metro as part of The Agency Oklahoma team. Marcie's focus areas include Grand Lake area real estate, Luxury Oklahoma City market, and Residential buying & selling. Reach out to connect on your next move — Oklahoma license #174977."
  },
  {
    "slug": "mark-osterman",
    "name": "Mark Osterman",
    "title": "Real Estate Agent",
    "license": "173758",
    "photoUrl": "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85/https://media-production.lp-cdn.com/media/d27a919c-65ff-44fe-81a4-a78850f52f64",
    "specialties": [
      "New Construction",
      "Luxury Real Estate",
      "Residential Sales & Purchases"
    ],
    "bio": "Mark brings local market knowledge to every client relationship at The Agency Oklahoma. Mark's focus areas include New Construction, Luxury Real Estate, and Residential Sales & Purchases. Licensed in Oklahoma (#173758)."
  },
  {
    "slug": "melissa-hooper",
    "name": "Melissa Hooper",
    "title": "Real Estate Agent",
    "license": "156919",
    "photoUrl": "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85/https://media-production.lp-cdn.com/media/3428eb4d-8f53-4d8d-938a-2f3a3f3ff39c",
    "specialties": [
      "Luxury real estate",
      "Oklahoma City market expertise",
      "Client relationship building"
    ],
    "bio": "Melissa is a licensed real estate agent with The Agency Oklahoma. Melissa's focus areas include Luxury real estate, Oklahoma City market expertise, and Client relationship building. Oklahoma real estate license #156919."
  },
  {
    "slug": "mikala-ewald",
    "name": "Mikala Ewald",
    "title": "Real Estate Agent",
    "license": "210540",
    "photoUrl": "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85/https://media-production.lp-cdn.com/media/da8e1294-0e66-429b-8fc0-7054199eb8b4",
    "specialties": [
      "Residential buying and selling",
      "Luxury property marketing",
      "Oklahoma real estate investment"
    ],
    "bio": "Mikala works with buyers and sellers across the Oklahoma City metro as part of The Agency Oklahoma team. Mikala's focus areas include Residential buying and selling, Luxury property marketing, and Oklahoma real estate investment. Reach out to connect on your next move — Oklahoma license #210540."
  },
  {
    "slug": "mike-hearne",
    "name": "Mike Hearne",
    "title": "Real Estate Agent",
    "license": "173105",
    "photoUrl": "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85/https://media-production.lp-cdn.com/media/f493fed7-81ca-4895-8804-5c4949bb5b7c",
    "specialties": [
      "Oklahoma City real estate",
      "Luxury market expertise",
      "Residential buyer/seller representation"
    ],
    "bio": "Mike brings local market knowledge to every client relationship at The Agency Oklahoma. Mike's focus areas include Oklahoma City real estate, Luxury market expertise, and Residential buyer/seller representation. Licensed in Oklahoma (#173105)."
  },
  {
    "slug": "natalee-hitchcock-1",
    "name": "Natalee Hitchcock",
    "title": "Real Estate Agent",
    "license": "184276",
    "photoUrl": "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=1280/https://media-production.lp-cdn.com/media/696bb875-259d-4655-a5a2-944274cb5025",
    "specialties": [
      "New Construction & Custom Builds",
      "Luxury Market Sales",
      "Home Selling Services"
    ],
    "bio": "Natalee is a licensed real estate agent with The Agency Oklahoma. Natalee's focus areas include New Construction & Custom Builds, Luxury Market Sales, and Home Selling Services. Oklahoma real estate license #184276."
  },
  {
    "slug": "nick-kirby",
    "name": "Nick Kirby",
    "title": "Real Estate Agent, The Agency Oklahoma",
    "license": "212838",
    "photoUrl": "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85/https://media-production.lp-cdn.com/media/f99c153a-580e-48b9-8027-ed6744d3eec7",
    "specialties": [
      "Luxury real estate marketing",
      "Title & transaction expertise",
      "Oklahoma City residential sales"
    ],
    "bio": "Nick works with buyers and sellers across the Oklahoma City metro as part of The Agency Oklahoma team. Nick's focus areas include Luxury real estate marketing, Title & transaction expertise, and Oklahoma City residential sales. Reach out to connect on your next move — Oklahoma license #212838."
  },
  {
    "slug": "olya-mckee",
    "name": "Olya McKee",
    "title": "Real Estate Agent",
    "license": "201073",
    "photoUrl": "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=1280/https://media-production.lp-cdn.com/media/5e8fee93-7164-4d4c-8b0b-796b8bc3e910",
    "specialties": [
      "Oklahoma City Luxury Real Estate",
      "Client Relationship Building",
      "Community Expertise"
    ],
    "bio": "Olya brings local market knowledge to every client relationship at The Agency Oklahoma. Olya's focus areas include Oklahoma City Luxury Real Estate, Client Relationship Building, and Community Expertise. Licensed in Oklahoma (#201073)."
  },
  {
    "slug": "paula-vaughan",
    "name": "Paula Vaughan",
    "title": "Real Estate Agent",
    "license": "147911",
    "photoUrl": "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85/https://media-production.lp-cdn.com/media/7da30a70-c5ea-4130-8d57-b91bac933fd7",
    "specialties": [
      "Residential Real Estate Sales",
      "Edmond, Oklahoma Market",
      "Luxury Homes"
    ],
    "bio": "Paula is a licensed real estate agent with The Agency Oklahoma. Paula's focus areas include Residential Real Estate Sales, Edmond, Oklahoma Market, and Luxury Homes. Oklahoma real estate license #147911."
  },
  {
    "slug": "philip-shain",
    "name": "Philip Shain",
    "title": "Real Estate Agent",
    "license": "161542",
    "photoUrl": "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85/https://media-production.lp-cdn.com/media/bbe17771-570b-4ec1-b20b-0783feb7bb4f",
    "specialties": [
      "Luxury Real Estate",
      "Oklahoma City/Tulsa Markets",
      "Negotiation & Sales"
    ],
    "bio": "Philip works with buyers and sellers across the Oklahoma City metro as part of The Agency Oklahoma team. Philip's focus areas include Luxury Real Estate, Oklahoma City/Tulsa Markets, and Negotiation & Sales. Reach out to connect on your next move — Oklahoma license #161542."
  },
  {
    "slug": "rachel-cosby",
    "name": "Rachel Cosby",
    "title": "Real Estate Agent",
    "license": "209850",
    "photoUrl": "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=1280/https://media-production.lp-cdn.com/media/0020dd33-b30e-4bfe-a5d1-ca6b75699694",
    "specialties": [
      "Oklahoma Real Estate",
      "Construction & Rentals Expertise",
      "Luxury Market/OKC Properties"
    ],
    "bio": "Rachel brings local market knowledge to every client relationship at The Agency Oklahoma. Rachel's focus areas include Oklahoma Real Estate, Construction & Rentals Expertise, and Luxury Market/OKC Properties. Licensed in Oklahoma (#209850)."
  },
  {
    "slug": "reagan-akin",
    "name": "Reagan Akin",
    "title": "Real Estate Agent",
    "license": "161043",
    "photoUrl": "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=1280/https://media-production.lp-cdn.com/media/1762ac08-b637-4dea-8dc2-290cb2d6a61a",
    "specialties": [
      "Investment Properties",
      "Luxury Market",
      "Oklahoma City Real Estate"
    ],
    "bio": "Reagan is a licensed real estate agent with The Agency Oklahoma. Reagan's focus areas include Investment Properties, Luxury Market, and Oklahoma City Real Estate. Oklahoma real estate license #161043."
  },
  {
    "slug": "rebekah-eck",
    "name": "Rebekah Eck",
    "title": "Real Estate Agent",
    "license": "207467",
    "photoUrl": "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85/https://media-production.lp-cdn.com/media/abc68075-6600-4d58-bca8-143a126b7d2d",
    "specialties": [
      "Oklahoma City Real Estate",
      "Luxury Market",
      "Residential Sales"
    ],
    "bio": "Rebekah works with buyers and sellers across the Oklahoma City metro as part of The Agency Oklahoma team. Rebekah's focus areas include Oklahoma City Real Estate, Luxury Market, and Residential Sales. Reach out to connect on your next move — Oklahoma license #207467."
  },
  {
    "slug": "robin-allen",
    "name": "Robin Allen",
    "title": "Real Estate Agent",
    "license": "212841",
    "photoUrl": "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=1280/https://media-production.lp-cdn.com/media/828466cf-bd75-463c-b11c-2003140590f3",
    "specialties": [
      "Residential Sales",
      "Home Investment",
      "Oklahoma City Real Estate"
    ],
    "bio": "Robin brings local market knowledge to every client relationship at The Agency Oklahoma. Robin's focus areas include Residential Sales, Home Investment, and Oklahoma City Real Estate. Licensed in Oklahoma (#212841)."
  },
  {
    "slug": "ryan-hukill",
    "name": "Ryan Hukill",
    "title": "Real Estate Agent",
    "license": "148333",
    "photoUrl": "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85/https://media-production.lp-cdn.com/media/e3f5d933-1a05-4a04-9526-4a270543365a",
    "specialties": [
      "Oklahoma City Metro Real Estate",
      "Luxury Market Sales",
      "Builder & Developer Negotiations"
    ],
    "bio": "Ryan is a licensed real estate agent with The Agency Oklahoma. Ryan's focus areas include Oklahoma City Metro Real Estate, Luxury Market Sales, and Builder & Developer Negotiations. Oklahoma real estate license #148333."
  },
  {
    "slug": "sarah-whitmire",
    "name": "Sarah Whitmire",
    "title": "Real Estate Agent",
    "license": "207784",
    "photoUrl": "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85/https://media-production.lp-cdn.com/media/df202b65-7c29-4f94-903a-16f940638068",
    "specialties": [
      "Residential Properties",
      "Commercial Properties",
      "OKC Metro Market Expertise"
    ],
    "bio": "Sarah works with buyers and sellers across the Oklahoma City metro as part of The Agency Oklahoma team. Sarah's focus areas include Residential Properties, Commercial Properties, and OKC Metro Market Expertise. Reach out to connect on your next move — Oklahoma license #207784."
  },
  {
    "slug": "sarah-brown",
    "name": "Sarah Brown",
    "title": "Real Estate Agent",
    "license": "171605",
    "photoUrl": "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=1280/https://media-production.lp-cdn.com/media/6c93d627-eddf-45cd-9c67-61f99dcb3c13",
    "specialties": [
      "Oklahoma City Real Estate",
      "Luxury Market",
      "Residential Sales"
    ],
    "bio": "Sarah brings local market knowledge to every client relationship at The Agency Oklahoma. Sarah's focus areas include Oklahoma City Real Estate, Luxury Market, and Residential Sales. Licensed in Oklahoma (#171605)."
  },
  {
    "slug": "sofia-navarro",
    "name": "Sofia Navarro",
    "title": "Real Estate Agent",
    "license": "209323",
    "photoUrl": "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85/https://media-production.lp-cdn.com/media/3e400ac5-6b30-4284-937a-95a39e8a9638",
    "specialties": [
      "Bilingual services (English/Spanish)",
      "First-time homebuyer assistance",
      "Property sales and transactions"
    ],
    "bio": "Sofia is a licensed real estate agent with The Agency Oklahoma. Sofia's focus areas include Bilingual services (English/Spanish), First-time homebuyer assistance, and Property sales and transactions. Oklahoma real estate license #209323."
  },
  {
    "slug": "sommer-hibdon-dodd",
    "name": "Sommer Hibdon-Dodd",
    "title": "Real Estate Agent",
    "license": "153056",
    "photoUrl": "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85/https://media-production.lp-cdn.com/media/eb4fe548-be7f-4d13-8f34-babec2c3e527",
    "specialties": [
      "Residential Sales",
      "Luxury Market",
      "Oklahoma City Real Estate"
    ],
    "bio": "Sommer works with buyers and sellers across the Oklahoma City metro as part of The Agency Oklahoma team. Sommer's focus areas include Residential Sales, Luxury Market, and Oklahoma City Real Estate. Reach out to connect on your next move — Oklahoma license #153056."
  },
  {
    "slug": "tania-lavi",
    "name": "Tania Lavi",
    "title": "Director of Commercial Real Estate",
    "license": "182513",
    "photoUrl": "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85/https://media-production.lp-cdn.com/media/b3328b2c-2608-472b-ad55-eabdf9fd02d6",
    "specialties": [
      "Commercial Real Estate",
      "Investment Properties",
      "Oklahoma Market"
    ],
    "bio": "Tania brings local market knowledge to every client relationship at The Agency Oklahoma. Tania's focus areas include Commercial Real Estate, Investment Properties, and Oklahoma Market. Licensed in Oklahoma (#182513)."
  },
  {
    "slug": "terra-kirby",
    "name": "Terra Kirby",
    "title": "Real Estate Agent",
    "license": "177088",
    "photoUrl": "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85/https://media-production.lp-cdn.com/media/582ec2e7-9e67-470c-add4-0dbb880c7cc0",
    "specialties": [
      "Home Preparation for Sale",
      "Luxury Market",
      "Residential Buying & Selling"
    ],
    "bio": "Terra is a licensed real estate agent with The Agency Oklahoma. Terra's focus areas include Home Preparation for Sale, Luxury Market, and Residential Buying & Selling. Oklahoma real estate license #177088."
  },
  {
    "slug": "terrence-finchum",
    "name": "Terrence Finchum",
    "title": "Real Estate Agent",
    "license": "177872",
    "photoUrl": "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=1280/https://media-production.lp-cdn.com/media/b9c20e78-354b-497c-81cd-7de581206651",
    "specialties": [
      "Residential home sales",
      "Investment properties",
      "Multi-state real estate coordination"
    ],
    "bio": "Terrence works with buyers and sellers across the Oklahoma City metro as part of The Agency Oklahoma team. Terrence's focus areas include Residential home sales, Investment properties, and Multi-state real estate coordination. Reach out to connect on your next move — Oklahoma license #177872."
  },
  {
    "slug": "tess-myers",
    "name": "Tess Myers",
    "title": "Real Estate Agent",
    "license": "200887",
    "photoUrl": "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85/https://media-production.lp-cdn.com/media/31c64088-53e1-44a4-b00f-aed5f72e512e",
    "specialties": [
      "Downtown Edmond",
      "Real Estate Operations & Transaction Coordination",
      "Luxury Market (Oklahoma City region)"
    ],
    "bio": "Tess brings local market knowledge to every client relationship at The Agency Oklahoma. Tess's focus areas include Downtown Edmond, Real Estate Operations & Transaction Coordination, and Luxury Market (Oklahoma City region). Licensed in Oklahoma (#200887)."
  }
];
