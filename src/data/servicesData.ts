import { ServiceItem } from "@/types";

export const servicesData: ServiceItem[] = [
  {
    id: "ai-voicebots",
    category: "ai",
    title: "Conversational AI Voicebots & Autonomous Phone Agents",
    tagline: "Sub-800ms natural human-like voice receptionists and outbound dialers",
    badge: "Voice AI & WebRTC",
    description:
      "Engineered with ultra-low latency WebSockets, OpenAI Realtime API, Twilio SIP Trunking, and ElevenLabs neural speech. Replaces lost phone leads with 24/7 autonomous scheduling, live CRM sync, and smart transfer escalations.",
    deliverables: [
      "Inbound & outbound telephony integration (Twilio / SIP / Vonage)",
      "Real-time speech-to-text (Whisper / Deepgram Nova-2)",
      "Zero-latency conversational intelligence with automated slot-filling",
      "Direct calendar booking & CRM write-backs (HubSpot, Salesforce, Custom SQL)",
      "Custom voice persona training & brand acoustic tuning"
    ],
    techStack: ["OpenAI Realtime", "Twilio SIP", "Deepgram", "ElevenLabs", "Python FastAPI", "WebSockets"],
    businessImpact: "Eliminates 100% of missed call revenue; answers concurrent calls without hiring human staff.",
    iconName: "Mic"
  },
  {
    id: "ai-chatbots",
    category: "ai",
    title: "Enterprise RAG Chatbots & Internal Knowledge Systems",
    tagline: "High-accuracy contextual AI trained exclusively on your business data",
    badge: "LLM & Vector Search",
    description:
      "Proprietary Retrieval-Augmented Generation (RAG) chatbots integrated directly into your web apps and Slack/Teams. Queries internal SOPs, product catalogs, customer histories, and documentation with 0% hallucinations.",
    deliverables: [
      "Hybrid semantic vector search with Pinecone & pgvector",
      "Document ingestion pipeline (PDFs, Notion, SQL tables, Zendesk)",
      "Multi-turn conversational memory and session persistence",
      "Role-based access control and enterprise encryption",
      "Live operator handoff protocol with full context transcription"
    ],
    techStack: ["LangChain", "LlamaIndex", "pgvector", "Pinecone", "Next.js", "FastAPI"],
    businessImpact: "Resolves 78% of tier-1 customer inquiries instantly with zero human intervention.",
    iconName: "Bot"
  },
  {
    id: "web-crm-mvp",
    category: "web",
    title: "Custom CRM Portals & 3-Week Rapid Cloud MVPs",
    tagline: "From fragile spreadsheets to high-performance scalable web systems",
    badge: "Next.js 16 & Serverless",
    description:
      "Tailor-made web applications designed to solve operational bottlenecks. Whether transitioning manual business processes into a unified CRM or building an investor-ready SaaS MVP from scratch in weeks.",
    deliverables: [
      "Scalable multi-tenant Next.js App Router architecture",
      "Relational database modeling with PostgreSQL, Supabase, and Prisma",
      "Real-time pipeline kanbans, lead scoring, and automated notifications",
      "Secure authentication (NextAuth, Clerk, Supabase Auth) with RBAC",
      "Stripe Billing, subscription management, and webhook listeners"
    ],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "Prisma", "Tailwind/CSS", "Stripe"],
    businessImpact: "Accelerates time-to-market by 3x; cuts operational workflow cycle time by 65%.",
    iconName: "LayoutDashboard"
  },
  {
    id: "mobile-logistics",
    category: "mobile",
    title: "Logistics, Fleet Telematics & Dispatch Mobile Apps",
    tagline: "Mission-critical real-time tracking for drivers, dispatchers, and warehouses",
    badge: "Cross-Platform React Native",
    description:
      "Resilient mobile applications architected for field operators in challenging network conditions. Features offline sync, turn-by-turn routing, barcode scanning, proof-of-delivery signatures, and live dispatcher maps.",
    deliverables: [
      "High-frequency GPS background tracking & geofencing engine",
      "Offline-first SQLite architecture with automatic cloud delta sync",
      "Live Mapbox & Google Maps turn-by-turn route optimization",
      "Digital camera OCR manifest and barcode scanner integration",
      "Instant push dispatch notifications via FCM / APNS"
    ],
    techStack: ["React Native", "Expo", "Mapbox SDK", "SQLite", "Node.js", "WebSockets", "FCM"],
    businessImpact: "Reduces empty-mile fleet waste by 24% and delivers 99.4% on-time dispatch visibility.",
    iconName: "Truck"
  },
  {
    id: "mobile-wellness-ai",
    category: "mobile",
    title: "Mindfulness, Meditation & Voice-First Wellness Apps",
    tagline: "Soothing audio soundscapes, biometric tracking, and ambient voice coaching",
    badge: "Audio Streaming & HealthKit",
    description:
      "Consumer mobile experiences crafted with calming sensory aesthetics. Features seamless background spatial audio playback, Apple HealthKit / Google Fit biometric synchronization, streak gamification, and AI meditation coaching.",
    deliverables: [
      "Low-latency spatial soundscape engine with offline downloading",
      "Interactive breathing guide circles with haptic feedback vibration",
      "Biometric heart-rate and sleep integration via Apple HealthKit",
      "In-app purchase paywalls with RevenueCat (iOS & Android)",
      "Ambient AI voice conversational mindfulness coach"
    ],
    techStack: ["Flutter / React Native", "TrackPlayer", "HealthKit", "RevenueCat", "OpenAI Audio"],
    businessImpact: "Achieves >42% 30-day user retention through personalized biometric routines.",
    iconName: "HeartPulse"
  },
  {
    id: "figma-uiux",
    category: "design",
    title: "High-Fidelity Figma UI/UX Design & Design Systems",
    tagline: "Conversion-optimized interface architecture engineered for rapid development",
    badge: "Figma Tokens & Prototyping",
    description:
      "Every wireframe, screen, and component is architected in Figma using systematic design tokens, auto-layout 5.0, variables, and responsive constraints. Ensures frictionless developer handoff and pixel-perfect execution.",
    deliverables: [
      "Complete design system: Typography, colors, spacing tokens, and UI components",
      "Interactive high-fidelity clickable prototype for user testing and investors",
      "Information architecture, user flow mapping, and conversion wireframes",
      "Responsive layout specifications (Mobile, Tablet, Desktop 4K)",
      "Direct code-ready design token export (CSS/JSON)"
    ],
    techStack: ["Figma", "Auto Layout", "Tokens Studio", "FigJam", "Design Systems"],
    businessImpact: "Decreases frontend engineering rework by 70% and boosts landing page conversion by 35%.",
    iconName: "Figma"
  },
  {
    id: "canva-branding",
    category: "design",
    title: "Canva Brand Identity, Business Cards & Marketing Kits",
    tagline: "Empowering small businesses with maintainable, high-impact visual collateral",
    badge: "Branding & Print Ready",
    description:
      "Professional brand identity packages engineered so that your internal team can easily edit and reuse assets. Includes print-ready NFC digital business cards, pitch decks, social media kits, and brand manuals.",
    deliverables: [
      "Custom business card designs (print-ready CMYK + digital NFC vCard)",
      "High-impact investor and sales presentation pitch decks",
      "Reusable Canva brand kit with typography, palettes, and templates",
      "Omnichannel social media banner and promotional ad packages",
      "Vector logos and brand style guide documentation"
    ],
    techStack: ["Canva Pro", "Adobe Illustrator", "Vector SVG", "Print CMYK", "vCard NFC"],
    businessImpact: "Elevates brand perceived value instantly; arms sales teams with assets that close deals.",
    iconName: "Sparkles"
  },
  {
    id: "adobe-animate-motion",
    category: "animation",
    title: "Adobe Animate 2D Motion Graphics & Web Micro-Interactions",
    tagline: "Liquid-smooth 60fps vector animations that captivate visitors",
    badge: "Vector Motion & HTML5 Canvas",
    description:
      "Custom 2D character animations, interactive explainer scenes, and UI micro-interactions created in Adobe Animate. Exported into lightweight HTML5 Canvas, SVG, or Lottie formats that load instantly without lagging.",
    deliverables: [
      "Custom vector character rigging, walk cycles, and expressive animation",
      "Product explainer animations demonstrating complex software features",
      "Interactive HTML5 Canvas and SVG animations embedded directly into web code",
      "60fps responsive micro-animations for buttons, loaders, and transitions",
      "Optimized export pipelines (Canvas, WebM, Lottie JSON, MP4)"
    ],
    techStack: ["Adobe Animate", "CreateJS", "HTML5 Canvas", "Lottie / Bodymovin", "GSAP"],
    businessImpact: "Increases average website dwell time by +85% and significantly lowers bounce rates.",
    iconName: "Film"
  },
  {
    id: "seo-transformation",
    category: "seo",
    title: "Small Business 'Go Digital' & Search Ranking Dominance",
    tagline: "Technical SEO, Core Web Vitals, and organic local/national Google dominance",
    badge: "Technical SEO & Schema",
    description:
      "Targeted at traditional and small businesses seeking to modernize their digital presence. We rebuild legacy web footprints with semantic schema markup, sub-second TTFB speeds, and hyper-targeted commercial keyword funnels.",
    deliverables: [
      "Full Core Web Vitals audit & 98+ PageSpeed optimization",
      "Commercial intent keyword clustering and competitive SERP gap analysis",
      "Rich Schema.org JSON-LD microdata implementation for Google Rich Snippets",
      "Automated XML sitemaps, robots.txt, and canonical indexing structures",
      "Local SEO Google Business Profile synchronization & citation strategy"
    ],
    techStack: ["Next.js SSG/ISR", "Schema.org", "Google Search Console", "Semrush Strategy", "Lighthouse"],
    businessImpact: "Drives top-3 Google rankings for high-intent queries; doubles organic qualified inbound pipeline.",
    iconName: "TrendingUp"
  }
];
