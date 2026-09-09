import React from "react";

interface MetricItem {
  value: string;
  label: string;
  sublabel: string;
  color: string;
}

const metrics: MetricItem[] = [
  {
    value: "100%",
    label: "Calls Answered",
    sublabel: "Zero missed customer leads",
    color: "#10b981",
  },
  {
    value: "2 - 4 Weeks",
    label: "Fast Time-To-Launch",
    sublabel: "From concept to live system",
    color: "#0284c7",
  },
  {
    value: "3x Faster",
    label: "Workflow Velocity",
    sublabel: "Replace manual spreadsheets",
    color: "#6366f1",
  },
  {
    value: "4.9 ★",
    label: "Client Rating",
    sublabel: "Exceptional speed & quality",
    color: "#f59e0b",
  },
];

export default function HeroMetrics() {
  return (
    <div className="hero-metrics-grid">
      {metrics.map((m) => (
        <div key={m.label} className="hero-metric-card">
          <div className="metric-val" style={{ color: m.color }}>
            {m.value}
          </div>
          <div className="metric-label">{m.label}</div>
          <div className="metric-sublabel">{m.sublabel}</div>
        </div>
      ))}
    </div>
  );
}
