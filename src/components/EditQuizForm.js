import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditQuizForm (props) {
  const { quiz } = props;

  function handleEditQuizFormSubmission(event) {
    event.preventDefault();
    props.onEditQuiz({
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
      id: quiz.id
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditQuizFormSubmission}
        buttonText = "Update Quiz"
      />
    </React.Fragment>
  );
}

EditQuizForm.propTypes = {
  quiz: PropTypes.object,
  onEditQuiz: PropTypes.func
};

export default EditQuizForm;