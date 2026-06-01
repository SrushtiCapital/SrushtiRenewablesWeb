import type { ReactNode } from "react";

export type TeamMember = {
  name: string;
  role: string;
  bio?: string | string[];
  image?: string;
  imageAspect?: "portrait" | "square";
  linkedin?: string;
};

export type TeamGroupLayout = "rows" | "grid";

export type TeamGroup = {
  id: string;
  tier: string;
  title: ReactNode;
  description: string;
  layout: TeamGroupLayout;
  members: TeamMember[];
  muted?: boolean;
};

export const TEAM_GROUPS: TeamGroup[] = [
  {
    id: "leadership",
    tier: "/ 01",
    title: "Leadership.",
    description:
      "Strategic direction, capital-raising mandates, and overall delivery accountability.",
    layout: "rows",
    members: [
      {
        name: "Sunil Patil",
        role: "Founder · CEO",
        image: "/team/sunil-full.jpg",
        imageAspect: "portrait",
        linkedin: "https://www.linkedin.com/in/sunil-patil-18bb081a/",
        bio: [
          "Sunil Patil is the founder and CEO of Srushti Renewables, bringing over 25 years of experience across investment banking, infrastructure finance, ESG advisory, and enterprise technology transformation. He advises renewable energy and infrastructure sponsors on accessing institutional capital, development finance institutions, and cross-border funding opportunities across Europe and emerging markets.",
          "Previously, Sunil spent more than 15 years at Barclays Investment Bank, where he supported large-scale platforms across fixed income markets, structured finance, collateral management, and risk systems. His experience spans climate finance, debt structuring, investor engagement, and infrastructure advisory — positioning him to strengthen global partnerships, institutional outreach, and climate-finance ecosystem development across the UK ↔ India corridor.",
        ],
      },
      {
        name: "Jayaprakash Konduru",
        role: "COO",
        image: "/team/jayaprakash.jpg",
        imageAspect: "square",
        bio: "Over 20 years of experience in international consultation, business, and finance, with a strong determination to deliver environmental and sustainability projects.",
      },
      {
        name: "Anjali Garg",
        role: "CTO",
        image: "/team/anjali.jpg",
        imageAspect: "square",
        bio: "Over 30 years of experience in international IT systems and process management — leading digital infrastructure and reporting frameworks across the business.",
      },
    ],
  },
  {
    id: "india-operations",
    tier: "/ 02",
    title: (
      <>
        India operations &{" "}
        <span className="serif-italic text-surface-tint">business development.</span>
      </>
    ),
    description:
      "On-the-ground execution across operations, procurement, legal, compliance, and business development — the side of the corridor where mandates are delivered.",
    layout: "grid",
    muted: true,
    members: [
      {
        name: "Parag More",
        role: "COO · India",
        image: "/team/parag.jpg",
        bio: "Over 30 years of business operations experience dealing with private and government contracts.",
      },
      {
        name: "Prashant Patil",
        role: "Head of Procurement",
        image: "/team/prashant.jpg",
        bio: "Feed sourcing, logistics, and reporting to the COO.",
      },
      {
        name: "Adv. Kumarabhi Kothari",
        role: "Head of Legal & Compliance",
        image: "/team/kumarabhi.jpg",
        bio: "Qualified LLB, MBA, CA, CS. Corporate law practitioner; owner of overall legal and compliance transactions.",
      },
      {
        name: "Kiran Kumar",
        role: "Business Development · Director",
        image: "/team/kiran.jpg",
        bio: "15+ years in corporate fund raising, team building, and complex financial transactions in the infrastructure sector — from financial modelling and concession analysis through bid advisory, debt arrangement, execution-stage compliance, and post-completion monetisation.",
      },
      {
        name: "Vijay Shekhar",
        role: "Business Development · Director",
        image: "/team/vijay.jpg",
        bio: "15 years in sales and over 20 years in marketing, with a track record of revenue growth and trusted client relationships across complex commercial mandates.",
      },
      {
        name: "Amit Malikar",
        role: "Business Development",
        image: "/team/amit.jpg",
        bio: "New business initiation and development; post-initiation follow-up across the India mandate pipeline.",
      },
    ],
  },
  {
    id: "advisors",
    tier: "/ 03",
    title: (
      <>
        <span className="serif-italic text-surface-tint">Advisors.</span>
      </>
    ),
    description:
      "Domain depth across biofuels, biogas, catalysis, and EPC delivery — the technical anchor for every renewable-energy mandate.",
    layout: "grid",
    members: [
      {
        name: "Dr Tushar Shinde",
        role: "Chief Consultant",
        image: "/team/tushar.jpg",
        bio: "PhD and research experience in catalysis and synthesis, organic synthesis, biomass conversion, biofuels, and chemical analysis.",
      },
      {
        name: "Gajanan Patil",
        role: "EPC Consultant",
        image: "/team/gajanan.jpg",
        bio: "Founder of Urja BioSystems and technology consultant for industry-scale compressed biogas sites.",
      },
      {
        name: "Bhadresh Patel",
        role: "Consultant",
        image: "/team/bhadresh.jpg",
        bio: "Founder and technology consultant for industry-scale compressed biogas sites.",
      },
    ],
  },
];
