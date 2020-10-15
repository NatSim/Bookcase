import React from "react";
import Link from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <div className="about-us">
      <h1>Welcome to the Bookcase Application</h1>
      <p>
        The following application was created by me, Natasha Simone. This
        bookcase app displays a list of books that a user can save to a local
        bookcase. Click on the "Add+" button to add a book to your bookcase. Use
        the search bar to find the latest books by name, author or description.
      </p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default About;
