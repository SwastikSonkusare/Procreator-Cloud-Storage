import React, { useState } from "react";
import Header from "../components/Header/Header";

import editIcon from "../assets/icons_nav bar.png";
import userIcon from "../assets/User details.png";
import arrowIcon from "../assets/icons_raw_caret right.png";

import "./Profile.scss";

const Profile = () => {
  const [cameraToggleBtn, setCameraToggleBtn] = useState("active");
  const [dataToggleBtn, setDataToggleBtn] = useState("");

  return (
    <div className="profile">
      <Header />

      <div className="profile__header">
        <h4>
          <span>Profile</span>
        </h4>
        <img src={editIcon} alt="edit"></img>
      </div>

      <div className="profile__details">
        <img src={userIcon} alt="user"></img>
      </div>

      <section className="profile__statusbar">
        <span>32,5 GB free </span> <span>of 100 GB</span>
      </section>

      <div className="profile__skillbar"></div>

      <div className="profile__button">
        <button>Increase storage space</button>
      </div>

      <div className="profile__container">
        <div className="profile__container-storage">
          <span>Storage management</span>
          <img src={arrowIcon} alt="arrow"></img>
        </div>
        <div className="profile__container-device">
          <div>
            <span>Devices</span>
            <small>iPhone, Macbook, iPad management</small>
          </div>
          <img src={arrowIcon} alt="arrow"></img>
        </div>
        <div className="profile__container-uploads">
          <span>Camera uploads</span>
          <div
            class={cameraToggleBtn ? "toggle-btn active" : "toggle-btn"}
            onClick={() => setCameraToggleBtn((prevState) => !prevState)}
          >
            <div class="inner-circle"></div>
          </div>
        </div>
        <div className="profile__container-transfer">
          <span>Use data for transfer</span>
          <div
            class={dataToggleBtn ? "toggle-btn active" : "toggle-btn"}
            onClick={() => setDataToggleBtn((prevState) => !prevState)}
          >
            <div class="inner-circle"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
