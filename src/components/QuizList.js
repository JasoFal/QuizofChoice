import React from "react";
import Quiz from "./Quiz";
import PropTypes from "prop-types";

function QuizList(props) {
  return (
    <React.Fragment>
      <hr/>
      {Object.values(props.quizList).map((quiz) =>
        <Quiz
          whenQuizClicked = { props.onQuizSelection }
          name={quiz.name}
          question1={quiz.question1}
          question2={quiz.question2}
          question3={quiz.question3}
          question4={quiz.question4}
          question5={quiz.question5}
          id={quiz.id}
          key={quiz.id}
        />
      )}
    </React.Fragment>
  );
} 

QuizList.propTypes = {
  quizList: PropTypes.object,
  onQuizSelection: PropTypes.func
};

export default QuizList;