import React from "react";
import styles from "./CategoryCards.module.css";
import CategoryCard from "./CategoryCard";

const CategoryCards = () => {
  return (
    <div className={styles["category-cards"]}>
      {categoriesInfo.map((el) => (
        <CategoryCard
          category={el.category}
          icon={el.icon}
          selected={el.selected}
        />
      ))}
    </div>
  );
};

export default CategoryCards;

const categoriesInfo = [
  {
    category: "News",
    icon: require("./../../assets/Images/Categories/chart.png"),
    selected: true,
  },
  {
    category: "Practice",
    icon: require("./../../assets/Images/Categories/people.png"),
    selected: false,
  },
  {
    category: "Music Notes",
    icon: require("./../../assets/Images/Categories/note.png"),
    selected: false,
  },
  {
    category: "Latest Releases",
    icon: require("./../../assets/Images/Categories/calendar.png"),
    selected: false,
  },
  {
    category: "Instruments",
    icon: require("./../../assets/Images/Categories/pu-ili.png"),
    selected: true,
  },
  {
    category: "Musicians",
    icon: require("./../../assets/Images/Categories/light-bulb.png"),
    selected: true,
  },
  {
    category: "User journey",
    icon: require("./../../assets/Images/Categories/christmas-stars.png"),
    selected: true,
  },
];
