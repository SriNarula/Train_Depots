import React from "react";
import { motion } from "framer-motion";
import CompareImage from "react-compare-image";
import paperImg from "../assets/pre.jpeg";   
import digitalImg from "../assets/post.jpeg"; 
import "./Preandpost.css";

const Preandpost = () => {
  return (
    <div className="comparison-container">
      <motion.h2
        className="heading"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Transformation from Paper to Digtal
      </motion.h2>

      <div className="comparison-content">
        <motion.div
          className="image-comparison smaller-slider"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <CompareImage
            leftImage={paperImg}
            rightImage={digitalImg}
            sliderLineColor="#3498db"
            sliderLineWidth={4}
          />
        </motion.div>

  
        <div className="card-section">
          <motion.div
            className="info-card before-card"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={paperImg} alt="Paper Records" className="card-image" />
            <div className="card-overlay">
              <h3>Before: Paper-Based Maintenance</h3>
              <p>
                <strong>Manual Logs:</strong> Handwritten records prone to errors.  
                <br />
                <strong>Time-consuming:</strong> Slow retrieval and verification.  
                <br />
                <strong>Limited accuracy:</strong> Inconsistencies and data loss.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="info-card after-card"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={digitalImg} alt="Digital Records" className="card-image" />
            <div className="card-overlay">
              <h3>After: Digital Maintenance Records</h3>
              <p>
                <strong>Automated Logs:</strong> Real-time digital data logging.  
                <br />
                <strong>Efficiency:</strong> Faster access and improved accuracy.  
                <br />
                <strong>Data Security:</strong> Cloud storage prevents data loss.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Preandpost;
