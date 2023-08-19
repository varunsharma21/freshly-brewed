import React from "react";
import styles from "./InstructorCard.module.css";
import star from "./../../assets/Images/star.png";
import clock from "./../../assets/Images/clock.png";

const InstructorCard = (props) => {
  return (
    <div className={styles.card}>
      <img className={styles["background-image"]} src={props.backgroundImage} />
      <div className={styles["instructor-info"]}>
        <img src={props.photo} alt="teacher" />
        <p>{props.name}</p>
      </div>
      <p className={styles["course-title"]}>{props.title}</p>
      <div className={styles.info}>
        <p className={styles["text-small"]}>
          <img className={styles.icons} src={clock} />
          {props.duration}
        </p>
        <p className={styles["text-small"]}>
          <img className={styles.icons} src={star} />
          {props.rating}/5
        </p>
        <div className={styles.text}>{props.price}</div>
      </div>
    </div>
  );
};

export default InstructorCard;
