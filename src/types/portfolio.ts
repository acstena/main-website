export interface ProjectStat {
  label: string;
  value: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  category: string;
  clientIndustry: string;
  summary: string;
  challenge: string;
  solution: string;
  image: string;
  stats: ProjectStat[];
  tags: string[];
  liveUrl?: string;
}
