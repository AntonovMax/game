import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Question({ question }) {

  return (
    <td key={question.id} style={{ cursor: 'pointer' }} id={question.id}>200</td>
  );
}

export default Question;
