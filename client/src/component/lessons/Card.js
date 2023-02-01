import React, { useEffect, useState } from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Card = () => {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9003/lessons")
      .then((res) => {
        console.log("data", res.data);
        setLessons(res.data);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return lessons.map((lesson, index) => (
    <div key={index} className="card">
      <span className="title">{lesson?.title}</span>

      <img className="image-card" src={lesson?.img_url} alt="avatar_img" />

      <p className="desc">{lesson?.summary}</p>
      <button className="cardButton">
        <Link className="link" to={`/lessons/${lesson.id}`}>
          View Lesson
        </Link>
      </button>
    </div>
  ));
};

export default Card;
