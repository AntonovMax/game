import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import { store } from '../../redux/store'
import Header from '../Header/Header';
import SignUp from '../SignUp/SignUp';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Route path='/signe_up' component={SignUp} />
      </Router>
    </Provider>
  );
}

export default App;
