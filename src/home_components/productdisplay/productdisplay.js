import React, { useEffect, useState } from "react";
import ProductCard from "../productcard/productcard";

import "./productdisplay.css";

import { apiurl } from "../../data/shopinfo";

export default function ProductDisplay() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${apiurl}/categories`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section id="products" className="products-display">
      <h1>Our Collections</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="product-scroll">
          <div className="blackbox-scroll"></div>

          {categories.map((p) => (
            <ProductCard key={p.id} product={p} display_only={true} />
          ))}

          <div className="blackbox-scroll"></div>
        </div>
      )}
    </section>
  );
}
