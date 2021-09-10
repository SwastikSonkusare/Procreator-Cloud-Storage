import React, { useState } from "react";

import Header from "../Header/Header";
import Card from "../Card/Card";
import Input from "../Input/Input";
import Navbar from "../Navbar/Navbar";

import buttonSmallIcon from "../../assets/images/buttons_small.png";

import "./Home.scss";

const Home = () => {
  const tabTitles = ["files", "folders"];
  const [toggle, setToggle] = useState("folders");

  const url = window.location.pathname;

  return (
    <>
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
          <Input />

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
      <Navbar url={url} />
    </>
  );
};

export default Home;
