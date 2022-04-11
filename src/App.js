import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/Home';
import Checkout from './Checkout/Checkout';

function App() {
  return (
    // BEM
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route path='/' exact><Home /></Route>
          <Route path='/checkout'><Checkout /></Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
