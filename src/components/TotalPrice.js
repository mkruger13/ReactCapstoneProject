// Importing nessecary modules.
import React from "react";

// Component to display total price.
export default function TotalPrice({ totalPrice }) {
  return (
    <div className="total-price">
      <h2>Total Price: R{totalPrice}</h2>
    </div>
  );
}
