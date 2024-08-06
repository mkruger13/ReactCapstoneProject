/* Navigation menu component: The menu will contain links to
the home, products, about and cart components, as well as user information. */

// Importing necessary modules.
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function NavMenu() {
  const username = useSelector((state) => state.user.username);

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
        {username && <li>Welcome, {username}!</li>}
      </ul>
    </nav>
  );
}
