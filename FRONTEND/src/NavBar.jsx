import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./NavBar.css";

export default function NavBar({ exploreRef }) {
  const [isResponsive, setIsResponsive] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("transparent");

  const toggleIcon = () => {
    setIsResponsive(!isResponsive);
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setBackgroundColor("rgba(255, 255, 255, 0.3)");
    } else {
      setBackgroundColor("transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="NavBar"
      style={{ backgroundColor, transition: "background-color 0.5s ease" }}
    >
      <div className="logo">{/* <img src={logo} alt="Logo" /> */}</div>

      <ul className={isResponsive ? "navlink mobile" : "navlink"}>
        <li>
          <Link to="/">
            <i className="fas fa-home"></i> Home
          </Link>
        </li>
        <li>
          <Link to="/Map">
            <i className="fas fa-compass"></i> Depot Atlas
          </Link>
        </li>
        <li>
          <Link to="/about">
            <i className="fas fa-info-circle"></i> About Us
          </Link>
        </li>
        <li>
          <Link to="/ContactUs">
            <i className="fas fa-envelope"></i> Contact Us
          </Link>
        </li>
      </ul>

      <button className="menu-icon" onClick={toggleIcon}>
        {isResponsive ? <>&#10005;</> : <>&#9776;</>}
      </button>
    </div>
  );
}