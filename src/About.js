import React from "react";
import "./About.css";
import aboutImg from "./images/zsofi1.jpg";

export default function About() {
  window.addEventListener("scroll", function(){
    const upToUp = document.querySelector("a.bottom__to__top");
    upToUp.classList.toggle("active", window.scrollY > 0 );
  });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">Rólam</h1>
            <div class="about__meta">
              <p class="about__text p__color">
                lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem
                ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum
                dolor sit amet. lorem ipsum dolor sit amet.
              </p>
              <p class="about__text p__color">
                lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem
                ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum
                dolor sit amet. lorem ipsum dolor sit amet.
              </p>
              <p class="about__text p__color">
                lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem
                ipsum dolor sit amet. lorem ipsum dolor sit amet.
              </p>
              <div className="about__button d__flex align__items__center">
                <a href="rr#">
                  <button className="about btn pointer">Download CV</button>
                </a>
                <a href="rr#">
                  <button className="about btn pointer">Hire me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="up__to__top__btn">
        <a href="#rr" className="bottom__to__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
