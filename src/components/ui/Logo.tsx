"use client";

import React, { useState, useEffect } from "react";

export type LogoOption = "nexus" | "orbit" | "prism" | "minimal";

interface LogoProps {
  variant?: LogoOption;
  size?: number;
  showText?: boolean;
  className?: string;
  theme?: "light" | "dark";
}

export default function Logo({
  variant: propVariant,
  size = 36,
  showText = true,
  className = "",
  theme = "light",
}: LogoProps) {
  const [activeVariant, setActiveVariant] = useState<LogoOption>(propVariant || "nexus");

  useEffect(() => {
    if (propVariant) {
      setActiveVariant(propVariant);
      return;
    }
    const handleLogoChange = (e: Event) => {
      const customEvent = e as CustomEvent<LogoOption>;
      if (customEvent.detail) {
        setActiveVariant(customEvent.detail);
      }
    };
    window.addEventListener("acstena:logoChange", handleLogoChange);
    return () => window.removeEventListener("acstena:logoChange", handleLogoChange);
  }, [propVariant]);

  const variant = propVariant || activeVariant;

  // SVG Icon definitions for the 4 logo options
  const renderIcon = () => {
    switch (variant) {
      case "orbit":
        return (
          <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
            <rect width="40" height="40" rx="10" fill="url(#orbit-bg)" />
            <ellipse cx="20" cy="20" rx="13" ry="5" stroke="url(#orbit-grad-1)" strokeWidth="2.5" transform="rotate(-30 20 20)" />
            <ellipse cx="20" cy="20" rx="13" ry="5" stroke="url(#orbit-grad-2)" strokeWidth="2.5" transform="rotate(30 20 20)" />
            <circle cx="20" cy="20" r="3.5" fill="#00f0ff" />
            <defs>
              <linearGradient id="orbit-bg" x1="0" y1="0" x2="40" y2="40">
                <stop stopColor="#0f172a" />
                <stop offset="1" stopColor="#1e293b" />
              </linearGradient>
              <linearGradient id="orbit-grad-1" x1="7" y1="15" x2="33" y2="25">
                <stop stopColor="#00f0ff" />
                <stop offset="1" stopColor="#8b5cf6" />
              </linearGradient>
              <linearGradient id="orbit-grad-2" x1="7" y1="15" x2="33" y2="25">
                <stop stopColor="#8b5cf6" />
                <stop offset="1" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>
        );

      case "prism":
        return (
          <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
            <rect width="40" height="40" rx="10" fill="#090d16" />
            <path d="M20 7L32 15V29L20 35L8 29V15L20 7Z" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
            <path d="M20 7L32 29H8L20 7Z" fill="url(#prism-grad)" fillOpacity="0.8" />
            <path d="M20 7V29" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.7" />
            <defs>
              <linearGradient id="prism-grad" x1="8" y1="7" x2="32" y2="29">
                <stop stopColor="#00f0ff" />
                <stop offset="0.5" stopColor="#6366f1" />
                <stop offset="1" stopColor="#f43f5e" />
              </linearGradient>
            </defs>
          </svg>
        );

      case "minimal":
        return (
          <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
            <rect width="40" height="40" rx="10" fill="#090d16" />
            <path
              d="M13 28L20 11L27 28M15.5 23H24.5"
              stroke="url(#minimal-grad)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="28" cy="11" r="2.5" fill="#00f0ff" />
            <defs>
              <linearGradient id="minimal-grad" x1="13" y1="11" x2="27" y2="28">
                <stop stopColor="#ffffff" />
                <stop offset="1" stopColor="#6366f1" />
              </linearGradient>
            </defs>
          </svg>
        );

      case "nexus":
      default:
        return (
          <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
            <rect width="40" height="40" rx="10" fill="#090d16" stroke="rgba(0, 240, 255, 0.3)" strokeWidth="1" />
            {/* Hexagonal Isometric A with intersecting neon paths */}
            <path
              d="M20 9L29 15V27L20 33L11 27V15L20 9Z"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="1.5"
            />
            <path
              d="M20 12L27 16.5V25.5L20 29.5L13 25.5V16.5L20 12Z"
              stroke="url(#nexus-grad-1)"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <path
              d="M13 22H27"
              stroke="url(#nexus-grad-2)"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <circle cx="20" cy="12" r="2.5" fill="#00f0ff" />
            <defs>
              <linearGradient id="nexus-grad-1" x1="13" y1="12" x2="27" y2="29.5">
                <stop stopColor="#00f0ff" />
                <stop offset="0.6" stopColor="#6366f1" />
                <stop offset="1" stopColor="#a855f7" />
              </linearGradient>
              <linearGradient id="nexus-grad-2" x1="13" y1="22" x2="27" y2="22">
                <stop stopColor="#00f0ff" />
                <stop offset="1" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>
        );
    }
  };

  return (
    <div className={`logo-container ${className}`} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
      <div style={{ flexShrink: 0 }}>{renderIcon()}</div>
      {showText && (
        <div>
          <div
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 800,
              fontSize: "1.25rem",
              letterSpacing: "-0.035em",
              lineHeight: 1.05,
              color: theme === "dark" ? "#ffffff" : "var(--text-primary)",
            }}
          >
            acstena<span style={{ color: "var(--accent-primary)" }}>.</span>
          </div>
          <div
            style={{
              fontSize: "0.62rem",
              color: theme === "dark" ? "#94a3b8" : "var(--text-muted)",
              letterSpacing: "0.09em",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Digital Studio
          </div>
        </div>
      )}
    </div>
  );
}
