export type SectorTagVariant = "teal" | "gold" | "violet" | "green";

export type SectorStat = {
  label: string;
  value: string;
  highlight?: string;
};

export type Sector = {
  id: string;
  index: string;
  code: string;
  tagVariant: SectorTagVariant;
  title: string;
  description: string;
  bullets: string[];
  stats: SectorStat[];
};

export const SECTORS: Sector[] = [
  {
    id: "energy",
    index: "01",
    code: "ENERGY",
    tagVariant: "teal",
    title: "Renewable energy",
    description:
      "Solar PV, wind, hybrid solar+storage, and biofuels — utility-scale and C&I, with PPA-backed cash flows. We work with platforms holding 200 MW+ operating capacity and pipelines into the GW range, structuring ECB, green-bond, and DFI senior debt against long-tenor PPAs.",
    bullets: [
      "PPA-backed project finance with sculpted debt and DSCR optimisation",
      "Green bond issuance for refinancing operating renewables portfolios",
      "Bioethanol & compressed biogas under the SATAT framework",
    ],
    stats: [
      { label: "Target by 2030", value: "clean energy", highlight: "5 GW" },
      { label: "Typical structure", value: "ECB · Green bond · DFI senior" },
      { label: "Tenor", value: "10 – 18 years" },
    ],
  },
  {
    id: "real-estate",
    index: "02",
    code: "REAL ESTATE",
    tagVariant: "gold",
    title: "Real estate & mixed-use",
    description:
      "Commercial and mixed-use developments in Tier-1 Indian cities — office, retail, and hospitality with pre-leased or underwritten cash flows. We structure offshore HoldCo equity, ECB, and mezzanine for sponsors with 1M+ sq ft under development.",
    bullets: [
      "Offshore HoldCo equity and ECB for Grade A office and retail",
      "Mezzanine and structured equity for hospitality and mixed-use",
      "Green building certification and sustainability-linked loan structuring",
    ],
    stats: [
      { label: "Live mandate", value: "Hyderabad · Grade A+" },
      { label: "Typical scale", value: "sq ft", highlight: "1 – 5M" },
      { label: "Typical structure", value: "ECB · Mezz · Sponsor equity" },
    ],
  },
  {
    id: "ports",
    index: "03",
    code: "PORTS & LOGISTICS",
    tagVariant: "violet",
    title: "Ports, logistics & transport infrastructure",
    description:
      "Greenfield and brownfield ports, logistics parks, and multimodal corridors — capital-intensive, long-gestation assets with government offtake or tariff frameworks. We advise on EPC equity, ECA-backed debt, and DFI participation in port modernisation.",
    bullets: [
      "EPC equity and project finance for greenfield port development",
      "ECA and DFI senior debt for port modernisation and capacity expansion",
      "Concession agreement structuring and revenue-risk allocation",
    ],
    stats: [
      { label: "Live mandate", value: "Odisha · Deep-draft" },
      { label: "Typical structure", value: "EPC equity · ECA · DFI" },
      { label: "Tenor", value: "15 – 25 years" },
    ],
  },
  {
    id: "agriculture",
    index: "04",
    code: "AGRICULTURE",
    tagVariant: "green",
    title: "Carbon-neutral agriculture & food",
    description:
      "Sustainable agricultural processing, cold-chain logistics, and carbon-neutral food platforms — linking EU ESG capital with Indian operating assets. We structure sustainability-linked loans, blended finance, and FDI for agri-infrastructure.",
    bullets: [
      "Sustainability-linked loan structuring for agri-processing platforms",
      "Blended finance with DFI first-loss and commercial lender senior",
      "FDI for cold-chain, processing, and carbon-neutral food infrastructure",
    ],
    stats: [
      { label: "Investor base", value: "EU ESG funds · DFIs" },
      { label: "Typical structure", value: "SLL · Blended finance" },
      { label: "Thematic alignment", value: "SDG 2 · 12 · 13" },
    ],
  },
];
