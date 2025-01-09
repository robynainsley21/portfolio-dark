import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer.jsx";

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
        <Footer />
      </Router>
    </>
  );
}

export default App;
