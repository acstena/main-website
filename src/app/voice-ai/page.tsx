import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bot, Mic, ShieldCheck, Zap, PhoneCall } from "lucide-react";
import Badge from "@/components/ui/Badge";
import VoicebotSimulator from "@/components/simulator/VoicebotSimulator";

export const metadata: Metadata = {
  title: "Autonomous AI Voicebots & Telephony Engineering",
  description:
    "Production-grade conversational AI voicebots built on WebRTC, Twilio SIP, and OpenAI Realtime. Zero-latency telephone reception, 100% call answering, and live CRM sync.",
  alternates: {
    canonical: "https://acstena.com/voice-ai",
  },
};

const telephonySpecs = [
  {
    icon: <Zap size={20} color="var(--accent-cyan)" />,
    title: "Sub-800ms Turn Latency",
    desc: "Optimized WebSockets streaming delivers natural human-paced conversational flow without awkward pauses.",
  },
  {
    icon: <PhoneCall size={20} color="var(--accent-emerald)" />,
    title: "100% Call Concurrency",
    desc: "Simultaneously handle 1 or 500 concurrent callers with zero busy tones, dropped calls, or staff fatigue.",
  },
  {
    icon: <ShieldCheck size={20} color="var(--accent-violet)" />,
    title: "Live Database Sync",
    desc: "Direct bi-directional integration with HubSpot, Salesforce, Postgres, or custom APIs to record caller data in real time.",
  },
];

export default function VoiceAiPage() {
  return (
    <main style={{ paddingTop: "7.5rem", paddingBottom: "5rem" }}>
      <div className="container">
        {/* Page Header */}
        <div style={{ textAlign: "center", maxWidth: "860px", margin: "0 auto 3.5rem" }}>
          <Badge icon={<Mic size={14} />} style={{ marginBottom: "1rem" }}>
            Conversational Telephony Specialization
          </Badge>
          <h1
            style={{
              fontSize: "clamp(2.3rem, 4.5vw, 3.6rem)",
              marginBottom: "1.25rem",
              lineHeight: 1.15,
            }}
          >
            Autonomous AI Voice Receptionists:{" "}
            <span className="gradient-text-cyan-violet">
              Zero Missed Calls, 24/7/365
            </span>
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
            }}
          >
            Never lose another customer to an unanswered phone line. Our voice agents answer in under 2 seconds, verify customer intent, schedule appointments, and dispatch live SMS confirmations automatically.
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

        {/* Architecture & Telephony Integration Overview */}
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
                Production Infrastructure Architecture
              </div>
              <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", color: "#ffffff", marginBottom: "1rem" }}>
                Connects Directly To Your Existing Phone Numbers & PBX
              </h2>
              <p style={{ color: "#94a3b8", fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
                Whether you use Twilio, Vonage, RingCentral, or traditional SIP trunks, our voice engine drops into your existing telecom setup with zero downtime. Calls can transfer seamlessly to live human staff with full transcript handoff whenever needed.
              </p>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link
                  href="/contact"
                  className="btn-primary"
                  style={{ background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)", border: "none" }}
                >
                  <span>Deploy Voicebot For Your Business</span>
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/planner"
                  className="btn-secondary"
                  style={{ background: "rgba(255,255,255,0.06)", color: "#ffffff", borderColor: "rgba(255,255,255,0.15)" }}
                >
                  <span>Estimate Voicebot Sprint Timeline</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
