import React from "react";

import searchIcon from "../../assets/images/314807_search_icon.svg";

import "./Input.scss";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Search"></input>
      <img src={searchIcon} alt="search"></img>
    </div>
  );
};

export default Input;
