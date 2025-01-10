import { useState } from "react";
import ButtonComp from "../components/button";
import { Link } from "react-router-dom";
export default function Projects() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      img_url:
        "https://robynainsley21.github.io/images/vue-portfolio-images/ecommerce.png",
      languages: ["HTML", "CSS", "JavaScript"],
      description:
        "One of my biggest JavaScript projects, this e-commerce website includes search function of a product, adding and removing it from a shopping cart, and removing the product's existence as an administrator.",
      projectName: "beaute´ E-commerce",
      github: "https://github.com/robynainsley21/ecommerce-final.git",
      hosted_link: "https://ecommerce-final-ten.vercel.app/",
    },
    {
      id: 2,
      img_url: "https://robynainsley21.github.io/images/vue-portfolio-images/",
      languages: ["Vue.js", "MySQL", "Node.js", "State management"],
      description:
        "A collaboration project, this website features electronic fitness products. It is responsive, with data stored in a database.",
      projectName: "TechFit",
      github: "https://github.com/robynainsley21/node-eomp.git",
      hosted_link: "find link",
    },
    {
      id: 3,
      img_url: "https://robynainsley21.github.io/images/personal-portfolio/weatherwise.png",
      languages: ["Python", "Flask", "API integration"],
      description:
        "A weather application created during my second SCRUM team project. It features a responsive user interface and an API integration.",
      projectName: "WeatherWise",
      github: "",
      hosted_link: "https://weather-wise-sftw-eng.vercel.app/",
    },
  ]);
  return (
    <div id="projects">
      <h1>My most progressive projects</h1>
      {/* <p className="text-white">My most progressive projects. </p> */}
      <div className="project_container">
        {projects.map((item) => (
          <>
            {/* From Uiverse.io by Yaya12085   */}
            <div class="relative project_card bg-white m-auto flex flex-col rounded-xl bg-clip-border text-gray-700 shadow-md">
              <div class="relative mx-4 -mt-6 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                <img src={item.img_url} alt="project_img" />
              </div>
              <div class="p-6">
                <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  {item.projectName}
                </h5>
                <div className="lang_container">
                  {item.languages.map((lang) => (
                    <div className="skill_pill">{lang}</div>
                  ))}
                </div>
              </div>
              <div class="p-6 pt-0 flex justify-around">
                <Link target="_blank">
                  <ButtonComp
                    data-ripple-light="true"
                    type="button"
                    class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    text={"Read More"}
                  >
                  </ButtonComp>
                </Link>
                <Link target="_blank" to={item.hosted_link}>
                  <ButtonComp
                    data-ripple-light="true"
                    type="button"
                    class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    text={"Visit"}
                  >
                  </ButtonComp>
                </Link>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
