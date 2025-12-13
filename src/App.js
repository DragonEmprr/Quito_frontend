// src/App.js
import {React,  useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import "./App.css";


import Navbar from "./home_components/navbar/navbar";
import ProductPage from "./product_components/page/product";
import Home from "./home_components/page/home";
import CartPage from "./cart_components/page/cart";
import CheckoutPage from "./checkout_components/page/checkout";



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
    <Router>
        <Navbar />
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<Home />}/>

          {/* PRODUCT DETAILS */}
          <Route path="/product/:id" element={<ProductPage />} />

          {/* CART */}
          <Route path="/cart" element={<CartPage />} />

          <Route path="/checkout" element = {<CheckoutPage />} />
        </Routes>

        <footer>
          © {new Date().getFullYear()} ClothDesigns — All rights reserved.
        </footer>
    </Router>
  );
}
