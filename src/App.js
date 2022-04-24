import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/Home';
import Checkout from './Checkout/Checkout';
import Login from './Login/Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // 'blank' square bracket below: it will only run once when the App component loads

    auth.onAuthStateChanged(authUser => {
      console.log('Authenticated User: ', authUser);

      if(authUser) 
      {
        // logged in session exists
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      }
      else 
      {
        // session logged out
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    })

  }, [])

  return (
    // BEM
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route path='/' exact><Home /></Route>
          <Route path='/checkout'><Checkout /></Route>
          <Route path='/login'><Login /></Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
