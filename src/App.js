// Main app component for application web-store.

// Importing necessary modules and components.
import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import NavMenu from "./components/NavMenu.js";
import Home from "./components/Home.js";
import Products from "./components/Products.js";
import About from "./components/About.js";
import Cart from "./components/Cart.js";
import TotalPrice from "./components/TotalPrice.js";
import Register from "./components/Register.js";
import Login from "./components/Login.js";
import { addToCart } from "./store/actions.js";

export default function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  // State to control visibility of total price.
  const [showTotalPrice, setShowTotalPrice] = useState(false);

  // Function to update price and cart.
  const handleBuy = (item) => {
    // Debugging: Log item added to cart.
    console.log("Item added to cart:", item);
    dispatch(addToCart(item));
    setShowTotalPrice(true);
    // Debugging: Log showTotalPrice state.
    console.log("showTotalPrice set to true");
  };

  // useEffect hook to log showTotalPrice state changes.
  useEffect(() => {
    console.log("showTotalPrice changed:", showTotalPrice);
  }, [showTotalPrice]);

  // Condition to check current route.
  const isProductsPage = location.pathname === "/products";

  // Debugging: Log current route and showTotalPrice state.
  console.log("isProductsPage:", isProductsPage);
  console.log("showTotalPrice:", showTotalPrice);

  return (
    <div className="App">
      {/* Menu for Application */}
      <NavMenu />
      {/* Display total price and apply classname only when on products page. */}
      <div className={isProductsPage ? "main-content" : ""}>
        {isProductsPage && showTotalPrice && <TotalPrice />}
        {/* Routes for different pages. */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/products"
            element={<Products handleBuy={handleBuy} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}
