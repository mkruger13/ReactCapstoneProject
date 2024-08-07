/* Purpose: This file contains the Cart component which is responsible
for rendering the cart page. The user can manage the cart and add shipping. */

// Importing necessary modules.
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, setShipping } from "../store/actions.js";
import { Button, Modal } from "react-bootstrap";
import "./Cart.css";

// Cart component.
export default function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const shipping = useSelector((state) => state.cart.shipping);
  const dispatch = useDispatch();
  const [showInfo, setShowInfo] = useState(false);

  // Function to remove an item from the cart.
  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  // Function to select shipping method.
  const handleSelectShipping = (option) => {
    dispatch(setShipping(option));
  };

  // Calculate total price.
  const totalPrice =
    cartItems.reduce((sum, item) => sum + item.price, 0) +
    (shipping === "shipping" ? 70 : shipping === "pickup" ? 30 : 0);

  // Function to format price.
  const formatPrice = (price) =>
    price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="cart-item-details">
                <div className="cart-item-name">{item.title}</div>
                <div className="cart-item-color">
                  {item.selectedColor ? `Color: ${item.selectedColor}` : ""}
                </div>
                <div className="cart-item-price">
                  R{formatPrice(item.price)}
                </div>
              </div>
              <Button
                variant="link"
                className="remove-button"
                onClick={() => handleRemoveItem(item.id)}>
                <i className="bi bi-trash"></i> Remove
              </Button>
            </div>
          ))}
          <div className="shipping-options">
            <label>
              <input
                type="radio"
                name="shipping"
                onChange={() => handleSelectShipping("shipping")}
              />
              Delivery (R70)
            </label>
            <label>
              <input
                type="radio"
                name="shipping"
                onChange={() => handleSelectShipping("pickup")}
              />
              Pickup (R30)
              <Button
                variant="link"
                className="info-button"
                onClick={() => setShowInfo(true)}>
                <i className="bi bi-info-circle"></i>
              </Button>
            </label>
          </div>
          <h3>Total Price: R{formatPrice(totalPrice)}</h3>
        </>
      )}
      <Modal show={showInfo} onHide={() => setShowInfo(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Shipping Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Computer Technology offers two safe and convenient methods for
            receiving your order:
          </p>
          <ul>
            <li>
              <strong>Delivery</strong> - We courier directly to your door,
              anywhere in South Africa. All delivery details are provided at
              checkout.
            </li>
            <li>
              <strong>Collect</strong> - You can choose to collect from a
              Computer Technology store near you.
            </li>
          </ul>
          <p>
            All delivery is charged at R70 for major metropolitan areas. Pricing
            for other areas will be calculated at checkout.
          </p>
          <p>Collection of orders are charged at a flat fee of R30.</p>
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
