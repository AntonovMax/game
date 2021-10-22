import React from 'react';
import Question from '../Question/Question';

function Theme({ name, questions }) {
  return (
    
      <tr>
        <td key={name}>{name}</td>
        {questions.map(question => <Question key={question.id} question={question}/>)}
        {/* <td key={name}>{name}</td>
        <td key={questions[0].id}>200</td>
        <td key={questions[0].id}>200</td>
        <td key={questions[0].id}>200</td>
        <td key={questions[0].id}>200</td>
        <td key={questions[0].id}>200</td> */}
      </tr>
  );
}

export default Theme;
