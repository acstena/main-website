export type SpeakerRole = "agent" | "user";

export interface DialogStep {
  speaker: SpeakerRole;
  text: string;
  extractedData?: Record<string, string>;
}

export interface Scenario {
  id: string;
  title: string;
  badge: string;
  industry: string;
  description: string;
  dialog: DialogStep[];
}
