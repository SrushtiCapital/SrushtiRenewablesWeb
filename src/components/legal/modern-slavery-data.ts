export type LegalSection = {
  id: string;
  tier: string;
  title: string;
  paragraphs?: string[];
  list?: string[];
  footerNote?: string;
};

export const MODERN_SLAVERY_META = {
  lastUpdated: "May 2026",
  statementType: "Voluntary",
  status: "Active",
} as const;

export const MODERN_SLAVERY_NOTICE = {
  title: "Voluntary statement — draft for review",
  body: "Srushti Renewables Ltd is below the £36m turnover threshold at which a Modern Slavery Statement is mandatory under section 54 of the Modern Slavery Act 2015. We publish this Statement voluntarily, in line with the disclosure expectations of the institutional counterparties we work with. It should be reviewed by counsel before being relied upon.",
};

export const MODERN_SLAVERY_SECTIONS: LegalSection[] = [
  {
    id: "position",
    tier: "/ 01",
    title: "Our position",
    paragraphs: [
      "Modern slavery — including forced labour, debt bondage, human trafficking, and the worst forms of child labour — is a violation of fundamental human rights and a criminal offence. Srushti Renewables Ltd does not tolerate it in any form. This applies to our own workforce, our suppliers and sub-contractors, and to the sponsors and projects we advise on.",
    ],
  },
  {
    id: "organisation",
    tier: "/ 02",
    title: "Our organisation",
    paragraphs: [
      "Srushti Renewables Ltd is a UK-registered cross-border capital advisory firm operating across the UK ↔ India corridor. We provide structuring and capital-raising advisory services to sponsors of infrastructure, energy, and real estate transactions, and engage with institutional lenders, development finance institutions, export credit agencies, and sustainable-finance investors in connection with those transactions.",
      "We operate with a senior, specialist team across the UK and India. We do not employ low-skilled or seasonal labour, and we do not operate manufacturing, agricultural, or extractive facilities directly. Our principal exposure to modern-slavery risk arises through our suppliers, sub-contractors, and the underlying assets in mandates we advise on — addressed below.",
    ],
  },
  {
    id: "supply-chain",
    tier: "/ 03",
    title: "Our supply chain",
    paragraphs: ["Our direct supply chain consists primarily of:"],
    list: [
      "Professional service providers (legal, tax, accounting, audit, IT, marketing)",
      "Office, software, and infrastructure suppliers",
      "Travel, hospitality, and facilities providers used in connection with mandate delivery",
      "Sub-contracted technical consultants engaged on specific mandates",
    ],
    footerNote:
      "We expect all suppliers to comply with applicable employment, human rights, and modern-slavery legislation in their jurisdictions. Where suppliers are themselves required to publish a Modern Slavery Statement under section 54, we expect them to do so and to maintain it.",
  },
  {
    id: "due-diligence",
    tier: "/ 04",
    title: "Due diligence in mandates",
    paragraphs: [
      "The transactions we advise on can have material modern-slavery risk exposure — particularly in construction, EPC contracting, agricultural supply chains, and operations in higher-risk jurisdictions. Where appropriate, we:",
    ],
    list: [
      "Engage with sponsors on the modern-slavery and labour-rights position of the underlying project at structuring stage.",
      "Align documentation and disclosure to ESG-rating, IFC Performance Standards, and lender-specific frameworks that address labour rights.",
      "Flag elevated risk to institutional counterparties through the IM and due-diligence process, rather than allowing it to surface at credit committee.",
      "Decline mandates where we are not satisfied that adequate human-rights and labour-rights safeguards are in place, or where the sponsor is unwilling to commit to remediation.",
    ],
  },
  {
    id: "training",
    tier: "/ 05",
    title: "Training & awareness",
    paragraphs: [
      "All members of the Srushti Renewables team are made aware of the indicators of modern slavery and the procedures for raising concerns. Where mandate work requires deeper engagement with labour-rights frameworks (IFC PS2, ILO conventions, UK Modern Slavery Act, US UFLPA), the relevant team members refresh their knowledge through external training or counsel.",
    ],
  },
  {
    id: "reporting",
    tier: "/ 06",
    title: "Reporting concerns",
    paragraphs: [
      "Anyone with a concern about modern slavery or human-rights abuse connected to Srushti Renewables Ltd, our supply chain, or a mandate we are working on can raise it confidentially by contacting us. We will treat reports seriously and act on them.",
      "For information on the UK Modern Slavery Act 2015, see gov.uk/government/collections/modern-slavery. The UK Modern Slavery Helpline can be reached on 08000 121 700.",
    ],
  },
  {
    id: "review",
    tier: "/ 07",
    title: "Review & approval",
    paragraphs: [
      "This Statement is reviewed annually and approved by the Board of Directors of Srushti Renewables Ltd. It will be updated promptly if our turnover, structure, or activities change in a way that materially affects our modern-slavery risk profile or our obligations under the Act.",
    ],
    footerNote:
      "For questions about this Statement or to raise a concern in confidence, please contact us.",
  },
];
