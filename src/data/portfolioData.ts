import { ProjectCaseStudy } from "@/types";

export const portfolioProjects: ProjectCaseStudy[] = [
  {
    id: "omnivoice-ai",
    title: "OmniVoice AI Telephony & Autonomous Receptionist",
    category: "AI & Voicebots",
    clientIndustry: "Healthcare & Multi-Clinic Network",
    summary:
      "A zero-latency conversational voice agent capable of answering 200+ concurrent inbound patient calls, verifying insurance in real-time, and scheduling appointments directly into the EHR system.",
    challenge:
      "Clinic staff were overwhelmed with 1,800+ phone calls weekly, resulting in a 42% missed call rate, lost patient bookings, and prolonged hold times exceeding 8 minutes.",
    solution:
      "Engineered an autonomous voice agent using OpenAI Realtime API and Twilio WebRTC. Integrated speech-to-text with medical terminology tuning, bidirectional PostgreSQL EHR sync, and instant SMS confirmation dispatch.",
    image: "/images/ai_voicebot_showcase.jpg",
    stats: [
      { label: "Missed Calls", value: "0%" },
      { label: "Hold Time", value: "< 2 sec" },
      { label: "Monthly Bookings", value: "+1,420" },
      { label: "Staff Time Saved", value: "32 hrs/wk" }
    ],
    tags: ["OpenAI Realtime", "Twilio SIP", "WebRTC", "PostgreSQL", "Next.js", "Deepgram"]
  },
  {
    id: "apexflow-crm",
    title: "ApexFlow Enterprise CRM & Operational Hub",
    category: "Web & Cloud MVP",
    clientIndustry: "Freight Brokerage & B2B Logistics",
    summary:
      "Custom-built enterprise web application replacing 14 fragmented Google Spreadsheets with a unified real-time quote calculation, contract generation, and carrier compliance management system.",
    challenge:
      "Brokers spent 45 minutes manually calculating freight quotes, reconciling carrier certificates, and dispatching PDF agreements, causing severe pipeline drag and lost margin opportunities.",
    solution:
      "Architected a Next.js 16 full-stack cloud portal with Supabase real-time subscriptions, dynamic algorithmic freight pricing formulas, instant DocuSign webhooks, and an interactive Kanban dispatch board.",
    image: "/images/web_crm_platform.jpg",
    stats: [
      { label: "Quote Generation", value: "45s (was 45m)" },
      { label: "Pipeline Velocity", value: "+310%" },
      { label: "Operational Error Rate", value: "-94%" },
      { label: "Brokers Onboarded", value: "240+" }
    ],
    tags: ["Next.js App Router", "Supabase", "Prisma ORM", "TypeScript", "Tailwind CSS", "Redis"]
  },
  {
    id: "fleetpulse-mobile",
    title: "FleetPulse Real-Time Dispatch & Telematics App",
    category: "Mobile App Development",
    clientIndustry: "Last-Mile Distribution & Fleet Operators",
    summary:
      "High-resilience cross-platform mobile application providing delivery drivers with offline turn-by-turn routing, package barcode scanning, digital signature capture, and live telematics telemetry.",
    challenge:
      "Drivers in rural distribution corridors frequently lost cellular connection, crashing legacy web portals and preventing delivery timestamp confirmations.",
    solution:
      "Engineered an offline-first mobile app using React Native and SQLite local caching. Implemented high-efficiency background GPS geofencing that queues telemetry and auto-syncs when LTE is re-established.",
    image: "/images/mobile_logistics_app.jpg",
    stats: [
      { label: "Active Fleet Vehicles", value: "150+ trucks" },
      { label: "Route Fuel Savings", value: "28%" },
      { label: "Offline Sync Reliability", value: "99.98%" },
      { label: "Driver App Rating", value: "4.8 / 5.0" }
    ],
    tags: ["React Native", "Expo", "Mapbox SDK", "SQLite", "Node.js", "WebSockets"]
  },
  {
    id: "pulsemind-wellness",
    title: "PulseMind Spatial Soundscape & Meditation App",
    category: "Mobile App Development",
    clientIndustry: "Digital Health & Mindfulness",
    summary:
      "Premium audio meditation and breathwork companion featuring spatial ambient sound layering, Apple Health biometric synchronization, and dynamic circadian rhythm routines.",
    challenge:
      "The client needed to compete with market incumbents by offering sub-millisecond audio loop transitions, haptic-assisted breathing guidance, and frictionless paywall onboarding.",
    solution:
      "Developed a custom cross-platform audio player using native AVPlayer/ExoPlayer bindings, integrated Apple HealthKit heart-rate feedback, and implemented RevenueCat subscription infrastructure.",
    image: "/images/mobile_wellness_app.jpg",
    stats: [
      { label: "Active Subscribers", value: "85,000+" },
      { label: "Day-30 Retention", value: "44.2%" },
      { label: "App Store Rating", value: "4.9 ★" },
      { label: "Daily Sessions", value: "140k+" }
    ],
    tags: ["Flutter", "Audio Engine", "HealthKit", "RevenueCat", "Figma UI/UX", "Firebase"]
  },
  {
    id: "veloce-design-motion",
    title: "Veloce Design System & Adobe Animate Motion Suite",
    category: "Design & Motion",
    clientIndustry: "FinTech & Investment Banking",
    summary:
      "Comprehensive multi-brand design system in Figma paired with interactive Adobe Animate 2D vector animations and Canva executive presentation decks for high-stakes investor roadshows.",
    challenge:
      "The company suffered from inconsistent brand identity across 6 regional websites and needed high-impact interactive visuals to explain complex algorithmic liquidity mechanics to institutional investors.",
    solution:
      "Built an atomic Figma design system with 350+ tokenized components, created interactive HTML5 Canvas explainer animations in Adobe Animate, and produced print & NFC corporate identity collateral.",
    image: "/images/creative_design_motion.jpg",
    stats: [
      { label: "Frontend Dev Speed", value: "+75%" },
      { label: "Page Dwell Time", value: "+84%" },
      { label: "Investor Backing", value: "Oversubscribed" },
      { label: "Design Token Reusability", value: "100%" }
    ],
    tags: ["Figma Tokens", "Adobe Animate", "HTML5 Canvas", "Canva Pro", "GSAP", "Vector SVG"]
  }
];
