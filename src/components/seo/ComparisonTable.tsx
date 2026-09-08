import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";

interface ComparisonRow {
  factor: string;
  legacy: string;
  modern: string;
}

const rows: ComparisonRow[] = [
  {
    factor: "Phone Lead Ingestion",
    legacy: "Voicemail (42% abandoned after 5 PM)",
    modern: "Sub-800ms AI Voicebot (100% answered 24/7)",
  },
  {
    factor: "Operational Pipeline",
    legacy: "Clunky Google Sheets / Excel silos",
    modern: "Custom Next.js & Supabase CRM Kanban",
  },
  {
    factor: "Google SERP Visibility",
    legacy: "Page 4-10 (Slow WordPress, no microdata)",
    modern: "Top 3 Rankings + Google Answer Rich Cards",
  },
  {
    factor: "Mobile Accessibility",
    legacy: "Desktop web only or broken mobile layout",
    modern: "Offline-first React Native / Mobile PWA",
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
        Comparison: The Legacy Way vs. The Modern Digital Standard
      </h3>

      <div className="comparison-table-wrapper">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Business Operational Factor</th>
              <th style={{ color: "#f87171" }}>Legacy SMB (Spreadsheets & Voicemail)</th>
              <th style={{ color: "var(--accent-emerald)" }}>Engineered by acstena</th>
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
