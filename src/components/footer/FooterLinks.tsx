import React from "react";
import Link from "next/link";

export default function FooterLinks() {
  return (
    <>
      {/* Col 2: Solutions */}
      <div>
        <div className="footer-nav-heading">
          AI & Software Solutions
        </div>
        <ul className="footer-nav-list">
          <li>
            <Link href="/voice-ai" className="footer-nav-link">
              24/7 AI Phone Receptionists
            </Link>
          </li>
          <li>
            <Link href="/voice-ai" className="footer-nav-link">
              Smart Website Chatbots
            </Link>
          </li>
          <li>
            <Link href="/services" className="footer-nav-link">
              Custom Web Portals & CRMs
            </Link>
          </li>
          <li>
            <Link href="/services" className="footer-nav-link">
              Rapid 3-Week Web MVPs
            </Link>
          </li>
          <li>
            <Link href="/services" className="footer-nav-link">
              Field & Fleet Dispatch Apps
            </Link>
          </li>
          <li>
            <Link href="/services" className="footer-nav-link">
              Meditation & Wellness Mobile Apps
            </Link>
          </li>
        </ul>
      </div>

      {/* Col 3: Design & Motion */}
      <div>
        <div className="footer-nav-heading accent-violet">
          Design & Creative
        </div>
        <ul className="footer-nav-list">
          <li>
            <Link href="/services" className="footer-nav-link">
              Figma Website Prototypes
            </Link>
          </li>
          <li>
            <Link href="/services" className="footer-nav-link">
              2D Custom Web Animations
            </Link>
          </li>
          <li>
            <Link href="/services" className="footer-nav-link">
              Canva Brand Kits & Pitch Decks
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="footer-nav-link">
              Client Case Studies & Results
            </Link>
          </li>
          <li>
            <Link href="/contact" className="footer-nav-link">
              Digital NFC Business Cards
            </Link>
          </li>
        </ul>
      </div>

      {/* Col 4: Small Business 'Go Digital' & SEO */}
      <div>
        <div className="footer-nav-heading accent-emerald">
          Go Digital & SEO
        </div>
        <ul className="footer-nav-list">
          <li>
            <Link href="/seo-growth" className="footer-nav-link">
              Small Business Digital Growth
            </Link>
          </li>
          <li>
            <Link href="/seo-growth" className="footer-nav-link">
              Top Google Search Rankings
            </Link>
          </li>
          <li>
            <Link href="/seo-growth" className="footer-nav-link">
              Fast Mobile Page Speed
            </Link>
          </li>
          <li>
            <Link href="/seo-growth" className="footer-nav-link">
              Google Maps & Review Strategy
            </Link>
          </li>
          <li>
            <Link href="/planner" className="footer-nav-link">
              Interactive Project Planner
            </Link>
          </li>
          <li>
            <Link href="/contact" className="footer-nav-link">
              Book A Free Discovery Call
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
