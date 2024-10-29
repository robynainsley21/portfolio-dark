import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./assets/components/Navbar";

/**pages */
import Home from "../src/assets/pages/Home.jsx";
import About from "../src/assets/pages/About.jsx";
import Projects from "../src/assets/pages/Projects.jsx";
import Resume from "../src/assets/pages/Resume.jsx";
import Contact from "../src/assets/pages/Contact.jsx";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>

      <div className="gradient-bg">
        <svg
          viewBox="0 0 100vw 100vw"
          xmlns="http://www.w3.org/2000/svg"
          className="noiseBg"
        >
          <filter id="noiseFilterBg">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.6"
              stitchTiles="stitch"
            />
          </filter>

          <rect
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid meet"
            filter="url(#noiseFilterBg)"
          />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="svgBlur">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div className="interactive"></div>
        </div>
      </div>
    </>
  );
}

export default App;
