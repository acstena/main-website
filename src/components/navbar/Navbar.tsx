"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import MobileDrawer from "./MobileDrawer";
import Logo from "@/components/ui/Logo";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "AI Voicebots", href: "/voice-ai" },
  { label: "Case Studies", href: "/portfolio" },
  { label: "Sprint Planner", href: "/planner" },
  { label: "SEO & Growth", href: "/seo-growth" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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
          <Logo size={36} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`nav-link ${isActive ? "active" : ""}`}
              >
                {link.label}
                {isActive && <span className="nav-link-indicator" />}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA and Availability Status */}
        <div className="desktop-cta">
          <div className="nav-availability-badge">
            <div className="pulse-dot" />
            <span>Available for Sprints</span>
          </div>

          <Link href="/contact" className="nav-cta-btn">
            <span>Talk to Us</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
    </header>
  );
}
