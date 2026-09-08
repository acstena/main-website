import { SolutionOption, TeamSizeOption } from "@/types";

export const solutionOptions: SolutionOption[] = [
  {
    id: "ai-voicebot",
    label: "Autonomous AI Voicebot & Telephony",
    sublabel: "24/7 call answering, instant appointment scheduling & CRM sync",
    sprintWeeks: 2,
    efficiencyGain: "100% Inbound Calls Captured",
    adminHoursSaved: "32+ hrs/week saved",
    techRecommendation: ["OpenAI Realtime API", "Twilio SIP Trunking", "Deepgram STT", "FastAPI"],
    searchAdvantage: "Schema VoiceSearch microdata + zero missed phone lead conversions",
  },
  {
    id: "web-crm",
    label: "Custom Web CRM & Operations Portal",
    sublabel: "Retire manual spreadsheets into unified cloud kanban & automated pipeline",
    sprintWeeks: 3,
    efficiencyGain: "+310% Pipeline Velocity",
    adminHoursSaved: "40+ hrs/week saved",
    techRecommendation: ["Next.js 16", "PostgreSQL", "Supabase", "Prisma ORM", "Tailwind"],
    searchAdvantage: "Sub-second TTFB, 99+ Core Web Vitals, enterprise SSL security",
  },
  {
    id: "mobile-app",
    label: "Enterprise Mobile App (Logistics / Wellness)",
    sublabel: "Offline-first GPS tracking, spatial audio, or conversational mobile AI",
    sprintWeeks: 4,
    efficiencyGain: "99.9% Offline Sync Reliability",
    adminHoursSaved: "25+ hrs/week saved",
    techRecommendation: ["React Native / Flutter", "Mapbox SDK", "SQLite", "Firebase"],
    searchAdvantage: "App Store Optimization (ASO) + deep-link Google indexation",
  },
  {
    id: "design-motion",
    label: "Figma UI/UX & Adobe Animate Motion",
    sublabel: "Atomic design tokens, Canva brand collateral, and 60fps vector web animation",
    sprintWeeks: 2,
    efficiencyGain: "+84% Page Dwell Time",
    adminHoursSaved: "20+ hrs/week saved",
    techRecommendation: ["Figma 5.0 Tokens", "Adobe Animate Canvas", "Canva Brand Kit", "GSAP"],
    searchAdvantage: "+80% dwell time reduction in bounce rates directly lifting SERP rank",
  },
  {
    id: "omnichannel-godigital",
    label: "Full 'Go Digital' Enterprise Suite",
    sublabel: "Turnkey combination: AI Voicebot + Next.js CRM + Mobile App + Technical SEO",
    sprintWeeks: 5,
    efficiencyGain: "10x Operational Scalability",
    adminHoursSaved: "60+ hrs/week saved",
    techRecommendation: ["Next.js App Router", "OpenAI Realtime", "Supabase", "React Native", "Schema.org"],
    searchAdvantage: "Complete SERP dominance for commercial & local transaction keywords",
  },
];

export const teamSizeOptions: TeamSizeOption[] = [
  { label: "Solo / Founder (1-3)", multiplier: 1.0 },
  { label: "Growing SMB (4-20)", multiplier: 1.0 },
  { label: "Established Business (21-75)", multiplier: 1.0 },
  { label: "Enterprise Scale (75+)", multiplier: 1.0 },
];
