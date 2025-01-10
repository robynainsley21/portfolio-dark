import { useState } from "react";

import CustomizedDialogs from "../components/Modal";
import ButtonComp from "./button"

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
        details: "Presented a \"Go to Market\" strategy for a digital product, successfully displaying a practical understanding of SCRUM principles.",
        design: "https://www.figma.com/design/KWCqgjcGUFtz7fLC0u1mta/Stack-%26-Slice?node-id=39-9&p=f&t=QilO74bBRs7WI6qx-0",
        prototype: "https://www.figma.com/proto/KWCqgjcGUFtz7fLC0u1mta/Stack-%26-Slice?node-id=108-656&starting-point-node-id=108%3A656&t=H65FxlRm7PCKxMAS-1",
        img_url:
          "https://robynainsley21.github.io/images/personal-portfolio/SCRUM.png",
      },
      {
        id: 2,
        skill: "UI/UX Principles",
        details: "Ability to implement UI/UX principles into a website design using Figma software.",
        design: "https://www.figma.com/design/p6ZVg2n7SqDXc5cGt48o6x/Software-Engineer-Portfolio?node-id=62-164&t=VKhyUeJsqyPdy3Dd-1",
        prototype: "https://www.figma.com/proto/p6ZVg2n7SqDXc5cGt48o6x/Software-Engineer-Portfolio?node-id=138-510&p=f&t=QXqjLbf5JGBxwFuT-1&scaling=min-zoom&content-scaling=fixed&page-id=5%3A2&starting-point-node-id=138%3A986&show-proto-sidebar=1",
        img_url:
          "https://robynainsley21.github.io/images/personal-portfolio/UIUX.png",
      },
      {
        id: 3,
        skill: "Python Essentials",
        details: "Achieved student level credential for completing the Python Essentials 1 course, provided by Cisco Networking Academy through Life Choices Academy.",
        file: "https://drive.google.com/file/d/1CPF-Uoi_a1xKXssGzHIuv51LrelFh-lx/view?usp=sharing",
        img_url:
          "https://robynainsley21.github.io/images/personal-portfolio/python-essentials-1.1.png",
      },
      {
        id: 4,
        skill: "C++ Essentials",
        details: "Achieved student level credential for completing the C++ Essentials 1 course, provided by Cisco Networking Academy through Life Choices Academy.",
        file: "https://drive.google.com/file/d/1tTqzpBVLOocqvBaoRa6IF0-ALh7pL1CJ/view?usp=sharing",
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
      <div className="languages">
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
              <CustomizedDialogs file={item.file} design={item.design} prototype={item.prototype} btn_text="Details" title={item.skill} details={item.details}/>
            <div className="flex mt-2 align-center w-100">
              {item.design && <ButtonComp site={item.design} text={"Design"}/>}
              {item.prototype && <ButtonComp site={item.prototype} text={"Prototype"}/>}
              {item.file && <ButtonComp site={item.file} text={"Certificate"}/>}
            </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
