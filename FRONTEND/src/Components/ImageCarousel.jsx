import React from "react";
import railway1 from "../assets/railway1.jpeg";
import railway2 from "../assets/railway2.jpeg";
import railway3 from "../assets/railway3.jpeg";
import railway4 from "../assets/railway4.jpeg";
import "./ImageCarousel.css";

function ImageCarousel() {
  return (
    <div
      id="carouselExample"
      className="carousel slide custom-carousel"
      data-bs-ride="carousel"
      data-bs-interval="2000"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={railway1}
            className="d-block w-100"
            alt="Railway 1"
          />
        </div>
        <div className="carousel-item">
          <img
            src={railway3}
            className="d-block w-100"
            alt="Railway 2"
          />
        </div>
        <div className="carousel-item">
          <img
            src={railway2}
            className="d-block w-100"
            alt="Railway 3"
          />
        </div>
        <div className="carousel-item">
          <img
            src={railway4}
            className="d-block w-100"
            alt="Railway 4"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default ImageCarousel;