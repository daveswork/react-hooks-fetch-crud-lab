import React, {useState, useEffect} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questionItemList, setQuestionItemList] = useState([])

  useEffect(()=>{
    fetch("http://localhost:4000/questions")
    .then(response => response.json())
    .then(questions => setQuestionItemList(questions))

  }, [])

  const questionItems = questionItemList.map(question => {
    return <QuestionItem key={question.id} question={question}/>
  })

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionItems}</ul>
    </section>
  );
}

export default QuestionList;
