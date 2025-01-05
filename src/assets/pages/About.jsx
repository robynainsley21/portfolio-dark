import React, { useState, useEffect } from "react";

//components
import AboutInterests from "../components/aboutInterests";
import MusicPlayerSlider from "../components/musicComp";
import BookAnimation from "../components/bookAnimation";
import PhoneAnimation from "../components/phoneComp";
import CodeUI from "../components/codeUI";
import Skills from "../components/Skills";
import Achievements from "../components/achievementsComp";

export default function About() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  
  return (
    <div className="page_container" id="about">
      <div className="about_hero">
        <div className="col-item img_col">
          {/* <h1>A little about me.</h1> */}
          <img
            loading="lazy"
            src="https://robynainsley21.github.io/images/images/headshot.JPG"
            alt="about_img"
          />
          <div></div>
        </div>
        <div className="col-item about_text">
          <AboutInterests />
        </div>
      </div>

      <div className="about_body">
        <h1 data-aos="fade-up">Interests of mine</h1>
        <div className="interests_container">
          <div className="interest_card music_comp">
          <p>//listening to music</p>
            <MusicPlayerSlider />
          </div>
          <div className="interest_card books">
          <p>//reading</p>
            <BookAnimation />
          </div>
          <div className="interest_card cellphone">
            <PhoneAnimation />
          </div>
          <div className="interest_card code_box">
          <p>//exploring code</p>
            <CodeUI />
          </div>
        </div>
      </div>

      <div >
        <h1>Skills & Badges</h1>
        <Skills />
      </div>
      <div >
        <h1>Achievements</h1>
        <Achievements />
      </div>
      <div>{/* <Achievements data={data} loading={loading} /> */}</div>
    </div>
  );
}
