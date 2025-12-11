import React, { useEffect, useState } from "react";
import "./hero.css";

export default function Hero() {
  const desktopImages = [
    "https://media.kunduz.com/media/sug-question-candidate/20220303001704987972-4363882.jpg?h=512"
  ];

  const mobileImages = [
    "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
  ];

  const [bgIndex, setBgIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Change image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const images = isMobile ? mobileImages : desktopImages;
  const currentImage = images[bgIndex % images.length];

  return (
    <header className="hero-wrapper">
      {/* Real image that resizes naturally */}
      <img src={currentImage} alt="" className="hero-img" />

      {/* Dark overlay + text */}
      <div className="hero-content">
        <h1 className="brand-title">QUITO</h1>
        <h3 className="factory-name">~ RISHU KNITWEAR </h3>
        <div className="hero-text">
          <h2>Beautiful cloth, thoughtfully made.</h2>
          <p>Small-batch designer textiles with handcrafted excellence.</p>

          <div className="hero-buttons">
            <a href="#products" className="btn-primary">View Collection</a>
            <a href="#location" className="btn-outline">Find Us</a>
          </div>
        </div>
      </div>
    </header>
  );
}
