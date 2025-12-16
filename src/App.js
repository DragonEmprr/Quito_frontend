// src/App.js
import {React,  useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import "./App.css";


import Navbar from "./home_components/navbar/navbar";
import ProductPage from "./product_components/page/product";
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

        <footer>
          © {new Date().getFullYear()} ClothDesigns — All rights reserved.
        </footer>
    </Router>
  );
}
