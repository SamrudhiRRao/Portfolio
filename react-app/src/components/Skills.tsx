import React from "react";
import "./Skills.css"; // Import the CSS file

// Import logos (replace with your actual logo paths)
import pythonLogo from "../assets/SkillLogos/python.svg";
import javaLogo from "../assets/SkillLogos/java.svg";
import javascriptLogo from "../assets/SkillLogos/js.svg";
import linuxLogo from "../assets/SkillLogos/linux.webp";
import windowsLogo from "../assets/SkillLogos/windows.svg";
import reactLogo from "../assets/SkillLogos/React.png";
import awsLogo from "../assets/SkillLogos/AWS.png";
import githubLogo from "../assets/SkillLogos/github.png";
import mongodbLogo from "../assets/SkillLogos/mongodb.png";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills-section">
      {/* Technical Skills */}
      <h2>Skills</h2>

      {/* Programming Languages */}
      <div className="skill-category">
        <h3>Programming Languages</h3>
        <div className="skill-box">
          <div className="skill-item">
            <img src={pythonLogo} alt="Python" />
            <p>Python</p>
          </div>
          <div className="skill-item">
            <img src={javaLogo} alt="Java" />
            <p>Java</p>
          </div>
          <div className="skill-item">
            <img src={javascriptLogo} alt="JavaScript" />
            <p>JavaScript</p>
          </div>
          {/* Add more logos for other programming languages */}
        </div>
      </div>

      {/* Operating Systems */}
      <div className="skill-category">
        <h3>Operating Systems</h3>
        <div className="skill-box">
          <div className="skill-item">
            <img src={linuxLogo} alt="Linux" />
            <p>Linux</p>
          </div>
          <div className="skill-item">
            <img src={windowsLogo} alt="Windows" />
            <p>Windows</p>
          </div>
          {/* Add more logos for other operating systems */}
        </div>
      </div>

      {/* Software and Tools */}
      <div className="skill-category">
        <h3>Software and Tools</h3>
        <div className="skill-box">
          <div className="skill-item">
            <img src={reactLogo} alt="React" />
            <p>React</p>
          </div>
          <div className="skill-item">
            <img src={awsLogo} alt="AWS" />
            <p>AWS</p>
          </div>
          <div className="skill-item">
            <img src={githubLogo} alt="GitHub" />
            <p>GitHub</p>
          </div>
          <div className="skill-item">
            <img src={mongodbLogo} alt="MongoDB" />
            <p>MongoDB</p>
          </div>
          {/* Add more logos for other tools */}
        </div>
      </div>

      {/* Language Skills */}
      <div className="skill-category">
        <h3>Language Skills</h3>
        <div className="language-skills">
          <div className="language-item">
            <strong>English</strong> - Fluent, C1 (IELTS)
          </div>
          <div className="language-item">
            <strong>German</strong> - Basic Knowledge, A2
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
