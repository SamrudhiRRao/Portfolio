import React from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll
import "./Navbar.css"; // Ensure this file exists and is correctly imported
import Home from "./Home";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar-main">
      <div className="navbar-brand">
        <a href="/Home" style={{ textDecoration: "none" }}>
          MyApp
        </a>
      </div>
      <div className="navbar-links">
        <ul>
          <li>
            <Link
              to="about" // ID of the About section
              smooth={true} // Enable smooth scrolling
              duration={50} // Scroll duration in milliseconds
              className="nav-button"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="work-experience" // ID of the Work Experience section
              smooth={true} // Enable smooth scrolling
              duration={50} // Scroll duration in milliseconds
              className="nav-button"
            >
              Work Experience
            </Link>
          </li>
          <li>
            <Link
              to="education" // ID of the Work Experience section
              smooth={true} // Enable smooth scrolling
              duration={50} // Scroll duration in milliseconds
              className="nav-button"
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              to="skills" // ID of the Work Experience section
              smooth={true} // Enable smooth scrolling
              duration={50} // Scroll duration in milliseconds
              className="nav-button"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="contact" // ID of the Work Experience section
              smooth={true} // Enable smooth scrolling
              duration={50} // Scroll duration in milliseconds
              className="nav-button"
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
