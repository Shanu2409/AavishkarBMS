import React, { Component } from "react";
import questionsData from "../data/QnA.json";
import StartAnA from "./StartAnA";

class FeedbackForm extends Component {
  render() {
    return (
      <div className="feedback-form">
        <StartAnA />
      </div>
    );
  }
}

export default FeedbackForm;
