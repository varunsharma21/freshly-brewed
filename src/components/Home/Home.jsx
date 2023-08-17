import React from "react";
import "./Home.css";
import InstructorCards from "../InstructorCard/InstructorCards";
import CategoryCards from "../CategoriesCard/CategoryCards";
import LearningCard from "../LearningCard/LearningCard";

const Home = () => {
  return (
    <div className="home">
      <h2>Music Theory</h2>
      <InstructorCards />
      <h2>Categories</h2>
      <CategoryCards />
      <h2>My Learnings</h2>
      <LearningCard />
    </div>
  );
};

export default Home;