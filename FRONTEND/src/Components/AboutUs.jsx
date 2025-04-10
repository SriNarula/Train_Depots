import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-container" style={{ marginTop: "45px" }}>
      <div className="glass-card">
        <h1>About Us</h1>
        <p>
          Our platform showcases various depots of Washing Lines and Sick Lines
          on an interactive map.
        </p>
        <p>
          We highlight how data was previously managed using traditional
          paper-based methods and how it has been transformed into a digital
          system for better visualization and accessibility.
        </p>

        <p>
          This is a step towards modernizing and streamlining the way such
          information is stored, accessed, and presented.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;