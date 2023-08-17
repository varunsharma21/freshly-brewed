import React from "react";
import "./InstructorCard.css";
import guitar from "./../../assets/Images/guitar-image.jpg";
import clock from "./../../assets/Images/clock.png";

const InstructorCard = () => {
  return (
    <div className="card">
      <img className="bookmark" src={clock} alt="teacher" />
      <img className="background-image" src={guitar} />
      <div className="instructor-info">
        <img src={clock} alt="teacher" />
        <p>John</p>
      </div>
      <p className="course-title">Music Theory</p>
      <div className="info">
        <p className="text-small">
          <img className="icons" src={clock} />
          2h 30m
        </p>
        <p className="text-small">
          <img className="icons" src={clock} />
          2h 30m
        </p>
        <div className="text">Start</div>
      </div>
    </div>
  );
};

export default InstructorCard;
