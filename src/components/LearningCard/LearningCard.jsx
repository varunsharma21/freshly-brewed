import React from "react";
import "./LearningCard.css";
import bookmark from "./../../assets/Images/bookmark.png";

const LearningCard = (props) => {
  return (
    <div className="learning-card">
      <img src={props.photo} />

      <div className="learning-info">
        <div className="bookmark-icon">
          <img src={bookmark} alt="bookmark" />
        </div>
        <p className="topic">{props.title}</p>
        <p className="instructor-name">{props.name}</p>

        <progress
          id="my-progress"
          value={props.percentCompleted}
          max="100"
        ></progress>

        <p className="percent-completed">{props.percentCompleted}% Completed</p>
      </div>
    </div>
  );
};

export default LearningCard;
