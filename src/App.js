// src/App.js
import {React,  useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, useParams, Link } from "react-router-dom";

import "./App.css";


import Navbar from "./home_components/navbar/navbar";
import ProductDetails from "./product_components/page/product";
import Home from "./home_components/page/home";
import CartPage from "./cart_components/page/cart";
import CheckoutPage from "./checkout_components/page/checkout";
import TermsAndConditions from "./pages/terms_and_conditions";
import PrivacyPolicy from "./pages/privacy_policy";
import RefundCancellationPolicy from "./pages/refund_cancellation";
import Header from "./top/top";



const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return null;
};


function ProductPage() {
  const { id } = useParams();
  const { color, size, number } = useLocation().state || {};

  return <ProductDetails id={id} color={color} size={size} number={number} />;
}

export default function App() {
  return (
    <Router className="app-container">
        <Header />

        <Navbar />
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<Home />}/>

          {/* PRODUCT DETAILS */}
          <Route path="/product/:id" element={<ProductPage />} />

          {/* CART */}
          <Route path="/cart" element={<CartPage />} />

          <Route path="/checkout" element = {<CheckoutPage />} />

          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-cancellation-policy" element={<RefundCancellationPolicy />} />
        </Routes>

        <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Quito</h4>
          <p>
            India-based women's woollen clothing brand specializing in
            in-house fabric knitting and garment manufacturing.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="#about">About Us</Link></li>
            <li><Link to="#contact">Contact Us</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
            <li><Link to="/refund-cancellation-policy">Refund & Cancellation Policy</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Support</h4>
          <p>
            Email:
            <a href="mailto:support@getquito.com">
              support@getquito.com
            </a>
          </p>
          <p>Payment Method: Cash on Delivery (COD)</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Quito. All rights reserved.
        </p>
      </div>
    </footer>
    </Router>
  );
}
