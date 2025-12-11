import React, { useState, useEffect } from "react";
import ProductCard from "../productcard/productcard";

import "./categorybrowser.css";

import { apiurl } from "../../data/shopinfo";

export default function CategoryBrowser() {
  
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
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
  useEffect(() => {
    fetch(`${apiurl}/products`)
    .then((res) => res.json())
    .then((data) => {
      setProducts(data);
      setLoading(false);
    })
    .catch((err) => {
      console.error("Error fetching products:", err);
      setLoading(false);
    });
  }, []);
  
  const [activeCategory, setActiveCategory] = useState(1);
  let filteredProducts = products.filter(
    (p) => p.category === activeCategory
  );

  return (
    <div className="category-browser">
      {/* Navigation bar */}
      {loading ? (
          <p>Loading...</p>
        ) : (

      <div className="category-nav">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`category-btn ${
              cat.id === activeCategory ? "active" : ""
            }`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.name}
          </button>
        ))}
      </div>
      )}

      {/* Product display area */}
      {loading ? (
          <p>Loading...</p>
        ) : (

      <div className="category-products">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            display_only={false} // or false, your choice
          />
        ))}
      </div>
        )}
    </div>
  );
}
