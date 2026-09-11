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
  {
    label: "Facebook",
    href: "https://www.facebook.com/Polarisenergysolutions/",
  },
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
  {
    label: "Instagram",
    href: "https://www.instagram.com/polaris_solar_solutions/",
  },
];

export const nav = [
  { label: "About", href: "/about" },
  { label: "Our Approach", href: "/our-approach" },
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
    image: "/img/process/engineering-design.jpg",
  },
  {
    step: "03",
    title: "EPC execution",
    body: "Single-point delivery of procurement, construction and commissioning — most C&I plants energised in 45–90 days.",
    image: "/img/process/epc-execution.jpg",
  },
  {
    step: "04",
    title: "25-year O&M",
    body: "SCADA monitoring, analytics and preventive maintenance for the full asset life. One team stays accountable to year 25.",
    image: "/img/process/om-25yr.jpg",
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

// Homepage "Our Solutions" — the four offering categories. Each has its
// own page at /solutions/<slug>; `relatedSolutions` cross-links to the
// matching commercial-model cards on /solutions (by slug, as #anchors).
export const offerings = [
  {
    slug: "commercial-industrial",
    title: "Commercial & Industrial",
    summary:
      "Rooftop and ground-mount solar for factories, warehouses and campuses — engineered for 25 years of dependable generation and structured to the balance sheet.",
    intro:
      "The core of the Polaris portfolio — rooftop and ground-mounted solar for the factories, warehouses and campuses behind 650+ commissioned projects across Maharashtra, Gujarat and beyond. Every system is engineered around the site's real constraints — live production lines, non-uniform rooftops, structural limits — not a standard layout, and matched to whichever commercial model fits the balance sheet.",
    points: [
      "Zero-penetration and custom mounting engineered for live, operating facilities — installed without disrupting production.",
      "Centralised or distributed inverter architecture designed around the rooftop's real constraints, not a standard layout.",
      "CAPEX, OPEX/RESCO or lease-based ownership — matched to cash flow, not a single default structure.",
      "BESS-ready infrastructure built in from day one, so storage can be added later without re-engineering the plant.",
    ],
    relatedSolutions: ["capex", "opex", "lease", "epc"],
  },
  {
    slug: "utility-scale",
    title: "Utility Scale",
    summary:
      "Large ground-mount and hybrid parks with HT evacuation, land and interconnection managed end to end for IPPs and open-access buyers.",
    intro:
      "Ground-mounted and hybrid parks at a scale rooftop can't reach — land acquisition, HT evacuation and grid interconnection managed end to end, for IPPs and open-access buyers procuring power off-site. The same engineering discipline applies at scale: one plant head described a site with rock, a monsoon window and a 0.5 km HT run engineered around, and still commissioned in under 90 days.",
    points: [
      "Land acquisition, HT evacuation and grid interconnection managed end to end, not handed off mid-project.",
      "Open-access and group-captive structures for buyers who want scale without owning generation directly.",
      "Performance-linked (GLG) structures available where generation is tied to defined benchmarks.",
      "The same investment-grade financial model — IRR, payback, depreciation — applied at utility scale.",
    ],
    relatedSolutions: ["open-access", "glg", "epc"],
  },
  {
    slug: "finance-solutions",
    title: "Finance Solutions",
    summary:
      "CAPEX, OPEX / RESCO, lease and group-captive structures — matched to your cash flow, with an investment-grade model behind every proposal.",
    intro:
      "Every Polaris engagement starts with a financial model, not a structure — IRR, payback, depreciation and year-by-year cash flow, modelled before design begins. From there, the commercial model follows the numbers: full ownership, zero-capex RESCO, lease or group-captive, whichever fits your balance sheet.",
    points: [
      "An investment-grade financial model — IRR, payback, depreciation and cash flow — reviewed and signed off before design begins.",
      "Full ownership (CAPEX), zero-capex RESCO (OPEX), lease or group-captive — matched to your books, not a default.",
      "Simple payback of 3.5–7 years and 18–28% IRR are the normal range for well-structured industrial solar.",
      "Accelerated depreciation of up to 40% in Year 1 is available under Indian IT provisions, where applicable.",
    ],
    relatedSolutions: ["capex", "opex", "lease", "open-access", "advisory"],
  },
  {
    slug: "energy-optimisation-consultant",
    title: "Energy Optimisation Consultant",
    summary:
      "Load analysis, BESS sizing, time-of-day strategy and SCADA-driven O&M — advisory that keeps the asset performing to year 25.",
    intro:
      "Generation is only half the equation — the other half is what happens to that power once it's made. This practice covers load analysis and generation simulation against actual consumption, BESS sizing and time-of-day strategy, and the SCADA-based monitoring that keeps a plant performing to its full 25-year design life, not just at commissioning.",
    points: [
      "Load analysis and generation simulation run against actual consumption data before a system is designed.",
      "BESS sizing and time-of-day strategy for peak shaving and tariff arbitrage.",
      "SCADA-based monitoring and analytics for the full 25-year operating life, not just commissioning.",
      "The same investment-grade financial modelling — IRR, payback, depreciation — behind every recommendation.",
    ],
    relatedSolutions: ["bess", "advisory", "epc"],
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
    body: "A single point of accountability from feasibility to year 25 of operation — eliminating the industry problem of 'orphaned' solar systems.",
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
    slug: "kilitch-healthcare",
    image: "/img/projects/kilitch.jpg",
    images: ["/img/projects/kilitch.jpg"],
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
    highlights: [
      "Engineered across multiple rooftop structures with varying elevations and orientations, optimising generation through advanced system design.",
      "Implemented a zero-penetration mounting system, preserving roof integrity without any drilling or structural modifications.",
      "Optimised DC and AC system architecture to minimise electrical losses while maximising long-term energy yield.",
      "Delivered the project within a live manufacturing facility, maintaining uninterrupted plant operations while adhering to stringent industrial safety protocols.",
      "Future-ready infrastructure engineered to support the integration of Battery Energy Storage Systems (BESS) as part of the client's long-term energy transition strategy.",
    ],
  },
  {
    name: "General Mills India Pvt. Ltd.",
    slug: "general-mills",
    image: "/img/projects/general-mills.jpg",
    images: ["/img/projects/general-mills.jpg"],
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
    highlights: [
      "Executed for a US-based MNC under strict American safety standards, ensuring global compliance in design and installation.",
      "Engineered across multiple rooftops with varying orientations, optimising generation despite the non-uniform layout.",
      "Designed a centralised inverter architecture, overcoming complex cable routing constraints while maintaining system efficiency.",
      "Developed a precision cable routing and protection strategy aligned with high safety and plant safety protocols.",
      "Ensured zero compromise on safety, performance and structural integrity in a live industrial environment.",
      "Delivered a system engineered for long-term reliability — 25+ years lifecycle — with optimised performance.",
    ],
  },
  {
    name: "Shriram Stone Crusher",
    slug: "shriram-stone-crusher",
    image: "/img/projects/shriram.jpg",
    images: ["/img/projects/shriram.jpg"],
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
    highlights: [
      "Carried out controlled terrain engineering, including partial rock excavation and land levelling, to make the site suitable for solar installation.",
      "Engineered a site-specific layout and foundation strategy to ensure structural stability despite uneven and rugged land conditions.",
      "Designed and executed 11 kV HT power evacuation over 0.5 km, enabling reliable grid injection from a remote plant location.",
      "Installed dedicated HT transmission infrastructure with green poles, ensuring safe and compliant long-distance power transfer.",
      "Delivered the project in a record timeline of 85 days, despite heavy rainfall, a remote/outskirt site and continuous operation within a dust-intensive stone-crusher environment.",
      "Engineered the system for harsh industrial conditions, ensuring durability, reliability and long-term performance.",
    ],
  },
  {
    name: "Forcon Infra Pvt. Ltd.",
    slug: "forcon-infra",
    image: "/img/projects/forcon.jpg",
    images: ["/img/projects/forcon.jpg"],
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
    highlights: [
      "Engineered specifically for a mining environment with high dust concentration, ensuring long-term performance and minimal degradation.",
      "Designed and executed a robust 11 kV HT evacuation system, enabling efficient power transmission over distance with minimal losses.",
      "Implemented optimised cable sizing, routing and protection systems to ensure reliability across the extended transmission length.",
      "Delivered complete project execution — design, installation and commissioning — in a record time of 45 days.",
      "Engineered module layout and tilt optimisation to achieve a high generation yield despite challenging site conditions.",
      "Integrated strong earthing and lightning protection systems for the open-land, mining-zone exposure.",
    ],
  },
  {
    name: "Indore Composite Pvt. Ltd.",
    slug: "indore-composite",
    image: "/img/projects/indore-composite.jpg",
    images: ["/img/projects/indore-composite.jpg"],
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
    highlights: [
      "Engineered a high-efficiency solar solution aligned with the facility's east-west orientation, optimising generation across the day.",
      "Leveraged the large shed height to implement an advanced east-west racking design, enabling higher module density and improved energy yield.",
      "Developed custom structural and layout engineering to maximise rooftop utilisation without compromising safety.",
      "Achieved an optimised generation profile with better distribution of output, enhancing real-time energy utilisation.",
      "Designed the system with a focus on performance stability, wind considerations and long-term structural reliability.",
    ],
  },
  {
    name: "Advanced Enzyme Technologies Ltd.",
    slug: "advanced-enzyme-technologies",
    image: "/img/projects/advanced-enzyme.jpg",
    images: ["/img/projects/advanced-enzyme.jpg"],
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
    highlights: [
      "Engineered specifically for a mining environment with high dust concentration, ensuring long-term performance and minimal degradation.",
      "Designed and executed a robust 11 kV HT evacuation system, enabling efficient power transmission over distance with minimal losses.",
      "Implemented optimised cable sizing, routing and protection systems to ensure reliability across the extended transmission length.",
      "Delivered complete project execution — design, installation and commissioning — in a record time of 45 days.",
      "Engineered module layout and tilt optimisation to achieve a high generation yield despite challenging site conditions.",
      "Integrated strong earthing and lightning protection systems for the open-land, mining-zone exposure.",
      "Achieved exceptional generation performance, validating design decisions under real-world harsh conditions.",
    ],
  },
  {
    name: "Indore International",
    slug: "indore-international",
    image: "/img/projects/morocco.jpg",
    images: ["/img/projects/morocco.jpg"],
    location: "Tangier, Morocco",
    tech: "Industrial Rooftop Solar",
    model: "CAPEX",
    capacity: "600 kWp",
    generation: "—",
    savings: "≈ €83,000 (MAD 908,000)",
    status: "Ongoing",
    year: 2026,
    blurb:
      "Polaris's first international pilot — a Magnis-coated, zero-penetration structure engineered for bitumen-sheet roofing and coastal wind loads.",
    imageCaption: "Indicative 3D render for visual representation only.",
    highlights: [
      "Marking our first international pilot project in Morocco, establishing a strong foundation for global expansion.",
      "Engineered a customised mounting structure specifically for bitumen-sheet roofing, addressing unique site constraints.",
      "Implementing a high-grade Magnis-coated structure, ensuring superior corrosion resistance in coastal conditions.",
      "Designed with a zero-penetration mounting system, eliminating roof-leakage risk and preserving roof integrity.",
      "Optimised structural design to withstand wind loads and environmental conditions specific to the Tangier region.",
      "Focused on long-term durability and performance, aligning with international engineering and safety standards.",
    ],
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

// Real Polaris client/partner logos. Files live in /public/img/clients/.
export const clientLogos = [
  { name: "Bisleri", src: "/img/clients/bisleri.svg" },
  { name: "Reliance Industries", src: "/img/clients/reliance.svg" },
  { name: "Samsonite", src: "/img/clients/samsonite.svg" },
  { name: "Indian Oil", src: "/img/clients/indian-oil.svg" },
  { name: "Parle Products", src: "/img/clients/parle.svg" },
  { name: "Hindustan Petroleum", src: "/img/clients/hindustan-petroleum.svg" },
  { name: "Siemens", src: "/img/clients/siemens.svg" },
  { name: "Radisson Hotels", src: "/img/clients/radisson.svg" },
  { name: "Gabriel", src: "/img/clients/gabriel.svg" },
  { name: "Haldex", src: "/img/clients/haldex.svg" },
  { name: "Mahle", src: "/img/clients/mahle.svg" },
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

// TODO: replace every founder's `linkedin` with their real profile URL
// before launch — these are placeholders.
export const founders = [
  {
    name: "Pushkar Panchakshari",
    honorific: "Mr.",
    role: "CEO",
    photo: "/img/team/pushkar.jpg",
    linkedin: "https://www.linkedin.com/",
    bio: [
      "Pushkar Panchakshari is CEO of Polaris Renewable Solutions Pvt. Ltd. and a Director of Polaris Global Energie SARL, Morocco. With 20+ years of experience spanning IT, education and manufacturing — including senior roles in finance, procurement and import-export operations — he brings a rigorous commercial foundation to the renewable energy sector.",
      "At Polaris, he leads overall strategy, financial structuring, investor relations and international expansion. He has been instrumental in developing the company's CAPEX, OPEX, Group Captive and investor-driven solar models, positioning Polaris as a power cost optimisation partner for the C&I sector.",
    ],
  },
  {
    name: "Swapnil Tajanpure",
    honorific: "Mr.",
    role: "Director – Technical & Operations",
    photo: "/img/team/swapnil.jpg",
    linkedin: "https://www.linkedin.com/",
    bio: [
      "Swapnil Tajanpure is Director — Technical & Operations at Polaris Renewable Solutions, and oversees technical execution for the company's Morocco operations through Polaris Global Energie SARL.",
      "An electrical engineer by training, he has led the design and commissioning of 100 MW+ of solar infrastructure since founding the company in 2014–15. He is responsible for engineering standards, safety protocols aligned with US, European and Indian benchmarks, and the technical architecture that ensures every Polaris system performs across its full 25-year lifecycle.",
    ],
  },
  {
    name: "Kunwar Gujral",
    honorific: "Mr.",
    role: "Director – Sales & Marketing",
    photo: "/img/team/kunwar.jpg",
    linkedin: "https://www.linkedin.com/",
    bio: [
      "Kunwar Gujral leads Sales & Marketing at Polaris Renewable Solutions and serves as Director of its Morocco subsidiary, Polaris Global Energie SARL. He holds a dual postgraduate degree from Deakin University, Australia — an MBA in Marketing and a Master's in Information Systems — and brings over three years of hands-on experience from the Australian solar sector.",
      "At Polaris, he drives commercial strategy across India and Morocco, specialising in energy cost optimisation solutions for the C&I segment across CAPEX, OPEX, Open Access and Group Captive frameworks.",
    ],
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
    {
      metric: "Simple payback",
      value: "3.5–7 years",
      note: "for well-structured industrial solar",
    },
    {
      metric: "IRR",
      value: "18–28%",
      note: "annualised, by system size and tariff band",
    },
    {
      metric: "NPV",
      value: "Positive from Year 1",
      note: "in most C&I deployments",
    },
    {
      metric: "Accelerated depreciation",
      value: "Up to 40% in Year 1",
      note: "under Indian IT provisions",
    },
    {
      metric: "Electricity cost savings",
      value: "≈ 80% below grid",
      note: "predictable over a 25-year asset life",
    },
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
    body: [
      {
        paragraphs: [
          "Every industrial solar conversation eventually arrives at the same question: who owns the asset? The answer isn't a technical one — it's a balance-sheet decision, and it's usually made before a single panel is specified. Get it wrong and you either tie up capital a growing business needed elsewhere, or hand away savings you could have kept.",
        ],
      },
      {
        heading: "The two poles",
        paragraphs: [
          "Under CAPEX, you invest in and fully own the plant. It's the highest-IRR route over the asset's life, it qualifies for accelerated depreciation, and you keep complete control of the energy cost curve — but it uses your capital and your balance sheet.",
          "Under OPEX / RESCO, Polaris invests, installs and operates the plant. You pay only for the energy consumed, at a pre-agreed tariff typically well below grid rates — commonly around 80% below grid, predictable across a 25-year asset life. There's no upfront investment and no operational responsibility, but you don't capture the full economics an owned asset would deliver.",
        ],
      },
      {
        heading: "What the numbers actually say",
        paragraphs: [
          "For well-structured industrial solar, simple payback typically runs 3.5–7 years, with annualised IRR in the 18–28% range depending on system size and tariff band. Under Indian income-tax provisions, accelerated depreciation of up to 40% in Year 1 is available — which is what pulls CAPEX's effective payback in sharply for enterprises with the taxable profit to absorb it. NPV is positive from Year 1 in most C&I deployments under either structure; the difference is who's holding that NPV on their books.",
        ],
      },
      {
        heading: "The routes in between",
        paragraphs: [
          "CAPEX and OPEX aren't the only two options. A lease-based structure gives you positive cash flow from day one on fixed payments, with ownership transferring to you at the end of the tenure — a middle path for businesses that want eventual ownership without the full upfront outlay. Group-captive and open-access structures go further still, letting you source power off-site across multiple facilities under a shared equity or wheeling arrangement, useful where roof space is the constraint rather than capital.",
        ],
      },
      {
        heading: "How we help clients decide",
        paragraphs: [
          "We don't lead with a structure — we lead with a financial model. Every Polaris engagement starts with load analysis and generation simulation against your actual consumption, then an investment-grade model covering IRR, payback, depreciation and year-by-year cash flow for each route that fits your books. The structure follows the numbers, not the other way round, and the same team that builds the case stays accountable for it through commissioning and 25 years of operation.",
        ],
      },
    ],
  },
  {
    slug: "reading-a-solar-proposal-like-a-cfo",
    image: "/img/bess-plant.jpg",
    title: "Reading a solar proposal like a CFO",
    date: "2025-11-12",
    category: "Advisory",
    excerpt:
      "IRR, payback, NPV and EBITDA impact — the five numbers that should decide an industrial solar investment, and the assumptions behind each.",
    body: [
      {
        paragraphs: [
          "Most solar proposals lead with the wrong number. A rupee-per-watt price or a headline capacity figure tells you almost nothing about whether the investment makes financial sense. A proposal built to survive a CFO's review leads with five numbers instead — and is explicit about the assumptions behind each one.",
        ],
      },
      {
        heading: "The five numbers",
        paragraphs: [
          "IRR — the annualised return the project generates, typically 18–28% for well-structured C&I solar depending on system size and tariff band.",
          "Simple payback — how long before cumulative savings recover the investment; 3.5–7 years is the normal range for industrial systems.",
          "NPV — the project's value in today's rupees once future cash flows are discounted; it should be positive from Year 1 in most C&I deployments.",
          "Accelerated depreciation — under Indian income-tax provisions, up to 40% of the asset's value can be depreciated in Year 1, materially improving after-tax cash flow for enterprises with the profit to absorb it.",
          "Electricity cost savings — the predictable line, typically around 80% below grid tariffs, sustained across the asset's full 25-year life.",
        ],
      },
      {
        heading: "The assumptions behind each",
        paragraphs: [
          "Every one of those five numbers is only as good as the generation estimate underneath it. Ask what degradation curve the model assumes, what tariff escalation it's pricing in, and — most importantly — how the generation figure was derived. A model built on a genuine load analysis and site-specific simulation, not a regional average, is the difference between a plant that tracks its estimate within a couple of percentage points and one that quietly underperforms for 25 years.",
        ],
      },
      {
        heading: "Red flags in a weak proposal",
        paragraphs: [
          "If a proposal doesn't show IRR and payback explicitly, that's a flag. If there's no depreciation schedule, that's a flag. And if there's no long-term O&M plan beyond commissioning, that's the biggest one — it's how solar assets end up orphaned, generating below their modelled output with nobody accountable for the gap.",
        ],
      },
      {
        heading: "What we build instead",
        paragraphs: [
          "Every Polaris proposal is an investment-grade financial model before it's anything else — IRR, payback, depreciation and cash flow, reviewed and signed off before design begins. The same model is what the operating team is held to for the full 25-year life of the asset.",
        ],
      },
    ],
  },
  {
    slug: "engineering-for-25-year-uptime",
    image: "/img/solar-rooftop.jpg",
    title: "Engineering for 25-year uptime, not 25-month payback",
    date: "2025-09-03",
    category: "Engineering",
    excerpt:
      "Zero-penetration mounting, corrosion-grade structures and HT evacuation design — the choices that separate an asset from an orphaned system.",
    body: [
      {
        paragraphs: [
          "A solar system can hit an attractive headline payback number and still be a poor asset. Payback measures the first few years; the engineering decisions made at design stage determine whether the other twenty-plus hold up. The gap between those two timeframes is where most underperforming installations are born.",
        ],
      },
      {
        heading: "The roof is not a formality",
        paragraphs: [
          "On a live pharmaceutical manufacturing facility, we've delivered zero-penetration mounting across multiple rooftop elevations — no roof punctures, no warranty conflict with the building owner, engineered with BESS-ready infrastructure for a future addition. On a coastal Morocco pilot, the same zero-penetration principle was re-engineered for bitumen-sheet roofing and coastal wind loads, with a Magnis-coated structure to resist the salt-air environment. Same discipline, different site physics.",
        ],
      },
      {
        heading: "Terrain and HT evacuation aren't afterthoughts",
        paragraphs: [
          "A ground-mounted plant for a stone-crushing operation required partial rock excavation and an 11 kV HT evacuation run over half a kilometre — engineered and commissioned in 85 days, through the monsoon. A separate ground-mount for a mining client needed a robust structure for a high-dust environment plus its own 11 kV HT evacuation system, delivered in 45 days. Neither of those numbers is a marketing claim about speed; they're a consequence of getting the terrain and evacuation engineering right the first time, so construction doesn't stall on a redesign.",
        ],
      },
      {
        heading: "Standards that don't change by postcode",
        paragraphs: [
          "Structural loading, HT evacuation and safety design are engineered to Indian, EU and US benchmarks on every project we deliver, in India or in Morocco. It's the same reviewing discipline applied to a rooftop in Nashik and a pilot in Tangier — because a 25-year asset has to survive whichever jurisdiction's inspector, insurer or lender looks at it next.",
        ],
      },
      {
        heading: "The engineering doesn't stop at commissioning",
        paragraphs: [
          "SCADA monitoring, generation analytics and a preventive maintenance schedule are what keep a well-engineered system performing to its modelled output for the full 25 years — with the same team that built the financial case staying accountable for the numbers it produces. That's the difference between an asset and an orphaned installation: someone is still responsible for it in year twenty.",
        ],
      },
    ],
  },
  {
    slug: "group-captive-open-access-explained",
    image: "/img/projects/shriram.jpg",
    title: "Group captive and open access, explained",
    date: "2025-06-18",
    category: "Policy",
    excerpt:
      "How off-site structures unlock scale for multi-facility manufacturers — equity thresholds, compliance and landed-tariff maths.",
    body: [
      {
        paragraphs: [
          "Not every manufacturer can put meaningful solar capacity on their own roof — the load is too large, the roof too small, or the operations spread across sites that don't get equal sun. Off-site structures exist precisely for that mismatch, letting generation happen where the land and irradiation are best and the power be delivered to where it's actually consumed.",
        ],
      },
      {
        heading: "What group captive means",
        paragraphs: [
          'Under India\'s captive generation rules, a plant qualifies as "captive" when the consuming entity (or entities) holds not less than 26% equity in the generating company and collectively consumes not less than 51% of the electricity generated, on an annual basis. Structured correctly, that qualification exempts the arrangement from a large share of the cross-subsidy and transmission charges an ordinary third-party power purchase would attract — which is where most of the landed-cost advantage comes from.',
        ],
      },
      {
        heading: "What open access means",
        paragraphs: [
          "Open access lets a consumer buy power from a generator that isn't the local utility and have it wheeled to their connection over the shared grid, for a regulated set of charges rather than the retail tariff. It's the mechanism that makes it possible for a plant built on cheap, sunny, available land in one district to serve a factory load in another — the two don't need to be adjacent, only connected to the same grid.",
        ],
      },
      {
        heading: "The landed-tariff maths",
        paragraphs: [
          "The number that actually matters is landed cost: generation cost, plus wheeling and transmission charges, plus any applicable cross-subsidy surcharge, compared against the grid tariff the facility pays today. Done well, that comparison is what delivers the roughly 80% below-grid savings figure that well-structured C&I solar can sustain — predictably, across a 25-year asset life, because the underlying generation cost doesn't move the way grid tariffs do.",
        ],
      },
      {
        heading: "Where this fits our solutions",
        paragraphs: [
          "Our Open Access & Group Captive structures cover large-scale energy sourcing, the equity participation the regulation requires, multi-location power allocation across a client's sites, and compliance with the captive-status rules that make the whole structure work. It's the route we recommend most often to manufacturers with multiple facilities and a load too large — or too dispersed — for rooftop CAPEX alone.",
        ],
      },
    ],
  },
];
