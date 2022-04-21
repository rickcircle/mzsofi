import React from 'react';
import "./Footer.css";

function Footer() {
  return (
    <div className="footer d__flex align__items__center justify__content__space__between pz__10" style={{"padding": "10px 20px","zIndex" : "100"}}>
        <span className="copyright">Copyright @ 2022</span>
    </div>
  )
}

export default Footer;
