import React from 'react';

function SignUp(props) {

  const handlerSubmit = (event) => {
    event.preventDefault()

    fetch('localhost:4000/registration', {
      method: 'post',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        name: event.target.name.value,
        password: event.target.password.value
      })
    }).then(response => { // здесь прописать условие если пользователь есть
      
    })
  }

  return (
    <div className='block_container'>
      <form onSubmit={handlerSubmit}>
        <div class="mb-3">
          <input type="email" className="form-control" id="nameInput" name='name' aria-describedby="emailHelp" placeholder='Enter your name' />
          <div id="emailHelp" className ="form-text">Your name must be uniq</div>
        </div>
        <div class="mb-3">
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter your password'/>
        </div>
        <button type="submit" className="btn btn-primary own_button">Submit</button>
      </form>
    </div>
  );
}

export default SignUp;
