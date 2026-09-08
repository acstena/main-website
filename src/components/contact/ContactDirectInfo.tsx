import React from "react";
import { Zap, ShieldCheck, Mail, Phone, Sparkles } from "lucide-react";
import Badge from "@/components/ui/Badge";

export default function ContactDirectInfo() {
  return (
    <div style={{ maxWidth: "560px" }}>
      <Badge icon={<Sparkles size={14} />} style={{ marginBottom: "1rem" }}>
        Direct Engineering Consultation
      </Badge>

      <h2
        style={{
          fontSize: "clamp(2rem, 3.8vw, 3rem)",
          marginBottom: "1.25rem",
          lineHeight: 1.15,
        }}
      >
        Let&apos;s Build Your Solution:{" "}
        <span className="gradient-text-cyan-violet">
          Book A Technical Discovery Sprint
        </span>
      </h2>

      <p
        style={{
          fontSize: "1.05rem",
          color: "var(--text-secondary)",
          lineHeight: 1.7,
          marginBottom: "2.5rem",
        }}
      >
        No high-pressure sales reps. You will speak directly with our senior full-stack and AI systems architects to map your technical requirements, architecture, and timeline.
      </p>

      {/* Guarantees */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "3rem" }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: "0.85rem" }}>
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "8px",
              background: "rgba(0, 240, 255, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Zap size={18} color="var(--accent-cyan)" />
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: "0.95rem" }}>
              24-Hour Scoping Proposal
            </div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "0.2rem" }}>
              Receive a comprehensive technical specification, architecture diagram, and fixed milestone budget within 1 business day.
            </div>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "flex-start", gap: "0.85rem" }}>
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "8px",
              background: "rgba(16, 185, 129, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <ShieldCheck size={18} color="var(--accent-emerald)" />
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: "0.95rem" }}>
              100% Intellectual Property Ownership
            </div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "0.2rem" }}>
              All source code, Figma design files, Canva assets, and database schemas belong entirely to you with zero vendor lock-in.
            </div>
          </div>
        </div>
      </div>

      {/* Direct Contact Channels */}
      <div
        style={{
          padding: "1.5rem",
          borderRadius: "var(--radius-md)",
          background: "rgba(255, 255, 255, 0.02)",
          border: "1px solid var(--border-subtle)",
        }}
      >
        <div
          style={{
            fontSize: "0.78rem",
            fontWeight: 700,
            textTransform: "uppercase",
            color: "var(--text-muted)",
            marginBottom: "0.75rem",
          }}
        >
          Direct Contact Channels
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.9rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: "var(--text-secondary)" }}>
            <Mail size={16} color="var(--accent-cyan)" />
            <span>architect@acstena.com</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: "var(--text-secondary)" }}>
            <Phone size={16} color="var(--accent-emerald)" />
            <span>+1 (800) 555-ACSTENA (Direct or Voicebot Test)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
