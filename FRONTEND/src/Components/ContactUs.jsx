import React, { useState } from "react";
import axios from "axios";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    purpose: "",
    message: "",
  });

  const [status, setStatus] = useState("");  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/api/contact", formData);


      if (response.status === 201) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          purpose: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("Failed to send message. Try again.");
    }
  };

  return (
    <div className="contact-container" style={{ marginTop: "80px" }}>
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Contact Us</h2>

        <label>Your Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
        />

        <label>Email ID</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />

        <label>Purpose</label>
        <select
          name="purpose"
          value={formData.purpose}
          onChange={handleChange}
          required
        >
          <option value="">-- Select --</option>
          <option value="question">Question</option>
          <option value="feedback">Feedback</option>
          <option value="suggestion">Suggestion</option>
          <option value="other">Other</option>
        </select>

        <label>Your Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Type your message here"
          required
        />

        <button type="submit">Send Message</button>

        {status && <p className="status-message">{status}</p>}
      </form>
    </div>
  );
};

export default ContactUs;
