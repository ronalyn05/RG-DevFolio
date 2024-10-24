// src/components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo1.png";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <button className="navbar-toggle" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? (
          <span className="close-icon">✖</span> // Close icon
        ) : (
          <span className="navbar-toggle-icon">☰</span> // Hamburger icon
        )}
      </button>
      <ul className={`navbar-links ${isMobileMenuOpen ? "open" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
