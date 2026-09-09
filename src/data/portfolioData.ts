import { ProjectCaseStudy } from "@/types";

export const portfolioProjects: ProjectCaseStudy[] = [
  {
    id: "omnivoice-ai",
    title: "OmniVoice 24/7 AI Receptionist & Appointment Booking",
    category: "AI & Voicebots",
    clientIndustry: "Healthcare & Multi-Clinic Network",
    summary:
      "A natural-sounding AI phone receptionist that answers 200+ patient calls simultaneously, provides answers to common questions, and schedules appointments directly into the clinic calendar with zero hold time.",
    challenge:
      "Clinic front-desk staff were overwhelmed with 1,800+ phone calls weekly, causing a 42% missed call rate, lost patient revenue, and long hold times exceeding 8 minutes.",
    solution:
      "De-escalated front-desk pressure with an automated AI phone assistant that answers in under 2 seconds, speaks warmly and naturally, books appointments directly into the calendar, and sends instant confirmation text messages.",
    image: "/images/ai_voicebot_showcase.jpg",
    stats: [
      { label: "Missed Calls", value: "0%" },
      { label: "Hold Time", value: "< 2 sec" },
      { label: "Monthly Bookings", value: "+1,420" },
      { label: "Staff Time Saved", value: "32 hrs/wk" }
    ],
    tags: ["AI Phone Receptionist", "Calendar Auto-Sync", "Instant SMS Alerts", "Zero Hold Time"]
  },
  {
    id: "apexflow-crm",
    title: "ApexFlow Custom Operations Portal & Quote Hub",
    category: "Web & Cloud MVP",
    clientIndustry: "Freight Brokerage & Logistics",
    summary:
      "A custom-built web application replacing 14 fragmented spreadsheets with an all-in-one portal for instant freight quote generation, digital contract signing, and real-time load dispatching.",
    challenge:
      "Brokers spent 45 minutes manually calculating freight quotes, reconciling insurance documents, and emailing PDFs back and forth, creating major delays and lost deals.",
    solution:
      "Built a secure, centralized web dashboard that calculates quotes automatically in seconds, notifies clients via email and SMS, and provides a clear live pipeline for the entire team.",
    image: "/images/web_crm_platform.jpg",
    stats: [
      { label: "Quote Generation", value: "45s (was 45m)" },
      { label: "Team Productivity", value: "+310%" },
      { label: "Order Errors", value: "-94%" },
      { label: "Active Brokers", value: "240+" }
    ],
    tags: ["Custom Client Portal", "Instant Quoting", "Digital Signatures", "Live Dashboard"]
  },
  {
    id: "fleetpulse-mobile",
    title: "FleetPulse Field Dispatch & Driver Mobile App",
    category: "Mobile App Development",
    clientIndustry: "Delivery & Fleet Operations",
    summary:
      "A reliable mobile application for drivers and dispatchers that provides turn-by-turn routing, package barcode scanning, and digital customer signatures—even when cell reception drops entirely.",
    challenge:
      "Drivers in rural delivery corridors frequently lost cell signal, which caused legacy systems to crash, lost delivery timestamp records, and forced dispatchers to make dozens of check-in calls.",
    solution:
      "Built an intuitive mobile app that works 100% offline. Drivers capture signatures and photos smoothly, and all records automatically upload the instant signal returns.",
    image: "/images/mobile_logistics_app.jpg",
    stats: [
      { label: "Active Fleet Vehicles", value: "150+ trucks" },
      { label: "Fuel Route Savings", value: "28%" },
      { label: "Delivery Record Reliability", value: "99.98%" },
      { label: "Driver Rating", value: "4.8 / 5.0" }
    ],
    tags: ["iOS & Android Apps", "Works Offline", "GPS Live Routing", "Digital Signatures"]
  },
  {
    id: "pulsemind-wellness",
    title: "PulseMind Audio Meditation & Habit Tracker App",
    category: "Mobile App Development",
    clientIndustry: "Digital Health & Wellness",
    summary:
      "A calming consumer mobile app featuring guided audio meditations, daily habit tracking, mindful breathing sessions, and seamless in-app subscriptions on Apple and Google devices.",
    challenge:
      "The client needed to launch a standout mobile experience with seamless audio streaming, habit streaks, and hassle-free membership payments to compete with top wellness apps.",
    solution:
      "Designed and developed a soothing mobile app with high-definition audio playback, daily routine reminders, and secure one-tap monthly and annual subscriptions.",
    image: "/images/mobile_wellness_app.jpg",
    stats: [
      { label: "Active Subscribers", value: "85,000+" },
      { label: "30-Day Retention", value: "44.2%" },
      { label: "App Store Rating", value: "4.9 ★" },
      { label: "Daily Sessions", value: "140k+" }
    ],
    tags: ["iPhone & Android", "Audio Soundscapes", "Member Subscriptions", "Daily Streaks"]
  },
  {
    id: "veloce-design-motion",
    title: "Veloce Brand Identity, Design System & Motion Graphics",
    category: "Design & Motion",
    clientIndustry: "Financial Services & Investment",
    summary:
      "A complete modern brand makeover in Figma, paired with interactive 2D explainer animations in Adobe Animate and executive Canva presentation decks that helped close an oversubscribed investment round.",
    challenge:
      "The company had an outdated, inconsistent visual appearance across their materials and struggled to explain their complex financial offerings to new clients and prospective investors.",
    solution:
      "Created a unified, modern visual design system, clickable website prototypes, smooth animated product explainers, and luxury digital business cards that built immediate authority.",
    image: "/images/creative_design_motion.jpg",
    stats: [
      { label: "Development Speed", value: "+75%" },
      { label: "Website Time-On-Page", value: "+84%" },
      { label: "Investor Round", value: "Oversubscribed" },
      { label: "Brand Asset Library", value: "100% Reusable" }
    ],
    tags: ["Interactive Prototypes", "2D Web Animation", "Canva Pitch Decks", "Digital NFC Cards"]
  }
];
