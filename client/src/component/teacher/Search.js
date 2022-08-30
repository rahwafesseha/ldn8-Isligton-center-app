import React from "react";
import "./addQuestion.css";

function Search({ lessons, setLessons, allLessons }) {
  const searchedLesson = (inputSearch) => {
   return lessons.filter((lesson) =>
      lesson.title.toLowerCase().includes(inputSearch.toLowerCase())
    );
  };

  return (
    <div>
      <input
        className="search"
        type="text"
        style={{maxWidth:"25%", marginRight:"1px"}}
        placeholder="Search here..."
        onChange={(event) => {
          setLessons(
            event.target.value.length > 0
              ? searchedLesson(event.target.value)
              : allLessons
          );
        }}
      ></input>
    </div>
  );
}

export default Search;
