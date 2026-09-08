import React from "react";

interface MetricItem {
  value: string;
  label: string;
  sublabel: string;
  colorClass: string;
}

const metrics: MetricItem[] = [
  {
    value: "< 800ms",
    label: "Voice AI Latency",
    sublabel: "Real-time speech streaming",
    colorClass: "var(--accent-cyan)",
  },
  {
    value: "2 - 4 Weeks",
    label: "Rapid MVP Velocity",
    sublabel: "Production Next.js systems",
    colorClass: "var(--accent-emerald)",
  },
  {
    value: "0%",
    label: "Missed Phone Leads",
    sublabel: "24/7 autonomous telephony",
    colorClass: "#38bdf8",
  },
  {
    value: "99.98%",
    label: "Uptime & Delivery SLA",
    sublabel: "Enterprise reliability guarantee",
    colorClass: "var(--accent-violet)",
  },
];

export default function HeroMetrics() {
  return (
    <div className="hero-metrics-row">
      {metrics.map((m) => (
        <div key={m.label} className="hero-metric-item">
          <div className="metric-val" style={{ color: m.colorClass }}>
            {m.value}
          </div>
          <div className="metric-label">{m.label}</div>
          <div className="metric-sublabel">{m.sublabel}</div>
        </div>
      ))}
    </div>
  );
}
