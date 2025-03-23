import React, { useEffect, useState } from "react";
import "./Home.css"; 


const Home: React.FC = () => {
  const [text, setText] = useState("");
  const fullText = "I am a Software Developer in making...";
  const typingSpeed = 100; // Speed of typing in milliseconds
  const eraseSpeed = 50; // Speed of erasing in milliseconds
  const pauseDuration = 1000; // Pause after typing and erasing in milliseconds

  useEffect(() => {
    let currentIndex = 0;
    let isTyping = true;

    const typingInterval = setInterval(
      () => {
        if (isTyping) {
          // Typing logic
          if (currentIndex < fullText.length) {
            setText(fullText.substring(0, currentIndex + 1));
            currentIndex++;
          } else {
            // Switch to erasing after a pause
            isTyping = false;
            setTimeout(() => {
              currentIndex = fullText.length - 1;
            }, pauseDuration);
          }
        } else {
          // Erasing logic
          if (currentIndex >= 0) {
            setText(fullText.substring(0, currentIndex));
            currentIndex--;
          } else {
            // Switch back to typing after a pause
            isTyping = true;
            setTimeout(() => {
              currentIndex = 0;
            }, pauseDuration);
          }
        }
      },
      isTyping ? typingSpeed : eraseSpeed
    );

    return () => clearInterval(typingInterval); // Cleanup interval on component unmount
  }, [fullText]);

  return (
    <div id="home" className="home-page">
      <div className="start">
        <h1>Hi! I am Samrudhi Rao</h1>
      </div>
      <h3>{text}</h3> {/* Typing animation here */}
      <h2>Welcome to my Portfolio 🚀</h2>
    </div>
  );
};

export default Home;
