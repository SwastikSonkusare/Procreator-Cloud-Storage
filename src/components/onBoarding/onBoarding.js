import React from "react";

import rightArrow from "../../assets/images/icons_tab bar_stats copy.png";
import illustration from "../../assets/images/Illustration.png";

import "./OnBoarding.scss";

const onBoarding = () => {
  return (
    <div className="onboard">
      <img
        src={illustration}
        alt="illustration"
        className="onboard__illustration"
      ></img>

      <div className="onboard__container">
        <p>Your cloud storage safe and sound</p>

        <a href="/home">
          <img src={rightArrow} alt="rightArrow"></img>
        </a>
      </div>
    </div>
  );
};

export default onBoarding;
