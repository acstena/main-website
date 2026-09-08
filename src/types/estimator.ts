export interface SolutionOption {
  id: string;
  label: string;
  sublabel: string;
  sprintWeeks: number;
  efficiencyGain: string;
  adminHoursSaved: string;
  techRecommendation: string[];
  searchAdvantage: string;
}

export interface TeamSizeOption {
  label: string;
  multiplier: number;
}
