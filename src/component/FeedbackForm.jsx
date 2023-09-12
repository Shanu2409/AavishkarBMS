import React, { Component } from "react";
import questionsData from "../data/QnA.json";
import StartAnA from "./StartAnA";

class FeedbackForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: questionsData,
      currentQuestionIndex: 0,
      userAnswers: [],
      showThankYou: false,
      showCongratulations: false,
    };
  }

  handleAnswerSelect = (selectedOption) => {
    const { questions, currentQuestionIndex, userAnswers } = this.state;
    const currentQuestion = questions[currentQuestionIndex];

    // Check if the selected option is correct
    if (selectedOption === currentQuestion.Answer) {
      userAnswers.push(true);
    } else {
      userAnswers.push(false);
      this.setState({ showThankYou: true });
      return; // Stop further questions on wrong answer
    }

    // Move to the next question or show congratulations
    if (currentQuestionIndex < questions.length - 1) {
      this.setState((prevState) => ({
        currentQuestionIndex: prevState.currentQuestionIndex + 1,
      }));
    } else {
      this.setState({ showCongratulations: true });
    }
  };

  handleRestart = () => {
    this.setState({
      currentQuestionIndex: 0,
      userAnswers: [],
      showThankYou: false,
      showCongratulations: false,
    });
  };

  render() {
    const {
      questions,
      currentQuestionIndex,
      showThankYou,
      showCongratulations,
    } = this.state;

    return (
      <div className="feedback-form">
        <StartAnA />
      </div>
    );
  }
}

export default FeedbackForm;
