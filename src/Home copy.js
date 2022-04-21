import React from "react";
import "./Home.css";
import logo from "./images/mzs_logo.png";

export default function Home() {
  window.addEventListener("scroll", function(){
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0 );
  });
  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
          <div className="logo">
            <img src={logo} alt="" className="bg__black" />
          </div>
          <div class="navbar">
            <a href="#Home">FŐOLDAL</a>
            <div class="subnav">
              <button class="subnavbtn">
                RÓLAM <i class="fa fa-caret-down"></i>
              </button>
              <div class="subnav-content">
                <a href="#about_me">BEMUTATKOZÁS</a>
                <br></br>
                <a href="#actress">SZÍNÉSZET</a>
                <br></br>
                <a href="#fitness">FITNESS</a>
                <br></br>
                <a href="#teaching">NYELVOKTATÁS</a>
              </div>
            </div>
            <a href="#portfolio">PORTFÓLIÓ</a>
            <a href="#contact">KAPCSOLAT</a>
          </div>
        </div>

        <div className="container">
          <div className="home__content">
            <div className="home__meta">
              <h1 className="home__text">KÖSZÖNTELEK AZ OLDALAMON</h1>
              <h2 className="home__text">Markovics Zsófi vagyok</h2>
              <h3 className="home__text sweet">
                Színésznő, fitness oktató és nyelvtanár
              </h3>
              <h4 className="home__text">Budapestről</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
