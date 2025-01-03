import { useState } from "react";

export default function Skills() {
  const [details, setDetails] =useState(false)
  const [data, setData] = useState([
    [
      {
        id: 1,
        skill: "HTML",
        level: "Advanced",
        img_url:
          "https://robynainsley21.github.io/images/images/png-clipart-web-developmenthtml-responsive-we-removebg-preview.png",
      },
      {
        id: 2,
        skill: "CSS",
        level: "Intermediate",
        img_url: "https://robynainsley21.github.io/images/images/css.png",
      },
      {
        id: 3,
        skill: "JavaScript",
        level: "Beginner-Intermediate",
        img_url:
          "https://robynainsley21.github.io/images/images/javascript-logo-number-angularjs-node-javascript-transparent-background-removebg-preview.png",
      },
      {
        id: 4,
        skill: "React.js",
        level: "Beginner-Intermediate",
        img_url:
          "https://robynainsley21.github.io/images/images/React-icon.svg.png",
      },
      {
        id: 5,
        skill: "Vue.js",
        level: "Beginner-Intermediate",
        img_url:
          "https://robynainsley21.github.io/images/images/Vue.js_Logo_2.svg.png",
      },
      {
        id: 6,
        skill: "MySQL",
        level: "Beginner",
        img_url:
          "https://robynainsley21.github.io/images/personal-portfolio/mysql-removebg-preview.png",
      },
      {
        id: 7,
        skill: "Git",
        level: "Intermediate",
        img_url:
          "https://robynainsley21.github.io/images/personal-portfolio/git.png",
      },
      {
        id: 8,
        skill: "Node.js",
        level: "Beginner-Intermediate",
        img_url:
          "https://robynainsley21.github.io/images/personal-portfolio/nodejs.png",
      },
      {
        id: 9,
        skill: "Python",
        level: "Beginner",
        img_url:
          "https://robynainsley21.github.io/images/personal-portfolio/python.png",
      },
      {
        id: 10,
        skill: "C++",
        level: "Beginner",
        img_url:
          "https://robynainsley21.github.io/images/personal-portfolio/c-.png",
      },
    ],
    [
      {
        id: 1,
        skill: "SCRUM",
        details: "to be added",
        img_url:
          "https://robynainsley21.github.io/images/personal-portfolio/SCRUM.png",
      },
      {
        id: 2,
        skill: "UI/UX Principles",
        details: "to be added",
        img_url:
          "https://robynainsley21.github.io/images/personal-portfolio/UIUX.png",
      },
      {
        id: 3,
        skill: "Python Essentials",
        details: "to be added",
        img_url:
          "https://robynainsley21.github.io/images/personal-portfolio/python-essentials-1.1.png",
      },
      {
        id: 4,
        skill: "C++ Essentials",
        details: "to be added",
        img_url:
          "https://robynainsley21.github.io/images/personal-portfolio/c-essentials-1.png",
      },
    ],
  ]);

  const toggleDetails = () => {
    console.log("details", details);
    setDetails(!details);
    
  }

  return (
    <div id="about_skills" className="white_text">
      <div className="languages row">
        {data[0].map((item) => {
          return (
            <div class="skill_icon col-sm-6 col-md-3 col-lg-2" key={item.id}>
              <div className="skill_img_box">
                <img src={item.img_url} alt="skill_img" />
                <p>{item.skill}</p>
              </div>
              {/* <p>{item.level}</p> */}
            </div>
          );
        })}
      </div>
      <div className="badge_container">
        {data[1].map((item) => {
          return (
            <div class="badge_card">
              <div>
                <img src={item.img_url} alt="badge_img" />
              </div>
              <span class=" text-center">{item.skill}</span>
              {/* From Uiverse.io by andrew-demchenk0  */}

              <button class="button" type="button" onClick={toggleDetails}>
                <span class="button__text">Details {">"}
                </span>
                <span class="button__icon">
                  <svg
                    class="svg"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="12" x2="12" y1="5" y2="19"></line>
                    <line x1="5" x2="19" y1="12" y2="12"></line>
                  </svg>
                </span>
              </button>
              <span class=" text-center">{item.details}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
