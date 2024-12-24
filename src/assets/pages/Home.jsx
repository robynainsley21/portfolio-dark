import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://robynainsley21.github.io/vue-data-eomp/data/")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <div className="page_container" id="home">
        <div className="home_hero">
          <img src="https://robynainsley21.github.io/images/images/headshot.JPG" alt="home_img" />
          <div className="home_intro">
            <h4>
              Hi, I'm
              <h1 className="violet_text home_title">Robyn Carnow</h1>
            </h4>

            <div class="content">
              <div class="content__container">
                <p class="content__container__text">A</p>

                <ul class="content__container__list">
                  <li class="content__container__list__item">full-stack dev.</li>
                  <li class="content__container__list__item">coffee lover.</li>
                  <li class="content__container__list__item">reader.</li>
                  <li class="content__container__list__item">Minecrafter.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
