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
    title: "Fast Loading Speed (< 1s)",
    description:
      "Loads in under 1 second on mobile phones. Google rewards fast websites with top rankings, and visitors stay instead of clicking to competitors.",
    icon: <Zap size={22} color="var(--accent-cyan)" />,
  },
  {
    number: "2",
    title: "Target Ready-to-Buy Clients",
    description:
      "We target specific high-value customer searches (like 'emergency appointment' or 'commercial logistics') so people looking to buy find you first.",
    icon: <Target size={22} color="var(--accent-emerald)" />,
  },
  {
    number: "3",
    title: "Google-Optimized Business Profile",
    description:
      "We structure your business details so Google displays your star ratings, customer reviews, services, and FAQs directly inside search results.",
    icon: <Globe size={22} color="var(--accent-violet)" />,
  },
  {
    number: "4",
    title: "24/7 Lead & Call Capture",
    description:
      "Ranking on Google is only valuable if calls are answered. Our automated AI receptionist answers questions and books appointments around the clock.",
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
