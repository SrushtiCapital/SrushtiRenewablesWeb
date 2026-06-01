import type { LucideIcon } from "lucide-react";
import {
  ArrowLeftRight,
  BarChart3,
  Building2,
  ClipboardList,
  FileText,
  Globe2,
  Handshake,
  Landmark,
  Layers,
  Leaf,
  LineChart,
  PieChart,
  Scale,
  Shield,
  Sparkles,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";

export const SERVICE_ICONS = {
  clipboard: ClipboardList,
  pieChart: PieChart,
  users: Users,
  swap: ArrowLeftRight,
  building: Building2,
  layers: Layers,
  file: FileText,
  globe: Globe2,
  scale: Scale,
  lineChart: LineChart,
  shield: Shield,
  trend: TrendingUp,
  bank: Landmark,
  wallet: Wallet,
  leaf: Leaf,
  handshake: Handshake,
  chart: BarChart3,
  sparkles: Sparkles,
} as const satisfies Record<string, LucideIcon>;

export type ServiceIconKey = keyof typeof SERVICE_ICONS;
