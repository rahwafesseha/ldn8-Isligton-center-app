import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Quiz.css";
import NextQuestionButton from "./NextQuestionButton";
import axios from "axios";
import e from "cors";

const Quiz = () => {
  const { id } = useParams();
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showTotalScore, setShowTotalScore] = useState(false);
  const [questions, setQuestions] = useState({});


  useEffect(() => {
    axios
      .get(`https://ldn8-islington.herokuapp.com/questions/lessons/${id}`)
      .then((res) => setQuestions(res.data))
      .catch((error) => console.log(error.message));
  }, [id]);

  function calculatedScore() {
    let correctAnswers = selectedAnswers.filter((selectedAnswer, index) => {
      return selectedAnswer.is_correct;
    });
    return correctAnswers.length;
  }

  function restartQuiz() {
    setCurrentQuestion(0);
    setShowTotalScore(false);
    window.location=`/questions/lessons/${id}`;
  }

  function choiceClicked(ans) {
    console.log("ans", selectedAnswers);
    let newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestion] = ans;
    setSelectedAnswers(newSelectedAnswers);
 
  }

  return (
    <div style={{ margin: "40px" }}>
      <h2 className="question-number">
        Question: {currentQuestion + 1}/{questions.length}
        <span className="score" style={{ color: "tomato" }}>
          Score: {calculatedScore()}
        </span>
      </h2>

      {showTotalScore ? (
        <div className="total-score">
          <h1 style={{ color: "tomato", textAlign: "center" }}>
            Quiz Ended! You Scored {calculatedScore()} Out Of {questions.length}
          </h1>
          <button onClick={() => restartQuiz()} className="restart-button">
            Restart the game
          </button>
        </div>
      ) : (
        <div className="question-card">
          {questions && (
            <>
              <h3 className="question">{questions[currentQuestion]?.question}</h3>
              <img src={questions[currentQuestion]?.image} alt="" />
              <ul className="choices">
                {questions[currentQuestion]?.answers.map((ans) => {
                  return (
                    <li
                      className="choice"
                      key={ans.id}
                      onClick={() => choiceClicked(ans)}
                      style={{
                        background: 
                        selectedAnswers[currentQuestion]?.id === ans.id
                          ? "skyblue"
                          : "white",
                      }}
                    >
                      {ans?.answer}
                    </li>
                  );
                })}
              </ul>
            </>
          )}

          <NextQuestionButton
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            questions={questions}
            setShowTotalScore={setShowTotalScore}
            disabled={selectedAnswers[currentQuestion] === undefined}
          />
        </div>
      )}
      {/* <div>
        {isTeacher && (
          <button className="btn-1" onClick={() => deleteQuestion()}>
            Delete
          </button>
        )}
      </div> */}
    </div>
  );
};

export default Quiz;
