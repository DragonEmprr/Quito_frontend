import React from "react";

import "./about.css";

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-text">
        <h2>About Us</h2>
        <p>
          We focus on high-quality fabrics with mindful production. Our pieces
          are created either in our factory or by selected partner artisans.
        </p>

        <ul>
          <li>✓ Small-batch production</li>
          <li>✓ Custom orders available</li>
          <li>✓ Wholesale for boutiques</li>
        </ul>
      </div>
    </section>
  );
}
