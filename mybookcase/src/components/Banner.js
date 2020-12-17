import React from "react";
import Image from "../Components/images/Banner.jpeg";

const Banner = () => {
  return (
    <>
      <div className="row-home"></div>
      <div>
        <img className="banner-xmas" src={Image} alt="Christmas Book set" />
      </div>
    </>
  );
};

export default Banner;
