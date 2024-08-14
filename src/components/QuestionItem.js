import React from "react";

function QuestionItem({ question, onDelete, updateCorrectAnswer }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDelete(){
    console.log(id)
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE"
    })
    .then((response)=> response.json())
    .then(()=> onDelete(id) )
  }

  function handleChange(event){
    const newCorrectAnswer = parseInt(event.target.value)
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({correctIndex: newCorrectAnswer})
    })
    .then((response) => response.json())
    .then(() => updateCorrectAnswer(id, newCorrectAnswer) )
    
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={handleChange} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
