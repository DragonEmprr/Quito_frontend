import React from "react";
import { shopAddress, phone, email, googleMapsSrc } from "../../data/shopinfo";

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
        <a href={`tel:${phone}`}>Call: {phone}</a>
        <a href={`mailto:${email}`}>Email Us</a>
      </div>
    </div>
  );
}
