import React from "react";

import user1 from "../../assets/images/user-1.jpg";
import user2 from "../../assets/images/user-2.jpg";
import user3 from "../../assets/images/user-3.jpg";

import icon from "../../assets/images/Combined Shape.png";

import "./Card.scss";

const Card = () => {
  const users = [user1, user2, user3];

  const cardContents = [
    {
      id: 1,
      header: "The next big thing",
      status1: "12 f",
      status2: "2.1 gb",
    },
    {
      id: 2,
      header: "Top Secret",
      status1: "7 f",
      status2: "523 mb",
    },
    {
      id: 3,
      header: "Freebie project",
      status1: "3 f",
      status2: "192 mb",
    },
    {
      id: 4,
      header: "London Meetup",
      status1: "453 f",
      status2: "1.7 gb",
    },
  ];

  return (
    <>
      {cardContents.map((content) => (
        <div className="card" key={content.id}>
          <div className="card__header">
            <p>{content.header}</p>
            <img src={icon} alt="icon"></img>
          </div>

          <div>
            <span className="card__description">
              {content.status1} <div>.</div> {content.status2}
            </span>
          </div>

          <div className="card__image">
            {users.map((user, i) => (
              <img src={user} alt="user" key={i}></img>
            ))}
            <div>+7</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
