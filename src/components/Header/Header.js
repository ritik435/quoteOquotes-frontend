import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="header">
      <h1>Quote-o-Quote</h1>
      <nav className="navigation">
        <ul
          className={
            isMenuOpen ? "nav-ul__link menu active" : "nav-ul__link menu"
          }>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {isAuthenticated && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          {isAuthenticated ? (
            <li>
              <button>Logout</button>
            </li>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
        <button
          className={isMenuOpen ? "burger active" : "burger"}
          onClick={handleMenuToggle}>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
