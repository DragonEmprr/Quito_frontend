// Key used in localStorage
const CART_KEY = "factory_cart";

// ----------------------------
// Get Cart
// ----------------------------
export function getCart() {
  const cart = localStorage.getItem(CART_KEY);
  return cart ? JSON.parse(cart) : [];
}

export function searchCartItemById(id) {
  const cart = getCart();
  const ret = cart.filter(
    (item) =>
      item.id === id
  );

  return ret;
}

export function searchCartItem(id, color, size) {
  const cart = getCart();
  const ret = cart.find(
    (item) =>
      item.id.toString() === id &&
      item.color === color &&
      item.size === size
  );

  return ret;
}


// ----------------------------
// Save Cart
// ----------------------------
function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

// ----------------------------
// Add To Cart
// ----------------------------
export function addToCart(newItem) {
  let cart = getCart();

  // Check if item already exists (same id + color + size)
  const existingItemIndex = cart.findIndex(
    (item) =>
      item.id === newItem.id &&
      item.color === newItem.color &&
      item.size === newItem.size
  );

  if (existingItemIndex !== -1) {
    // If item exists -> update quantity
    cart[existingItemIndex].quantity += newItem.quantity;
  } else {
    // Otherwise add new item
    cart.push(newItem);
  }

  saveCart(cart);
}

// ----------------------------
// Update Quantity
// ----------------------------
export function updateQuantity(id, color, size, newQty) {
  let cart = getCart();

  if (newQty <= 0) {
    removeFromCart(id, color, size);
    return;
  }

  cart = cart.map((item) => {
    if (item.id === id && item.color === color && item.size === size) {
      return { ...item, quantity: newQty };
    }
    return item;
  });

  saveCart(cart);
}

// ----------------------------
// Remove Item
// ----------------------------
export function removeFromCart(id, color, size) {
  let cart = getCart();

  cart = cart.filter(
    (item) =>
      !(item.id === id && item.color === color && item.size === size)
  );

  saveCart(cart);
}

// ----------------------------
// Clear Cart
// ----------------------------
export function clearCart() {
  localStorage.removeItem(CART_KEY);
}
