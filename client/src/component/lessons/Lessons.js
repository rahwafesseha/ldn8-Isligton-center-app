import React from "react";
import Cards from "./Cards";
import "./Lessons.css";

const Lessons = ({ LessonsData }) => {
  return (
    <div className="lesson-section">
      <h1 className="lesson-header">Lessons</h1>
      <div>
        <Cards LessonsData={LessonsData} />
      </div>
    </div>
  );
};

export default Lessons;
