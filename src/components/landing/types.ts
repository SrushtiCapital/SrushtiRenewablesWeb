export type PracticeCard = {
  id: string;
  number: string;
  title: string;
  description: string;
  sectorFocus: string[];
  keyChallenges: string;
  crossBorderAngle: string;
};

export type CounterpartyEntity = {
  name: string;
  category: string;
  focus: string;
  status: "Engaged" | "Pipeline" | "Prospect";
  fundingType: string;
};

export type DrawdownMilestone = {
  id: string;
  label: string;
  description: string;
};

export type RegulatoryFramework = {
  id: string;
  title: string;
  summary: string;
};

export type SectorOption = {
  id: string;
  name: string;
  defaultRatio: [number, number];
};
