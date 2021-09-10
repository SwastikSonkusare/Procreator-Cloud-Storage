import React, { useState } from "react";

import scanIcon from "../../assets/images/buttons_icon_large.png";
import cameraIcon from "../../assets/images/buttons_icon_large (1).png";
import uploadIcon from "../../assets/images/buttons_icon_large (2).png";
import crossIcon from "../../assets/images/icons_tab bar_action (2).png";

import Onboarding from "../OnBoarding/OnBoarding";
import LocalStorage from "../LocalStorage/LocalStorage";

import "./Upload.scss";

const Upload = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      {open ? (
        <>
          <div className="overlay"></div>
          <div className="upload">
            <LocalStorage />

            <div className="upload__container">
              <div>
                <img src={scanIcon} alt="icon"></img>
              </div>
              <div>
                <img src={cameraIcon} alt="icon"></img>
              </div>
              <div>
                <img src={uploadIcon} alt="icon"></img>
              </div>
              <div onClick={() => setOpen(false)}>
                <img src={crossIcon} alt="icon"></img>
              </div>
              <div></div>
            </div>
          </div>
        </>
      ) : (
        <Onboarding />
      )}
    </>
  );
};

export default Upload;
