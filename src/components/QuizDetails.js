import PropTypes from "prop-types";
import React, { useState, useEffect } from 'react';
import { collection, onSnapshot, where, query } from "firebase/firestore";
import { db } from './../firebase.js'
import QuizResultList from "./QuizResultList.js";

function QuizDetail(props) {
  const { quiz, onClickingDelete } = props;
  const [ quizResultList, setQuizResultList ] = useState([]);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    const quizResultsQuery = query(
      collection(db, "quizResults"),
      where("connectedQuiz", "==", quiz.id)
    );

    const unSubscribe = onSnapshot(
      quizResultsQuery, (querySnapshot) => {
        const quizResults = [];
        querySnapshot.forEach((doc) => {
          quizResults.push({
            ...doc.data(),
            id: doc.id
          });
        });
        setQuizResultList(quizResults);
      },
      (error) => {
        setError(error.message);
      }
    );
    return () => unSubscribe();
  }, [quiz.id]);

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
      { error ? (<p>{error}</p>) : <QuizResultList quizResultList={ quizResultList }/> }
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