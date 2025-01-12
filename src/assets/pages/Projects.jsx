import { useState } from "react";
import ButtonComp from "../components/button";
import CustomizedDialogs from "../components/Modal";
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
      img_url: "https://robynainsley21.github.io/images/vue-portfolio-images/podify.png",
      languages: ["React.js", "API integration", "State management"],
      description:
        "My first application created with React. It receives data from an API and displays podcasts with their respective details.",
      projectName: "Podify",
      github: "https://github.com/robynainsley21/PodcastApp.git",
      hosted_link: "https://podcast-app-cyan.vercel.app/",
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
      <h1>My most progressive coding projects</h1>
      <div className="project_container">
        {projects.map((item) => (
          <>
            {/* From Uiverse.io by Yaya12085   */}
            <div class="relative project_card  m-auto flex flex-col rounded-xl bg-clip-border text-gray-700 shadow-md">
              <div class="relative mx-4 -mt-6  rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                <img src={item.img_url} alt="project_img"  loading="lazy"/>
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
              <div class="p-6 pt-0 flex align-center justify-around">
                  <CustomizedDialogs details={item.description} btn_text='Details'/>
                  <ButtonComp
                    data-ripple-light="true"
                    type="button"
                    className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    text={"Visit"}
                    site={item.hosted_link}
                  >
                  </ButtonComp>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
