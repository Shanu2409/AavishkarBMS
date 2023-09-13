// StartAnA.js

import React, { useState } from "react";
import InputData from "./InputData";

function StartAnA() {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState([]);
  const questions = [
    {
      id: 1,
      text: "How is your day treating you?",
      options: ["bad", "good"],
    },
    {
      id: 2,
      text: "Do you need help?",
      options: ["maybe", "yes"],
    },
    {
      id: 3,
      text: "Are you under stress pressure?",
      options: ["maybe", "yes"],
    },
    {
      id: 4,
      text: "Want to make it better?",
      options: ["maybe", "yes"],
    },
  ];

  const handleAnswerSelect = (answer) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion - 1] = answer;
    setAnswers(newAnswers);

    // Logic to skip questions based on answers
    if (currentQuestion === 1 && answer === "good") {
      setCurrentQuestion(4); // Skip questions 2 and 3, go to question 4
    } else if (currentQuestion === 1 && answer === "bad") {
      setCurrentQuestion(2); // Go to question 2
    } else if (currentQuestion === 2) {
      setCurrentQuestion(3); // Go to question 3
    } else if (currentQuestion === 3) {
      // skip 4 and show the "Thank you" message
      setCurrentQuestion(-1);
    } else {
      // All questions answered or skipped, display "Thank you"
      setCurrentQuestion(-1);
    }
  };

  const restartQuestions = () => {
    setCurrentQuestion(1);
    setAnswers([]);
  };

  return (
    <div className="start-an-a">
      <h1 className="header">{currentQuestion !== -1 && "Questionnaire"}</h1>
      {currentQuestion > 0 ? (
        <>
          <p className="question">{questions[currentQuestion - 1].text}</p>
          {questions[currentQuestion - 1].options.map((option) => (
            <div key={option}>
              <input
                type="radio"
                id={option}
                name="answer"
                value={option}
                checked={answers[currentQuestion - 1] === option}
                onChange={() => handleAnswerSelect(option)}
              />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </>
      ) : (
        <div className="input-section">
          <InputData />
          <button onClick={restartQuestions} className="reset-button">
            Restart
          </button>
        </div>
      )}
    </div>
  );
}

export default StartAnA;
