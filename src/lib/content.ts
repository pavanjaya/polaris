// Central content source for the Polaris Renewable Solutions website.
// Sourced from "Polaris India Company Deck 2026".

export const company = {
  name: "Polaris Renewable Solutions Pvt. Ltd.",
  shortName: "Polaris",
  legalName: "Polaris Renewable Solutions Pvt. Ltd.",
  tagline: "Energy as an asset.",
  description:
    "Polaris is a solar EPC and energy-engineering partner for industrial enterprises across India and Morocco — turning power from a fluctuating cost into a controlled, engineered advantage.",
  email: "info@polarisenergy.in",
  phone: "+91 91723 15353",
  website: "www.polarisenergy.in",
  address: "Gangapur Road, Nashik 422 013, Maharashtra, India",
  founded: 2015,
};

export const offices = [
  {
    name: "Headquarters — India",
    entity: "Polaris Renewable Solutions Pvt. Ltd.",
    address:
      "6, Sankalp Bunglow, Shankar Nagar, Savarkar Nagar, Gangapur Road, Nashik 422 013, Maharashtra, India",
    phone: "+91 91723 15353",
    phones: ["+91 91723 15353", "+91 93729 38936", "+91 77678 31717"],
    email: "info@polarisenergy.in",
  },
  {
    name: "Morocco Office",
    entity: "Polaris Global Energie SARL",
    address:
      "410, Boulevard Zerktouni Residence, Hamad App No. 1, Casablanca 20250, Kingdom of Morocco",
    phone: "+212 66 06 07626",
    phones: ["+212 66 06 07626", "+212 66 15 77755"],
    email: "maroc@polarisenergy.in",
  },
];

export const regions = [
  { label: "India", href: "/" },
  { label: "Global", href: "/global" },
];

export const global = {
  eyebrow: "Polaris Global",
  title: "Indian engineering discipline, delivered internationally",
  intro:
    "Since 2025, Polaris has operated beyond India as Polaris Global Energie SARL — bringing the same engineering-led, financially-modelled approach to industrial solar in Morocco, with the MENA and African markets next.",
  entity: {
    name: "Polaris Global Energie SARL",
    incorporated: "2025",
    base: "Casablanca, Kingdom of Morocco",
    directors:
      "Directed by the Polaris founding team, aligning international projects with European engineering standards.",
  },
  presence: [
    {
      market: "India",
      status: "Established since 2015",
      detail:
        "650+ commissioned projects and 100+ MW installed across Maharashtra, Gujarat and beyond — the operating base and engineering centre.",
    },
    {
      market: "Morocco",
      status: "Live since 2025",
      detail:
        "Polaris Global Energie SARL, Casablanca. First industrial rooftop projects under execution, ~3.10 MW initiated.",
    },
    {
      market: "MENA & Africa",
      status: "Next",
      detail:
        "Actively evaluating C&I solar opportunities across North and West Africa, using Morocco as the regional launch point.",
    },
  ],
  why: [
    {
      title: "One standard, every geography",
      body: "European engineering benchmarks applied to design, HT evacuation and safety — the same simulation-backed discipline used on every Indian project.",
    },
    {
      title: "Financial modelling travels",
      body: "IRR, payback, depreciation and currency-adjusted cash-flow analysis built into each international proposal, in local terms.",
    },
    {
      title: "Full lifecycle, remotely capable",
      body: "SCADA monitoring and analytics let a single accountable team support assets across borders through their full operating life.",
    },
  ],
};

export const socials = [
  { label: "Facebook", href: "https://www.facebook.com/Polarisenergysolutions/" },
  {
    label: "X",
    href: "https://x.com/polaris_nashik",
  },
  {
    label: "LinkedIn",
    href: "https://in.linkedin.com/company/polaris-renewable-solutions-pvt-ltd",
  },
  // TODO: replace with the real Polaris YouTube channel URL before launch.
  { label: "YouTube", href: "https://www.youtube.com/" },
  { label: "Instagram", href: "https://www.instagram.com/polaris_solar_solutions/" },
];

export const nav = [
  { label: "About", href: "/about" },
  { label: "Our Approach", href: "/#how-we-work" },
  { label: "Solutions", href: "/solutions" },
  { label: "Projects", href: "/projects" },
  { label: "P-ESS", href: "/p-ess" },
  { label: "Insights", href: "/insights" },
  { label: "Sustainability", href: "/sustainability" },
];

// Headline figures — "Polaris at a Glance"
export const stats = [
  { value: "650+", label: "Successful projects" },
  { value: "100 MW+", label: "Installed capacity" },
  { value: "90%", label: "Peak energy cost savings" },
  { value: "€17.5M", label: "Cumulative turnover (₹187.76 Cr)" },
];

export const glance = [
  { value: "650+", label: "Successful projects" },
  { value: "100 MW+", label: "Installed capacity" },
  { value: "€17.5M", label: "Cumulative turnover · ₹187.76 Cr" },
  { value: "90%", label: "Peak energy cost savings" },
  { value: "100+", label: "Team members" },
  { value: "25 yrs", label: "Infrastructure lifecycle" },
];

// How an engagement runs — condensed from the Solutions lifecycle.
export const process = [
  {
    step: "01",
    title: "Model & financial case",
    body: "Load analysis, generation simulation and an investment-grade model — IRR, payback, depreciation and cash flow — before a rupee is committed.",
    image: "/img/process/model-financial.jpg",
  },
  {
    step: "02",
    title: "Engineering & design",
    body: "In-house electrical and structural engineers size the system on fit, not margin; HT evacuation and safety to Indian, EU and US benchmarks.",
    image: "/img/projects/morocco.jpg",
  },
  {
    step: "03",
    title: "EPC execution",
    body: "Single-point delivery of procurement, construction and commissioning — most C&I plants energised in 45–90 days.",
    image: "/img/projects/forcon.jpg",
  },
  {
    step: "04",
    title: "25-year O&M",
    body: "SCADA monitoring, analytics and preventive maintenance for the full asset life. One team stays accountable to year 25.",
    image: "/img/bess-plant.jpg",
  },
];

// Indicative environmental impact — derived from 100 MW+ installed at a
// ~15% capacity factor and India's ~0.71 tCO2/MWh grid factor. Replace with
// measured portfolio generation once available.
export const impact = {
  note: "Indicative, based on 100 MW+ of installed Polaris capacity.",
  items: [
    { value: "131 GWh", label: "Clean energy generated each year" },
    { value: "93,000 t", label: "CO₂ emissions avoided each year" },
    { value: "1.5M", label: "Mature trees — equivalent annual absorption" },
    { value: "12,000", label: "Indian homes powered for a year" },
  ],
};

// ⚠️ PLACEHOLDER TESTIMONIALS — representative, role-attributed copy used to
// build the section. Replace with real, client-approved quotes and names
// before this site is published.
export const testimonials = [
  {
    quote:
      "Polaris didn't hand us a datasheet — they handed us an IRR model our CFO could sign off in one meeting. The plant has tracked the generation estimate within 2% since day one.",
    name: "Head of Projects",
    org: "Pharmaceutical manufacturer, Maharashtra",
  },
  {
    quote:
      "We went with the OPEX route to avoid the capex hit. Billing is clean, savings show up every month, and we've had zero operational involvement.",
    name: "VP — Operations",
    org: "Packaged-foods company, Gujarat",
  },
  {
    quote:
      "The site had rock, a monsoon window and a 0.5 km HT run. They engineered around all three and still commissioned in under 90 days.",
    name: "Plant Head",
    org: "Building-materials group, Central India",
  },
];

// Homepage "Our Solutions" — the four offering categories.
export const offerings = [
  {
    title: "Commercial & Industrial",
    summary:
      "Rooftop and ground-mount solar for factories, warehouses and campuses — engineered for four decades of dependable generation and structured to the balance sheet.",
  },
  {
    title: "Utility Scale",
    summary:
      "Large ground-mount and hybrid parks with HT evacuation, land and interconnection managed end to end for IPPs and open-access buyers.",
  },
  {
    title: "Finance Solutions",
    summary:
      "CAPEX, OPEX / RESCO, lease and group-captive structures — matched to your cash flow, with an investment-grade model behind every proposal.",
  },
  {
    title: "Energy Optimisation Consultant",
    summary:
      "Load analysis, BESS sizing, time-of-day strategy and SCADA-driven O&M — advisory that keeps the asset performing to year 25.",
  },
];

export const solutions = [
  {
    slug: "capex",
    title: "CAPEX — Asset ownership",
    summary:
      "Turnkey solar you invest in and fully own — maximum lifetime savings, accelerated depreciation, and complete control over your energy cost.",
    points: [
      "Full asset ownership",
      "Accelerated depreciation benefits",
      "Highest long-term IRR",
      "Complete EPC + O&M support",
    ],
  },
  {
    slug: "opex",
    title: "OPEX / RESCO — zero investment",
    summary:
      "Polaris invests, installs and operates the plant; you pay only for the energy consumed at a pre-agreed tariff, typically below grid rates.",
    points: [
      "Zero or minimal upfront investment",
      "Immediate reduction in electricity cost",
      "No operational responsibility",
      "Long-term tariff visibility",
    ],
  },
  {
    slug: "open-access",
    title: "Open Access & Group Captive",
    summary:
      "Off-site solar and hybrid power procured through open-access and group-captive structures — lower landed cost, scalable across facilities.",
    points: [
      "Large-scale energy sourcing",
      "Equity participation structure",
      "Multi-location power allocation",
      "Compliance with captive regulations",
    ],
  },
  {
    slug: "lease",
    title: "Lease-based captive solar",
    summary:
      "Adopt solar through fixed lease payments over a defined tenure, with ownership transferred to you at the end — positive cash flow from day one.",
    points: [
      "Low upfront cost",
      "Predictable payment structure",
      "Ownership transfer post-tenure",
      "Balance-sheet optimisation",
    ],
  },
  {
    slug: "glg",
    title: "Generation-Linked Performance (GLG)",
    summary:
      "Performance-driven models where generation is aligned to defined benchmarks — accountability and predictable outcomes across the asset life.",
    points: [
      "Performance-linked assurance",
      "Reduced operational risk",
      "Predictable energy output",
      "Financial-outcome alignment",
    ],
  },
  {
    slug: "bess",
    title: "BESS & energy optimisation",
    summary:
      "Battery Energy Storage Systems and time-of-day strategies to shave peaks, arbitrage tariffs and strengthen grid independence.",
    points: [
      "Peak shaving and demand management",
      "Time-of-day tariff optimisation",
      "Backup and reliability enhancement",
      "Future-ready energy infrastructure",
    ],
  },
  {
    slug: "epc",
    title: "End-to-end EPC & lifecycle O&M",
    summary:
      "One point of accountability from feasibility and design through commissioning, SCADA monitoring and long-term operations & maintenance.",
    points: [
      "Engineering to execution",
      "SCADA monitoring and analytics",
      "Long-term O&M support",
      "Consistent performance across asset life",
    ],
  },
  {
    slug: "advisory",
    title: "Financial structuring & advisory",
    summary:
      "Investment-grade financial modelling — IRR, payback, cash flow and tax optimisation — built into every proposal, plus policy, subsidy and financing support.",
    points: [
      "IRR and ROI optimisation",
      "Cash flow and payback analysis",
      "Depreciation and tax-benefit planning",
      "Subsidy, DISCOM and loan facilitation",
    ],
  },
];

export const advantages = [
  {
    title: "Engineering-led approach",
    body: "Qualified electrical and structural engineers, not sales staff with datasheets. Every system is backed by simulation, load analysis and performance modelling.",
  },
  {
    title: "Technology agnosticism",
    body: "We are not tied to any single equipment brand. Tier-1 technology is specified on optimal fit for your project — not on margin considerations.",
  },
  {
    title: "Proven industrial track record",
    body: "650+ projects executed for industry leaders including Bisleri, Reliance, Samsonite, Indian Oil and Parle — an unmatched record in our C&I scale band.",
  },
  {
    title: "Financial intelligence",
    body: "One of the few solar EPC firms globally to integrate depreciation analysis, IRR, EBITDA impact and tax optimisation as a core project deliverable.",
  },
  {
    title: "Full-lifecycle ownership",
    body: "A single point of accountability from feasibility to the 20th year of operation — eliminating the industry problem of 'orphaned' solar systems.",
  },
  {
    title: "Multi-geography capability",
    body: "Deep project experience across India, aligned with European engineering standards through our Morocco operations, Polaris Global Energie SARL.",
  },
];

// Homepage "Why Polaris" trust row — a curated subset of `advantages`,
// tightened for a scannable 4-up.
export const trust = [
  {
    title: "Engineering-led, not sales-led",
    body: "Qualified electrical and structural engineers size every system on fit — backed by simulation, load analysis and performance modelling.",
  },
  {
    title: "Built to Indian, EU & US standards",
    body: "Design, HT evacuation and safety engineered to international benchmarks — the same discipline on every project, in every geography.",
  },
  {
    title: "An investment-grade financial model",
    body: "IRR, payback, depreciation, EBITDA impact and tax optimisation delivered as a core project output — not an afterthought.",
  },
  {
    title: "Accountable to year 25",
    body: "One team from feasibility through the full 25-year O&M window, with SCADA monitoring and analytics — no orphaned assets.",
  },
];

// Careers page
export const careers = {
  intro:
    "Polaris is a small, engineering-led team delivering solar across India and Morocco. We hire people who want to own an outcome end to end — the financial model, the design, the build and the 25 years after it.",
  roles:
    "Electrical and structural engineers, project managers, site engineers and energy analysts.",
  culture: [
    {
      title: "Engineering owns the call",
      body: "Systems are sized on fit and physics, not on a sales target. If you can defend the number, you make the decision.",
    },
    {
      title: "One team, whole lifecycle",
      body: "You follow a project from feasibility through commissioning into O&M — no hand-offs to a team that never saw the site.",
    },
    {
      title: "Cross-border by default",
      body: "Indian projects and Morocco operations run to the same standards. Good work travels; so can you.",
    },
    {
      title: "Financially literate",
      body: "Everyone here can read an IRR model. Understanding why a project makes sense is part of the job, not a finance silo.",
    },
  ],
  email: "info@polarisenergy.in",
};

// Homepage "Who we serve" — industry segments, drawn from Polaris's
// live C&I project base.
export const segments = [
  {
    name: "Pharmaceutical",
    note: "Clean-room-grade power reliability with zero-penetration rooftop mounting on live facilities.",
  },
  {
    name: "Food & Beverage",
    note: "Centralised inverter architecture across large, non-uniform warehouse and plant roofs.",
  },
  {
    name: "Building Materials",
    note: "Terrain-engineered ground-mount with HT evacuation, delivered through the monsoon window.",
  },
  {
    name: "Manufacturing & Composites",
    note: "East-west racking and high-density layouts that flatten the daily generation profile.",
  },
  {
    name: "Mining & Minerals",
    note: "Robust structures for high-dust environments with 11 kV HT evacuation over distance.",
  },
  {
    name: "Warehousing & Logistics",
    note: "Fast rooftop deployment across multi-site portfolios under a single accountable team.",
  },
];

export const projects = [
  {
    name: "Kilitch Healthcare India Ltd.",
    image: "/img/projects/kilitch.jpg",
    location: "India",
    tech: "Industrial Rooftop Solar",
    model: "CAPEX",
    capacity: "1.25 MWp",
    generation: "16.5 lakh units / year",
    savings: "≈ ₹12 lakh / year (€10K)",
    status: "Commissioned",
    year: 2026,
    blurb:
      "Zero-penetration mounting across multiple rooftop elevations, delivered inside a live pharma manufacturing facility with BESS-ready infrastructure.",
  },
  {
    name: "General Mills India Pvt. Ltd.",
    image: "/img/projects/general-mills.jpg",
    location: "India",
    tech: "Industrial Rooftop Solar",
    model: "CAPEX",
    capacity: "1.20 MWp",
    generation: "16 lakh units / year",
    savings: "≈ ₹15–20 lakh / year (€14–18.5K)",
    status: "Commissioned",
    year: 2025,
    blurb:
      "Executed for a US MNC under American safety standards — centralised inverter architecture across multiple non-uniform rooftops.",
  },
  {
    name: "Shriram Stone Crusher",
    image: "/img/projects/shriram.jpg",
    location: "India",
    tech: "Ground-Mounted Solar",
    model: "CAPEX",
    capacity: "1.10 MWp",
    generation: "14.5 lakh units / year",
    savings: "≈ ₹13.8 lakh / year (€12.8K)",
    status: "Commissioned",
    year: 2025,
    blurb:
      "Terrain engineering with partial rock excavation and 11 kV HT evacuation over 0.5 km — delivered in 85 days through the monsoon.",
  },
  {
    name: "Forcon Infra Pvt. Ltd.",
    image: "/img/projects/forcon.jpg",
    location: "India",
    tech: "Ground-Mounted Solar",
    model: "CAPEX",
    capacity: "1 MWp",
    generation: "—",
    savings: "—",
    status: "Commissioned",
    year: 2025,
    blurb:
      "Engineered for a high-dust mining environment with a robust 11 kV HT evacuation system — full execution in a record 45 days.",
  },
  {
    name: "Indore Composite Pvt. Ltd.",
    image: "/img/projects/indore-composite.jpg",
    location: "India",
    tech: "Industrial Rooftop Solar",
    model: "CAPEX",
    capacity: "1 MWp",
    generation: "—",
    savings: "—",
    status: "Commissioned",
    year: 2025,
    blurb:
      "Advanced east-west racking on a large-height shed, maximising module density and evening out the daily generation profile.",
  },
  {
    name: "Advanced Enzyme Technologies Ltd.",
    image: "/img/projects/advanced-enzyme.jpg",
    location: "India",
    tech: "Industrial Rooftop Solar",
    model: "CAPEX",
    capacity: "1 MWp",
    generation: "—",
    savings: "—",
    status: "Commissioned",
    year: 2025,
    blurb:
      "Optimised module layout and tilt with strong earthing and lightning protection for an exposed industrial site.",
  },
  {
    name: "Indore International",
    image: "/img/projects/morocco.jpg",
    location: "Tangier, Morocco",
    tech: "Industrial Rooftop Solar",
    model: "CAPEX",
    capacity: "600 KWp",
    generation: "—",
    savings: "≈ €83,000 (MAD 908,000)",
    status: "Ongoing",
    year: 2026,
    blurb:
      "Polaris's first international pilot — a Magnis-coated, zero-penetration structure engineered for bitumen-sheet roofing and coastal wind loads.",
  },
];

export const clients = [
  "Bisleri",
  "Reliance",
  "Samsonite",
  "Indian Oil",
  "Parle",
  "General Mills",
  "Kilitch Healthcare",
  "Advanced Enzyme Technologies",
  "Seven Hills Beverages",
  "Indore Composite",
  "Forcon Infra",
  "Shriram Stone Crusher",
];

// ⚠️ PLACEHOLDER LOGOS — these are generic brand SVGs used only to build the
// logo-strip visual. Replace every entry with a real Polaris client/partner
// logo before this site is published. Files live in /public/img/clients/.
export const clientLogos = [
  { name: "Adobe", src: "/img/clients/adobe.svg" },
  { name: "Asana", src: "/img/clients/asana.svg" },
  { name: "Atlassian", src: "/img/clients/atlassian.svg" },
  { name: "Coinbase", src: "/img/clients/coinbase.svg" },
  { name: "Dropbox", src: "/img/clients/dropbox.svg" },
  { name: "Google", src: "/img/clients/google.svg" },
  { name: "Gumroad", src: "/img/clients/gumroad.svg" },
  { name: "Linear", src: "/img/clients/linear.svg" },
  { name: "Mailchimp", src: "/img/clients/mailchimp.svg" },
  { name: "Microsoft", src: "/img/clients/microsoft.svg" },
  { name: "Notion", src: "/img/clients/notion.svg" },
  { name: "Slack", src: "/img/clients/slack.svg" },
  { name: "Spotify", src: "/img/clients/spotify.svg" },
  { name: "Stripe", src: "/img/clients/stripe.svg" },
];

export const values = [
  {
    title: "Our purpose",
    body: "To empower industrial enterprises with energy independence — so power is no longer a fluctuating cost, but a controlled, engineered advantage.",
  },
  {
    title: "Our mission",
    body: "To transform industrial energy volatility into a controlled financial asset through precision engineering, multi-asset structuring and long-term performance management.",
  },
  {
    title: "Our vision",
    body: "To be the global benchmark for industrial energy engineering — defining how enterprises control, optimise and monetise their power infrastructure.",
  },
  {
    title: "Our philosophy",
    body: "Energy as an asset. A roof is underutilised real estate. By combining Tier-1 engineering with financial modelling, we change the structure of a balance sheet — not just a utility bill.",
  },
];

export const milestones = [
  {
    year: 2015,
    text: "Polaris Renewable Solutions is founded in Nashik, Maharashtra, entering the renewable energy sector to build market awareness.",
  },
  {
    year: 2017,
    text: "Secured the first 200 W residential project and a 200 kW industrial project for Seven Hills Beverages (Bisleri).",
  },
  {
    year: 2018,
    text: "Reached 1 MW of total installations.",
  },
  {
    year: 2019,
    text: "Crossed a cumulative 7 MW of installations across Maharashtra and Gujarat.",
  },
  {
    year: 2023,
    text: "Scaled to 20 MW of projects with a team of over 40 people.",
  },
  {
    year: 2025,
    text: "Expanded into Morocco as Polaris Global Energie SARL, initiating 3.10 MW of projects.",
  },
  {
    year: 2026,
    text: "Total projects crossed 100+ MW, adding 25 MW in the first half of the year alone.",
  },
];

export const founders = [
  {
    name: "Pushkar Panchakshari",
    role: "Chief Executive Officer",
    bio: "20+ years across IT, education and manufacturing, including senior roles in finance, procurement and import-export. Leads overall strategy, financial structuring, investor relations and international expansion, and is also a Director of Polaris Global Energie SARL, Morocco.",
  },
  {
    name: "Swapnil Tajanpure",
    role: "Director — Technical & Operations",
    bio: "An electrical engineer who has led the design and commissioning of 100 MW+ of solar infrastructure since founding the company. Responsible for engineering standards, safety protocols aligned to US, European and Indian benchmarks, and 25-year technical architecture.",
  },
  {
    name: "Kunwar Gujral",
    role: "Director — Sales & Marketing",
    bio: "Dual postgraduate from Deakin University, Australia (MBA in Marketing and a Master's in Information Systems) with hands-on experience in the Australian solar sector. Drives commercial strategy across India and Morocco, and serves as Director of Polaris Global Energie SARL.",
  },
];

export const leadership = [
  {
    name: "CA Archana Choudhary",
    role: "Principal Advisor — Finance",
    bio: "Chartered Accountant with deep expertise in project finance, tax structuring and capital planning; drives the financial rigour behind every investment proposal.",
  },
  {
    name: "Adv. Prathamesh Kashikar",
    role: "Chief Legal Counsel",
    bio: "Legal strategist across commercial contracts, regulatory compliance and energy-sector law; ensures every engagement is structurally sound and fully compliant.",
  },
  {
    name: "Nilesh Zambre",
    role: "Principal Partner — Strategy",
    bio: "Shapes Polaris's market positioning, business development and long-term growth roadmap with a sharp commercial lens on every client engagement.",
  },
  {
    name: "Sushil Kakad",
    role: "Associate Partner — HT Power Infrastructure",
    bio: "High-tension power specialist in grid connectivity, substation design and industrial electrical systems; leads the technical backbone of large-scale projects.",
  },
  {
    name: "Sameer Sonawane",
    role: "Associate — Brand & Growth Strategy",
    bio: "Communications leader building the Polaris brand across markets, translating engineering value into narratives that resonate with industrial decision-makers.",
  },
];

// "The Solar Opportunity" — the C&I case for structured solar
export const opportunity = {
  intro:
    "For industrial enterprises, structured renewable-energy adoption is no longer philosophical — it is mathematical. Commercial & industrial tariffs in India have risen 6–8% a year for a decade, and every point compresses margins for energy-intensive industry.",
  drivers: [
    {
      title: "Rising grid tariffs",
      body: "C&I electricity tariffs have climbed 6–8% annually, with further increases projected under the new Electricity Act framework.",
    },
    {
      title: "Carbon regulation pressure",
      body: "India's Carbon Credit Trading Scheme and global supply-chain requirements are pushing manufacturers to prove measurable carbon reduction. Solar is the most bankable proof point.",
    },
    {
      title: "Grid vulnerability",
      body: "The industrial grid remains exposed to demand-side volatility and power-quality fluctuations — a hidden operational cost most enterprises underestimate.",
    },
    {
      title: "A unique window",
      body: "Module prices are at historic lows while PM-KUSUM incentives, accelerated depreciation and ISTS charge waivers remain in force.",
    },
  ],
  financials: [
    { metric: "Simple payback", value: "3.5–7 years", note: "for well-structured industrial solar" },
    { metric: "IRR", value: "18–28%", note: "annualised, by system size and tariff band" },
    { metric: "NPV", value: "Positive from Year 1", note: "in most C&I deployments" },
    { metric: "Accelerated depreciation", value: "Up to 40% in Year 1", note: "under Indian IT provisions" },
    { metric: "Electricity cost savings", value: "≈ 80% below grid", note: "predictable over a 25-year asset life" },
  ],
  context:
    "India's installed solar capacity crossed 80 GW in 2024, with a national target of 500 GW of renewable capacity by 2030. The C&I segment is the fastest-growing sub-sector — driven by financial logic as much as sustainability mandates.",
};

export const insights = [
  {
    slug: "capex-vs-opex-for-industrial-solar",
    image: "/img/projects/kilitch.jpg",
    title: "CAPEX vs OPEX: choosing the right structure for industrial solar",
    date: "2026-01-20",
    category: "Financial structuring",
    excerpt:
      "Ownership, cash flow, depreciation and control pull in different directions. A framework for matching the commercial model to the balance sheet.",
  },
  {
    slug: "reading-a-solar-proposal-like-a-cfo",
    image: "/img/bess-plant.jpg",
    title: "Reading a solar proposal like a CFO",
    date: "2025-11-12",
    category: "Advisory",
    excerpt:
      "IRR, payback, NPV and EBITDA impact — the five numbers that should decide an industrial solar investment, and the assumptions behind each.",
  },
  {
    slug: "engineering-for-25-year-uptime",
    image: "/img/solar-rooftop.jpg",
    title: "Engineering for 25-year uptime, not 25-month payback",
    date: "2025-09-03",
    category: "Engineering",
    excerpt:
      "Zero-penetration mounting, corrosion-grade structures and HT evacuation design — the choices that separate an asset from an orphaned system.",
  },
  {
    slug: "group-captive-open-access-explained",
    image: "/img/projects/shriram.jpg",
    title: "Group captive and open access, explained",
    date: "2025-06-18",
    category: "Policy",
    excerpt:
      "How off-site structures unlock scale for multi-facility manufacturers — equity thresholds, compliance and landed-tariff maths.",
  },
];
