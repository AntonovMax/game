import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Game() {
  
  const dispatch = useDispatch()
  const gameTable = useSelector(state => state.gameReducer.game);
  
  useEffect(() => {
    fetch("http://localhost:4000")
    .then(response => response.json())
    .then(data => dispatch({type:"INIT_GAME", payload: gameTable}))
  }, []);
  

  return (
    <p>armen</p>
  )
}

export default Game;
