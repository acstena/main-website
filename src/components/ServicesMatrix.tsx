"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  servicesData,
  ServiceItem,
} from "@/data/servicesData";
import {
  Bot,
  Mic,
  LayoutDashboard,
  Truck,
  HeartPulse,
  PenTool,
  Sparkles,
  Film,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Code2,
} from "lucide-react";
import { initGSAP } from "@/lib/gsap";

const iconMap: Record<string, React.ReactNode> = {
  Mic: <Mic size={22} color="var(--accent-cyan)" />,
  Bot: <Bot size={22} color="var(--accent-cyan)" />,
  LayoutDashboard: <LayoutDashboard size={22} color="#38bdf8" />,
  Truck: <Truck size={22} color="var(--accent-emerald)" />,
  HeartPulse: <HeartPulse size={22} color="#ec4899" />,
  Figma: <PenTool size={22} color="#a855f7" />,
  Sparkles: <Sparkles size={22} color="var(--accent-amber)" />,
  Film: <Film size={22} color="#f43f5e" />,
  TrendingUp: <TrendingUp size={22} color="var(--accent-emerald)" />,
};

export default function ServicesMatrix() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const sectionRef = useRef<HTMLDivElement>(null);

  const filters = [
    { key: "all", label: "All Capabilities" },
    { key: "ai", label: "AI Voice & Chatbots" },
    { key: "web", label: "Web CRM & MVPs" },
    { key: "mobile", label: "Mobile Apps" },
    { key: "design", label: "Figma & Canva" },
    { key: "animation", label: "Adobe Animate" },
    { key: "seo", label: "Go Digital & SEO" },
  ];

  const filteredServices =
    activeFilter === "all"
      ? servicesData
      : servicesData.filter((item) => item.category === activeFilter);

  useEffect(() => {
    const { gsap, ScrollTrigger } = initGSAP();

    const ctx = gsap.context(() => {
      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        opacity: 0,
        y: 35,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [activeFilter]);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section-spacing"
      style={{ position: "relative" }}
    >
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "780px",
            margin: "0 auto 3.5rem",
          }}
        >
          <div className="badge-pill" style={{ marginBottom: "1rem" }}>
            <span>Comprehensive Solutions Portfolio</span>
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.8vw, 3rem)",
              marginBottom: "1.25rem",
              lineHeight: 1.15,
            }}
          >
            Engineered For Market Dominance:{" "}
            <span className="gradient-text-cyan-violet">
              Every Service, Zero Fluff
            </span>
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
            }}
          >
            We eliminate the gap between concept and high-yield production. Whether your business requires a real-time conversational voicebot, an enterprise CRM to retire manual spreadsheets, a logistics mobile app, or pixel-perfect Figma prototypes.
          </p>
        </div>

        {/* Filter Pills */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.6rem",
            marginBottom: "3rem",
          }}
        >
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              style={{
                padding: "0.55rem 1.25rem",
                borderRadius: "var(--radius-full)",
                fontSize: "0.85rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s ease",
                border:
                  activeFilter === f.key
                    ? "1px solid var(--accent-cyan)"
                    : "1px solid var(--border-subtle)",
                background:
                  activeFilter === f.key
                    ? "rgba(0, 240, 255, 0.15)"
                    : "rgba(255, 255, 255, 0.03)",
                color:
                  activeFilter === f.key
                    ? "var(--accent-cyan)"
                    : "var(--text-secondary)",
                boxShadow:
                  activeFilter === f.key
                    ? "0 0 15px rgba(0, 240, 255, 0.25)"
                    : "none",
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
            gap: "1.75rem",
          }}
        >
          {filteredServices.map((service) => (
            <article
              key={service.id}
              className="glass-card service-card"
              style={{
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <div>
                {/* Card Top Row */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "1.25rem",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid var(--border-subtle)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {iconMap[service.iconName] || <Code2 size={22} />}
                  </div>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      padding: "0.25rem 0.65rem",
                      borderRadius: "9999px",
                      background: "rgba(255, 255, 255, 0.06)",
                      color: "var(--text-secondary)",
                      border: "1px solid var(--border-subtle)",
                    }}
                  >
                    {service.badge}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    marginBottom: "0.5rem",
                    lineHeight: 1.3,
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--accent-cyan)",
                    fontWeight: 500,
                    marginBottom: "1rem",
                  }}
                >
                  {service.tagline}
                </p>

                {/* Technical Overview */}
                <p
                  style={{
                    fontSize: "0.92rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                    marginBottom: "1.5rem",
                  }}
                >
                  {service.description}
                </p>

                {/* Deliverables Checklist */}
                <div style={{ marginBottom: "1.5rem" }}>
                  <div
                    style={{
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      color: "var(--text-muted)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    Core Technical Deliverables
                  </div>
                  <ul
                    style={{
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                    }}
                  >
                    {service.deliverables.map((d, i) => (
                      <li
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "0.6rem",
                          fontSize: "0.85rem",
                          color: "var(--text-secondary)",
                        }}
                      >
                        <CheckCircle2
                          size={16}
                          color="var(--accent-emerald)"
                          style={{ flexShrink: 0, marginTop: "0.2rem" }}
                        />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer: Tech Stack & ROI Banner */}
              <div>
                {/* Tech Chips */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.4rem",
                    marginBottom: "1.25rem",
                  }}
                >
                  {service.techStack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontSize: "0.72rem",
                        padding: "0.2rem 0.55rem",
                        borderRadius: "6px",
                        background: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(255, 255, 255, 0.06)",
                        color: "var(--text-secondary)",
                        fontFamily: "monospace",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Business Impact Box */}
                <div
                  style={{
                    padding: "0.85rem 1rem",
                    borderRadius: "var(--radius-md)",
                    background: "rgba(16, 185, 129, 0.06)",
                    border: "1px solid rgba(16, 185, 129, 0.2)",
                    marginBottom: "1.25rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color: "var(--accent-emerald)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      marginBottom: "0.2rem",
                    }}
                  >
                    Target Business Impact
                  </div>
                  <div
                    style={{
                      fontSize: "0.83rem",
                      color: "var(--text-primary)",
                      fontWeight: 500,
                    }}
                  >
                    {service.businessImpact}
                  </div>
                </div>

                {/* Action Link */}
                <Link
                  href="#contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "0.88rem",
                    fontWeight: 600,
                    color: "var(--accent-cyan)",
                    textDecoration: "none",
                  }}
                >
                  <span>Build this solution</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
