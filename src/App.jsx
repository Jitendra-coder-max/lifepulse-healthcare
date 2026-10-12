import React, { useEffect, useState } from "react";
import "./App.css";

import Slide1 from "./slides/Slide1";

import Slide4 from "./slides/Slide4";

import Slide6 from "./slides/Slide6";
import Slide7 from "./slides/Slide7";

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [scale, setScale] = useState(() =>
    typeof window === "undefined" ? 1 : Math.min(1, window.innerWidth / 1024)
  );

  useEffect(() => {
    const updateScale = () => setScale(Math.min(1, window.innerWidth / 1024));
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  const slides = {
    1: Slide1,
   
   
    2: Slide4,
    
    3: Slide6,
    4: Slide7,
  };

  const CurrentSlide = slides[currentSlide];

  return (
    <div
      className="slide-viewport"
      style={{
        "--slide-scale": scale,
        height: `${768 * scale}px`,
      }}
    >
      <div className="slide-canvas">
        <CurrentSlide onNavigate={setCurrentSlide} />
      </div>
    </div>
  );
};

export default App;