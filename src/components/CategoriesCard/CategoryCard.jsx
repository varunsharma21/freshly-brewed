import React from "react";
import styles from "./CategoryCard.module.css";

const CategoryCard = (props) => {
  if (props.selected === true) {
    return (
      <div className={styles["category-card-selected"]}>
        <img src={props.icon} />
        <p>{props.category}</p>
      </div>
    );
  }
  if (props.selected === false) {
    return (
      <div className={styles["category-card"]}>
        <img src={props.icon} />
        <p>{props.category}</p>
      </div>
    );
  }
};

export default CategoryCard;
