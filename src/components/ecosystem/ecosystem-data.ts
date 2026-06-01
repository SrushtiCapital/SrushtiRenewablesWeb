import type { ShowcaseSlide } from "@/components/sectors/showcase-data";
import type { ShowcaseAccent } from "@/components/sectors/showcase-shell";

export type EcosystemCounterparty = {
  label: string;
  value: string;
};

export type EcosystemPillar = {
  id: string;
  index: string;
  accent: ShowcaseAccent;
  badge: string;
  headline: string;
  headlineAccent: string;
  intro: string;
  whyItMatters: string;
  counterparties: EcosystemCounterparty[];
  footnote?: string;
  slides: ShowcaseSlide[];
};

export const ECOSYSTEM_PILLARS: EcosystemPillar[] = [
  {
    id: "carbon",
    index: "01",
    accent: "teal",
    badge: "/01 — Carbon markets",
    headline: "Voluntary carbon credits — a market projected at",
    headlineAccent: "$50bn+ by 2030.",
    intro:
      "Voluntary Carbon Markets (VCMs) are the fastest-growing segment of climate-finance infrastructure. For sponsors with credit-eligible projects, carbon revenue can materially improve DSCR, reduce equity drag, and open access to sustainability-linked pricing.",
    whyItMatters:
      "Renewable energy projects, biogas, and carbon-neutral agricultural platforms can generate verified credits that stack alongside offtake revenue. We structure the financial case — not just the environmental one — so credit committees see carbon as balance-sheet relevant.",
    counterparties: [
      {
        label: "Registries & standards",
        value: "Verra, Gold Standard, Climate Action Reserve, ART/TREES, ICVCM Core Carbon Principles",
      },
      {
        label: "Verifiers & SPOs",
        value: "Independent validators, second-party opinion providers, and rating-aligned verification bodies",
      },
      {
        label: "Buyers & offtakers",
        value: "Corporate buyers, compliance markets, and forward offtake desks with multi-year purchase agreements",
      },
    ],
    footnote:
      "Market figures reflect published industry estimates (Grand View Research, McKinsey/TSVCM, Taskforce on Scaling VCM). Counterparty names are illustrative of categories — specific introductions are mandate-confidential.",
    slides: [
      {
        id: "market",
        title: "VCM market scale",
        subtitle: "Voluntary carbon markets as a parallel revenue stream for infrastructure sponsors.",
        metric: "$50bn+",
        metricLabel: "2030 forecast",
        tag: "Market outlook",
        image:
          "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1400&q=80",
      },
      {
        id: "baseline",
        title: "2024 baseline",
        subtitle: "Current voluntary market size before projected demand acceleration.",
        metric: "$4bn",
        metricLabel: "VCM size · 2024",
        tag: "Grand View Research",
        image:
          "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1400&q=80",
      },
      {
        id: "growth",
        title: "Demand acceleration",
        subtitle: "Corporate net-zero commitments driving credit procurement at scale.",
        metric: "15×",
        metricLabel: "Demand growth by 2030",
        tag: "TSVCM",
        image:
          "https://images.unsplash.com/photo-1518173941819-4e771f6e9f51?auto=format&fit=crop&w=1400&q=80",
      },
      {
        id: "stack",
        title: "Revenue stacking",
        subtitle: "Carbon credits layered onto PPA and offtake cash flows for improved lender metrics.",
        metric: "DSCR+",
        metricLabel: "Structuring impact",
        tag: "Sponsor value",
        image: "/sector/bio.png",
      },
    ],
  },
  {
    id: "ratings",
    index: "02",
    accent: "gold",
    badge: "/02 — Ratings & verification",
    headline: "ESG ratings providers —",
    headlineAccent: "the credit-committee filter.",
    intro:
      "Nine major ESG ratings providers shape how institutional capital allocates. SFDR Article 8 and 9 classifications, TCFD alignment, and ISSB reporting requirements mean the rating is no longer optional — it is a gating item for lender appetite.",
    whyItMatters:
      "A single-point MSCI upgrade can unlock a different lender universe. We map your project against the frameworks each ratings provider weights differently — and position the narrative before the outreach, not after the rejection.",
    counterparties: [
      {
        label: "Ratings providers",
        value: "MSCI, Sustainalytics, ISS ESG, S&P Global CSA, Moody's ESG, Refinitiv/LSEG, CDP, EcoVadis",
      },
      {
        label: "Frameworks",
        value: "SFDR, TCFD, ISSB, EU Taxonomy, ICMA Green Bond Principles, CBI Climate Bonds Standard",
      },
      {
        label: "Verification",
        value: "Second-party opinions, external reviews, and green-bond framework verifiers",
      },
    ],
    footnote:
      "Median cross-rater correlation of 0.42 (MIT Sloan / Berg, Kölbel, Rigobon). Ratings are one input — we structure the full institutional case.",
    slides: [
      {
        id: "providers",
        title: "Global ratings landscape",
        subtitle: "Nine major providers shaping institutional capital allocation decisions.",
        metric: "9+",
        metricLabel: "Major ESG raters",
        tag: "Coverage",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
      },
      {
        id: "sfdr",
        title: "SFDR disclosure regime",
        subtitle: "EU framework defining lender and fund appetite for sustainable investments.",
        metric: "SFDR",
        metricLabel: "EU disclosure",
        tag: "Regulation",
        image:
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=80",
      },
      {
        id: "correlation",
        title: "Cross-rater divergence",
        subtitle: "Understanding why the same project receives different scores across providers.",
        metric: "0.42",
        metricLabel: "Median correlation",
        tag: "MIT Sloan",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
      },
      {
        id: "position",
        title: "Pre-outreach positioning",
        subtitle: "Framework alignment before lender engagement — not remediation after rejection.",
        metric: "ISSB",
        metricLabel: "Reporting alignment",
        tag: "Advisory",
        image: "/sector/defi.png",
      },
    ],
  },
  {
    id: "insurance",
    index: "03",
    accent: "violet",
    badge: "/03 — Insurance",
    headline: "Sustainable-finance insurance — the often-overlooked",
    headlineAccent: "credit enhancer.",
    intro:
      "Lloyd's of London and the UK insurance market offer products that can turn a marginal credit case into a fundable one. Political risk insurance, parametric cover, and multilateral guarantees are not afterthoughts — they are structuring tools.",
    whyItMatters:
      "For cross-border infrastructure, risk transfer through insurance can reduce all-in cost of capital by 50–200 basis points. We model MIGA, UKEF, and private-market cover into the capital stack before lender outreach.",
    counterparties: [
      {
        label: "UK market",
        value: "Lloyd's syndicates, London company market, and specialist political-risk underwriters",
      },
      {
        label: "Multilateral cover",
        value: "MIGA, UKEF, export credit agencies, and DFI guarantee windows",
      },
      {
        label: "Product types",
        value: "Political risk insurance, credit guarantees, parametric, and non-payment cover",
      },
    ],
    slides: [
      {
        id: "bps",
        title: "Pricing impact",
        subtitle: "Typical all-in cost reduction when MIGA-style cover is modelled into senior debt.",
        metric: "50–200",
        metricLabel: "Basis points",
        tag: "Cost of capital",
        image:
          "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=80",
      },
      {
        id: "lloyds",
        title: "Lloyd's market access",
        subtitle: "UK insurance market we plug sponsors into for bespoke sustainable-finance cover.",
        metric: "Lloyd's",
        metricLabel: "Market route",
        tag: "UK corridor",
        image:
          "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1400&q=80",
      },
      {
        id: "miga",
        title: "Multilateral & ECA cover",
        subtitle: "MIGA, UKEF, and export credit routes integrated into holdco and SPV structures.",
        metric: "MIGA · UKEF",
        metricLabel: "Cover routes",
        tag: "Guarantees",
        image:
          "https://images.unsplash.com/photo-1486406146926-c627a92fd1ab?auto=format&fit=crop&w=1400&q=80",
      },
      {
        id: "stack",
        title: "Credit enhancement",
        subtitle: "Insurance modelled into the capital stack before lender committee presentation.",
        metric: "Enhance",
        metricLabel: "Structuring layer",
        tag: "All-in cost",
        image: "/sector/spv.png",
      },
    ],
  },
];

export type EcosystemFlowStep = {
  index: string;
  title: string;
  body: string;
};

export const ECOSYSTEM_FLOW: EcosystemFlowStep[] = [
  {
    index: "01",
    title: "Structure",
    body: "Capital stack, holdco geography, debt-equity blend, and treaty position — engineered for the target lender base.",
  },
  {
    index: "02",
    title: "Verify",
    body: "ESG ratings target, carbon framework (ICVCM / CBI), TCFD / ISSB / SFDR alignment, and second-party opinion strategy.",
  },
  {
    index: "03",
    title: "Enhance",
    body: "Political risk cover, parametric insurance, and multilateral / ECA guarantees modelled into the all-in cost-of-capital.",
  },
  {
    index: "04",
    title: "Engage",
    body: "Named outreach to the DFIs, ECAs, and sustainable-finance desks whose mandates and ratings filters match.",
  },
];
