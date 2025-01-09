import { useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import ButtonComp from "../components/Button";

export default function Contact() {
  const [data, setData] = useState([
    {
      number: "071 555 3954",
      github: "https://github.com/robynainsley21",
      email: "rcarnowbusiness@gmail.com",
      linkedin: "https://www.linkedin.com/in/robyn-carnow-2b0762267/",
      location: "Cape Town, 7100",
      discord: "robbierobs",
    },
  ]);

  const StyledWrapper = styled.div`
    .login {
      text-transform: uppercase;
      letter-spacing: 2px;
      display: block;
      font-weight: bold;
      font-size: x-large;
    }

    .card {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 250px;
      width: 300px;
      flex-direction: column;
      color: #e5e9f0;
      gap: 35px;
      background: #011627;
      /* box-shadow: 16px 16px 32px #055393, -16px -16px 32px #055393; */
      border-radius: 8px;
      border: none;
      margin: auto;
    }

    .inputBox {
      position: relative;
      width: 250px;
    }

    .inputBox input {
      width: 100%;
      padding: 10px;
      outline: none;
      border: none;
      color: #e5e9f0;
      font-size: 1em;
      background: transparent;
      border-left: 2px solid #5565e8;
      border-bottom: 2px solid #5565e8;
      transition: 0.1s;
      border-bottom-left-radius: 8px;
    }

    .inputBox span {
      margin-top: 5px;
      position: absolute;
      left: 0;
      transform: translateY(-4px);
      margin-left: 10px;
      padding: 10px;
      pointer-events: none;
      font-size: 12px;
      color: #e5e9f0;
      text-transform: uppercase;
      transition: 0.5s;
      letter-spacing: 3px;
      border-radius: 8px;
    }

    .inputBox input:valid ~ span,
    .inputBox input:focus ~ span {
      transform: translateX(113px) translateY(-15px);
      font-size: 0.8em;
      padding: 5px 10px;
      background: #5565e8;
      letter-spacing: 0.2em;
      color: #fff;
      border: 2px;
    }

    .inputBox input:valid,
    .inputBox input:focus {
      border: 2px solid #5565e8;
      border-radius: 8px;
    }

    .enter {
      height: 45px;
      width: 100px;
      border-radius: 5px;
      border: 2px solid #5565e8;
      cursor: pointer;
      background-color: transparent;
      transition: 0.5s;
      text-transform: uppercase;
      font-size: 10px;
      letter-spacing: 2px;
      margin-bottom: 1em;
    }

    .enter:hover {
      background-color: #5565e8;
      color: white;
    }
  `;
  return (
    <div id="contact">
      <h1>Let's get in touch.</h1>

      <div className="contact_container">
        <StyledWrapper>
          <div className="container mb-5">
            <div className="card">
              <div className="inputBox">
                <input type="text" required="required" />
                <span className="user">First Name</span>
              </div>
              <div className="inputBox">
                <input type="password" required="required" />
                <span>Last Name</span>
              </div>
              <div className="inputBox" name="message">
                <input type="text" required />
                <span>Your Message</span>
              </div>
              <div className="flex gap-4">
                <ButtonComp text="Send" />
                <ButtonComp text="Clear" />
              </div>
            </div>
          </div>
        </StyledWrapper>
        <div className="contact_text">
          <div className="contact_text_details">
            <div className="flex align-center p-auto">
              <div className="flex align-center justify-center p-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.2rem"
                  height="1.2rem"
                  fill="currentColor"
                  class="m-auto mx-2 bi bi-telephone-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                  />
                </svg>
              </div>
              <span className="m-2 contact_text_span">{data[0].number}</span>
            </div>

            <div className="flex align-center p-auto">
              <div className="flex align-center justify-center p-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.2rem"
                  height="1.2rem"
                  fill="currentColor"
                  className="m-auto mx-2 bi bi-pin-angle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a6 6 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707s.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a6 6 0 0 1 1.013.16l3.134-3.133a3 3 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146" />
                </svg>
              </div>
              <span className="m-2 contact_text_span">{data[0].location}</span>
            </div>
            <div className="flex align-center p-auto">
              <div className="flex align-center justify-center p-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.2rem"
                  height="1.2rem"
                  fill="currentColor"
                  className="m-auto mx-2 bi bi-envelope"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                </svg>
              </div>
              <span className="m-2 contact_text_span">{data[0].email}</span>
            </div>
            <div className="flex align-center p-auto">
              <div className="flex align-center justify-center p-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.3rem"
                  height="1.3rem"
                  fill="currentColor"
                  className="m-auto mx-2 bi bi-discord"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
                </svg>
              </div>
              <span className="m-2 contact_text_span">{data[0].discord}</span>
            </div>
          </div>
          <div className="contact_icons">
            <Link to={data[0].linkedin} target="_blank">
              {/* From Uiverse.io by vinodjangid07   */}
              <button className="Btn">
                <span className="svgContainer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.6rem"
                    height="1.6rem"
                    fill="#011627"
                    className="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                </span>
                <span className="BG"></span>
              </button>
            </Link>
            <Link to={data[0].github} target="_blank">
              {/* From Uiverse.io by vinodjangid07  */}
              <button className="Btn">
                <span className="svgContainer">
                  <svg fill="#011627" viewBox="0 0 496 512" height="1.6em">
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                  </svg>
                </span>
                <span className="BG"></span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
