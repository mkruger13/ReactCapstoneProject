// Importing nessecary modules.
import React from "react";
import { useSelector } from "react-redux";
import "./TotalPrice.css";

// Component to display cart summary and total price.
export default function TotalPrice() {
  // Get cart items from redux store.
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Check if cartItems is an array.
  if (!Array.isArray(cartItems)) {
    console.error("cartItems is not an array:", cartItems);
    return null;
  }

  // Debugging: Log cartItems to see its structure.
  console.log("TotalPrice component - cartItems:", cartItems);

  // Calculate total price ensuring all items have a price.
  const totalPrice = cartItems.reduce((acc, item) => {
    if (item && typeof item.price === "number") {
      return acc + item.price;
    } else {
      console.error("Invalid item in cartItems:", item);
      return acc;
    }
  }, 0);

  // Function to format price.
  const formatPrice = (price) =>
    price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // Debugging: Log total price.
  console.log("Total price:", totalPrice);

  return (
    <div className="total-price-container">
      <h2>Cart Summary</h2>
      <ul className="cart-items-list">
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.title ? item.title : "Unknown Item"} -{" "}
            {item.selectedColor ? `Color: ${item.selectedColor}, ` : ""}R
            {item.price ? formatPrice(item.price) : "N/A"}
          </li>
        ))}
      </ul>
      <h3>Total Price: R{formatPrice(totalPrice)}</h3>
    </div>
  );
}
