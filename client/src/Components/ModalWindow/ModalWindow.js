import React from 'react'
import { useState } from 'react'
import './ModalWindow.css'
import xrest from './xrest.svg'

function ModalWindow({ question, openModal, setOpenModal }) {

  const [result, setResult] = useState(null);

  function handlePopup(event) {
    event.preventDefault();

    const userText = event.target.modal.value;
    console.log(question.answer)

    console.log(userText)

    if (userText.toLowerCase() === question.answer.toLowerCase()) {
      setResult('yes');
    } else {
      setResult('no')
    }
  }

  return (
    <div className='modal_container'>
      <form onSubmit={handlePopup}>
        <img onClick={() => setOpenModal(false)} style={{width: 30, height: 30}} src={xrest} alt="xrest" />
        <p className="user_text">{question.question}</p>
        <div className="mb-3">
          <input type="text" className="form-control" name='modal' placeholder='Enter your answer' />
        </div>
        <button type="submit" className="btn btn-primary own_button">Submit</button>
        {
          result === 'yes' ? <p>Правильно</p> : result === 'no' ? <p>Неправильно: {question.answer}</p> : ''
        }
      </form>
    </div>
  )
}

export default ModalWindow;
