import React from "react";
import Header from "../Header/Header";

import illustration from "../../assets/images/illustration (1).png";

import "./Notification.scss";
import Navbar from "../Navbar/Navbar";

const Notification = () => {
  const url = window.location.pathname;

  return (
    <>
      <div className="notification">
        <Header />

        <main className="notification__container">
          <h2>
            <span>Notifications</span>
          </h2>

          <img
            src={illustration}
            alt="illustration"
            className="notification__illustration"
          ></img>
          <div className="notification__content">
            <small>No notifications yet</small>
            <p>
              Here you will see the external changes in your shared folders,
              tags from your peers and other updates
            </p>
          </div>
        </main>
      </div>

      <Navbar url={url} />
    </>
  );
};

export default Notification;
