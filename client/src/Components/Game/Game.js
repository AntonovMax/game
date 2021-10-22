import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Theme from '../Theme/Theme';

function Game() {

  const dispatch = useDispatch()
  const gameTable = useSelector(state => state.gameReducer.game); // возможно данные тут


  // const response = async () => {
  //   const request = await fetch("http://localhost:4000/cardList")
  //     // .then(response => response.json())
  //     // .then(data => dispatch({ type: "INIT_GAME", payload: gameTable }))
  //   const arr = await request.json()
  //   console.log(arr, '###################');

  //   return arr
  // }

  // const arrDB = response()

  useEffect(() => {
    fetch("http://localhost:4000/cardList")
      .then(response => response.json())
      .then(data => dispatch({ type: "INIT_GAME", payload: data }))
  }, []);


  return (
    <div className='block_container'>
      <h1 style={{ marginBottom: '10px' }}>Good luck, dude!</h1>
      <h1 style={{ marginBottom: '30px' }}>Scores: { }</h1>
      <table className="table table-dark">
        <tbody>
          {gameTable.map((theme) => <Theme key={theme.id} questions={theme.Questions} name={theme.name} />)}
        </tbody>
      </table>
    </div>
  )
}

export default Game;
