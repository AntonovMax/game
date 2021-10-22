import './Header.css'
import { Link } from 'react-router-dom'

function Header(props) {

  const user = 1

  return (
      <div className='navContainer'>
        {
          user ?
          <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link className="nav-link" to="/">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/game">Game</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signe_up">Sign Up</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/log_in">Log In</Link>
          </li>
        </ul> 
        : 
        null
        }
        
      </div>
  );
}

export default Header;
