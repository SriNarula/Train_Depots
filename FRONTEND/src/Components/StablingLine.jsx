import React from "react";
import "./StablingLine.css";

const StablingLine = () => {
  return (
    <div className="stabling-line-container">
      <div className="info-wrapper">
        <div className="info-section top">
          <h3>What is a Stabling Line?</h3>
          <p>
            In <strong>Indian Railways</strong>, a Stabling Line is a designated area
            where <strong>the train's journey ends</strong>. It focuses on safety,
            minor maintenance, and mechanical checks before the train is allowed to
            stand idle or return to operation.
          </p>
        </div>

        <div className="image-section">
          <img
            src="https://th-i.thgim.com/public/incoming/mtnwdw/article67529059.ece/alternates/FREE_1200/10505_13_11_2023_17_27_30_1_IMG_3646.JPEG"
            alt="Stabling Line"
          />
        </div>

        <div className="info-section bottom">
          <h3>Functions of a Stabling Line</h3>
          <div className="main-depo">
            <div>
              <strong>Temporary Parking:</strong> Holding trains during non-operational hours.
            </div>
            <div>
              <strong>Watering:</strong> Refilling water tanks for onboard use.
            </div>
            <div>
              <strong>Power Charging:</strong> Supplying electrical power for essential systems.
            </div>
            <div>
              <strong>Toilet Cleaning:</strong> Servicing and maintaining coach toilets.
            </div>
            <div>
              <strong>Train Cleaning & Light Maintenance:</strong> Exterior and interior cleaning,
              minor mechanical inspections, and quick fixes to ensure readiness.
            </div>
          </div>
        </div>
      </div>

      <div className="side-info left">
        <h3>Major Stabling Lines in India</h3>
        <div className="main-depo">
          <div><strong>Shakur Basti Stabling Yard</strong> (Delhi)</div>
          <div><strong>Howrah Stabling Line</strong> (Kolkata)</div>
          <div><strong>Churchgate Stabling Yard</strong> (Mumbai)</div>
          <div><strong>Bangalore City Stabling</strong> (Bangalore)</div>
          <div><strong>Secunderabad Stabling</strong> (Hyderabad)</div>
        </div>
      </div>

      <div className="side-info right">
        <h3>Management and Operations</h3>
        <p>
          Stabling lines are managed by the{" "}
          <strong>Indian Railways' Mechanical and Operations Departments</strong>.
        </p>
        <p>
          <strong>Security Staff:</strong> Ensure the safety of parked trains.<br />
          <strong>Maintenance Teams:</strong> Perform minor servicing tasks.<br />
          <strong>Railway Controllers:</strong> Manage train movements and scheduling.
        </p>
      </div>
    </div>
  );
};

export default StablingLine;
