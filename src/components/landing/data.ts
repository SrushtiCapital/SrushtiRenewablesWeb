import type {
  CounterpartyEntity,
  DrawdownMilestone,
  PracticeCard,
  RegulatoryFramework,
  SectorOption,
} from "./types";

export const PRACTICE_CARDS: PracticeCard[] = [
  {
    id: "fdi",
    number: "01",
    title: "FDI advisory",
    description:
      "Automatic vs approval route assessment, sectoral caps, CCI structuring, FC-GPR filings, and exit pathway design.",
    sectorFocus: ["Solar", "Wind", "Storage"],
    keyChallenges:
      "Sectoral cap alignment, downstream vs upstream classification, and timing of FC-GPR against first tranche.",
    crossBorderAngle:
      "UK or EU HoldCo routing with treaty-backed withholding and automatic-route SPV mapping in India.",
  },
  {
    id: "ecb",
    number: "02",
    title: "ECB advisory",
    description:
      "Eligibility analysis, all-in-cost ceiling optimisation, MAMP structuring, hedging modelling, and Form ECB compliance.",
    sectorFocus: ["Utility-scale solar", "Wind", "Hybrid"],
    keyChallenges:
      "MAMP vs project cash flows, hedging cost vs AIC ceiling, and lender security package under Indian law.",
    crossBorderAngle:
      "Offshore lender syndicates with AD bank coordination and Section 194LC withholding optimisation.",
  },
  {
    id: "holdco",
    number: "03",
    title: "HoldCo structuring",
    description:
      "UK, Netherlands, or GIFT IFSC holding company design with treaty analysis, substance requirements, and dividend repatriation.",
    sectorFocus: ["Cross-border renewables", "Infrastructure"],
    keyChallenges:
      "Substance in intermediate jurisdictions and alignment with RBI pricing guidelines on related-party debt.",
    crossBorderAngle:
      "GIFT City financial services box or UK treaty corridor into Indian operating SPVs.",
  },
  {
    id: "modelling",
    number: "04",
    title: "Capital structuring",
    description:
      "Debt–equity optimisation, DSCR modelling, waterfall design, and covenant negotiation for project finance.",
    sectorFocus: ["Solar", "Wind", "Hydro", "BESS"],
    keyChallenges:
      "Sizing debt to P90 vs P50 generation profiles and lender reserve account mechanics.",
    crossBorderAngle:
      "Blended ECB and local debt stacks with currency hedging and sponsor support sizing.",
  },
  {
    id: "greenbond",
    number: "05",
    title: "Green bond advisory",
    description:
      "ICMA GBP framework alignment, CBI certification pathway, use-of-proceeds design, and impact reporting.",
    sectorFocus: ["Greenfield renewables", "Refinancing"],
    keyChallenges:
      "Second-party opinion scope, KPI selection, and post-issuance reporting cadence.",
    crossBorderAngle:
      "London or Dublin listing with Indian asset SPV as use-of-proceeds recipient.",
  },
  {
    id: "institutional",
    number: "06",
    title: "Institutional capital",
    description:
      "DFI co-investment, blended finance, and strategic investor introductions for scale-up and portfolio platforms.",
    sectorFocus: ["Platforms", "Large utility-scale"],
    keyChallenges:
      "Aligning DFI covenants with commercial lender terms and ESG reporting overlays.",
    crossBorderAngle:
      "Multilateral and development finance routed through treaty-efficient HoldCo structures.",
  },
];

export const COUNTERPARTIES: CounterpartyEntity[] = [
  {
    name: "British International Investment",
    category: "DFI",
    focus: "Solar & storage",
    status: "Engaged",
    fundingType: "Debt",
  },
  {
    name: "CDC Group",
    category: "DFI",
    focus: "Wind platforms",
    status: "Pipeline",
    fundingType: "FDI",
  },
  {
    name: "European Investment Bank",
    category: "Multilateral",
    focus: "Green infrastructure",
    status: "Pipeline",
    fundingType: "ECB",
  },
];

export const DRAWDOWN_MILESTONES: DrawdownMilestone[] = [
  { id: "T+0", label: "Mandate", description: "Term sheet and routing memo." },
  { id: "T+30", label: "Filing", description: "RBI / MCA submissions." },
  { id: "T+90", label: "Close", description: "First drawdown." },
];

export const REGULATORY_FRAMEWORKS: RegulatoryFramework[] = [
  {
    id: "rbi-ecb",
    title: "RBI ECB framework",
    summary: "External commercial borrowing eligibility and reporting.",
  },
  {
    id: "fdi-policy",
    title: "FDI policy",
    summary: "Sectoral caps and automatic vs government route.",
  },
];

export const SECTOR_OPTIONS: SectorOption[] = [
  { id: "solar", name: "Solar", defaultRatio: [30, 70] },
  { id: "wind", name: "Wind", defaultRatio: [35, 65] },
  { id: "hydro", name: "Hydro", defaultRatio: [25, 75] },
  { id: "storage", name: "Storage", defaultRatio: [40, 60] },
];
