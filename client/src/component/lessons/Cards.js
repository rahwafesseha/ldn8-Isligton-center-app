import React from "react";
import Card from "./Card";


const Cards = ({ LessonsData }) => {
  return (
    <div className="card-container">
    
      <Card LessonsData={LessonsData} />
    </div>
  );
};

export default Cards;
