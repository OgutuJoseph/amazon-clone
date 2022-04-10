import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    // BEM
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact>
            <Header />
            <Home />
          </Route>
          <Route path='/checkout'>
            <Header /> 
            <h1>I am Checkout</h1>
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
