
import React, { useRef } from 'react';
// import styles from './Registration.module.css'//Проверить
import { useHistory } from 'react-router-dom'

function SignUp(props) {

  const inputuserName = useRef(null);
  const inputPassword = useRef(null);
  const history = useHistory();

  const handlerForm = async (event) => {
    event.preventDefault();
    const userName = inputuserName.current.value;
    const password = inputPassword.current.value;
    console.log(userName, password);
    const response = await fetch('http://localhost:4000/registration', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ userName, password })
    });
    const data = await response.json();
    if (data.message) {
      history.push('/game')
      /// заменить на history push ()
    } else {
      alert('Неверные данные')
    }
  };

  return (

    <>
      {/* <div className={styles.container}> */}
      <div>
        <h1>
          Registration
        </h1>
        <form onSubmit={handlerForm}>
          <div className="uk-margin">
            <input ref={inputuserName} className="uk-input" type="text" placeholder="input userName" />
          </div>
          <div className="uk-margin">
            <input ref={inputPassword} className="uk-input" type="password" placeholder="input Password" />
          </div>
          <button className="uk-button uk-button-default">Submit</button>
        </form>
      </div>
    </>

  );
}

export default SignUp;

//************************************************************ */

// function SignUp(props) {

//   // const [name, setName] = useState('edd')
//   // const [pass, setPass] = useState('ssx')

//   const handlerSubmit = (event) => {
//     event.preventDefault()


//     fetch('localhost:4000/registration', {
//       method: 'post',
//       headers: {
//         'Content-Type' : 'application/json'
//       },
//       body: JSON.stringify({
//         name: event.target.name.value,
//         password: event.target.password.value
//       })
//     }).then(response => { // здесь прописать условие если пользователь есть
//       if (response.message){
//         window.location.href = '/game'
//       }
//       else alert('Зарегистрируйтесь!')
//     })
//   }


//   return (
//     <div className='block_container'>
//       <form onSubmit={handlerSubmit}>
//         <div className="mb-3">
//           <input type="text"   className="form-control" id="nameInput" name='name' aria-describedby="emailHelp" placeholder='Enter your name' />
//           <div id="emailHelp" className ="form-text">Your name must be uniq</div>
//         </div>
//         <div className="mb-3">
//           <input type="password"  name="password" className="form-control" id="exampleInputPassword1" placeholder='Enter your password'/>
//         </div>
//         <button type="submit" className="btn btn-primary own_button">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default SignUp;
