import type { ServiceIconKey } from "./service-icons";

export type ServiceItem = {
  text: string;
  icon: ServiceIconKey;
};

export type ServiceLine = {
  id: string;
  index: string;
  code: string;
  title: string;
  titleAccent: string;
  description: string;
  items: ServiceItem[];
  accent: string;
  mesh: string;
  image: string;
};


export const SERVICE_LINES: ServiceLine[] = [
  {
    id: "fdi",
    index: "01",
    code: "FDI",
    title: "Foreign Direct Investment",
    titleAccent: "advisory.",
    description:
      "End-to-end FDI structuring for renewable energy, infrastructure, and real estate platforms — from sectoral eligibility through to FC-GPR filings and exit.",
    accent: "from-[#064e3b]/12 via-transparent to-[#fae0a4]/20",
    mesh: "bg-[#faf7f2]",
    image: "/service/service.png",
    items: [
      { text: "Automatic vs approval route assessment under DPIIT consolidated FDI policy", icon: "clipboard" },
      { text: "Equity dilution modelling against sectoral caps and downstream thresholds", icon: "pieChart" },
      { text: "Shareholders' agreement alignment with CCI and Companies Act requirements", icon: "users" },
      { text: "Exit structuring — strategic sale, buyback, and FC-TRS pathways", icon: "swap" },
      { text: "Sectoral cap and conditional entry analysis by asset class", icon: "building" },
      { text: "CCPS / CCD structuring for institutional co-investment", icon: "layers" },
      { text: "FC-GPR & FC-TRS filing coordination with AD banks", icon: "file" },
      { text: "Cross-border tax leakage mapping under India–UK DTAA", icon: "globe" },
    ],
  },
  {
    id: "ecb",
    index: "02",
    code: "ECB",
    title: "External Commercial",
    titleAccent: "Borrowings.",
    description:
      "ECB eligibility, all-in-cost optimisation, and AD bank coordination for utility-scale renewables and infrastructure borrowers accessing offshore debt.",
    accent: "from-[#2b6954]/10 via-transparent to-[#95d3ba]/15",
    mesh: "bg-[#f6f9f8]",
    image: "/service/service1.png",
    items: [
      { text: "Eligible borrower & recognised lender analysis", icon: "scale" },
      { text: "All-in-cost ceiling optimisation vs benchmark rates", icon: "lineChart" },
      { text: "Mandatory and operational hedging strategy & documentation", icon: "shield" },
      { text: "Form ECB filing & LOU / LRN workflow with RBI", icon: "file" },
      { text: "End-use permitted vs prohibited mapping by sector", icon: "clipboard" },
      { text: "Minimum Average Maturity Period (MAMP) structuring", icon: "trend" },
      { text: "AD bank coordination & drawdown mechanics", icon: "bank" },
      { text: "Refinancing strategy for existing ECB portfolios", icon: "wallet" },
    ],
  },
  {
    id: "holdco",
    index: "03",
    code: "HoldCo",
    title: "Offshore HoldCo",
    titleAccent: "structuring.",
    description:
      "Holding company architecture across UK, DIFC, GIFT IFSC, Mauritius, and Singapore — built around treaty position, substance requirements, and exit pathway.",
    accent: "from-[#6f5c2c]/10 via-transparent to-[#064e3b]/8",
    mesh: "bg-[#faf8f4]",
    image: "/service/servicetwo.png",
    items: [
      { text: "UK HoldCo structuring under the Substantial Shareholding Exemption", icon: "building" },
      { text: "DIFC SPVs for institutional Middle East capital pools", icon: "bank" },
      { text: "GIFT IFSC vehicles for ECB & offshore fund routing", icon: "swap" },
      { text: "Mauritius / Singapore treaty position comparative analysis", icon: "globe" },
      { text: "Principal Purpose Test (PPT) & treaty abuse considerations", icon: "scale" },
      { text: "Economic substance requirements & board governance", icon: "users" },
      { text: "Dividend, interest, royalty repatriation planning", icon: "wallet" },
      { text: "Indirect transfer & GAAR exposure mapping", icon: "file" },
    ],
  },
  {
    id: "modelling",
    index: "04",
    code: "Modelling",
    title: "Capital structuring &",
    titleAccent: "financial modelling.",
    description:
      "Integrated 3-statement and project finance models built for institutional scrutiny — debt sculpting, coverage tests, hedged cost-of-capital, and scenario layers.",
    accent: "from-[#064e3b]/8 via-transparent to-[#2b6954]/12",
    mesh: "bg-white",
    image: "/service/servicethree.png",
    items: [
      { text: "Integrated 3-statement corporate models", icon: "chart" },
      { text: "Project finance models with sculpted debt & lock-up tests", icon: "lineChart" },
      { text: "Debt capacity & DSCR / LLCR / PLCR optimisation", icon: "trend" },
      { text: "Equity IRR, MOIC, payback & cash-on-cash modelling", icon: "pieChart" },
      { text: "Capital stack optimisation: senior, mezz, equity blend", icon: "layers" },
      { text: "Scenario analysis: FDI vs ECB vs blended structures", icon: "sparkles" },
      { text: "Refinancing & rate-sensitivity overlays", icon: "swap" },
      { text: "Tax-affected returns with treaty & withholding modelling", icon: "globe" },
    ],
  },
  {
    id: "greenbond",
    index: "05",
    code: "Green bonds",
    title: "Green bond",
    titleAccent: "framework & issuance.",
    description:
      "Direct access to Climate Bonds Initiative management, verifiers, and panel investment banks — ICMA GBP and CBI standards from framework design through allocation reporting.",
    accent: "from-[#2b6954]/12 via-transparent to-[#b0f0d6]/25",
    mesh: "bg-[#f4faf7]",
    image: "/service/servicefour.png",
    items: [
      { text: "ICMA Green Bond Principles (GBP) framework design", icon: "leaf" },
      { text: "Climate Bonds Initiative certification pathway", icon: "shield" },
      { text: "Use-of-proceeds mapping to eligible green assets", icon: "clipboard" },
      { text: "Second-party opinion & external review coordination", icon: "file" },
      { text: "London / Dublin listing & book-building support", icon: "bank" },
      { text: "Investor roadshow & sustainable-finance desk targeting", icon: "handshake" },
      { text: "Post-issuance allocation & impact KPI reporting", icon: "chart" },
      { text: "Annual impact & allocation reporting to investors", icon: "trend" },
    ],
  },
  {
    id: "institutional",
    index: "06",
    code: "Engagement",
    title: "Institutional investor",
    titleAccent: "engagement.",
    description:
      "Targeted outreach to DFIs, ECAs, and institutional lenders — teasers, information memoranda, term sheets, and direct introductions from a curated network.",
    accent: "from-[#fae0a4]/25 via-transparent to-[#064e3b]/10",
    mesh: "bg-[#faf7f2]",
    image: "/service/servicefive.png",
    items: [
      { text: "One-page teasers calibrated to lender risk filters", icon: "file" },
      { text: "Full information memoranda & lender presentation decks", icon: "clipboard" },
      { text: "Personalised outreach with deal-specific rationale", icon: "handshake" },
      { text: "Direct introductions to credit committees & SF desks", icon: "users" },
      { text: "DFI, ECA, and commercial bank pipeline management", icon: "bank" },
      { text: "Term sheet negotiation & covenant alignment", icon: "scale" },
      { text: "Blended finance & co-investment structuring", icon: "layers" },
      { text: "Q&A management & data-room operation", icon: "sparkles" },
    ],
  },
];
