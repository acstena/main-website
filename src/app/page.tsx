import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  LayoutDashboard,
  Truck,
  Sparkles,
  PhoneCall,
  CheckCircle2,
  TrendingUp,
  Cpu,
  Trophy,
} from "lucide-react";
import Hero from "@/components/hero/Hero";
import LogoShowcase from "@/components/ui/LogoShowcase";
import Badge from "@/components/ui/Badge";
import Testimonials from "@/components/testimonials/Testimonials";

const corePillars = [
  {
    icon: <Bot size={24} color="var(--accent-cyan)" />,
    title: "Conversational AI Voicebots",
    tagline: "Sub-800ms automated phone reception & booking",
    description:
      "Replace lost phone leads with 24/7 AI agents that answer callers, verify details, book calendar slots, and sync directly with your CRM.",
    href: "/voice-ai",
    badge: "Voice AI & WebRTC",
  },
  {
    icon: <LayoutDashboard size={24} color="#38bdf8" />,
    title: "Web CRM & Rapid Cloud MVPs",
    tagline: "From manual spreadsheets to unified scalable portals",
    description:
      "Turn fragmented operational spreadsheets into secure, high-velocity Next.js web applications and client portals in 2 to 4 weeks.",
    href: "/services",
    badge: "Next.js 16 & Serverless",
  },
  {
    icon: <Truck size={24} color="var(--accent-emerald)" />,
    title: "Logistics & Wellness Mobile Apps",
    tagline: "Offline-first telematics & audio soundscapes",
    description:
      "Cross-platform React Native and Flutter mobile applications built for real-time fleet GPS tracking or spatial audio wellness routines.",
    href: "/services",
    badge: "iOS & Android",
  },
  {
    icon: <Sparkles size={24} color="var(--accent-amber)" />,
    title: "Figma UI/UX & Adobe Animate Motion",
    tagline: "Atomic design tokens & 60fps vector animation",
    description:
      "Conversion-optimized Figma design systems, reusable Canva marketing collateral, and liquid-smooth Adobe Animate web motion graphics.",
    href: "/services",
    badge: "Design Systems & 2D Motion",
  },
];

export default function Home() {
  return (
    <main style={{ minHeight: "100vh" }}>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Interactive Logo Showcase */}
      <div className="container" style={{ position: "relative", zIndex: 10, marginBottom: "2rem" }}>
        <LogoShowcase />
      </div>

      {/* 3. Core Solutions Highlights */}
      <section className="section-spacing" style={{ position: "relative" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 3.5rem" }}>
            <Badge style={{ marginBottom: "1rem" }}>Flagship Digital Solutions</Badge>
            <h2
              style={{
                fontSize: "clamp(2rem, 3.8vw, 3rem)",
                marginBottom: "1.25rem",
                lineHeight: 1.15,
              }}
            >
              Engineered To Scale:{" "}
              <span className="gradient-text-cyan-violet">
                AI Voice, Full-Stack Web & Mobile
              </span>
            </h2>
            <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
              Every solution we deploy is built for measurable operational velocity: zero missed phone leads, rapid time-to-market, and dominant organic search rankings.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.75rem",
              marginBottom: "3rem",
            }}
          >
            {corePillars.map((pillar) => (
              <div
                key={pillar.title}
                className="glass-card service-card"
                style={{
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  borderRadius: "var(--radius-lg)",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "12px",
                        background: "rgba(15, 23, 42, 0.04)",
                        border: "1px solid var(--border-subtle)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {pillar.icon}
                    </div>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        padding: "0.25rem 0.65rem",
                        borderRadius: "9999px",
                        background: "rgba(15, 23, 42, 0.04)",
                        color: "var(--text-secondary)",
                        border: "1px solid var(--border-subtle)",
                      }}
                    >
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.4rem" }}>
                    {pillar.title}
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--accent-cyan)", fontWeight: 500, marginBottom: "1rem" }}>
                    {pillar.tagline}
                  </p>
                  <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                    {pillar.description}
                  </p>
                </div>

                <Link
                  href={pillar.href}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "0.88rem",
                    fontWeight: 600,
                    color: "var(--accent-primary)",
                    textDecoration: "none",
                  }}
                >
                  <span>Learn more about this capability</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            ))}
          </div>

          {/* Direct Link to Full Catalog */}
          <div style={{ textAlign: "center" }}>
            <Link
              href="/services"
              className="btn-primary"
              style={{ padding: "0.9rem 2.2rem", fontSize: "1rem" }}
            >
              <span>Explore All 8 Digital Solutions & Deliverables</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Voice AI Spotlight Banner */}
      <section
        style={{
          padding: "5rem 0",
          position: "relative",
          background: "linear-gradient(180deg, rgba(248,250,252,0) 0%, rgba(241,245,249,0.8) 50%, rgba(248,250,252,0) 100%)",
        }}
      >
        <div className="container">
          <div
            className="obsidian-card"
            style={{
              padding: "clamp(2rem, 4vw, 3.75rem)",
              background: "linear-gradient(135deg, #090d16 0%, #0f172a 100%)",
              border: "1px solid rgba(0, 240, 255, 0.25)",
              boxShadow: "0 25px 65px rgba(15, 23, 42, 0.25)",
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
                <Badge icon={<PhoneCall size={14} />} style={{ marginBottom: "1rem" }}>
                  Featured Engineering Breakthrough
                </Badge>
                <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.7rem)", color: "#ffffff", marginBottom: "1.2rem", lineHeight: 1.2 }}>
                  Sub-800ms Autonomous Voice Receptionists:{" "}
                  <span style={{ color: "#38bdf8" }}>Never Miss A Customer Call Again</span>
                </h2>
                <p style={{ color: "#94a3b8", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "2rem", maxWidth: "750px" }}>
                  Our conversational AI voice agents answer concurrent inbound phone calls, schedule appointments directly into EHR/CRM systems, verify insurance or caller parameters, and escalate high-stakes inquiries to humans with live transcript handoff.
                </p>

                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  <Link
                    href="/voice-ai"
                    className="btn-primary"
                    style={{
                      background: "linear-gradient(135deg, #10b981 0%, #00f0ff 100%)",
                      color: "#05070c",
                      border: "none",
                      fontWeight: 700,
                    }}
                  >
                    <span>Test Interactive Live Telephony Simulator</span>
                    <ArrowRight size={18} />
                  </Link>
                  <Link
                    href="/planner"
                    className="btn-secondary"
                    style={{ background: "rgba(255,255,255,0.06)", color: "#ffffff", borderColor: "rgba(255,255,255,0.15)" }}
                  >
                    <span>Plan Voicebot Sprint</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Featured Proven Deployments Teaser */}
      <section className="section-spacing">
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1.5rem", marginBottom: "3rem" }}>
            <div>
              <Badge icon={<Trophy size={14} />} style={{ marginBottom: "0.75rem" }}>
                Commercial Engineering In Action
              </Badge>
              <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", lineHeight: 1.2 }}>
                Proven Case Studies & Real Results
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="btn-secondary"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
            >
              <span>View All 5 Case Studies</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "1.75rem",
            }}
          >
            <div
              className="glass-card"
              style={{
                padding: "2rem",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--accent-cyan)", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                Healthcare Clinic Network
              </div>
              <h3 style={{ fontSize: "1.3rem", marginBottom: "0.75rem" }}>OmniVoice AI Telephony & Receptionist</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                Zero-latency conversational voice agent answering 200+ concurrent inbound patient calls with direct EHR appointment scheduling.
              </p>
              <div style={{ display: "flex", gap: "1rem", borderTop: "1px solid var(--border-subtle)", paddingTop: "1rem" }}>
                <div>
                  <div style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--accent-emerald)" }}>0%</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Missed Calls</div>
                </div>
                <div>
                  <div style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--accent-cyan)" }}>+1,420</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Monthly Bookings</div>
                </div>
              </div>
            </div>

            <div
              className="glass-card"
              style={{
                padding: "2rem",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--accent-emerald)", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                Freight & Logistics Brokerage
              </div>
              <h3 style={{ fontSize: "1.3rem", marginBottom: "0.75rem" }}>ApexFlow Enterprise CRM & Operational Hub</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                Unified cloud dispatch portal replacing 14 fragmented Google Sheets with instant algorithmic quoting and automated DocuSign webhooks.
              </p>
              <div style={{ display: "flex", gap: "1rem", borderTop: "1px solid var(--border-subtle)", paddingTop: "1rem" }}>
                <div>
                  <div style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--accent-cyan)" }}>45s</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Quote (was 45m)</div>
                </div>
                <div>
                  <div style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--accent-emerald)" }}>+310%</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Pipeline Velocity</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <Testimonials />

      {/* 7. Final High-Conversion Banner */}
      <section className="section-spacing" style={{ paddingTop: 0 }}>
        <div className="container">
          <div
            className="glass-card"
            style={{
              padding: "clamp(2.5rem, 5vw, 4rem)",
              textAlign: "center",
              background: "linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(6, 182, 212, 0.08) 100%)",
              border: "1px solid rgba(99, 102, 241, 0.25)",
              borderRadius: "var(--radius-xl)",
            }}
          >
            <Badge icon={<Cpu size={14} />} style={{ marginBottom: "1rem" }}>
              Accelerate Your Digital Transformation
            </Badge>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1.25rem", lineHeight: 1.2 }}>
              Ready To Retire Fragile Spreadsheets & Lost Phone Leads?
            </h2>
            <p
              style={{
                fontSize: "1.1rem",
                color: "var(--text-secondary)",
                maxWidth: "680px",
                margin: "0 auto 2.25rem",
                lineHeight: 1.7,
              }}
            >
              Plan your solution architecture, estimate sprint windows, or schedule a direct consultation with our lead full-stack and AI systems architects.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary" style={{ padding: "0.9rem 2rem", fontSize: "1rem" }}>
                <span>Book Technical Discovery</span>
                <ArrowRight size={18} />
              </Link>
              <Link href="/planner" className="btn-secondary" style={{ padding: "0.9rem 2rem", fontSize: "1rem" }}>
                <span>Launch Interactive Sprint Planner</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
