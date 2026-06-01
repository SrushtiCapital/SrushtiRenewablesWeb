export type ShowcaseSlide = {
  id: string;
  title: string;
  subtitle: string;
  metric: string;
  metricLabel: string;
  tag: string;
  image: string;
};

export const ENERGY_SLIDES: ShowcaseSlide[] = [
  {
    id: "ppa",
    title: "PPA-backed project finance",
    subtitle:
      "Sculpted senior debt against long-tenor offtake with DSCR optimisation for utility-scale solar and wind.",
    metric: "5 GW",
    metricLabel: "Target by 2030",
    tag: "Project finance",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "green",
    title: "Green bond issuance",
    subtitle:
      "Refinancing operating renewables portfolios with labelled use-of-proceeds and second-party opinions.",
    metric: "10 – 18",
    metricLabel: "Year tenor band",
    tag: "Green bond",
    image:
      "/servicefour.png",
  },
  {
    id: "hybrid",
    title: "Hybrid solar + storage",
    subtitle:
      "Capacity firming structures and merchant tail risk allocation for C&I and utility hybrid platforms.",
    metric: "200 MW+",
    metricLabel: "Operating base",
    tag: "Hybrid",
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "bio",
    title: "Biofuels & SATAT",
    subtitle:
      "Compressed biogas and bioethanol mandates under SATAT with offtake-linked revenue frameworks.",
    metric: "SATAT",
    metricLabel: "Policy framework",
    tag: "Biofuels",
    image:
      "/sector/bio.png",
  },
  {
    id: "dfi",
    title: "DFI senior debt",
    subtitle:
      "Multilateral participation alongside commercial lenders for greenfield and brownfield renewables.",
    metric: "ECB · DFI",
    metricLabel: "Typical structure",
    tag: "Senior debt",
    image:
      "/sector/defi.png",
  },
  {
    id: "ecb",
    title: "ECB & offshore routes",
    subtitle:
      "Offshore HoldCo equity and ECB corridors for platforms scaling from 200 MW into GW pipelines.",
    metric: "GW",
    metricLabel: "Pipeline scale",
    tag: "Cross-border",
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1400&q=80",
  },
];

export const REAL_ESTATE_SLIDES: ShowcaseSlide[] = [
  {
    id: "ecb",
    title: "ECB structuring",
    subtitle: "Offshore senior secured against pre-leased cash flows and covenant packages tuned to institutional lenders.",
    metric: "₹2.4B",
    metricLabel: "Mandate pipeline",
    tag: "Senior debt",
    image:
      "/sector/ecb.png",
  },
  {
    id: "offshore",
    title: "Offshore debt routes",
    subtitle: "UK HoldCo and treaty-efficient corridors into Indian SPVs with AD bank coordination.",
    metric: "UK → IN",
    metricLabel: "Corridor routing",
    tag: "Cross-border",
    image:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "reit",
    title: "REIT modelling",
    subtitle: "Distribution waterfalls, yield compression scenarios, and listing-readiness stress tests.",
    metric: "14.2%",
    metricLabel: "Target yield band",
    tag: "REIT advisory",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "spv",
    title: "SPV financing",
    subtitle: "Ring-fenced asset SPVs with mezzanine stacks and sponsor support sizing for mixed-use platforms.",
    metric: "1 – 5M",
    metricLabel: "Sq ft under dev.",
    tag: "Asset SPV",
    image:
      "/sector/spv.png",
  },
  {
    id: "lease",
    title: "Lease cash flow structuring",
    subtitle: "Tenancy roll-ups, break clauses, and DSCR sculpting against Grade A office and retail profiles.",
    metric: "92%",
    metricLabel: "Pre-lease coverage",
    tag: "Cash flow",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "tenancy",
    title: "Institutional tenancy profiling",
    subtitle: "Counterparty quality, covenant strength, and vacancy risk mapping for lender committees.",
    metric: "Grade A+",
    metricLabel: "Live mandate · Hyd.",
    tag: "Credit profile",
    image:
      "/sector/real.png",
  },
];

export const PORTS_SLIDES: ShowcaseSlide[] = [
  {
    id: "draft",
    title: "Deep-draft ports",
    subtitle:
      "Greenfield berths and channel dredging programmes with tariff-indexed revenue frameworks.",
    metric: "EPC · Concession",
    metricLabel: "Structure",
    tag: "Phase 01",
    image:
      "https://images.unsplash.com/photo-1494412574642-657833822a53?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "concession",
    title: "Concession structures",
    subtitle:
      "BOT / PPP allocation, revenue-share mechanics, and government offtake risk allocation.",
    metric: "15 – 25 yr",
    metricLabel: "Tenor band",
    tag: "Phase 02",
    image:
      "https://images.unsplash.com/photo-1605744436664-52c4c46ee148?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "epc",
    title: "EPC equity & project finance",
    subtitle:
      "Sponsor equity, completion guarantees, and phased drawdown against construction milestones.",
    metric: "EPC · Mezz",
    metricLabel: "Structure",
    tag: "Phase 03",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "dfi",
    title: "DFI / ECA financing",
    subtitle:
      "Multilateral and export credit agency senior for port modernisation and capacity expansion.",
    metric: "ECA · DFI",
    metricLabel: "Senior debt",
    tag: "Phase 04",
    image:
      "https://images.unsplash.com/photo-1578575437136-338bf5771d83?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "corridor",
    title: "Logistics corridors",
    subtitle:
      "Multimodal links between port, ICD, and industrial zones — integrated tariff and throughput modelling.",
    metric: "Blended",
    metricLabel: "Corridor finance",
    tag: "Phase 05",
    image:
      "https://images.unsplash.com/photo-1580674684081-7617fbf3d859?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "transport",
    title: "Transport infrastructure",
    subtitle:
      "Rail, road, and last-mile links integrated with port throughput — blended tariff and concession mechanics.",
    metric: "Multimodal",
    metricLabel: "PPP framework",
    tag: "Phase 06",
    image:
      "https://images.unsplash.com/photo-1544620337-47745a03dced?auto=format&fit=crop&w=1400&q=80",
  },
];

export const AG_SLIDES: ShowcaseSlide[] = [
  {
    id: "sll",
    title: "Sustainability-linked loans",
    subtitle:
      "KPI-linked margin ratchets for agri-processing platforms with EU ESG investor alignment.",
    metric: "SLL",
    metricLabel: "Instrument",
    tag: "Phase 01",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "blended",
    title: "Blended finance",
    subtitle:
      "DFI first-loss tranches with commercial senior for cold-chain and processing infrastructure.",
    metric: "DFI · Commercial",
    metricLabel: "Structure",
    tag: "Phase 02",
    image:
      "https://images.unsplash.com/photo-1574943328849-4232f27c9b81?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "fdi",
    title: "FDI for agri-infrastructure",
    subtitle:
      "EU capital into Indian operating assets — processing, storage, and carbon-neutral food platforms.",
    metric: "FDI · HoldCo",
    metricLabel: "Structure",
    tag: "Phase 03",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87d399?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "cold",
    title: "Cold-chain logistics",
    subtitle:
      "Temperature-controlled warehousing and last-mile links with offtake-backed revenue models.",
    metric: "Asset-backed",
    metricLabel: "Structure",
    tag: "Phase 04",
    image:
      "https://images.unsplash.com/photo-1593113598332-c28848eaa39e?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "carbon",
    title: "Carbon-neutral food",
    subtitle:
      "Scope 1–3 pathways, certification, and sustainability reporting for institutional allocators.",
    metric: "SDG 2 · 12 · 13",
    metricLabel: "Alignment",
    tag: "Phase 05",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1400&q=80",
  },
];
