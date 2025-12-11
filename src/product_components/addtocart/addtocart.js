import "./addtocart.css";

import { addToCart, updateQuantity } from "../../utils/cartutils";

export default function AddToCartButton({
  product,
  selectedColor,
  selectedSize,
  quantity,
  update,
  setUpdate
}) {
  return (
    <button
      className="add-to-cart-btn"
      onClick={() =>{
        if (!selectedSize) {
          alert("Please select size before adding to cart.");
          return;
        }
        if (update) {
          updateQuantity(
            product.id,
            selectedColor,
            selectedSize,
            quantity
          );
        alert("Item updated in cart!");
        }
        else {
          if (quantity === 0) {
            alert("Please select quantity before adding to cart.");
            return;
          }
        addToCart({
          id: product.id,
          color: selectedColor,
          size: selectedSize,
          quantity: quantity
        });
        alert("Item added to cart!");
        }
        setUpdate(true);
      }
      }
    >
      {update ? "Update Cart" : "Add to Cart"}
    </button>
  );
}
