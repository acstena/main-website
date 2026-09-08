"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Zap, CheckCircle2, ShieldCheck } from "lucide-react";
import { initGSAP } from "@/lib/gsap";
import HeroMetrics from "./HeroMetrics";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap } = initGSAP();

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          gsap.set(
            [
              ".hero-pill",
              headlineRef.current,
              textRef.current,
              ctaRef.current,
              ".hero-cockpit-stage",
              ".hero-metrics-row",
            ],
            { clearProps: "all" }
          );
        },
      });

      tl.from(".hero-pill", { opacity: 0, y: 20, duration: 0.5, delay: 0.1 })
        .from(headlineRef.current, { opacity: 0, y: 25, duration: 0.7 }, "-=0.3")
        .from(textRef.current, { opacity: 0, y: 20, duration: 0.6 }, "-=0.4")
        .from(".hero-highlights-list", { opacity: 0, y: 15, duration: 0.5 }, "-=0.4")
        .from(ctaRef.current, { opacity: 0, y: 20, duration: 0.6 }, "-=0.4")
        .from(".hero-cockpit-stage", { opacity: 0, scale: 0.96, y: 30, duration: 0.8 }, "-=0.6")
        .from(".hero-metrics-row", { opacity: 0, y: 20, duration: 0.6 }, "-=0.5");
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Value Proposition & CTAs */}
          <div className="hero-content">
            {/* Live Studio Availability Badge */}
            <div className="hero-status-pill hero-pill">
              <div className="pulse-dot" />
              <span style={{ fontWeight: 700, color: "#059669" }}>Available for Q3/Q4 Sprints</span>
              <span style={{ opacity: 0.25, margin: "0 0.25rem" }}>|</span>
              <span style={{ color: "var(--text-secondary)", fontSize: "0.78rem" }}>
                Senior AI & Full-Stack Pod
              </span>
            </div>

            <h1 ref={headlineRef} className="hero-title">
              Engineering Digital Products That Scale:{" "}
              <span className="gradient-text-cyan-violet">
                AI Voicebots, Custom Web CRMs & Mobile Apps
              </span>
            </h1>

            <p ref={textRef} className="hero-lead">
              We design and engineer mission-critical digital systems for forward-thinking businesses.
              Replace lost phone leads with <strong>sub-800ms conversational AI voice receptionists</strong>,
              transition manual spreadsheets into <strong>custom Next.js web applications</strong>, and deploy
              <strong> offline-first mobile telematics</strong> with verified technical excellence.
            </p>

            {/* Value Highlights List */}
            <div className="hero-highlights-list">
              <div className="hero-highlight-bullet">
                <div className="bullet-icon-box" style={{ background: "rgba(2, 132, 199, 0.1)" }}>
                  <Zap size={14} color="var(--accent-cyan)" />
                </div>
                <span>
                  <strong>Sub-800ms AI Telephony:</strong> 100% inbound calls answered & booked 24/7
                </span>
              </div>
              <div className="hero-highlight-bullet">
                <div className="bullet-icon-box" style={{ background: "rgba(16, 185, 129, 0.1)" }}>
                  <CheckCircle2 size={14} color="var(--accent-emerald)" />
                </div>
                <span>
                  <strong>Next.js Cloud CRMs:</strong> Rapid 3-week deployments with PostgreSQL & Supabase
                </span>
              </div>
              <div className="hero-highlight-bullet">
                <div className="bullet-icon-box" style={{ background: "rgba(99, 102, 241, 0.1)" }}>
                  <ShieldCheck size={14} color="var(--accent-violet)" />
                </div>
                <span>
                  <strong>Enterprise Mobile Apps:</strong> Real-time logistics telemetry & audio soundscapes
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div ref={ctaRef} className="hero-cta-group">
              <Link href="/contact" className="btn-primary hero-btn-main">
                <span>Start Your Digital Project</span>
                <ArrowRight size={18} />
              </Link>
              <Link href="/planner" className="btn-secondary hero-btn-sub">
                <span>Plan Sprints & Tech Stack</span>
              </Link>
            </div>

            {/* 4 Performance Metrics */}
            <HeroMetrics />
          </div>

          {/* AI Visual Showcase: Interactive Command Cockpit */}
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
