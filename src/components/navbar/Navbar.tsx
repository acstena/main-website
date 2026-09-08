"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Cpu } from "lucide-react";
import MobileDrawer from "./MobileDrawer";

const navLinks = [
  { label: "AI Solutions", href: "#voice-ai" },
  { label: "Web & CRM", href: "#web-crm" },
  { label: "Mobile Apps", href: "#mobile-apps" },
  { label: "Design & Motion", href: "#design-motion" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "ROI Estimator", href: "#estimator" },
];

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

  return (
    <header className="site-header">
      <div className={`nav-pill-container ${scrolled ? "scrolled" : ""}`}>
        {/* Brand Logo */}
        <Link href="/" className="nav-brand">
          <div className="nav-brand-icon">
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
          style={{ display: "none", alignItems: "center", gap: "1.75rem" }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right CTA and Availability Status */}
        <div
          style={{ display: "none", alignItems: "center", gap: "1rem" }}
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

      <MobileDrawer
        isOpen={mobileMenuOpen}
        navLinks={navLinks}
        onClose={() => setMobileMenuOpen(false)}
      />

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
