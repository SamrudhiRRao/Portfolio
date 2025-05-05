import React, { useEffect, useRef, ReactNode } from "react";
import "./StarryBackground.css"; // Import the CSS file

// Define the props interface
interface StarryBackgroundProps {
  children: ReactNode; // Explicitly define the children prop
}

const StarryBackground: React.FC<StarryBackgroundProps> = ({ children }) => {
  const starryRef = useRef<HTMLDivElement>(null);

  // Function to generate random stars
  useEffect(() => {
    const starryContainer = starryRef.current;
    if (starryContainer) {
      for (let i = 0; i < 100; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.width = `${Math.random() * 3}px`;
        star.style.height = star.style.width;
        star.style.animationDuration = `${Math.random() * 2 + 1}s`;
        starryContainer.appendChild(star);
      }
    }
  }, []);

  return (
    <div className="starry-background" ref={starryRef}>
      {/* Moving Planets */}
      <div className="planet planet-1"></div>
      <div className="planet planet-2"></div>
      {/* Children (e.g., Contact Form) */}
      {children}
    </div>
  );
};

export default StarryBackground;
