import { SolutionOption, TeamSizeOption } from "@/types";

export const solutionOptions: SolutionOption[] = [
  {
    id: "ai-voicebot",
    label: "Autonomous AI Voicebot & Telephony",
    sublabel: "24/7 call answering, instant appointment scheduling & CRM sync",
    sprintWeeks: 2,
    monthlySavings: 3800,
    techRecommendation: ["OpenAI Realtime API", "Twilio SIP Trunking", "Deepgram STT", "FastAPI"],
    searchAdvantage: "Schema VoiceSearch microdata + zero missed phone lead conversions",
  },
  {
    id: "web-crm",
    label: "Custom Web CRM & Operations Portal",
    sublabel: "Retire manual spreadsheets into unified cloud kanban & automated pipeline",
    sprintWeeks: 3,
    monthlySavings: 5200,
    techRecommendation: ["Next.js 16", "PostgreSQL", "Supabase", "Prisma ORM", "Tailwind"],
    searchAdvantage: "Sub-second TTFB, 99+ Core Web Vitals, enterprise SSL security",
  },
  {
    id: "mobile-app",
    label: "Enterprise Mobile App (Logistics / Wellness)",
    sublabel: "Offline-first GPS tracking, spatial audio, or conversational mobile AI",
    sprintWeeks: 4,
    monthlySavings: 6500,
    techRecommendation: ["React Native / Flutter", "Mapbox SDK", "SQLite", "Firebase"],
    searchAdvantage: "App Store Optimization (ASO) + deep-link Google indexation",
  },
  {
    id: "design-motion",
    label: "Figma UI/UX & Adobe Animate Motion",
    sublabel: "Atomic design tokens, Canva brand collateral, and 60fps vector web animation",
    sprintWeeks: 2,
    monthlySavings: 2900,
    techRecommendation: ["Figma 5.0 Tokens", "Adobe Animate Canvas", "Canva Brand Kit", "GSAP"],
    searchAdvantage: "+80% dwell time reduction in bounce rates directly lifting SERP rank",
  },
  {
    id: "omnichannel-godigital",
    label: "Full 'Go Digital' Enterprise Suite",
    sublabel: "Turnkey combination: AI Voicebot + Next.js CRM + Mobile App + Technical SEO",
    sprintWeeks: 5,
    monthlySavings: 11400,
    techRecommendation: ["Next.js App Router", "OpenAI Realtime", "Supabase", "React Native", "Schema.org"],
    searchAdvantage: "Complete SERP dominance for commercial & local transaction keywords",
  },
];

export const teamSizeOptions: TeamSizeOption[] = [
  { label: "Solo / Founder (1-3)", multiplier: 0.8 },
  { label: "Growing SMB (4-20)", multiplier: 1.2 },
  { label: "Established Business (21-75)", multiplier: 2.1 },
  { label: "Enterprise Scale (75+)", multiplier: 3.5 },
];
