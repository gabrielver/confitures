import React, { useState } from "react";
import "./Home.css";
import Navbar from "./Navbar";
import conf from "../images/conf-fraise.png";

function Home() {
  const [moveJam, setMoveJam] = useState("false");
  const changeJam = () => {
    if (window.scrollY >= 100) {
      setMoveJam(true);
    } else {
      setMoveJam(false);
    }
  };

  window.addEventListener("scroll", changeJam);
  return (
    <div className="home" id="home">
      <Navbar />
      <div className="home__display">
        <div className="home__presentation">
          <h1>Les confitures de pascal</h1>
          <h2>
            Des confitures artisanales gourmandes Bio confectionnées avec
            passion comme les réalisaient nos grands mères
          </h2>
          <p>Venez découvrir nos confitures un peu plus bas</p>
        </div>
        <div className={`home__confiture ${moveJam ? "moveJam" : ""}`}>
          <img src={conf} alt="confiture" />
        </div>
      </div>
    </div>
  );
}

export default Home;
