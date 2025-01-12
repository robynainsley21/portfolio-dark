import { useState } from "react";
import { Link } from "react-router-dom";


import ButtonComp from "./button"

export default function Achievements() {
  const [data, setData] = useState([
    {
      id: 1,
      title: "Full stack Certificate",
      location: "Life Choices Academy",
      details: "Graduated Full-stack Developer",
      date: "September 2024",
      img_url: "https://robynainsley21.github.io/images/vue-portfolio-images/fullstack_certificate.jpg",
      site: "https://drive.google.com/file/d/1EbKPbo0OO4i-t4zd7WUq6JnD-Dilo40B/view?usp=sharing",
    },
    {
      id: 2,
      title: "Vue.js Certificate",
      location: "Life Choices Academy",
      details: "Achieved 93% in Vue.js Portfolio project.",
      date: "Year 2024",
      img_url: "https://robynainsley21.github.io/images/vue-portfolio-images/vue_certifivate.jpg",
      site: "https://drive.google.com/file/d/16t1o1i-OS3dQ41jN7yozIbaCMQjMg_f-/view?usp=sharing",
    },
    {
      id: 3,
      title: "JavaScript Certificate",
      location: "Life Choices Academy",
      details: "Achieved 90% in E-commerce project.",
      date: "Year 2024",
      img_url: "https://robynainsley21.github.io/images/vue-portfolio-images/js_certificate.jpg",
      site: "https://drive.google.com/file/d/1e3DEdpqCXsUXlIVQhudDWZYs7cffca_t/view?usp=sharing",
    },
    {
      id: 4,
      title: "Software Development Certificate",
      location: "CodeSpace Academy",
      details: "Graduated Software Developer",
      date: "August 2023",
      img_url: "Screenshot 2025-01-05 151436.png",
      site: "https://drive.google.com/file/d/16JGZv8fYp1kQCkZWOkF52AdpP2hqIYfg/view?usp=sharing",
    }
  ]);
  return (
    <div id="achievements">
      {/* From Uiverse.io by eslam-hany   */}
      {data.map((item) => (
        <div class="achieve_card">
          {item.img_url && <img src={item.img_url} alt="achieve_img" loading="lazy"/>}
          <div className="achieve_text">
            <h5>{item.title}</h5>
            <p>{item.location}</p>
            <p>{item.date}</p>
            <p>{item.details}</p>
          </div>
         {item.site && <Link to={item.site} target="_blank">
            <ButtonComp text="View" />
          </Link>}
        </div>
      ))}
    </div>
  );
}
