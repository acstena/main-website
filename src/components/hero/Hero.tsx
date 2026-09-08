"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { initGSAP } from "@/lib/gsap";
import Badge from "@/components/ui/Badge";
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
              ".hero-visual-frame",
              ".hero-stat-card",
            ],
            { clearProps: "all" }
          );
        },
      });

      tl.from(".hero-pill", { opacity: 0, y: 20, duration: 0.6, delay: 0.1 })
        .from(headlineRef.current, { opacity: 0, y: 30, duration: 0.8 }, "-=0.3")
        .from(textRef.current, { opacity: 0, y: 20, duration: 0.8 }, "-=0.5")
        .from(ctaRef.current, { opacity: 0, y: 20, duration: 0.7 }, "-=0.5")
        .from(".hero-visual-frame", { opacity: 0, scale: 0.95, y: 30, duration: 1 }, "-=0.6")
        .from(".hero-stat-card", { opacity: 0, y: 25, stagger: 0.15, duration: 0.7 }, "-=0.6");
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Value Proposition & CTAs */}
          <div className="hero-content">
            <Badge icon={<Sparkles size={14} />} className="hero-pill" style={{ marginBottom: "1.5rem" }}>
              Full-Spectrum Digital Engineering Studio
            </Badge>

            <h1 ref={headlineRef} className="hero-title">
              Go Digital With Precision:{" "}
              <span className="gradient-text-cyan-violet">
                AI Voicebots, Web CRMs & Mobile Apps
              </span>
            </h1>

            <p ref={textRef} className="hero-lead">
              We engineer revenue-generating software for forward-thinking businesses.
              From <strong>sub-800ms conversational AI voice receptionists</strong> and
              <strong> enterprise CRM portals</strong> to <strong>real-time logistics mobile apps</strong>,
              Figma design systems, and 60fps Adobe Animate motion. Built with uncompromising code quality and top-tier SEO architecture.
            </p>

            <div ref={ctaRef} className="hero-cta-group">
              <Link href="#contact" className="btn-primary">
                <span>Start Your Digital Project</span>
                <ArrowRight size={18} />
              </Link>
              <Link href="#estimator" className="btn-secondary">
                <span>Plan Sprints & Tech Stack</span>
              </Link>
            </div>

            <HeroMetrics />
          </div>

          {/* AI Visual Showcase */}
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
