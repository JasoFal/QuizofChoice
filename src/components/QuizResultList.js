import React from "react";
import PropTypes from "prop-types";
import QuizResult from "./QuizResult";

function QuizResultList(props) {
  return (
    <>
      <hr/>
      {Object.values(props.quizResultList).map((quizResult) => 
        <QuizResult
          answer1={quizResult.answer1}
          answer2={quizResult.answer2}
          answer3={quizResult.answer3}
          answer4={quizResult.answer4}
          answer5={quizResult.answer5}
          id={quizResult.id}
          key={quizResult.id}
        />
      )}
    </>
  );
}

QuizResultList.propTypes = {
  quizResultList: PropTypes.object
};

export default QuizResultList;