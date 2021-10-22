import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import ModalWindow from '../ModalWindow/ModalWindow';


function Question({ question }) {

  const [openModal, setOpenModal] = useState(false)
  return (
    <>
    <td onClick={() => setOpenModal(true)} key={question.id} style={{ cursor: 'pointer' }} id={question.id}>{question.price}</td>
    {
      openModal && <ModalWindow question={question} openModal={openModal} setOpenModal={setOpenModal}/>
    }
    </>
  );
}

export default Question;
