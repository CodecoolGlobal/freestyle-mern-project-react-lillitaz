import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/account">User Account</Link>
        </li>
        <li>
          <Link to="/favorite">Favorite Movies</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
