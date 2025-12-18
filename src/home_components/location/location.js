import React from "react";
import { shopAddress, phone, email, googleMapsSrc, instagramurl } from "../../data/shopinfo";

import "./location.css";

export default function LocationSection() {
  return (
    <div id="location" className="location-section">
      <h3>Find our shop & factory</h3>

      <p>{shopAddress}</p>

      <iframe
        title="map"
        src={googleMapsSrc}
        width="100%"
        height="220"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      />

      <div className="contact-links">
  <div className="contact-info">
    <a href={`tel:${phone}`}>Call: {phone}</a>
    <a href={`mailto:${email}`}>Email Us</a>
  </div>

  <div className="social-links">
    <a
      href={instagramurl}
      target="_blank"
      rel="noopener noreferrer"
      className="instagram-link"
      aria-label="Instagram"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a1 1 0 110 2 1 1 0 010-2zm-5 2a6 6 0 110 12 6 6 0 010-12zm0 2a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
    </a>
  </div>
</div>

    </div>
  );
}
