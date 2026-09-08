"use client";

import React, { useState } from "react";
import Logo, { LogoOption } from "@/components/ui/Logo";
import { Check, Sparkles, Palette } from "lucide-react";

interface LogoVariantInfo {
  id: LogoOption;
  name: string;
  tagline: string;
  concept: string;
}

const logoVariants: LogoVariantInfo[] = [
  {
    id: "nexus",
    name: "Concept 1: The Nexus 'A'",
    tagline: "Hexagonal Isometric Convergence",
    concept:
      "A modern dimensional 'A' with intertwining neon cyan & electric violet circuitry. Represents unified AI, Web, and Mobile systems.",
  },
  {
    id: "orbit",
    name: "Concept 2: The Quantum Orbit",
    tagline: "Dual Elliptical AI Particle Ring",
    concept:
      "Intersecting planetary orbits centered around a glowing hyper-cyan core. Symbolizes continuous digital transformation & voice AI.",
  },
  {
    id: "prism",
    name: "Concept 3: The Refractive Prism",
    tagline: "Faceted High-Precision Diamond",
    concept:
      "A sharp crystalline geometric prism that refracts light into multi-spectrum vibrant energy. Represents Figma UI/UX to code precision.",
  },
  {
    id: "minimal",
    name: "Concept 4: The Kinetic Monogram",
    tagline: "Ultra-Clean Architectural Minimalist",
    concept:
      "A bold, structural vector 'A' with a single luminous beacon dot. Silicon Valley luxury tech agency aesthetic.",
  },
];

export default function LogoShowcase() {
  const [selectedLogo, setSelectedLogo] = useState<LogoOption>("nexus");

  return (
    <div
      className="glass-card"
      style={{
        padding: "1.75rem 2rem",
        marginBottom: "2.5rem",
        background: "rgba(255, 255, 255, 0.9)",
        border: "1px solid rgba(99, 102, 241, 0.25)",
        boxShadow: "0 10px 30px rgba(99, 102, 241, 0.08)",
        borderRadius: "var(--radius-lg)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
          marginBottom: "1.5rem",
          paddingBottom: "1rem",
          borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "8px",
              background: "linear-gradient(135deg, #6366f1, #06b6d4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Palette size={16} color="#ffffff" />
          </div>
          <div>
            <div style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-primary)" }}>
              Brand Identity: Select Logo Option for <span style={{ color: "#4f46e5" }}>acstena</span>
            </div>
            <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
              Click any option below to preview how it looks live across the platform
            </div>
          </div>
        </div>

        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            padding: "0.3rem 0.75rem",
            borderRadius: "9999px",
            background: "rgba(99, 102, 241, 0.1)",
            fontSize: "0.75rem",
            fontWeight: 600,
            color: "#4f46e5",
          }}
        >
          <Sparkles size={13} />
          <span>Live Logo Switcher</span>
        </div>
      </div>

      {/* Grid of 4 Logo Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1rem",
        }}
      >
        {logoVariants.map((variant) => {
          const isSelected = selectedLogo === variant.id;
          return (
            <div
              key={variant.id}
              onClick={() => setSelectedLogo(variant.id)}
              style={{
                padding: "1.25rem",
                borderRadius: "var(--radius-md)",
                border: isSelected
                  ? "2px solid #4f46e5"
                  : "1px solid rgba(0, 0, 0, 0.08)",
                background: isSelected
                  ? "linear-gradient(135deg, rgba(99, 102, 241, 0.06), rgba(6, 182, 212, 0.06))"
                  : "#ffffff",
                boxShadow: isSelected
                  ? "0 10px 25px rgba(99, 102, 241, 0.15)"
                  : "0 2px 8px rgba(0,0,0,0.02)",
                cursor: "pointer",
                transition: "all 0.2s ease",
                position: "relative",
              }}
            >
              {isSelected && (
                <div
                  style={{
                    position: "absolute",
                    top: "0.75rem",
                    right: "0.75rem",
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    background: "#4f46e5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Check size={12} color="#ffffff" strokeWidth={3} />
                </div>
              )}

              {/* Logo Preview in Card */}
              <div style={{ marginBottom: "1rem" }}>
                <Logo variant={variant.id} size={42} showText={true} />
              </div>

              <div
                style={{
                  fontSize: "0.92rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: "0.2rem",
                }}
              >
                {variant.name}
              </div>
              <div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "#4f46e5",
                  marginBottom: "0.5rem",
                }}
              >
                {variant.tagline}
              </div>
              <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                {variant.concept}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
