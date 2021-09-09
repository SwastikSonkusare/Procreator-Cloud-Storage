import React, { useState } from "react";

// import wave from "../../assets/waves.svg";
import searchIcon from "../../assets/314807_search_icon.svg";
import Header from "../Header/Header";

import buttonSmallIcon from "../../assets/buttons_small.png";

import "./Home.scss";
import Card from "../Card/Card";

const Home = () => {
  const tabTitles = ["files", "folders"];
  const [toggle, setToggle] = useState("folders");

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

        <section>
          <div className="home__statusbar">
            <span>32,5 GB </span> <span>of 100 GB free</span>
          </div>
          <img src={buttonSmallIcon} alt="icon"></img>
        </section>

        <div className="home__skillbar"></div>
      </div>

      <div className="home__container">
        <div className="home__input">
          <input type="text" placeholder="Search"></input>
          <img src={searchIcon} alt="search"></img>
        </div>

        <div className="home__tabs">
          {tabTitles.map((title) => (
            <button
              className={
                toggle === title ? "home__button active" : "home__button"
              }
              key={title}
              onClick={() => setToggle(title)}
            >
              {" "}
              {title}
            </button>
          ))}
        </div>

        <div className="home__cards">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Home;
