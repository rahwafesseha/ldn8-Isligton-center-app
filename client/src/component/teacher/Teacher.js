import { useState, useEffect } from "react";
import RenderLesson from "./RenderLesson";
import Form from "./Form";
import AddQuestion from "./AddQuestion";
import axios from "axios";
import Search from "./Search";

function Teacher() {
  const [visibleQuestions, setVisibleQuestions] = useState(false);
  const [visibleLessons, setVisibleLessons] = useState(false);
  const [allLessons, setAllLessons] = useState([]);
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9003/lessons/").then((res) => {
      console.log("l", res.data)
      setLessons(res.data);
          console.log("a", res.data);
     setAllLessons(res.data);
    });
  }, []);

  const deleteLessons = (arrLesson) => {
    axios
      .delete(`http://localhost:9003/lessons/${arrLesson.id}`)
      .then((res) => {
        if (res.status === 200) {
          axios.get("http://localhost:9003/lessons/").then((res) => {
            setLessons(res.data);
          });
        }
      });
  };

  return (
    <div>
      <Search
        lessons={lessons}
        setLessons={setLessons}
        allLessons={allLessons}
      />
      <h1 className="T-title" style={{ textAlign: "center" }}>
        <span className="title-text text-1">Our</span>
        <span className="title-text text-2"> Expert </span>
        <span className="title-text text-3">Teachers</span>
      </h1>
      <p className="lesson-plan">
        Here you can find a wide range of full lesson plans to use in your
        secondary classroom. All of our lessons are designed around themes
        engaging and relevant to secondary learners and can be used to
        complement your school curriculum, giving students an opportunity to
        develop their English language and skills in motivating and enjoyable
        ways. Written by young learner experts from around the world, our lesson
        plans are easy to use and aim to give your students the skills and
        confidence they need to enjoy learning English.
      </p>
      <div className="add-question">
        <p onClick={() => setVisibleQuestions(true)}>Add Question</p>
        <p type="submit" onClick={() => setVisibleQuestions(false)}>
          Cancel
        </p>
      </div>
      {visibleQuestions && <AddQuestion />}
      <div>
        <div className="add-content">
          <p onClick={() => setVisibleLessons(true)}>Add Lesson</p>
          <p type="submit" onClick={() => setVisibleLessons(false)}>
            Cancel
          </p>
        </div>
        {visibleLessons && <Form setLessons={setLessons} />}
        <div className="lesson-wrapper">
          {lessons.map((lesson, i) => (
            <div className="lesson-card" key={i}>
              <RenderLesson
                lesson={lesson}
                isTeacher={true}
                deleteLessons={deleteLessons}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Teacher;
