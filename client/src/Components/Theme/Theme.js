import React from 'react';
import Question from '../Question/Question';

function Theme({ name, questions }) {
  return (
    
      <tr>
        <td key={name}>{name}</td>
        {questions.map(question => <Question key={question.id} question={question}/>)}
      </tr>
  );
}

export default Theme;
