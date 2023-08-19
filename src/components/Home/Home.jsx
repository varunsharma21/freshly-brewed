import React from "react";
import styles from "./Home.module.css";
import InstructorCards from "../InstructorCard/InstructorCards";
import CategoryCards from "../CategoriesCard/CategoryCards";
import LearningCards from "../LearningCard/LearningCards";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={styles.home}>
      <h3>Music Theory</h3>
      <InstructorCards />
      <h3>Categories</h3>
      <CategoryCards />
      <h3>My Learnings</h3>
      <LearningCards />
      <Link to="discover">
        <button>View All</button>
      </Link>
    </div>
  );
};

export default Home;
