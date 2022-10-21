import React from "react";
import "./index.css";
import prev from "../../assets/icons/prev-icon.png";
import next from "../../assets/icons/next-icon.png";
import { carouselData } from "../../data";

const Carousel = () => {
  return (
    <div className="carousel-container">
      <img className="buttons" src={prev} alt="" />
      <img className="carousel-image" src={carouselData[0].url} alt="" />
      <img className="buttons" src={next} alt="" />
    </div>
  );
};

export default Carousel;
