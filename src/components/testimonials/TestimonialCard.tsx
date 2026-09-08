import React from "react";
import { Star, CheckCircle2 } from "lucide-react";
import { Testimonial } from "@/data/testimonialsData";

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div
      className="glass-card"
      style={{
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
      }}
    >
      <div>
        {/* 5-star rating */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.25rem", marginBottom: "1.25rem" }}>
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
          ))}
          <span style={{ marginLeft: "0.5rem", fontSize: "0.75rem", color: "var(--accent-cyan)", fontWeight: 600 }}>
            5.0 Verified Review
          </span>
        </div>

        <p
          style={{
            fontSize: "0.95rem",
            color: "var(--text-primary)",
            lineHeight: 1.7,
            marginBottom: "1.5rem",
            fontStyle: "italic",
          }}
        >
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>

      <div>
        {/* Metric Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            padding: "0.35rem 0.75rem",
            borderRadius: "6px",
            background: "rgba(16, 185, 129, 0.08)",
            border: "1px solid rgba(16, 185, 129, 0.25)",
            fontSize: "0.78rem",
            fontWeight: 700,
            color: "var(--accent-emerald)",
            marginBottom: "1.25rem",
          }}
        >
          <CheckCircle2 size={14} />
          <span>{testimonial.metric}</span>
        </div>

        {/* Author Info */}
        <div style={{ borderTop: "1px solid var(--border-subtle)", paddingTop: "1rem" }}>
          <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-primary)" }}>
            {testimonial.name}
          </div>
          <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
            {testimonial.role} • {testimonial.company}
          </div>
        </div>
      </div>
    </div>
  );
}
