import { SolutionOption, TeamSizeOption } from "@/types";

export const solutionOptions: SolutionOption[] = [
  {
    id: "ai-voicebot",
    label: "24/7 AI Phone Receptionist",
    sublabel: "Instant call answering, appointment scheduling & calendar sync",
    sprintWeeks: 2,
    efficiencyGain: "100% of Calls Answered",
    adminHoursSaved: "32+ hours/week saved",
    techRecommendation: ["Natural Voice AI", "Instant Call Answering", "Calendar Auto-Booking", "SMS Confirmations"],
    searchAdvantage: "Never lose another customer calling from Google search or Google Maps",
  },
  {
    id: "web-crm",
    label: "Custom Business Portal & Client CRM",
    sublabel: "Replace messy spreadsheets with an organized, private web system",
    sprintWeeks: 3,
    efficiencyGain: "3x Faster Job & Quote Processing",
    adminHoursSaved: "40+ hours/week saved",
    techRecommendation: ["Client Management Portal", "Automated Invoicing", "Team Accounts", "Secure Cloud Database"],
    searchAdvantage: "Fast, modern web system that gives your clients a seamless online experience",
  },
  {
    id: "mobile-app",
    label: "Field Operations or Consumer Mobile App",
    sublabel: "Keep drivers, team members, or subscribers connected on iPhone & Android",
    sprintWeeks: 4,
    efficiencyGain: "Real-Time Tracking & 100% Offline Reliability",
    adminHoursSaved: "25+ hours/week saved",
    techRecommendation: ["iOS & Android Apps", "GPS Location & Routing", "Works Offline", "Push Notifications"],
    searchAdvantage: "App Store presence, high customer retention, and instant push updates",
  },
  {
    id: "design-motion",
    label: "Modern Website Design & Brand Assets",
    sublabel: "Clickable Figma prototypes, editable Canva templates, and custom animations",
    sprintWeeks: 2,
    efficiencyGain: "Double Visitor Engagement",
    adminHoursSaved: "20+ hours/week saved",
    techRecommendation: ["Figma Interactive Previews", "Editable Canva Templates", "2D Animated Graphics", "Digital NFC Business Cards"],
    searchAdvantage: "Visitors stay twice as long on your site, signaling high authority to Google",
  },
  {
    id: "omnichannel-godigital",
    label: "Full 'Go Digital' Complete Business Transformation",
    sublabel: "All-in-one: AI Phone Receptionist + Custom Portal + Mobile App + Top Google Search Ranking",
    sprintWeeks: 5,
    efficiencyGain: "10x Business Scalability & Zero Lost Leads",
    adminHoursSaved: "60+ hours/week saved",
    techRecommendation: ["AI Phone Receptionist", "Custom Client Portal", "Mobile Team App", "Top Google Rankings"],
    searchAdvantage: "Complete market dominance across local Google searches and phone inquiries",
  },
];

export const teamSizeOptions: TeamSizeOption[] = [
  { label: "Solo / Small Business (1-3)", multiplier: 1.0 },
  { label: "Growing Team (4-20)", multiplier: 1.0 },
  { label: "Established Company (21-75)", multiplier: 1.0 },
  { label: "Enterprise Scale (75+)", multiplier: 1.0 },
];
