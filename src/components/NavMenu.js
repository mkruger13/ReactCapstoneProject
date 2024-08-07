/* Navigation menu component: The menu will contain links to
the home, products, about and cart components, as well as user information. */

// Importing necessary modules.
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Navigation menu component.
export default function NavMenu() {
  const username = useSelector((state) => state.user.username);

  // Return the navigation menu.
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        {username && <li>Welcome, {username}!</li>}
      </ul>
    </nav>
  );
}
