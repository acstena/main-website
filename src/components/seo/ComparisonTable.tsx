import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";

interface ComparisonRow {
  factor: string;
  legacy: string;
  modern: string;
}

const rows: ComparisonRow[] = [
  {
    factor: "Phone Calls & Lead Inquiries",
    legacy: "Voicemail (40%+ callers hang up after hours)",
    modern: "24/7 AI Receptionist (100% answered & booked instantly)",
  },
  {
    factor: "Customer & Order Management",
    legacy: "Messy spreadsheets, lost emails, and sticky notes",
    modern: "Unified Business Portal & Live Client Pipeline",
  },
  {
    factor: "Google Search Visibility",
    legacy: "Page 4+ (Slow template, invisible to local customers)",
    modern: "Top Google Rankings with Star Ratings & FAQs",
  },
  {
    factor: "Smartphone Experience",
    legacy: "Slow loading or broken layout on phones",
    modern: "Fast, sleek mobile experience that works anywhere",
  },
];

export default function ComparisonTable() {
  return (
    <div
      className="glass-card"
      style={{
        padding: "clamp(1.5rem, 3vw, 2.5rem)",
        marginBottom: "4.5rem",
        border: "1px solid var(--border-subtle)",
      }}
    >
      <h3 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", textAlign: "center" }}>
        Comparison: Traditional Manual Methods vs. The Modern Digital Standard
      </h3>

      <div className="comparison-table-wrapper">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Business Area</th>
              <th style={{ color: "#f87171" }}>Traditional Setup (Spreadsheets & Voicemail)</th>
              <th style={{ color: "var(--accent-emerald)" }}>Modern System by acstena</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.factor}>
                <td style={{ fontWeight: 600 }}>{r.factor}</td>
                <td style={{ color: "var(--text-secondary)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <XCircle size={16} color="#ef4444" />
                    <span>{r.legacy}</span>
                  </div>
                </td>
                <td style={{ color: "var(--text-primary)", fontWeight: 600 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <CheckCircle2 size={16} color="var(--accent-emerald)" />
                    <span>{r.modern}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
