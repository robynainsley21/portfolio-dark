import { useState } from "react";

export default function Skills() {
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
        img_url: "https://robynainsley21.github.io/images/personal-portfolio/python.png",
      },
      {
        id: 10,
        skill: "C++",
        level: "Beginner",
        img_url: "https://robynainsley21.github.io/images/personal-portfolio/c-.png",
      },
    ],
    [
      {
        id: 1,
        skill: "SCRUM",
        level: "to be added",
        img_url: "https://robynainsley21.github.io/images/personal-portfolio/",
      },
      {
        id: 2,
        skill: "UI/UX Principles",
        level: "to be added",
        img_url: "https://robynainsley21.github.io/images/personal-portfolio/",
      },
    ],
  ]);
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
    </div>
  );
}
