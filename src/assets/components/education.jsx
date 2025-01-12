import { useState } from "react";

import ButtonComp from "./button";
export default function Education() {
    const [data, setData] = useState([
        {
          id: 1,
          edu_name: "Life Choices Academy",
          date: "April 2024 - September 2024",
          details: "Graduated Fullstack Developer",
          site: "https://lifechoices.co.za/life-choices-academy/",
          img_url:
            "https://robynainsley21.github.io/images/personal-portfolio/life-choices.jpg",
          skills: ["Vue.js", "Node.js", "MySQL", "Teamwork", "SCRUM", "UI/UX"],
        },
        {
          id: 2,
          edu_name: "CodeSpace",
          date: "February 2023 - August 2023",
          details: "Graduated Software Developer",
          site: "https://www.codespace.co.za/",
          img_url:
            "https://robynainsley21.github.io/images/personal-portfolio/codespace.jpeg",
          skills: ["React.js", "Git", "HTML", "CSS", "JavaScript"],
        },
        {
          id: 3,
          edu_name: "Tuscany Glen Secondary High",
          date: "2014 - 2018",
          details: "Deputy Head Girl, Second-best Achiever",
          site: "https://www.facebook.com/tuscanyglenhighschool/",
          img_url:
            "https://robynainsley21.github.io/images/personal-portfolio/tuscany-secondary.jpg",
          skills: ["Communication", "Leadership", "Teamwork"],
        },
      ]);
      return (
        <div>
          <h1>Education</h1>
          <div className="education_container">
            {data.map((edu) => {
              return (
                <div className="edu_card" key={edu.id}>
                  <img src={edu.img_url} alt="edu_img"  loading="lazy"/>
                  <div className="edu_text">
                    <h5>{edu.edu_name}</h5>
                    <p>{edu.date}</p>
                    <p>{edu.details}</p>
                    <ButtonComp site={edu.site} text="Visit" />
                  </div>
                  <div className="edu_skill_box">
                    <h6>Skills learned:</h6>
                    <div className="edu_skills">
                      {edu.skills.map((skill) => {
                        return <div className="skill_pill">{skill}</div>;
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
}