import React from "react";
import ContactDirectInfo from "./ContactDirectInfo";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="section-spacing" style={{ position: "relative" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3.5rem",
          }}
          className="contact-layout-grid"
        >
          <ContactDirectInfo />
          <ContactForm />
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 900px) {
          .contact-layout-grid {
            grid-template-columns: 1fr 1.2fr !important;
          }
        }
      `}</style>
    </section>
  );
}
