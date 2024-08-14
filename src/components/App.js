import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");

  const [questionItemList, setQuestionItemList] = useState([])

  useEffect(()=>{
    fetch("http://localhost:4000/questions")
    .then(response => response.json())
    .then(questions => setQuestionItemList(questions))

  }, [])

  function addNewQuestion(newQuestion){
    setQuestionItemList([...questionItemList, newQuestion])
  }

  function removeQuestion(questionId){
    const updatedQuestionList = questionItemList.filter(question =>{
      return question.id != questionId
    })
    setQuestionItemList(updatedQuestionList)
  }

  function updateCorrectAnswer(id, newAnswer){
    const newQuestionList = questionItemList.map(question => {
      if(question.id === id){
        question.correctIndex = newAnswer
        return question
      } else {
        return question
      }
    })
    setQuestionItemList(newQuestionList)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onSubmitHandler={addNewQuestion} /> : <QuestionList questionItemList={questionItemList} onDelete={removeQuestion} updateCorrectAnswer={updateCorrectAnswer}/>}
    </main>
  );
}

export default App;
