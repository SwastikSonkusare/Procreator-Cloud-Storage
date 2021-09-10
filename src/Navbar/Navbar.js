import React, { useState } from "react";

import icon1 from "../assets/icons_tab bar_tab (4).png";
import icon2 from "../assets/icons_tab bar_tab (1).png";
import icon3 from "../assets/icons_tab bar_action.png";
import icon4 from "../assets/icons_tab bar_tab (6).png";
import icon5 from "../assets/icons_tab bar_tab (3).png";

import icon6 from "../assets/icons_tab bar_tab.png";
import icon7 from "../assets/icons_tab bar_tab (5).png";
import icon8 from "../assets/icons_tab bar_tab (10).png";
import icon9 from "../assets/icons_tab bar_tab (12).png";

import "./Navbar.scss";

const Navbar = () => {
  const navbarIcons = [
    {
      id: 1,
      defaultIcon: icon1,
      activeIcon: icon6,
      title: "home",
      link: "/home",
    },
    {
      id: 2,
      defaultIcon: icon2,
      activeIcon: icon7,
      title: "localStorage",
      link: "/localstorage",
    },
    {
      id: 3,
      defaultIcon: icon3,
      activeIcon: icon3,
      title: "modal",
      link: "/",
    },
    {
      id: 4,
      defaultIcon: icon4,
      activeIcon: icon8,
      title: "notification",
      link: "/notification",
    },
    {
      id: 5,
      defaultIcon: icon5,
      activeIcon: icon9,
      title: "profile",
      link: "/",
    },
  ];

  const [active, setActive] = useState("");

  return (
    <nav className="navbar">
      {navbarIcons.map((navbarIcon) => (
        <a
          href={navbarIcon.link}
          className="navbar__link"
          onClick={() => setActive(navbarIcon.title)}
        >
          <img
            src={
              active === navbarIcon.title
                ? navbarIcon.activeIcon
                : navbarIcon.defaultIcon
            }
            alt="icon"
            className="navbar__image"
          ></img>
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
