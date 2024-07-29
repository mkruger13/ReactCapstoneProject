/* Navigation menu component: The menu will contain links to
the home, products and the about components. */

// Importing necessary modules.
import React from "react";
import { Link } from "react-router-dom";

export default function NavMenu() {
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
      </ul>
    </nav>
  );
}
