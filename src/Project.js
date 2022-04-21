import React from "react";
import "./Project.css";
import Project1 from './images/profil.jpg';
import Project2 from './images/profil2.jpg';
import Project3 from './images/profil3.jpg';

function Project() {
  return (
    <div classNem="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">Eddigi színész munkáim</h1>
        <p className="heading p__color">Többé-kevésbé az alábbi szerepekben találkozhattatok már velem </p>
      </div>
      <div className="container">
          <div className="row">
              <div className="col__3">
                  <div className="project__box pointer relative">
                    <div className="project__box__img pointer relative">
                        <div className="project__img__box">
                            <img src={Project1} alt="" className="project__img" />
                            <div className="mask__effect"></div>
                        </div>
                        <div className="project__meta absolute">
                            <h5 className="project__text">Hamupipőke</h5>
                            <h4 className="project__text">A Noir színház társulat előadása</h4>
                            <a href="#rr" className="project__btn">Részletek</a>
                        </div>
                    </div>
                  </div>
              </div>

              <div className="col__3">
                  <div className="project__box pointer relative">
                    <div className="project__box__img pointer relative">
                        <div className="project__img__box">
                            <img src={Project2} alt="" className="project__img" />
                            <div className="mask__effect"></div>
                        </div>
                        <div className="project__meta absolute">
                            <h5 className="project__text">Ágika</h5>
                            <h4 className="project__text">Lorem ipsum dolor sit amet</h4>
                            <a href="#rr" className="project__btn">Részletek</a>
                        </div>
                    </div>
                  </div>
              </div>

              <div className="col__3">
                  <div className="project__box pointer relative">
                    <div className="project__box__img pointer relative">
                        <div className="project__img__box">
                            <img src={Project3} alt="" className="project__img" />
                            <div className="mask__effect"></div>
                        </div>
                        <div className="project__meta absolute">
                            <h5 className="project__text">Hamupipőke</h5>
                            <h4 className="project__text">Noir színház hamupipőke</h4>
                            <a href="#rr" className="project__btn">Részletek</a>
                        </div>
                    </div>
                  </div>
              </div>
          </div>

      </div>
    </div>
  );
}

export default Project;
