import React from "react";
import styles from "./LearningCard.module.css";
import bookmark from "./../../assets/Images/bookmark.png";

const LearningCard = (props) => {
  return (
    <div className={styles["learning-card"]}>
      <img src={props.photo} />

      <div className={styles["learning-info"]}>
        <div className={styles["bookmark-icon"]}>
          <img src={bookmark} alt="bookmark" />
        </div>
        <p className={styles.topic}>{props.title}</p>
        <p className={styles["instructor-name"]}>{props.name}</p>

        <progress
          id="my-progress"
          value={props.percentCompleted}
          max="100"
        ></progress>

        <p className={styles["percent-completed"]}>
          {props.percentCompleted}% Completed
        </p>
      </div>
    </div>
  );
};

export default LearningCard;
