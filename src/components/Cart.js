/* Purpose: This file contains the Cart component which is responsible
for rendering the cart page. The user can manage the cart and add shipping. */

// Importing necessary modules.
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./Cart.css";

export default function Cart({ cartItems, setCartItems }) {
  const [shipping, setShipping] = useState(null);
  const [showInfo, setShowInfo] = useState(false);

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleSelectShipping = (option) => {
    setShipping(option);
  };

  const totalPrice =
    cartItems.reduce((sum, item) => sum + item.price, 0) +
    (shipping === "shipping" ? 70 : shipping === "pickup" ? 30 : 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.title} - R{item.price}
                <Button
                  variant="danger"
                  onClick={() => handleRemoveItem(item.id)}>
                  Remove
                </Button>
              </li>
            ))}
          </ul>
          <div className="shipping-options">
            <label>
              <input
                type="radio"
                name="shipping"
                onChange={() => handleSelectShipping("shipping")}
              />
              Shipping (R70)
              <Button variant="info" onClick={() => setShowInfo(true)}>
                i
              </Button>
            </label>
            <label>
              <input
                type="radio"
                name="shipping"
                onChange={() => handleSelectShipping("pickup")}
              />
              Pickup (R30)
            </label>
          </div>
          <h3>Total Price: R{totalPrice}</h3>
        </>
      )}
      <Modal show={showInfo} onHide={() => setShowInfo(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Shipping Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Shipping will be delivered within 3-5 business days...
          {/* Add more shipping info. */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowInfo(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
