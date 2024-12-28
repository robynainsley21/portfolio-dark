import React, { useState, useEffect } from "react";

import AboutInterests from "../components/aboutInterests";
import MusicPlayerSlider from "../components/musicComp";

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
          <div className="interest_card">
            <p>//listening to music</p>
            <MusicPlayerSlider />
          </div>
        </div>

        {/* <div className="about_mindmap">
<div className="grid_item"></div>
<div className="grid_item"></div>
<div className="grid_item"></div>
<div className="grid_item"></div>
<div className="grid_item middle_item">middle</div>
<div className="grid_item"></div>
<div className="grid_item"></div>
<div className="grid_item"></div>
<div className="grid_item"></div>
</div> */}
      </div>
      <div>{/* <Achievements data={data} loading={loading} /> */}</div>
    </div>
  );
}
