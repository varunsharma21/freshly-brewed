import React from "react";
import LearningCard from "./LearningCard";
import "./LearningCards.css";

const LearningCards = () => {
  return (
    <div className="learning-cards">
      {learningCardsInfo.map((el) => (
        <LearningCard
          title={el.title}
          name={el.name}
          percentCompleted={el.percentCompleted}
          photo={el.photo}
        />
      ))}
    </div>
  );
};

export default LearningCards;

const learningCardsInfo = [
  {
    title: "Learn Guitar",
    name: "John Smith",
    percentCompleted: "69",
    photo: require("./../../assets/Images/guitar-image.jpg"),
  },
  {
    title: "Music Theory 2.0",
    name: "Emily Johnson",
    percentCompleted: "27",
    photo: require("./../../assets/Images/Instruments/accordian.jpeg"),
  },
];
