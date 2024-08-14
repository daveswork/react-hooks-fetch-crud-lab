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

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onSubmitHandler={addNewQuestion} /> : <QuestionList questionItemList={questionItemList} />}
    </main>
  );
}

export default App;
