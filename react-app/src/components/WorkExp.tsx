import React, { useState } from "react";
import "./WorkExp.css"; // Import the CSS file
import workExperiences from "./Job";


// Define a type for the keys of workExperiences
type ExperienceKey = "Job1" | "Job2" | "Job3" | "Job4";

const WorkExperience: React.FC = () => {
  // State to track the selected work experience
  const [selectedExperience, setSelectedExperience] =
    useState<ExperienceKey>("Job1");

  // // Data for work experiences
  // const workExperiences = WorkExperiences;

  return (
    <section id="work-experience" className="work-experience-section">
      {/* Work Experience Title */}
      <h2>Work Experience</h2>

      {/* Content Container */}
      <div className="work-experience-content">
        {/* Left Section (25%) - Bold Bullet Points */}
        <div className="left-section">
          <ul>
            {(Object.keys(workExperiences) as ExperienceKey[]).map((key) => (
              <li
                key={key}
                className={selectedExperience === key ? "active" : ""}
                onClick={() => setSelectedExperience(key)}
              >
                {workExperiences[key].title}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section (75%) - Detailed Information */}
        <div className="right-section">
          <h3>{workExperiences[selectedExperience].title}</h3>
          <ul>
            {workExperiences[selectedExperience].description.map(
              (point, index) => (
                <li key={index}>{point}</li>
              )
            )}
          </ul>
          <p>
            <strong>Duration:</strong>{" "}
            {workExperiences[selectedExperience].duration}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
