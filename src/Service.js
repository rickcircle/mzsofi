import React from "react";
import "./Service.css";

function Service() {
  return (
    <div className="service component__space" id="Service">
      <div className="heading">
        <h1 className="heading">Amikkel foglalkozom</h1>
        <p className="heading p__color">Életem meghatározó részeit alkotják az alábbi tevékenységek.  </p>
        <p className="heading p__color">
          Ha jobban meg szeretnéd ismerni a munkásságom, kattints valamelyik elemre.{" "}
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div class="service__box pointer">
              <div className="icon sweet">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
                  <line x1="2" y1="20" x2="2" y2="20"></line>
                </svg>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Színészet</h1>
                <p className="service__text p__color">
                  lorem ipsum dolor sit amet. Even more than the less, what is
                  not enough to succeed.
                </p>
                <a href="#rr" className="service__btn">Részletek</a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div class="service__box pointer">
              <div className="icon sweet">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
                  <line x1="2" y1="20" x2="2" y2="20"></line>
                </svg>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Fitness insturktor</h1>
                <p className="service__text p__color">
                  lorem ipsum dolor sit amet. Even more than the less, what is
                  not enough to succeed.
                </p>
                <a href="#rr" className="service__btn">Részletek</a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div class="service__box pointer">
              <div className="icon sweet">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
                  <line x1="2" y1="20" x2="2" y2="20"></line>
                </svg>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Nyelvoktatás</h1>
                <p className="service__text p__color">
                  lorem ipsum dolor sit amet. Even more than the less, what is
                  not enough to succeed.
                </p>
                <a href="#rr" className="service__btn">Részletek</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Service;
