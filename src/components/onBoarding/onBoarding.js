import React from "react";

import rightArrow from "../../assets/icons_tab bar_stats copy.png";
import illustration from "../../assets/Illustration.png";

import "./onBoarding.scss";

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

        <img src={rightArrow} alt="rightArrow"></img>
      </div>
    </div>
  );
};

export default onBoarding;
