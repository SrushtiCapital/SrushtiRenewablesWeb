export const CONTACT_EMAIL = "info@srushtirenewables.co.uk";

export type ContactChannel = {
  id: string;
  label: string;
  hint: string;
  subjectTag?: string;
};

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    id: "general",
    label: "General enquiries",
    hint: "Partnership requests, press, and anything that does not fit the categories below.",
  },
  {
    id: "sponsor",
    label: "Indian sponsors",
    hint: "Promoters and corporate development teams — mark your email “Sponsor enquiry”.",
    subjectTag: "Sponsor enquiry",
  },
  {
    id: "institutional",
    label: "Institutional lenders & DFIs",
    hint: "Credit committees and infrastructure debt funds — mark your email “Institutional enquiry”.",
    subjectTag: "Institutional enquiry",
  },
];

export const CONTACT_OFFICE = {
  heading: "United Kingdom",
  lines: [
    "Srushti Renewables Ltd.",
    "Registered in England & Wales.",
    "Operations across the UK and India corridor.",
  ],
};

export const ENQUIRY_ROLES = [
  "Sponsor / Promoter",
  "Institutional lender",
  "DFI / ECA",
  "Advisor / Intermediary",
  "Other",
] as const;

export const ENQUIRY_TYPES = [
  "FDI structuring",
  "ECB / offshore debt",
  "HoldCo structuring",
  "Capital modelling",
  "Green bond framework",
  "Institutional engagement",
  "General enquiry",
] as const;
