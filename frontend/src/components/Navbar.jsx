import "./Navbar.css";

import { Link } from "react-router-dom";

function Navbar() {

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">

        <Link to="/">
          🎮 Gaming Store
        </Link>

      </div>

      {/* Navigation Links */}
      <ul className="nav-links">

        <li>
          <Link to="/">
            Home
          </Link>
        </li>

        <li>
          <Link to="/products">
            Products
          </Link>
        </li>

        <li>
          <Link to="/about">
            About
          </Link>
        </li>

        <li>
          <Link to="/contact">
            Contact
          </Link>
        </li>

      </ul>

      {/* Right Side Buttons */}
      <div className="nav-buttons">

        <Link to="/login">
          <button className="login-btn">
            Login
          </button>
        </Link>

        <Link to="/register">
          <button className="register-btn">
            Register
          </button>
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;