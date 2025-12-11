import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./product.css";

import ProductImage from "../productimage/productimage";
import ProductInfo from "../productinfo/productinfo";
import ColorSelector from "../colorselector/colorselector";
import SizeSelector from "../sizeselector/sizeselector";
import QuantitySelector from "../quantityselector/quantityselector";
import AddToCartButton from "../addtocart/addtocart";
import { searchCartItem } from "../../utils/cartutils";

import { apiurl } from "../../data/shopinfo";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    const existingItem = searchCartItem(id, selectedColor, selectedSize);

    if (existingItem) {
      setQuantity(existingItem.quantity);
      setUpdate(true);
    } else {
      setQuantity(0);
      setUpdate(false);
    }
  }, [id, selectedColor, selectedSize]);


  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch(`${apiurl}/product/${id}`);
      const data = await res.json();
      setProduct(data);

      if (data.colors) {
        setSelectedColor(Object.keys(data.colors)[0]);
      }
    }
    fetchProduct();
  }, [id]);

  if (!product) return <p className="loading">Loading...</p>;

  return (
    <div className="product-details-page">
      <ProductImage
        img={product.colors[selectedColor]}
        name={product.name}
      />

      <div className="right-section">
        <ProductInfo product={product} />

        <ColorSelector
          colors={product.colors}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />

        <SizeSelector
          sizes={product.sizes}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />

        <QuantitySelector
          quantity={quantity}
          setQuantity={setQuantity}
        />

        <AddToCartButton
          product={product}
          selectedColor={selectedColor}
          selectedSize={selectedSize}
          quantity={quantity}
          update={update}
          setUpdate={setUpdate}
        />
      </div>
    </div>
  );
}
