export type ServiceCategory = "ai" | "web" | "mobile" | "design" | "animation" | "seo";

export interface ServiceItem {
  id: string;
  category: ServiceCategory;
  title: string;
  tagline: string;
  badge: string;
  description: string;
  deliverables: string[];
  techStack: string[];
  businessImpact: string;
  iconName: string;
}

export interface FilterOption {
  key: string;
  label: string;
}
