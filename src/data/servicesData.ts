import { ServiceItem } from "@/types";

export const servicesData: ServiceItem[] = [
  {
    id: "ai-voicebots",
    category: "ai",
    title: "24/7 AI Phone Receptionist & Automated Scheduling",
    tagline: "Natural human-sounding voice assistant that answers every call and books appointments",
    badge: "Voice Automation",
    description:
      "Never miss another customer call, emergency inquiry, or quote request. Our AI receptionist answers the phone in seconds, speaks in a natural friendly voice, answers common questions, and books appointments directly into your calendar.",
    deliverables: [
      "Connects directly to your existing business phone number",
      "Instant call answering with zero customer hold time",
      "Automatic appointment booking synced to your calendar",
      "Instant text & email summaries after every completed call",
      "Smart call forwarding to your mobile for VIP or urgent situations"
    ],
    techStack: ["Natural Voice AI", "Phone Automation", "Calendar Sync", "Instant Alerts"],
    businessImpact: "Captures 100% of inbound phone leads day or night without hiring extra office staff.",
    iconName: "Mic"
  },
  {
    id: "ai-chatbots",
    category: "ai",
    title: "Smart Website Chatbots & Customer Knowledge Assistants",
    tagline: "Instant, helpful answers for website visitors trained on your exact business knowledge",
    badge: "Smart AI Chat",
    description:
      "Give every website visitor an immediate, helpful response 24 hours a day. Trained specifically on your service lists, pricing guides, and frequently asked questions, converting curious visitors into booked clients.",
    deliverables: [
      "Custom branded chat window that matches your website style",
      "Trained on your business documents, services, and FAQs",
      "Captures visitor contact info and qualifies leads automatically",
      "Works on your website, customer portal, and messaging channels",
      "Instant email and text alerts when a hot lead requests a quote"
    ],
    techStack: ["Smart AI Chat", "Custom Knowledge Base", "Lead Capture", "Automated Alerts"],
    businessImpact: "Answers 80%+ of repetitive customer questions immediately, freeing up your team's day.",
    iconName: "Bot"
  },
  {
    id: "web-crm-mvp",
    category: "web",
    title: "Custom Web Portals, Client CRMs & Rapid Cloud MVPs",
    tagline: "Replace messy spreadsheets with clean, professional software custom-built for your business",
    badge: "Custom Web Software",
    description:
      "Stop wrestling with fragmented spreadsheets, lost emails, and chaotic manual workflows. We build clean, secure web portals where your team and clients can manage orders, view job statuses, track invoices, and monitor revenue in one central place.",
    deliverables: [
      "Custom client management and pipeline dashboards",
      "Secure accounts for managers, staff, and external clients",
      "Automated notifications, reminders, and status updates",
      "Online customer invoicing, payment processing, and receipts",
      "Fast turnaround — launch a working, high-quality system in weeks"
    ],
    techStack: ["Custom Web Portals", "Secure Cloud Database", "Automated Billing", "Team Roles"],
    businessImpact: "Cuts admin and paperwork hours in half, eliminates lost records, and helps your business scale.",
    iconName: "LayoutDashboard"
  },
  {
    id: "mobile-logistics",
    category: "mobile",
    title: "Field Operations, Driver Dispatch & Delivery Mobile Apps",
    tagline: "Keep your drivers, field technicians, and dispatchers connected in real time",
    badge: "Field Operations App",
    description:
      "Designed specifically for teams on the move. Whether managing deliveries, field service visits, or fleet dispatch, our mobile apps provide live GPS location tracking, instant job updates, and digital signatures—even when cell service drops.",
    deliverables: [
      "Live GPS tracking, route directions, and job dispatching",
      "Works 100% offline — data syncs automatically when signal returns",
      "Digital proof of delivery with photo uploads and signature capture",
      "Instant push alerts for new jobs and customer arrival updates",
      "Runs smoothly on both iPhones and Android smartphones"
    ],
    techStack: ["iOS & Android", "Live GPS Tracking", "Works Offline", "Digital Signatures"],
    businessImpact: "Reduces fuel waste, eliminates lost delivery paperwork, and speeds up customer billing.",
    iconName: "Truck"
  },
  {
    id: "mobile-wellness-ai",
    category: "mobile",
    title: "Lifestyle, Wellness & Interactive Mobile Apps",
    tagline: "Engaging, beautifully designed iOS & Android apps that keep users coming back daily",
    badge: "Consumer Mobile Apps",
    description:
      "Turn your unique concept into a polished, revenue-generating mobile app. From guided wellness and audio experiences to habit trackers and interactive personal coaches, we build apps that captivate users and look stunning in the App Store.",
    deliverables: [
      "Beautiful, intuitive mobile interfaces designed for high engagement",
      "High-quality audio player with offline listening support",
      "Daily progress reminders, habit tracking, and streak badges",
      "In-app subscriptions and secure membership paywalls (Apple & Google)",
      "Complete launch assistance on both Apple App Store and Google Play"
    ],
    techStack: ["iOS & Android Apps", "Audio Streaming", "Member Subscriptions", "Push Notifications"],
    businessImpact: "Builds a loyal subscriber base with recurring monthly and annual membership revenue.",
    iconName: "HeartPulse"
  },
  {
    id: "figma-uiux",
    category: "design",
    title: "Modern Website Design & Interactive Prototypes (Figma)",
    tagline: "See exactly how your website or app will look and feel before a single line of code is built",
    badge: "Design & Prototyping",
    description:
      "No surprises or guesswork. We craft clickable, pixel-perfect visual previews of your entire website or digital application in Figma, allowing you to test the layout, color palette, and user flow before development begins.",
    deliverables: [
      "Clickable interactive preview you can open on your phone or laptop",
      "Clean, modern visual identity tailored to your brand personality",
      "Mobile-friendly layouts tested across screens of all sizes",
      "Conversion-focused user journey designed to turn visitors into buyers",
      "Complete design file library ready for seamless handover"
    ],
    techStack: ["Figma Design", "Interactive Prototype", "Mobile-First Layout", "Design System"],
    businessImpact: "Saves weeks of revision time and ensures your final launch converts visitors into paying customers.",
    iconName: "Figma"
  },
  {
    id: "canva-branding",
    category: "design",
    title: "Brand Identity, Business Cards & Marketing Collateral",
    tagline: "Professional visual branding and editable marketing assets your team can easily update",
    badge: "Brand & Marketing Assets",
    description:
      "Give your business a polished, authoritative market presence. We design clean modern logos, luxury business cards (both print-ready and digital tap-to-share NFC cards), sales pitch decks, and easy-to-edit Canva templates for your ongoing marketing.",
    deliverables: [
      "Modern logo package with versatile variations for web and print",
      "Premium business card designs (print-ready + digital tap-to-phone vCard)",
      "Sales presentation pitch decks that impress prospective clients",
      "Editable social media templates your team can customize in seconds",
      "Brand style guide covering your typography, colors, and layout rules"
    ],
    techStack: ["Brand Strategy", "Canva Pro Templates", "Digital NFC Cards", "Vector Print Files"],
    businessImpact: "Builds instant trust and credibility, helping you command premium prices for your services.",
    iconName: "Sparkles"
  },
  {
    id: "adobe-animate-motion",
    category: "animation",
    title: "Custom 2D Animation & Interactive Web Motion",
    tagline: "Engaging animated graphics and interactive visuals that bring your website to life",
    badge: "Motion & Animation",
    description:
      "Static websites blend into the crowd. We create smooth, bespoke 2D animations, interactive product explainers, and dynamic micro-movements that immediately grab visitor attention, explain complex concepts simply, and keep eyes on your page.",
    deliverables: [
      "Custom 2D animated product and service explainers",
      "Lightweight web animations that load instantly without slowing down your site",
      "Subtle interactive button hover and scrolling effects that feel premium",
      "Storyboards and custom character illustrations tailored to your narrative",
      "High-definition video exports for social media and website banners"
    ],
    techStack: ["Adobe Animate", "Smooth Web Motion", "Interactive SVG", "60fps Animation"],
    businessImpact: "Doubles visitor time-on-page and makes your brand unforgettable compared to ordinary static sites.",
    iconName: "Film"
  },
  {
    id: "seo-transformation",
    category: "seo",
    title: "Small Business 'Go Digital' & Google Search Growth",
    tagline: "Get found on Google, attract local customers, and convert searchers into booked calls",
    badge: "Google Ranking & Growth",
    description:
      "Specifically designed for established local and small businesses looking to modernize and dominate their market. We overhaul your digital presence so you rank at the top of Google searches, load instantly on mobile phones, and turn visitors into paying customers.",
    deliverables: [
      "Google Search & Google Maps optimization for local client inquiries",
      "Blazing-fast mobile page speeds so customers never bounce away",
      "High-intent keyword targeting that brings ready-to-buy customers",
      "Automated review generation guidance and trust badges",
      "Clear monthly performance reports showing traffic, phone calls, and new leads"
    ],
    techStack: ["Google Business Optimization", "Mobile Speed Engineering", "Search Ranking Strategy"],
    businessImpact: "Generates consistent, qualified inbound client inquiries every month without costly ad spend.",
    iconName: "TrendingUp"
  }
];
