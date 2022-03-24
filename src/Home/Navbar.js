import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__link">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#info">A propos de nous</a>
          </li>
          <li>
            <a href="#product">Nos Confitures</a>
          </li>
          <li>
            <a href="#contact">Nous contactez</a>
          </li>
        </ul>
      </div>
      <div className="navbar__button">
        <ul>
          <li className="line"></li>
          <li className="line"></li>
          <li className="line"></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
