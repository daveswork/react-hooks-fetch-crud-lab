import React, {useState, useEffect} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questionItemList}) {

  const questionItems = questionItemList.map((question, index) => {
    return <QuestionItem key={index} question={question}/>
  })

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionItems}</ul>
    </section>
  );
}

export default QuestionList;
