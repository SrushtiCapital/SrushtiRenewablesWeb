export type LegalListItem =
  | string
  | {
      label: string;
      text: string;
    };

export type LegalSection = {
  id: string;
  tier: string;
  title: string;
  paragraphs?: string[];
  list?: LegalListItem[];
  footerNote?: string;
};

export type LegalMetaItem = {
  label: string;
  value: string;
};

export type LegalNotice = {
  title: string;
  body: string;
};
