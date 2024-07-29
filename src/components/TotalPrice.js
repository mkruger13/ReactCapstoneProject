// Importing nessecary modules.
import React from "react";

// Component to display cart summary and total price.
export default function TotalPrice({ cartItems, totalPrice }) {
  return (
    <div className="total-price">
      <h2>Cart Summary</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.title} - R{item.price}
          </li>
        ))}
      </ul>
      <h3>Total Price: R{totalPrice}</h3>
    </div>
  );
}
