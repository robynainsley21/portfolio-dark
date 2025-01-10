import { useState, useEffect } from "react";

const TextSlider = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [showCaret, setShowCaret] = useState(true);
  const [isTyping, setIsTyping] = useState(true);

  const roles = [
    "Full-Stack Developer",
    "Coffee Lover",
    "Reader",
    "Minecrafter",
  ];

  // Text animation effect
  useEffect(() => {
    const currentTitle = roles[currentTitleIndex];

    if (isTyping) {
      if (displayedText.length < currentTitle.length) {
        const timer = setTimeout(() => {
          setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
        }, 100);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setIsTyping(false);
        }, 1000);
        return () => clearTimeout(timer);
      }
    } else {
      if (displayedText.length > 0) {
        const timer = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timer);
      } else {
        // Explicitly move to the next index
        const nextIndex = (currentTitleIndex + 1) % roles.length;
        setCurrentTitleIndex(nextIndex);
        setIsTyping(true);
      }
    }
  }, [displayedText, currentTitleIndex, isTyping]);

  // Caret blinking effect
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setShowCaret(prev => !prev);
    }, 530);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div className="flex items-center rounded-lg mb-3">
      <div className="font-mono text-2xl animation_box">
        <span className="violet_text text_animation">{displayedText}</span>
        <span className={`ml-1 ${showCaret ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>
          |
        </span>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <div className="page_container" id="home">
        <div className="home_hero">
          <img
            src="https://robynainsley21.github.io/images/images/headshot.JPG"
            alt="home_img"
          />
          <div className="home_intro">
            <h4>
              Hi, I'm
              <h1 className="violet_text home_title">Robyn Carnow</h1>
            </h4>

            <TextSlider />

            <div className="home_details">
              {/* From Uiverse.io by cybrejon  */}
              <a
                className="resume_download"
                href="public\Digital Portfolio Guidline (1).pdf"
                download
              >
                <svg
                  viewBox="0 0 256 256"
                  height="32"
                  width="38"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M74.34 85.66a8 8 0 0 1 11.32-11.32L120 108.69V24a8 8 0 0 1 16 0v84.69l34.34-34.35a8 8 0 0 1 11.32 11.32l-48 48a8 8 0 0 1-11.32 0ZM240 136v64a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-64a16 16 0 0 1 16-16h52.4a4 4 0 0 1 2.83 1.17L111 145a24 24 0 0 0 34 0l23.8-23.8a4 4 0 0 1 2.8-1.2H224a16 16 0 0 1 16 16m-40 32a12 12 0 1 0-12 12a12 12 0 0 0 12-12"
                    fill="currentColor"
                  ></path>
                </svg>
                <span>Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
