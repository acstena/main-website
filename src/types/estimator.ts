export interface SolutionOption {
  id: string;
  label: string;
  sublabel: string;
  sprintWeeks: number;
  monthlySavings: number;
  techRecommendation: string[];
  searchAdvantage: string;
}

export interface TeamSizeOption {
  label: string;
  multiplier: number;
}
