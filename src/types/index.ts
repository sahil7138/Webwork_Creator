export type BlockType =
  | "header"
  | "link"
  | "product"
  | "portfolio"
  | "email_collector"
  | "video"
  | "music"
  | "socials"
  | "tip_jar"
  | "text";

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  projectUrl: string;
  category: string;
  tags: string[];
  featured?: boolean;
}

export interface CreatorBlock {
  id: string;
  type: BlockType;
  title: string;
  subtitle?: string;
  url?: string;
  price?: number;
  iconName?: string;
  thumbnailUrl?: string;
  badge?: string;
  enabled: boolean;
  order: number;
  metadata?: Record<string, any>;
}

export interface CreatorTheme {
  id: string;
  name: string;
  background: string;
  cardBg: string;
  textColor: string;
  accentColor: string;
  buttonRadius: "rounded-md" | "rounded-lg" | "rounded-xl" | "rounded-2xl" | "rounded-full";
  blurClass: string;
  glowColor: string;
  bgHex?: string;
  cardBgHex?: string;
  borderHex?: string;
  textHex?: string;
  secondaryTextHex?: string;
  accentHex?: string;
  accentTextHex?: string;
  badgeBgHex?: string;
  badgeTextHex?: string;
  radiusPx?: string;
}

export interface CreatorProfile {
  id: string;
  username: string;
  displayName: string;
  bio: string;
  avatarUrl: string;
  verified: boolean;
  category: string;
  socials: {
    instagram?: string;
    youtube?: string;
    tiktok?: string;
    twitter?: string;
    github?: string;
    linkedin?: string;
  };
  theme: CreatorTheme;
  blocks: CreatorBlock[];
  portfolioProjects?: PortfolioProject[];
}

export interface DigitalProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  type: "ebook" | "preset" | "course" | "consulting" | "template";
  coverImage: string;
  salesCount: number;
  rating: number;
}

export interface DealPipelineItem {
  id: string;
  brandName: string;
  brandLogo: string;
  dealValue: number;
  deliverables: string;
  status: "lead" | "negotiating" | "in_production" | "published" | "paid";
  dueDate: string;
}

export interface AudienceContact {
  id: string;
  email: string;
  name?: string;
  source: string;
  tags: string[];
  joinedAt: string;
  totalSpent: number;
}
