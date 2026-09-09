import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bot, Mic, ShieldCheck, Zap, PhoneCall } from "lucide-react";
import Badge from "@/components/ui/Badge";
import VoicebotSimulator from "@/components/simulator/VoicebotSimulator";

export const metadata: Metadata = {
  title: "24/7 AI Phone Receptionist & Automated Scheduling",
  description:
    "Never miss a customer call. AI phone receptionists that answer instantly, speak in a natural human voice, schedule appointments, and connect seamlessly to your existing phone line.",
  alternates: {
    canonical: "https://acstena.com/voice-ai",
  },
};

const telephonySpecs = [
  {
    icon: <Zap size={20} color="var(--accent-cyan)" />,
    title: "Instant Natural Responses (< 1s)",
    desc: "Speaks naturally with human pacing and rhythm, eliminating the awkward delays and robotic tone common with old phone trees.",
  },
  {
    icon: <PhoneCall size={20} color="var(--accent-emerald)" />,
    title: "Answers Unlimited Calls Simultaneously",
    desc: "Whether 1 customer calls or 50 call at the exact same moment, every caller is answered immediately. Zero busy tones, zero hold time.",
  },
  {
    icon: <ShieldCheck size={20} color="var(--accent-violet)" />,
    title: "Auto-Books Into Your Calendar",
    desc: "Captures caller names, phone numbers, and requested dates, automatically scheduling appointments and texting confirmation receipts.",
  },
];

export default function VoiceAiPage() {
  return (
    <main style={{ paddingTop: "7.5rem", paddingBottom: "5rem" }}>
      <div className="container">
        {/* Page Header */}
        <div style={{ textAlign: "center", maxWidth: "860px", margin: "0 auto 3.5rem" }}>
          <Badge icon={<Mic size={14} />} style={{ marginBottom: "1rem" }}>
            24/7 Phone Receptionist
          </Badge>
          <h1
            style={{
              fontSize: "clamp(2.3rem, 4.5vw, 3.6rem)",
              marginBottom: "1.25rem",
              lineHeight: 1.15,
            }}
          >
            24/7 AI Phone Receptionists:{" "}
            <span className="gradient-text-cyan-violet">
              Never Miss A Customer Call Again
            </span>
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
            }}
          >
            Never lose another customer or job opportunity to voicemail. Our AI voice assistants answer in under 2 seconds, answer common questions, book appointments into your schedule, and send instant confirmation texts.
          </p>
        </div>

        {/* Telephony Performance Specs Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
            marginBottom: "4.5rem",
          }}
        >
          {telephonySpecs.map((spec) => (
            <div
              key={spec.title}
              className="glass-card"
              style={{
                padding: "1.75rem",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <div style={{ marginBottom: "1rem" }}>{spec.icon}</div>
              <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>{spec.title}</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                {spec.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Live Interactive Voicebot Telephony Simulator */}
        <VoicebotSimulator />

        {/* Phone Integration Overview */}
        <div
          className="obsidian-card"
          style={{
            marginTop: "4.5rem",
            padding: "clamp(2rem, 4vw, 3.5rem)",
            background: "linear-gradient(135deg, #090d16 0%, #0f172a 100%)",
            border: "1px solid rgba(0, 240, 255, 0.2)",
            boxShadow: "0 25px 60px rgba(0, 0, 0, 0.4)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "2.5rem",
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "var(--accent-cyan)",
                  letterSpacing: "0.05em",
                  marginBottom: "0.75rem",
                }}
              >
                Seamless Phone Setup
              </div>
              <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", color: "#ffffff", marginBottom: "1rem" }}>
                Works Directly With Your Existing Business Phone Number
              </h2>
              <p style={{ color: "#94a3b8", fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
                Keep your current phone number. Our system connects cleanly to your existing phone line with zero downtime. Whenever a customer needs personal attention or has an emergency, calls transfer directly to your mobile phone with complete call notes.
              </p>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link
                  href="/contact"
                  className="btn-primary"
                  style={{ background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)", border: "none" }}
                >
                  <span>Set Up AI Receptionist For Your Business</span>
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/planner"
                  className="btn-secondary"
                  style={{ background: "rgba(255,255,255,0.06)", color: "#ffffff", borderColor: "rgba(255,255,255,0.15)" }}
                >
                  <span>Explore Project Planner</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
