import React from "react";
import { useNavigate } from "react-router-dom"; 
import railwayWashing from "../assets/Washingline.jpeg";
import "./WashingLine.css";

const WashingLine = () => {
  const navigate = useNavigate(); 

  const handleReadMoreClick = () => {
    navigate("/washing-line-details"); 
  };

  return (
    <div className="washing-line-container">
      <div className="info-wrapper">
        <div className="info-section top">
          <h3>What is a Washing Line?</h3>
          <p>
            In <strong>Indian Railways</strong>, a Washing Line is a designated
            area where
            <strong> trains undergo cleaning and minor maintenance</strong>{" "}
            before their next journey. This includes{" "}
            <strong>exterior and interior cleaning</strong>, basic repairs, and
            service checks.
          </p>
        </div>
        <div className="read-more-section">
          <button onClick={handleReadMoreClick} className="read-more-button">
            Read More
          </button>
        </div>

        <div className="image-section">
          <img src={railwayWashing} alt="Washing Line" />
        </div>

        <div className="info-section bottom">
          <h3>Functions of a Washing Line</h3>
          <div className="main-depo">
            <div>
              <strong>Exterior cleaning:</strong> Removing dust, dirt, and
              stains from the train’s body.
            </div>
            <div>
              <strong>Interior cleaning:</strong> Sweeping, mopping, and
              disinfecting the coaches.
            </div>
            <div>
              <strong>Water refilling:</strong> Filling overhead water tanks in
              the coaches.
            </div>
            <div>
              <strong>Trip schedule and scheduling maintenance: </strong> Side
              gear and under gear examination, air brake testing, draft and
              buffing gear maintenance.
            </div>
            <div>
              <strong>Body work : </strong> amenity items, electric equipment,
              and AC maintenance.
            </div>
          </div>
        </div>

       
      </div>

      <div className="side-info left">
        <h3>Main Depots in India</h3>
        <div className="main-depo">
          <div>
            <strong>Shakur Basti Depot</strong> (Delhi)
          </div>
          <div>
            <strong>Anand Vihar Terminal Depot</strong> (Delhi)
          </div>
          <div>
            <strong>Matunga Depot</strong> (Mumbai)
          </div>
          <div>
            <strong>Royapuram Depot</strong> (Chennai)
          </div>
          <div>
            <strong>Howrah Depot</strong> (Kolkata)
          </div>
        </div>
      </div>

      <div className="side-info right">
        <h3>Management and Operations</h3>
        <p>
          Washing lines are managed by the{" "}
          <strong>
            Indian Railways' Mechanical and Electrical Departments
          </strong>
          .<br />
          <strong>Cleaning staff:</strong> Handle daily cleaning tasks.<br />
          <strong>Maintenance staff:</strong> Carry out minor repairs.<br />
          <strong>Depot Manager:</strong> Oversees operations and quality checks.
        </p>
      </div>
    </div>
  );
};

export default WashingLine;
