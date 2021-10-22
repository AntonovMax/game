import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import { store } from '../../redux/store'
import Header from '../Header/Header';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';
import Game from '../Game/Game';
import ModalWindow from '../ModalWindow/ModalWindow';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Route path='/' component={ModalWindow} />
        <Route path='/signe_up' component={SignUp} />
        <Route path='/signe_in' component={SignIn} />
        <Route path='/game' component={Game} />
        <Route path='/log_in' component={SignIn} />
      </Router>
    </Provider>
  );
}

export default App;
