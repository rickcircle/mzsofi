import React, {useState} from "react";
import "./Home.css";
import logo from "./images/mzs_logo.png";

export default function Home() {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });

  const [show, setShow] = useState(false);

  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
          <div className="logo">
            <img src={logo} alt="" className="bg__black logo__img" />
          </div>
          <div className="navigation">
            <ul className="navbar">
              <a href="#Home">
                <li className="">Főoldal</li>
              </a>
              <a href="#About">
                <li className="">Rólam</li>
              </a>
              <a href="#Service">
                <li className="">Amikkel foglalkozom</li>
              </a>
              <a href="#Portfolio">
                <li className="">Portfólió</li>
              </a>
              <a href="#Contact">
                <li className="">Kontakt</li>
              </a>
            </ul>
          </div>
         
          <div className="toggle__menu">
            <svg onClick={() => setShow(!show)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-justify white pointer"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          {show ? (
          <div className="sideNavbar">
            <ul className="sidebar d__flex">
               <li className="sideNavbar">
                 <a href="#Home">Főoldal</a>
               </li>
               <li className="sideNavbar">
                 <a href="#About">Rólam</a>
               </li>
               <li className="sideNavbar">
                 <a href="#Services">Amikkel foglalkozom</a>
               </li>
               <li className="sideNavbar">
                 <a href="#Portfolio">Portfólió</a>
               </li>
               <li className="sideNavbar">
                 <a href="#contact">Kontakt</a>
               </li>

            </ul>
          </div>
          ) : null}
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
