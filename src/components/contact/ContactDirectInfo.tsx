import React from "react";
import { Zap, ShieldCheck, Mail, Phone, Sparkles } from "lucide-react";
import Badge from "@/components/ui/Badge";

export default function ContactDirectInfo() {
  return (
    <div style={{ maxWidth: "560px" }}>
      <Badge icon={<Sparkles size={14} />} style={{ marginBottom: "1rem" }}>
        Get In Touch
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
          Schedule A Free Consultation
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
        No sales jargon or pressure. Speak directly with our team to discuss your goals, explore what you need, and get a clear project timeline.
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
              Clear Proposal Within 24 Hours
            </div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "0.2rem" }}>
              Receive a simple, plain-English breakdown of what we will build, how it works, and an exact launch schedule within 1 business day.
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
              100% Full Ownership
            </div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "0.2rem" }}>
              You own 100% of everything we create: website code, design files, graphics, and accounts. No ongoing hostage fees or lock-ins.
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
