import React from "react";
import { Zap, Target, Globe, ShieldCheck } from "lucide-react";

interface Pillar {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const pillars: Pillar[] = [
  {
    number: "1",
    title: "99+ Core Web Vitals",
    description:
      "Sub-second First Contentful Paint (FCP) and near-zero layout shift. Google prioritizes ultra-fast, lightweight Next.js architectures over sluggish traditional WordPress templates.",
    icon: <Zap size={22} color="var(--accent-cyan)" />,
  },
  {
    number: "2",
    title: "Commercial Intent Targeting",
    description:
      "Laser-focused keyword architectures matching transactional searches: 'hire voicebot developer', 'custom CRM builder for SMB', 'logistics fleet mobile app'.",
    icon: <Target size={22} color="var(--accent-emerald)" />,
  },
  {
    number: "3",
    title: "Schema.org Microdata",
    description:
      "Complete semantic JSON-LD graph linking ProfessionalServices, OfferCatalogs, and FAQs. Guarantees Google Rich Answer cards and voice search answers.",
    icon: <Globe size={22} color="var(--accent-violet)" />,
  },
  {
    number: "4",
    title: "24/7 AI Lead Capture",
    description:
      "Ranking #1 on Google is worthless if visitors bounce or call an unanswered line. Our embedded AI voicebots and interactive intake funnels lock in leads immediately.",
    icon: <ShieldCheck size={22} color="var(--accent-amber)" />,
  },
];

export default function PillarsGrid() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "1.5rem",
        marginBottom: "4.5rem",
      }}
    >
      {pillars.map((p) => (
        <div key={p.title} className="glass-card" style={{ padding: "1.75rem" }}>
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "10px",
              background: "rgba(255, 255, 255, 0.05)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1.25rem",
            }}
          >
            {p.icon}
          </div>
          <h3 style={{ fontSize: "1.15rem", marginBottom: "0.6rem" }}>
            {p.number}. {p.title}
          </h3>
          <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
            {p.description}
          </p>
        </div>
      ))}
    </div>
  );
}
