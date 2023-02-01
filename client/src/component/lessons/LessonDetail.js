import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./LessonDetail.css";
import Markdown from "markdown-to-jsx";
import { Button } from "@mui/material";

const LessonDetail = ({ LessonsData }) => {
  const { id } = useParams();
  const [lessons, setLessons] = useState([]);
  const base_url = "https://www.youtube.com/embed/";

  useEffect(() => {
    axios
      .get(`http://localhost:9003/lessons/${id}`)
      .then((res) => setLessons(res.data));
  }, [id]);
  return lessons
    .filter((lesson) => lesson.id === parseInt(id))
    .map((lesson, index) => (
      <div key={index} className="lessonContent">
        <div className="title-container">
          <h1>{lesson?.title}</h1>
        </div>

        <div className="lesson-details-body">
          <div>
            <div className="lesson-content-container">
              <div className="frame">
                <iframe
                  className="iframe"
                  src={base_url + lesson?.video_url.slice(-11)}
                  title="YouTube video player"
                ></iframe>
              </div>
              <p>{lesson?.summary}</p>
            </div>
            <Markdown className="markdown" children={lesson?.content} />
            <div>
              <p
                style={{
                  color: "#178be9",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                Test your knowledge to Improve your english knowledge. Sharpen
                your mind and your reading and speaking skills. Get smarter with
                Islington quizzes.
              </p>
              <Button variant="outlined" size="large" fontSize="large">
                <Link
                  style={{ fontSize: "2rem" }}
                  className="link"
                  to={`/questions/lessons/${lesson.id}`}
                >
                  Take Quiz
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    ));
};

export default LessonDetail;
