import React from "react";

import wave from "../../assets/waves.svg";
import Header from "../Header/Header";

import buttonSmallIcon from "../../assets/buttons_small.png";

import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Header />

      <div className="home__header">
        <h2>
          <span>
            Hello Jessie, <br />
          </span>
          <span>at the moment you have</span>
        </h2>

        <p>
          <div className="home__statusbar">
            <span>32,5 GB </span> <span>of 100 GB free</span>
          </div>
          <img src={buttonSmallIcon} alt="icon"></img>
        </p>

        <div className="home__skillbar"></div>
      </div>
    </div>
  );
};

export default Home;
