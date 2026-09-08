import { Scenario } from "@/types";

export const simulatorScenarios: Scenario[] = [
  {
    id: "healthcare",
    title: "OmniVoice Clinical Receptionist",
    badge: "Healthcare Voicebot",
    industry: "Dental & Specialty Clinics",
    description:
      "Autonomous 24/7 inbound telephone agent answering patient calls, verifying insurance, and booking appointments directly into EHR calendar.",
    dialog: [
      {
        speaker: "agent",
        text: "Thank you for calling Apex Dental Studio. I'm Elara, the digital care coordinator. How may I help you today?",
      },
      {
        speaker: "user",
        text: "Hi, I have a broken molar and need to schedule an emergency appointment with Dr. Harris for tomorrow morning.",
      },
      {
        speaker: "agent",
        text: "I understand that's uncomfortable. I have an emergency slot tomorrow at 9:30 AM with Dr. Harris. May I have your full name and date of birth?",
        extractedData: {
          Reason: "Emergency broken molar",
          Provider: "Dr. Harris",
          RequestedTime: "Tomorrow 9:30 AM",
        },
      },
      {
        speaker: "user",
        text: "Yes, it's David Miller, born June 14th, 1988.",
      },
      {
        speaker: "agent",
        text: "Got it, David. You're confirmed for tomorrow at 9:30 AM. I've sent a calendar invite and digital intake link to your phone via SMS. Is there anything else I can assist with?",
        extractedData: {
          Patient: "David Miller",
          DOB: "06/14/1988",
          Status: "Confirmed in EHR Calendar",
          Action: "SMS Intake Link Dispatched",
        },
      },
    ],
  },
  {
    id: "logistics",
    title: "FleetPulse Dispatch AI Telephony",
    badge: "Logistics Voicebot",
    industry: "Freight & Carrier Operations",
    description:
      "Automated phone check-in line for long-haul drivers to report transit milestones, trailer status, and automated arrival ETAs without waiting on hold.",
    dialog: [
      {
        speaker: "agent",
        text: "Apex Logistics Automated Dispatch. Please state your Driver ID or trailer number.",
      },
      {
        speaker: "user",
        text: "Driver ID 4082, hauling load 9912.",
      },
      {
        speaker: "agent",
        text: "Welcome back, Marcus. Load 9912 is scheduled for distribution center 4 in Dallas. What is your current mile marker and estimated arrival?",
        extractedData: {
          Driver: "Marcus Vance (#4082)",
          Load: "#9912 (Refrigerated)",
          Destination: "Dallas DC-4",
        },
      },
      {
        speaker: "user",
        text: "Just passed Mile 184 on I-35. Weather is clear, ETA is 18:45 tonight.",
      },
      {
        speaker: "agent",
        text: "Logged: Mile 184, ETA 18:45. Dock bay 14 has been reserved for your unloading window. Stay safe out there!",
        extractedData: {
          Milestone: "I-35 Mile 184",
          RevisedETA: "18:45 CST",
          AssignedDock: "Bay 14",
          TMS_Status: "Auto-Updated in Realtime",
        },
      },
    ],
  },
  {
    id: "saas",
    title: "SaaS Conversational Sales Engineer",
    badge: "B2B CRM Chatbot",
    industry: "Enterprise Software & Startups",
    description:
      "High-intent inbound lead qualifier that conducts conversational discovery, answers technical architecture questions, and schedules executive demos.",
    dialog: [
      {
        speaker: "agent",
        text: "Hello! Looking to scale your business operations or replace legacy spreadsheets? Tell me a bit about your current software setup.",
      },
      {
        speaker: "user",
        text: "We run a 40-person construction firm and are drowning in manual Excel dispatch logs. We need a custom web portal with mobile app access.",
      },
      {
        speaker: "agent",
        text: "That's exactly what our Custom CRM & Mobile stack is built for. We typically build offline-first mobile apps for field crews with a centralized Next.js operational dashboard in 3 weeks. Would you like to review our Construction Case Study?",
        extractedData: {
          CompanySize: "40 employees",
          PainPoint: "Manual Excel spreadsheet gridlock",
          TargetSolution: "Custom Next.js CRM + Offline Mobile App",
        },
      },
      {
        speaker: "user",
        text: "Yes, and I'd like to book a 20-minute scoping call with your lead architect this Thursday.",
      },
      {
        speaker: "agent",
        text: "Perfect! I have slots open Thursday at 2:00 PM and 4:30 PM EST. Which works better for your calendar?",
        extractedData: {
          Intent: "High Commercial (Tier 1 Lead)",
          Action: "Executive Technical Consultation Scheduled",
          LeadScore: "98 / 100",
        },
      },
    ],
  },
];
