import type { LegalMetaItem, LegalNotice, LegalSection } from "./types";

export const COOKIES_META: LegalMetaItem[] = [
  { label: "Last updated", value: "May 2026" },
  { label: "Applies to", value: "srushtirenewables.co.uk" },
  { label: "Status", value: "Active" },
];

export const COOKIES_NOTICE: LegalNotice = {
  title: "Draft for legal review",
  body: "This Cookies Policy is a draft and should be reviewed by qualified counsel before publication or reliance. It is intended to align with PECR and UK GDPR requirements.",
};

export const COOKIES_SECTIONS: LegalSection[] = [
  {
    id: "what-are-cookies",
    tier: "/ 01",
    title: "What are cookies?",
    paragraphs: [
      "Cookies are small text files that websites place on your device when you visit them. They are used to make websites work more efficiently, to remember your preferences across visits, and to provide information to the website operator about how the site is used. Cookies cannot run programs or deliver viruses to your device.",
    ],
  },
  {
    id: "cookies-set",
    tier: "/ 02",
    title: "Cookies set by this website",
    paragraphs: [
      "This website is built as a static site and, in its current configuration, does not set any cookies of its own. We do not currently run analytics, advertising, or session tracking tooling.",
      "The Google Fonts service we use to render typography may set its own cookies when fonts are requested; this is governed by the Google Privacy Policy.",
      "If we add analytics, advertising, or other cookie-setting tooling in future, we will update this Policy and — where required under PECR (the Privacy and Electronic Communications Regulations) — present a cookie consent banner before any non-essential cookies are set.",
    ],
  },
  {
    id: "categories",
    tier: "/ 03",
    title: "Categories of cookies (for reference)",
    paragraphs: [
      "If we add cookies in future, they would fall into one or more of the following categories:",
    ],
    list: [
      {
        label: "Strictly necessary cookies",
        text: "Required for core site functionality, such as remembering items in a form during a session or maintaining session security. These cookies do not require user consent under PECR.",
      },
      {
        label: "Analytics cookies",
        text: "Used to understand how visitors interact with the site (pages visited, time on site, referral source) so that we can improve content and structure. We would expect to use a privacy-respecting analytics provider — such as Plausible, Fathom, or similar — rather than Google Analytics. These require consent under PECR.",
      },
      {
        label: "Marketing cookies",
        text: "Used to deliver targeted advertising or to track conversion from referral platforms (e.g. LinkedIn). We do not currently use marketing cookies. If introduced, these would require explicit consent.",
      },
      {
        label: "Preferences cookies",
        text: "Used to remember settings or preferences you set when using the site. We do not currently use preferences cookies.",
      },
    ],
  },
  {
    id: "controlling",
    tier: "/ 04",
    title: "Controlling cookies in your browser",
    paragraphs: [
      "You can prevent the setting of cookies by adjusting the settings on your browser. Most major browsers allow you to refuse all cookies, accept only certain cookies, or be notified when a site attempts to set a cookie. You can also remove existing cookies in most browsers by pressing Ctrl + Shift + Del on your keyboard.",
      "Be aware that disabling cookies will affect the functionality of many websites you visit, and some features of those sites may not work as expected.",
    ],
  },
  {
    id: "third-party",
    tier: "/ 05",
    title: "Third-party content",
    paragraphs: [
      "This site may embed content or links from third parties (for example, LinkedIn profile links from our Team page, or external references on our Ecosystem page). When you follow such a link or interact with embedded content, that third party may set cookies under their own policies. We have no control over these cookies; you should review the cookie and privacy policies of those third parties directly.",
    ],
  },
  {
    id: "changes",
    tier: "/ 06",
    title: "Changes to this Policy",
    paragraphs: [
      "We may update this Cookies Policy from time to time, particularly if we add new tools or services that involve cookies. The \"Last updated\" date at the top of this page indicates when the current version came into effect.",
    ],
    footerNote:
      "For any questions about this Cookies Policy, please see our Privacy Policy or contact us.",
  },
];

export const COOKIES_BROWSER_LINKS = [
  {
    label: "Google Chrome",
    href: "https://support.google.com/chrome/answer/95647",
  },
  {
    label: "Mozilla Firefox",
    href: "https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop",
  },
  {
    label: "Apple Safari",
    href: "https://support.apple.com/en-gb/guide/safari/sfri11471/mac",
  },
  {
    label: "Microsoft Edge",
    href: "https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09",
  },
] as const;
