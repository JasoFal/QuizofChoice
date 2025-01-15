import React from "react";
import PropTypes from "prop-types";

function QuizDetail(props) {
  const { quiz, onClickingDelete } = props;

  useEffect(() => {
    const unSub = onSnapshot(
      collection(db, "quizResults"),
      where("connectedQuiz", "==", selectedQuiz.id)
        (collectionSnapshot) => {
      const quizResults = [];
      collectionSnapshot.forEach((doc) => {

      });
    );


  return (
    <React.Fragment>
      <h1>Quiz Detail</h1>
      <p>{quiz.name}</p>
      <p>{quiz.question1}</p>
      <p>{quiz.question2}</p>
      <p>{quiz.question3}</p>
      <p>{quiz.question4}</p>
      <p>{quiz.question5}</p>
      <button onClick={props.onTakingQuiz}>Take Quiz</button>
      <button onClick={props.onClickingEdit}>Update Quiz</button>
      <button onClick={() => onClickingDelete(quiz.id)}>Delete Quiz</button>
      <hr />

      <h1>Quiz Results</h1>
    </React.Fragment>
  );
}

QuizDetail.propTypes = {
  quiz: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onTakingQuiz: PropTypes.func
};

export default QuizDetail;