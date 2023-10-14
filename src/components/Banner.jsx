import React from "react";
import banner from "../assets/img/banner.svg";
import "../assets/styles/banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <img src={banner} style={{ width: "100%" }}></img>
      <div className="banner-text">
        <h2>Computer Engineering</h2>
        <p>142,765 Computer Engineer follow this</p>
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default Banner;
