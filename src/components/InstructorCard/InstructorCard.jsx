import React from "react";
import "./InstructorCard.css";
import star from "./../../assets/Images/star.png";
import clock from "./../../assets/Images/clock.png";

const InstructorCard = (props) => {
  return (
    <div className="card">
      <img className="bookmark" src={clock} alt="teacher" />
      <img className="background-image" src={props.backgroundImage} />
      <div className="instructor-info">
        <img src={props.photo} alt="teacher" />
        <p>{props.name}</p>
      </div>
      <p className="course-title">{props.title}</p>
      <div className="info">
        <p className="text-small">
          <img className="icons" src={clock} />
          {props.duration}
        </p>
        <p className="text-small">
          <img className="icons" src={star} />
          {props.rating}/5
        </p>
        <div className="text">{props.price}</div>
      </div>
    </div>
  );
};

export default InstructorCard;
