import React from "react";
import { useInView } from "react-intersection-observer"; // Import useInView
import "./Education.css"; // Import the CSS file

// Import college logos
import mastersLogo from "../assets/logoPassau.svg";
import bachelorsLogo from "../assets/logoPesu.png";

const Education: React.FC = () => {
  // Use the useInView hook to detect when the Education section is in the viewport
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.5, // Trigger when 50% of the section is visible
  });

  return (
    <section id="education" className="education-section" ref={ref}>
      {/* Education Title */}
      <h2>Education</h2>

      {/* Timeline Container */}
      <div className="timeline">
        {/* Vertical Line */}
        <div className="vertical-line"></div>

        {/* Masters Degree (Right Side) */}
        <div className={`timeline-item right ${inView ? "fade-in" : ""}`}>
          <div className="timeline-content">
            <h3>Masters in Computer Science</h3>
            <p>University of Passau</p>
            <p>Passau, Bavaria, Germany</p>
            <p>Oct 2024 - Present</p>
          </div>
        </div>

        {/* Bachelors Degree (Left Side) */}
        <div className={`timeline-item left ${inView ? "fade-in-delay" : ""}`}>
          <div className="timeline-content">
            <h3>Bachelors in Computer Science</h3>
            <p>PES University</p>
            <p>Bangalore, India</p>
            <p>Aug 2018 - Aug 2022</p>
          </div>
        </div>
        {/* College Logos on the Vertical Line */}
        <div className="logo masters-logo">
          <img src={mastersLogo} alt="Masters Logo" />
          <div className="connecting-line"></div>{" "}
          {/* Line pointing to Masters box */}
        </div>
        <div className="logo bachelors-logo">
          <img src={bachelorsLogo} alt="Bachelors Logo" />
          <div className="connecting-line"></div>{" "}
          {/* Line pointing to Bachelors box */}
        </div>
      </div>
    </section>
  );
};

export default Education;
