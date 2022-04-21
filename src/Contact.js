import React from 'react';
import "./Contact.css"; 
import contactImg from './images/profil4.jpg';

function Contact() {
  return (
    <div className="contact component__space" id="Contact">
        <div className="row">
            <div className="col__2">
                <div className="contact__box">
                    <div className="contact__meta">
                        <h1 className="hire__text">
                            Írj nekem
                        </h1>
                    </div>
                    <div className="input__box">
                        <input type="text" className="contact name" placeholder="A neved*" />
                        <input type="text" className="contact email" placeholder="E-mail címed*" />
                        <input type="text" className="contact subject" placeholder="Tárgy" />
                        <textarea name="message" id="message" placeholder="Ide írd az üzeneted"></textarea>
                        <button className="btn contact pointer" type="submit">Küldés</button>
                    </div>
                </div>
            </div>
            <div className="col__2">
                <img src={contactImg} alt="" className="contact__img" />
            </div>
        </div>
    </div>
  )
}

export default Contact
