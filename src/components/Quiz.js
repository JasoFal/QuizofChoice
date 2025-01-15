import React from "react";
import PropTypes from "prop-types";

function Quiz(props) {
  return (
    <React.Fragment>
      <div onClick= {() => props.whenQuizClicked(props.id)}>
        <h3>{props.name}:</h3>
        <p><em>Question 1: {props.question1}</em></p>
        <p><em>Question 2: {props.question2}</em></p>
        <p><em>Question 3: {props.question3}</em></p>
        <p><em>Question 4: {props.question4}</em></p>
        <p><em>Question 5: {props.question5}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Quiz.propTypes = {
  name: PropTypes.string,
  question1: PropTypes.string,
  question2: PropTypes.string,
  question3: PropTypes.string,
  question4: PropTypes.string,
  question5: PropTypes.string,
  id: PropTypes.string,
  whenQuizClicked: PropTypes.func
};

export default Quiz;