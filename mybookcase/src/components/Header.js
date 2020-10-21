import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>Online Book Store</h1>
      <Link to="/home" className="home-link link">
        Home
      </Link>
      <Link to="/bookcase" className="book-link link">
        Bookcase
      </Link>
      <Link to="/about" className="about-link link">
        About
      </Link>
    </div>
  );
};

export default Header;