import React from "react";
import Image from "next/image";
import { Bot, TrendingUp, Cpu } from "lucide-react";

export default function HeroVisual() {
  return (
    <div className="hero-visual-wrapper">
      {/* Main Image Frame */}
      <div className="hero-visual-frame">
        <Image
          src="/images/hero_digital_matrix.jpg"
          alt="acstena 3D Engineering Matrix Core"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 600px"
          style={{ objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(5,7,12,0.1) 0%, rgba(5,7,12,0.6) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "1rem",
            left: "1rem",
            right: "1rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.4rem 0.8rem",
              borderRadius: "9999px",
              background: "rgba(10, 14, 26, 0.8)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              fontSize: "0.75rem",
              color: "var(--text-primary)",
            }}
          >
            <Cpu size={14} color="var(--accent-cyan)" />
            <span>Real-Time Production Telemetry Active</span>
          </div>
        </div>
      </div>

      {/* Floating Badge 1: AI Voice Agent */}
      <div
        className="hero-stat-card hero-floating-badge-1 glass-card"
        style={{
          position: "absolute",
          top: "-1.5rem",
          right: "-1rem",
          padding: "0.85rem 1.25rem",
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          borderRadius: "var(--radius-md)",
          border: "1px solid rgba(0, 240, 255, 0.3)",
          background: "rgba(10, 14, 26, 0.92)",
          boxShadow: "0 15px 35px rgba(15, 23, 42, 0.25), 0 0 20px rgba(0, 240, 255, 0.15)",
        }}
      >
        <div
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "8px",
            background: "rgba(0, 240, 255, 0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Bot size={20} color="var(--accent-cyan)" />
        </div>
        <div>
          <div style={{ fontSize: "0.75rem", color: "#94a3b8", fontWeight: 500 }}>
            Inbound Voice AI
          </div>
          <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#f8fafc" }}>
            100% Calls Answered
          </div>
        </div>
      </div>

      {/* Floating Badge 2: Google Search Ranking */}
      <div
        className="hero-stat-card hero-floating-badge-2 glass-card"
        style={{
          position: "absolute",
          bottom: "-2rem",
          left: "-1.5rem",
          padding: "0.85rem 1.25rem",
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          borderRadius: "var(--radius-md)",
          border: "1px solid rgba(16, 185, 129, 0.3)",
          background: "rgba(10, 14, 26, 0.92)",
          boxShadow: "0 15px 35px rgba(15, 23, 42, 0.25), 0 0 20px rgba(16, 185, 129, 0.15)",
        }}
      >
        <div
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "8px",
            background: "rgba(16, 185, 129, 0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TrendingUp size={20} color="var(--accent-emerald)" />
        </div>
        <div>
          <div style={{ fontSize: "0.75rem", color: "#94a3b8", fontWeight: 500 }}>
            Search Optimization
          </div>
          <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#f8fafc" }}>
            Rank #1 Commercial SERP
          </div>
        </div>
      </div>
    </div>
  );
}
