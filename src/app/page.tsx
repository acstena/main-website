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
    title: "24/7 AI Phone Receptionists",
    tagline: "Answers calls instantly & books appointments",
    description:
      "Never lose another customer to voicemail. Our AI answers inbound phone calls, handles common inquiries, and books appointments directly into your calendar 24/7.",
    href: "/voice-ai",
    badge: "24/7 Phone Reception",
  },
  {
    icon: <LayoutDashboard size={24} color="#38bdf8" />,
    title: "Custom Business Portals & CRMs",
    tagline: "Replace messy spreadsheets with one simple cloud dashboard",
    description:
      "Outgrow manual spreadsheets and lost rate cards. We build secure, easy-to-use web dashboards where your team and clients manage orders, quotes, and leads in seconds.",
    href: "/services",
    badge: "Custom Web Software",
  },
  {
    icon: <Truck size={24} color="var(--accent-emerald)" />,
    title: "Field & Customer Mobile Apps",
    tagline: "Built for drivers, operations, and customer engagement",
    description:
      "Smooth iOS and Android mobile applications built for real-time delivery GPS tracking that works even offline, or rich wellness, audio, and community apps.",
    href: "/services",
    badge: "iOS & Android Apps",
  },
  {
    icon: <Sparkles size={24} color="var(--accent-amber)" />,
    title: "Website Design & Motion Graphics",
    tagline: "Modern designs that convert visitors into paying clients",
    description:
      "High-converting Figma website prototypes, reusable brand marketing kits on Canva, and liquid-smooth 2D custom motion animations made with Adobe Animate.",
    href: "/services",
    badge: "Design & 2D Motion",
  },
];

export default function Home() {
  return (
    <main style={{ minHeight: "100vh" }}>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Core Solutions Highlights */}
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
                AI Voice, Web Portals & Mobile Apps
              </span>
            </h2>
            <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
              Every solution we deliver is built for measurable business growth: zero missed customer calls, fast turnaround, and clear results that save your team hours every single day.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
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
                  <span>Learn more about this solution</span>
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
              <span>Explore All Digital Solutions & Services</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Voice AI Spotlight Banner */}
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
                  Featured Business Breakthrough
                </Badge>
                <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.7rem)", color: "#ffffff", marginBottom: "1.2rem", lineHeight: 1.2 }}>
                  24/7 AI Phone Receptionists:{" "}
                  <span style={{ color: "#38bdf8" }}>Never Miss A Customer Call Again</span>
                </h2>
                <p style={{ color: "#94a3b8", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "2rem", maxWidth: "750px" }}>
                  Our conversational AI voice agents answer concurrent customer calls, schedule appointments directly into your business calendar, answer common questions, and send instant confirmation texts to your clients.
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
                    <span>Test Live Interactive Voicebot</span>
                    <ArrowRight size={18} />
                  </Link>
                  <Link
                    href="/contact"
                    className="btn-secondary"
                    style={{ background: "rgba(255,255,255,0.06)", color: "#ffffff", borderColor: "rgba(255,255,255,0.15)" }}
                  >
                    <span>Schedule Free Strategy Call</span>
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

          <div className="responsive-2col-grid">
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
              <h3 style={{ fontSize: "1.3rem", marginBottom: "0.75rem" }}>OmniVoice 24/7 AI Receptionist & Booking</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                Natural-sounding AI phone receptionist that answers 200+ patient calls simultaneously and schedules appointments directly into the calendar with zero hold time.
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
                Unified cloud operations portal replacing 14 fragmented spreadsheets with instant automated quote generation and digital client signing.
              </p>
              <div style={{ display: "flex", gap: "1rem", borderTop: "1px solid var(--border-subtle)", paddingTop: "1rem" }}>
                <div>
                  <div style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--accent-cyan)" }}>45s</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Quote (was 45m)</div>
                </div>
                <div>
                  <div style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--accent-emerald)" }}>+310%</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Team Productivity</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Testimonials */}
      <Testimonials />

      {/* 6. Interactive Brand Identity Options */}
      <section style={{ padding: "3rem 0", position: "relative" }}>
        <div className="container">
          <LogoShowcase />
        </div>
      </section>

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
              Take Your Business Digital
            </Badge>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1.25rem", lineHeight: 1.2 }}>
              Ready To Stop Losing Phone Leads & Outgrow Messy Spreadsheets?
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
              Tell us about your business goals. We&apos;ll design your custom digital solution, calculate delivery timelines, and help you launch in weeks.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary" style={{ padding: "0.9rem 2rem", fontSize: "1rem" }}>
                <span>Book Free Discovery Call</span>
                <ArrowRight size={18} />
              </Link>
              <Link href="/planner" className="btn-secondary" style={{ padding: "0.9rem 2rem", fontSize: "1rem" }}>
                <span>Plan Your Solution Scope</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
