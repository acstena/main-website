import React from "react";
import { siteConfig } from "@/data/seoKeywords";

export default function KeywordIndex() {
  return (
    <div
      style={{
        padding: "1.5rem",
        borderRadius: "var(--radius-md)",
        background: "rgba(255, 255, 255, 0.02)",
        border: "1px solid var(--border-subtle)",
        marginBottom: "2.5rem",
      }}
    >
      <div
        style={{
          fontSize: "0.75rem",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          color: "var(--text-muted)",
          marginBottom: "0.75rem",
        }}
      >
        Target Commercial Keywords & Index
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", fontSize: "0.75rem", color: "var(--text-muted)" }}>
        {siteConfig.keywords.map((k) => (
          <span
            key={k}
            style={{
              padding: "0.2rem 0.6rem",
              borderRadius: "4px",
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
            }}
          >
            {k}
          </span>
        ))}
      </div>
    </div>
  );
}
