import React from "react";

import connectionIcon from "../../assets/images/Cellular Connection.png";
import wifiIcon from "../../assets/images/Wifi.png";
import batteryIcon from "../../assets/images/Battery.png";

import "./Header.scss";

const Header = () => {
  const icons = [connectionIcon, wifiIcon, batteryIcon];

  const path = window.location.pathname;

  return (
    <>
      <div className={path === "/home" ? "header__nav" : "header__nav default"}>
        <span>9:41</span>
        <ul>
          {icons.map((icon, i) => (
            <li key={i}>
              <img src={icon} alt="icon"></img>
            </li>
          ))}
        </ul>
      </div>
      <div className="header__custom-shape-divider-bottom-1631170059">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill={path === "/home" ? "#4274eb" : "#fff"}
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Header;
