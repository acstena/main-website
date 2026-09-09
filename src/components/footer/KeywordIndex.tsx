import React from "react";
import { siteConfig } from "@/data/seoKeywords";

export default function KeywordIndex() {
  return (
    <div
      style={{
        padding: "clamp(1rem, 3vw, 1.75rem)",
        borderRadius: "16px",
        background: "rgba(255, 255, 255, 0.03)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        marginBottom: "2.5rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "0.5rem",
          marginBottom: "1rem",
        }}
      >
        <div
          style={{
            fontSize: "0.8rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "#f8fafc",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#38bdf8" }} />
          Digital Capabilities & Service Index
        </div>
        <div style={{ fontSize: "0.75rem", color: "#64748b" }}>
          Explore our complete range of digital solutions
        </div>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        {siteConfig.keywords.map((k) => (
          <span
            key={k}
            style={{
              padding: "0.3rem 0.75rem",
              borderRadius: "9999px",
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.09)",
              fontSize: "0.75rem",
              color: "#94a3b8",
              fontWeight: 500,
              transition: "all 0.2s ease",
            }}
          >
            {k}
          </span>
        ))}
      </div>
    </div>
  );
}
