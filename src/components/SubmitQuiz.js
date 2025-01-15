import React from "react";
// import PropTypes from "prop-types";

function QuizResult(props) {
  const { quiz } = props;

  function handleNewQuizResultFormSubmission(event) {
    event.preventDefault();
    props.onNewQuizResult({
      answer1: event.target.answer1.value,
      answer2: event.target.answer2.value,
      answer3: event.target.answer3.value,
      answer4: event.target.answer4.value,
      answer5: event.target.answer5.value,
      connectedQuiz: quiz.id,
    });
  }

  return (
    <>
    <h1>{ quiz.name }</h1>
      <form onSubmit={handleNewQuizResultFormSubmission}>
        <p>{ quiz.question1 }</p>
        <input
          type="text"
          name="answer1"
          placeholder="Answer 1"
        />
        <p>{ quiz.question2 }</p>
        <input
          type="text"
          name="answer2"
          placeholder="Answer 2"
        />
        <p>{ quiz.question3 }</p>
        <input
          type="text"
          name="answer3"
          placeholder="Answer 3"
        />
        <p>{ quiz.question4 }</p>
        <input
          type="text"
          name="answer4"
          placeholder="Answer 4"
        />
        <p>{ quiz.question5 }</p>
        <input
          type="text"
          name="answer5"
          placeholder="Answer 5"
        />
        <button type="submit">Submit Quiz</button>
      </form>
    </>
  );
}

export default QuizResult;