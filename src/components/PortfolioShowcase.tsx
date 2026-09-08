"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  portfolioProjects,
  ProjectCaseStudy,
} from "@/data/portfolioData";
import {
  ArrowRight,
  TrendingUp,
  ExternalLink,
  Layers,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { initGSAP } from "@/lib/gsap";

export default function PortfolioShowcase() {
  const [activeProject, setActiveProject] = useState<ProjectCaseStudy>(
    portfolioProjects[0]
  );
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap, ScrollTrigger } = initGSAP();

    const ctx = gsap.context(() => {
      gsap.from(".portfolio-header", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="case-studies"
      ref={sectionRef}
      className="section-spacing"
      style={{ position: "relative" }}
    >
      <div className="container">
        {/* Section Header */}
        <div
          className="portfolio-header"
          style={{
            textAlign: "center",
            maxWidth: "800px",
            margin: "0 auto 3.5rem",
          }}
        >
          <div className="badge-pill" style={{ marginBottom: "1rem" }}>
            <Sparkles size={14} />
            <span>Proven Commercial Deployments</span>
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.8vw, 3rem)",
              marginBottom: "1.25rem",
              lineHeight: 1.15,
            }}
          >
            Engineering In Action:{" "}
            <span className="gradient-text-cyan-violet">
              Measurable Business ROI
            </span>
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
            }}
          >
            Every project we deploy is built for tangible commercial outcomes: zero missed leads, extreme velocity, high user retention, and organic search superiority.
          </p>
        </div>

        {/* Project Selector Nav */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "0.6rem",
            marginBottom: "3rem",
          }}
        >
          {portfolioProjects.map((p) => (
            <button
              key={p.id}
              onClick={() => setActiveProject(p)}
              style={{
                padding: "0.65rem 1.25rem",
                borderRadius: "var(--radius-full)",
                fontSize: "0.85rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s ease",
                border:
                  activeProject.id === p.id
                    ? "1px solid var(--accent-cyan)"
                    : "1px solid var(--border-subtle)",
                background:
                  activeProject.id === p.id
                    ? "rgba(0, 240, 255, 0.15)"
                    : "rgba(255, 255, 255, 0.03)",
                color:
                  activeProject.id === p.id
                    ? "var(--accent-cyan)"
                    : "var(--text-secondary)",
                boxShadow:
                  activeProject.id === p.id
                    ? "0 0 20px rgba(0, 240, 255, 0.25)"
                    : "none",
              }}
            >
              {p.title.split(" ")[0]} ({p.category.split("&")[0].trim()})
            </button>
          ))}
        </div>

        {/* Active Project Hero Card */}
        <div
          className="glass-card portfolio-detail-grid"
          style={{
            padding: "clamp(1.5rem, 3vw, 3rem)",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2.5rem",
            alignItems: "center",
            border: "1px solid rgba(0, 240, 255, 0.25)",
            boxShadow:
              "0 25px 60px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 240, 255, 0.1)",
          }}
        >
          {/* Left Column: Metrics & Architecture Details */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1rem",
              }}
            >
              <span className="badge-pill">{activeProject.category}</span>
              <span
                style={{
                  fontSize: "0.8rem",
                  color: "var(--text-muted)",
                }}
              >
                {activeProject.clientIndustry}
              </span>
            </div>

            <h3
              style={{
                fontSize: "clamp(1.7rem, 2.5vw, 2.3rem)",
                lineHeight: 1.2,
                marginBottom: "1rem",
              }}
            >
              {activeProject.title}
            </h3>

            <p
              style={{
                fontSize: "1rem",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                marginBottom: "1.75rem",
              }}
            >
              {activeProject.summary}
            </p>

            {/* Challenge & Solution Cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "1rem",
                marginBottom: "2rem",
              }}
            >
              <div
                style={{
                  padding: "1rem 1.25rem",
                  borderRadius: "var(--radius-md)",
                  background: "rgba(239, 68, 68, 0.05)",
                  border: "1px solid rgba(239, 68, 68, 0.2)",
                }}
              >
                <div
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "#f87171",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    marginBottom: "0.3rem",
                  }}
                >
                  The Operational Drag (Before)
                </div>
                <div
                  style={{
                    fontSize: "0.88rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  {activeProject.challenge}
                </div>
              </div>

              <div
                style={{
                  padding: "1rem 1.25rem",
                  borderRadius: "var(--radius-md)",
                  background: "rgba(16, 185, 129, 0.05)",
                  border: "1px solid rgba(16, 185, 129, 0.2)",
                }}
              >
                <div
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "var(--accent-emerald)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    marginBottom: "0.3rem",
                  }}
                >
                  The Digital Architecture (Delivered)
                </div>
                <div
                  style={{
                    fontSize: "0.88rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  {activeProject.solution}
                </div>
              </div>
            </div>

            {/* Quantifiable Stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "1rem",
                marginBottom: "2rem",
              }}
            >
              {activeProject.stats.map((st, i) => (
                <div
                  key={i}
                  style={{
                    padding: "0.85rem 1rem",
                    borderRadius: "var(--radius-md)",
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid var(--border-subtle)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.5rem",
                      fontWeight: 800,
                      color:
                        i === 0
                          ? "var(--accent-cyan)"
                          : i === 1
                          ? "var(--accent-emerald)"
                          : i === 2
                          ? "var(--accent-violet)"
                          : "var(--accent-amber)",
                    }}
                  >
                    {st.value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.78rem",
                      color: "var(--text-muted)",
                      marginTop: "0.15rem",
                    }}
                  >
                    {st.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Stack Tags */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.45rem",
                marginBottom: "2rem",
              }}
            >
              {activeProject.tags.map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: "0.75rem",
                    padding: "0.25rem 0.65rem",
                    borderRadius: "6px",
                    background: "rgba(255, 255, 255, 0.05)",
                    color: "var(--text-secondary)",
                    fontFamily: "monospace",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            <Link href="#contact" className="btn-primary">
              <span>Commission Similar Architecture</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Right Column: Visual Mockup */}
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "4 / 3",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.8)",
            }}
          >
            <Image
              src={activeProject.image}
              alt={activeProject.title}
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
              style={{ objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(5,7,12,0.05) 0%, rgba(5,7,12,0.5) 100%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "1rem",
                left: "1rem",
                padding: "0.4rem 0.85rem",
                borderRadius: "9999px",
                background: "rgba(10, 14, 26, 0.85)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                fontSize: "0.75rem",
                color: "var(--text-primary)",
                fontWeight: 600,
              }}
            >
              Verified Production Snapshot
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 1024px) {
          .portfolio-detail-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
