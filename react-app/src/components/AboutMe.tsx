import React from "react";
import "./AboutMe.css"; // Import the CSS file

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      {/* About Me Title */}
      <h2>About Me</h2>

      {/* Content Container */}
      <div className="about-content">
        {/* Left Section (25%) - Photo and Social Links */}
        <div className="left-section">
          <img
            src="../assets/Samrudhi_Photo.jpg" // Replace with the path to your photo
            alt="Samrudhi Rao"
            className="profile-photo"
          />
          <div className="social-links">
            <a
              href="https://github.com/SamrudhiRRao" // Replace with your GitHub URL
              target="_blank"
              rel="noopener noreferrer"
              className="social-button"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/samrudhi-rao" // Replace with your LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
              className="social-button"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right Section (75%) - Bullet Points */}
        <div className="right-section">
          <ul>
            <li className="emoji-star">
              Passionate software developer with expertise in modern web
              technologies.
            </li>
            <li className="emoji-rocket">
              Proficient in JavaScript, React, Node.js, and Python.
            </li>
            <li className="emoji-bulb">
              Experience in building scalable and user-friendly web
              applications.
            </li>
            <li className="emoji-heart">
              Strong problem-solving skills and a love for clean, efficient
              code.
            </li>
            <li className="emoji-globe">
              Always eager to learn and explore new technologies.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
