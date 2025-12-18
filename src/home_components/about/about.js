import React from "react";
import "./about.css";

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="border"></div>

      <div className="about-text">
        <h2>About Us</h2>

        <p>
          Quito is an India-based, women-focused woollen clothing brand
          dedicated to crafting high-quality knitwear through a fully
          in-house manufacturing process. From fabric creation to the final
          finishing touches, every step is carefully handled by our skilled
          team to ensure consistency, comfort, and durability in every
          product we deliver.
        </p>

        <p>
          Our journey begins with premium yarn selection, followed by
          precise knitting, shaping, stitching, and finishing. By managing
          the entire production cycle ourselves, we maintain strict quality
          control and ensure that each garment meets our standards for
          warmth, fit, and craftsmanship. Our designs blend timeless style
          with everyday comfort, making them suitable for both casual and
          seasonal wear.
        </p>

        <p>
          We specialize exclusively in women’s woollen apparel, focusing on
          ethically produced, well-constructed garments that prioritize
          both functionality and aesthetics. Quality, transparency, and
          customer satisfaction are at the core of our operations.
        </p>

        {/* 🔹 Offline presence trust signal */}
        <p>
          In addition to our online store, our products are also available
          through select offline retail outlets, reflecting our established
          presence and experience in the women’s woollen apparel market.
        </p>

        <p>
          All orders placed on our website are handled with care, securely
          packaged, and shipped through reliable delivery partners. For any
          queries related to orders, policies, or support, customers can
          reach us at <strong>support@getquito.com</strong>.
        </p>
      </div>
    </section>
  );
}
