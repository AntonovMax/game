// import React, { useRef } from 'react';
// import styles from './Login.module.css'
// import { useDispatch } from 'react-redux'
// import { LOGIN } from '../../redux/actionTypes/actionTypes';
// import { useHistory } from 'react-router-dom'

// function Login(props) {
//   const history = useHistory();

//   const dispatch = useDispatch();
//   const inputuserName = useRef(null);
//   const inputPassword = useRef(null);

//   const handlerForm = async (event) => {
//     event.preventDefault();
//     const userName = inputuserName.current.value;
//     const password = inputPassword.current.value;

//     const response = await fetch('http://localhost:4000/login', {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       credentials: "include",
//       body: JSON.stringify({ userName, password })
//     });
//     const data = await response.json();
//     if (data.message) {
//       history.push('/');
//       /// заменить на history push ()
//       dispatch({ type: LOGIN, payload: true })
//     } else {
//       alert('Неверные данные')
//     }
//   };

//   return (
//     <>
//       <div className={styles.container}>
//         <h1>
//           Login
//         </h1>
//         <form onSubmit={handlerForm}>
//           <div className="uk-margin">
//             <input ref={inputuserName} className="uk-input" type="text" placeholder="Input userName" />
//           </div>
//           <div className="uk-margin">
//             <input ref={inputPassword} className="uk-input" type="password" placeholder="Input Password" />
//           </div>
//           <button className="uk-button uk-button-default">Submit</button>
//         </form>
//       </div>
//     </>
//   );
// }

// export default Login;


//************************************************************* */

function SignIn() {

  const handlerSubmit = (event) => {
    event.preventDefault()

    fetch('localhost:4000/login', {
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
          <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder='Enter your password'/>
        </div>
        <button type="submit" className="btn btn-primary own_button">Submit</button>
      </form>
    </div>
  )
}

export default SignIn
