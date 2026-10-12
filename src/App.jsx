import React, { useState } from "react";
import "./App.css";

import Slide1 from "./slides/Slide1";

import Slide4 from "./slides/Slide4";

import Slide6 from "./slides/Slide6";
import Slide7 from "./slides/Slide7";

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const slides = {
    1: Slide1,
   
   
    2: Slide4,
    
    3: Slide6,
    4: Slide7,
  };

  const CurrentSlide = slides[currentSlide];

  return (
    <div>
      <CurrentSlide onNavigate={setCurrentSlide} />
    </div>
  );
};

export default App;