import React from "react";
import clock from "./../../assets/Images/clock.png";
import "./CategoryCard.css";

const CategoryCard = (props) => {
  if (props.selected === true) {
    return (
      <div className="category-card selected">
        <img src={props.icon} />
        <p>{props.category}</p>
      </div>
    );
  }
  if (props.selected === false) {
    return (
      <div className="category-card">
        <img src={props.icon} />
        <p>{props.category}</p>
      </div>
    );
  }
};

export default CategoryCard;
