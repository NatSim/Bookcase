import React from "react";
import { Link } from "react-router-dom";
import "../Pages/App.css";

const Header = () => {
  return (
    <div className="header">
      <ul className="nav-links">
        <Link to="/" className="home-link link">
          <li>| Home |</li>
        </Link>
        <Link to="/bookcase" className="book-link link">
          <li>| Bookcase |</li>
        </Link>
        <Link to="/about" className="about-link link">
          <li>| About |</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
