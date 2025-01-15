import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <>
      <form onSubmit={props.formSubmissionHandler}>
      
        <input
          type="text"
          name="name"
          placeholder="Quiz Name"
        />

        <input
          type="text"
          name="question1"
          placeholder="Question 1"
        />
        <input
          type="text"
          name="answer1"
          placeholder="Answer 1"
        />

        <input
          type="text"
          name="question2"
          placeholder="Question 2"
        />
        <input
          type="text"
          name="answer2"
          placeholder="Answer 2"
        />

        <input
          type="text"
          name="question3"
          placeholder="Question 3"
        />
        <input
          type="text"
          name="answer3"
          placeholder="Answer 3"
        />

        <input
          type="text"
          name="question4"
          placeholder="Question 4"
        />
        <input
          type="text"
          name="answer4"
          placeholder="Answer 4"
        />

        <input
          type="text"
          name="question5"
          placeholder="Question 5"
        />
        <input
          type="text"
          name="answer5"
          placeholder="Answer 5"
        />
        <button type="submit">{props.buttonText}</button>
      </form>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;