import React from "react";
import { Link } from "react-router-dom";
import railwaySick from "../assets/sickline1.jpeg"; 
import "./SickLine.css";

const SickLine = () => {
  return (
    <div className="sick-line-container">
      <div className="info-wrapper">
        <div className="info-section top">
          <h3>What is a Sick Line?</h3>
          <p>
            In <strong>Indian Railways</strong>, a Sick Line is a designated area where 
            <strong> trains with mechanical or electrical issues</strong> are taken for repairs and maintenance. 
            It is used for <strong>servicing, inspection, and minor repairs</strong> that do not require extensive workshop attention.
          </p>
        </div>
        <div className="read-more-button">
        <Link to="/coach-maintenance">
          <button className="read-more">Read More</button>
        </Link>
      </div>

        <div className="image-section">
          <img src={railwaySick} alt="Sick Line" />
        </div>

        <div className="info-section bottom">
          <h3>Functions of a Sick Line</h3>
          <div className="list-no-bullets">
            <div><strong>Inspection:</strong> Identifying faults in the train’s mechanical or electrical systems.</div>
            <div><strong>Major repairs:</strong> Fixing issues like brake failures, lighting, or air conditioning faults.</div>
            <div><strong>Component replacement:</strong> Replacing worn-out parts.</div>
            <div><strong>Servicing:</strong> Lubrication, oiling, and minor cleaning tasks.</div>
          </div>
        </div>
      </div>

      <div className="side-info left">
        <h3>Main Sick Line Depots in India</h3>
        <div className="list-no-bullets">
          <div><strong>Delhi Depot</strong> (Delhi)</div>
          <div><strong>Vikroli Depot</strong> (Mumbai)</div>
          <div><strong>Bally Depot</strong> (Kolkata)</div>
          <div><strong>Ghorpadi Depot</strong> (Pune)</div>
          <div><strong>Bangalore Depot</strong> (Bangalore)</div>
        </div>
      </div>

      <div className="side-info right">
        <h3>Management and Operations</h3>
        <p>
          Sick lines are managed by the <strong>Indian Railways' Mechanical and Electrical Departments</strong>.  
          <br /><strong>Repair staff:</strong> Perform minor repairs and replacements.  
          <br /><strong>Technicians:</strong> Inspect and service the train’s components.  
          <br /><strong>Depot Manager:</strong> Supervises the operations and ensures timely maintenance.  
        </p>
      </div>
      
      
    </div>
  );
};

export default SickLine;
