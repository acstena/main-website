import React from "react";

interface MetricItem {
  value: string;
  label: string;
  colorClass: string;
}

const metrics: MetricItem[] = [
  {
    value: "< 800ms",
    label: "AI Voicebot Response Latency",
    colorClass: "var(--accent-cyan)",
  },
  {
    value: "2 - 4 Weeks",
    label: "Rapid MVP & CRM Deployment",
    colorClass: "var(--accent-emerald)",
  },
  {
    value: "99.8%",
    label: "Uptime & Core Web Vitals",
    colorClass: "var(--accent-violet)",
  },
];

export default function HeroMetrics() {
  return (
    <div className="hero-metrics-row">
      {metrics.map((m) => (
        <div key={m.label}>
          <div className="metric-val" style={{ color: m.colorClass }}>
            {m.value}
          </div>
          <div className="metric-label">{m.label}</div>
        </div>
      ))}
    </div>
  );
}
