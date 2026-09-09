"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
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
              ".hero-metrics-grid",
              ".hero-visual-wrapper",
            ],
            { clearProps: "all" }
          );
        },
      });

      tl.from(".hero-pill", { opacity: 0, y: 15, duration: 0.5, delay: 0.1 })
        .from(headlineRef.current, { opacity: 0, y: 20, duration: 0.7 }, "-=0.3")
        .from(textRef.current, { opacity: 0, y: 15, duration: 0.6 }, "-=0.4")
        .from(ctaRef.current, { opacity: 0, y: 15, duration: 0.5 }, "-=0.4")
        .from(".hero-metrics-grid", { opacity: 0, y: 20, duration: 0.6 }, "-=0.3")
        .from(".hero-visual-wrapper", { opacity: 0, scale: 0.97, y: 25, duration: 0.8 }, "-=0.5");
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="hero-section">
      <div className="container">
        {/* Centered Grand Hero Content */}
        <div className="hero-centered-content">
          {/* Live Studio Availability Badge */}
          <div className="hero-status-pill hero-pill">
            <div className="pulse-dot" />
            <span style={{ fontWeight: 700, color: "#059669" }}>Available for New Projects</span>
            <span className="hero-pill-divider" style={{ opacity: 0.25, margin: "0 0.4rem" }}>|</span>
            <span className="hero-pill-secondary" style={{ color: "var(--text-secondary)", fontSize: "0.8rem" }}>
              High-Velocity Digital Delivery Partner
            </span>
          </div>

          {/* Centered High-Impact Headline */}
          <h1 ref={headlineRef} className="hero-title">
            We Build Custom Software &amp; AI Voicebots That{" "}
            <span className="gradient-text-cyan-violet">
              Scale Your Business
            </span>
          </h1>

          {/* Clean 2-Line Subtitle */}
          <p ref={textRef} className="hero-lead">
            From 24/7 AI phone receptionists that capture every customer lead, to custom web portals
            that replace messy spreadsheets. We build, launch, and support your digital systems in weeks.
          </p>

          {/* Centered Action CTAs */}
          <div ref={ctaRef} className="hero-cta-group">
            <Link href="/contact" className="btn-primary hero-btn-main">
              <span>Book a Strategy Call</span>
              <ArrowRight size={18} />
            </Link>
            <Link href="/voice-ai" className="btn-secondary hero-btn-sub">
              <span>Try Live Voice Simulator</span>
            </Link>
          </div>

          {/* 4 Performance Metric Cards in Centered Grid */}
          <HeroMetrics />
        </div>

        {/* Flagship Interactive Solution Showcase (Centered, Fixed Height, Zero Shift) */}
        <HeroVisual />

        {/* Social Proof / Client Trust Bar (Developers Den Benchmark) */}
        <div className="hero-trust-bar">
          <p className="hero-trust-title">
            Trusted by fast-growing medical practices, logistics operators &amp; forward-thinking businesses
          </p>
          <div className="hero-trust-logos">
            <span className="trust-client-logo">OmniHealth Clinics</span>
            <span className="trust-client-divider">•</span>
            <span className="trust-client-logo">SwiftLane Freight</span>
            <span className="trust-client-divider">•</span>
            <span className="trust-client-logo">ApexFlow Systems</span>
            <span className="trust-client-divider">•</span>
            <span className="trust-client-logo">FleetPulse Mobile</span>
            <span className="trust-client-divider">•</span>
            <span className="trust-client-logo">Zenith Digital</span>
          </div>
        </div>
      </div>
    </section>
  );
}
