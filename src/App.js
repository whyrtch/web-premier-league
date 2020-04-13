import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import reduxStore from './redux/store';
import Header from "./component/Header";
import Team from "./page/Team";
import Home from "./page/Home";

function App() {
  return (
      <Provider store={reduxStore}>
          <Header/>
          <Router>
              <Switch>
                  <Route exact path={"/"} component={Home}/>
                  <Route exact path={"/team"} component={Team}/>
              </Switch>
          </Router>
      </Provider>
  );
}

export default App;
