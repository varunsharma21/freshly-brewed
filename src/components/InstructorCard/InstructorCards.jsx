import React from "react";
import InstructorCard from "./InstructorCard";
import styles from "./InstructorCards.module.css";

const InstructorCards = () => {
  return (
    <div className={styles["instructor-cards"]}>
      {InstructorCardInfo.map((el) => (
        <InstructorCard
          name={el.name}
          photo={el.photo}
          title={el.title}
          rating={el.rating}
          backgroundImage={el.backgroundImage}
          duration={el.duration}
          price={el.price}
        />
      ))}
    </div>
  );
};

export default InstructorCards;

const InstructorCardInfo = [
  {
    name: "Sarah",
    photo: require("./../../assets/Images/Instructors/instructor-1.jpeg"),
    title: "Music Theory 101",
    rating: "4.8",
    backgroundImage: require("./../../assets/Images/Instruments/flute.jpeg"),
    duration: "2h 30m",
    price: "$29",
  },
  {
    name: "Emily Lee",
    photo: require("./../../assets/Images/Instructors/instructor-2.jpeg"),
    title: "Guitar Techniques",
    rating: "4.5",
    backgroundImage: require("./../../assets/Images/Instruments/guitar.jpeg"),
    duration: "1h 45m",
    price: "$19",
  },
  {
    name: "Michael",
    photo: require("./../../assets/Images/Instructors/instructor-3.jpeg"),
    title: "Trumpet Basics",
    rating: "4.6",
    backgroundImage: require("./../../assets/Images/Instruments/trumpet.jpeg"),
    duration: "Learn",
    price: "Start",
  },
  {
    name: "Jonathan",
    photo: require("./../../assets/Images/Instructors/instructor-4.jpeg"),
    title: "Music Theory",
    rating: "4.1",
    backgroundImage: require("./../../assets/Images/Instruments/violin.jpeg"),
    duration: "1h 17m",
    price: "Start",
  },
];
