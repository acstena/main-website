"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles, Menu, X, ArrowUpRight, Cpu } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "AI Solutions", href: "#voice-ai" },
    { label: "Web & CRM", href: "#web-crm" },
    { label: "Mobile Apps", href: "#mobile-apps" },
    { label: "Design & Motion", href: "#design-motion" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "ROI Estimator", href: "#estimator" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: "1rem",
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        justifyContent: "center",
        padding: "0 1rem",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.75rem 1.5rem",
          borderRadius: "9999px",
          background: scrolled
            ? "rgba(10, 14, 26, 0.85)"
            : "rgba(10, 14, 26, 0.65)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: scrolled
            ? "0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 240, 255, 0.1)"
            : "0 4px 20px rgba(0, 0, 0, 0.3)",
          transition: "all 0.3s ease",
        }}
      >
        {/* Brand Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            textDecoration: "none",
            color: "var(--text-primary)",
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #00f0ff, #8b5cf6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 15px rgba(0, 240, 255, 0.5)",
            }}
          >
            <Cpu size={20} color="#05070c" strokeWidth={2.5} />
          </div>
          <div>
            <div
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 800,
                fontSize: "1.15rem",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
              }}
            >
              AURA<span style={{ color: "var(--accent-cyan)" }}>DIGITAL</span>
            </div>
            <div
              style={{
                fontSize: "0.65rem",
                color: "var(--text-muted)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              AI • Web • Mobile Studio
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: "none",
            alignItems: "center",
            gap: "1.75rem",
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                fontSize: "0.85rem",
                fontWeight: 500,
                color: "var(--text-secondary)",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--accent-cyan)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-secondary)")
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right CTA and Availability Status */}
        <div
          style={{
            display: "none",
            alignItems: "center",
            gap: "1rem",
          }}
          className="desktop-cta"
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.35rem 0.8rem",
              borderRadius: "9999px",
              background: "rgba(16, 185, 129, 0.08)",
              border: "1px solid rgba(16, 185, 129, 0.25)",
              fontSize: "0.75rem",
              fontWeight: 500,
              color: "#34d399",
            }}
          >
            <div className="pulse-dot" />
            <span>Available for Sprints</span>
          </div>

          <Link
            href="#contact"
            className="btn-primary"
            style={{
              padding: "0.55rem 1.25rem",
              fontSize: "0.85rem",
              borderRadius: "9999px",
            }}
          >
            <span>Go Digital</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "none",
            border: "none",
            color: "var(--text-primary)",
            cursor: "pointer",
            padding: "0.5rem",
          }}
          className="mobile-menu-btn"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: "1rem",
            right: "1rem",
            marginTop: "0.5rem",
            background: "rgba(10, 14, 26, 0.95)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "var(--radius-lg)",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            boxShadow: "0 20px 40px rgba(0,0,0,0.8)",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: "1rem",
                fontWeight: 600,
                color: "var(--text-primary)",
                textDecoration: "none",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-primary"
            style={{ width: "100%", textAlign: "center", marginTop: "0.5rem" }}
          >
            Start Your Digital Project
          </Link>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-cta {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
