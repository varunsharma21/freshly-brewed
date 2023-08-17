import React from "react";
import InstructorCard from "./InstructorCard";
import "./InstructorCards.css";

const InstructorCards = () => {
  return (
    <div className="instructor-cards">
      <InstructorCard />
      <InstructorCard />
      <InstructorCard />
      <InstructorCard />
    </div>
  );
};

export default InstructorCards;
