import React from "react";
import { Link } from "react-router-dom";
import "../pages/app.css";

const Header = () => {
  // When the user scrolls the page, execute myFunction
  window.onscroll = function () {
    // Get the header
    var header = document.getElementById("nav-header");

    // Get the offset position of the navbar
    if (header) {
      var sticky = header.offsetTop;

      // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position

      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
  };

  return (
    <div className="header" id="nav-header">
      <ul className="nav-links">
        <Link to="/" className="home-link link">
          <li>| Home |</li>
        </Link>
        <Link to="/bookcase" className="book-link link">
          <li>| My Bookcase |</li>
        </Link>
        <Link to="/about" className="about-link link">
          <li>| About |</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
