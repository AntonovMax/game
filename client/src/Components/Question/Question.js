import React from 'react';
import { useState } from 'react';
import ModalWindow from '../ModalWindow/ModalWindow';

function Question({ question }) {

  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <td style={{ cursor: 'pointer' }} >200</td>
      {
          
        openModal && <ModalWindow question={question} openModal={openModal} setOpenModal={setOpenModal}/>
        
      }
    </>
  );
}

export default Question;
