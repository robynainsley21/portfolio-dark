import React, { useState, useEffect } from "react";

import AboutInterests from "../components/aboutInterests";

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
          <div>
          </div>
        </div>
        <div className="col-item about_text">
          <AboutInterests />
        </div>
      </div>

      <div className="about_body">
        <h2 data-aos="fade-up">Interests of mine</h2>
        <p className="fine-text text-center mb-5">Hover to view details</p>

        {/* <div className="interest-container row mb-5">
          {data.about[1].interests.map((item) => {
            return (
              <InterestCard
                title={item.title}
                details={item.details}
                img={item.img_url}
              />
            );
          })}
        </div> */}

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
