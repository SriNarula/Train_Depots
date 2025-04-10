import React from "react";
import coachImage from "../assets/Sickline.jpeg"; 
import "./CoachMaintenance.css";

const CoachMaintenance = () => {
  return (
    <div className="coach-maintenance-container">
      <h2>Sickline Infrastructure & Facilities</h2>
      <img src={coachImage} alt="Sickline Infrastructure" className="maintenance-img" />

      <p>
        The <strong>Sickline</strong> is a specialized facility for attending to defective or sick coaches that need attention beyond normal maintenance.
      </p>

      <ul>
        <li>Covered shed accommodating <strong>4% of the base holding</strong> for berthing.</li>
        <li>Concrete apron with <strong>15 meter wide bays</strong> for efficient access and work.</li>
        <li><strong>35 meters</strong> provided for each coach for running out bogies.</li>
        <li>Each line holds a <strong>maximum of 4 coaches</strong>, with a minimum of <strong>50% pit coverage</strong> for undergear inspection.</li>
        <li>Equipped with <strong>20/5 T EOT crane</strong> and <strong>3/2 T hoist</strong> for heavy lifting.</li>
        <li><strong>Sickline yard</strong> has capacity for <strong>stabling 3 times the number of sick coaches</strong>.</li>
        <li>Floors are made of <strong>industrial heavy-duty material</strong> to withstand rigorous operations.</li>
        <li>Provision of <strong>Pit Wheel Lathe</strong> for wheel profiling on-site.</li>
        <li><strong>Wheel stabling lines</strong> are provided to store bogies or wheelsets.</li>
        <li>Ensured <strong>power backup via Genset</strong> for uninterrupted operations.</li>
      </ul>
    </div>
  );
};

export default CoachMaintenance;
