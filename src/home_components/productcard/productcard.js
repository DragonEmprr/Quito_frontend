import React from "react";
import "./productcard.css";

import {useNavigate} from "react-router-dom";
import { searchCartItemById } from "../../utils/cartutils";

export default function ProductCard({ product, display_only = false }) {
  const navigate = useNavigate();

  function checkItemInCart() {
    const existingItem = searchCartItemById(product.id);
    console.log(existingItem);
    return existingItem.length > 0;
  }

  if (display_only) {
    return (
      <div className="product-card minimal-card">
        <img src={product.img} alt={product.name} />
        <h3>{product.name}</h3>
      </div>
    );
  }

  return (
    <div className="product-card">
      <img src={product.img} alt={product.name} />
      <h2>{product.name}</h2>
      <div className="details">
      <strong>{product.price}</strong>
      <button className="details-btn" onClick={() => navigate(`/product/${product.id}`)}>Shop</button>
      </div>
      <br></br>
      {
        checkItemInCart() && <span className="in-cart-indicator">Already shopping.....</span>
      }
    </div>
  );
}
