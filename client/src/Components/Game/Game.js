import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Theme from '../Theme/Theme';

function Game() {

  const dispatch = useDispatch()
  const gameTable = useSelector(state => state.gameReducer.game); // возможно данные тут

  // useEffect(() => {
  //   fetch("http://localhost:4000/cardList")
  //     .then(response => response.json())
  //     .then(data => dispatch({ type: "INIT_GAME", payload: gameTable }))
  // }, []);

  const some = [{ id: 1, questions: [{id: 1}], name: 'Some' }]


  return (
    <div className='block_container'>
      <h1 style={{marginBottom: '10px'}}>Good luck, dude!</h1>
      <h1 style={{marginBottom: '30px'}}>Scores: {}</h1>
      <table className="table table-dark">
        <tbody>
         {some.map(theme => <Theme key={theme.id} questions={theme.questions} name={theme.name} />)}
        </tbody>
      </table>
    </div>
  )
}

export default Game;
