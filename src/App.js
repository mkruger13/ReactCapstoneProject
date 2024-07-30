// Main app component for application web-store.

// Importing necessary modules and components.
import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NavMenu from "./components/NavMenu.js";
import Home from "./components/Home.js";
import Products from "./components/Products.js";
import About from "./components/About.js";
import Cart from "./components/Cart.js";
import TotalPrice from "./components/TotalPrice.js";

export default function App() {
  const location = useLocation();
  const [cartItems, setCartItems] = useState([]);
  // State to control visibility of total price.
  const [showTotalPrice, setShowTotalPrice] = useState(false);

  // Function to update price and cart.
  const handleBuy = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
    setShowTotalPrice(true);
  };

  // Condition to check current route.
  const isProductsPage = location.pathname === "/products";

  return (
    <div className="App">
      {/* Menu for Application */}
      <NavMenu />
      {/* Display total price and apply classname only when on products page. */}
      <div className={isProductsPage ? "main-content" : ""}>
        {isProductsPage && showTotalPrice && (
          <TotalPrice cartItems={cartItems} />
        )}
        {/* Routes for different pages. */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/products"
            element={<Products handleBuy={handleBuy} />}
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
          />
        </Routes>
      </div>
    </div>
  );
}
