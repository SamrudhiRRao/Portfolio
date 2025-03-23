import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/AboutMe";
import WorkExperience from "./components/WorkExp";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";


const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <WorkExperience />
      <Education />
      <Skills />
      <Contact />
      {/* <div>
        <ProfileCard />
      </div> */}
    </div>
  );
};

export default App;
