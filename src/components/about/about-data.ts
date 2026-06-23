export const ABOUT_HERO_IMAGE =
  "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=80";

export type AboutPrinciple = {
  number: string;
  title: string;
  description: string;
  icon: string;
};

export const ABOUT_PRINCIPLES: AboutPrinciple[] = [
  {
    number: "01",
    title: "One corridor.",
    description:
      "Corodinated focus on the UK–India-Africa corridor — London-facing mandate origination with emerging and developing markets execution. No generalist coverage, no diluted attention.",
    icon: "public",
  },
  {
    number: "02",
    title: "Structure first, syndication second.",
    description:
      "Every engagement starts with a structuring view: holdco geography, debt-equity blend, currency exposure, and treaty position. We build the structure the lender will fund.",
    icon: "layers",
  },
  {
    number: "03",
    title: "Named counterparties only.",
    description:
      "We maintain a curated counterparty list — DFIs, ECAs, and institutional lenders with active India infrastructure mandates. No cold outreach, no speculative pitching.",
    icon: "groups",
  },
  {
    number: "04",
    title: "Regulated, both sides.",
    description:
      "UK and India frameworks, one advisory thread — every structure reconciled to live caps, pricing, and reporting before you go to market.",
    icon: "shield",
  },
  {
    number: "05",
    title: "Through to drawdown.",
    description:
      "Advisory does not stop at term sheet. We stay through documentation, regulatory filings, and first drawdown — and remain available for reporting and refinancing.",
    icon: "bar_chart",
  },
];
