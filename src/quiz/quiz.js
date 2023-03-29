import React, { useRef, useState } from "react";
import styles from "./Quiz.module.css";

function Quiz({ Question, Options, cAnswer, Flag, handleSubmit }) {
  let result = useRef(0);
  function handleRadioBtn(e) {
    let tempValue = e.target.value;
    if (Number(cAnswer) == tempValue) {
      result.current = result.current + 1;
    }

    handleSubmit(result.current);
  }

  return (
    <div>
      <h1>{Question}</h1>
      {Options.map((element, index) => {
        return (
          <div key={index}>
            <input
              type="radio"
              value={index + 1}
              onChange={handleRadioBtn}
              name="question"
            />
            <label>{element.option}</label>
          </div>
        );
      })}

      <p>{cAnswer}</p>
    </div>
  );
}

export default Quiz;
