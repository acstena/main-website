"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Zap,
  ShieldCheck,
  TrendingUp,
  Cpu,
  Layers,
  Sparkles,
} from "lucide-react";
import { initGSAP } from "@/lib/gsap";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap } = initGSAP();

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-pill", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 0.1,
      })
        .from(
          headlineRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
          },
          "-=0.3"
        )
        .from(
          textRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
          },
          "-=0.5"
        )
        .from(
          ctaRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.7,
          },
          "-=0.5"
        )
        .from(
          visualRef.current,
          {
            opacity: 0,
            scale: 0.95,
            y: 30,
            duration: 1,
          },
          "-=0.6"
        )
        .from(
          ".hero-stat-card",
          {
            opacity: 0,
            y: 25,
            stagger: 0.15,
            duration: 0.7,
          },
          "-=0.6"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      style={{
        position: "relative",
        paddingTop: "9rem",
        paddingBottom: "5rem",
        overflow: "hidden",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3.5rem",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left Column: Value Proposition & CTAs */}
          <div style={{ maxWidth: "680px" }}>
            <div
              className="badge-pill hero-pill"
              style={{ marginBottom: "1.5rem" }}
            >
              <Sparkles size={14} />
              <span>Full-Spectrum Digital Engineering Studio</span>
            </div>

            <h1
              ref={headlineRef}
              style={{
                fontSize: "clamp(2.3rem, 5vw, 3.8rem)",
                lineHeight: 1.12,
                marginBottom: "1.5rem",
                fontWeight: 800,
                letterSpacing: "-0.035em",
              }}
            >
              Go Digital With Precision:{" "}
              <span className="gradient-text-cyan-violet">
                AI Voicebots, Web CRMs & Mobile Apps
              </span>
            </h1>

            <p
              ref={textRef}
              style={{
                fontSize: "clamp(1.05rem, 1.8vw, 1.22rem)",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                marginBottom: "2.25rem",
              }}
            >
              We engineer revenue-generating software for forward-thinking businesses.
              From <strong>sub-800ms conversational AI voice receptionists</strong> and
              <strong> enterprise CRM portals</strong> to <strong>real-time logistics mobile apps</strong>,
              Figma design systems, and 60fps Adobe Animate motion. Built with uncompromising code quality and top-tier SEO architecture.
            </p>

            <div
              ref={ctaRef}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                alignItems: "center",
                marginBottom: "3rem",
              }}
            >
              <Link href="#contact" className="btn-primary">
                <span>Start Your Digital Project</span>
                <ArrowRight size={18} />
              </Link>
              <Link href="#estimator" className="btn-secondary">
                <span>Calculate Project ROI</span>
              </Link>
            </div>

            {/* Quick Proof Metrics */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                gap: "1.25rem",
                paddingTop: "1.5rem",
                borderTop: "1px solid var(--border-subtle)",
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.75rem",
                    fontWeight: 800,
                    color: "var(--accent-cyan)",
                  }}
                >
                  &lt; 800ms
                </div>
                <div
                  style={{
                    fontSize: "0.82rem",
                    color: "var(--text-muted)",
                    marginTop: "0.15rem",
                  }}
                >
                  AI Voicebot Response Latency
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.75rem",
                    fontWeight: 800,
                    color: "var(--accent-emerald)",
                  }}
                >
                  2 - 4 Weeks
                </div>
                <div
                  style={{
                    fontSize: "0.82rem",
                    color: "var(--text-muted)",
                    marginTop: "0.15rem",
                  }}
                >
                  Rapid MVP & CRM Deployment
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.75rem",
                    fontWeight: 800,
                    color: "var(--accent-violet)",
                  }}
                >
                  99.8%
                </div>
                <div
                  style={{
                    fontSize: "0.82rem",
                    color: "var(--text-muted)",
                    marginTop: "0.15rem",
                  }}
                >
                  Uptime & Core Web Vitals
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: AI Visual Showcase with Floating Cards */}
          <div
            ref={visualRef}
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Main Visual Container */}
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "600px",
                aspectRatio: "16 / 9",
                borderRadius: "var(--radius-xl)",
                overflow: "hidden",
                border: "1px solid rgba(0, 240, 255, 0.3)",
                boxShadow:
                  "0 20px 50px rgba(0, 0, 0, 0.7), 0 0 40px rgba(0, 240, 255, 0.2)",
              }}
            >
              <Image
                src="/images/hero_digital_matrix.jpg"
                alt="AuraDigital 3D Engineering Matrix Core"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 600px"
                style={{
                  objectFit: "cover",
                }}
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

            {/* Floating Floating Stat Badge 1: AI Voice Agent */}
            <div
              className="hero-stat-card glass-card"
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
                background: "rgba(10, 14, 26, 0.85)",
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
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                    fontWeight: 500,
                  }}
                >
                  Inbound Voice AI
                </div>
                <div
                  style={{
                    fontSize: "0.88rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                  }}
                >
                  100% Calls Answered
                </div>
              </div>
            </div>

            {/* Floating Floating Stat Badge 2: Google Search Ranking */}
            <div
              className="hero-stat-card glass-card"
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
                background: "rgba(10, 14, 26, 0.85)",
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
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                    fontWeight: 500,
                  }}
                >
                  Search Optimization
                </div>
                <div
                  style={{
                    fontSize: "0.88rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                  }}
                >
                  Rank #1 Commercial SERP
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
