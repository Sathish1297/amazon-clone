import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Login from './components/Login';
import Checkout from './components/Checkout';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/register'>
            <Register />
          </Route>

          <Route path='/'>
            <Header />
            <Home />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
