import React from "react";
import Image1 from "../Components/images/Banner.jpeg";
import Image2 from "../Components/images/Banner2.jpeg";
import "./Banner.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
// import "react-slideshow-image/dist/styles.css";

const slideImages = [{ Image1 }, { Image2 }];

const Slideshow = () => {
  return (
    <div className="row-home-container">
      <Slide>
        <div className="carousel-slide ">
          <div style={{ backgroundImage: `url(${Image1[0]})` }}>
            <img src={Image1}></img>
          </div>
        </div>
        <div className="carousel-slide ">
          <div style={{ backgroundImage: `url(${Image2[1]})` }}>
            <img src={Image2}></img>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Slideshow;
