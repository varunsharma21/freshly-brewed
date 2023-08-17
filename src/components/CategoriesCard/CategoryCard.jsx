import React from "react";
import clock from "./../../assets/Images/clock.png";
import "./CategoryCard.css";

const CategoryCard = () => {
  return (
    <div className="category-card">
      <img src={clock} />
      <p>News</p>
    </div>
  );
};

export default CategoryCard;
