import React, { useState, useEffect } from 'react';
import NewQuizForm from './NewQuizForm';
import QuizList from './QuizList';
import EditQuizForm from './EditQuizForm';
import QuizDetail from './QuizDetails';
import QuizResult from './SubmitQuiz.js';
import { db } from './../firebase.js'
import { collection, addDoc, doc, updateDoc, onSnapshot, deleteDoc } from "firebase/firestore";


function QuizControl() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainQuizList, setMainQuizList] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState(null);
  const [takingQuiz, setTakingQuiz] = useState(false);

  useEffect(() => {
    const unSubscribe = onSnapshot(
      collection(db, "quizzes"),
      (collectionSnapshot) => {
        const quizzes = [];
        collectionSnapshot.forEach((doc) => {
          quizzes.push({
            ...doc.data(),
            id: doc.id
          });
        });
        setMainQuizList(quizzes);
      },
      (error) => {
        setError(error.message);
      }
    );
    return () => unSubscribe();
  }, []);

  const handleClick = () => {
    if (selectedQuiz != null) {
      setFormVisibleOnPage(false);
      setSelectedQuiz(null);
      setEditing(false);
    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
    }
  }

  const handleDeletingQuiz = async (id) => {
    await deleteDoc(doc(db, "quizzes", id));
    setSelectedQuiz(null);
  }

  const handleEditClick = () => {
    setEditing(true);
  }

  const handleTakingQuizClick = () => {
    setTakingQuiz(true);
  }

  const handleEditingQuizInList = async (quizToEdit) => {
    const quizRef = doc(db, "quizzes", quizToEdit.id);
    await updateDoc(quizRef, quizToEdit);
    setEditing(false);
    setSelectedQuiz(null);
  }

  const handleAddingNewQuizToList = async (newQuizData) => {
    await addDoc(collection(db, "quizzes"), newQuizData);
    setFormVisibleOnPage(false);
  }

  const handleAddingNewQuizResult = async (newQuizResultData) => {
    await addDoc(collection(db, "quizResults"), newQuizResultData);
    setTakingQuiz(false);
  }

  const handleChangingSelectedQuiz = (id) => {
    const selection = mainQuizList.filter(quiz => quiz.id === id)[0];
    setSelectedQuiz(selection);
  }

  let currentlyVisibleState = null;
  let buttonText = null;

  if (error) {
    currentlyVisibleState = <p>There was an error: {error}</p>
  } if (editing) {
    currentlyVisibleState =
      <EditQuizForm
        quiz={selectedQuiz}
        onEditQuiz={handleEditingQuizInList} />
    buttonText = "Return to Quiz List"
  } else if (takingQuiz) {
    currentlyVisibleState =
      <QuizResult
        quiz={selectedQuiz}
        onNewQuizResult={handleAddingNewQuizResult} />
  } else if (selectedQuiz != null) {
    currentlyVisibleState =
      <QuizDetail
        quiz={selectedQuiz}
        onClickingDelete={handleDeletingQuiz}
        onClickingEdit={handleEditClick}
        onTakingQuiz={handleTakingQuizClick} />
    buttonText = "Return to Quiz List"
  } else if (formVisibleOnPage) {
    currentlyVisibleState =
      <NewQuizForm
        onNewQuizCreation={handleAddingNewQuizToList} />;
    buttonText = "Return to Quiz List";
  } else {
    currentlyVisibleState =
      <QuizList
        onQuizSelection={handleChangingSelectedQuiz}
        quizList={mainQuizList} />;
    buttonText = "Add Quiz";
  }

  return (
    <React.Fragment>
      {currentlyVisibleState}
      {error ? null : <button onClick={handleClick}>{buttonText}</button>}
    </React.Fragment>
  );
}

export default QuizControl;

