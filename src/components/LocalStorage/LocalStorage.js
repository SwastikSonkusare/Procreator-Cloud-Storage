import React from "react";
import Header from "../Header/Header";
import Input from "../Input/Input";

import icon1 from "../../assets/images/icons_with background_link.png";
import icon2 from "../../assets/images/icons_with background_link (2).png";
import icon3 from "../../assets/images/icons_with background_category_core.png";
import icon4 from "../../assets/images/icons_with background_link (1).png";

import icon5 from "../../assets/images/icons_with background_category.png";
import icon6 from "../../assets/images/icons_with background_category (1).png";
import icon7 from "../../assets/images/icons_with background_category (2).png";
import icon8 from "../../assets/images/Combined Shape.png";

import "./LocalStorage.scss";
import Navbar from "../Navbar/Navbar";

const LocalStorage = () => {
  const url = window.location.pathname;

  const storageIcons = [
    {
      id: 1,
      icon: icon1,
      title: "Video",
    },
    {
      id: 2,
      icon: icon2,
      title: "Image",
    },
    {
      id: 3,
      icon: icon3,
      title: "Music",
    },
    {
      id: 4,
      icon: icon4,
      title: "Archive",
    },
  ];

  const storageCards = [
    {
      id: 1,
      icon: icon5,
      title: "Franky Wah - Aftertime",
      type: "mp3",
      size: "9.2 mb",
    },
    {
      id: 2,
      icon: icon6,
      title: "Annie's new car",
      type: "jpg",
      size: "4.8 mb",
    },
    {
      id: 3,
      icon: icon7,
      title: "Top secret archive",
      type: "zip",
      size: "3.7 gb",
    },
    {
      id: 4,
      icon: icon5,
      title: "On the top of the world",
      type: "doc",
      size: "2.3 mb",
    },
  ];

  return (
    <>
      <div className="storage">
        <Header />

        <main className="notification__container">
          <h2>
            <span>Local Storage</span>
          </h2>

          <Input />

          <div className="storage__container">
            {storageIcons.map((storageIcon) => (
              <div key={storageIcon.id}>
                <img src={storageIcon.icon} alt="icon"></img>
                <span>{storageIcon.title}</span>
              </div>
            ))}
          </div>

          <div className="storage__cards">
            {storageCards.map((card, i) => (
              <div className="storage__cards-container" key={i}>
                <div className="storage__cards-left_section">
                  <img src={card.icon} alt="icon"></img>

                  <div>
                    <h4>{card.title}</h4>
                    <span>
                      {card.type} <div>.</div> {card.size}
                    </span>
                  </div>
                </div>
                <div className="storage__cards-right_section">
                  <img src={icon8} alt="icon"></img>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
      <Navbar url={url} />
    </>
  );
};

export default LocalStorage;
