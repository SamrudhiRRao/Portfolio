import React, { useState } from "react";
import "./WorkExp.css"; // Import the CSS file

// Define a type for the keys of workExperiences
type ExperienceKey = "Job1" | "Job2" | "Job3" | "Job4";

const WorkExperience: React.FC = () => {
  // State to track the selected work experience
  const [selectedExperience, setSelectedExperience] =
    useState<ExperienceKey>("Job1");

  // Data for work experiences
  const workExperiences = {
    Job1: {
      title: "IBM (Previously Software AG) - Software Developer",
      description: [
        "Full Stack: Redeveloped internal tool using Python, Flask and React.",
        "Created automation scripts for Windows, MacOS and Linus.",
        "Created necessary Github actions for automating the process of a test cycle.",
        "Trained large language models (LLMs) to perform search-based contextual query.",
      ],
      duration: "July 2024 - Sept 2024",
    },
    Job2: {
      title: "Software AG  - Software Engineer II",
      description: [
        "Machine Learning: Developed robust search engine using BERT, Milvus, MongoDB, Elastic Search, and Indexes for contextual search.Employed TimeSeries, LSTM, GRU models for analysis. Worked on Jupiter Notebook.",
        "Automation: Leveraged Github Actions, Batch scripts for streamlined workflows. Conducted Suite Integration Testing with Jenkins for software reliability.",
        "Cloud: Solid foundation in Azure, AWS for seamless deployments, scalability.",
        "Demonstrated leadership, managed project timelines. Created Agile Board for efficient collaboration.",
      ],
      duration: "Jun 2018 - Dec 2019",
    },
    Job3: {
      title: "TCS - Cloud Intern",
      description: [
        "Focused on AWS cloud projects, managing EC2 instances, S3 volumes, AWS CLI and cloud resources and gained hands-on experience in cloud infrastructure provisioning and management.",
        "Contributed insights to cloud architecture discussions and created a Python library for automation.",
      ],
      duration: "May 2017 - Aug 2017",
    },
    Job4: {
      title: "Unisys - ML Intern",
      description: [
        "Worked on Layout LM, CNN, and Logistic Regression for document classification.",
        "Proficient in implementing ML algorithms, using Python, TensorFlow, and scikit-learn.",
        "Collaborated on data preprocessing, feature engineering, and model building.",
        "Conducted experiments, fine-tuned hyperparameters to enhance accuracy.",
      ],
      duration: "Jan 2016 - Apr 2017",
    },
    Job5: {
      title: "Cadence Design Systems - Technical Intern",
      description: [
        "Developed Python daemons, handled complex data structures, and multiple inputs.",
        "Used Linux scripting for task automation.",
        "Utilized multiple OS-related Python packages to enhance the functionality of the developed daemons",
      ],
      duration: "Jan 2016 - Apr 2017",
    },
  };

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
