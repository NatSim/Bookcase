import React from "react";
import Image1 from "../components/images/banner.jpeg";
import Image2 from "../components/images/banner2.jpeg";
import "./Banner.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
// import "react-slideshow-image/dist/styles.css";

const Slideshow = () => {
  return (
    <div className="row-home-container">
      <Slide>
        <div className="carousel-slide ">
          <div style={{ backgroundImage: `url(${Image1[0]})` }}>
            <img src={Image1} alt="book poster" />
          </div>
        </div>
        <div className="carousel-slide ">
          <div style={{ backgroundImage: `url(${Image2[1]})` }}>
            <img src={Image2} alt="books poster" />
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Slideshow;
