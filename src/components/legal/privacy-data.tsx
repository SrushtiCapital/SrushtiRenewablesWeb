import type { LegalMetaItem, LegalNotice, LegalSection } from "./types";

export const PRIVACY_META: LegalMetaItem[] = [
  { label: "Last updated", value: "May 2026" },
  { label: "Data controller", value: "Srushti Renewables Ltd" },
  { label: "Status", value: "Active" },
];

export const PRIVACY_NOTICE: LegalNotice = {
  title: "Draft for legal review",
  body: "This Privacy Notice is a draft and should be reviewed by qualified counsel before publication or reliance. It is intended to align with UK GDPR and the Data Protection Act 2018.",
};

export const PRIVACY_SECTIONS: LegalSection[] = [
  {
    id: "about-us",
    tier: "/ 01",
    title: "About us",
    paragraphs: [
      "This Privacy Notice explains how Srushti Renewables Ltd (\"we\", \"us\", or \"our\") collects, uses, and protects your personal data when you visit our website, engage with our advisory services, or otherwise interact with us. For the purposes of UK data protection law, Srushti Renewables Ltd is the data controller.",
      "We are committed to protecting your privacy and handling your data in an open and transparent manner. This Notice should be read alongside our other policies and the information available on our About and Contact pages.",
    ],
  },
  {
    id: "personal-data",
    tier: "/ 02",
    title: "Personal Data we collect",
    paragraphs: [
      "We may collect, use, store, and transfer different kinds of personal data about you, grouped as follows:",
    ],
    list: [
      {
        label: "Identity Data",
        text: "First name, last name, title, and similar identifiers.",
      },
      {
        label: "Contact Data",
        text: "Email address, telephone numbers, business address, and correspondence details.",
      },
      {
        label: "Transaction Data",
        text: "Details of advisory mandates, enquiries, and services you request from us.",
      },
      {
        label: "Technical Data",
        text: "IP address, browser type and version, time zone, operating system, and platform.",
      },
      {
        label: "Usage Data",
        text: "Information about how you use our website and services.",
      },
    ],
    footerNote:
      "We also collect Aggregated Data such as statistical or demographic data for internal purposes. Aggregated Data may be derived from your personal data but is not considered personal data in law where it cannot identify you.",
  },
  {
    id: "other-sources",
    tier: "/ 03",
    title: "Data from other sources",
    paragraphs: [
      "We may receive personal data about you from other persons or sources, including publicly available registers, professional networks, and third-party platforms we use in the ordinary course of business, such as:",
    ],
  },
  {
    id: "use-of-data",
    tier: "/ 04",
    title: "Use of your Personal Data",
    paragraphs: [
      "We will only use your personal data when the law allows us to. Most commonly, we rely on legitimate interests, contract performance, legal obligation, or consent as the lawful basis for processing your personal data.",
      "You have the right to withdraw consent at any time where we rely on consent to process your personal data. We may process your personal data for the following purposes:",
    ],
    list: [
      "To respond to enquiries and communicate with you about our services.",
      "To enter into and perform advisory mandates and related contractual obligations.",
      "To comply with legal, regulatory, and professional obligations.",
      "To administer and protect our business and website (including troubleshooting and system maintenance).",
      "To use data analytics to improve our website, services, and client experience.",
    ],
    footerNote:
      "If you have questions about how we use your personal data, please contact us using the details on our Contact page.",
  },
  {
    id: "purposes",
    tier: "/ 05",
    title: "Purposes of collecting Personal Data",
    list: [
      "To register you as a new client or contact.",
      "To process and deliver advisory mandates and manage our relationship with you.",
      "To manage payments, fees, and invoicing where applicable.",
      "To collect amounts owed to us.",
      "To administer and protect our business and this website.",
      "To deliver relevant website content and measure the effectiveness of our communications.",
      "To use data analytics to improve our website, services, marketing, and client relationships.",
      "To make suggestions and recommendations to you about services that may be of interest.",
    ],
  },
  {
    id: "sharing",
    tier: "/ 06",
    title: "Sharing your Personal Data",
    paragraphs: [
      "We may share your personal data with the parties set out below, strictly where necessary and subject to appropriate safeguards:",
    ],
    list: [
      "Professional advisers including lawyers, bankers, auditors, and insurers.",
      "Regulators, courts, and authorities where required by law.",
      "Third-party service providers who assist with IT, hosting, communications, and administration.",
      "Institutional counterparties and mandate participants where disclosure is necessary to deliver our services.",
    ],
  },
  {
    id: "international",
    tier: "/ 07",
    title: "Data processing outside the United Kingdom",
    paragraphs: [
      "We primarily store and process personal data within the United Kingdom. Where we transfer personal data outside the UK, we ensure a similar degree of protection is afforded to it by implementing appropriate safeguards, such as standard contractual clauses approved for use in the UK, or relying on adequacy regulations where applicable.",
      "If you would like further information about international transfers of your personal data, please contact us.",
    ],
  },
  {
    id: "security",
    tier: "/ 08",
    title: "Data security",
    paragraphs: [
      "We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorised way, altered, or disclosed. Access to personal data is limited to employees, agents, contractors, and other third parties who have a business need to know.",
      "We have procedures to deal with any suspected personal data breach and will notify you and any applicable regulator where we are legally required to do so.",
      "We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements — typically up to 7 years after the end of a client relationship unless a longer period is required by law.",
    ],
  },
  {
    id: "rights",
    tier: "/ 09",
    title: "Your rights",
    paragraphs: ["Under UK data protection law, you have the following rights:"],
    list: [
      {
        label: "Right to rectification",
        text: "Request correction of incomplete or inaccurate data we hold about you.",
      },
      {
        label: "Right to erasure",
        text: "Request deletion of your personal data in certain circumstances.",
      },
      {
        label: "Right to restrict processing",
        text: "Request restriction of processing of your personal data in certain circumstances.",
      },
      {
        label: "Right to object",
        text: "Object to processing based on legitimate interests or for direct marketing.",
      },
      {
        label: "Right to data portability",
        text: "Request transfer of your data to you or a third party in certain circumstances.",
      },
      {
        label: "Right to withdraw consent",
        text: "Withdraw consent at any time where we rely on consent to process your data.",
      },
    ],
    footerNote:
      "You will not usually have to pay a fee to exercise your rights. We aim to respond within one month. You also have the right to lodge a complaint with the ICO.",
  },
  {
    id: "complaints",
    tier: "/ 10",
    title: "Complaints",
    paragraphs: [
      "You have the right to make a complaint at any time to the Information Commissioner's Office (ICO), the UK supervisory authority for data protection issues (ico.org.uk). We would appreciate the chance to deal with your concerns before you approach the ICO, so please contact us in the first instance.",
    ],
    footerNote: "The ICO can be contacted on 0303 123 1113.",
  },
  {
    id: "changes",
    tier: "/ 11",
    title: "Changes to this Notice",
    paragraphs: [
      "We may update this Privacy Notice from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this Notice periodically.",
    ],
    footerNote:
      "For any questions about this Privacy Notice or how we use your Personal Data, please contact us.",
  },
];
