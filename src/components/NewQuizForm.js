import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewQuizForm(props) {

  function handleNewQuizFormSubmission(event) {
    event.preventDefault();
    props.onNewQuizCreation({
      name: event.target.name.value,
      question1: event.target.question1.value,
      answer1: event.target.answer1.value,
      question2: event.target.question2.value,
      answer2: event.target.answer2.value,
      question3: event.target.question3.value,
      answer3: event.target.answer3.value,
      question4: event.target.question4.value,
      answer4: event.target.answer4.value,
      question5: event.target.question5.value,
      answer5: event.target.answer5.value,
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewQuizFormSubmission}
        buttonText="Add Quiz"
      />
    </React.Fragment>
  );
}

NewQuizForm.propTypes = {
  onNewQuizCreation: PropTypes.func
};

export default NewQuizForm;