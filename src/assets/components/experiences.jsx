import { useState } from "react";
import ButtonComp from "./button";

export default function Experience() {
    const [data, setData] = useState([
        {
            "id": 1,
            "company": "LC Studio",
            "duration": "September 2024 - Present",
            "title": "Intern",
            "site": "https://lcstudio.co.za/",
            "img_url": "https://robynainsley21.github.io/images/personal-portfolio/lc_studioza_logo.jpeg"
          },
          {
            "id": 2,
            "title": "Sales Assistant",
            "company": "Poppies Home Bakes",
            "duration": "August 2022 - April 2023",
            "img_url": "https://robynainsley21.github.io/images/personal-portfolio/poppies-img.jpg",
            "site": "https://www.facebook.com/PoppiesLangverwacht/"
          }
    ]);
    return (
        <div>
            <h1>Experiences</h1>
            <div className="exp_container">
                {data.map((item) => (
                    <div className="exp_card" key={item.id}>
                        <img src={item.img_url} alt="exp_img"  loading="lazy"/>
                        <div className="exp_text">
                            <h5>{item.title}</h5>
                            <p>{item.company}</p>
                            <p>{item.duration}</p>
                        </div>
                        <div className="exp_btns">
                        <ButtonComp site={item.site} text="Visit"/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}