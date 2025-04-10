import React from 'react';
import "./WashingLineDetails.css";
const WashingLineDetails = () => {
    return (
      <div className="details-page">
        <h2>Primary Examination</h2>
        <p><strong>Location:</strong> Primary maintenance depot (where the rake is allotted).</p>
        <p><strong>Purpose:</strong> Thorough examination and maintenance of the train, including undergear inspection, brake system checks, and addressing any defects.</p>
        <ul>
          <li>Rolling-in examination (including axle box feeling)</li>
          <li>Inspection and repair of running gear fittings, brake gear, spring gear, and draw and buffing gear</li>
          <li>Checking and making good safety fittings, brackets, and loops</li>
          <li>Replacement of brake blocks</li>
          <li>Ensuring correct brake power as per requirements</li>
          <li>Preparing DRS card and history card of the coach</li>
          <li>Ensuring proper supply of brake van equipment for originating trains</li>
          <li>Sending coaches for POH or NPOH as per requirement</li>
          <li>Intensive attention to brake gearing, slack adjuster 'A' dimension, and brake cylinder stroke</li>
          <li>Replacing missing passenger amenity fittings</li>
          <li>Intensive cleaning of coach toilets</li>
        </ul>
        <p><strong>Documentation:</strong> Brake Power Certificate (BPC)</p>
  
        <h2>Secondary Examination</h2>
        <p><strong>Location:</strong> Terminal stations</p>
        <p><strong>Purpose:</strong> Ensures the train is fit for its return trip</p>
        <ul>
          <li>Checking and certifying the train for return trip</li>
          <li>Brake system check before start at platform</li>
          <li>Continuity check and BPC endorsement</li>
        </ul>
      </div>
    );
  };
  
  export default WashingLineDetails;
  