import React, { useEffect, useState } from "react";
import "./hero.css";
import { apiurl } from "../../data/shopinfo";

export default function Hero() {

  const [desktopImages, setDesktopImages] = useState([]);

  const [mobileImages, setMobileImages] = useState([]);
  useEffect(() => {
      fetch(`${apiurl}/get_desktop_hero_images`)
      .then((res) => res.json())
      .then((data) => {
        setDesktopImages(data.images);
      })
      .catch((err) => {
        console.error("Error fetching desktop images:", err);
      });
    }, []);
  
  useEffect(() => {
      fetch(`${apiurl}/get_mobile_hero_images`)
      .then((res) => res.json())
      .then((data) => {
        setMobileImages(data.images);
      })
      .catch((err) => {
        console.error("Error fetching mobile images:", err);
      });
    }, []);
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
