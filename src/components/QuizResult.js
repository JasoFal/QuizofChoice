import React from "react";
import PropTypes from "prop-types";

function QuizResult(props) {
  return (
    <>
      <div className="quizResult">
        <p><em>Answer 1: {props.answer1}</em></p>
        <p><em>Answer 2: {props.answer2}</em></p>
        <p><em>Answer 3: {props.answer3}</em></p>
        <p><em>Answer 4: {props.answer4}</em></p>
        <p><em>Answer 5: {props.answer5}</em></p>
        <hr/>
      </div>
    </>
  );
}

QuizResult.propTypes = {
  answer1: PropTypes.string,
  answer2: PropTypes.string,
  answer3: PropTypes.string,
  answer4: PropTypes.string,
  answer5: PropTypes.string
};

export default QuizResult;